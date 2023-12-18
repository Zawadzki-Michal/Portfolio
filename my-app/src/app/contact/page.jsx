import Header from "../components/Header";

export default function Contact() {
  return (
    <main>
      <Header />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm text-black lg:flex">
        <h1>Contact</h1>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
