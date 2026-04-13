import React from "react";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FooterSocialsProps {
  links: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  className?: string;
}

export const FooterSocials: React.FC<FooterSocialsProps> = ({ links, className }) => {
  const socialItems = [
    { icon: <FiTwitter />, href: links.twitter, label: "Twitter" },
    { icon: <FiInstagram />, href: links.instagram, label: "Instagram" },
    { icon: <FiLinkedin />, href: links.linkedin, label: "LinkedIn" },
  ];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {socialItems.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            "text-text-secondary hover:text-accent hover:bg-accent/5",
            "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none",
            "active:scale-95" // Subtle "press" effect used by top companies
          )}
        >
          {/* We ensure the icon inherits the parent text color and size */}
          <span className="text-xl flex items-center justify-center">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;
