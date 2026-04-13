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
    <div className={cn("flex items-center gap-2", className)}>
      {socialItems.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-text-secondary hover:text-accent transition-colors p-1"
        >
          <span className="text-lg flex items-center justify-center">
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FooterSocials;