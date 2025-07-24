import React, { useState } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare
} from "lucide-react";
import '../CSS/Contact.css'; // ✅ Make sure the path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail className="icon" />,
      label: "Email",
      value: "saipotnuru257@gmail.com",
      href: "mailto:saipotnuru257@gmail.com",
    },
    {
      icon: <Phone className="icon" />,
      label: "Phone",
      value: "+91 8712210191",
      href: "tel:+918712210191",
    },
    {
      icon: <MapPin className="icon" />,
      label: "Location",
      value: "Srikakulam, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="icon" />,
      label: "GitHub",
      href: "https://github.com/salkiran290",
    },
    {
      icon: <Linkedin className="icon" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/salkiran-potnuru",
    },
  ];

  return (
    <section className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtext">
        I'm always interested in new opportunities and exciting projects.
        Let's connect!
      </p>

      <div className="contact-container">
        {/* Left - Info */}
        <div className="contact-info">
          {contactInfo.map((item, idx) => (
            <a href={item.href} key={idx} className="contact-card">
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-details">
                <h4>{item.label}</h4>
                <p>{item.value}</p>
              </div>
            </a>
          ))}

          <div className="contact-socials">
            {socialLinks.map((link, idx) => (
              <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <User className="icon" /> Full Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <Mail className="icon" /> Email Address *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label>
            <MessageSquare className="icon" /> Subject
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Message *
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>

          <button type="submit">
            <Send className="icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
