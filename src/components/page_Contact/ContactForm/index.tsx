"use client";

import Button from "@/components/misc/Button";
import { useState } from "react";
import styles from "./contactForm.module.scss";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputVariants = {
    initial: {
      opacity: 0,
      x: "30vw",
    },
    animate1: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 0.5,
      },
    },
    animate2: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 0.8,
      },
    },
    animate3: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 1.1,
      },
    },
  };

  const labelVariants = {
    initial: {
      opacity: 0,
      x: "30vw",
    },
    animate1: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 0.4,
      },
    },
    animate2: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 0.7,
      },
    },
    animate3: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.4,
        damping: 8,
        delay: 1,
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.promise(sendEmail(), {
      pending: "Sending message...",
      success: "Message sent successfully!",
      error: "Error sending email. Please try again later.",
    });
  }

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // clear the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Email sending failed
        toast.error("Error sending email. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email. Please try again later.");
    }
  };

  return (
    <div className={styles.form}>
      <h2>Contact me</h2>
      <form name="contact" onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <motion.label
            variants={labelVariants}
            initial="initial"
            animate="animate1"
            htmlFor="name"
          >
            Name
          </motion.label>
          <motion.input
            variants={inputVariants}
            initial="initial"
            animate="animate1"
            whileFocus={{ scale: 1.06, backgroundColor: "#f5f5f5" }}
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>
        <div className={styles.form_group}>
          <motion.label
            variants={labelVariants}
            initial="initial"
            animate="animate2"
            htmlFor="email"
          >
            Email
          </motion.label>
          <motion.input
            variants={inputVariants}
            initial="initial"
            animate="animate2"
            whileFocus={{ scale: 1.06, backgroundColor: "#f5f5f5" }}
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.form_group}>
          <motion.label
            variants={labelVariants}
            initial="initial"
            animate="animate3"
            htmlFor="message"
          >
            Message
          </motion.label>
          <motion.textarea
            variants={inputVariants}
            initial="initial"
            animate="animate3"
            whileFocus={{ scale: 1.06, backgroundColor: "#f5f5f5" }}
            name="message"
            id="message"
            placeholder="Your message"
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></motion.textarea>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "30vh" }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: "100%" }}
          transition={{
            type: "spring",
            mass: 1.2,
            damping: 18,
            delay: 1.7,
          }}
        >
          <Button type="submit" classCTA>
            Send
          </Button>
        </motion.div>
      </form>
    </div>
  );
};

export default ContactForm;
