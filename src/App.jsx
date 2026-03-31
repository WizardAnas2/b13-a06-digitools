import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import ToggleSection from './components/ToggleSection';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import CTA from './components/CTA';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  useEffect(() => {
    
    fetch('/models.json')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error loading products:", err));
  }, []);

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      toast.info("This tool is already in your cart!");
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart");
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.success("Purchase successful! Cart cleared.");
    setActiveTab('products');
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar cartCount={cart.length} />
      
      <main>
        <Banner />
        <Stats />
        
        
        <ToggleSection 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          cartCount={cart.length} 
        />

        
        <section className="container mx-auto px-4 pb-20">
          {activeTab === 'products' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              {cart.length === 0 ? (
                <div className="text-center py-20 bg-base-200 rounded-3xl border-2 border-dashed border-base-300">
                  <h2 className="text-2xl font-bold opacity-40">Your cart is currently empty</h2>
                  <button onClick={() => setActiveTab('products')} className="btn btn-primary mt-4">Go Shopping</button>
                </div>
              ) : (
                <div className="bg-base-100 p-6 rounded-2xl shadow-xl border border-base-200">
                  <div className="flex justify-between items-center mb-8 pb-4 border-b">
                    <h2 className="text-2xl font-bold">Shopping Cart</h2>
                    <p className="text-xl font-bold text-primary">Total: ${totalPrice}</p>
                  </div>
                  
                  <div className="space-y-4">
                    {cart.map(item => (
                      <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    ))}
                  </div>

                  <button 
                    onClick={handleCheckout} 
                    className="btn btn-primary rounded-full w-full mt-10 btn-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          )}
        </section>

        <Steps />
        <Pricing />
        <CTA/>
      </main>

      <Footer />
      
      
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false} 
        theme="colored" 
      />
    </div>
  );
}

export default App;
