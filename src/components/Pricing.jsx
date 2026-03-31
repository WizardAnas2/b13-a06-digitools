

const Pricing = () => {
  const plans = [
    { name: "Starter", price: "0", features: ["Basic Tools", "Community Support", "1st Project"] },
    { name: "Pro", price: "19", features: ["All Tools", "Priority Support", "Unlimited Projects"], popular: true },
    { name: "Enterprise", price: "49", features: ["Custom Solutions", "Dedicated Manager", "Team Access"] }
  ];

  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-3">Simple, Transparent Pricing</h2>
      <p className='text-md text-center mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {plans.map((plan, i) => (
          <div key={i} className={`card bg-base-100 shadow-xl border ${plan.popular ? 'border-primary' : 'border-base-300'}`}>
            <div className="card-body items-center text-center">
              {plan.popular && <div className="badge badge-primary mb-2">Most Popular</div>}
              <h3 className="card-title text-2xl">{plan.name}</h3>
              <div className="flex items-baseline my-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="opacity-60">/month</span>
              </div>
              <div className="divider"></div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => <li key={j}># {f}</li>)}
              </ul>
              <button className={`btn rounded-full w-full ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>Choose Plan</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;