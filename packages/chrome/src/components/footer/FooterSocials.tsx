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
<<<<<<< HEAD
    <div className={cn("flex items-center gap-2", className)}>
=======
    <div className={cn("flex items-center gap-1", className)}>
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
      {socialItems.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
<<<<<<< HEAD
          className="text-text-secondary hover:text-accent transition-colors p-1"
        >
          <span className="text-lg flex items-center justify-center">
=======
          className={cn(
            "p-2 rounded-lg transition-all duration-200",
            "text-text-secondary hover:text-accent hover:bg-accent/5",
            "focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 outline-none",
            "active:scale-95" // Subtle "press" effect used by top companies
          )}
        >
          {/* We ensure the icon inherits the parent text color and size */}
          <span className="text-xl flex items-center justify-center">
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
            {social.icon}
          </span>
        </a>
      ))}
    </div>
  );
};

<<<<<<< HEAD
export default FooterSocials;
=======
export default FooterSocials;
>>>>>>> 9606bfe728f0728e4a01299924ecccb4bcad0167
