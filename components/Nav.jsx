"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

const Nav = () => {
    const pathname = usePathname();
    
    return (
        <div className="flex items-center gap-8">
            <nav className="flex gap-8">
                {links.map((link, index) => {
                    return (
                        <Link 
                            href={link.path} 
                            key={index} 
                            className={`${
                                link.path === pathname 
                                ? "text-cyan-400 border-b-2 border-cyan-400" 
                                : "text-primary/70 dark:text-white/70 hover:text-cyan-400 dark:hover:text-cyan-400"
                            } capitalize font-medium transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
};

export default Nav;
