"use client";
import React, { useState, useEffect } from "react"; // Importing useState and useEffect
import Navbar from "@/Navbar/Navbar";
import styles from './Services.module.css'; // Importing CSS Module
import Image from "next/image";

import s9 from '../../assets/Grease.jpg';
import s10 from '../../assets/drain.jpg';
import s11 from '../../assets/sump.jpg';
import s12 from '../../assets/swage.jpg';
import s13 from '../../assets/lift.jpg';
import s14 from '../../assets/trap.jpg';
import kitchen from '../../assets/7.jpg';
import water from '../../assets/9.jpg';
import high from '../../assets/high-pressure.jpg';
import cctv from '../../assets/cctv.jpg';
import Disinfection from '../../assets/Disinfection.png';
import root from '../../assets/root.png';
import robotic from '../../assets/robotic.png';
import Pest from '../../assets/Pest.png';
import biological from '../../assets/biological.png';
import ac from '../../assets/ac.png';
import kitchen1 from '../../assets/kitchen.png';
import Mold from '../../assets/Mold.png';
import tanker from '../../assets/tanker.png';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
//import service4 from '../../assets/service4.jpg';
// Kitchen Duct Cleaning
// Water Tank Cleaning
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Grease Trap Cleanings',
      description:
        'Grease trap cleaning involves removing grease waste and food particles from the unit, which can be a challenging and messy task to do on your own. Hiring a professional service is the best solution. Our experts are available anytime to provide efficient and reliable grease trap cleaning services.',
      imageUrl: s9,
    },
    {
      id: 2,
      title: 'Drain Line Jetting',
      description:
        'Drain line jetting is a high-pressure cleaning method for blocked drains and sewer pipes. It works by pumping water – which is stored in tanks – through a high-pressure hose fitted with a jetting nozzle.',
      imageUrl: s10,
    },
    {
      id: 3,
      title: 'Sump Pit Cleaning',
      description:
        'Sewage pump pits and sump pumps remove sewage and wastewater, but debris can accumulate, causing blockages and odors. Our experienced engineers specialize in cleaning full or overflowing sump pits, providing customized cleaning solutions.',
      imageUrl: s11,
    },
    {
      id: 4,
      title: 'Sewage Water Removing',
      description:
        'Sewage spills are as usual disruption to your surrounding environment. It can contain lots of bacterias, fungus, viruses, and a lot more to cause serious illness and even death of the people. The contamination risk from chemicals is incredibly high. ',
      imageUrl: s12,
    },
    {
      id: 5,
      title: 'Lift Station Cleaning',
      description:
        'Lift stations push wastewater from a lower to a higher elevation. Grease build-up is a common problem associated with lift stations reducing waste holding capacity and increasing costs dramatically. ',
      imageUrl: s13,
    },
    {
      id: 6,
      title: 'Grease Trap Supply & Installation',
      description:
        'Grease management systems are designed to prevent oils, fats & grease from entering your drainage system. These wastes if not properly processed will cause a blockage in your drains and pipework.',
      imageUrl: s14,
    },
    {
      id: 7,
      title: 'Kitchen Duct Cleaning',
      description:
        'Cooking oils release flammable vapors, making regular cleaning of grease filters essential. In commercial kitchens, grease and carbon build up in ventilation ducts, reducing airflow and increasing fire risks. Regular duct cleaning prevents foul odors, ensures compliance with safety regulations, and reduces fire hazards. ',
      imageUrl: kitchen,
    },
    {
      id: 8,
      title: 'Water Tank Cleaning',
      description:
        'Worried about the cleanliness of your water tank? Unhygienic tanks can pose serious health risks and spread water-related diseases. In Dubai, where water is often stored in tanks, regular cleaning is essential. Master Castle offers expert water tank cleaning services to ensure safe and hygienic water for everyday use.',
      imageUrl: water,
    },
    {
      id: 9,
      title: 'High Pressure Jetting',
      description:
        'The high pressure water jetting process (HP water jetting process) is the process, we use at JB Allo Sewage in about 95 % of all sewer cleaning processes for removing deposits within the scope of regular maintenance as well as for cleaning as a preparatory measure for sewer inspection or rehabilitation.',
      imageUrl: high,
    },
    {
      id: 11,
      title: 'CCTV Drain Surveying',
      description:
        'CCTV drain surveying is an innovative and fast inspection camera technology that guarantees a very cost effective way of inspecting both drains and sewers. JB Allo Sewage uses two types of technologies (Manned and Remotely Controlled) designed for your exact needs to provide you with high definition visuals and WinCan reports.',
      imageUrl: cctv,
    },
    {
      id: 12,
      title: 'Disinfection Services',
      description:
        'MAZMO, approved by Dubai Municipality, provides disinfection services against pathogens like bacteria, viruses, fungi, and spores. Using municipality-approved bio-safe disinfectants and advanced equipment, we disinfect all types of facilities. Basic cleaning isn’t always enough, so our service ensures a clean, hygienic, and safe environment.',
      imageUrl: Disinfection,
    },
    {
      id: 13,
      title: 'Root Cutting',
      description:
        'Tree roots can infiltrate drainage pipes, causing blockages. High-pressure water equipment is used to cut the roots and clear the drain. To prevent future root intrusion, a structural liner can be applied. In severe cases where the drain collapses, excavation and pipe replacement may be required.',
      imageUrl: root,
    },
    {
      id: 14,
      title: 'Robotic Camera Inspection',
      description:
        'Since light travels in straight lines, seeing beyond bends in pipelines is impossible without tools. Camera inspections are the best solution for checking inaccessible areas and ensuring pipeline safety. Regular inspections help detect issues early without breaking the drain. ',
      imageUrl: robotic,
    },
    {
      id: 15,
      title: 'Pest Control',
      description:
        'Our experienced team handles all types of pest infestations in both residential and commercial buildings, targeting pests like rats, fleas, bed bugs, and cockroaches. We offer services including general pest control, fumigation, and termite treatments for pre- and post-construction. Our goal is to ensure your property remains completely pest-free.',
      imageUrl: Pest,
    },
   
    {
      id: 16,
      title: 'Biological Treatment',
      description:
        'We are a leading provider of biological treatment for wastewater tanks, grease traps, and drain lines. Our eco-friendly dosing systems use bacteria to break down fat, oil, and grease, preventing blockages and odors. The non-chemical solution ensures effective maintenance of your grease trap, introducing an initial large dose of bacteria into the system.',
      imageUrl: biological,
    },
    {
      id: 17,
      title: 'Drainage Tanker Service',
      description:
        'We offer tankers with capacities of 1,000, 5,000, and 10,000 gallons for regular sewage drainage to prevent overflow and system damage. Our tankers serve residential, community, and commercial locations, including hotels. Our trained staff collaborates with management to schedule convenient sewage collection while adhering to local regulations.',
      imageUrl: tanker,
    },
    {
      id: 18,
      title: 'Ac Duct Cleaning',
      description:
        'In tropical climates like the UAE, air conditioners are essential but require regular maintenance for cleanliness. Over time, contaminants such as dust, debris, and allergens accumulate in ducts and coils, leading to biofilm and mold growth. This can cause respiratory issues and trigger asthma attacks, highlighting the importance of maintaining clean air conditioning systems.',
      imageUrl: ac,
    },
    {
      id: 19,
      title: 'Kitchen Hood Cleaning',
      description:
        'For over a decade, Mazmo has been a trusted provider of specialized commercial cleaning services, including HVAC systems, dryer ducts, oil and gas chimneys, and kitchen exhaust cleaning. Our expertise ensures thorough service that promotes a clean and healthy environment for commercial properties.',
      imageUrl: kitchen1,
    },
    {
      id: 20,
      title: 'Mold Remediation',
      description:
        'Mold commonly forms in air-conditioned spaces with moisture in both residential and commercial properties. Prolonged exposure to mold can lead to health issues, including asthma attacks, nasal congestion, sneezing, coughing, and other respiratory problems.',
      imageUrl: Mold,
    },
    
    
        
  ];

  // Sample feedback data
  const feedBackData = [
    {
      id: 1,
      name: "John Doe",
      title: "Business Owner",
      feedback: "Excellent service! Highly recommend. The team was professional and paid great attention to detail, ensuring that every corner of my office was spotless. I will definitely be using their services again in the future.",
      avatar: service1 // Replace with the actual path to the avatar
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Homeowner",
      feedback: "They did a fantastic job cleaning my house! The staff was friendly and punctual, and they left my home looking brand new. I appreciated their commitment to using eco-friendly products as well.",
      avatar: service2 // Replace with the actual path to the avatar
    },
    {
      id: 3,
      name: "Michael Johnson",
      title: "Office Manager",
      feedback: "Reliable and thorough service every time. We have used their cleaning services for over a year now, and they never disappoint. Their team is efficient and takes pride in their work, which is evident in the results.",
      avatar: service3 // Replace with the actual path to the avatar
    },
    
    
];


  return (
    <div>
      <Navbar text1="Our" text2="Services" path1="Home" path2="Services" />

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.headerSection}>
          <div className={styles.sectionTitle}><span>Our </span> Best Services</div>
          <div className={styles.title}>Quality Cleaning Making <br /> you Much Happy</div>
        </div>

        {/* Cards Container */}
        <div className={styles.cardsContainer}>
          {servicesData.map((service) => (
            <div className={styles.serviceCard} key={service.id}>
              <Image
                src={service.imageUrl}
                alt={service.title}
                className={styles.serviceImage}
                width={200}
                height={200}
                objectFit="cover"
              />
              <div className={styles.cardContent}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <div className={styles.serviceTitle}>{service.title}</div>
                <div className={styles.serviceDescription}>{service.description}</div>
                <button className={styles.learnMoreBtn}><a href="/Contact.html" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                Book Now</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className={styles.feedBackOuter}>
        <div className={styles.feedbackContainer}>
          <div className={styles.feedbackHeader}>
            <div className={styles.feedbackTag}>
            Our Popular Services</div>
            <div className={styles.feedbackHeading}>Customer Says About
            Our Service</div>
          </div>
          <div className={styles.feedbackCards}>
            {/* Rendering feedback cards */}
            {feedBackData.map((feedback,ind) => (
              <div className={styles.feedbackCard} key={ind}>
                <div style={{display:'flex',flexDirection:"row"}}>
                <Image src={feedback.avatar} alt="Avatar" className={styles.avatar} />
                <div>

                  <div className={styles.feedbackCardTitle}>{feedback.name}</div>
                  <div className={styles.business}>{feedback.title}</div>
                </div>
                </div>
                  <div className={styles.feedbackDescription}>{feedback.feedback}</div>
                <span className={styles.quoteIcon}>“</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.feedBackForm}>
          <FeedBackForm />
        </div>
      </div>
    </div>
  );
};

const FeedBackForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name1: '',
    name2: '',
    service: '',
    message: '',
  });

  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State to track form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validation function
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name1) tempErrors.name1 = "First name is required.";
    if (!formData.name2) tempErrors.name2 = "Last name is required.";
    if (!formData.service) tempErrors.service = "Please choose a service.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  // API call using useEffect after successful submission
  useEffect(() => {
    if (isSubmitted) {
      const postData = async () => {
        try {
          const response = await fetch('https://your-api-endpoint.com/appointments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Error submitting form.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

      postData();
      setIsSubmitted(false);  // Reset the form submission status
    }
  }, [isSubmitted, formData]);

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>Free Estimate</div>
      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name1"
          placeholder="First Name"
          value={formData.name1}
          onChange={handleChange}
        />
        {errors.name1 && <div className={styles.error}>{errors.name1}</div>}

        <input
          type="text"
          name="name2"
          placeholder="Last Name"
          value={formData.name2}
          onChange={handleChange}
        />
        {errors.name2 && <div className={styles.error}>{errors.name2}</div>}

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="" disabled>Choose Service</option>
          <option value="House Cleaning">House Cleaning</option>
          <option value="Hospital Cleaning">Hospital Cleaning</option>
          <option value="Carpet Cleaning">Carpet Cleaning</option>
          <option value="Window Cleaning">Window Cleaning</option>
          <option value="Office Cleaning">Office Cleaning</option>
          <option value="Industrial Cleaning">Industrial Cleaning</option>
        </select>
        {errors.service && <div className={styles.error}>{errors.service}</div>}

        <textarea
          name="message"
          placeholder="Write Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className={styles.error}>{errors.message}</div>}

        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Services;
