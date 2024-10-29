import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FindoraLandingPage from "./pages/FindoraLandingPage";

// Usa un baseUrl vuoto in produzione poiché ora il sito si trova alla root
// da usare con npm run predeploy:
// const baseUrl = process.env.NODE_ENV === "production" ? "/" : "";

// senza predeploy:
const baseUrl = "/";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Scroll to top quando si naviga tra le pagine
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // Imposta dinamicamente il titolo della pagina e la meta description in italiano
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Findora Open Beta";
        metaDescription =
          "Benvenuti su Findora Open Beta, la piattaforma innovativa per il futuro della blockchain.";
        break;
      default:
        title = "Pagina di Findora";
        metaDescription =
          "Scopri di più sulla piattaforma Findora e le sue funzionalità.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path={`${baseUrl}/`} element={<FindoraLandingPage />} />
    </Routes>
  );
}

export default App;
