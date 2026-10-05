"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaXTwitter,
  FaCode,
  FaRss,
  FaBitcoin,
} from "react-icons/fa6";
import { SiHackerrank, SiHackerone, SiEthereum, SiSolana } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { IoCloudDownloadOutline, IoLocationOutline, IoShieldOutline, IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
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

const cryptoItems = [
  {
    symbol: "BTC",
    address: "bc1qtxmxk24qfgxf29rqjs8k4yng3hy2w2ceudeph6",
    icon: <FaBitcoin />,
    color: "text-orange-400",
  },
  {
    symbol: "ETH",
    address: "0x399a7D9A4999616dAae59fC36DFf56Dfc84F5Db9",
    icon: <SiEthereum />,
    color: "text-purple-400",
  },
  {
    symbol: "SOL",
    address: "H4MZ2f8nJWYUMEbZ8X8hTAQnhtvzyJnw1n4r9g2p4Ddq",
    icon: <SiSolana />,
    color: "text-teal-400",
  },
];

function truncateAddress(addr: string) {
  return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
}

export default function LinksPage() {
  const { t, toggleLanguage } = useLanguage();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  function handleCopy(address: string) {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  }

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
      href: "https://bulletonrails.com/",
      label: t.links.blog,
      icon: <FaRss />,
    },
    {
      href: "https://www.instagram.com/bullet.jar/",
      label: t.links.instagram,
      icon: <FaInstagram />,
    },
    {
      href: "https://x.com/JavaAdvocate",
      label: t.links.x,
      icon: <FaXTwitter />,
    },
    {
      href: "https://t.me/PwnedByBullet",
      label: t.links.telegram,
      icon: <FaTelegram />,
    },
    {
      href: t.cvUrl,
      label: t.links.resume,
      icon: <IoCloudDownloadOutline />,
    },
    {
      href: "mailto:michael@effront.gg",
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
      href: "https://tryhackme.com/p/BulletOnRails",
      label: "TryHackMe",
      icon: <IoShieldOutline />,
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
                src="/Michael4.png"
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

        {/* Crypto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full flex flex-col gap-2"
        >
          <DiamondSeparator label="crypto" />
          <div className="flex flex-col gap-2 pt-1">
            {cryptoItems.map((item) => {
              const copied = copiedAddress === item.address;
              return (
                <button
                  key={item.symbol}
                  onClick={() => handleCopy(item.address)}
                  className="flex items-center w-full px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 text-spotify-light-gray hover:text-white transition-all duration-200 group"
                >
                  <span className={`text-base flex-shrink-0 ${item.color}`}>{item.icon}</span>
                  <span className="ml-3 text-xs font-semibold tracking-wide text-spotify-gray group-hover:text-white/70 w-8 flex-shrink-0">{item.symbol}</span>
                  <span className="flex-1 text-left font-mono text-[11px] text-white/40 group-hover:text-white/60 truncate px-2">
                    {truncateAddress(item.address)}
                  </span>
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-spotify-green text-sm flex-shrink-0"
                      >
                        <IoCheckmarkOutline />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white/20 group-hover:text-white/50 text-sm flex-shrink-0 transition-colors"
                      >
                        <IoCopyOutline />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </motion.div>

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
