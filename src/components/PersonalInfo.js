import InfoSection from "./InfoSection";

const PersonalInfo = function (props) {
  return (
    <div id="about" className="my-10 lg:mt-40 flex items-center flex-col">
      <span className="mx-auto mb-8 lg:mb-16 pb-2 px-4 border-b border-gray-400 text-3xl text-slate-200 text-center">
        Personal Info
      </span>
      <div className="flex flex-col items-center lg:flex-row lg:gap-44">
        <div className="flex flex-col items-center lg:items-start">
          <InfoSection title="First Name" info={props.info["firstName"]} />
          <InfoSection title="Last Name" info={props.info["lastName"]} />
          <InfoSection title="Age" info={props.info["age"]} />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <InfoSection title="Address" info={props.info["address"]} />
          <InfoSection title="Language" info={props.info["language"]} />
          <InfoSection title="Open To Work" info={props.info["openToWork"]} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
