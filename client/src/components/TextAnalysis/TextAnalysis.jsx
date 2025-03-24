// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const UploadComponent = () => {
//     const [text, setText] = useState('');
//     const [file, setFile] = useState(null);
//     const [result, setResult] = useState(null);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const fileInputRef = useRef(null);
//     const [buttonText, setButtonText] = useState('Analyze Text');

//     const user = localStorage.getItem('token'); // Check if user is logged in

//     const handleTextChange = (event) => {
//         const newText = event.target.value;
//         setText(newText);
//         setResult(null); // Reset result state when text changes
//         setError(''); // Reset error state
//         if (fileInputRef.current) {
//             fileInputRef.current.value = '';
//         }
//     };

//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         const allowedExtensions = /\.(txt|docx|pdf)$/i;

//         if (!allowedExtensions.test(selectedFile.name)) { // Check for unsupported file formats
//             setError('Unsupported file format. Please upload a .txt, .docx, or .pdf file.');
//             setFile(null);
//             setResult(null); // Reset result state
//         } else {
//             setError('');
//             setFile(selectedFile);
//             setText('');
//             setResult(null); // Reset result state
//         }
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!user) {
//             // Redirect to login page or show a login prompt
//             navigate('/login');
//             return;
//         }

//         if (!text.trim() && !file) {
//             setError('Please enter text or select a file');
//             setResult(null); // Reset result state
//             return;
//         }
//         setButtonText('Processing...');

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
//             setButtonText('Analyze Text');
//         } catch (error) {
//             console.error('Error analyzing text:', error);
//             setError('Error analyzing the text. Please try again.');
//             setResult(null); // Reset result state
//             setButtonText('Analyze Text');
//         }
//     };

//     const calculatePercentages = (predictions) => {
//         const totalSentences = predictions.length;
//         const aiPredictions = predictions.filter(prediction => prediction === 1).length;
//         const humanPredictions = totalSentences - aiPredictions;

//         const aiPercentage = (aiPredictions / totalSentences) * 100;
//         const humanPercentage = (humanPredictions / totalSentences) * 100;

//         return {
//             aiPercentage: aiPercentage.toFixed(2),
//             humanPercentage: humanPercentage.toFixed(2),
//         };
//     };

//     const renderHighlightedText = (predictions_base, predictions_large, originalText) => {
//         if (!originalText || !predictions_base || !predictions_large) {
//             console.error("Missing data: originalText, predictions_base, or predictions_large is undefined.");
//             return <p>No text available for analysis.</p>;
//         }

//         const sentences = originalText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/); // Split by sentence-ending punctuation

//         return sentences.map((sentence, index) => {
//             let backgroundColor = 'transparent';
//             let color = '#333'; // Default text color

//             // Case when both models predict AI
//             if (predictions_base[index] === 1 && predictions_large[index] === 1) {
//                 backgroundColor = '#d4c6f1'; // Purple for both models
//                 color = '#333';
//             }
//             // Case when only the base model predicts AI
//             else if (predictions_base[index] === 1) {
//                 backgroundColor = '#f68b8b'; // Red for base model
//                 color = '#721c24';
//             }
//             // Case when only the large model predicts AI
//             else if (predictions_large[index] === 1) {
//                 backgroundColor = '#4fa8f9'; // Light blue for large model
//                 color = '#0c5460';
//             }

//             return (
//                 <span
//                     key={index}
//                     style={{
//                         backgroundColor: backgroundColor,
//                         color: color,
//                         padding: backgroundColor !== 'transparent' ? '3px' : '0',
//                         borderRadius: '3px',
//                     }}
//                 >
//                     {sentence + ' '}
//                 </span>
//             );
//         });
//     };

//     return (
//         <div style={{
//             position: 'relative',
//             minHeight: '100vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundImage: 'url(https://th.bing.com/th/id/R.a2801b3a0125c67e028ac6f1c0ece84a?rik=qfB5P9%2bKNc5LPg&pid=ImgRaw&r=0)',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             backgroundPosition: 'center',
//         }}>

//             <div style={{
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 opacity: '1',
//                 zIndex: 2,
//                 padding: '5px'
//             }}></div>

//             <div style={{
//                 zIndex: 2,
//                 borderRadius: '8px',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                 maxWidth: '800px',
//                 width: '100%',
//                 padding: '10px'
//             }}>

//                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
//                     <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333', fontSize: '38px' }}>Content Authenticity Checker</h2>
//                     <textarea
//                         value={text}
//                         onChange={handleTextChange}
//                         placeholder="Enter text to analyze"
//                         style={{
//                             width: '80%',
//                             minHeight: '180px',
//                             padding: '10px',
//                             fontSize: '16px',
//                             borderRadius: '4px',
//                             border: '1px solid #3bb19b',
//                             borderWidth: '2px',
//                             boxSizing: 'border-box',
//                             opacity: '0.5',
//                             margin: '0 auto'
//                         }}
//                     />

//                     <div style={{
//                         padding: '10px',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}>
//                         <input
//                             type="file"
//                             onChange={handleFileChange}
//                             ref={fileInputRef}
//                         />
//                     </div>

//                     <div style={{ textAlign: 'center' }}>
//                         <button type="submit" style={{
//                             padding: '10px 5px',
//                             backgroundColor: '#3bb19b',
//                             borderRadius: '4px',
//                             color: 'white',
//                             textAlign: 'center',
//                             border: 'none',
//                         }}>
//                             {buttonText}
//                         </button>
//                     </div>
//                 </form>

//                 {error && <p style={{ color: 'white', textAlign: 'center', margin: '5px 0', backgroundColor: '#f34646', padding: '15px', borderRadius: '5px' }}>{error}</p>}

//                 {result && (
//                     <div style={{
//                         marginTop: '20px',
//                         padding: '20px',
//                         borderRadius: '8px',
//                         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//                     }}>
//                         <h2 style={{ marginBottom: '10px', textAlign: 'center', color: '#3bb19b' }}>Analysis Result</h2>
//                         <p style={{ paddingLeft: '45px', textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Words: {result.num_words}</p>
//                         <p style={{ paddingLeft: '45px', textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Sentences: {result.num_sentences}</p>
//                         <p style={{ paddingLeft: '45px', textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Paragraphs: {result.num_paragraphs}</p>
//                         <br /><br />
//                         <h3 style={{ marginBottom: '20px', textAlign: 'center', color: '#333', fontWeight: 'bold', textDecoration: 'underline' }}>Content Analysis by base and large uncased models</h3>

//                         <div style={{
//                             marginBottom: '20px',
//                             marginLeft: '30px',
//                             display: 'grid',
//                             gridTemplateColumns: '1fr 1fr', // Two equal columns
//                             gap: '20px', // Space between columns
//                             paddingLeft: '20px'
//                         }}>
//                             <div>
//                                 <p style={{ color: '#f68b8b', fontSize: '18px', margin: '0 0 10px 0' }}>
//                                     <strong>Base Model Predictions:</strong>
//                                 </p>
//                                 <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
//                                     AI-generated: <span style={{ fontWeight: 'bold', color: '#f68b8b' }}>{calculatePercentages(result.predictions_base).aiPercentage}%</span>
//                                 </p>
//                                 <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
//                                     Human-written: <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>{calculatePercentages(result.predictions_base).humanPercentage}%</span>
//                                 </p>
//                             </div>

//                             <div>
//                                 <p style={{ color: '#4fa8f9', fontSize: '18px', margin: '0 0 10px 0' }}>
//                                     <strong>Large Model Predictions:</strong>
//                                 </p>
//                                 <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
//                                     AI-generated: <span style={{ fontWeight: 'bold', color: '#4fa8f9' }}>{calculatePercentages(result.predictions_large).aiPercentage}%</span>
//                                 </p>
//                                 <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
//                                     Human-written: <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>{calculatePercentages(result.predictions_large).humanPercentage}%</span>
//                                 </p>
//                             </div>
//                         </div>




//                         <h3 style={{ margin: '30px', textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>Highlighted Text</h3>
//                         <div style={{
//                             display: 'grid',
//                             gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
//                             gap: '10px', // Space between grid items
//                             margin: '10px 10px', // Optional: margin for spacing
//                         }}>
//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <span style={{
//                                     display: 'inline-block',
//                                     width: '10px', // Smaller circle size
//                                     height: '10px', // Smaller circle size
//                                     borderRadius: '50%',
//                                     backgroundColor: '#4fa8f9', // Color for Large Model
//                                     marginRight: '5px', // Adjusted spacing
//                                     marginLeft: '30px'
//                                 }}></span>
//                                 <span style={{ fontSize: '14px' }}>Large Model Predicted: AI Generated</span>
//                             </div>

//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <span style={{
//                                     display: 'inline-block',
//                                     width: '10px', // Smaller circle size
//                                     height: '10px', // Smaller circle size
//                                     borderRadius: '50%',
//                                     backgroundColor: '#f68b8b', // Color for Base Model
//                                     marginRight: '5px', // Adjusted spacing
//                                     marginLeft: '30px'
//                                 }}></span>
//                                 <span style={{ fontSize: '14px' }}>Base Model Predicted: AI Generated</span>
//                             </div>

//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <span style={{
//                                     display: 'inline-block',
//                                     width: '10px', // Smaller circle size
//                                     height: '10px', // Smaller circle size
//                                     borderRadius: '50%',
//                                     backgroundColor: '#d4c6f1', // Color for Both Models
//                                     marginRight: '5px', // Adjusted spacing
//                                     marginLeft: '30px'
//                                 }}></span>
//                                 <span style={{ fontSize: '14px' }}>Both Models Predicted: AI Generated</span>
//                             </div>

//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 <span style={{
//                                     display: 'inline-block',
//                                     width: '10px', // Smaller circle size
//                                     height: '10px', // Smaller circle size
//                                     borderRadius: '50%',
//                                     backgroundColor: 'white', // Color for Human Generated
//                                     border: '1px solid #ccc', // Optional: add a border for better visibility
//                                     marginRight: '5px', // Adjusted spacing
//                                     marginLeft: '30px'
//                                 }}></span>
//                                 <span style={{ fontSize: '14px' }}>Both Models Predicted: Human Generated</span>
//                             </div>
//                         </div>

//                         <div style={{ margin: '15px', backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '4px', fontSize: '15px' }}>
//                             {renderHighlightedText(result.predictions_base, result.predictions_large, result.original_text)}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UploadComponent;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import html2pdf from 'html2pdf.js';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UploadComponent = () => {
    const [text, setText] = useState('');
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [buttonText, setButtonText] = useState('Analyze Text');
    const user = localStorage.getItem('token'); // Check if user is logged in
    const [chartWidth, setChartWidth] = useState(250);  // Default width of 500px
    const [chartHeight, setChartHeight] = useState(250); // Default height of 400px

    // Define the htmlContentRef
    const htmlContentRef = useRef(null);

    const renderBarChart = (predictions, modelType) => {
        const percentages = calculatePercentages(predictions);
        const data = {
            labels: ['AI-generated', 'Human-written'],
            datasets: [{
                label: `${modelType} Model Predictions`,
                data: [percentages.aiPercentage, percentages.humanPercentage],
                backgroundColor: modelType === 'Base' ? '#f68b8b' : '#4fa8f9',
                borderColor: modelType === 'Base' ? '#f68b8b' : '#4fa8f9',
                borderWidth: 2,
                barThickness: 40,  // Adjust this value to change bar size. Smaller value makes bars thinner
            }],
        };

        const options = {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    // text: `${modelType} Model Prediction Breakdown`, // Optional title
                },
                legend: {
                    position: 'top',
                },
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0,
                    },
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                },
            },
        };

        return (
            <div style={{ width: `${chartWidth}px`, height: `${chartHeight}px`, margin: '0 auto' }}>
                <Bar data={data} options={options} height={chartHeight} width={chartWidth} />
            </div>
        );
    };

    const handleTextChange = (event) => {
        const newText = event.target.value;
        setText(newText);
        setResult(null); // Reset result state when text changes
        setError(''); // Reset error state
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
            navigate('/login');
            return;
        }

        if (!text.trim() && !file) {
            setError('Please enter text or select a file');
            setResult(null); // Reset result state
            return;
        }
        setButtonText('Processing...');

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
            setButtonText('Analyze Text');
        } catch (error) {
            console.error('Error analyzing text:', error);
            setError('Error analyzing the text. Please try again.');
            setResult(null); // Reset result state
            setButtonText('Analyze Text');
        }
    };

    const calculatePercentages = (predictions) => {
        const totalSentences = predictions.length;
        const aiPredictions = predictions.filter(prediction => prediction === 1).length;
        const humanPredictions = totalSentences - aiPredictions;

        const aiPercentage = (aiPredictions / totalSentences) * 100;
        const humanPercentage = (humanPredictions / totalSentences) * 100;

        return {
            aiPercentage: aiPercentage.toFixed(2),
            humanPercentage: humanPercentage.toFixed(2),
        };
    };

    // const renderHighlightedText = (predictions_base, predictions_large, originalText) => {
    //     if (!originalText || !predictions_base || !predictions_large) {
    //         console.error("Missing data: originalText, predictions_base, or predictions_large is undefined.");
    //         return <p>No text available for analysis.</p>;
    //     }

    //     const sentences = originalText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s/); // Split by sentence-ending punctuation

    //     return sentences.map((sentence, index) => {
    //         let backgroundColor = 'transparent';
    //         let color = '#333'; // Default text color

    //         // Case when both models predict AI
    //         if (predictions_base[index] === 1 && predictions_large[index] === 1) {
    //             backgroundColor = '#d4c6f1'; // Purple for both models
    //             color = '#333';
    //         }
    //         // Case when only the base model predicts AI
    //         else if (predictions_base[index] === 1) {
    //             backgroundColor = '#f68b8b'; // Red for base model
    //             color = '#721c24';
    //         }
    //         // Case when only the large model predicts AI
    //         else if (predictions_large[index] === 1) {
    //             backgroundColor = '#4fa8f9'; // Light blue for large model
    //             color = '#0c5460';
    //         }

    //         return (
    //             <span
    //                 key={index}
    //                 style={{
    //                     backgroundColor: backgroundColor,
    //                     color: color,
    //                     padding: backgroundColor !== 'transparent' ? '3px' : '0',
    //                     borderRadius: '3px',
    //                 }}
    //             >
    //                 {sentence + ' '}
    //             </span>
    //         );
    //     });
    // };

    // const downloadAsPDF = () => {
    //     const element = htmlContentRef.current;
    //     const options = {
    //         margin: 1,
    //         filename: 'analysis_result.pdf',
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    //     };

    //     html2pdf().from(element).set(options).save();
    // };
    const renderHighlightedText = (predictions_base, predictions_large, originalText) => {
        if (!originalText || !predictions_base || !predictions_large) {
            return <p>No text available for analysis.</p>;
        }

        // Split text into sentences. Adjust regex for edge cases.
        const sentences = originalText.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s+/);

        return sentences.map((sentence, index) => {
            let backgroundColor = 'transparent';
            let color = '#333'; // Default text color

            // Apply highlighting based on model predictions
            if (predictions_base[index] === 1 && predictions_large[index] === 1) {
                backgroundColor = '#d4c6f1'; // Purple for both models
            } else if (predictions_base[index] === 1) {
                backgroundColor = '#f68b8b'; // Red for base model
            } else if (predictions_large[index] === 1) {
                backgroundColor = '#4fa8f9'; // Blue for large model
            }

            return (
                <span
                    key={index}
                    style={{
                        backgroundColor: backgroundColor,
                        color: color,
                        padding: backgroundColor !== 'transparent' ? '3px' : '0',
                        borderRadius: '3px',
                        margin: '2px', // Add spacing between sentences
                        display: 'inline-block', // Prevent wrapping issues
                    }}
                >
                    {sentence + ' '}
                </span>
            );
        });
    };

    const downloadAsPDF = () => {
        const element = htmlContentRef.current;
        const options = {
            margin: [10, 10, 10, 10], // Top, right, bottom, left margins in mm
            filename: 'analysis_result.pdf',
            html2canvas: {
                scale: 3, // Increase the scale for better resolution
                useCORS: true // To handle cross-origin images if used
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait'
            },
            pagebreak: {
                mode: ['avoid-all', 'css', 'legacy'], // Ensure proper page breaks
                avoid: 'div' // Prevent breaking inside divs
            }
        };

        html2pdf().set(options).from(element).save();
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
                opacity: '1',
                zIndex: 2,
                padding: '5px'
            }}></div>

            <div style={{
                zIndex: 2,
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                maxWidth: '800px',
                width: '100%',
                padding: '10px'
            }}>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333', fontSize: '38px' }}>Content Authenticity Checker</h2>
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text to analyze"
                        style={{
                            width: '80%',
                            minHeight: '180px',
                            padding: '10px',
                            fontSize: '16px',
                            borderRadius: '4px',
                            border: '1px solid #3bb19b',
                            borderWidth: '2px',
                            boxSizing: 'border-box',
                            opacity: '0.5',
                            margin: '0 auto'
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
                            borderRadius: '4px',
                            color: 'white',
                            textAlign: 'center',
                            border: 'none',
                        }}>
                            {buttonText}
                        </button>
                    </div>
                </form>

                {error && <p style={{ color: 'white', textAlign: 'center', margin: '5px 0', backgroundColor: '#f34646', padding: '15px', borderRadius: '5px' }}>{error}</p>}

                {result && <div ref={htmlContentRef} style={{ marginTop: '20px' }}>
                    <div style={{
                        marginTop: '20px',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        <h2 style={{ marginBottom: '10px', textAlign: 'center', color: '#3bb19b' }}>Analysis Result</h2>
                        <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Words: {result.num_words}</p>
                        <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Sentences: {result.num_sentences}</p>
                        <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>Number of Paragraphs: {result.num_paragraphs}</p>
                        <h4 style={{ marginBottom: '10px', textAlign: 'center', color: '#3bb19b', fontWeight: 'bold' }}>Indications for predictions by models</h4>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
                            gap: '10px', // Space between grid items
                            //  margin: '10px 10px', // Optional: margin for spacing
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px', // Smaller circle size
                                    height: '10px', // Smaller circle size
                                    borderRadius: '50%',
                                    backgroundColor: '#4fa8f9', // Color for Large Model
                                    marginRight: '5px', // Adjusted spacing
                                    //  marginLeft: '30px'
                                }}></span>
                                <span style={{ fontSize: '14px' }}>Large Model Predicted: AI Generated</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px', // Smaller circle size
                                    height: '10px', // Smaller circle size
                                    borderRadius: '50%',
                                    backgroundColor: '#f68b8b', // Color for Base Model
                                    marginRight: '5px', // Adjusted spacing
                                    // marginLeft: '30px'
                                }}></span>
                                <span style={{ fontSize: '14px' }}>Base Model Predicted: AI Generated</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px', // Smaller circle size
                                    height: '10px', // Smaller circle size
                                    borderRadius: '50%',
                                    backgroundColor: '#d4c6f1', // Color for Both Models
                                    marginRight: '5px', // Adjusted spacing
                                    // marginLeft: '30px'
                                }}></span>
                                <span style={{ fontSize: '14px' }}>Both Models Predicted: AI Generated</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <span style={{
                                    display: 'inline-block',
                                    width: '10px', // Smaller circle size
                                    height: '10px', // Smaller circle size
                                    borderRadius: '50%',
                                    backgroundColor: 'white', // Color for Human Generated
                                    border: '1px solid #ccc', // Optional: add a border for better visibility
                                    marginRight: '5px', // Adjusted spacing
                                    // marginLeft: '30px'
                                }}></span>
                                <span style={{ fontSize: '14px' }}>Both Models Predicted: Human Generated</span>
                            </div>
                        </div>
                        <div>
                            <p style={{ color: '#f68b8b', fontSize: '18px', margin: '0 0 10px 0' }}>
                                <strong>Base Model Predictions:</strong>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
                                AI-generated: <span style={{ fontWeight: 'bold', color: '#f68b8b' }}>{calculatePercentages(result.predictions_base).aiPercentage}%</span>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
                                Human-written: <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>{calculatePercentages(result.predictions_base).humanPercentage}%</span>
                            </p>
                            {result && renderBarChart(result.predictions_base, 'Base')}
                        </div>

                        <div>
                            <p style={{ color: '#4fa8f9', fontSize: '18px', margin: '0 0 10px 0' }}>
                                <strong>Large Model Predictions:</strong>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
                                AI-generated: <span style={{ fontWeight: 'bold', color: '#4fa8f9' }}>{calculatePercentages(result.predictions_large).aiPercentage}%</span>
                            </p>
                            <p style={{ textAlign: 'left', fontSize: '14px', margin: '5px 0', color: 'black' }}>
                                Human-written: <span style={{ fontWeight: 'bold', color: '#3b3b3b' }}>{calculatePercentages(result.predictions_large).humanPercentage}%</span>
                            </p>
                            {result && renderBarChart(result.predictions_large, 'Large')}
                        </div>
                        {/* 
                        <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Highlighted Text</h3>
                        <div style={{
                            borderRadius: '4px',
                            fontSize: '16px',
                            padding: '10px',
                            backgroundColor: '#f9f9f9',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                        }}>
                            {renderHighlightedText(result.predictions_base, result.predictions_large, result.original_text)}
                        </div> */}
                        <div className="pdf-page-break">
                            <h3 style={{ fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'bold' }}>Highlighted Text</h3>
                            <div style={{
                                borderRadius: '4px',
                                fontSize: '16px',
                                padding: '10px',
                                backgroundColor: '#f9f9f9',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                            }}>
                                {renderHighlightedText(result.predictions_base, result.predictions_large, result.original_text)}
                            </div>
                        </div>

                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <button onClick={downloadAsPDF} style={{
                                padding: '10px 20px',
                                backgroundColor: '#3bb19b',
                                borderRadius: '4px',
                                color: 'white',
                                border: 'none',
                                marginRight: '10px'
                            }}>
                                Download as PDF
                            </button>
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default UploadComponent;
