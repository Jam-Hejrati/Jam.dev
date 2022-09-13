import { GitHub } from "react-feather";
import { Twitter } from "react-feather";
import { Instagram } from "react-feather";
import { Codepen } from "react-feather";

const Footer = () => {
  return (
    <div id="contact" className="bg-[#181c22] px-2 md:px-8 flex flex-col items-center pt-6">
      <p className="EMAIL text-md md:text-xl text-slate-200 pb-2 px-3 md:px-10 border-b border-gray-400 mb-4">
        Gmail: Jamhejratipro@gmail.com
      </p>
      <div className="SOCIAL_LINKS mt-2 mb-6 space-x-2 md:space-x-4">
        <a
          className="bg-slate-700 hover:bg-slate-600 rounded-full inline-block p-4 text-black"
          href="https://github.com/Jam-Hejrati"
        >
          <GitHub />
        </a>
        <a
          className="bg-slate-700 hover:bg-slate-600 rounded-full inline-block p-4 text-cyan-500"
          href="https://twitter.com/HejratiJam"
        >
          <Twitter />
        </a>
        <a
          className="bg-slate-700 hover:bg-slate-600 rounded-full inline-block p-4 text-pink-700"
          href="https://www.instagram.com/jam.dev/"
        >
          <Instagram />
        </a>
        <a
          className="bg-slate-700 hover:bg-slate-600 rounded-full inline-block p-4 text-cyan-300"
          href="https://codepen.io/nikorutin"
        >
          <Codepen />
        </a>
      </div>
      <p className="COPY_RIGHT text-slate-200 p-4">
        © copyright by <span className="text-amber-600">Jam Hejrati</span>
      </p>
    </div>
  );
};

export default Footer;
