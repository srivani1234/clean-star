import React from "react";
import Image from "next/image";
import i1 from "../../assets/i1.jpg";
import i2 from "../../assets/i2.jpg";
import i3 from "../../assets/i3.jpg";
import i4 from "../../assets/i4.jpg";
import i5 from "../../assets/i5.jpg";
import i6 from "../../assets/i6.jpg";
import clogo from '../../assets/clogo.png';
import logo from '../../assets/logo-black.jpg';

import footerLogo from '../../assets/logo_name.png'
import styles from './Footer.module.css';  // Import the CSS module
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaPinterest,FaWhatsapp } from 'react-icons/fa';



const Footer = () => {

    const whatsappNumber = '9440723373'; // Replace with your WhatsApp number
    const message = 'Hello! I am interested in your services.'; // Custom message
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className={styles.footer}>
            {/* Subscribe Section */}
            <div className={styles.subscribe}>
                <div className={styles['subscribe-head']}>Subscribe to Our Newsletter</div>
                <div className={styles['subscribe-input']}>
                    <input type="email" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>

            {/* Main Section */}
            <div className={styles.main}>
                {/* Contact Info */}
                <div className={styles.columns}>
                    <div>
                        <Image className={styles['footer-head-img']} src={footerLogo} alt="Logo" width={60} height={60} />
                    </div>
                    <div className={styles.mobile}> +971 552 676 1884</div>
                    <div className={styles.email}> cleanstar.tcccs@gmail.com</div>
                    <div className={styles.address}>Plot 306-0, NGI Building, Port Saeed Street, Deira, Dubai, UAE</div>
                    <div className={styles.icons}>
                    <FaInstagram size={60} title="Instagram" />
                    <a href={whatsappLink}  style={{ color:'white'}} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                            <FaWhatsapp size={60} title="WhatsApp" />
                        </a>
                    <FaFacebook size={60} title="Facebook" />
                    <FaTwitter size={60} title="Twitter" />
                    <FaLinkedin size={60} title="LinkedIn" />
                    <FaGithub size={60} title="GitHub" />
                    </div>
                </div>

                {/* Services */}
                <div className={styles.columns}>
                    <h3>Our Services</h3>
                    <div className={styles['under-line']}></div>
                    <div>Grease Trap Cleanings</div>
                    <div>Drain Line Jetting</div>
                    <div>Sump Pit Cleaning</div>
                    <div>Sewage Water Removing</div>
                    <div>Lift Station Cleaning</div>
                    <div>Grease Trap Supply & Installation</div>
                </div>

                {/* Recent News */}
                <div className={styles.columns}>
                    <div>Carpet Cleaning</div>
                    <div>Plumbing Services</div>
                    <div>Park Cleaning</div>
                    <div>Residential Services</div>
                    <div>Toilet Cleaning</div>
                    <div>Water Tank Cleaning</div>
                    <div>Kitchen Duct Cleaning</div>
                    <div>Garbage Chute Cleaning </div>
                    <div>High Pressure Jetting</div>
                </div>

                {/* Instagram Section */}
                <div className={styles.columns}>
                    <h3>Instagram</h3>
                    <div className={styles['under-line']}></div>
                    <div className={styles.imgContainer}>
                        <Image src={i1} alt="Instagram 1" width={60} height={60} />
                        <Image src={i2} alt="Instagram 2" width={60} height={60} />
                        <Image src={i3} alt="Instagram 3" width={60} height={60} />
                        <Image src={i4} alt="Instagram 4" width={60} height={60} />
                        <Image src={i5} alt="Instagram 5" width={60} height={60} />
                        <Image src={i6} alt="Instagram 6" width={60} height={60} />
                    </div>
                </div>
            </div>

            <div className={styles['footer-bottom']}>
                <p className={styles['footer-botom-text']}>&copy; 2024 <span style={{ color: "green" }}> Cleanstar </span>. All rights reserved.<span style={{ color: "blue" }}> <a href="https://prabhatech.com/"  style={{ color:'blue'}} target="_blank" rel="noopener noreferrer" aria-label="prabhatech">
                        prabhatech.com</a> </span>.</p>
            </div>
        </div>
    );
};

export default Footer;
