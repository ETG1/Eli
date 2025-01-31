"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import { Button } from "@/components/ui/button";

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
        name: "my work",
        path: "/work",
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
                        <h1 className="text-4xl font-semibold text-primary dark:text-white">
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
                                        : "text-primary/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-400"
                                    } text-lg capitalize transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                    <SheetClose asChild>
                        <Link href="/contact" className="mt-4">
                            <Button variant="outline" size="md">Let's Talk</Button>
                        </Link>
                    </SheetClose>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
