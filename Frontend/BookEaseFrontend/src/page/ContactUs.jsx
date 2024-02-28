import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5" style={{ fontSize: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '48%' }}>
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us using the contact information below:</p>
        <div>
          <h4>Email:</h4>
          <p>info@bookease.com</p>
        </div>
        <div>
          <h4>Phone:</h4>
          <p>+1 (123) 456-7890</p>
        </div>
        <div>
          <h4>Address:</h4>
          <p>Technopark Trivandrum, Technopark Rd, opp. Thejaswini, Technopark Campus, Kazhakkoottam, Thiruvananthapuram, Kerala 695581</p>
        </div>
      </div>
      <div style={{ width: '48%', border: '2px solid #ccc', borderRadius: '18px' }}>
        <iframe
          title="Your Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.8639182284053!2d76.880988!3d8.556100000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05befa80ee57a3%3A0x5a99df69e9061e9f!2sC-DAC%20Technopark!5e0!3m2!1sen!2sin!4v1708029883153!5m2!1sen!2sin"
          width="100%"
          height="380"
          style={{ border: 0, borderRadius: '18px' }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
