import Image from "next/image";
import Hero from "./components/layout/Hero";
import Description from "./components/layout/Description";
import Hosts from "./components/layout/Hosts";
import Banner from "./components/layout/Banner";
import Subscribe_link from "./components/layout/Subscribe_link";
import Episodes from "./components/layout/Episodes";

export default function Home() {
  return (
     <>
     <Hero/>
     <Description/>
     <Hosts/>
     <Banner/>
     <Subscribe_link/>
     <Episodes/>
     </>
  );
}
