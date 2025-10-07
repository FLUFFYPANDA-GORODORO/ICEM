import React, { useState } from 'react';

function Alumni() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    graduationYear: '',
    course: '',
    currentCompany: '',
    position: '',
    linkedin: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for registering! We will get back to you soon.');
  };

  const alumniImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', name: 'Rajesh Kumar', position: 'Software Engineer', company: 'Google' },
    { id: 2, src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face', name: 'Priya Sharma', position: 'Product Manager', company: 'Microsoft' },
    { id: 3, src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', name: 'Amit Patel', position: 'Data Scientist', company: 'Amazon' },
    { id: 4, src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', name: 'Neha Gupta', position: 'UX Designer', company: 'Adobe' },
    { id: 5, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face', name: 'Sanjay Verma', position: 'Business Analyst', company: 'TCS' },
    { id: 6, src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face', name: 'Anjali Singh', position: 'Marketing Head', company: 'Infosys' },
    { id: 7, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', name: 'Vikram Joshi', position: 'System Architect', company: 'IBM' },
    { id: 8, src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face', name: 'Sneha Reddy', position: 'DevOps Engineer', company: 'Cisco' },
  ];

  const courses = [
    'Computer Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Electronics and Telecommunication',
    'Information Technology',
    'Artificial Intelligence and Data Science',
    'MBA',
    'MCA',
    'Integrated MBA',
    'Integrated MCA'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ICEM Alumni Network</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with your alma mater and fellow alumni. Join our growing network of successful professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Alumni Grid Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">Our Distinguished Alumni</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {alumniImages.map((alumni) => (
                <div key={alumni.id} className="text-center group">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={alumni.src}
                      alt={alumni.name}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <p className="font-semibold">{alumni.position}</p>
                        <p className="text-sm">{alumni.company}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold text-gray-800">{alumni.name}</h3>
                </div>
              ))}
            </div>

            {/* Alumni Stats */}
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Alumni Network Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-gray-600">Alumni</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-gray-600">Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form Section */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Alumni Network</h2>
            <p className="text-gray-600 mb-8">Register to stay connected and receive updates</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-2">
                    Graduation Year *
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    required
                    min="2000"
                    max="2024"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="e.g., 2020"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                  Course Graduated *
                </label>
                <select
                  id="course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select your course</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Company
                  </label>
                  <input
                    type="text"
                    id="currentCompany"
                    name="currentCompany"
                    value={formData.currentCompany}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Where do you work?"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Your current position"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message / Suggestions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Share your thoughts or suggestions..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  required
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-600">
                  I agree to receive updates and communications from ICEM Alumni Network
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-4 focus:ring-primary/50"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Joining Alumni Network</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-white/80">Connect with fellow alumni and industry professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
              <p className="text-white/80">Access exclusive job postings and career guidance</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-white/80">Guide current students and share your experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alumni;