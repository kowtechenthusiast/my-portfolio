"use client";
import {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("came");

    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#1c183c",
          color: "#fff",
        },
      });
      return;
    }

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!regex.test(email.trim())) {
      toast.error("Please enter a valid email address!", {
        icon: "⚠️",
        style: {
          borderRadius: "10px",
          background: "#1c183c",
          color: "#fff",
        },
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
      to_name: "Kowshik",
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAIL_KEY
      );

      toast.success("Email sent successfully!", {
        style: {
          borderRadius: "10px",
          background: "#1c183c",
          color: "#fff",
        },
      });

      // reset ONLY on success
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send email. Try again!", {
        style: {
          borderRadius: "10px",
          background: "#1c183c",
          color: "#fff",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Email</h4>
                  <a
                    href="mailto:connect.kowshik@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    connect.kowshik@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Phone</h4>
                  <a
                    href="tel:+919353549423"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9353549423
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium text-start"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bengaluru, Karnataka, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kowshik-k-1b38b4259/"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Linkedin />
                </a>

                <a
                  href="https://github.com/kowtechenthusiast"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Github />
                </a>
                <a
                  href="mailto:connect.kowshik@gmail.com"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Mail />
                </a>
                <a
                  href="https://www.instagram.com/kowshikkanchanks/"
                  target="_blank"
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium ml-2.5 mb-2 text-start"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Pedro Machado..."
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium ml-2.5 mb-2 text-start"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium ml-2.5 mb-2 text-start"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
    cosmic-button w-full flex items-center justify-center gap-2
    ${
      isSubmitting
        ? "cursor-not-allowed opacity-60 pointer-events-none animate-none"
        : "cursor-pointer hover:scale-[1.02] transition-transform"
    }
  `}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
