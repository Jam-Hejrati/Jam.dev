const InfoSection = function (props) {
  return (
    <div className="my-5">
      <span className="text-xl text-amber-600">
        {props.title}:
        <span className="ml-2 text-slate-200 text-lg">
          {(props.info === true && (
            <span className="py-1 px-3 rounded bg-lime-600 text-slate-200">
              Yes
            </span>
          )) ||
            (props.info === false && (
              <span className="py-1 px-3 rounded bg-rose-700 text-slate-200">
                No
              </span>
            )) ||
            props.info}
        </span>
      </span>
    </div>
  );
};

export default InfoSection;
