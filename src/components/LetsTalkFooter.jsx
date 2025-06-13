import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const LetsTalkFooter = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // EmailJS integration example
      // First install: npm install @emailjs/browser
      // Then import: import emailjs from '@emailjs/browser';

      emailjs.send(
        "service_pqm81mh",
        "template_klgmrh4",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "jjG5i_gJ39MH0aqFv"
      );

      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[var(--color-primary)] py-20 px-6" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-[var(--color-white)] leading-tight">
                Let's Collab!
              </h2>
              <p className="text-[var(--color-secondary)] text-lg mt-6 leading-relaxed">
                Let's learn from each other and make better projects together.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--color-white)]" />
                </div>
                <span className="text-[var(--color-white)] text-lg">
                  singhalansh155@gmail.com
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--color-white)]" />
                </div>
                <span className="text-[var(--color-white)] text-lg">
                  9119082963
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[var(--color-secondary)] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--color-white)]" />
                </div>
                <span className="text-[var(--color-white)] text-lg">
                  Bennett University, Greater Noida
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form */}
          <div className="bg-[var(--color-tertiary)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-secondary)]/30">
            <h3 className="text-xl text-[var(--color-secondary)] mb-8">
              Send me a message and let's work together.
            </h3>

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[var(--color-tertiary)] border border-[var(--color-secondary)] rounded-lg px-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-white)] font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[var(--color-white)] border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="text-green-400 text-center py-2">
                  Message sent successfully! 🎉
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-red-400 text-center py-2">
                  Failed to send message. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalkFooter;
