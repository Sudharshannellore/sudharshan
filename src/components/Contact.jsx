import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser'

const Contact = () => {

  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


const sendEmail = (e)=>{
e.preventDefault();

const serviceID = 'service_917f4lg';
const templateId = 'template_sn8nwmt';
const publicKey  = 'hYiqUOisJ4_A0IFyj';

const templateParams = {
        name: name,
        email:email,
        message: message,
}
emailjs.send(serviceID,templateId, templateParams,publicKey)
.then((result)=>{
  console.log(result);
  setName('')
  setEmail('')
  setMessage('')
}, (error)=>{
  console.log(error.text);
});
}


  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" size={20} />
                <span>sudharshannellore@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" size={20} />
                <span>+91 8341728954</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" size={20} />
                <span>Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
          <form className="space-y-4" ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
             />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;