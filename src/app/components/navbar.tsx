import Link from "next/link";

export default function Navbar() {
  return (
    <div className= "flex items-center justify-center w-full">
    <nav className=" h-[91px] mx-[35px] flex items-center w-[990px] gap-[15%]">
      {/* Navbar Brand */}
      <h3 className="text-white font-bold text-[24px] leading-[32px] tracking-[0.1px] font-montserrat">BrandName</h3>
    
      {/* Navbar Collapse */}
      <div className=" flex justify-between grow ">
        {/* Navbar Links */}
        <div className="flex space-x-[21px]  justify-between items-center">
          <Link href="/" className="text-white text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Home</Link>
          <Link href="/product" className="text-white text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Product</Link>
          <Link href="/pricing" className="text-white text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Pricing</Link>
          <Link href="/contact" className="text-white text-[14px] leading-[24px] tracking-[0.2px] font-montserrat">Contact</Link>
        </div>

        {/* Login and Join Us Buttons */}
        <div className="   flex space-x-[45px]">
          <button className=" text-white text-[14px]  leading-[22px] tracking-[0.2px] text-right px-4 py-2 font-montserrat">Login</button>
          <button className=" rounded-[5px] px-[25px] py-[13px] bg-[#23A6F0] text-white text-[14px] leading-[22px] tracking-[0.2px] text-right font-montserrat">JOIN US</button>
        </div>
      </div>
    </nav>
    </div>
  );
}
