import Head from "next/head";
import Accordion from "../components/accordion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coding challenge: Frontend - Maybe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full my-8 text-center">
        <p className="text-2xl font-black font-monument">UI Engineer</p>
        <p className="text-2xl font-black font-monument">Coding Challenge</p>
        <p className="font-general text-sm text-gray my-4">by Maybe Labs</p>
        <div className="w-11/12 lg:w-3/4 xl:w-2/4 mx-auto my-12">
          <Accordion />
        </div>
      </main>
    </div>
  );
}
