import "../styles/globals.css";

// components imports
import Navbar from "../components/navbar/Navbar";
import Bottombar from "../components/bottombar/Bottombar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Navbar />
      <div className="appWrapper">
        <Component className="app" {...pageProps} />
      </div>
      <Bottombar />
    </div>
  );
}

export default MyApp;
