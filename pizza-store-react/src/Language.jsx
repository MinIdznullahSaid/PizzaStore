import { createContext, useContext, useState } from "react";

const translations = {
  id: {
    order: "Buat Order",
    pizzaType: "Jenis Pizza",
    pizzaSize: "Ukuran Pizza",
    addToCart: "Tambahkan ke keranjang",
    pizzaOfTheDay: "Pizza pilihan chef hari ini",
    cart: "Keranjang",
    checkout: "Checkout",
  },
  en: {
    order: "Create Order",
    pizzaType: "Pizza Type",
    pizzaSize: "Pizza Size",
    addToCart: "Add to Cart",
    pizzaOfTheDay: "Chef's Special Pizza",
    cart: "Cart",
    checkout: "Checkout",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id");

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
