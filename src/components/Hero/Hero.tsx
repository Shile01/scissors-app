import frame from '../../assets/hero.png';
import plate from '../../assets/plate.png';
import './Hero.scss';
const Hero = () => {
  return (
    <section className="w-full">
      <main className="mx-auto w-full px-4 md:px-24 pt-8">
        <h1 className="text-center">
          {' '}
          Optimize Your Online Experience with Our
        </h1>
        <h1 className="text-center pt-4">
          Advanced <span className="text-primary">URL Shortening</span> Solution
        </h1>
        <p className="text-sm text-center w-fit md:w-[44.8125rem] mx-auto py-8">
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        <div className=" mx-0 md:mx-auto flex flex-col md:flex-row md:w-[20rem] gap-x-8">
          <button className="bg-primary text-white  py-2 px-8 rounded-full">
            Sign Up{' '}
          </button>
          <button className="text-primary mt-4 md:mt-0">Learn More</button>
        </div>
        <div className=" w-fit md:w-[43.18rem] mx-auto pt-6">
          <img src={frame} alt="advert" />
        </div>
        <div>
          <img src={plate} alt="" />
        </div>
      </main>
      <div className="bg-[#F9FBFD] flex flex-col md:flex-row items-center md:px-16 md:justify-around py-12">
        <aside className="">
          <h2>One Stop</h2>
          <h2>
            Four <span className="text-primary">Possibilities</span>{' '}
          </h2>
        </aside>
        <aside className="flex md:mt-0 mt-12 gap-y-9 flex-col md:flex-row gap-x-20">
          <div className="">
            <h2>3M</h2>
            <p>Active users</p>
          </div>
          <div>
            <h2>60M</h2>
            <p>Links & QR </p>
            <p>codes created</p>
          </div>
          <div>
            <h2>1B</h2>
            <p>Clicked & Scanned </p>
            <p>connections</p>
          </div>
          <div>
            <h2>300k</h2>
            <p>App Integrations</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
