import { useContext } from "react";
import { CartContext } from "./contexts";
import { useLanguage } from "./Language";

export default function Header() {
  const [cart] = useContext(CartContext);
  const { language, setLanguage } = useLanguage();
  
  return (
    <nav>
      <h1 className="logo">Ristorante Pizza</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{
    fontSize: "0.75rem",      
    padding: "2px 2px",       
    height: "1.5rem",         
    marginRight: "2px",
  }}>
        <option value="id">Indonesia</option>
        <option value="en">English</option>
      </select>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
