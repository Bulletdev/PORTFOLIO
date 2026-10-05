"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegCopy, FaCheck, FaTelegram, FaBitcoin } from "react-icons/fa6";
import { SiEthereum, SiSolana } from "react-icons/si";
import { IoLocationOutline, IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundGradient } from "../ui/background-gradient";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from "../../contexts/languageContext";
import type { BioSegment } from "../../../../i18n/types";

const cryptoItems = [
  { symbol: "BTC", address: "bc1qtxmxk24qfgxf29rqjs8k4yng3hy2w2ceudeph6", icon: <FaBitcoin />, color: "text-orange-400" },
  { symbol: "ETH", address: "0x399a7D9A4999616dAae59fC36DFf56Dfc84F5Db9", icon: <SiEthereum />, color: "text-purple-400" },
  { symbol: "SOL", address: "H4MZ2f8nJWYUMEbZ8X8hTAQnhtvzyJnw1n4r9g2p4Ddq", icon: <SiSolana />, color: "text-teal-400" },
];

function truncateAddress(addr: string) {
  return `${addr.slice(0, 8)}...${addr.slice(-6)}`;
}

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl overflow-hidden"
      id="#profile"
    >
      {/* top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-spotify-green via-green-400 to-transparent" />

      <div className="flex flex-col gap-4 p-4">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/Michael4.png"
            alt="Michael Douglas"
            width={350}
            height={350}
            priority
            className="rounded-[25px]"
            style={{ width: "auto", height: "auto" }}
          />
        </BackgroundGradient>

        <PersonalStatement />

        <div className="mx-4 h-px bg-white/10" />

        <Location />

        <div className="mx-4 h-px bg-white/10" />

        <Booking />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="px-4 flex items-center gap-2 text-sm font-medium text-spotify-light-gray">
      <IoLocationOutline className="text-spotify-green text-lg flex-shrink-0" />
      <span>Feira de Santana - BA, Brasil</span>
    </div>
  );
}

function Booking() {
  const { t } = useLanguage();
  const email = "michael@prostaff.gg";
  const telegramHandle = "@PwnedByBullet";
  const telegram = "t.me/PwnedByBullet";

  const [copiedTelegram, setCopiedTelegram] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  function handleCopyAddress(address: string) {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText(telegramHandle).then(() => {
      setCopiedTelegram(true);
      setTimeout(() => setCopiedTelegram(false), 2000);
    });
  };

  const handleOpenTelegram = () => {
    window.open(`https://${telegram}`, "_blank");
  };

  return (
    <div className="px-4 flex flex-col gap-2">
      <button
        type="button"
        onClick={handleOpenTelegram}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-spotify-green hover:bg-spotify-dark-green text-black font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
      >
        <FaTelegram className="text-base" />
        Telegram
      </button>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleCopyTelegram}
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl border border-white/15 hover:border-spotify-green/50 hover:bg-white/5 text-spotify-light-gray hover:text-white text-xs font-semibold transition-all duration-200"
        >
          {copiedTelegram ? <FaCheck className="text-spotify-green" /> : <FaRegCopy />}
          {copiedTelegram ? "Copied!" : t.profile.copyTelegram}
        </button>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl border border-white/15 hover:border-spotify-green/50 hover:bg-white/5 text-spotify-light-gray hover:text-white text-xs font-semibold transition-all duration-200"
        >
          {copiedEmail ? <FaCheck className="text-spotify-green" /> : <MdOutlineEmail className="text-base" />}
          {copiedEmail ? "Copied!" : t.profile.copyEmail}
        </button>
      </div>

      <div className="mt-1 flex flex-col gap-1.5">
        {cryptoItems.map((item) => {
          const copied = copiedAddress === item.address;
          return (
            <button
              key={item.symbol}
              type="button"
              onClick={() => handleCopyAddress(item.address)}
              className="flex items-center w-full px-3 py-2 rounded-xl border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200 group"
            >
              <span className={`text-sm flex-shrink-0 ${item.color}`}>{item.icon}</span>
              <span className="ml-2.5 text-[11px] font-semibold tracking-wide text-spotify-gray group-hover:text-white/70 w-7 flex-shrink-0">{item.symbol}</span>
              <span className="flex-1 text-left font-mono text-[10px] text-white/35 group-hover:text-white/55 truncate px-1.5">
                {truncateAddress(item.address)}
              </span>
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="check" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="text-spotify-green text-xs flex-shrink-0">
                    <IoCheckmarkOutline />
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white/20 group-hover:text-white/50 text-xs flex-shrink-0 transition-colors">
                    <IoCopyOutline />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PersonalStatement() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-3 px-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Michael Douglas</h1>
        <p className="text-spotify-green text-sm font-medium mt-0.5">{t.profile.subtitle}</p>
      </div>
      <p className="text-sm text-spotify-light-gray leading-relaxed">
        {t.profile.bioSegments.map((segment: BioSegment, i: number) =>
          segment.highlight ? (
            <span key={i} className="text-white font-semibold">
              {segment.text}
            </span>
          ) : (
            <span key={i}>{segment.text}</span>
          )
        )}
      </p>
    </div>
  );
}
