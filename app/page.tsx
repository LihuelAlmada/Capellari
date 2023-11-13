import Image from "next/image";
import Header from "@/app/ui/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <div>
        <a
            href="/products/all"
            className="flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"
            target="_blank"
            rel=""
          >
          <Image
            className=""
            src="/banner.webp"
            alt="Next.js Logo"
            width={1000}
            height={37}
            priority
          />
          </a>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="/products/tvs"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors bg-white hover:border-gray-300 hover:bg-gray-100 m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/TV.webp"
              alt="Next.js Logo"
              width={180}
              height={37}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Televisions{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Great variety of products
            </p>
          </a>

          <a
            href="/products/washing-machine"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 bg-white m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/lavarropas.webp"
              alt="Next.js Logo"
              width={180}
              height={37}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
             Washing machine{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              The cheapest washing machines
            </p>
          </a>

          <a
            href="/products/air-conditioning"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 m-1 bg-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className=""
              src="/aire.webp"
              alt="Next.js Logo"
              width={180}
              height={37}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Air conditioners{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Guaranteed quality
            </p>
          </a>

          <a
            href="/products/refrigerator"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 bg-white m-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/heladera.jpg"
              alt="Vercel Logo"
              className=""
              width={180}
              height={37}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Refrigerators{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              The best refrigerators on the market
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Home;
