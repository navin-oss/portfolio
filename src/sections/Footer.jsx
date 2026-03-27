import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-5 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <p>© {new Date().getFullYear()} Navin Karavade. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a
          href="/assets/Navin_Karavade_Resume.pdf"
          download="Navin_Karavade_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors rounded-full bg-royal hover:bg-lavender"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Resume
        </a>
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a href={social.href} key={index} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 transition-colors">
              <img src={social.icon} className="w-5 h-5 object-contain" alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
