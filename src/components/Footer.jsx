

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-neutral-content pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          
          <div className="col-span-1 lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
            <p className="text-neutral-content/70 leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          
          <div>
            <h6 className="footer-title text-neutral-content opacity-100 font-bold mb-4">Product</h6> 
            <div className="flex flex-col gap-3">
              <a className="link link-hover text-neutral-content/70">Features</a>
              <a className="link link-hover text-neutral-content/70">Pricing</a>
              <a className="link link-hover text-neutral-content/70">Templates</a>
              <a className="link link-hover text-neutral-content/70">Integrations</a>
            </div>
          </div>

         
          <div>
            <h6 className="footer-title text-neutral-content opacity-100 font-bold mb-4">Company</h6> 
            <div className="flex flex-col gap-3">
              <a className="link link-hover text-neutral-content/70">About</a>
              <a className="link link-hover text-neutral-content/70">Blog</a>
              <a className="link link-hover text-neutral-content/70">Careers</a>
              <a className="link link-hover text-neutral-content/70">Press</a>
            </div>
          </div>

          
          <div>
           <h2 className='text-2xl font-bold' > Social Links</h2>
           <div className='flex gap-2'>
           <img src="/instagram.png" alt="an instagram icon" />
           <img src="/facebook.png" alt="a facebook icon" />
           <img src="/twitter.png" alt="a twitter icon" /></div>
            </div>

        </div>

        
        <div className="border-t border-neutral-content/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-content/50">
          <p>&copy; 2026 DigiTools. All rights reserved by Anas.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary cursor-pointer">Privacy Policy</a>
            <a className="hover:text-primary cursor-pointer">Terms of Service</a>
            <a className="hover:text-primary cursor-pointer">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;