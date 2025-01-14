import React from "react";
import "./Contactpage.css";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
        <div className="flex bg-white rounded-2xl p-2">
          <div>HOME : </div> <div className="text-orange-400"> CONTACT US </div>
        </div>

        <div className="text-2xl font-semibold">Contact Us 
        </div>
    </div>

      {/* Main Content */}
      <main>
    <div className="main-container">
      <div className="contact-container">

        {/* Main Content */}
     <main>
         <div className="image-container">
             <img src="/src/Images/image1.png" alt="Contact Us" />
        </div>
     </main>

      </div>

      <div className="form-container">
        <form>
          <input
            type="text"
            className="form-input"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Phone Number"
            required
          />
          <textarea
            className="form-textarea"
            placeholder="Write Message..."
            rows="4"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Now ➡️
          </button>
        </form>

        <div className="form-image">
          <img
            src="/src/assets/image.png"
            alt="Group of students"
            className="parabola-shape"
          />
        </div>
  </div>
</div>

        {/* Map Section */}
        <section className="map-section">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.182705355131!2d79.00087817529705!3d21.105280885145852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495c6e85e12f7%3A0x98bb6e2956706b46!2sGBJ%20BUZZ%20-%20Digital%20Marketing%20%7C%20Performance%20Marketing%20%7C%20SEO%20%7C%20Web%20Development%20%7C%20AI%20%7C%20BI!5e0!3m2!1sen!2sin!4v1736852317806!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
></iframe>

        </section>
      </main>
    </div>
  );
};

export default ContactPage;
