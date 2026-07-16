import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function useLanguageSync() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = location.pathname.split("/")[1];
    const supported = ["en", "fr", "de", "es"];

    if (supported.includes(lang)) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [location.pathname, i18n]);
}