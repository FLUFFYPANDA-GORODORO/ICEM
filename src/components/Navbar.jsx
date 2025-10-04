import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiMenuAlt2, HiX, HiChevronDown } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isHelplineOpen, setIsHelplineOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const toggleHelpline = () => setIsHelplineOpen(!isHelplineOpen);

  const handleMouseEnter = (dropdownName) => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 150);
    setDropdownTimeout(timeout);
  };

  const dropdownContent = {
    aboutUs: {
      title: "Our Navigation",
      sections: [
        {
          items: [
            "Indira College of Engineering and Management (ICEM)",
            "Shree Chanakya Education Society",
            "Indira Group of Institute",
            "Chairpersons Profile & Chief Mentor IGL",
          ],
        },
        {
          title: "Facilities",
          items: [
            "Sports",
            "Library",
            "Hostel",
            "Transport",
            "Canteen",
            "Gym",
            "Primary Health Centre",
            "Governance",
          ],
        },
      ],
    },
    studentCorner: {
      title: "Student Corner",
      sections: [
        {
          items: [
            {
              label: "Student Welfare",
              link: "/student-corner/student-welfare",
            },
            { label: "IIC", link: "/student-corner/iic" },
            {
              label: "Induction Programme",
              link: "/student-corner/induction-programme",
            },
            {
              label: "Student Council",
              link: "/student-corner/student-council",
            },
            { label: "National Service Scheme", link: "/student-corner/nss" },
            { label: "ICEM Awards", link: "/student-corner/icem-awards" },
            { label: "Academics", link: "/student-corner/academics" },
            { label: "Committies", link: "/student-corner/committees" },
            {
              label: "Grievance Redressals",
              link: "/student-corner/grievance-redressals",
            },
          ],
        },
      ],
    },
    programs: {
      title: "Programs",
      sections: [
        {
          title: "Undergraduate Programs",
          items: [
            "Civil Engineering",
            "Computer Engineering",
            "Mechanical Engineering",
            "Artificial Intelligence and Data Science",
            "Electronics and Telecommunication",
            "First Year Engineering",
            "Information Technology",
            "Integrated MBA (BBA + MBA)",
            "Integrated MBA (BCA + MCA)",
          ],
        },
        {
          title: "Postgraduate Programs",
          items: [
            "MBA",
            "MCA",
            "M-Tech in Mechanical Engineering",
            "M-Tech in Computer Science",
          ],
        },
      ],
    },
    admission: {
      title: "Admission",
      sections: [
        {
          title: "Programs",
          items: [
            "Engineering",
            "Integrated MBA (BBA + MBA)",
            "MBA",
            "MCA",
            "Admission Advertisement",
          ],
        },
        {
          title: "Admission Process",
          items: [
            "Sanction Intake",
            "Eligibility Criteria",
            "Documents Required",
            "Admission Procedure",
            "Fee Structure",
            "NOTICE",
            "Scholarship",
            "IL & ACAP Merit List & Vacancy Position",
          ],
        },
      ],
    },
    placement: {
      title: "Placement",
      sections: [
        {
          items: [
            "Placement Team",
            "Our Recruiters",
            "Placed Students",
            "Placement Policy",
          ],
        },
      ],
    },
    accreditation: {
      title: "Accreditation",
      sections: [
        {
          title: "NAAC",
          items: [
            "SSR reports year wise",
            "Criteria wise Details",
            "AQAR reports",
            "NAAC Certificate",
          ],
        },
        {
          title: "IQAC",
          items: [
            "IQAC Committee",
            "IQAC Notices",
            "MOMS & Actions",
            "IQAC Formats",
            "Best Practices",
            "Distinctive Practice",
          ],
        },
        {
          title: "Reports & Others",
          items: [
            "SPPU Annual Report",
            "Code of Conduct",
            "NIRF",
            "Financial Statements",
            "Soft Skills & Aptitude",
            "Reports",
          ],
        },
      ],
    },
  };

  const renderDropdownContent = (content) => (
    <div className="max-w-8xl  px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {content.sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            {section.title || content.title}
          </h3>
          <ul className="space-y-4 text-gray-800 text-sm">
            {section.items.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="flex justify-between items-center border-b border-gray-300 pb-2"
              >
                {item.link ? (
                  <Link
                    to={item.link}
                    className="flex justify-between items-center w-full text-gray-800 hover:text-primary transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-500" />
                  </Link>
                ) : (
                  <div className="flex justify-between items-center w-full">
                    <span>{item.label || item}</span>
                    <TbExternalLink className="text-gray-400 opacity-50" />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Outer Layout like NewNav */}
      <nav className="w-full h-[12vh] flex bg-white shadow-sm font-sans relative">
        {/* Left: Logo Section */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <img src={Logo} alt="Logo" className="h-20 pl-4" />
        </div>

        {/* Right: Navigation Section */}
        <div className="w-[70%] h-full flex flex-col">
          {/* Top Bar */}
          <div className="flex justify-end  w-full h-[45%] text-xs text-gray-700 bg-white">
            {/* Container for all top bar content - shifted to right */}
            <div className="flex  gap-8">
              {/* Left Links */}
              <div className="flex items-center gap-2 font-bold">
                <a href="/" className="hover:text-primary">
                  Pay Fee
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="hover:text-primary">
                  ERP Login Staff
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="hover:text-primary">
                  ERP Login Student
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="hover:text-primary">
                  360<sup>0</sup> Tour
                </a>
                <span className="text-gray-400">|</span>
                <a href="/" className="hover:text-primary">
                  Contact Us
                </a>
              </div>

              {/* Right Buttons */}
              <div className="flex ">
                <button className="bg-primary text-white px-8 py-1 text-xs hover:bg-primary/90 font-bold border-r border-white">
                  Apply Now
                </button>
                <button
                  onClick={toggleHelpline}
                  className="bg-primary text-white px-4 py-1 text-xs flex items-center gap-3 hover:bg-primary/90 font-bold"
                >
                  Admissions Helpline
                  <HiMenuAlt2 size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex justify-end items-center h-[55%] text-black px-6 text-sm font-medium whitespace-nowrap gap-10 ">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary  bg-gray-100 "
              onMouseEnter={() => handleMouseEnter("aboutUs")}
              onMouseLeave={handleMouseLeave}
            >
              <span>About Us</span>
             
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("studentCorner")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Student Corner</span>
        
            </div>

            {/* Combined Programs Dropdown */}
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Programs</span>
         
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("admission")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Admission</span>
           
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("placement")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Placement</span>
       
            </div>

            <h2 className="hover:text-secondary cursor-pointer hover:text-primary">Alumni</h2>

            <div
              className="flex items-center gap-1 cursor-pointer hover:text-primary"
              onMouseEnter={() => handleMouseEnter("accreditation")}
              onMouseLeave={handleMouseLeave}
            >
              <span>Accreditation</span>
         
            </div>

            <h2 className="hover:text-secondary cursor-pointer hover:text-primary">Research</h2>
          </div>
        </div>

        {/* Dropdowns */}
        {activeDropdown && (
          <div
            onMouseEnter={() => handleMouseEnter(activeDropdown)}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-0 w-full backdrop-blur-md bg-white/60 shadow-xl border-t border-gray-200 z-50"

          >
            {renderDropdownContent(dropdownContent[activeDropdown])}
          </div>
        )}
      </nav>

      {/* Helpline Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isHelplineOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-primary text-white p-4 flex justify-between items-center">
          <h3 className="text-lg font-bold">Admissions Helpline</h3>
          <button
            onClick={toggleHelpline}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6 text-gray-800 space-y-6 overflow-y-auto h-full">
          {/* Numbers */}
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              For more information give a miss call on
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-primary text-center">
                1800 267 1999
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-primary border-b border-gray-200 pb-2">
              Regional Helplines
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-sm">Admission Helpline</p>
                <p className="text-lg font-semibold">9501105714</p>
                <p className="text-lg font-semibold">9501105715</p>
              </div>
              <div>
                <p className="font-medium text-sm">Delhi & NCR Helpline</p>
                <p className="text-lg font-semibold">9599368734</p>
              </div>
              <div>
                <p className="font-medium text-sm">WB / North East Helpline</p>
                <p className="text-lg font-semibold">9810355724</p>
              </div>
              <div>
                <p className="font-medium text-sm">
                  UP / Bihar / Jharkhand Helpline
                </p>
                <p className="text-lg font-semibold">9873288076</p>
              </div>
              <div>
                <p className="font-medium text-sm">J&K / Rajasthan Helpline</p>
                <p className="text-lg font-semibold">9501105716</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-medium text-green-800 text-sm">WhatsApp</p>
            <p className="text-xl font-bold text-green-800">9859000000</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isHelplineOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleHelpline}
        />
      )}
    </>
  );
};

export default Navbar;