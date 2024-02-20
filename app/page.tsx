import Image from "next/image";
import Topbar from "./components/Topbar";
import Profile from "./components/Profile";
import Buttons from "./components/Buttons";
import Imagecontainer from "./components/Imagecontainer";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:relative max-sm:h-screen max-sm:items-center max-lg:flex flex flex-col items-center w-[375px] bg-white ">
      <Topbar />
      <Profile />
      <Buttons />
      <Imagecontainer />
      <Footer />
    </main>
  );
}
