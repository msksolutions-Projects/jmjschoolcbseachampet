import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUser,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    class: "",
    fatherName: "",
    motherName: "",
    phone: "",
    email: "",
    address: "",
    previousSchool: "",
    agreed: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.studentName ||
      !formData.dateOfBirth ||
      !formData.gender ||
      !formData.class ||
      !formData.fatherName ||
      !formData.motherName ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.agreed
    ) {
      toast.error("Please fill all required fields and accept the terms.");
      return;
    }

    setLoading(true);

    const formDataObj = new FormData();
    formDataObj.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ADMISSION_KEY
    );

    formDataObj.append("subject", "New School Admission Form");
    formDataObj.append("from_name", "School Admission");
    formDataObj.append("replyto", formData.email);

    Object.entries({
      "Student Name": formData.studentName,
      "Date of Birth": formData.dateOfBirth,
      Gender: formData.gender,
      Class: formData.class,
      "Father Name": formData.fatherName,
      "Mother Name": formData.motherName,
      Phone: formData.phone,
      Email: formData.email,
      Address: formData.address,
      "Previous School": formData.previousSchool,
    }).forEach(([key, value]) => formDataObj.append(key, value));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Admission form submitted successfully!");
        setFormData({
          studentName: "",
          dateOfBirth: "",
          gender: "",
          class: "",
          fatherName: "",
          motherName: "",
          phone: "",
          email: "",
          address: "",
          previousSchool: "",
          agreed: false,
        });
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Check internet connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 bg-white";

  const Label = ({ children }) => (
    <label className="text-sm font-medium text-gray-700 mb-1 block">
      {children} <span className="text-red-500">*</span>
    </label>
  );

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <FontAwesomeIcon icon={faUserPlus} className="text-primary text-2xl" />
            <div className="h-px w-10 bg-primary" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Admission Form
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Fill in the details to start your admission process
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl border p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Student Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} className="text-primary" />
                Student Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Student Name</Label>
                  <input name="studentName" value={formData.studentName} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <Label>Date of Birth</Label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={inputClass} />
                </div>

                <div>
                  <Label>Gender</Label>
                  <select name="gender" value={formData.gender} onChange={handleChange} className={inputClass}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label>Applying Class</Label>
                  <input name="class" value={formData.class} onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>

            {/* Parent Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label>Father Name</Label>
                <input name="fatherName" value={formData.fatherName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <Label>Mother Name</Label>
                <input name="motherName" value={formData.motherName} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <Label>Phone</Label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
              </div>

              <div>
                <Label>Email</Label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
              </div>
            </div>

            {/* Address */}
            <div>
              <Label>Address</Label>
              <textarea name="address" value={formData.address} onChange={handleChange} rows={3} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">
                Previous School
              </label>
              <input name="previousSchool" value={formData.previousSchool} onChange={handleChange} className={inputClass} />
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-gray-600">
              <input type="checkbox" name="agreed" checked={formData.agreed} onChange={handleChange} className="mt-1" />
              I confirm the above details are correct. <span className="text-red-500">*</span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </section>
  );
}
