import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-primary text-white p-6 flex items-center gap-3">
            <FontAwesomeIcon icon={faMapLocationDot} className="text-2xl" />
            <h2 className="text-xl font-bold flex items-center gap-2">
              Our Location
            </h2>
          </div>

          <div className="relative w-full overflow-hidden" style={{ paddingBottom: "75%" }}>
            <iframe
              title="JMJ School Achampet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8475894287826!2d79.13999!3d17.58333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x8ec741202c4ccda9!2sJ.M.J+High+School!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="p-4 bg-gray-50">
            <a
              href="https://www.google.com/maps/place/J.M.J+High+School/data=!4m2!3m1!1s0x0:0x8ec741202c4ccda9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-8">
          {/* Contact Details Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>

            <div className="space-y-6">
              {/* Address */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600 leading-relaxed">
                  Achampet<br />
                  Nagarkurnool, Telangana<br />
                  TGSRTC 509376
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                <a
                  href="tel:+917386428393"
                  className="text-primary hover:underline text-lg font-medium"
                >
                  +91 7386428393
                </a>
              </div>

              {/* Email */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a
                  href="mailto:jmjachampetcbse@gmail.com"
                  className="text-primary hover:underline break-all"
                >
                  jmjachampetcbse@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours Card */}
          <div className="bg-primary text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <div className="space-y-2 text-white/90">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 4:00 PM</p>
              <p><strong>Saturday:</strong> 8:00 AM - 1:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
        <p className="text-gray-600 mb-8">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="input h-32 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;