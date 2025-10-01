// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* University Address */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-4">INDIRA UNIVERSITY (PUNJAB)</h3>
            <p className="text-gray-300 mb-6">
              Chandigarh-Patidia National Highway<br />
              Punjab 140401
            </p>
            
            <h4 className="font-semibold mb-2">ADMISSIONS OFFICE</h4>
            <p className="text-gray-300 mb-4">
              Unit No. A 201-202<br />
              Elastic Mid Office Complex<br />
              Industrial Area Phase 1<br />
              Chandigarh 160 002
            </p>
            
            <h4 className="font-semibold mb-2">INDIRA INFORMATION CENTRE</h4>
            <p className="text-gray-300">
              SCO 100-161, Sector #-C<br />
              Chandigarh 160 009
            </p>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="text-lg font-bold mb-4">ADMISSIONS</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Downloadable Brochures</a>
              <a href="#" className="block text-gray-300 hover:text-white">Important Contact Numbers</a>
              <a href="#" className="block text-gray-300 hover:text-white">Application Form Sale Outlets</a>
              <a href="#" className="block text-gray-300 hover:text-white">Admission Procedure</a>
              <a href="#" className="block text-gray-300 hover:text-white">Fee Structure</a>
              <a href="#" className="block text-gray-300 hover:text-white">International Students</a>
              <a href="#" className="block text-gray-300 hover:text-white">Downloadable Forms & Formats</a>
              <a href="#" className="block text-gray-300 hover:text-white">FAQ</a>
            </div>
          </div>

          {/* Important Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">IMPORTANT INFO</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Grievance Redressal</a>
              <a href="#" className="block text-gray-300 hover:text-white">NIRF Report</a>
              <a href="#" className="block text-gray-300 hover:text-white">National Academic Depository (NAD)</a>
              <a href="#" className="block text-gray-300 hover:text-white">University NAO Cell</a>
              <a href="#" className="block text-gray-300 hover:text-white">www.vidyalakshmi.co.in</a>
              <a href="#" className="block text-gray-300 hover:text-white">Academic Bank of Credits (ABC)</a>
              <a href="#" className="block text-gray-300 hover:text-white">Request for Educational Verification</a>
              <a href="#" className="block text-gray-300 hover:text-white">RTI</a>
              <a href="#" className="block text-gray-300 hover:text-white">Agripsath Yojana</a>
              <a href="#" className="block text-gray-300 hover:text-white">Scholarship</a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-4">EXPLORE</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white">Indira Educational Trust</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira University, Punjab</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira University, Himachal Pradesh</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira International School</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira Centre for Global Education</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira International College</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira School of Hospitality with NCHMCT</a>
              <a href="#" className="block text-gray-300 hover:text-white">Office of International Affairs</a>
              <a href="#" className="block text-gray-300 hover:text-white">Career Advancement Services</a>
              <a href="#" className="block text-gray-300 hover:text-white">Indira Alumni Association Network</a>
              <a href="#" className="block text-gray-300 hover:text-white">Office of Students Affairs</a>
              <a href="#" className="block text-gray-300 hover:text-white">Report on SDGs</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            Copyright ©2022 Indira Educational Trust | Disclaimer | Privacy Policy |
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;