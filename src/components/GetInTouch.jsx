import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Label = ({ children, required }) => (
  <label className="block text-sm font-medium text-slate-700 mb-1">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const GetInTouch = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_CONTACT_KEY
    );
    formData.append("subject", "New Enquiry from  Website");
    formData.append("from_name", "School Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Enquiry sent successfully!");
        event.target.reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Check internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600";

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base">
            Have questions about admissions or school activities? We’d love to
            hear from you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-md border p-6 sm:p-8 max-w-3xl mx-auto">
          <form onSubmit={onSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <Label required>Full Name</Label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <Label required>Email Address</Label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <Label>Phone Number</Label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className={inputClass}
              />
            </div>

            {/* Message */}
            <div>
              <Label required>Message</Label>
              <textarea
                rows="4"
                name="message"
                required
                placeholder="Write your message here..."
                className="w-full rounded-lg border px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </section>
  );
};

export default GetInTouch;
