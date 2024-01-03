import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="lg:flex lg:flex-col bg-[#1D232A] lg:h-screen">
      <div className="lg:flex lg:justify-center lg:items-center lg:flex-col lg:align-middle">
        <h1 className="text-yellow-400 lg:text-left text-center lg:text-8xl text-5xl font-extrabold py-2">
          My Projects
        </h1>
        <p className="mb-20 text-white mt-5 text-lg">
          Explore the diverse range of web development projects I ve worked on.
        </p>

        <div className="lg:flex lg:align-middle lg:justify-between lg:flex-row flex-col mx-1 lg:gap-24">
          <div className="card lg:w-96 bg-[#12171c] shadow-xl mb-10">
            <figure>
              <Image
                src="/images/yourBeauty.jpeg"
                alt="Shoes"
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Your Beauty</h2>
              <p>Project for Beauty Business based in Derby</p>
              <div className="card-actions justify-end">
                <Link href="/projects/yourBeauty">
                  <button className="bg-[#13131314] hover:bg-[#13131314] text-yellow-400 font-bold py-2 px-4 rounded-full mr-4 border-2 border-yellow-400 hover:border-[rgba(231,231,45,0.91)] hover:text-[rgba(231,231,45,0.91)] transition duration-300 ease-in-out">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:col-span-3 card w-96 bg-[#12171c] shadow-xl mb-10 ">
            <figure>
              <Image
                src="/images/build2.png"
                alt="Shoes"
                width={500}
                height={500}
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Build!</h2>
              <p>
                Website for Hub connecting junior developers and Non Profits
              </p>
              <div className="card-actions justify-end">
                <Link href="/projects/build">
                  {" "}
                  <button className="bg-[#13131314] hover:bg-[#13131314] text-yellow-400 font-bold py-2 px-4 rounded-full mr-4 border-2 border-yellow-400 hover:border-[rgba(231,231,45,0.91)] hover:text-[rgba(231,231,45,0.91)] transition duration-300 ease-in-out">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:col-span-3 card w-96 bg-[#12171c] shadow-xl mb-10">
            <figure>
              <Image
                src="/images/wipit2.png"
                alt="Shoes"
                width={500}
                height={500}
                className=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Socks!</h2>
              <p>School of Code Stash - All links from Bootcamp saved</p>
              <div className="card-actions justify-end">
                <Link href="/projects/socks">
                  <button className="bg-[#13131314] hover:bg-[#13131314] text-yellow-400 font-bold py-2 px-4 rounded-full mr-4 border-2 border-yellow-400 hover:border-[rgba(231,231,45,0.91)] hover:text-[rgba(231,231,45,0.91)] transition duration-300 ease-in-out">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
