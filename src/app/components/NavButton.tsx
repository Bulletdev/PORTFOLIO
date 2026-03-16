import { IoCloudDownloadOutline } from "react-icons/io5";

interface ButtonProps {
  name: string;
}

export default function NavButton({ name }: ButtonProps) {
  return (
    <a
      href="https://drive.google.com/file/d/1S_sDiEP10sRpODHkyTnPWdD8c2FUJbME/view?usp=sharing"
    >
      <button
        type="button"
        className="flex items-center text-md px-4 py-3 rounded-full bg-spotify-green  font-semibold hover:bg-spotify-dark-green gap-2"
      >
        {name}
        <IoCloudDownloadOutline className="text-xl" />
      </button>
    </a>
  );
}
