import Link from "next/link";
import React from "react";
type LinkProps = {
  id: number;
  href: string;
  title: string;
};

type NavLinkProps = {
  links: LinkProps[];
};

export default function NavLink({ links }: NavLinkProps) {
  return (
    <div className="flex items-center justify-between w-auto mx-4 font-geist-arial">
      <div className="flex flex-row items-center justify-center space-x-12">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="font-geist-arial text-xl"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
