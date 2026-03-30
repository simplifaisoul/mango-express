import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard, ChevronRight, ArrowRight, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully! 🎉', {
      icon: '✨',
      style: {
        borderRadius: '16px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
        padding: '16px 24px',
        boxShadow: '0 20px 40px rgba(22, 101, 52, 0.3)',
      },
      duration: 4000,
    });
    clearCart();
    setIsCartOpen(false);
  };

  const progress = Math.min((totalPrice / 50) * 100, 100);

  return (
    <>
      {/* Overlay - smooth fade */}
      <div
        className={`fixed inset-0 z-[100] bg-tropical-900/60 backdrop-blur-sm transition-all duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-[110] h-full w-full sm:w-[480px] bg-[#fffdf7] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="cart-drawer"
      >
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-mango-500/5 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between p-7 border-b border-gray-100/80 bg-white/50 backdrop-blur-md relative z-10 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[14px] bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center shadow-md shadow-mango-400/20">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-tropical-800 tracking-tight">Your Cart</h2>
              <p className="text-sm text-gray-400 font-medium">
                {totalItems} item{totalItems !== 1 ? 's' : ''} inside
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:rotate-90"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Shipping Progress bar */}
        {items.length > 0 && (
          <div className="bg-white/80 px-7 py-4 border-b border-gray-50 relative z-10">
            <div className="flex justify-between items-center mb-2.5 text-xs font-semibold">
              <span className={`transition-colors duration-300 ${totalPrice >= 50 ? 'text-leaf-600' : 'text-gray-500'}`}>
                {totalPrice >= 50 ? "🎉 You've unlocked Free Shipping!" : `Add $${(50 - totalPrice).toFixed(2)} for Free Shipping`}
              </span>
              <span className="text-tropical-800">$50.00</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-mango-400 to-leaf-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-7 relative z-10">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
              <div className="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6 shadow-inner border border-gray-100">
                <ShoppingBag className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-tropical-800 mb-3 tracking-tight">
                Your cart is empty
              </h3>
              <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
                Looks like you haven't added any fresh mangoes yet. Let's fix that!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Start Shopping <ChevronRight className="w-5 h-5 -ml-1" />
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-5 p-4 rounded-[1.25rem] bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-mango-200/50 transition-all duration-300 animate-fade-in-up group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-mango-50 rounded-xl transform rotate-3 group-hover:rotate-6 transition-transform" />
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="relative z-10 w-20 h-20 object-contain rounded-xl p-1 bg-white border border-white"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="font-bold text-tropical-800 text-[1rem] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[0.75rem] text-gray-400 mt-0.5 tracking-wide uppercase font-semibold">{item.product.category} • {item.product.weight}</p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center bg-gray-50 rounded-lg border border-gray-100 p-0.5">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-white text-gray-500 shadow-sm hover:text-mango-600 hover:border-mango-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-tropical-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-md bg-white text-gray-500 shadow-sm hover:text-leaf-600 hover:border-leaf-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[1.1rem] font-bold text-tropical-800 tracking-tight">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => {
                      removeFromCart(item.product.id);
                      toast.custom(() => (
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-xl border border-red-50 flex items-center gap-3">
                          <Trash2 className="w-5 h-5 text-red-500" />
                          <span className="font-body text-tropical-800 font-medium">{item.product.name} removed</span>
                        </div>
                      ));
                    }}
                    className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center hover:bg-red-50 hover:text-red-500 text-gray-400 transition-colors flex-shrink-0 absolute top-4 right-4"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="bg-white border-t border-gray-200/60 p-7 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-20">
            <div className="space-y-3 font-medium text-sm mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-tropical-800 font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className={`font-bold ${totalPrice >= 50 ? 'text-leaf-600 uppercase tracking-widest text-[0.7rem]' : 'text-tropical-800'}`}>
                  {totalPrice >= 50 ? 'Free' : '$5.99'}
                </span>
              </div>
            </div>
            
            <div className="h-px bg-gray-100 w-full mb-5" />
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-heading font-bold text-tropical-800 tracking-tight">Total</span>
              <span className="text-3xl font-bold gradient-text tracking-tight border-b-2 border-mango-400">
                ${(totalPrice + (totalPrice >= 50 ? 0 : 5.99)).toFixed(2)}
              </span>
            </div>
            
            <button
              onClick={handleCheckout}
              className="w-full btn-primary justify-center py-5 rounded-[1.25rem] text-[1.1rem] shadow-xl shadow-mango-500/25 group/btn"
              id="checkout-button"
            >
              <CreditCard className="w-5 h-5 ml-1 transition-transform group-hover/btn:scale-110" />
              <span className="px-1">Checkout Securely</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center justify-center gap-2 mt-4 text-[0.75rem] text-gray-400 font-medium">
              <Shield className="w-3.5 h-3.5" /> 100% Secure Encrypted Checkout
            </div>
          </div>
        )}
      </div>
    </>
  );
}
