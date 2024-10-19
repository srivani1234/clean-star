"use client";
import React, { useState, useEffect } from "react";
import styles from "./Appointment.module.css"; // Importing CSS module
import Navbar from "@/Navbar/Navbar";
import { FaCalendarCheck, FaDatabase, FaBroom, FaPlay } from "react-icons/fa"; // Importing icons from react-icons


const Appointment = () => {
  const steps = [
    { title: "Book Online", description: "Experience the convenience of online booking with our easy-to-use platform.", icon: <FaCalendarCheck /> },
   
    { title: "Received Data", description: "We received a substantial amount of customer feedback indicating that 85% of users are satisfied with the product quality.", icon: <FaDatabase /> },
    { title: "Ready Cleaner", description: "Ready Cleaner is a high-performance cleaning solution designed to tackle even the toughest grime and dirt.", icon: <FaBroom /> },
    { title: "Start Cleaning", description: "Start Cleaning is a professional cleaning service designed to give you peace of mind while we handle the mess.", icon: <FaPlay /> },
  ];

  return (
    <div>
      <Navbar text1="Appointment" text2="" path1="Home" path2="Appointment" />
      <section className={styles.appointmentProcess}>
        <div className={styles.sectionTitle}>
          <span>Our </span> Working Process
        </div>
        <div className={styles.title}>
          Excellent Techniques For <br /> Effective Cleaning
        </div>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.iconPlaceholder}>{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.formOuter}>
          <AppointmentForm />
        </div>
        <CustomerFeedback />
      </section>
    </div>
  );
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullname: "", // Changed from name1 to fullname
    email: "",    // Changed from name2 to email
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for the submission
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullname) tempErrors.fullname = "Full name is required."; 
    if (!formData.email) tempErrors.email = "Email is required."; // Updated error message
    if (!formData.service) tempErrors.service = "Please choose a service.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Start loading state
      try {
        const response = await fetch("https://prabhatech.com/cleanstar_backend/appointments/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSuccessMessage("Appointment booked successfully!"); // Set success message
          // Reset form after submission
          setFormData({ fullname: "", email: "", service: "", message: "" });
        } else {
          setErrors({ submit: "Error submitting form." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ submit: "Network error." });
      } finally {
        setLoading(false); // End loading state
      }
    }
  };

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

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Book An Appointment</h1>
      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="fullname" // Updated name attribute
          value={formData.fullname} // Updated state
          onChange={handleChange}
          placeholder="Enter Full Name" // Updated placeholder
        />
        {errors.fullname && <p className={styles.error}>{errors.fullname}</p>} 

        <input
          className={styles.input}
          type="email" // Updated input type to email for better validation
          name="email" // Updated name attribute
          value={formData.email} // Updated state
          onChange={handleChange}
          placeholder="Enter Email" // Updated placeholder
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>} 

        <select
          className={styles.select}
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
        {errors.service && <p className={styles.error}>{errors.service}</p>}

        <textarea
          className={styles.textarea}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="4"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        {errors.submit && <p className={styles.error}>{errors.submit}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Lucas Hall",
      role: "New York",
      quote: "Donec dictum egestas congue leo venenatis lorem suspen aenean orci volutpat vivamus.",
    },
    {
      name: "Jessica Brown",
      role: "California",
      quote: "Egestas metus aenean mauris purus risus etiam suscipit eget egestas.",
    },
    {
      name: "Mike Johnson",
      role: "New Jersey",
      quote: "Luctus integer auctor aenean tempor egestas cursus vehicula aenean fusce.",
    },
  ];

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackHeader}>
        <div className={styles.feedbackTag}>What People Say</div>
        <h1>Clients Feedback</h1>
      </div>
      <div className={styles.feedbackCards}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className={styles.feedbackCard}>
            <div className={styles.quoteIcon}>“</div>
            <div>
              <h2>{feedback.name}</h2>
              <h3>{feedback.role}</h3>
              <p>{feedback.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
