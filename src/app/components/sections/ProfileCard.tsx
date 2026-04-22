"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegCopy, FaCheck } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from "../../contexts/languageContext";
import type { BioSegment } from "../../../../i18n/types";

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
            src="/Michael.jpeg"
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
  const phoneNum = "75983360359";
  const whatsapp = "wa.me/5575983360359";

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    });
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(phoneNum).then(() => {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    });
  };

  const handleOpenWhatsapp = () => {
    window.open(`https://${whatsapp}`, "_blank");
  };

  return (
    <div className="px-4 flex flex-col gap-2">
      <button
        type="button"
        onClick={handleOpenWhatsapp}
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-spotify-green hover:bg-spotify-dark-green text-black font-bold text-sm transition-all duration-200 hover:scale-[1.02]"
      >
        <FaWhatsapp className="text-base" />
        WhatsApp
      </button>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleCopyNumber}
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 rounded-xl border border-white/15 hover:border-spotify-green/50 hover:bg-white/5 text-spotify-light-gray hover:text-white text-xs font-semibold transition-all duration-200"
        >
          {copiedPhone ? <FaCheck className="text-spotify-green" /> : <FaRegCopy />}
          {copiedPhone ? "Copied!" : t.profile.copyNumber}
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
