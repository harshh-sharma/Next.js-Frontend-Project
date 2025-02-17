"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
            <HoveredLink href={"#"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                    Test
                </MenuItem>
            </HoveredLink>
           
            <HoveredLink href={"#"}>
                <MenuItem setActive={setActive} active={active} item="Our courses">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href={"#"}>
                    All courses
                </HoveredLink>
                <HoveredLink href={"#"}>
                    Basic Music Theory
                </HoveredLink>
                <HoveredLink href={"#"}>
                    Advanced Composition
                </HoveredLink>
            <HoveredLink href={"#"}>
                Song writing
            </HoveredLink>
            </div>
            </MenuItem>
            </HoveredLink>

            <HoveredLink href={"#"}>
                <MenuItem setActive={setActive} active={active} item="Contant us">
                </MenuItem>
            </HoveredLink>
        </Menu>
      </div>
    );
}

export default Navbar