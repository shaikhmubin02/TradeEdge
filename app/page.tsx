import Hero from "@/components/Hero";
import Image from "next/image";
import Providers from './providers';

export default function Home() {
  return (
    <div>
      <Providers>
       <Hero />
      </Providers>
    </div>
  );
}
