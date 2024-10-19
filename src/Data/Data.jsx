"use client";
import Navbar from '@/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import styles from './Data.module.css'; // Import CSS module
import { ClientPageRoot } from 'next/dist/client/components/client-page';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://prabhatech.com/cleanstar_backend/contacts/showall')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  

  const deleteContact = (id) => {
    fetch(`https://prabhatech.com/cleanstar_backend/appointments/delete/${id}`, {
      method: 'DELETE', // Specify the method as DELETE
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Handle the response as JSON
      })
      .then((data) => {
        // Optionally, handle the response data or update the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id) // Remove the deleted appointment from the state
        );
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Handle any error
        setLoading(false); // Stop loading
      });
  };

  return (
    <div className={styles.tableContainer}>
      <h2>Contact List</h2>
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {!loading && !error && contacts.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.fullname}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.subject}</td>
                <td>{contact.message}</td>
                <td>{contact.created_at}</td>
                <td onClick={()=>deleteContact(contact.id)} style={{cursor:"pointer"}}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No contacts found.</p>
      )}
    </div>
  );
};

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://prabhatech.com/cleanstar_backend/appointments/showall')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAppointments(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const deleteAppointment = (id) => {
    fetch(`https://prabhatech.com/cleanstar_backend/appointments/delete/${id}`, {
      method: 'DELETE', // Specify the method as DELETE
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Handle the response as JSON
      })
      .then((data) => {
        // Optionally, handle the response data or update the state
        setAppointments((prevAppointments) =>
          prevAppointments.filter((appointment) => appointment.id !== id) // Remove the deleted appointment from the state
        );
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Handle any error
        setLoading(false); // Stop loading
      });
  };
  
  return (
    <div className={styles.tableContainer}>
      <h2>Appointment List</h2>
      {loading && <p>Loading appointments...</p>}
      {error && <p>Error fetching data: {error}</p>}
      {!loading && !error && appointments.length > 0 ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id}>
                <td>{appointment.id}</td>
                <td>{appointment.fullname}</td>
                <td>{appointment.email}</td>
                <td>{appointment.service}</td>
                <td>{appointment.message}</td>
                <td>{appointment.created_by}</td>
                <td onClick={()=>deleteAppointment(appointment.id)} style={{cursor:"pointer"}}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !loading && <p>No appointments found.</p>
      )}
    </div>
  );
};



const Modal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLogin();
      onClose(); // Close modal on successful login
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};



const Data = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(true); // Show modal initially
  
    const handleLogin = () => {
      setIsAuthenticated(true);
    };
  
    return (
      <div>
        <Navbar text1="Appointment && Contacts" text2="Data" path1="Home" path2="Data" />
  
        {showModal && <Modal onClose={() => setShowModal(false)} onLogin={handleLogin} />}
  
        {isAuthenticated ? (
          <div className={styles.dataContainer}>
            <ContactList />
            <AppointmentList />
          </div>
        ) : (
          <div className={styles.messageContainer}>
            <h2>Please log in to view the content.</h2>
          </div>
        )}
      </div>
    );
  };
  
  export default Data;
