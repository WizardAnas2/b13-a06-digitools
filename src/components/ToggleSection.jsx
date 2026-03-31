
const ToggleSection = ({ activeTab, setActiveTab, cartCount }) => {
  return (
    <div className="flex justify-center gap-4 my-10 px-4">
      <button 
        onClick={() => setActiveTab('products')}
        className={`btn btn-lg rounded-full md:w-48 ${activeTab === 'products' ? 'btn-primary' : 'btn-outline'}`}
      >
        Products
      </button>
      <button 
        onClick={() => setActiveTab('cart')}
        className={`btn btn-lg rounded-full md:w-48 ${activeTab === 'cart' ? 'btn-primary' : 'btn-outline'}`}
      >
        Cart ({cartCount})
      </button>
    </div>
  );
};

export default ToggleSection;