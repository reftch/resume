import Head from "next/head";

import Introduce from "@/pages/components/Introduce";
import Contacts from "@/pages/components/Contact";
import Education from "@/pages/components/Education";
import Profile from "@/pages/components/Profile";
import Experience from "@/pages/components/Experience";
import Skills from "@/pages/components/Skills";
import Languages from "@/pages/components/Languages";
import Interest from "./components/Interest";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taras Chornyi, Resume</title>
        <meta
          name="description"
          content="Taras Chornyi, Resume, Full Stack Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="wrapper">
        <div className="left">
          <Introduce />
          <Contacts />
          <Education />
          <Languages />
        </div>
        <div className="right">
          <Profile />
          <Experience />
          <Skills />
          <Interest />
        </div>
      </main>
    </>
  );
}
