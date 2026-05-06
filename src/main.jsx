import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  CalendarCheck,
  Camera,
  Mail,
  Home,
  KeyRound,
  Leaf,
  LineChart,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  Star,
  WalletCards
} from "lucide-react";
import "./styles.css";

const contactEmail = "stayeasechennai@gmail.com";

const contacts = [
  {
    name: "Githin",
    label: "+91 92072 94868",
    phone: "9207294868",
    whatsapp: "919207294868"
  },
  {
    name: "Ashna",
    label: "+91 99950 84157",
    phone: "9995084157",
    whatsapp: "919995084157"
  }
];

const images = {
  logo: "/images/stayease-logo.png",
  hero: "/images/stayease-hero.png",
  bedroom: "/images/stayease-bedroom.png",
  balcony: "/images/stayease-balcony.png"
};

const metrics = [
  { value: "30-45", label: "day launch sprint" },
  { value: "3", label: "listing channels first" },
  { value: "24/7", label: "guest response rhythm" }
];

const services = [
  {
    icon: Home,
    title: "Lease-ready scouting",
    text: "We identify apartments and independent homes with the right layout, access, parking, and guest appeal."
  },
  {
    icon: Sparkles,
    title: "Aesthetic setup",
    text: "Soft furnishings, lighting, decor, guest amenities, and photo-ready styling tuned for Chennai stays."
  },
  {
    icon: Camera,
    title: "Listing launch",
    text: "Professional imagery, pricing basics, house rules, and launch copy for Airbnb and Booking.com."
  },
  {
    icon: MessageCircle,
    title: "Guest operations",
    text: "Check-ins, housekeeping coordination, review care, and responsive guest communication."
  }
];

const steps = [
  "Property shortlist",
  "Lease and compliance review",
  "Design sprint",
  "Photoshoot and listings",
  "Guest-ready operations"
];

const stays = [
  {
    title: "The Calm Suite",
    area: "Bedroom concept",
    image: images.bedroom,
    text: "Layered linens, work corner, luggage space, and soft local textures for business and family travelers."
  },
  {
    title: "Filter Coffee Balcony",
    area: "Morning experience",
    image: images.balcony,
    text: "A simple ritual moment that makes the apartment memorable in photos and reviews."
  }
];

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      className="whatsapp-icon"
      viewBox="0 0 32 32"
      focusable="false"
    >
      <path d="M16 3.25A12.68 12.68 0 0 0 5.17 22.52L3.5 28.75l6.38-1.62A12.73 12.73 0 1 0 16 3.25Zm0 22.94a10.35 10.35 0 0 1-5.27-1.45l-.38-.23-3.78.96 1.01-3.67-.25-.4A10.29 10.29 0 1 1 16 26.19Zm5.75-7.7c-.31-.15-1.85-.91-2.14-1.02-.29-.1-.5-.15-.71.15-.21.31-.82 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.15-1.31-.48-2.5-1.54-.92-.82-1.55-1.84-1.73-2.15-.18-.31-.02-.48.14-.63.14-.14.31-.37.46-.55.15-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.15-.71-1.72-.98-2.36-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.15.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.79.66.75.24 1.44.21 1.98.13.6-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

