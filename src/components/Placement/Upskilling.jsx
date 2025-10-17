export default function Upskilling() {
  const sections = [
    {
      title: "Mechanical",
      items: [
        { image: "/autocad.png", name: "AUTODESK AutoCAD" },
        { image: "/ptc-creo.png", name: "Creo" },
        { image: "/catia.png", name: "CATIA" },
        { image: "/solidworks.png", name: "SolidWorks" },
        { image: "/autocad.png", name: "CAD & CAM" },
        { image: "/assembly.png", name: "Assembly" },
      ],
    },
    {
      title: "Civil",
      items: [
        { image: "/revit.png", name: "Revit" },
        { image: "/etabs.png", name: "ETABS" },
        { image: "/bim360.png", name: "Autodesk BIM 360" },
        { image: "/staad.png", name: "STAAD.Pro" },
        { image: "/3max.png", name: "3DS Max" },
        { image: "/autocad.png", name: "AutoCAD" },
      ],
    },
    {
      title: "Electrical / ENTC",
      items: [
        { image: "/scada.png", name: "PLC SCADA" },
        { image: "/vehicle.png", name: "Electric Vehicle" },
        { image: "/trans.png", name: "Transformers & Circuits" },
        { image: "/battery.png", name: "Battery Management System" },
        { image: "/moble.png", name: "App/Web Development" },
        { image: "/iot.png", name: "Internet of Things (IoT)" },
      ],
    },
  ];


  return (
    <>
      {/* Upskilling for the Future Section (Balanced Compact Layout) */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-8">
            Upskilling for the Future
          </h2>

          {/* Skillverse Card */}
          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm mb-6 overflow-hidden rounded-lg">
            {/* Left Column: Title */}
            <div className="bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              (Image here)
            </div>

            {/* Right Column: Points */}
            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Interpersonal Skills
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>
                  Effective Communication Skills & Importance of Verbal and
                  Non-Verbal Communication
                </li>
                <li>Questioning Skills to Clarify Doubts and Assumptions</li>
                <li>Improving Listening Skills</li>
                <li>Mock GD & Mock PI</li>
                <li>Effective Writing Skills – Emails & Chats</li>
                <li>Emotional Intelligence in Communication</li>
                <li>7Cs of Professional Communication</li>
                <li>Telephone Communication Skills – Seven Aspects</li>
                <li>Managerial Communication Skills</li>
                <li>Conflict Management in Teams</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row bg-white border border-gray-200 shadow-sm overflow-hidden rounded-lg">
            {/* Left Column: Title */}
            <div className="bg-gray-50 md:w-[35%] flex items-center justify-center text-secondary font-semibold text-lg p-6 border-r border-gray-200">
              (Image here)
            </div>

            {/* Right Column: Points */}
            <div className="p-6 md:w-[65%]">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Aptitude
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm leading-relaxed">
                <li>Algebra and Number Theory</li>
                <li>Arithmetic and Mensuration</li>
                <li>Work, Time and Distance</li>
                <li>Permutations and Combinations</li>
                <li>Data Interpretation and Sufficiency</li>
                <li>Modern and Financial Mathematics</li>
                <li>Gamification</li>
                <li>Logical Reasoning and Puzzles</li>
                <li>Data Analysis and Probability</li>
                <li>Problem-Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

  
      {/* Engineering - Technical Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-10 uppercase">
            Engineering - Technical
          </h2>

          {/* Columns (Mechanical / Civil / ENTC) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-lg font-bold text-secondary mb-5 uppercase tracking-wide">
                  {section.title}
                </h3>

                {/* Logos Grid (Same style as Companies section) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                  {section.items.map((item, index) => (
                    <div
                      key={index}
                      className="h-20 w-24 bg-white border border-gray-200 flex flex-col items-center justify-center text-gray-600 text-xs font-medium shadow-sm hover:shadow-md hover:-translate-y-1 transition-all rounded-md"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 object-contain mb-1"
                      />
                      <p className="text-[10px] text-gray-700 font-semibold text-center leading-tight">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
