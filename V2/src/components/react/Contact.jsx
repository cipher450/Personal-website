import React, { useState } from "react";
import EmailDialog from "./EmailDialog";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailStatus, setEmailStatus] = useState({
    isDialogOpen: false,
    succes: false,
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result?.message) {
        setEmailStatus({ ...emailStatus, succes: true });
      } else {
        setEmailStatus({ ...emailStatus, succes: false });
      }
      setEmailStatus({ ...emailStatus, isDialogOpen: true });

      if (response.ok) {
        setFormData({ email: "", message: "" }); // Reset form
      }
    } catch (error) {
      setEmailStatus({ ...emailStatus, succes: false });
    }

    setLoading(false);
  };

  return (
    <div
      className="container--contact flex lg:flex-row flex-col gap-10 items-center"
      id="contact"
    >
      <EmailDialog
        isDialogOpen={emailStatus.isDialogOpen}
        succes={emailStatus.succes}
        closeDialog={setEmailStatus}
      />
      <div className="lg:w-1/2">
        <h2 className="text-5xl text-center mb-5">Contact me</h2>
        <p>
          Ready to embark on new ventures and creative collaborations? If you
          have an exciting project in mind, I'd love to hear from you! Let's
          bring your ideas to life together.
        </p>
        <div className="flex gap-10 m-auto items-center justify-center mt-10">
          <a className="bg-transparent" href="https://t.me/echo995">
            <img
              src="/assets/logos/telegram.svg"
              alt="Telegram"
              width="64px"
              className="socialIcons"
            />
          </a>
          <a href="https://discord.com/users/568002010385874953">
            <img
              src="/assets/logos/discord.svg"
              alt="Discord"
              width="64px"
              className="socialIcons"
            />
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="w-full xl: lg:w-1/2 space-y-4">
        <div>
          <label className="block text-white text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button
          className="button w-full flex justify-center items-center gap-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
          <svg
            fill="white"
            version="1.1"
            width="24px"
            height="24px"
            viewBox="0 0 122.879 88.855"
          >
            <path d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