function App() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    property: "",
    message: ""
  });

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent("StayEase property enquiry");
    const body = encodeURIComponent(
      [
        "Hi StayEase,",
        "",
        "I would like to discuss a property for short-stay listing.",
        "",
        `Name: ${form.name || "-"}`,
        `Phone / Email: ${form.contact || "-"}`,
        `Property location / type: ${form.property || "-"}`,
        "",
        "Message:",
        form.message || "-",
        "",
        "Sent from the StayEase website."
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="StayEase home">
          <img
            className="brand-logo"
            src={images.logo}
            alt="StayEase Chennai logo"
          />
          <span className="brand-name">StayEase</span>
        </a>
        <div className="nav-links">
          <a href="#model">Model</a>
          <a href="#homes">Homes</a>
          <a href="#launch">Launch</a>
        </div>
        <a className="nav-cta" href="#contact">
          Partner with us
          <ArrowRight size={17} strokeWidth={2.2} />
        </a>
      </nav>

      <section className="hero" id="top">
        <img src={images.hero} alt="Sunlit StayEase styled apartment in Chennai" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">
            <MapPin size={16} />
            Chennai short-stay homes
          </p>
          <h1>Beautiful homes, operated with ease.</h1>
          <p className="hero-copy">
            StayEase leases or rents promising apartments, transforms them into
            guest-loved stays, and operates them across Airbnb and Booking.com.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Start a property conversation
              <ArrowRight size={19} />
            </a>
            <a className="secondary-button" href="#homes">
              View style direction
            </a>
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="StayEase operating promises">
        {metrics.map((item) => (
          <div className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="intro" id="model">
        <div>
          <p className="eyebrow dark">
            <BadgeCheck size={16} />
            Built for owners and partners
          </p>
          <h2>We turn underused homes into warm, bookable stays.</h2>
        </div>
        <p>
          The StayEase model combines property selection, practical interior
          upgrades, launch-ready content, and hospitality operations. The look is
          premium, but the system is designed to stay lean and repeatable.
        </p>
      </section>

      <section className="service-grid" aria-label="StayEase services">
        {services.map(({ icon: Icon, title, text }) => (
          <article className="service-card" key={title}>
            <span className="icon-chip">
              <Icon size={21} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="experience" id="homes">
        <div className="section-heading">
          <p className="eyebrow dark">
            <Leaf size={16} />
            A Chennai sense of arrival
          </p>
          <h2>Light, local, and made for repeatable guest comfort.</h2>
        </div>

        <div className="stay-grid">
          {stays.map((stay) => (
            <article className="stay-card" key={stay.title}>
              <img src={stay.image} alt={`${stay.title} by StayEase`} />
              <div>
                <span>{stay.area}</span>
                <h3>{stay.title}</h3>
                <p>{stay.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="launch" id="launch">
        <div className="launch-panel">
          <div className="section-heading compact">
            <p className="eyebrow dark">
              <CalendarCheck size={16} />
              Launch plan
            </p>
            <h2>From lease discussion to first guest.</h2>
          </div>
          <div className="timeline">
            {steps.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="operator-card" aria-label="StayEase operating focus">
          <div className="score-row">
            <span>
              <Star size={18} fill="currentColor" />
              Guest appeal
            </span>
            <strong>4.8+</strong>
          </div>
          <div className="operator-list">
            <p>
              <BedDouble size={18} />
              Sleep quality and clean linen standards
            </p>
            <p>
              <KeyRound size={18} />
              Smooth arrival and check-in flow
            </p>
            <p>
              <WalletCards size={18} />
              Sensible setup spend and pricing discipline
            </p>
            <p>
              <LineChart size={18} />
              Review-led improvements after launch
            </p>
          </div>
        </aside>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <p className="eyebrow dark">
            <Sparkles size={16} />
            StayEase Chennai
          </p>
          <h2>Have a property that could become a beautiful short stay?</h2>
          <div className="contact-methods" aria-label="StayEase contact numbers">
            {contacts.map((contact) => {
              const whatsappText = encodeURIComponent(
                "Hi StayEase, I would like to discuss a property for short-stay listing."
              );

              return (
                <div className="contact-method" key={contact.phone}>
                  <div className="contact-person">
                    <strong>{contact.name}</strong>
                    <span>{contact.label}</span>
                  </div>
                  <div className="contact-actions">
                    <a
                      href={`tel:+91${contact.phone}`}
                      aria-label={`Call ${contact.name} at ${contact.label}`}
                    >
                      <Phone size={18} />
                      Call
                    </a>
                    <a
                      className="whatsapp-link"
                      href={`https://wa.me/${contact.whatsapp}?text=${whatsappText}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open WhatsApp chat with ${contact.name}`}
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          <a className="email-link" href={`mailto:${contactEmail}`}>
            <Mail size={18} />
            {contactEmail}
          </a>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <label>
            <span>Name</span>
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Your name"
              required
            />
          </label>
          <label>
            <span>Phone or email</span>
            <input
              name="contact"
              value={form.contact}
              onChange={updateField}
              placeholder="+91 ..."
              required
            />
          </label>
          <label>
            <span>Property details</span>
            <input
              name="property"
              value={form.property}
              onChange={updateField}
              placeholder="Area and property type"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              placeholder="Tell us what you want to lease, style, or list"
              rows="4"
              required
            />
          </label>
          <button className="primary-button dark-button" type="submit">
            Send email
            <Send size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
