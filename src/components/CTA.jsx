const CTA = () => {
  return (
    <section className="container max-w-full mx-auto px-4 md:px-20 mb-20">
      <div className="bg-primary  p-8 md:p-16 text-center text-primary-content relative overflow-hidden shadow-2xl">
        
        

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
           Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Digitools to work smarter.
            Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-lg bg-white text-primary border-none hover:bg-base-200 px-10 rounded-full font-bold">
              Explore Products
            </button>
            <button className="btn btn-lg btn-outline text-white border-white hover:bg-white/10 px-10 rounded-full font-bold">
              View Pricing
            </button>
          </div>
          <p className='pt-3'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;