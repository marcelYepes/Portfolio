import React from "react"
import { TypeAnimation } from "react-type-animation"

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-star items-center ">
          <h1 className="sm: text-5xl text-4xl font-bold text-gray-800">
            I'm Marcel Yepes
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={["I am a Full Stack", 1000, "Web developer", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <p className="flex sm:text-2xl text-1xl p-4 text-gray-800">
            I am a responsible, honest and proactive person. I have worked in
            multicultural and bilingual environments. My experience in working
            groups at an industrial level has reinforced my analytical skills
            and attention to detail.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
