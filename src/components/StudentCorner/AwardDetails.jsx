import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Banner from "../../assets/ICEM_Banner.jpg";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";

const AwardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const awards = {
    1: {
      title: "Best Academia Industry Alliance Award",
      date: "25th April, 2025",
      image: Img1,
      content: `
        Indira College of Engineering and Management, Pune received the <b>“Best Academia Industry Alliance Award”</b> by <b>Education World</b> at The Grand, New Delhi on 25th April 2025 for AY 2025-26.<br/><br/>
        This award recognizes ICEM’s commitment to fostering industry-academia partnerships, innovation-driven education, and hands-on student exposure through internships and collaborative projects.<br/><br/>
        The event featured top academic institutions and corporate leaders acknowledging initiatives that bridge skill gaps and prepare future-ready graduates.<br/><br/>
        ICEM continues to lead as a model for industry-oriented engineering education in India.
      `,
    },
    2: {
      title: "Innovation and Excellence Awards 2022",
      date: "26th March, 2022",
      image: Img2,
      content: `
        <b>Indira College of Engineering and Management (ICEM)</b> and <b>Indira Global Business School (IGBS)</b> hosted the <b>Indira Innovation and Excellence Awards 2022</b> under the theme <b>“Innovate to Excel”</b>.<br/><br/>
        The awards honored leading Indian Innovators, Entrepreneurs, and Senior Leaders from reputed organizations for their contributions to humanity and technological advancement.<br/><br/>
        The event celebrated innovation as the driving force of human progress — from the invention of the wheel to AI-driven machines and biotech breakthroughs.<br/><br/>
        <b>Highlights:</b>
        <ul class='list-disc ml-6'>
          <li>Morning sessions with experts from Civil, Mechanical, Computer, MCA, and MBA disciplines.</li>
          <li>Evening HR & Innovation Awards Ceremony recognizing outstanding innovators.</li>
          <li>Cultural performances, stand-up by Mandar Bhide, and a concert by the Lambada Band.</li>
        </ul><br/>
        The event emphasized nurturing creative thinking among young professionals and showcasing India’s innovation potential.
      `,
    },
    3: {
      title: "International Innovation Summit & HR Awards 2018 (3i)",
      date: "2018",
      image: Img3,
      content: `
        The <b>11th Indira International Innovation Summit and HR Awards (3i) 2018</b> celebrated entrepreneurship, innovation, and human resource excellence.<br/><br/>
        Organized by ICEM, it featured interactive sessions from India’s top startups on <i>“The Spirit of Entrepreneurship and Employability.”</i><br/><br/>
        The summit was followed by vibrant cultural performances by students, reflecting ICEM’s holistic approach to education.<br/><br/>
        The event reinforced the institute’s mission to foster innovation-driven learning and collaboration between academia and industry.
      `,
    },
    4: {
      title: "Indira Engineering and Architecture Excellence Awards 2017",
      date: "18th January, 2017",
      image: Img4,
      content: `
        The <b>10th Indira Engineering and Architecture Excellence Awards 2017</b> marked a decade of celebrating technical brilliance at Indira Group of Institutes.<br/><br/>
        The ceremony was graced by <b>Lt. Gen. A.K. Singh (Retd.)</b>, PVSM, AVSM, SM, VSM — Ex GOC-in-C, Southern Command and Ex Lt. Governor of Andaman & Nicobar Islands and Puducherry.<br/><br/>
        The celebration concluded with a high-energy live concert by India’s superstar rapper <b>Badshah</b>.<br/><br/>
        The event recognized outstanding engineers and architects shaping India’s infrastructure landscape.
      `,
    },
    5: {
      title: "9th 3i Summit & HR Excellence Awards 2016",
      date: "15th January, 2016",
      image: Img5,
      content: `
        The <b>9th Indira International Innovation Summit & HR Excellence Awards 2016</b> explored the theme <b>“Innovating in Digital India: Challenges and Opportunities.”</b><br/><br/>
        Organized by ICEM, the event promoted <b>industry-academia linkages</b> and innovation-led growth among budding engineers.<br/><br/>
        Sessions featured entrepreneurs and innovators sharing their experiences in digital transformation and startup culture.<br/><br/>
        A special segment honored <b>Pune’s junior colleges</b> for their contribution to education and talent development.
      `,
    },
    6: {
      title: "8th International Innovation Summit and HR Excellence Awards 2015",
      date: "23rd January, 2015",
      image: Img6,
      content: `
        The <b>8th Indira International Innovation Summit and HR Excellence Awards 2015</b>, themed <b>“Youth, Innovation, and Entrepreneurship,”</b> aimed to inspire the next generation of leaders.<br/><br/>
        The event was inaugurated by <b>Dr. Tarita Shankar</b> (Chairperson, Indira Group of Institutes) and <b>Prof. Chetan Wakalkar</b> (Group Director).<br/><br/>
        Chief Guest <b>Hon. Shri Anil Ji Shirole</b>, MP, emphasized that <i>“Innovation is the key to success for the youth of today and crucial for nation-building.”</i><br/><br/>
        The summit brought together eminent personalities across industries, promoting a culture of innovation among students.
      `,
    },
  };

  const award = awards[id];

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      <div className="w-full h-[40vh] relative">
        <img src={Banner} alt="Award Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Award Details</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto py-12 px-6">
        <button
          onClick={() => navigate(-1)}
          className="text-primary font-semibold mb-6 hover:underline"
        >
          ← Back to Awards
        </button>

        <h2 className="text-3xl font-bold text-secondary mb-2">{award.title}</h2>
        <p className="text-sm text-gray-500 mb-6">Published on {award.date}</p>

        <img src={award.image} alt={award.title} className="w-full rounded-lg shadow-md mb-6" />

        <div
          className="text-gray-700 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: award.content }}
        />
      </div>
    </div>
  );
};

export default AwardDetails;
