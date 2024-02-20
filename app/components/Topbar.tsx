import Image from "next/image";
import Ui from "@/public/UI.png";

const Topbar = () => {
  return (
    <div className="flex max-sm:w-full max-sm:px-6 max-sm:pt-5 max-sm:flex max-sm:justify-between   w-full justify-between  px-4 pt-3">
      <p className="font-bold ">9:27</p>
      <Image
        className="object-contain"
        src={Ui}
        width={68}
        height={18}
        alt=""
      />
    </div>
  );
};

export default Topbar;
