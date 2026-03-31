

const Banner = () => {
  return (
    <div className="hero min-h-[60vh] bg-base-200 px-4 md:px-20 py-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
<img src="/banner-image.png" className="max-w-sm rounded-lg shadow-2xl" alt="Banner" />
        <div className='space-y-3'>
          <div className='max-w-73 text-center text-sm bg-purple-100 py-2 px-2 rounded-full flex gap-3'>
           <img 
                src="/blue-button.png" 
                alt="" 
                className="" 
              /> 
          <p className='text-blue-800 text-sm'>
            New Ai-Powered Tools Available</p></div>
          <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
          <p className="py-6 text-lg opacity-80">
            Access premium AI tools, design assets, templates, and productivity software all in one place. Start creating faster today. Explore Products
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary rounded-full border-none">Explore Products</button>
            <button className="btn btn-outline rounded-full border-purple-400 text-purple-600">Watch Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;