import { useState } from "react";
import BEComp from "../../assets/BEComp.pdf";

export default function PlacementInformation(){
     const [activeAccordion, setActiveAccordion] = useState(null);
      const [activeTab, setActiveTab] = useState("Placement Team");
return (
    <>
    <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">
            Placement Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Sidebar Tabs */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg p-4">
              <ul className="space-y-2">
                {[
                  "Placement Team",
                  "Our Recruiters",
                  "Placed Students",
                  "Placement Policy",
                ].map((tab, i) => (
                  <li
                    key={i}
                    onClick={() => setActiveTab(tab)}
                    className={`p-3 rounded-md cursor-pointer font-medium ${
                      activeTab === tab
                        ? "bg-tertiary border-l-4 border-secondary text-secondary"
                        : "hover:bg-gray-100 text-primary"
                    }`}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Accordion */}
            <div className="bg-white shadow-md border border-gray-200 rounded-lg">
              {/* Overview Accordion */}

              {activeTab === "Placement Team" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. About the Placement Cell",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            Placements give students the opportunity to gain
                            skills specific to their subject or industry of
                            choice as well as the employability skills required
                            for real-life work. It also increases their
                            knowledge of an industry or sector, allowing them to
                            make better-informed decisions about future career
                            choices.
                          </p>
                          <p className="mb-4 text-primary">
                            The Training & Placement department facilitates the
                            process of placement of students passing out from
                            the Institute besides collaborating with leading
                            organizations in setting up internship and training
                            programs for students. It enables them to get the
                            right direction and training to fulfil their dreams.
                          </p>
                          <p className="mb-4 text-primary">
                            The inculcation of guidance about market patterns
                            and employability helps the students in polishing
                            their skills — making a job available to every
                            student according to his capabilities.
                          </p>
                          <p className="text-primary">
                            To ensure the preparedness of students well before
                            they start facing recruiters, the dedicated Talent
                            Management Team under the placement cell edifies
                            students professionally. With the proper placement
                            and training, students learn how to put forth their
                            knowledge and abilities in the right way to fetch
                            the best of jobs.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Training Activities",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Create awareness about "career planning" and "career
                            mapping".
                          </li>
                          <li>
                            Organize training programmes in Quantitative
                            Aptitude, Logical Reasoning and Verbal Reasoning.
                          </li>
                          <li>Equip the students with life skills.</li>
                          <li>
                            Train the students on "Personality Development".
                          </li>
                          <li>
                            Conduct mock interviews and group discussions to
                            prepare students for corporate expectations.
                          </li>
                          <li>
                            Conduct online tests and written aptitude tests.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Placement Team Details",
                      content: (
                        <div className="space-y-3 text-primary">
                          <p>
                            <strong>
                              Director - Placement & Corporate Relations:
                            </strong>{" "}
                            Mr. J. S. Sidhu
                          </p>
                          <p>
                            <strong>Designation:</strong> Director - Placement &
                            Corporate Relations, Indira College of Engineering
                            and Management
                          </p>
                          <p>
                            <strong>Mobile:</strong> 9823091852
                          </p>
                          <p>
                            <strong>Email:</strong>{" "}
                            <a
                              href="mailto:js.sidhu@indiraicem.ac.in"
                              className="text-secondary underline"
                            >
                              js.sidhu@indiraicem.ac.in
                            </a>
                          </p>
                          <blockquote className="italic text-gray-600 mt-4 border-l-4 border-secondary pl-4">
                            "THERE IS NO ELEVATOR TO SUCCESS. YOU HAVE TO TAKE
                            THE STAIRS."
                          </blockquote>
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Our Recruiters Accordion */}
              {activeTab === "Our Recruiters" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. ICEM Top Recruiters",
                      content: (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-primary">
                          {[
                            "CLSA",
                            "Z S Solutions",
                            "R Systems",
                            "e-Zest",
                            "Infosys",
                            "Schlumberger",
                            "Tibco Software",
                            "KPMG",
                            "KPIT",
                            "Zycus Infotech",
                            "GS Labs",
                            "Odessa Technologies",
                            "Xoriant",
                            "Cybage",
                            "QED Baton",
                            "Sigma Electric",
                            "Pubmatic",
                            "Syntrosys",
                            "NeilSoft Limited",
                            "Meditab",
                            "Obara Corporation",
                            "Samsung",
                            "VANDERLANDE",
                            "Jaya Hind Industries",
                            "Sanmar Group",
                            "Forbes Marshall",
                            "Finolex Industries",
                            "Sandvik",
                            "JK Tyre",
                            "Steria",
                            "Anglo Eastern",
                            "Webtech Developers Pvt. Ltd",
                            "Asahi Glass",
                            "Amura Marketing Technologies",
                            "ATG",
                            "Forgeahead Solutions Pvt. Ltd",
                            "Excelize",
                            "Larsen & Toubro Infotech",
                            "Pernod Ricard",
                            "Bridgestone India Pvt. Ltd.",
                            "Finolex Pipes",
                            "Bitwise Solutions Pvt Ltd",
                            "SKF India Ltd.",
                            "Benchmark IT solutions",
                            "3DPLM",
                            "Vascon Engineers Pvt. Ltd",
                            "Emcure India",
                            "Gradmener Technology Pvt. Ltd.",
                            "Force Motors",
                            "Expat Properties India Ltd",
                            "Premium Transmission",
                            "Greeksoft Technologies Pvt Ltd",
                            "Hettich",
                            "ZF India",
                            "Kinetic",
                            "Vodafone",
                            "Spam Pumps",
                            "Suzlon",
                            "Everest Industries Ltd.",
                            "Fasttrack Software",
                            "Dimetrix Technology",
                            "Wishtree Technology",
                            "Open Silicon",
                            "Talent Beat",
                            "Gabriel India Ltd",
                            "Savy Soft",
                            "Amdocs",
                            "Zuti Engineering",
                            "Wipro",
                            "NTT Data",
                            "TCS",
                            "Hitachi",
                            "Persistent",
                            "Hurix",
                            "Capgemini",
                            "Alpha Health Venture",
                            "Quinnox, Inc.",
                            "Triveni Turbines",
                            "Mphasis",
                            "Globus Soft",
                            "Syntel",
                            "Impact Services",
                            "QuikHeal",
                            "Tech Mahindra",
                            "Harbinger Group",
                            "ADOR Welding Ltd.",
                            "HP",
                            "JUSPAY",
                            "Eternus",
                            "Syngenta",
                            "Cognizant",
                            "Jade Global",
                            "IBM",
                            "Prolifics",
                            "Barclays",
                            "Fiserv India",
                            "ATOS",
                            "Angular Minds Pvt Ltd",
                            "Tata Technologies",
                            "Avalara",
                            "Ennovate IT",
                            "Tudip Technologies",
                            "Infinite Computing",
                            "Gridlogics",
                            "Hexaview Technologies",
                            "Quorum Software",
                            "Crelio Health",
                            "Worldline India",
                            "SAS",
                            "Data Axle",
                            "NeoSoft Technologies",
                            "Merkle Sokrati (A dentsu Company)",
                            "Coditas Solutions LLP",
                            "RNF Technologies",
                            "InnoEye Technologies",
                            "Ace-micromatics",
                            "Polycab",
                            "Neilsoft Ltd.",
                            "Yardi Software",
                            "TVS Logistics Services Ltd.",
                            "FIS Global",
                            "Yazaki Solutions Pvt. Ltd",
                            "rtCamp Solutions Pvt. Ltd",
                            "Finquick Technology",
                            "Wolters Kluwer",
                            "Centium Consulting India",
                            "Indovance Pvt. Ltd.",
                            "Enpro Industries",
                            "Faurecia",
                            "Samson Controls Pvt. Ltd",
                            "VRF Aircon",
                            "Tetrapak",
                            "Blue Star India Ltd",
                            "Thyssenkrupp",
                            "DHL Supply Chain India",
                            "vConstruct Pvt. Ltd.",
                            "Knest Manufacturers LLP",
                            "AON | Sobha Developers",
                            "Plank and Weave India Pvt. Ltd.",
                            "Sell.do",
                            "GKN Powder Metullargy",
                            "Veritas Technologies",
                            "L&T Infotech",
                            "KSB Tech Pvt. Ltd.",
                            "Kinlong Hardware India Pvt. Ltd.",
                            "Polyrub Cooper Standard FTS Pvt. Ltd",
                            "DeltaX",
                            "Prometteur Solutions Pvt Ltd",
                            "eBaoTech India",
                            "Arihant Adroit InfoSystems Pvt. Ltd. (AAIS Global)",
                            "Equations Work",
                            "Synoptek",
                            "SANKEY BUSINESS SOLUTIONS PVT LTD",
                            "Visteon",
                            "Zepto",
                            "Wolters Kluwer",
                            "Deepak Fertilisers & Petrochemicals Ltd",
                            "Palo Alto Networks",
                            "Yash Technologies",
                            "TM Automotive Seating Systems Pvt. Ltd.",
                            "Triveni Turbines",
                            "Hexaware Technologies",
                            "Fundsroom Investment Services",
                            "Deltax",
                            "Namma Yatri",
                            "RDC Concrete",
                          ].map((company, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <span className="text-secondary font-medium">
                                {company}
                              </span>
                            </div>
                          ))}
                        </div>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Placed Students Accordion */}
              {activeTab === "Placed Students" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Placed Students 2024-25",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2024-25
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "2. Placed Students 2023-24",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2023-24
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "3. Placed Students 2022-23",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2022-23
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Placed Students 2021-22",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2021-22
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "5. Placed Students 2020-21",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2020-21
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "6. Placed Students 2019-20",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2019-20
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "7. Placed Students 2018-19",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2018-19
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "8. Placed Students 2017-18",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-secondary">
                          <li>
                            <a
                              href={BEComp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              Placed Students 2017-18
                            </a>
                          </li>
                        </ul>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Placement Policy & Guidelines Accordion */}
              {activeTab === "Placement Policy" && (
                <div className="p-0">
                  {[
                    {
                      title: "1. Overview",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            The role of the Training and Placement Cell is that
                            of a facilitator and counselor for placement-related
                            activities. The Training and Placement Cell provides{" "}
                            <strong>100% placement assistance</strong>
                            to all registered students as per the norms provided
                            here.
                          </p>
                          <p className="text-primary">
                            The placement team endeavors to assist all genuinely
                            interested and eligible B.E. students in beginning
                            their careers with organizations of repute.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "2. Registration Process",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            Students interested in placements need to register
                            themselves as per the registration link provided,
                            which includes their academic details and contact
                            information in the VI Semester.
                          </p>
                          <p className="text-primary">
                            Students failing to submit/update their details by
                            the end of the VI semester will{" "}
                            <strong>
                              not be permitted to attend interviews
                            </strong>
                            starting from the VII semester onwards.
                          </p>
                        </>
                      ),
                    },
                    {
                      title: "3. Selection of Companies",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>Job profile and growth prospects.</li>
                          <li>The package being offered by the company.</li>
                          <li>Past record of recruitment at ICEM.</li>
                          <li>Feedback from Alumni regarding the company.</li>
                        </ul>
                      ),
                    },
                    {
                      title: "4. Eligibility Criteria",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Minimum aggregate of 60% or above from SSC onwards.
                          </li>
                          <li>No backlog subjects in B.E.</li>
                          <li>
                            Minimum of 60% score in internal marks, soft skill,
                            technical, and aptitude training conducted by the
                            institute.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "5. Placement Rules",
                      content: (
                        <>
                          <p className="mb-3 text-primary">
                            The placement committee strictly enforces a
                            <strong>
                              {" "}
                              "One Student - One Job Offer" policy
                            </strong>
                            .
                          </p>
                          <p className="font-semibold mb-2 text-primary">
                            Company Categories:
                          </p>
                          <ul className="list-disc pl-6 space-y-1 text-primary">
                            <li>
                              <strong>Category A:</strong> Companies offering
                              CTC ≥ ₹4 LPA.
                            </li>
                            <li>
                              <strong>Category B:</strong> Companies offering
                              CTC ≥ ₹1.8 LPA but less than ₹4 LPA.
                            </li>
                            <li>
                              <strong>Category C:</strong> Companies offering
                              CTC &lt; ₹1.8 LPA.
                            </li>
                          </ul>

                          <p className="mt-4 mb-2 font-semibold text-primary">
                            Additional Rules:
                          </p>
                          <ul className="list-disc pl-6 space-y-2 text-primary">
                            <li>
                              Once a student's name is submitted for an
                              interview and they do not attend, they will be{" "}
                              <strong>blacklisted</strong> and fined ₹1000
                              (subject to management approval).
                            </li>
                            <li>
                              Once placed, students cannot appear for any
                              further interviews.
                            </li>
                            <li>
                              Students withdrawing during a selection process
                              will be disqualified for the rest of the year.
                            </li>
                            <li>
                              Students opting out of the placement process must
                              submit a written letter to the placement head
                              stating their reason.
                            </li>
                          </ul>
                        </>
                      ),
                    },
                    {
                      title: "6. Dress Code & Conduct",
                      content: (
                        <ul className="list-disc pl-6 space-y-2 text-primary">
                          <li>
                            Students must be <strong>formally dressed</strong>{" "}
                            during any company interaction.
                          </li>
                          <li>
                            Men: Formal shirt, trousers, tie, and leather shoes.
                          </li>
                          <li>
                            Women: Salwar-Kameez or formal shirt and trousers.
                          </li>
                          <li>
                            Misbehavior with placement cell staff or student
                            representatives will result in immediate
                            disqualification from placements.
                          </li>
                          <li>
                            Any false information in resumes will lead to
                            de-registration from the placement process.
                          </li>
                        </ul>
                      ),
                    },
                    {
                      title: "7. Policy Revisions",
                      content: (
                        <>
                          <p className="mb-4 text-primary">
                            If market conditions or job scenarios necessitate
                            changes, the placement policy may be revised to{" "}
                            <strong>maximize student benefit</strong>.
                          </p>
                          <p className="text-primary">
                            The placement cell will select student coordinators
                            from all streams every December/January (post 5th
                            semester) to assist in the process.
                          </p>
                        </>
                      ),
                    },
                  ].map((section, i) => (
                    <div key={i} className="border-b border-gray-200">
                      <button
                        onClick={() =>
                          setActiveAccordion(activeAccordion === i ? null : i)
                        }
                        className={`w-full flex justify-between items-center p-4 text-left font-medium transition-all duration-200 ${
                          activeAccordion === i
                            ? "bg-secondary text-white"
                            : "text-primary hover:bg-tertiary"
                        }`}
                      >
                        {section.title}
                        <span className="text-xl font-bold">
                          {activeAccordion === i ? "−" : "+"}
                        </span>
                      </button>

                      {activeAccordion === i && (
                        <div className="p-4 bg-tertiary text-primary rounded-b-md">
                          {section.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </>
)
}
