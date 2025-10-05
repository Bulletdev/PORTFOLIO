"use client";

import React from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";
import { FaWhatsapp } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-3 max-md:p-3"
      id="#profile"
    >
      <div className="flex flex-col gap-3 max-md:gap-2">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/Michael.jpeg"
            alt="Picture of the author"
            width={350}
            height={350}
            objectFit="none"
            className="rounded-[25px]"
          />
        </BackgroundGradient>

        <PersonalStatement />
        <Location />
        <Booking />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg px-4">
      <div className="flex items-center gap-2 font-semibold">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Feira de Santana - BAHIA
      </div>
    </div>
  );
}

function Booking() {
  const email = "contato@michaelbullet.com"; 
  const phoneNum = "75983360359";
  const Whatsapp = "wa.me/5575983360359";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("E-mail copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert("Número copiado para a área de transferência!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  const handleOpenWhatsapp = () => {
    window.open(`https://${Whatsapp}`, '_blank');
  };
  return (
    <div className="flex px-4 gap-3">
       <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleOpenWhatsapp}
        title="Abrir WhatsApp"
      >
        <FaWhatsapp />
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyNumber}
        title="Copiar número"
      >
        <FaRegCopy /> Copiar Número
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyEmail}
        title="Copiar e-mail"
      >
        <FaRegCopy /> Copiar E-mail
      </button>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Michael Douglas</h1>
        <p className="text-spotify-gray text-sm">
          Desenvolvedor Backend • Java • Golang • Ruby on Rails
        </p>
      </div>
      <h4 className="text-md max-md:text-sm text-spotify-light-gray font-semibold">
        Desenvolvedor <span className="text-spotify-white">autodidata</span> com foco em{" "}
        <span className="text-spotify-white">backend</span> e{" "}
        <span className="text-spotify-white">aplicações cloud-native</span>.
        Apaixonado por{" "}
        <span className="text-spotify-white">compartilhar conhecimento, colaborar em projetos</span> e{" "}
        <span className="text-spotify-white">inovar</span> através da tecnologia.
      </h4>
    </div>
  );
}
