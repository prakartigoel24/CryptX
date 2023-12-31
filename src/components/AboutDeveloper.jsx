import React from "react";

const AboutDeveloper = () => {
  return (
    <div className="flex flex-col mt-4 bg-gradient-to-r from-black via-gray-500 text-slate-400 to-black p-2 items-center justify-center ">
      <div className="flex p-6 items-center justify-center">
        <h1 className="text-white text-xl text-center m-4 sm:text-3xl md:text-4xl lg:text-4xl">
          Hello! <br /> I'm <span className="text-slate-400">Prakarti</span>{" "}
          a.k.a. <span className="text-slate-400">Praks</span>
        </h1>
        <img src="/my_avatar.jpg" alt="Avatar..." width={180} className="sm:w-80 md:w-96 lg:w-96"/>
      </div>
      <div className="font-serif m-8 bg-slate-300 text-black rounded-3xl p-4 text-justify">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-black mb-6 text-center text-fuchsia-900">
         A passionate learner , coder and developer
        </h1>
        <p className="text-red-950 text-md text-justify md:text-xl lg:text-xl ">
          👋 I'm Prakarti Goel, the creative mind behind this project with some inspiration from my mentors. I'm a
          dedicated and passionate developer currently in my <span className="font-semibold">last year</span> of
          college pursuing <span className="font-semibold">B.Tech in Computer Science and Engineering</span>.
          <br />
          <br />
          🤝 Team Player Being a <span className="font-semibold">co-founder and lead</span> of my college's <span className="font-semibold">Technical Society and the Programming and Development Clubs</span> under it, I've
          learned the art of <span className="font-semibold">collaboration, networking </span> and <span className="font-semibold"> leadership</span>.
          <br />
          <br />
          🧠 Continuous Learner I believe in the power of <span className="font-semibold">continuous learning,</span>
          always seeking ways to enhance my skills and stay ahead in the
          ever-evolving tech landscape.
          <br />
          <br />
          🌐 Interests Beyond development, I'm deeply interested in exploring
          the intersections of technology and society. <span className="font-semibold">I'm fascinated by how tech can be a force for positive change, and I'm always eager to
          explore projects that reflect this passion.</span> 
          <br />
          <br />
          🔗I'm always open to new collaborations and opportunities. Let's <span className="font-semibold">connect and explore</span> the
          amazing world of tech together!
        </p>
      </div>
    </div>
  );
};

export default AboutDeveloper;
