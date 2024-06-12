import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-5 py-5 lg:px-30">
      <div className="flex text-black card p-6 mb-4 lg:mb-0 shadow-xl">
        <Link href="/">
          <div className="lg:text-left">
            <p className="font-bold text-xl uppercase">Dom Ramon</p>
            <p className="font-bold text-xl uppercase">BarberShop</p>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:space-x-6 text-black font-bold ">
        <Link href="/">
          <p className="hover:text-[#DC5F00] text-center lg:text-left card p-2 shadow-xl">
            Home
          </p>
        </Link>
        <Link href="#abaut">
          <p className="hover:text-[#DC5F00] text-center lg:text-left card p-2 shadow-xl">
            Sobre
          </p>
        </Link>
        <Link href="#services">
          <p className="hover:text-[#DC5F00] text-center lg:text-left card p-2 shadow-xl">
            Serviços
          </p>
        </Link>
        <Link href="#footer">
          <p className="hover:text-[#DC5F00] text-center lg:text-left card p-2 shadow-xl">
            Contato
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
