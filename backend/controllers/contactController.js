import Contact from '../models/Contact.js';

// @desc    Submit a contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    if (!name || !email || !phone || !subject || !message) {
      res.status(400);
      throw new Error('Please fill all fields');
    }

    const contact = new Contact({
      name,
      email,
      phone,
      subject,
      message,
    });

    await contact.save();
    
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    next(error);
  }
};
