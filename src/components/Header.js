import ProfileImage from "../assets/images/profile.jpg";
import ResumePdf from "../assets/download/Jam Hejrati CV.pdf";

const Header = function () {
  return (
    <div className="flex flex-col lg:flex-row items-center pb-36 lg:pb-0">
      <img
        src={ProfileImage}
        alt="profile-img"
        className="w-72 h-72 lg:w-[30rem] lg:h-[42rem] object-cover rounded-full lg:rounded-lg lg:mx-7 mt-12 mb-16 lg:mb-12 border-8 lg:border-none border-slate-700"
      />
      <div className="flex flex-col items-center lg:mx-auto lg:items-start lg:px-20">
        <h1 className="text-5xl text-[#F05454]">Jam Hejrati</h1>
        <h2 className="text-2xl md:text-3xl text-white my-5 lg:mt-5">
          <span className="hidden lg:inline">- </span>Frontend Web Developer
        </h2>
        <p className="text-lg text-slate-200 mt-4 text-center px-10 md:px-16 lg:p-0 lg:text-left">
          I'm a passionate and hardwork front-end web developer who is trying to
          make things easier for himself and who's around him.
        </p>
        <a
          className="py-4 px-8 bg-[#F05454] text-slate-900 text-xl mt-20 rounded cursor-pointer font-semibold hover:bg-[#ee6e6e]"
          href={ResumePdf}
          download="Jam Hejrati CV.pdf"
        >
          Download Resume PDF
        </a>
      </div>
    </div>
  );
};
export default Header;
