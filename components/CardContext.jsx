"use client"
import toast from 'react-hot-toast';

const { createContext, useState, useEffect, useContext } = require("react");

export const CartContext = createContext();

export function CartProvider({ children }) {
  
  // Exposing these state to be globally 
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/storeproducts");
        const productsData = await response.json();
        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        console.error("Error in Fetching Data :", error);
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success('Added to the Cart');
    
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item)=> item.id !== productId));
  }

  const contextValue ={
    products,
    loading,
    cart,
    addToCart,
    removeFromCart,
  }

  return(
    <CartContext.Provider
    value={contextValue}
    >
      {children}
    </CartContext.Provider>
  )

}

export function useCart () {
  const context = useContext(CartContext)
  return context;
}
