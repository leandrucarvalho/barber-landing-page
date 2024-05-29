import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-5 py-5 lg:px-30">
      <div className="flex text-black bg-[#f7f7f7] rounded-2xl p-6 mb-4 lg:mb-0">
        <Link href="#home">
          <div className="text-center lg:text-left">
            <p className="font-bold text-xl uppercase">Dom Ramon</p>
            <p className="font-bold text-xl uppercase">BarberShop</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 text-black">
        <Link href="#home">
          <p className="hover:text-[#DC5F00] text-center lg:text-left">Home</p>
        </Link>
        <Link href="#abaut">
          <p className="hover:text-[#DC5F00] text-center lg:text-left">Sobre</p>
        </Link>
        <Link href="#services">
          <p className="hover:text-[#DC5F00] text-center lg:text-left">
            Serviços
          </p>
        </Link>
        <Link href="">
          <p className="hover:text-[#DC5F00] text-center lg:text-left">
            Contato
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
