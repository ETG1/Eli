"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-cyan-400" />
            </SheetTrigger>
            <SheetContent>
                {/*Logo*/}
                <div className="mb-8 text-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Eli<span className="text-cyan-400">.</span>
                        </h1>
                    </Link>
                </div>
                {/*Nav*/}
                <nav className="flex flex-col justify-center items-center gap-4">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={index}>
                                <Link 
                                    href={link.path}
                                    className={`${
                                        link.path === pathname 
                                        ? "text-cyan-400 border-b-2 border-cyan-400" 
                                        : "text-white/70"
                                    } text-lg capitalize hover:text-cyan-400 transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
