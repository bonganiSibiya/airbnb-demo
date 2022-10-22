import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

import https from "https";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export type ExploreData = {
  img: string;
  location: string;
  distance: string;
};

export type CardData = {
  img: string;
  title: string;
};

type Props = {
  exploreData: ExploreData[];
  cardData: CardData[];
};

const Home: NextPage<Props> = ({ exploreData, cardData, ...props }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Bongs airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull data from server */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard {...item} key={item.location} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardData?.map((item) => (
              <MediumCard {...item} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G", {
    method: "GET",
  });

  const resCards = await fetch("https://www.jsonkeeper.com/b/VHHT");

  const cardData = await resCards.json();
  const exploreData: ExploreData[] = await res.json();

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};

export default Home;
