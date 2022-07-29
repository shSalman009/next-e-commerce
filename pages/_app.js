import Footer from "../components/Footer";
import Topbar from "../components/topbar/Topbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Topbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
