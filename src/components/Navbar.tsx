"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} item="Home" active={active}></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink>
            All Courses
          </HoveredLink>
          <HoveredLink>
            Basic Music Theory
          </HoveredLink>
          <HoveredLink>
            Advanced Composition
          </HoveredLink>
          <HoveredLink>
            Songwriting
          </HoveredLink>
          <HoveredLink>
            Music Production
          </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>


      </Menu>
    </div>
  )
}

export default Navbar
