"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaRss,
} from "react-icons/fa6";
import { SiHackerrank, SiHackerone } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoCloudDownloadOutline, IoLocationOutline } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";
import { PiTranslateBold } from "react-icons/pi";
import { useLanguage } from "../contexts/languageContext";

type LinkItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
};

function DiamondSeparator({ label }: { label: string }) {
  return (
    <div className="w-full flex items-center gap-3">
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(29,185,84,0.4))",
        }}
      />
      <div className="flex items-center gap-2">
        <div
          className="w-1.5 h-1.5 rotate-45 bg-spotify-green/60"
          style={{ flexShrink: 0 }}
        />
        <span className="text-[10px] tracking-[0.14em] uppercase font-semibold text-spotify-gray">
          {label}
        </span>
        <div
          className="w-1.5 h-1.5 rotate-45 bg-spotify-green/60"
          style={{ flexShrink: 0 }}
        />
      </div>
      <div
        className="flex-1 h-px"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(29,185,84,0.4))",
        }}
      />
    </div>
  );
}

export default function LinksPage() {
  const { t, toggleLanguage } = useLanguage();

  const linkItems: LinkItem[] = [
    {
      href: "https://michaelbullet.dev",
      label: t.links.portfolio,
      icon: <FaCode />,
      primary: true,
    },
    {
      href: "https://github.com/bulletdev",
      label: t.links.github,
      icon: <FaGithub />,
    },
    {
      href: "https://www.linkedin.com/in/michael-bullet/",
      label: t.links.linkedin,
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.bulletonrails.me/",
      label: t.links.blog,
      icon: <FaRss />,
    },
    {
      href: "https://www.instagram.com/bullet.jar/",
      label: t.links.instagram,
      icon: <FaInstagram />,
    },
    {
      href: t.cvUrl,
      label: t.links.resume,
      icon: <IoCloudDownloadOutline />,
    },
    {
      href: "https://wa.me/5575983360359",
      label: t.links.whatsapp,
      icon: <FaWhatsapp />,
    },
    {
      href: "mailto:michael@prostaff.gg",
      label: t.links.email,
      icon: <MdOutlineEmail />,
    },
  ];

  const secItems = [
    {
      href: "https://www.hackerrank.com/craquebullet",
      label: "HackerRank",
      icon: <SiHackerrank />,
    },
    {
      href: "https://hbh.sh/user/MitnickBR",
      label: "HBH",
      icon: <Image src="/hbh-logo.svg" alt="HBH" width={12} height={12} className="opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    {
      href: "https://hackerone.com/bulletonrails",
      label: "HackerOne",
      icon: <SiHackerone />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-sm flex flex-col items-center gap-8"
      >
        {/* Avatar + Identity */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-spotify-green/25 blur-2xl scale-125" />
            <div className="relative rounded-full p-[2px] bg-gradient-to-br from-spotify-green/60 to-transparent">
              <Image
                src="/Michael.jpeg"
                alt="Michael Bullet"
                width={96}
                height={96}
                priority
                className="rounded-full object-cover"
                style={{ width: 96, height: 96, objectFit: "cover" }}
              />
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Michael Bullet
            </h1>
            <p className="text-spotify-green text-sm font-medium mt-0.5">
              {t.links.tagline}
            </p>
            <p className="flex items-center justify-center gap-1 text-spotify-light-gray text-xs mt-1.5">
              <IoLocationOutline className="text-spotify-green" />
              Feira de Santana, BA
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
          {linkItems.map((item) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={
                  item.primary
                    ? "flex items-center w-full px-5 py-3.5 rounded-xl bg-spotify-green hover:bg-spotify-dark-green text-black font-bold text-sm transition-all duration-200 hover:scale-[1.02] group"
                    : "flex items-center w-full px-5 py-3.5 rounded-xl border border-white/15 hover:border-spotify-green/50 hover:bg-white/5 text-spotify-light-gray hover:text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] group"
                }
              >
                <span
                  className={`text-xl flex-shrink-0 ${item.primary ? "text-black" : "text-spotify-green"}`}
                >
                  {item.icon}
                </span>
                <span className="flex-1 text-center">{item.label}</span>
                <HiArrowUpRight
                  className={`text-sm flex-shrink-0 opacity-0 group-hover:opacity-60 transition-opacity duration-200 ${item.primary ? "text-black" : ""}`}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-full flex flex-col items-center gap-4 pt-2"
        >
          <DiamondSeparator label="Michael D. Bullet" />

          <div className="flex items-center gap-2">
            {secItems.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-spotify-green/40 hover:bg-white/5 text-spotify-gray hover:text-white text-[10px] font-semibold tracking-wide transition-all duration-200"
              >
                {s.icon && <span className="text-xs text-spotify-green">{s.icon}</span>}
                {s.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-spotify-gray hover:text-white text-[10px] font-semibold tracking-wider uppercase transition-colors"
            >
              <PiTranslateBold />
              {t.nav.toggleLang}
            </button>
            <span className="text-white/10">·</span>
            <span className="text-spotify-gray text-[10px] tracking-wider uppercase">
              © {new Date().getFullYear()} michaelbullet.dev
            </span>
          </div>
        </motion.footer>
      </motion.div>
    </main>
  );
}
