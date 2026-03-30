import { X, Plus, Minus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
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
      icon: '✅',
      style: {
        borderRadius: '12px',
        background: '#166534',
        color: '#fff',
        fontFamily: 'Outfit, sans-serif',
      },
      duration: 3000,
    });
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[440px] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="cart-drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mango-400 to-leaf-500 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-tropical-800">Your Cart</h2>
              <p className="text-sm text-gray-400">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🛒</div>
              <h3 className="font-heading text-xl font-bold text-tropical-800 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-400 mb-6">Add some delicious mangoes!</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn-primary"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 p-3 rounded-2xl bg-mango-50/50 border border-mango-100/50 animate-scale-in"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-contain rounded-xl bg-white p-1"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-tropical-800 text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.product.weight}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center bg-white rounded-xl border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-mango-500 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold text-tropical-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-leaf-500 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-mango-600">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(item.product.id);
                      toast.error(`${item.product.name} removed from cart`, {
                        style: {
                          borderRadius: '12px',
                          fontFamily: 'Outfit, sans-serif',
                        },
                      });
                    }}
                    className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors text-red-400 hover:text-red-600 flex-shrink-0"
                    aria-label={`Remove ${item.product.name}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white">
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-tropical-800">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-gray-500">Shipping</span>
              <span className="font-semibold text-leaf-600">
                {totalPrice >= 50 ? 'FREE' : '$5.99'}
              </span>
            </div>
            <div className="h-px bg-gray-100 my-3" />
            <div className="flex items-center justify-between mb-5">
              <span className="text-lg font-bold text-tropical-800">Total</span>
              <span className="text-2xl font-bold gradient-text">
                ${(totalPrice + (totalPrice >= 50 ? 0 : 5.99)).toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full btn-primary justify-center text-lg py-4"
              id="checkout-button"
            >
              <CreditCard className="w-5 h-5" />
              Checkout
            </button>
            {totalPrice < 50 && (
              <p className="text-xs text-center text-gray-400 mt-3">
                Add ${(50 - totalPrice).toFixed(2)} more for free shipping! 🚚
              </p>
            )}
          </div>
        )}
      </div>
    </>
  );
}
