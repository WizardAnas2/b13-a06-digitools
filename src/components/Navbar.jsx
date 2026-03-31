

const Navbar = ({ cartCount, setActiveTab }) => {
  const handleGetStarted = () => {
     
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-20 sticky top-0 z-50">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 font-medium">
            <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</button></li>
            <li><button onClick={() => setActiveTab('products')}>Products</button></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a onClick={() => window.location.reload()} className="text-2xl font-bold text-primary cursor-pointer">DigiTools</a>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li><button >Products</button></li>
          <li><button >Features</button></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

     
      <div className="navbar-end gap-2 md:gap-4">
        <div className="dropdown dropdown-end">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost btn-circle"
            onClick={() => setActiveTab('cart')}
          >
            <div className="indicator">
              
              <img 
                src="/shopping-cart.png" 
                alt="Cart" 
                className="h-7 w-7 object-contain" 
              />
              <span className="badge badge-sm indicator-item badge-primary font-bold">
                {cartCount}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex gap-2">
          <button 
            className="btn btn-ghost font-semibold"
          >
            Login
          </button>
          <button 
            className="btn btn-primary rounded-full px-6"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;