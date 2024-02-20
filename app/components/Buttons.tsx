const Buttons = () => {
  return (
    <div className="max-sm:flex max-sm:flex-col mt-8 flex flex-col items-center">
      <button className="uppercase bg-black text-white w-[343px] h-12 rounded-lg  transition max-sm:hover:opacity-60 duration-[0.15s] hover:opacity-80 ">
        follow jane
      </button>
      <button className="uppercase border-2 border-black mt-4 w-[343px] h-12 rounded-lg transition max-sm:hover:opacity-60 duration-[0.15s] hover:opacity-80">
        message
      </button>
    </div>
  );
};

export default Buttons;
