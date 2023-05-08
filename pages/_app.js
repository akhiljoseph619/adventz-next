import Head from 'next/head';
import Navbar from './components/Navbar';
import GroupCompanies from './components/GroupCompanies';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/styles/style.scss';

export default function App({ Component, pageProps }) {
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
      <Navbar />
      <Component {...pageProps} />
      <GroupCompanies />
      <Footer />
    </>
  );
}
