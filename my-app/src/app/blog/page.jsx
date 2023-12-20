import Image from "next/image";

export default function Blog() {
  return (
    <main>
      <div className="hero place-items:top min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/about.jpeg"
            alt="Michal's image"
            width={400}
            height={300}
            className="rounded-lg shadow-2xl lg:mr-10"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}

/*
className="max-w-sm rounded-lg shadow-2xl
*/
