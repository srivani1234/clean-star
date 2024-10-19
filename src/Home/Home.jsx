"use client";
import './Home.css';
import Navbar from '@/Navbar/Navbar';
import Image from 'next/image';
import rightImage from '../../assets/rightside.jpg';
import expert from '../../assets/expert.jpg';
import aboutImage from '../../assets/about1.jpg';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand5 from '../../assets/brand5.png';

import { FaHome, FaBuilding, FaIndustry, FaHammer,FaWrench } from 'react-icons/fa'; // Importing icons
import React ,{useState,useEffect} from 'react';
import testimonial from '../../assets/testimonial.jpg';
import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import s13 from '../../assets/lift.jpg';
import Link from 'next/link';
import axios from 'axios';
import s14 from '../../assets/trap.jpg';
import s12 from '../../assets/swage.jpg';
import s11 from '../../assets/sump.jpg';
import robotic from '../../assets/robotic.png';
import biological from '../../assets/biological.png';
import Pest from '../../assets/Pest.png';
import kitchen from '../../assets/7.jpg';
import Disinfection from '../../assets/Disinfection.png';
import root from '../../assets/root.png';
import water from '../../assets/9.jpg';
import tanker from '../../assets/tanker.png';
import s9 from '../../assets/Grease.jpg';
import ac from '../../assets/ac.png';

import Mold from '../../assets/Mold.png';
import brand13 from '../../assets/brand13.png';
import brand11 from '../../assets/brand11.png';
import brand6 from '../../assets/brand6.png';
import cleaning from '../../assets/cleaning.png';
import drain from '../../assets/drain-cleaner.png';
import pump from '../../assets/pump.png';
import industrial from '../../assets/industrial.png';
import sewage from '../../assets/sewage.png';

import ski from '../../assets/ski-lift.png';
import cleaning1 from '../../assets/cleaning_supply.png';
import service from '../../assets/cleaning-service.png';
import spray from '../../assets/spray.png';




function Home() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/sendMessage', {
        phoneNumber,
        message,
      });
      setStatus('Message sent successfully!');
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message.');
    }
  };

  return (
    <div>
      <h1>Send WhatsApp Message</h1>
      <form onSubmit={sendMessage}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
      <p>{status}</p>
    </div>
  );
}


// pages/index.js
//import Head from 'next/head';
//import Chat from './Chat';

