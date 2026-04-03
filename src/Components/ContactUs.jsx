import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Thank you! We'll be in touch soon." });
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.message || "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Could not reach the server. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-3 lg:px-25 lg:mt-20">
      {/* Main Content */}
      <main className="w-full mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start justify-center lg:gap-20">
          {/* Left Side - Contact Info */}
          <div className="w-full md:w-1/2">
            <div className="inline-block bg-[#8DC63F] text-white px-4 py-2 rounded-lg text-sm font-medium mb-6">
              CONTACT US
            </div>

            <h1 className="text-2xl lg:text-[68px] font-medium text-gray-800 mb-6 leading-tight">
              Let's Talk About Your Next Big Idea
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              Whether you're looking to build a custom software solution, train
              your team, or get expert guidance on your digital strategy, we're
              here to help. Reach out today, and let's explore how we can work
              together to bring your goals to life.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 ">
              {/* Email Card */}
              <div className="bg-[#D3EEF9] rounded-lg p-6 flex items-start space-x-4 w-full md:w-[500px]">
                <div className="bg-[#25AAE1] rounded-full p-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>

                  <p className="text-gray-600">service@hillviewgroupinc.com</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-[#D3EEF9] rounded-lg p-6 flex items-start space-x-4 w-full md:w-[500px]">
                <div className="bg-[#25AAE1] rounded-full p-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(804)319-0887</p>
                </div>
              </div>

              {/* Office Card */}
              <div className="bg-[#D3EEF9] rounded-lg p-6 flex items-start space-x-4 w-full md:w-[500px]">
                <div className="bg-[#25AAE1] rounded-full p-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">
                    Our Office
                  </h3>
                  <p className="text-gray-600">Hillview Group Inc.</p>
                  <p className="text-gray-600">701 E. Franklin St.</p>
                  <p className="text-gray-600">Suite 105 1605</p>
                  <p className="text-gray-600">Richmond, VA 23219</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-8">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div
            id="contact-form"
            className="bg-[#D3EEF9] rounded-2xl p-8 w-full lg:w-1/2 mt-10 lg:mt-25"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone"
                    className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`px-4 py-3 rounded-lg text-sm font-medium ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#25AAE1] hover:bg-[#1e99cc] disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>

              {/* Privacy Policy */}
              <p className="text-sm text-gray-600 text-center">
                By submitting this form you agree to our friendly{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
