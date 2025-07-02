'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

// Use environment variables
const emailjsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const emailjsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailjsAutoResponderId = process.env.NEXT_PUBLIC_EMAILJS_AUTORESPONDER_TEMPLATE_ID;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    if (emailjsPublicKey) {
      emailjs.init(emailjsPublicKey);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS public key is missing');
    }
  }, []);

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submission started');
    console.log('Form data being sent:', formData);
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Validate environment variables
    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      toast.error('Email service is not properly configured');
      console.error('Missing EmailJS configuration:', {
        serviceId: !!emailjsServiceId,
        templateId: !!emailjsTemplateId,
        publicKey: !!emailjsPublicKey
      });
      return;
    }

    try {
      setIsSubmitting(true);
      
      console.log('Sending main email via EmailJS...');
      
      // Prepare template parameters - try multiple variable name formats
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        // Also try these alternative names in case EmailJS expects them
        user_name: formData.name.trim(),
        user_email: formData.email.trim(),
        user_message: formData.message.trim(),
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        reply_to: formData.email.trim()
      };
      
      console.log('Template parameters:', templateParams);
      
      // Send main email to you
      const emailResult = await emailjs.send(
        emailjsServiceId,
        emailjsTemplateId,
        templateParams
      );
      
      console.log('Main email sent successfully:', emailResult);
  
      // Send auto-responder email to the user (optional)
      if (emailjsAutoResponderId) {
        try {
          console.log('Sending auto-responder...');
          const autoResponderResult = await emailjs.send(
            emailjsServiceId,
            emailjsAutoResponderId,
            {
              name: formData.name,
              email: formData.email,
              user_name: formData.name,
              user_email: formData.email
            }
          );
          console.log('Auto-responder sent successfully:', autoResponderResult);
        } catch (autoResponderError) {
          console.warn('Auto-responder failed (non-critical):', autoResponderError);
          // Don't fail the whole process if auto-responder fails
        }
      }

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      resetForm();
      
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Toaster position="top-center" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
                disabled={isSubmitting}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
                disabled={isSubmitting}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                required
                disabled={isSubmitting}
                placeholder="Tell me about your project or how I can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}