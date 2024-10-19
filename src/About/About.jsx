"use client";
import React,{useState,useEffect} from 'react';
import Navbar from '@/Navbar/Navbar';
import './About.css';
import aboutImage from '../../assets/about1.jpg';
import Image from 'next/image';

import aboutAuthor from '../../assets/about-author.png';
import faq from '../../assets/faq-img-2.png';
import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import testimonial from '../../assets/testimonial.jpg';
import testimonial1 from '../../assets/testimonial.jpg';
import testimonial2 from '../../assets/testimonial.jpg';

const About= () => {
  return (
    <div>
      <Navbar text1="About" text2="Cleanstar" path1="Home" path2="About"/>
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <Image
            className="about-image"
            src={aboutImage}
            alt="Cleaning Worker"
          />
        </div>
        <div className="about-right">
          <div className="about-header">
          <div className="section-title"><span>About </span> our Company</div>
          <div className="title" style={{textAlign:'start'}}>Our Success <br /> Cleaning Up your Mess</div>
            <p className="about-description">
            At Clean star tanks, containers & crates cleaning services est, we are dedicated to providing top-quality, reliable cleaning solutions for a diverse range of clients across uae. With years of experience in the industry, we specialize in maintaining and servicing essential infrastructure, from residential and commercial water tanks to.
            </p>
          </div>
          <div className="about-services">
            <div className="service-item">
             
              <h3>Grease Trap Cleaning</h3>
              <p>Professional grease trap cleaning to ensure efficient waste management and compliance with health standards.</p>
            </div>
            <div className="service-item">
              <h3>Drain Line Jetting</h3>
              <p>High-pressure water jetting services for clearing blocked drain lines and restoring proper flow.</p>
            </div>
          </div>
          <div className="about-services">
            <div className="service-item">
              
            <h3>Sump Pit Cleaning</h3>
            <p>Comprehensive cleaning of sump pits to prevent flooding and ensure proper drainage.</p>
            </div>
            <div className="service-item">
             
              <h3>Free Consultancy</h3>
              <p>+971 552 676 1884</p>
            </div>
          </div>
          
          </div>
        </div>
      </div>
      <Faq />
      <Team />
      <ClientFeedback />
    </div>
    

  );
};



const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
        question: "How many years have you been in business?",
        answer: "We have been in business for over 10 years, providing reliable cleaning services to our clients.",
    },
    {
        question: "Do you provide your own equipment and cleaning supplies?",
        answer: "Yes, we bring all the necessary cleaning supplies and equipment to ensure a thorough cleaning service.",
    },
    {
        question: "What areas do you serve?",
        answer: "We serve a wide range of locations. Please contact us for details about specific regions.",
    },
    {
        question: "What types of cleaning services do you offer?",
        answer: "We offer various cleaning services, including industrial cleaning, post-construction cleaning, deep cleaning, and specialized services like grease trap cleaning and kitchen duct cleaning.",
    },
    {
        question: "Are your cleaning products environmentally friendly?",
        answer: "Yes, we prioritize the use of eco-friendly cleaning products to minimize our impact on the environment.",
    },
 
];


  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <Image
            src={faq} 
            alt="Cleaning Worker"
            className="faq-image"
          />
        </div>
        <div className="faq-right">
        <div className="section-title"><span>Essential </span> Questions </div>
        <div className="title">Every Cleaning Related Answer is Here  </div>
          

          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Team = () => {
  const teamMembers = [
    {
      name: 'Stuart Broad',
      role: 'House Cleaner',
      image: service1,
    },
    {
      name: 'Shane Watson',
      role: 'Office Cleaner',
      image: service2,
    },
    {
      name: 'Georgia Melinda',
      role: 'Office Cleaner',
      image: service3,
    },
    {
      name: 'Georgia Mishel',
      role: 'Kitchen Cleaner',
      image: service4,
    }
  ];

  // Auto-scroll effect
  // useEffect(() => {
  //   const scrollContainer = document.querySelector('.team-grid');
  //   let scrollAmount = 0;
  //   const scrollSpeed = 2; // Speed of scrolling
  //   const scrollStep = () => {
  //     scrollAmount += scrollSpeed;
  //     if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
  //       scrollAmount = 0; // Reset to beginning when reaching the end
  //     }
  //     scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  //   };
    
  //   const intervalId = setInterval(scrollStep, 100); // Auto-scroll interval

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  return (
    <div className="team-container">
      <div className="section-title"><span>Essential </span> Questions </div>
      <div className="title">Guaranteed Quality Cleaning <br />Service Every Time</div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image 
              src={member.image} 
              alt={member.name} 
              className="member-image" 
              width={150}  
              height={150} 
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};





const feedbackData = [
  {
      text: "Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis condimentum congue.",
      author: "Shon Toy",
      title: "Chief Marketing Officer",
      img: service1, // Add the path for image
      testimonialImg: "testimonial1.jpg", // Add the path for the client image
  },
  {
      text: "A different feedback here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Jane Doe",
      title: "Marketing Lead",
      img: service2, // Different image for new author
      testimonialImg: "testimonial2.jpg", // Different image for new testimonial
  },
  {
      text: "The cleaning team did an amazing job! Our office has never looked better. Highly recommend their services for any business looking to maintain a clean and professional environment.",
      author: "Michael Smith",
      title: "Operations Manager",
      img: service3, // Image for this author
      testimonialImg: "testimonial3.jpg", // Image for this testimonial
  },
  {
      text: "Fantastic service! They arrived on time and exceeded our expectations with their attention to detail. We'll definitely be using them for our future cleaning needs.",
      author: "Emily Johnson",
      title: "Facilities Coordinator",
      img: service4, // Image for this author
      testimonialImg: "testimonial4.jpg", // Image for this testimonial
  },
  {
      text: "We hired them for a post-construction clean-up, and they did an outstanding job. The crew was professional, efficient, and very thorough.",
      author: "David Brown",
      title: "Project Manager",
      img: service1, // Image for this author
      testimonialImg: "testimonial5.jpg", // Image for this testimonial
  },
  {
      text: "I was impressed by their commitment to using eco-friendly products. It’s great to find a cleaning service that cares about the environment while delivering excellent results!",
      author: "Sarah Davis",
      title: "Business Owner",
      img: service4, // Image for this author
      testimonialImg: "testimonial6.jpg", // Image for this testimonial
  },
];


function ClientFeedback() {
  // Use state to track the current feedback index
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Get the current feedback from the array
  const { text, author, title, img, testimonialImg } = feedbackData[currentFeedbackIndex];

  const handleNext = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="client-feedback-container">
      <div className="image-section">
        <Image
          src={img}
          alt="Client washing with excitement"
          className="feedback-image"
        />
      </div>
      <div className="text-section">
        <div className="section-title">
          <span>Customer </span> Statement
        </div>
        <div className="title" style={{ textAlign: "start" }}>
          Our Client Feedback
        </div>
        <p className="feedback-text">
          {text}
        </p>
        <div className="author-info">
          <Image src={img} alt={author} className="author-image" />
          <div className="author-details">
            <p className="author-name">{author}</p>
            <p className="author-title">{title}</p>
          </div>
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow-button-next" onClick={handleNext}>❯</button>
        <button className="arrow-button-prev" onClick={handlePrev}>❮</button>
      </div>
    </div>
  );
}







export default About;
