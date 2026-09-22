import { ReactNode } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
  href: string;
  icon?: ReactNode;
}

export default function NavButton({ name, href, icon = <IoCloudDownloadOutline className="text-xl" /> }: ButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button
        type="button"
        className="flex items-center text-md px-4 py-3 rounded-full bg-spotify-green font-semibold hover:bg-spotify-dark-green gap-2"
      >
        {name}
        {icon}
      </button>
    </a>
  );
}