const HomeScreen = () => {

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation check
    if (!formData.fullname || !formData.email || !formData.service || !formData.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    try {
      const response = await fetch('https://prabhatech.com/cleanstar_backend/appointments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form successfully submitted:', result);
   
        // Optionally, reset form after successful submission
        setFormData({
          fullname: '',
          email: '',
          service: '',
          message: '',
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const servicesData = [
    {
        title: "Grease Trap Cleaning",
        description: "Professional grease trap cleaning to ensure efficient waste management and compliance with health standards.",
        icon: <Image src={cleaning} alt="Avatar"  />, // Replace with a specific icon for grease trap cleaning
    },
    {
        title: "Drain Line Jetting",
        description: "High-pressure water jetting services for clearing blocked drain lines and restoring proper flow.",
        icon:<Image src={drain} alt="Avatar"  />, // Replace with a specific icon for drain line jetting
    },
    {
        title: "Sump Pit Cleaning",
        description: "Comprehensive cleaning of sump pits to prevent flooding and ensure proper drainage.",
        icon:<Image src={pump} alt="Avatar"  />, // Replace with a specific icon for sump pit cleaning
    },
    {
      title: "Industrial Cleaning Services",
      description: "Expert cleaning services for factories and large facilities, ensuring compliance with safety regulations.",
      icon: <Image src={industrial} alt="Avatar"  />,
  },
    {
        title: "Sewage Water Removing",
        description: "Safe and effective removal of sewage water to protect your property and health.",
        icon:  <Image src={sewage} alt="Avatar"  />, // Replace with a specific icon for sewage water removal
    },
    {
        title: "Lift Station Cleaning",
        description: "Expert cleaning of lift stations to maintain optimal performance and prevent failures.",
        icon: <Image src={ski} alt="Avatar"  />, // Replace with a specific icon for lift station cleaning
    },
    {
        title: "Grease Trap Supply & Installation",
        description: "Supply and installation of high-quality grease traps for effective waste management.",
        icon: <Image src={cleaning1} alt="Avatar"  />, // Replace with a specific icon for grease trap supply & installation
    },
    {
        title: "Kitchen Duct Cleaning",
        description: "Thorough cleaning of kitchen ducts to improve air quality and reduce fire risks.",
        icon: <Image src={service} alt="Avatar"  />, // Replace with a specific icon for kitchen duct cleaning
    },
    {
        title: "Water Tank Cleaning",
        description: "Professional cleaning of water tanks to ensure safe and clean water supply.",
        icon: <Image src={spray} alt="Avatar"  />, // Replace with a specific icon for water tank cleaning
    },
];

const pricingData = [
  {
    head: "Residential",
    price: "25.00",
    description: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
    image: rightImage,
    icon: <FaHome />, // Added icon for Residential
  },
  {
    head: "Commercial",
    price: "50.00",
    description: [
      "Office Cleaning",
      "Window Cleaning",
      "Floor Cleaning",
      "Bathroom Cleaning",
    ],
    image: rightImage,
    icon: <FaBuilding />, // Added icon for Commercial
  },
  {
    head: "Industrial",
    price: "100.00",
    description: [
      "Factory Cleaning",
      "Heavy Equipment Cleaning",
      "Warehouse Maintenance",
    ],
    image: rightImage,
    icon: <FaIndustry />, // Added icon for Industrial
  },
  {
    head: "Special Services",
    price: "75.00",
    description: [
      "Post-Construction Cleaning",
      "Deep Cleaning",
      "Eco-Friendly Cleaning",
    ],
    image: rightImage,
    icon: <FaHammer />, // Added icon for Special Services
  },
];


  const projectsData = [
    {
      image: brand5,
      heading: "Pest Control",
      //description: "Office Cleaning",
    },
    {
      image: brand13,
      heading: "Mold Remediation",
      //description: "Building Maintenance",
    },
    {
      image: brand11,
      heading: "AC Duct Cleaning",
     // description: "Factory Cleaning",
    },
    {
      image: brand6,
      heading: "Kitchen Hood Cleaning",
      //description: "Thorough cleaning for newly built or renovated spaces.",
    },
  ];

  const services = [
    { value: "Grease Trap Cleaning", label: "Grease Trap Cleaning" },
    { value: "Drain Line Jetting", label: "Drain Line Jetting" },
    { value: "Sump Pit Cleaning", label: "Sump Pit Cleaning" },
    { value: "Sewage Water Removing", label: "Sewage Water Removing" },
    { value: "Lift Station Cleaning", label: "Lift Station Cleaning" },
    { value: "Grease Trap Supply & Installation", label: "Grease Trap Supply & Installation" },
    { value: "Kitchen Duct Cleaning", label: "Kitchen Duct Cleaning" },
    { value: "Water Tank Cleaning", label: "Water Tank Cleaning" },
  ];

  const slides = [
    {
      title: 'Cleaning Excellence Guaranteed',
      description: 'Ensuring the highest standard of cleanliness with swift, reliable service.',
      image:service1,
    },
    {
      title: 'Grease Trap Supply & Installation',
      description: 'Professional supply and installation of high-quality grease traps.',
      image: s14,
    },
    {
      title: 'Lift Station Cleaning',
      description: 'Thorough and efficient cleaning for lift stations to ensure optimal performance.',
      image: s13,
    },
    {
      title: 'Sewage Water Removing',
      description: 'Fast and safe removal of sewage water to maintain a healthy environment.',
      image: s12,
    },
    {
      title: 'Industrial Cleaning Services',
      description: 'Comprehensive industrial cleaning solutions for a range of industries.',
      image: service1,
    },
    {
      title: 'Sump Pit Cleaning',
      description: 'Expert sump pit cleaning services to prevent flooding and ensure safety.',
      image: s11,
    },
    {
      title: 'Drain Line Jetting',
      description: 'High-pressure drain line jetting to remove blockages and maintain flow.',
      image: brand1,
    },
    {
      title: 'Robotic Camera Inspection',
      description:
        'Since light rays moves straight line only, to see what is beyond the bend is impossible.',
      image: robotic,
    },
    {
      title: 'Biological Treatment',
      description:
        'As one of the regions leading companies that offer biological treatment for wastewater tanks, grease traps, drain line etc.',
      image: biological,
    },
    {
      title: 'Pest Control',
      description:
        'We have an experienced team of professionals who are familiar with all kinds of usual pest infestation in households & commercial buildings.',
      image: Pest,
    },
    {
      title: 'Kitchen Duct Cleaning',
      description:
        'During the cooking process, flammable vapors are given off from cooking oils.',
      image: kitchen,
    },
    {
      title: 'Disinfection Services',
      description:
        'MAZMO is approved by Dubai Municipality to provide dis-infection services against all Infectious pathogens (bactericide, Virucide, Fungicide and sporicide).',
      image: Disinfection,
    },
    {
      title: 'Root Cutting',
      description:
        'In pursuit of water, the roots of garden trees break into drainage pipes and raise inside to block the flow of drainage water. ',
      image: root,
    },
    {
      title: "Water Tank Cleaning",
      description: "Professional cleaning of water tanks to ensure safe and clean water supply.",
      image: water, // Replace with a specific icon for water tank cleaning
  },
  {
    title: 'Drainage Tanker Service',
    description:
      'Tankers with different capacities - 1000 Gallon, 5000 Gallon and 10000 Gallon for regular draining to avoid overflow or damage to your sewage system.',
    image: tanker,
  },
  {
    title: 'Ac Duct Cleaning',
    description:
      'Air conditioners are a necessity in regions with tropical climate such as the UAE.',
    image: ac,
  }, 
  {
    title: 'Grease Trap Cleanings',
    description:
      'Grease trap cleaning is the process of removing grease waste and other food particles from the unit.',
    image: s9,
  },
  {
    title: 'Mold Remediation',
    description:
      'The formation of mold at various locations, especially where there is a presence of moisture, is common in the air-conditioned spaces of residences and commercial properties. ',
    image: Mold,
  },
  ];
  


  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div>

        <Slider slides={slides} />
        </div>

        <div className="online-appointment">
          <div className="appointment-inputs">
            <span className="appointment-title">Online Appointment</span>
            <form className="appointmentForm" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          name="fullname" // Updated name attribute
          value={formData.fullname} // Updated state
          onChange={handleChange}
          placeholder="Enter Full Name" // Updated placeholder
        />

        <input
          className="input"
          type="email" // Updated input type to email for better validation
          name="email" // Updated name attribute
          value={formData.email} // Updated state
          onChange={handleChange}
          placeholder="Enter Email" // Updated placeholder
        />
     
        <select
          className="select"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a Service</option>
          {services.map((val, ind) => (
            <option key={ind} value={val.value}>
              {val.label}
            </option>
          ))}
        </select>

        <input
          className="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />
        


        <button className="button" type="submit ">Submit</button>
          
      </form>
          </div>
        </div>

        <div className="about-our-company">
          <div className="left-image">
            
            <div className='left-image-sub'>
              <Image className='left-image-sub-image' src={aboutImage} alt="About Our Company" layout="fill" objectFit="cover" />
              </div>
          </div>
          <div className="right-content">
            <div className="about-title">
              <span>About </span>Our Company
            </div>
            <div className="about-subtitle">Our Success Cleaning<br /> Up Your Mess</div>
            <div className="about-description">

            At Clean star tanks, containers & crates cleaning services est, we are dedicated to providing top-quality, reliable cleaning solutions for a diverse range of clients across uae. With years of experience in the industry, we specialize in maintaining and servicing essential infrastructure, from residential and commercial water tanks to.</div>

            <div className="service-outer">
            {servicesData.slice(0, 4).map((service, index) => (
              <div className="service" key={index}>
                <div className="service-title">{service.title}</div>
                <div className="service-description">{service.description}</div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="banner">
  <div className="bannerScroll">
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
    <Image src={brand1} alt="not found" />
    <Image src={brand2} alt="not found" />
  </div>
</div>

        <div className='our-success'>
          <div><span>Our </span> Popular Services</div>
          <div>Our Success Cleaning <br /> Up Your Mess</div>
          <div className="cardsContainer">
            {
              servicesData.map((val, ind) => {
                return <CardItem
                  key={ind}
                  src={rightImage}
                  icon={val.icon}
                  cardHead={val.title} // Changed to val.title for consistency
                  cardDescription={val.description}   
                />
              })
            }
          </div>
        </div>


        <div className='why-head'>
          <div className="why-title">
            <span>Why </span> Choose Klenar
          </div>
          <div className="why-subtitle">
            Expert House Cleaning<br /> Service You Can Trust
          </div>
          <div className="why-choose-cleaner">
            <div className="why-left">  
              <div className="why-progress">
                <Progress
                  headings={[
                    "Every Customer is Special",
                    "Customer Support Live Chat",
                    "Enjoy Discounts in Fees",
                  ]}
                 
                />
                <Progress
                  headings={[
                    "High-Quality Cleaning Services",
                    "Flexible Scheduling",
                    "Eco-Friendly Products",
                  ]}
                 
                />
              </div>
            </div>
            <div className="why-right">
              <Image className="whyRightImage" src={expert} alt="Klenar Cleaning Service" />
            </div>
          </div>
        </div>
        

      <div className="package-outer">
  <div className="package">
    <div>
      <div><span>Our </span> Affordable Package</div>
      <div>Special Pricing Package<br />No Hidden Charge</div>
    </div>
    <div className='button-outer'>
      <button>Monthly</button>
      <button>Yearly</button>
    </div>
  </div>
  <div className="pricing-cards">
    {pricingData.map((pricing, index) => (
      <PricingCard
        key={index}
        icon={pricing.icon} // Add icon prop here
        cardHead={pricing.head}
       // cardPrice={pricing.price}
        cardDescription={pricing.description}
      />
    ))}
  </div>
</div> 


        <ClientFeedback />
        <div className="completed-projects">
          <div className="project-header">
            <div><span>Some </span> Completed Projects</div>
            <div>Every Project is Different<br />Every Client Special</div>
          </div>
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.image}
                heading={project.heading}
                description={project.description}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;



const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 1.5 seconds (1500 milliseconds)
  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    // Clear interval on component unmount to avoid memory leaks
    return () => clearInterval(autoSlide);
  }, [slides.length]);

  // Add background color to the first word of the description
  const formatDescription = (description) => {
    const words = description.split(' ');
    return (
      <span>
        <span className="highlight">{words[0]}</span> {words.slice(1).join(' ')}
      </span>
    );
  };

  return (
    <div className="slider">
    <div className="slideContent">
      {/* Left side: Content */}
      <div className="content">
        <div className="description">{formatDescription(slides[currentIndex].description)}</div>
        <div className="heading">{slides[currentIndex].title}</div>
        <Link href="/Services.html" className="learnMoreButton">Learn More</Link>
      </div>

      {/* Right side: Image */}
      <div className="imageContainer">
        <Image
          src={slides[currentIndex].image}
          alt="slider"
          className="sliderImage"
          width={600}
          height={400}
          objectFit="cover"
          priority
        />
      </div>
    </div>
  </div>

  );
};



const CardItem = ({ icon, cardHead, cardDescription }) => {
  return (
    <div className="card">
      <div className='card-left'>
        <div className='card-left-icon'>{icon}</div> 
      </div>
      <div className='card-right'>
        <div className="cardHead">{cardHead}</div>
        <div className="cardDescription">{cardDescription}</div>
        <div className="cardFooter">Read Details</div>
      </div>
    </div>
  );
};

const feedbackData = [
  {
    text: "Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis conds imentum congue.",
    author: "Shon Toy",
    title: "Chief Marketing Officer",
    img: "service1.jpg", // Add the path for image
    testimonialImg: "testimonial1.jpg", // Add the path for the client image
  },
  {
    text: "A different feedback here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
    title: "Marketing Lead",
    img: "service2.jpg", // Different image for new author
    testimonialImg: "testimonial2.jpg", // Different image for new testimonial
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
          src={feedback1}
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
          <Image src={feedback1} alt={author} className="author-image" />
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



const PricingCard = ({ icon, cardHead, cardPrice, cardDescription }) => {
  return (
    <div className="pricing-card">
      {icon && <div className="card-icon">{icon}</div>} {/* Icon wrapper */}
      <div className="cardHead">{cardHead}</div>
      <div className="cardPrice">{cardPrice}</div>
      <div className="cardDescription">
        {cardDescription.map((val, ind) => (
          <div key={ind}> {val}</div>
        ))}
      </div>
      <div className="cardFooter"><a href="/Services.html" className="socialIcon">Get Services</a></div>
    </div>
  );
};


const ProjectCard = ({ src, heading, description }) => {
  return (
    <div className="project-card">
      <Image src={src} alt={heading} />
      <div className='project-card-footer'>
        <div>
          <div className="heading">{heading}</div>
          <div className="description">{description}</div>
        </div>
        <div className='add-icon'>+</div>
      </div>
    </div>
  );
};

const Progress = ({ headings, descriptions }) => {
  return (
    <div className="progressContainer">
      {headings.map((heading, index) => (
        <div key={index} className="progressItem">
          <div className="progressBar">
            <div className="progressCircle"></div>
            <div className="progressLine"></div>
          </div>
          <div className="progressContent">
            <h3>{heading}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};



/**
 * 
 * function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp Chat Simulation</title>
        <meta name="description" content="Chat simulation using Next.js" />
      </Head>
      <main>
        <Chat />
      </main>
    </div>
  );
} **/
