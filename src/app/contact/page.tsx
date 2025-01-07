'use client'

import { useState } from 'react'
import Banner from '@/components/Banner'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Banner />
      <div className="min-h-screen bg-[#FFF8F6] p-4 md:p-8 lg:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Australia Office */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-medium">Australia Office:</h3>
              <p className="text-sm text-gray-600">
                Act 555 753 Centenary Village, East<br />
                Dixieland, MI 69269, Australia
              </p>
              <div>
                <h4 className="text-red-500 font-medium">Phone</h4>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
              </div>
              <div>
                <h4 className="text-red-500 font-medium">Email</h4>
                <p className="text-sm text-gray-600">help@domain.com</p>
              </div>
            </div>

            {/* England Office */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-medium">England Office:</h3>
              <p className="text-sm text-gray-600">
                68098 Balminger Square, Gradytown, KY<br />
                62192 Florida, United States
              </p>
              <div>
                <h4 className="text-red-500 font-medium">Phone</h4>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
              </div>
              <div>
                <h4 className="text-red-500 font-medium">Email</h4>
                <p className="text-sm text-gray-600">help@domain.com</p>
              </div>
            </div>

            {/* Canada Office */}
            <div className="space-y-2">
              <h3 className="text-red-500 font-medium">Canada Office:</h3>
              <p className="text-sm text-gray-600">
                9/8 Carroll Squares, North Minerva, VA 48428,<br />
                Ontario Canada
              </p>
              <div>
                <h4 className="text-red-500 font-medium">Phone</h4>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
                <p className="text-sm text-gray-600">+01 123 456 7890</p>
              </div>
              <div>
                <h4 className="text-red-500 font-medium">Email</h4>
                <p className="text-sm text-gray-600">help@domain.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="relative">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold mb-8">Get in touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <textarea
                  placeholder="Write Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button
                  type="submit"
                  className="bg-[#1D1D1D] text-white px-8 py-3 rounded-lg hover:bg-black transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

