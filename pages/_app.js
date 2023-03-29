import "bootstrap/dist/css/bootstrap.css";
import "@/styles/style.scss";
import Navbar from "./components/Navbar";
import GroupCompanies from "./components/GroupCompanies";
import Footer from "./components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <GroupCompanies />
      <Footer />
    </>
  );
}
