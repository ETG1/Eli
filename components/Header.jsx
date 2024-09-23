import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return <header className="py-4 xl:py-8 text-white"> 
    <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Eli<span className="text-cyan-400">.</span>
        </h1>
        </Link>


        {/*Navbar*/}
        <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href="/contact">
                <Button>Let's talk</Button>
            </Link>
        </div>

        {/*Mobile Nav*/}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
    </div>
  </header>
};

export default Header
