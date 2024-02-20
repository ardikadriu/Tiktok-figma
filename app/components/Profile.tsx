import Image from "next/image";
import Profile1 from "@/public/Profile-pic.png";
const Profile = () => {
  return (
    <div className="max-sm:flex max-sm:items-center max-sm:mt-11 max-sm:flex-col mt-11 ">
      <Image
        className=""
        src={Profile1}
        width={128}
        height={128}
        alt="profile pic"
      />
      <h1 className="mt-7 text-[42px] font-Comfortaa font-bold text-center">
        Jane
      </h1>
      <h2 className="mt-5 font-bold ">San francisco, CA</h2>
    </div>
  );
};

export default Profile;
