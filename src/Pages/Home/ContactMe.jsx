import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import { LanguageContext } from "../../App";
import "../../App.css";

export default function ContactMe() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const { lang } = useContext(LanguageContext);

  const texts = {
    es: {
      subtitle: "Ponte en contacto",
      title: "Contáctame",
      description: "No dudes en escribirme para colaboraciones o propuestas laborales.",
      firstName: "Nombre*",
      lastName: "Apellido*",
      email: "Correo*",
      phone: "Teléfono",
      topic: "Elige un tema*",
      selectOne: "Selecciona uno...",
      job: "Propuesta laboral",
      academic: "Propuesta académica",
      collab: "Solicitud de colaboración",
      message: "Mensaje*",
      terms: "Acepto los términos*",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar. Intenta de nuevo.",
    },
    en: {
      subtitle: "Get In Touch",
      title: "Contact Me",
      description: "Feel free to reach out for collaborations or job opportunities.",
      firstName: "First Name*",
      lastName: "Last Name*",
      email: "Email*",
      phone: "Phone Number",
      topic: "Choose a topic*",
      selectOne: "Select one...",
      job: "Job Proposal",
      academic: "Academic Proposal",
      collab: "Collaboration Request",
      message: "Message*",
      terms: "I accept the terms*",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Try again.",
    },
  };

  const t = texts[lang];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(t.sending);

    emailjs
      .sendForm(
        "service_v48uoys",   // SERVICE ID
        "template_k9jo2dr",  // TEMPLATE ID
        form.current,
        "WzZtin1J1qFWcTyzY"  // PUBLIC KEY
      )
      .then(
        () => {
          setStatus(t.success);
          form.current.reset();
        },
        () => {
          setStatus(t.error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">{t.subtitle}</p>
        <h2>{t.title}</h2>
        <p className="text-lg">{t.description}</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
        <div className="container">
          <label className="contact--label">
            <span className="text-md">{t.firstName}</span>
            <input type="text" name="first_name" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">{t.lastName}</span>
            <input type="text" name="last_name" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">{t.email}</span>
            <input type="email" name="email" className="contact--input" required />
          </label>
          <label className="contact--label">
            <span className="text-md">{t.phone}</span>
            <input type="text" name="phone" className="contact--input" />
          </label>
        </div>

        <label className="contact--label">
          <span className="text-md">{t.topic}</span>
          <select name="topic" className="contact--input" required>
            <option>{t.selectOne}</option>
            <option>{t.job}</option>
            <option>{t.academic}</option>
            <option>{t.collab}</option>
          </select>
        </label>

        <label className="contact--label">
          <span className="text-md">{t.message}</span>
          <textarea
            name="message"
            className="contact--input"
            rows="8"
            placeholder={t.message}
            required
          />
        </label>

        <label className="checkbox--label">
          <input type="checkbox" required />
          <span className="text-sm">{t.terms}</span>
        </label>

        <button type="submit" className="btn btn-primary contact--form--btn">
          {t.send}
        </button>

        {status && <p className="status-message">{status}</p>}
      </form>
    </section>
  );
}