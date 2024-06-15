import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import TermsModal from "../Singup/TermsModal";
import PrivacyPolicy from "../Singup/privacypolicy";

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleTermsClick = () => {
        setShowTermsModal(true);
    };

    const handlePrivacyPolicyClick = () => {
        setShowPrivacyPolicy(true);
    };

    const handleCloseModal = () => {
        setShowTermsModal(false);
        setShowPrivacyPolicy(false);
    };

    const handleSignup = async () => {
        try {
            // Validate email first
            const validateUrl = `https://100085.pythonanywhere.com/api/v1/mail/4f0bd662-8456-4b2e-afa6-293d4135facf/?type=validate`;
            const validateData = {
                email: data.email,
                name: "",
                fromName: "",
                fromEmail: "",
                subject: "",
                body: ""
            };
            const validateResponse = await axios.post(validateUrl, validateData);

            if (!validateResponse.data.success) {
                setError(validateResponse.data.message);
                setIsLoading(false); 
                return;
            }


            // Proceed with signup if email is valid
            const signupUrl = "http://localhost:8080/api/users"; 
            await axios.post(signupUrl, data);

            // Send email with login details
            const sendEmailUrl = `https://100085.pythonanywhere.com/api/v1/mail/4f0bd662-8456-4b2e-afa6-293d4135facf/?type=send-email`;
            const sendEmailData = {
                email: data.email,
                name: `${data.firstName} ${data.lastName}`,
                fromName: "AI-Whisperer",
                fromEmail: "Ai-whisperer@gmail.com",
                subject: "Welcome to AI-Whisperer!",
                body: `
                <html>
                <body style="font-family: Arial, sans-serif; background-color: #f0f0f0; color: #333; line-height: 1.6;">
    
                    <!-- Header -->
                    <div style="background-color: #3bb19b; padding: 20px; text-align: center;">
    <img src="https://getaicommissions.com/members/images/ai-whisperer-new-logo.png" alt="Logo" style="max-width: 250px; height: auto;">
                     </div>

    
                    <!-- Content -->
                    <div style="padding: 20px;">
                        
                        <p>Thank you for registering with Ai Whsperer. We are excited to have you on board!</p>
                        <p>Your account has been successfully created. Below are your login details:</p>
                        <ul style="list-style: none; padding-left: 0;">
                            <li><strong>Email:</strong> ${data.email}</li>
                            <li><strong>Password:</strong> ${data.password}</li>
                        </ul>
                        <p>You can now log in to Your App and start exploring our features.</p>
                        <p>If you have any questions or need assistance, feel free to contact our support team at support@AI-Whisperer.com.</p>
                        <p>We hope you have a great experience with us!</p>
                    </div>
    
                    <!-- Footer -->
                    <div style="background-color: #3bb19b; padding: 10px; text-align: center; color: #fff;">
                        &copy; ${new Date().getFullYear()} AI Whisperer. All rights reserved.
                    </div>
                    <br><br><br><br><br><br><br><br><br>
                    
    
                </body>
            </html>
        `,
    };
            await axios.post(sendEmailUrl, sendEmailData);
          setSuccessMessage("User created successfully!"); 

            setTimeout(() => {
                
                navigate("/login");
            }, 1500);
        }   catch (error) {
                        if (
                            error.response &&
                            error.response.status >= 400 &&
                            error.response.status <= 500
                        ) {
                            setError(error.response.data.message);
                        }
                    }
                    setIsLoading(false);
                };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isChecked) {
            setError("Please accept terms and conditions and privacy policy.");
            return;
        }
        if (data.password !== data.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setIsLoading(true);
        handleSignup();
    };

    return (
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type="button" className={styles.white_btn}>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleChange}
                            value={data.firstName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            onChange={handleChange}
                            value={data.confirmPassword}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                className="form-checkbox h-5 w-5 text-green-500"
                                onChange={handleCheckboxChange}
                                checked={isChecked}
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                I accept{" "}
                                <Link to="#" onClick={handleTermsClick} className="text-blue-500 underline">
                                    terms and conditions
                                </Link>{" "}
                                and{" "}
                                <Link to="#" onClick={handlePrivacyPolicyClick} className="text-blue-500 underline">
                                    privacy policy
                                </Link>{" "}
                                of this website.
                            </span>
                        </div>
                        {successMessage && (
                            <div className={styles.success_msg} style={{ position: 'absolute',top: 30, left: 190, color: '#3bb19b', backgroundColor: '#ffffff', padding: '10px 20px', borderRadius: 5 }}>
                        {successMessage}
                            </div>
                        )}
                        <button type="submit" className={styles.green_btn} disabled={isLoading}>
                            {isLoading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </form>
                </div>
            </div>
            {showTermsModal && <TermsModal onClose={handleCloseModal} />}
            {showPrivacyPolicy && <PrivacyPolicy onClose={handleCloseModal} />}
        </div>
    );
};

export default Signup;
