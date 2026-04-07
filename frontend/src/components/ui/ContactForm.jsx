import React, { useState } from 'react';
import Button from '../common/Button';
import { Send, AlertCircle } from 'lucide-react';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email address format"),
  phone: z.string().min(1, "Phone number is required").regex(/^\+?[\d\s-]{10,}$/, "Invalid phone number format (must be at least 10 digits)"),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required")
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ isLoading: false, isSuccess: false, isError: false });

  const validate = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors = {};
        err.errors.forEach(error => {
          if (error.path[0]) {
            newErrors[error.path[0]] = error.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field upon typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus({ isLoading: true, isSuccess: false, isError: false });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({ isLoading: false, isSuccess: true, isError: false });
        toast.success('Details sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ isLoading: false, isSuccess: false, isError: true });
        toast.error('Failed to send details');
      }
    } catch (error) {
      console.error(error);
      setStatus({ isLoading: false, isSuccess: false, isError: true });
      toast.error('Server offline! MongoDB cluster refused connection.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-xl rounded-3xl space-y-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 outline-none
            ${errors.name ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.name}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 outline-none
            ${errors.email ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50'}`}
            placeholder="hello@example.com"
          />
          {errors.email && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.email}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 outline-none
            ${errors.phone ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50'}`}
            placeholder="+91 90000 00000"
          />
          {errors.phone && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.phone}</p>}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 outline-none
            ${errors.subject ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50'}`}
            placeholder="I have a project for you"
          />
          {errors.subject && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.subject}</p>}
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          value={formData.message} 
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 outline-none resize-none
          ${errors.message ? 'border-red-500 focus:ring-2 focus:ring-red-200' : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-900/50'}`}
          placeholder="Tell me all about your exciting new idea..."
        />
        {errors.message && <p className="text-xs text-red-500 flex items-center gap-1 mt-1"><AlertCircle size={12}/> {errors.message}</p>}
      </div>
      
      <Button type="submit" disabled={status.isLoading} className="w-full justify-center py-4">
        {status.isLoading ? (
          'Sending Message...'
        ) : (
          <>
            Send Message
            <Send size={18} className="ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
