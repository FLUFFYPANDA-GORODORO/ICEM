import React from "react";
import ICEM_Banner from "../../assets/ICEM_Banner.jpg";

const IIC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="relative w-full">
        <img 
          src={ICEM_Banner} 
          className="w-full h-64 md:h-80 object-cover" 
          alt="IIC Banner"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold">IIC</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            {/* Introduction Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="mb-4">
                <strong>Indira College of Engineering and Management</strong> has established Institution's Innovation Council (ICEM - IIC) under the guidelines of Ministry of Education's Innovation Cell (MIC) to promote innovation and entrepreneurship at Institute level.
              </p>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Establishment Year : December 2021
              </h3>
            </div>

            {/* Objectives Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Objective of ICEM - IIC:</h2>
              <p className="text-gray-600">
                To encourage, inspire and nurture young minds of students by supporting them to work with new ideas and transform them into prototypes as well as products thus creating a vibrant local innovation ecosystem in the institute.
              </p>
            </div>

            {/* Functions Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Functions of ICEM - IIC:</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>To conduct various innovation and entrepreneurship-related activities prescribed by Ministry of Education's Innovation Cell.</li>
                <li>To mentor, identify and reward innovations and share success stories.</li>
                <li>To organize periodic workshops / seminars / interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators</li>
                <li>To highlight innovative projects carried out by institution's faculty and students.</li>
                <li>To organize idea competitions, business plan competitions, mini-challenges, hackathons, etc. with the involvement of industries</li>
              </ul>
            </div>

            {/* IIC Team Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">ICEM – IIC Team</h2>
              <h4 className="text-lg font-semibold text-gray-700 mb-4">
                The team consists of the following members
              </h4>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Sr.No</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name of Member</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Position assigned in IIC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">1</td>
                      <td className="border border-gray-300 px-4 py-2">Dr Nilesh Uke, Director</td>
                      <td className="border border-gray-300 px-4 py-2">Head of Institute</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">2</td>
                      <td className="border border-gray-300 px-4 py-2">Dr Saurabh Gupta, Dean-Academics</td>
                      <td className="border border-gray-300 px-4 py-2">President</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">3</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Supriya Kumbhar, Asst Prof- FY</td>
                      <td className="border border-gray-300 px-4 py-2">Convener</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">4</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Minal Patil, Asst Prof-Computer</td>
                      <td rowSpan="7" className="border border-gray-300 px-4 py-2">Members</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">5</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Deepa Padwal, Asst Prof-AI/DS</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">6</td>
                      <td className="border border-gray-300 px-4 py-2">Mr Vishal Meshram, Asst Prof-Mechanical</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">7</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Priyanka Patil, Asst Prof-E&amp;TC</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">8</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Aditi Hupparikar, Asst Prof-MBA</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 px-4 py-2">9</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Dhanshri Pisal, Asst Prof-MCA</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">10</td>
                      <td className="border border-gray-300 px-4 py-2">Ms Trupti Kathale, Asst Prof-FY</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Establishment Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Establishment Certificate</h3>
              <div className="flex justify-center">
                <iframe
                  title="Establishment Certificate"
                  className="w-full h-96 border border-gray-300 rounded-lg"
                  src="https://indiraicem.ac.in/assets/pdf/Establisment_Certificate.pdf"
                >
                  <p>Your browser does not support iframes. Please download the PDF to view it: 
                    <a href="https://indiraicem.ac.in/assets/pdf/Establisment_Certificate.pdf" className="text-blue-600 hover:underline">
                      Download Establishment Certificate
                    </a>
                  </p>
                </iframe>
              </div>
            </div>

            {/* IIC Rating Certificate */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">IIC Rating Certificate 2023-24</h3>
              <div className="flex justify-center">
                <iframe
                  title="IIC Rating Certificate 2023-24"
                  className="w-full h-96 border border-gray-300 rounded-lg"
                  src="https://indiraicem.ac.in/assets/pdf/IIC_Rating_Certificate_2023-24.pdf"
                >
                  <p>Your browser does not support iframes. Please download the PDF to view it: 
                    <a href="https://indiraicem.ac.in/assets/pdf/IIC_Rating_Certificate_2023-24.pdf" className="text-blue-600 hover:underline">
                      Download IIC Rating Certificate
                    </a>
                  </p>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .container {
          max-width: 1200px;
        }
        
        @media (max-width: 768px) {
          iframe {
            height: 300px;
          }
        }
        
        @media (max-width: 480px) {
          iframe {
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default IIC;