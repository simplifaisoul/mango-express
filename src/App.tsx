import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
        />
        <Navbar />
        <CartDrawer />
        <main>
          <Hero />
          <ProductGrid />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
