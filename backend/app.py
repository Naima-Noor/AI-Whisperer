from flask import Flask, request, jsonify
from flask_cors import CORS
import re
from docx import Document
import fitz
app = Flask(__name__)
CORS(app)  
from PyPDF2 import PdfReader  

app = Flask(__name__)
CORS(app)

def count_words(text):
    words = re.findall(r'\b\w+\b', text)
    return len(words)

def count_sentences(text):
    sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s', text)
    return len(sentences)


def count_paragraphs(text):
    paragraphs = re.split(r'\n\s*\n+', text.rstrip('\n'))
    return len(paragraphs)


def analyze_text_from_docx(docx_file):
    doc = Document(docx_file)
    text = ''
    for paragraph in doc.paragraphs:
        text += paragraph.text + '\n'
    return text

from PyPDF2 import PdfReader
import fitz  # PyMuPDF

def analyze_text_from_pdf(pdf_file):
    text = ''
    try:
        # Try PyPDF2 (PdfReader) for text extraction
        try:
            reader = PdfReader(pdf_file)
            for page_num in range(len(reader.pages)):
                page = reader.pages[page_num]
                page_text = page.extract_text()
                if page_text:
                    text += page_text + '\n\n'  # Add double newline for paragraphs
            return text.strip()
        except Exception as e:
            print(f"PyPDF2 failed: {e}")
        
        # Fallback to fitz (PyMuPDF) if PyPDF2 fails
        pdf_document = fitz.open(pdf_file)
        for page_num in range(len(pdf_document)):
            page = pdf_document.load_page(page_num)
            page_text = page.get_text()
            if page_text:
                text += page_text + '\n\n'  # Add double newline for paragraphs
        pdf_document.close()
        return text.strip()

    except Exception as e:
        print(f"Error processing PDF file: {e}")
        return ''



@app.route('/analyze', methods=['POST'])
def analyze_text():
    text = request.form.get('text')
    file = request.files.get('file')

    if not text and not file:
        return jsonify({"error": "No text or file provided"}), 400

    if text:
        content = text
    elif file:
        if file.filename.endswith('.txt'):
            content = file.read().decode('utf-8')
        elif file.filename.endswith('.docx'):
            content = analyze_text_from_docx(file)
        elif file.filename.endswith('.pdf'):
            content = analyze_text_from_pdf(file)
        else:
            return jsonify({"error": "Unsupported file format"}), 400

    num_words = count_words(content)
    num_sentences = count_sentences(content)
    num_paragraphs = count_paragraphs(content)

    result = {
        "num_words": num_words,
        "num_sentences": num_sentences,
        "num_paragraphs": num_paragraphs,
        "original_text": content
    }

    return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
