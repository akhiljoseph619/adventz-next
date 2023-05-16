import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/style.scss';
import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import GroupCompanies from './components/GroupCompanies';
import Footer from './components/Footer';

export default function App({ Component, pageProps }) {
  // Preloader
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <>
      <Head>
        <title>Adventz | Digital Marketing Company in Oman, Muscat</title>
        <meta
          name="keywords"
          content="We create One-Of-A-Kind, custom-made Experiences for our clients through Digital Marketing & Innovative Concepts. Lets Work Together."
        />
        <meta
          name="description"
          content="Advertising Company in the MENA region with a belief in Rethinking Competition, Reinventing Innovation and Breaking the usual norms to raise the bar higher."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar />
          <Component {...pageProps} />
          <GroupCompanies />
          <Footer />
        </>
      )}
    </>
  );
}
