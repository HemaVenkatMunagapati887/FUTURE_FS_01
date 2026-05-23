import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace 'YOUR_FORM_ID_HERE' with your actual Formspree ID
      // Example: 'https://formspree.io/f/mvoeqzpj'
      const response = await fetch("https://formspree.io/f/mzdwgneq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Oops! There was a problem submitting your form. Please make sure you added your Formspree ID.");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding container">
      <h2 className="section-title fade-in-up">Get in <span className="text-gradient">Touch</span></h2>
      
      <div className="contact-container fade-in-up delay-2">
        <div className="contact-info glass-panel">
          <h3>Let's talk about everything!</h3>
          <p>Don't like forms? Send me an email. 👋</p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>venkatmunagapati897@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <h4>Phone</h4>
                <p>+91 9381014939</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon-box"><MapPin size={20} /></div>
              <div>
                <h4>Location</h4>
                <p>Vijayawada,  Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form glass-panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
            
            {submitted && <div className="success-msg">Message sent successfully!</div>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
