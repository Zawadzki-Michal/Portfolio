import Image from "next/image";
import { Whisper } from "next/font/google";

const whisper = Whisper({ weight: ["400"], subsets: ["latin"] });

export default function About() {
  return (
    <div className="min-h-[calc(100vh-100px)] bg-yellow-400 lg:grid lg:grid-cols-12 grid-cols-1">
      <div className="lg:col-span-12 lg:col-start-2 col-span-1 col-start-1 lg:pt-10 pt-2">
        <h1 className="text-[#1D232A] lg:text-left text-center lg:text-8xl text-5xl font-extrabold py-2">
          About Me
        </h1>
      </div>

      <div className="lg:col-span-4 lg:col-start-2 col-span-1 justify-center">
        <Image
          src="/images/aboutme2.jpeg"
          alt="Michal's image"
          width={600}
          height={600}
          className="rounded-lg lg:border-4 lg:p-4 p-1 lg:bg-[#1D232A] border-[#1D232A]"
        />
      </div>

      <div className="ml-6 lg:col-span-5 lg:col-end-11">
        <p className="text-[#1D232A] lg:text-2xl text-lg font-semibold leading-relaxed">
          {`Hello, I'm Michal Zawadzki, a dynamic full-stack web developer fresh out of a 16-week bootcamp. While I've been immersed in coding for a while, this recent experience has honed my skills and instilled a proactive learning approach.

I firmly believe in the power of commitment and habits to turn goals into reality. In my recent role as a Junior Full Stack Developer at the School of Code in Birmingham, I've excelled in breaking down complex challenges and contributing to product development using technologies like Node.js, Express, React, and PostgreSQL.

Understanding that hiring a junior is an investment for any company, I am confident that I'll be a great choice. With a blend of experience and fresh enthusiasm, I'm ready to contribute to your team's success. If you're looking for a dedicated developer with a passion for growth, let's connect and explore how I can bring value to your projects. `}
        </p>
      </div>
    </div>
  );
}
