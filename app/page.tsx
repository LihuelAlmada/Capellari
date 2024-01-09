import Image from "next/image";
import Header from "@/app/ui/Header";

function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        
        
        <a href="/products/all" target="_blank" rel="" className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 min-w-full" style={{ backgroundImage: 'url("/banner.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <h1 className="text-4xl font-semibold text-center text-white">
            The best products at the best price
          </h1>
          </a>
        

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
              alt="TV Logo"
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
              alt="lavarropas Logo"
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
              alt="aire Logo"
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
              src="/heladera.webp"
              alt="heladera Logo"
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
