import Button from "./Button";
import logo from "../Gambar/pngtree-letter-t-design-for-digital-marketing-logo-png-image_5831901.png";

function Navbar(){

    return(
        <header className="sticky top-0 z-50 flex items-center justify-between bg-[#a52a2a] px-[50px] py-[20px] border-b border-black font-sans">
            <div className="flex items-center gap-[10px] text-[18px] font-bold text-black">
                <img 
                className="h-[50px] w-[50px] object-contain" 
                src={logo} 
                alt="Tech Market logo" 
                />
                Tech <span className="font-normal">Market</span>
            </div>
            
            <nav className="flex gap-[32px]">
                <a className="font-normal text-white no-underline transition-colors hover:text-violet-400" href="#">explore</a>
                <a className="font-normal text-white no-underline transition-colors hover:text-violet-400" href="#categories">Categories</a>
                <a className="font-normal text-white no-underline transition-colors hover:text-violet-400" href="#">cart</a>
            </nav>
            
            <div className="flex gap-[12px]">
                <Button variant="primary">Log in</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">Sign up</Button>
            </div>
        </header>
    )
}

export default Navbar;