import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      destinations: "Destinations",
      gallery: "Gallery",
      vehicles: "Vehicles",
      contact: "Contact",
      book: "Book Safari",
      bookNow: "Book Safari Now",
      heroTitle: "Explore Kenya With Luxury Safari Vehicles",
      heroDesc:
        "Reliable safari transport in Amboseli, Tsavo & Chyulu Hills with comfort, safety, and expert local guides.",
    },
  },

  fr: {
    translation: {
      home: "Accueil",
      destinations: "Destinations",
      gallery: "Galerie",
      vehicles: "Véhicules",
      contact: "Contact",
      book: "Réserver Safari",
      bookNow: "Réserver Maintenant",
      heroTitle: "Explorez le Kenya avec des véhicules safari de luxe",
      heroDesc:
        "Transport safari fiable avec confort, sécurité et guides experts.",
    },
  },

  de: {
    translation: {
      home: "Startseite",
      destinations: "Reiseziele",
      gallery: "Galerie",
      vehicles: "Fahrzeuge",
      contact: "Kontakt",
      book: "Safari buchen",
      bookNow: "Jetzt buchen",
      heroTitle: "Entdecken Sie Kenia mit Luxus-Safari-Fahrzeugen",
      heroDesc:
        "Zuverlässiger Safari-Transport mit Komfort und erfahrenen Guides.",
    },
  },

  es: {
    translation: {
      home: "Inicio",
      destinations: "Destinos",
      gallery: "Galería",
      vehicles: "Vehículos",
      contact: "Contacto",
      book: "Reservar Safari",
      bookNow: "Reservar ahora",
      heroTitle: "Explora Kenia con vehículos de safari de lujo",
      heroDesc:
        "Transporte confiable con comodidad y guías expertos.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;