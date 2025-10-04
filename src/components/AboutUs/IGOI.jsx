import React from "react";
import Banner from "../../assets/ICEM_Banner.jpg";
import ChairpersonImg from "../../assets/chanakya.png";
import PrincipalImg from "../../assets/chanakya.png";
import CollegeImg from "../../assets/chanakya.png"; // temporary placeholder image for all 15 institutes
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function IGOI() {
  const rightLinks = [
    "Overview",
    "Shree Chanakya Education Society",
    "Indira Group of Institute",
    "Chairpersons Profile & Chief Mentor IGL",
    "Sports",
    "Library",
    "Hostel",
    "Transport",
    "Canteen",
    "Gym",
    "Primary Health Centre",
    "Governance",
  ];

  const quickLinks = [
    "Eligibility & Fees",
    "Download Certificate Formats",
    "Admission Helpline",
    "Availability of Forms",
    "Apply Online",
  ];

  const institutes = [
    { name: "Indira Institute of Management Pune (IIMP)", url: "www.indiraiimp.edu.in" },
    { name: "Indira Institute of Management PGDM (IIMP)", url: "www.indiraiimppgdm.edu.in" },
    { name: "Indira College of Pharmacy (ICP)", url: "www.indiraicp.edu.in" },
    { name: "Indira School of Business Studies PGDM (ISBS)", url: "www.indiraisbs.ac.in" },
    { name: "Indira School of Business Studies MBA (ISBS-MBA)", url: "www.indiraisbsmb.edu.in" },
    { name: "Indira Global Business School (IGBS)", url: "www.indiraigbs.edu.in" },
    { name: "Indira College of Commerce & Science (ICCS)", url: "www.iccs.ac.in" },
    { name: "Indira College of Engineering & Management (ICEM)", url: "www.indiraicem.ac.in" },
    { name: "Indira National School (INS)", url: "www.indiranationalschool.ac.in" },
    { name: "Indira College of Architecture & Design (ICAD)", url: "www.indiraicad.edu.in" },
    { name: "Indira College of Arts, Commerce & Science (ICACS)", url: "www.icacs.ac.in" },
    { name: "Indira School of Communication (ISC)", url: "www.indiraisc.edu.in" },
    { name: "Indira National School - Parandwadi (INS-P)", url: "www.insparandwadi.ac.in" },
    { name: "Indira College of Physiotherapy (ICP)", url: "www.indiraicp.ac.in" },
    { name: "Indira Institute of Technology (IIT)", url: "www.indiraiit.edu.in" },
  ];

  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Banner */}
      <div className="w-full h-[60vh] relative">
        <img src={Banner} alt="Indira Group Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            Indira Group of Institutes (IGI)
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 py-16 px-6">
        {/* Left Section */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Indira Group of Institutes (IGI)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Shree Chanakya Education Society’s “Indira Group of Institutes”,
            Pune was established in 1994, with the explicit vision to provide
            sustainable impetus to the corporate and entrepreneurial abilities
            in the youth. The realization that a robust framework of education
            is indispensable for the growth of global leaders, the visionary,
            Dr. Tarita Shankar, Chairperson, Indira Group, integrated her
            pursuit of excellence and articulated educational institutions,
            known as Indira Group of Institutes (IGI), which imbibe human
            excellence and demonstrate strong social values, with a single
            minded pursuit of developing the youth to become business leaders.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Unrelenting initiatives by the management team at Indira led to
            adding of multi-disciplines such as Management, Information
            Technology, Pharmacy, Commerce, Science, Engineering and Mass
            Communication to the group and growth has been as deep as it has
            been wide. With 12 institutions, IGI now offers education right from
            Kindergarten to Doctorate level studies. IGI believes in the
            economic independence of individuals. In this endeavor we aim to
            inspire our post graduate students to create a niche for themselves
            in the Indian Economic order ﬁrst, and then compete globally. We owe
            our gratitude to the Indian Industry for consistently collaborating
            with us in this endeavor. Renowned industrialists have visited us
            and tremendously enhanced the morale of our students by sharing
            their vast knowledge and experience about entrepreneurial
            opportunities and foster a spirit of entrepreneurship amongst
            students.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Having traversed the journey of twenty-ﬁve years we have ourselves
            made certain signiﬁcant achievements which, we are aware, are but
            the building blocks for achieving further heights.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Indira is ranked amongst the top 2 B-schools in Pune, by AIMA – IMJ.</li>
            <li>Top 30 All India ranking on Industry Interface parameters.</li>
            <li>Consistently strong academic results and university ranks.</li>
            <li>Strong placement record with top corporate recruiters.</li>
            <li>Campus agreement with Microsoft for software and training.</li>
            <li>Workshops by Microsoft for train-the-trainer modules.</li>
            <li>Ranked among Top 3 Educational Institutes in Pune by Business India.</li>
            <li>Accredited by multiple national certifying bodies.</li>
            <li>First management institute in Maharashtra accredited by NBA, New Delhi.</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3 bg-[#111] text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
          <ul className="space-y-4 w-full mb-8">
            {rightLinks.map((link, index) => (
              <li key={index} className="pb-2 border-b border-gray-500 hover:text-primary cursor-pointer transition-colors">
                {link}
              </li>
            ))}
          </ul>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-6 rounded-lg mb-8">
            <h3 className="text-center text-lg font-bold mb-4">GET IN TOUCH WITH US</h3>
            <form className="space-y-3">
              <input type="text" placeholder="YOUR NAME*" className="w-full p-2 text-black rounded" />
              <div className="flex items-center bg-white rounded">
                <span className="pl-2">🇮🇳</span>
                <input type="text" placeholder="PHONE NUMBER*" className="w-full p-2 text-black rounded-r" />
              </div>
              <input type="email" placeholder="YOUR EMAIL ID" className="w-full p-2 text-black rounded" />
              <select className="w-full p-2 text-black rounded">
                <option>Select Program</option>
                <option>Engineering</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
              <input type="text" placeholder="STATE" className="w-full p-2 text-black rounded" />
              <p className="text-xs text-gray-400">
                By providing your contact details, you agree to receive updates from Indira College through WhatsApp.
              </p>
              <button type="submit" className="w-full bg-red-600 text-white font-semibold py-2 rounded hover:bg-red-700 transition">
                Apply Now
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-center text-red-500 font-bold mb-4 border-t border-gray-500 pt-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm hover:text-primary cursor-pointer transition-colors">
                  <span className="text-red-500">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Chairperson's Message */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h3 className="text-2xl font-bold mb-6">Chairperson’s Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 rounded-xl p-6 shadow-md">
          <div className="md:w-1/3">
            <img
              src={ChairpersonImg}
              alt="Chairperson"
              className="rounded-lg object-cover w-full h-[380px]"
            />
            <div className="flex justify-center gap-4 mt-3 text-gray-700">
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram /> <FaTwitter />{" "}
              <FaYoutube />
            </div>
            <div className="mt-3 text-center">
              <h4 className="font-semibold text-lg">Dr. Tarita Shankar</h4>
              <p className="text-sm text-gray-600">
                Founder Secretary & Chief Managing Trustee, SCES <br />
                Chairperson & Chief Mentor, Indira Group of Institutes
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Email:{" "}
                <a
                  href="mailto:taritashankar@indiraedu.com"
                  className="text-blue-600 hover:underline"
                >
                  taritashankar@indiraedu.com
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-3">
              Pursuit of Management Education at Indira Group of Institutes has
              been an inspiring journey. With over two decades of existence,
              Indira strongly believes in the power of education to transform
              the youth. Indira embraces change and epitomizes matching
              innovation in curriculum, helping aspiring managers become
              capable professionals.
            </p>
            <p className="mb-3">
              Indira offers holistic and transformative learning experiences,
              designed and delivered by experts from industry and academia. Our
              curriculum keeps programs contextually abreast, and our pedagogy
              inspires application-oriented learning.
            </p>
            <p>
              Indira strives to create good human beings and not just
              professionals. With confidence that our intentions have matched
              our efforts, I wish you the very best in the future.
            </p>
          </div>
        </div>
      </div>

      {/* Principal’s Message */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold mb-6">Principal’s Message</h3>
        <div className="flex flex-col md:flex-row gap-8 bg-gray-100 rounded-xl p-6 shadow-md">
          <div className="md:w-1/3">
            <img
              src={PrincipalImg}
              alt="Principal"
              className="rounded-lg object-cover w-full h-[350px]"
            />
            <div className="flex justify-center gap-4 mt-3 text-gray-700">
              <FaFacebookF /> <FaLinkedinIn /> <FaInstagram /> <FaTwitter />{" "}
              <FaYoutube />
            </div>
            <div className="mt-3 text-center">
              <h4 className="font-semibold text-lg">Dr. Nilesh Uke</h4>
              <p className="text-sm text-gray-600">Principal, ICEM</p>
            </div>
          </div>
          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-3">
              Indira Institutes appeared with the vision of creating a strong
              academic foundation while fostering the all-round development of
              students. It gives me immense pleasure to lead Indira College of
              Engineering and Management, providing opportunities for students
              and faculty to engage with industry experts and research scholars.
            </p>
            <p className="mb-3">
              ICEM follows a unique pedagogy ensuring students face the demands
              of a rapidly evolving world. This is supported by real-world
              exposure through industry interaction and applied learning.
            </p>
            <p>
              Our vision combines academic excellence with ethical values,
              inspiring our students to become leaders who make a positive
              difference in society.
            </p>
          </div>
        </div>
      </div>

      {/* Institutes Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold mb-8 text-gray-900">Institutes under Indira Group (IGI)</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutes.map((inst, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src={CollegeImg} alt={inst.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-gray-800 text-base">{inst.name}</h4>
                <p className="text-sm text-gray-500 mt-1">{inst.url}</p>
                <button className="mt-3 px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded hover:bg-blue-800 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IGOI;
