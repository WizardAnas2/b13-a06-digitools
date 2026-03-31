
const Steps = () => {
  return (
    <section className="py-24 bg-base-100">
      <div className="container mx-auto px-4 md:px-20 text-center">
        
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-base-content/60 leading-relaxed">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          
          <div className="flex flex-col items-center text-center ">
            
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 overflow-hidden p-4">
              
              <img 
                src="/user.png" 
                alt="Browse Tools" 
                className="w-full h-full object-contain" 
              />
            </div>
           
            <h3 className="text-2xl font-bold mb-3">Create Account</h3>
            <p className="text-base-content/70 leading-relaxed max-w-sm">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

         
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 overflow-hidden p-4">
              
              <img 
                src="/package.png" 
                alt="Add to Cart" 
                className="w-full h-full object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Choose Products</h3>
            <p className="text-base-content/70 leading-relaxed max-w-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

         
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 overflow-hidden p-4">
              
              <img 
                src="/rocket.png" 
                alt="Secure Checkout" 
                className="w-full h-full object-contain" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Start Creating</h3>
            <p className="text-base-content/70 leading-relaxed max-w-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Steps;