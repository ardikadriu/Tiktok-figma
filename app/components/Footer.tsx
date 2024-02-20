import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import Upload from "@/public/Icons/Upload.png";

const Footer = () => {
  return (
    <div className="flex fixed max-sm:w-full w-[375px] bg-white h-[73px] bottom-0  justify-around items-center ">
      <IoHomeOutline size={20} />
      <CiSearch size={20} />

      <Image
        className="object-contain"
        src={Upload}
        width={70}
        height={40}
        alt="upload"
      />

      <FiMessageCircle size={20} />
      <CgProfile size={20} />
    </div>
  );
};

export default Footer;
