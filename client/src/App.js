// import { Route, Routes, Navigate } from "react-router-dom";
// import Main from "./components/Main";
// import Signup from "./components/Singup";
// import Login from "./components/Login";
// import TextAnalysis from "./components/TextAnalysis/TextAnalysis";

// function App() {
// 	const user = localStorage.getItem("token");

// 	return (
// 		<Routes>
// 			{user && <Route path="/" exact element={<Main />} />}
// 			<Route path="/signup" exact element={<Signup />} />
// 			<Route path="/login" exact element={<Login />} />
// 			<Route path="/" element={<Navigate replace to="/login" />} />
// 			<Route path="/text-analysis" exact element={<TextAnalysis />} />

// 		</Routes>
// 	);
// }

// export default App;
// App.jsx
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header-Footer/Header';
import Footer from './components/Header-Footer/Footer';
import Main from './components/Main';
import Signup from './components/Singup';
import Login from './components/Login';
import TextAnalysis from './components/TextAnalysis/TextAnalysis';

function App() {
    const user = localStorage.getItem('token');

    return (
        <div className="App">
            <Header />
            <Routes>
                {user ? (
                    <Route path="/" element={<Main />} />
                ) : (
                    <Route path="/" element={<Navigate replace to="/login" />} />
                )}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/text-analysis" element={<TextAnalysis />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
