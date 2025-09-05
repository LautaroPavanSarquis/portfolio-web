import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../App.css"; 

export default function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_v48uoys",   // SERVICE ID
        "template_k9jo2dr",  // TEMPLATE ID
        form.current,
        "WzZtin1J1qFWcTyzY"  // PUBLIC KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Feel free to reach out for collaborations or job opportunities.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label className="contact--label">
            <span className="text-md">First Name*</span>
            <input type="text" name="first_name" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Last Name*</span>
            <input type="text" name="last_name" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Email*</span>
            <input type="email" name="email" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="text" name="phone" className="contact--input" />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">Choose a topic*</span>
          <select name="topic" className="contact--input" required>
            <option>Select One...</option>
            <option>Job Proposal</option>
            <option>Academic Proposal</option>
            <option>Collaboration Request</option>
          </select>
        </label>

        <label className="contact--label">
          <span className="text-md">Message*</span>
          <textarea
            name="message"
            className="contact--input"
            rows="8"
            placeholder="Type your message..."
            required
          />
        </label>

        <label className="checkbox--label">
          <input type="checkbox" required />
          <span className="text-sm">I accept the terms*</span>
        </label>

        <button type="submit" className="btn btn-primary contact--form--btn">
          Send Message
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}