import "./FormStyles.css"
import React, { useState, useRef } from 'react'

const Form1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]{2,}$/.test(formData.name.trim())) {
      newErrors.name = "Enter a valid name";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      const firstErrorKey = Object.keys(newErrors)[0];
      const firstErrorInput = formRef.current.querySelector(`[name="${firstErrorKey}"]`);
      if (firstErrorInput) {
        firstErrorInput.focus();
      }
    }

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccessMessage('');

    const form = e.target;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then(res => {
        if (res.ok) {
          setSuccessMessage("Your message has been sent.");
          setFormData({ name: '', email: '', message: '' });
        } else {
          setSuccessMessage("Something went wrong. Please try again.");
        }
      })
      .catch(() => setSuccessMessage("Something went wrong. Please try again."))
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="form">
      <form 
        ref={formRef}
        action="https://script.google.com/macros/s/AKfycbwxZnNQwyd0LuCJznyHOzGZEbjhE2tGXQVbSEqpTUrDoahm9gvFhyUYHxqdkjMO0QC6lw/exec"
        method="POST"
        onSubmit={handleSubmit}
      >
        {Object.keys(errors).length > 0 && (
          <div className="form-error-summary">Please correct the highlighted fields below.</div>
        )}

        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? "input-error" : ""}
          disabled={submitting}
        />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? "input-error" : ""}
          disabled={submitting}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message here"
          className={errors.message ? "input-error" : ""}
          disabled={submitting}
        />
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Submit"}
        </button>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Form1;
