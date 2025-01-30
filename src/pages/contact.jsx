import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-28 px-4">
      <div className="w-full max-w-4xl rounded-lg p-8 flex flex-col md:flex-row gap-10">
        {/* Left Section: Contact Info */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-6 text-gray-600">
            Dear Happy Customer, <br />
            If you require assistance with shipping or returns, please use the
            contact form or call the number listed below.
          </p>

          <div className="flex items-center gap-2 text-gray-700 mb-3">
            📧 <span>atigi.uz@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            📞 <span>+998 (95) 555-55-55</span>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="gmail@mail.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                placeholder="Write your message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
