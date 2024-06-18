
// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Header from './components/Header-Footer/Header';
// import Footer from './components/Header-Footer/Footer';
// import Main from './components/Main';
// import TextAnalysis from './components/TextAnalysis/TextAnalysis';

// import Home from './Pages/Home';
// import ContactSection from './Pages/Contact';
// import Login from './components/Login';
// import Signup from './components/Singup';
// import About from './Pages/About';
// import Pricing from './Pages/Pricing';
// function App() {
//     const user = localStorage.getItem('token');

//     return (
//         <div className="App">
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/text-analysis" element={<TextAnalysis />} />
// <Route path="/" element={<Home />} />
// <Route path="/ContactSection" element={<ContactSection />} />
// <Route path="/About" element={<About />} />
// <Route path="/Pricing" element={<Pricing />} />
//         </Routes>
//           <Footer />
//        </div>
//    );
// }

// export default App;
// // import React from 'react';
// // import { Route, Routes, Navigate } from 'react-router-dom';
// // import Header from './components/Header-Footer/Header';
// // import Footer from './components/Header-Footer/Footer';
// // import ContactSection from './Pages/Contact';
// // import Home from '../src/Pages/Home'; // Ensure correct import
// // import Main from './components/Main';
// // import Signup from './components/Singup'; // Corrected import
// // import Login from './components/Login';
// // import TextAnalysis from './components/TextAnalysis/TextAnalysis';

// // function App() {
// //     const user = localStorage.getItem('token');

// //     return (
// //         <div className="App">
// //             <Header />
// //             <Routes>
// //                 <Route path="/" element={<Home />} /> {/* Home route */}
// //                 {user ? (
// //                     <Route path="/main" element={<Main />} />
// //                 ) : (
// //                     <Route path="/main" element={<Navigate replace to="/login" />} />
// //                 )}
// //                 <Route path="/signup" element={<Signup />} />
// //                 <Route path="/contact" element={<ContactSection />} />
// //                 <Route path="/login" element={<Login />} />
// //                 <Route path="/text-analysis" element={<TextAnalysis />} />
// //             </Routes>
// //             <Footer />
// //         </div>
// //     );
// // }

// // export default App;
// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Header from './components/Header-Footer/Header';
// // import Footer from './components/Header-Footer/Footer';
// // import Home from './Pages/Home';
// // import ContactSection from './Pages/Contact';
// // import Login from './components/Login';
// // import Signup from './components/Singup';
// // import About from './Pages/About';

// // function App() {
// //     const user = localStorage.getItem('token');
// //   return (

// //       <div>
// //         <Header />
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/ContactSection" element={<ContactSection />} />
// //           <Route path="/About" element={<About />} />
// //           <Route path="/Login" element={<Login />} />
// //           <Route path="/Signup" element={<Signup />} />
// //         </Routes>
// //         <Footer />
// //       </div>

// //   );
// // }

// // export default App;
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import TextAnalysis from "./components/TextAnalysis/TextAnalysis";
import Header from './components/Header-Footer/Header';
import Footer from './components/Header-Footer/Footer';
import Home from './Pages/Home';
import ContactSection from './Pages/Contact';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import ServicesPage from "./Pages/Services";
import Privacypolicy from "./components/Singup/privacypolicy";
import TermsModal from "./components/Singup/TermsModal";


function App() {
	const user = localStorage.getItem("token");

	return (
		<div>
			<Header />
			<Routes>
				{user && <Route path="/" exact element={<Main />} />}
				<Route path="/signup" exact element={<Signup />} />
				<Route path="/login" exact element={<Login />} />
				{/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
				<Route path="/text-analysis" exact element={<TextAnalysis />} />
				<Route path="/" element={<Home />} />
				<Route path="/ContactSection" element={<ContactSection />} />
				<Route path="/About" element={<About />} />
				<Route path="/Pricing" element={<Pricing />} />
				<Route path="/ServicesPage" element={<ServicesPage />} />
				<Route path="/PrivacyPolicy" element={<Privacypolicy />} />
				<Route path="/TermsModal" element={<TermsModal />} />
				<Route path="/ServicesPage" element={<ServicesPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
