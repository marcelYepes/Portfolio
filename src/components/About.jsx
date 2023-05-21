import React from "react"

const About = () => {
  return (
    <section id="about" className="py-32">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        About me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 m-auto md:pl-20 p-4">
        <div className="rounded-full w-48 md:w-64 h-48 md:h-64 overflow-hidden ">
          <img
            className="w-full h-full object-cover opacity-90"
            src="../profile.jpg"
            alt="profile"
          />
        </div>
        <div className="w-full md:w-1/2 text-base md:text-lg text-left md: text-left ">
          <p className="mb-3 opacity-70">
            I am a full stack developer, with skills in HTML, CSS, JavaScript,
            React and Node Js. I am a responsible, honest and proactive person,
            I have worked in multicultural and bilingual environments. My
            experience in working groups at an industrial level has reinforced
            my analytical skills and attention to detail.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
