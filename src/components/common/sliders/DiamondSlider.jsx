import headphone_img from "../../../assets/Headphone.png";

const DiamondSlider = () => {
  return (
    <div className="mt-40 mx-10">
      <div className="max-w-[1400px] mx-auto ">
        <h2 className="text-[48px] mt-6 font-bold text-[#7b49b4]">
          Popular Categories
        </h2>
        <div className="w-32 h-2 bg-[#B275F7] mt-2 rounded-md"></div>
      </div>

      <div className="max-w-[1400px] mx-auto flex gap-x-2 overflow-x-scroll md:overflow-x-scroll items-baseline">
        <div className="md:flex-1 flex justify-center">
          <div className="mask mask-diamond relative h-52 w-52 bg-gradient-to-r from-[#8974F7] to-[#D25BF7]">
            <img
              src={headphone_img}
              className="absolute inset-0 m-auto z-10"
              alt="Headphone Icon"
            />
          </div>
        </div>
        <div className="md:flex-1 flex justify-center">
          <div className="mask  mask-diamond relative h-52 w-52 bg-gradient-to-r from-[#8974F7] to-[#D25BF7]">
            <img
              src={headphone_img}
              className="absolute inset-0 m-auto z-10"
              alt="Headphone Icon"
            />
          </div>
        </div>
        <div className="md:flex-1 flex justify-center ">
          <div className="mask mask-diamond relative h-64 w-64 bg-gradient-to-r from-[#8974F7] to-[#D25BF7]">
            <img
              src={headphone_img}
              className="absolute inset-0 m-auto z-10"
              alt="Headphone Icon"
            />
          </div>
        </div>
        <div className="md:flex-1 flex justify-center">
          <div className="mask  mask-diamond relative h-52 w-52 bg-gradient-to-r from-[#8974F7] to-[#D25BF7]">
            <img
              src={headphone_img}
              className="absolute inset-0 m-auto z-10"
              alt="Headphone Icon"
            />
          </div>
        </div>
        <div className="md:flex-1 flex justify-center">
          <div className="mask  mask-diamond relative h-52 w-52 bg-gradient-to-r from-[#8974F7] to-[#D25BF7]">
            <img
              src={headphone_img}
              className="absolute inset-0 m-auto z-10"
              alt="Headphone Icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondSlider;
