import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Pages/images/logo.png';

function Header() {
    return (
        <section style={{
            color: '#088178',
            display: 'flex',
            alignItems: 'right',
            justifyContent: 'space-between',
            padding: '20px 88px',
            background: '#e3e6f3',
            boxShadow: '0 5px 15px rgba(0,0,0,0.06)',
            position: 'sticky',
            top: '0',
            left: '0',
            zIndex: '100', // Ensure it's above other content
            width: '100%' // Occupy full width
        }}>
            {/* Logo aligned to the left */}
            <div>
                <img src={logo} alt="logo" style={{ width: '200px', height: 'auto' }} />
            </div>
            {/* Menu and buttons aligned to the right */}
            <div style={{ flex: '1', textAlign: 'right' }}>
                <ul style={{
                    display: 'flex',
                    alignItems: 'right',
                    justifyContent: 'flex-end', // Align items to the right
                    listStyle: 'none',
                    margin: 0, // Remove default margin
                    padding: 0, // Remove default padding
                    fontFamily: 'Arial, sans-serif' // Set font family to Arial
                }}>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/Home" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>Home</Link>
                    </li>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/ShopPage" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>Services</Link>
                    </li>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/BlogPage" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>Blog</Link>
                    </li>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/About" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>About</Link>
                    </li>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/ContactSection" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>Contact</Link>
                    </li>
                    <li style={{ padding: '0 20px', position: 'relative' }}>
                        <Link to="/Pricing" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease'
                        }}>Pricing</Link>
                    </li>
                    {/* Login Button */}
                    <li style={{ padding: '0 20px', position: 'relative', background: '#ffffff', borderRadius: '20px' }}>
                        <Link to="/Login" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#3bb19b', // Set text color to #3bb19b
                            transition: '0.3s ease',
                            display: 'block', // Ensures the entire li is clickable
                            padding: '10px 20px' // Adjust padding as desired
                        }}>
                            Login
                        </Link>
                    </li>
                    {/* Signup Button */}
                    <li style={{ padding: '0 20px', position: 'relative', background: '#3bb19b', borderRadius: '20px' }}>
                        <Link to="/Signup" style={{
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'normal', // Changed from 600 (bold) to normal
                            color: '#ffffff',
                            transition: '0.3s ease',
                            display: 'block', // Ensures the entire li is clickable
                            padding: '10px 20px' // Adjust padding as desired
                        }}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Header;
