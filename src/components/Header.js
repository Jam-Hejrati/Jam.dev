import ProfileImage from "../assets/images/profile.jpg";
// import MenubBar from "./MenuBar";

const Header = function () {
  return (
    <div className="flex flex-col lg:flex-row items-center pb-36 lg:pb-0">
      <img
        src={ProfileImage}
        alt="profile-img"
        className="w-72 h-72 rounded-full lg:h-full lg:w-max lg:rounded-none my-12 lg:m-0 border-8 lg:border-none border-slate-700"
      />
      <div className="flex flex-col items-center lg:mx-auto lg:items-start lg:px-20">
        {/* <MenubBar /> */}
        <h1 className="text-5xl text-amber-600">Jam Hejrati</h1>
        <h2 className="text-3xl text-slate-100 my-5 lg:ml-4 lg:mt-5">
          Frontend Web Developer
        </h2>
        <p className="text-lg text-slate-400 mt-4 text-center px-16 lg:p-0 lg:text-left">
          I'm a passionate and hardwork front-end web developer who is trying to
          make things easier for his self and who's around him.
        </p>
      </div>
    </div>
  );
};
export default Header;
