"use client";
import styles from "./Navbar.module.css"; // Import your CSS Module
import Image from "next/image";
import logo from '../../assets/logo_name.png';
import logoBlue from "../../assets/logo-blue.png";
import logodark from "../../assets/logo_name.png";
import Link from "next/link";
import { useEffect, useState,useRef } from "react";
import {FaFacebook, FaTwitter, FaGoogle, FaInstagram ,FaBars, FaHome, FaInfoCircle, FaConciergeBell, FaDollarSign, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 
const Navbar = ({ text1, text2, path1, path2 }) => {
    const [isSticky, setIsSticky] = useState(false);
    const navigate = ">>";

    const handleScroll = () => {
        if (window.scrollY > 105) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const mobileNavItem=useRef(null);
    const openMenu = () => {
        const mobileNavRef = mobileNavItem.current; // Access the current ref
        if (mobileNavRef) {
            // Toggle the width
            mobileNavRef.style.width = mobileNavRef.style.width === "100%" ? "0%" : "100%";
            mobileNavRef.style.display = mobileNavRef.style.display === "inline-flex" ? "none" : "inline-flex";
        }
    };
    return (
        <div className={styles.NavbarOuter}>
            <div className={styles.header}>
                <div className={`${styles.topBar} ${styles.customTopBar}`}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <div className={styles.infoSubItem} >
                                <FaMapMarkerAlt className={styles.icon} /> Free Contact
                            </div>
                            <div className={styles.infoSubItem}>  Deira, Dubai, UAE</div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoSubItem}>
                                <FaEnvelope className={styles.icon} /> Email us
                            </div>
                            <div className={styles.infoSubItem}>info@cleanstarserves.com</div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.infoSubItem} style={{ margin:"-45px",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",marginLeft:0}}>
                                <Image src={logo} alt="Logo" width={160} style={{paddingTop: '30px'}} />
                            </div>
                        </div>
 
                        <div className={styles.infoItem}>
                            <div className={styles.infoSubItem}>
                                <FaPhoneAlt className={styles.icon} /> Free Call
                            </div>
                            <div className={styles.infoSubItem}>+971 552 676 1884</div>
                        </div>

                        <div className={styles.infoItem}>
                            <button className={styles.infoItemBtn}><Link href="/Contact.html" style={{textDecoration:"none"}}>Free Quote</Link></button>
                        </div>
                    </div>
                </div>

                <nav className={`${styles.navbar} ${isSticky ? styles.sticky : ""} ${styles.customNavbar}`}>
                    <div className={!isSticky ? styles.dNone : styles.navLogo}>
                        <Image src={logodark} alt="Company Logo" width={100} />
                    </div>
                    <ul className={styles.navLinks}>
                        <li><Link href="/"><FaHome className={styles.icon} /> Home</Link></li>
                        <li><Link href="/About.html"><FaInfoCircle className={styles.icon} /> About</Link></li>
                        <li><Link href="/Services.html"><FaConciergeBell className={styles.icon} /> Services</Link></li>
                      {/* <li><Link href="/Pricing.html"><FaDollarSign className={styles.icon} /> Pricing</Link></li>   */}
                        <li><Link href="/Appointment.html"><FaCalendarAlt className={styles.icon} /> Appointment</Link></li>
          
          
          
                        <li><Link href="/Contact.html"><FaPhone className={styles.icon} /> Contact</Link></li>
                    </ul>
                    {isSticky && (
                        <div className={styles.quoteBtn}>
                            <button className={styles.customQuoteButton}><Link href="/Contact.html" style={{textDecoration:"none"}}>Free Quote</Link></button>
                        </div>
                    )}
                    <div className={styles.menuIcon} onClick={() => { /* Your mobile menu toggle logic */ }}>
                        <i className="fas fa-bars"></i> 
                    </div>
                </nav>

                <div className={path1 ? `${styles.headerOuter} ${styles.customHeaderOuter}` : styles.dNone}>
                    <div className={styles.headbg}>{text1}<span>{text2}</span></div>
                    <div className={styles.path}><span className={styles.line}></span>{path1}<span>{navigate}</span><span>{path2}</span></div>
                </div>
            </div>
            <div className={styles.mobileNav}>
                <div><Image src={logodark} alt="not found" width={100} style={{mixBlendMode: "multiply" }} /></div>
                <div className="mobileIcon" onClick={openMenu}>
                <FaBars size={30} color="black" />
                </div>
                <div className={styles.mobileNavItems} ref={mobileNavItem}>
                <div className={styles.sidebar}>
                <div className={styles.menu}>
    <div className={styles.crossIcon} onClick={openMenu}>X</div>
    
    <div className={styles.menuItem}>
        <span>
            <Link href="/" className={styles.link} onClick={openMenu} >Home</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>

    <div className={styles.menuItem}>
        <span>
            <Link href="/About.html" className={styles.link} onClick={openMenu} >About</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>

    <div className={styles.menuItem}>
        <span>
            <Link href="/Services.html" className={styles.link} onClick={openMenu} >Services</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>

    <div className={styles.menuItem}>
        <span>
            <Link href="/Pricing.html" className={styles.link} onClick={openMenu} >Pricing</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>

    <div className={styles.menuItem}>
        <span>
            <Link href="/Appointment.html" className={styles.link} onClick={openMenu} >Appointment</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>

    <div className={styles.menuItem}>
        <span>
            <Link href="/Contact.html" className={styles.link} onClick={openMenu} >Contact</Link> {/* Added className */}
        </span>
        <span className={styles.icon}>+</span>
    </div>
</div>

            
            <div className={styles.contactInfoSub}>
                <h2>Contact Info</h2>
                <p>🏠 Plot 306-0, NGI Building, Port Saeed Street, Deira, Dubai, UAE</p>
                <p>✉️ info@cleanstarserves.com</p>
                <p>📞 +971 552 676 1884</p>
                <div className={styles.socialIcons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaTwitter />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaGoogle />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <FaInstagram />
            </a>
             </div>
            </div>
        </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
