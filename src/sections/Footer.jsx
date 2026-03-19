import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition-colors">
            <img src={social.icon} className="w-5 h-5 object-contain" alt={social.name} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Footer;
