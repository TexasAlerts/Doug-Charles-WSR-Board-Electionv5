'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ type: '', name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you—your submission was received!');
    setFormData({ type: '', name: '', email: '', message: '' });
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <Image src="/headshot.jpg" alt="Doug Charles" width={100} height={100} className="rounded-full" />
        <Image src="/wsr-logo.png" alt="WSR Logo" width={120} height={60} />
      </div>

      <h1 className="text-3xl font-bold text-blue-800 mb-1">Doug Charles for HOA Board</h1>
      <p className="mb-4">Transparency. Accountability. Community.</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-red-700 mb-2">Important Dates</h2>
        <ul className="list-disc list-inside">
          <li>Meet the Candidates: August 14 @ 6 PM</li>
          <li>Voting Opens: August 20 via Vote HOA Now</li>
          <li>Voting Closes: September 2</li>
          <li>Results Announced: September 3</li>
        </ul>
        <p className="italic">1 vote per address by Title Owner only.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-blue-800 mb-2">Get Involved</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <select name="type" value={formData.type} onChange={handleChange} className="border p-2 w-full" required>
            <option value="">Select Action</option>
            <option>Sign up for updates</option>
            <option>Endorse Doug</option>
            <option>Request Meeting</option>
            <option>Volunteer: Door Knock</option>
            <option>Host Home Meeting</option>
          </select>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="border p-2 w-full" required />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full" required />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message / Comments" className="border p-2 w-full" rows="4" required />
          <button type="submit" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">Submit</button>
        </form>
      </section>
    </main>
  );
}
