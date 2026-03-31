

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-base-100 rounded-xl shadow-sm border border-base-200 mb-3">
      <div className="flex items-center gap-4">
        <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain" />
        <div>
          <h3 className="font-bold">{item.name}</h3>
          <p className="text-md opacity-60">${item.price}</p>
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="btn btn-error btn-md btn-outline border-none">
        Remove
      </button>
    </div>
  );
};

export default CartItem;