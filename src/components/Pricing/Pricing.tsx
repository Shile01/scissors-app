const Basic = [
  {
    text: 'Unlimited URL Shortening',
  },
  {
    text: 'Basic Link Analytics',
  },
  {
    text: 'Customizable Short Links',
  },
  {
    text: 'Standard Support',
  },
  {
    text: 'Ad-supported',
  },
];

const Prof = [
  {
    text: 'Enhanced Link Analytics',
  },
  {
    text: 'Enhanced Link Analytics',
  },
  {
    text: 'Advanced Link Customization',
  },
  {
    text: 'Priority Support',
  },
  {
    text: 'Ad-free Experience',
  },
];

const Teams = [
  {
    text: 'Team Collaboration',
  },
  {
    text: 'User Roles and Permissions',
  },
  {
    text: 'Enhanced Security',
  },
  {
    text: 'API Access',
  },
  {
    text: 'Dedicated Account Manager',
  },
];

const Pricing = () => {
  return (
    <section>
      <aside>
        <div className="line"></div>
        <h2>A price perfect for your needs.</h2>
      </aside>
      <p>
        From catering for your personal, business, event, socials needs, you can
        be rest assured we have you in mind in our pricing.
      </p>
      <div>
        <div>
          <p>Basic</p>
          <h2>Free</h2>
          <p>Free plan for all users</p>
        </div>
        <div>
          <p>Professional</p>
          <h2>$15/month</h2>
          <p>Ideal for business creators</p>
        </div>
        <div>
          <p>Teams</p>
          <h2>$25/month</h2>
          <p>Share with up to 10 users</p>
        </div>
      </div>
      <div className="pt-8">
        <button className="border-[1px] px-5 py-2 border-primary rounded-full text-primary">
          Get Custom Pricing
        </button>
        <button className="bg-primary text-white px-5 py-2">
          Select Pricing
        </button>
      </div>
    </section>
  );
};

export default Pricing;
