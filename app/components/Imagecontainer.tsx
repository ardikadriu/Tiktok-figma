import Image from "next/image";
import Firstimage from "@/public/Rectangle 2.png";
import Thirdimage from "@/public/Rectangle 2.1.png";
import Secondimage from "@/public/Rectangle 2.2.png";

const Imagecontainer = () => {
  return (
    <div className="flex gap-2 mt-5">
      <div>
        <Image
          className="my-2"
          src={Firstimage}
          width={167}
          height={220}
          alt="photo1"
        />
        <Image src={Secondimage} width={167} height={310} alt="photo2" />
      </div>
      <Image
        className=" object-contain"
        src={Thirdimage}
        width={167}
        height={310}
        alt="photo3"
      />
    </div>
  );
};

export default Imagecontainer;
