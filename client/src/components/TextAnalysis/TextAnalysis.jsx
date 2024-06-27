import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadComponent = () => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const user = localStorage.getItem('token'); // Check if user is logged in

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setResult(null); // Reset result state when text changes
        setError(''); // Reset error state
        // Clear file input visually (no file chosen)
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const allowedExtensions = /\.(txt|docx|pdf)$/i;

        if (!allowedExtensions.test(selectedFile.name)) { // Check for unsupported file formats
            setError('Unsupported file format. Please upload a .txt, .docx, or .pdf file.');
            setFile(null);
            setResult(null); // Reset result state
        } else {
            setError('');
            setFile(selectedFile);
            setText('');
            setResult(null); // Reset result state
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!user) {
            // Redirect to login page or show a login prompt
            navigate('/login'); // Replace with your actual login route
            return;
        }

        if (!text.trim() && !file) {
            setError('Please enter text or select a file');
            setResult(null); // Reset result state
            return;
        }

        const formData = new FormData();
        formData.append('text', text);
        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await axios.post('http://localhost:5000/analyze', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setResult(response.data);
            setError('');
        } catch (error) {
            console.error('Error analyzing text:', error);
            setError('Error analyzing the text. Please try again.');
            setResult(null); // Reset result state
        }
    };

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'url(https://th.bing.com/th/id/R.a2801b3a0125c67e028ac6f1c0ece84a?rik=qfB5P9%2bKNc5LPg&pid=ImgRaw&r=0)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          
        }}>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: '0',
                zIndex: 2,
                padding:'5px'
            }}></div>

            <div style={{
                zIndex: 2,
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxWidth: '600px',
                width: '100%',
                padding:'10px'

            }}>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' , fontSize:'38px'}}>Content Authenticity Checker</h2>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text to analyze"
                        style={{
                            width: '100%',
                            minHeight: '150px',
                            padding: '10px',
                            fontSize: '16px',
                            borderRadius: '4px',
                            border: '1px solid #3bb19b',
                            borderWidth:'2px',
                            boxSizing: 'border-box',
                            opacity: '0.5',
                            
                        }}
                    />

                    <div style={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            ref={fileInputRef}
                        />
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button type="submit" style={{
                            padding: '10px 5px',
                            backgroundColor: '#3bb19b',
                            borderRadius:'4px',
                            color: 'white',
                            textAlign: 'center',
                            border: 'none',
                        }}>
                            Analyze Text
                        </button>
                    </div>
                </form>

                {error && <p style={{ color: 'white', textAlign: 'center', margin: '5px 0' ,backgroundColor:'#f34646',
	padding: '15px', borderRadius:'5px'}}>{error}</p>}
                
                {result && (
                    <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        
                    }}>
                        <h2 style={{ marginBottom: '10px', textAlign: 'center', color: '#333' }}>Analysis Result</h2>
                        <p style={{ marginBottom: '8px' }}>Number of Words: {result.num_words}</p>
                        <p style={{ marginBottom: '8px' }}>Number of Sentences: {result.num_sentences}</p>
                        <p style={{ marginBottom: '8px' }}>Number of Paragraphs: {result.num_paragraphs}</p>
                        <p style={{ marginBottom: '8px' }}>Original Text:</p>
                        <p style={{
                            whiteSpace: 'pre-wrap',
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #3bb19b',
                            color: 'black',
                            opacity:'0.7',
                        }}>{result.original_text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadComponent;
