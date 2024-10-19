import React from 'react';
import './Pricing.css';
import Navbar from '@/Navbar/Navbar';
import mop from '../../assets/mop.png'
import cleaning from '../../assets/cleaning.png'
import vacum from '../../assets/vacum.png'
import Image from 'next/image';
import pricing1 from '../../assets/pricing1.jpg';
import pricing2 from '../../assets/pricing2.jpg';
import pricing3 from '../../assets/pricing3.jpg';

const PricingSection = () => {
    const packages = [
        {
            title: 'Residential',
            price: '25.00',
            services: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning'],
            icon: mop,
        },
        {
            title: 'Buildings',
            price: '30.00',
            services: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning'],
            icon: cleaning,

        },
        {
            title: 'Commercial',
            price: '45.00',
            services: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning'],
            icon: vacum,

        }
    ];

    return (
      <div>
              <Navbar text1="Our" text2="Package" path1="Home" path2="Price Table"/>

        <div className="pricing-section">
            <div className="pricing-header">
            <div className="section-title"><span>Our </span> Working Process</div>
            <div className="title">Excellent Techniques For<br /> Effective Cleaning</div>
            </div>
            <div className="pricing-cards">
                {packages.map((item, index) => (
                    <div className="pricing-card" key={index}>
                        <div className="icon-container">
                            <Image className="image-icon" src={item.icon} alt={item.title} />
                        </div>
                        <h2>{item.title}</h2>
                        <p className="price">${item.price}</p>
                        <ul>
                            {item.services.map((service, i) => (
                                <li key={i}>✓ {service}</li>
                            ))}
                        </ul>
                        <button className="service-button">Get Service</button>
                    </div>
                ))}
            </div>

            <Pricing />
        </div>
      </div>

    );
};



const Pricing = () => {
  const pricingData = [
    {
      price: "25.00",
      title: "Residential",
      features: ["Carpet Cleaning", "Bathroom Cleaning", "Floor Cleaning", "Bedroom Cleaning"],
      src:pricing1,
    },
    {
      price: "28.00",
      title: "Buildings",
      features: ["Carpet Cleaning", "Bathroom Cleaning", "Floor Cleaning", "Bedroom Cleaning"],
      src:pricing2,
    },
    {
      price: "32.00",
      title: "Commercial",
      features: ["Carpet Cleaning", "Bathroom Cleaning", "Floor Cleaning", "Bedroom Cleaning"],
      src:pricing3,

    },
  ];

  return (
    <div className="pricing-container">
    <div className="pricing-header-section">
      <h1 className="pricing-title">Special Pricing Package</h1>
      <h2 className="pricing-title">No Hidden Charge</h2>
    </div>
  
    <div className="pricing-toggle-buttons">
      <button className="pricing-toggle-button monthly">Monthly</button>
      <button className="pricing-toggle-button yearly-active">Yearly</button>
    </div>
  
    <div className="pricing-cards-container">
      {pricingData.map((data, index) => (
        <div key={index} className="pricing-card-item">
          <div className="pricing-image-placeholder">
            <Image src={data.src} alt="Image not found" />
          </div>
          <h2 className="pricing-amount">${data.price}</h2>
          <h3 className="pricing-plan-title">{data.title}</h3>
          <button className="pricing-cta-button">Started Now</button>
          <ul className="pricing-features-list">
            {data.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="pricing-feature-item">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
  
  );
};



export default PricingSection;
