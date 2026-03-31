

const Stats = () => {
  return (
    <div className="flex justify-center my-10 px-8 py-10 bg-primary">
      <div className="stats stats-vertical lg:stats-horizontal w-full max-w-5xl">
        <div className="stat place-items-center gap-3">
          <div className="stat-value text-white text-5xl">50K+</div>
          <div className="stat-title text-white text-sm">Active Users</div>
        </div>
        <div className="stat place-items-center">
          
          <div className="stat-value text-white text-5xl">200+</div>
          <div className="stat-title text-sm text-white">Premium Tools</div> 
        </div>
        <div className="stat place-items-center">
          
          <div className="stat-value text-white text-5xl">4.9</div>
          <div className="stat-title text-white text-sm">Rating</div>
        </div>
      </div>
    </div>
    
  );
};

export default Stats;