// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadComponent = () => {
//     const [text, setText] = useState('');
//     const [file, setFile] = useState(null);
//     const [result, setResult] = useState(null);
//     const [error, setError] = useState('');

//     const handleTextChange = (event) => {
//         setText(event.target.value);
//     };

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         setFile(selectedFile);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
        
//         if (!text.trim() && !file) {
//             setError('Please enter text or select a file');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('text', text);
//         if (file) {
//             formData.append('file', file);
//         }

//         try {
//             const response = await axios.post('http://localhost:5000/analyze', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             setResult(response.data);
//             setError('');
//         } catch (error) {
//             console.error('Error analyzing text:', error);
//             setError('Error analyzing the text. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <textarea value={text} onChange={handleTextChange} placeholder="Enter text to analyze" />
//                 <input type="file" onChange={handleFileChange} />
//                 <button type="submit">Analyze Text</button>
//             </form>

//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {result && (
//                 <div>
//                     <h2>Analysis Result:</h2>
//                     <p>Number of Words: {result.num_words}</p>
//                     <p>Number of Sentences: {result.num_sentences}</p>
//                     <p>Number of Paragraphs: {result.num_paragraphs}</p>
//                     <p>Original Text:</p>
//                     <pre>{result.original_text}</pre>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default UploadComponent;
import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!text.trim() && !file) {
            setError('Please enter text or select a file');
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
        }
    };

    return (
        <div className="bg-gray-200 min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea 
                        value={text} 
                        onChange={handleTextChange} 
                        placeholder="Enter text to analyze" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                    <button 
                        type="submit" 
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Analyze Text
                    </button>
                </form>

                {error && <p className="text-red-500 mt-4">{error}</p>}
                {result && (
                    <div className="mt-4">
                        <h2 className="text-xl font-bold mb-2">Analysis Result:</h2>
                        <p>Number of Words: {result.num_words}</p>
                        <p>Number of Sentences: {result.num_sentences}</p>
                        <p>Number of Paragraphs: {result.num_paragraphs}</p>
                        <p className="mt-2 font-medium">Original Text:</p>
                        <pre className="bg-gray-100 p-2 rounded">{result.original_text}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UploadComponent;
