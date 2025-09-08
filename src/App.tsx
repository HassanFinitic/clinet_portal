import "./App.css";
import ThemeWrapper from "./theme/ThemeWrapper";
// import TestUiComponets from "./components/TestUiComponets";
import AppRoutes from "./routes/AppRoutes";
import i18n from "i18next";
import { useEffect } from "react";



function App() {
  
  useEffect(() => {
    // Set initial direction
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";

    // Listen to language change
    const handleLanguageChange = (lng: string) => {
      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChange);

    // Cleanup
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  return (
    <>
      <ThemeWrapper>
        {/* <TestUiComponets /> */}
        <AppRoutes />
      </ThemeWrapper>
    </>
  );
}

export default App;
