import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef(null);
  const [popup, setPopup] = useState({
    show: false,
    status: "sending", // sending | success | error
  });

  const sendMessage = async (e) => {
    e.preventDefault();
    setPopup({ show: true, status: "sending" });

    const formData = new FormData(form.current);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setPopup({ show: true, status: "success" });
      form.current.reset();
      setTimeout(() => setPopup({ show: false, status: "sending" }), 2500);
    } catch {
      setPopup({ show: true, status: "error" });
      setTimeout(() => setPopup({ show: false, status: "sending" }), 2500);
    }
  };

  return (
    <>
      <section id="contact" className="bg-black text-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendMessage}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6 bg-gray-900 p-10 rounded-2xl border border-gray-700"
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none" />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none" />
            <input type="text" name="subject" placeholder="Subject" required className="w-full p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none" />

            <textarea name="message" rows="5" placeholder="Your Message" required className="md:col-span-2 p-4 rounded-lg bg-black border border-gray-700 focus:border-cyan-400 outline-none resize-none" />

            <button type="submit" className="md:col-span-2 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:scale-105 transition">
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {popup.show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-[300px] h-[300px] rounded-2xl bg-gray-900 border border-gray-700 flex flex-col items-center justify-center relative overflow-hidden"
            >
              {popup.status === "sending" && (
                <motion.div
                  initial={{ y: 80 }}
                  animate={{ y: -120 }}
                  transition={{ duration: 4 }}
                  className="text-cyan-400 text-[80px]"
                >
                  <BsFillRocketFill />
                </motion.div>
              )}

              {popup.status === "success" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-3"
                >
                  <FaCheckCircle className="text-green-500 text-[90px]" />
                  <p className="text-lg text-green-400 font-semibold text-center">Message sent successfully.</p>
                </motion.div>
              )}

              {popup.status === "error" && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-3"
                >
                  <FaTimesCircle className="text-red-500 text-[90px]" />
                  <p className="text-lg text-red-400 font-semibold text-center">Failed to send message.</p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
