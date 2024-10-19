"use client";
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing icons
import styles from './Contact.module.css';
import Navbar from '@/Navbar/Navbar';

const Contact = () => {
    // State variables for form inputs
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('Choose Subject');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    // Submit handler
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            fullname,
            email,
            phone,
            subject,
            message,
        };

        setLoading(true); // Start loading state
        setError(null); // Reset error state

        // Send data to the backend
        fetch('https://prabhatech.com/cleanstar_backend/contacts/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type
            },
            body: JSON.stringify(formData), // Convert data to JSON
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Handle the response as JSON
            })
            .then((data) => {
                setSuccessMessage('Message sent successfully!'); // Set success message
                // Reset the form
                setFullname('');
                setEmail('');
                setPhone('');
                setSubject('Choose Subject');
                setMessage('');
            })
            .catch((error) => {
                setError('Error sending message: ' + error.message); // Handle errors
            })
            .finally(() => {
                setLoading(false); // Stop loading state
            });
    };

    return (
        <div className={styles.container}>
            <Navbar text1="Free" text2="Contact" path1="Home" path2="Contact" />
            <div className={styles.map}>
                <iframe
                    title="contact map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130456.87864467688!2d55.28334835572061!3d25.263135327709122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b79afef4b4d%3A0xa07f8be9ae8e1de2!2sPlot%20306-0%2C%20NGI%20Building%2C%20Port%20Saeed%20Street%2C%20Deira%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sbd!4v1696247483065!5m2!1sen!2sbd"
                    loading="lazy"
                    className={styles.map}
                ></iframe>
            </div>
            <section className={styles.section}>
                <div className={styles.sectionTitle}><span>Get </span> Free Estimate</div>
                <div className={styles.title}>If you have any queries, dont hesitate to contact us</div>
                <div className={styles.mainOuter}>
                    <div className={styles.leftContent}>
                        <ContactInfo
                            icon={<FaMapMarkerAlt />}
                            title="Address"
                            content="Plot 306-0, NGI Building, Port Saeed Street, Deira, Dubai, UAE"
                        />
                        <ContactInfo
                            icon={<FaPhoneAlt />}
                            title="Phone"
                            content={
                                <>
                                    <a href="tel:33388820055" className={styles.link}>+971 552 676 1884</a>
                                    <br />
                                    <a href="tel:44455530025" className={styles.link}>+971 552 676 1884</a>
                                </>
                            }
                        />
                        <ContactInfo
                            icon={<FaEnvelope />}
                            title="Email"
                            content={
                                <a href="mailto:cleanstar.tcccs@gmail.com" className={styles.link}>cleanstar.tcccs@gmail.com</a>
                            }
                        />
                    </div>
                    <div className={styles.rightContent}>
                        <form onSubmit={handleSubmit} className={styles.inputGroup}>
                            <input
                                type="text"
                                placeholder="Full name"
                                className={styles.input}
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className={styles.input}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <select
                                className={styles.select}
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                            >
                                <option value="">Choose Subject</option>
                                <option value="House Cleaning">House Cleaning</option>
                                <option value="Office Cleaning">Office Cleaning</option>
                                <option value="Kitchen Cleaning">Kitchen Cleaning</option>
                                <option value="Club Cleaning">Club Cleaning</option>
                            </select>
                            <textarea
                                placeholder="Your Message"
                                className={styles.textarea}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <button type="submit" className={styles.button} disabled={loading}>
                                {loading ? 'Sending...' : <><i className="flaticon-enter"></i> Send Message</>}
                            </button>
                            {error && <p className={styles.error}>{error}</p>}
                            {successMessage && <p className={styles.success}>{successMessage}</p>}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Modified ContactInfo to accept an icon prop
const ContactInfo = ({ icon, title, content }) => (
    <div className={styles.contactInfo}>
        <div>
            <span className={styles.icon}>{icon}</span>
        </div>
        <div>
            <h4 className={styles.header4}>{title}</h4>
            <p className={styles.paragraph}>{content}</p>
        </div>
    </div>
);

export default Contact;
