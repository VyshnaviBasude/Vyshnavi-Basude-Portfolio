import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS service
    emailjs
      .send(
        "service_8ylg9tz", // Replace with your EmailJS service ID
        "template_xpe1nxe", // Replace with your EmailJS template ID
        formData,
        "LeKHqnq663-exB9nw" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess(true);
          setError("");
          console.log("Email sent successfully");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error("Failed to send email:", err);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-indigo-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:vbasu1@unh.newhaven.edu"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    vbasu1@unh.newhaven.edu
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-indigo-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">Phone</p>
                  <a
                    href="tel:+12039038323"
                    className="text-gray-600 hover:text-indigo-600"
                  >
                    +1 (203) 903-8323
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-indigo-600 mr-4" size={24} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
              {success && (
                <p className="text-green-500 mt-2">Message sent successfully!</p>
              )}
              {error && (
                <p className="text-red-500 mt-2">{error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
