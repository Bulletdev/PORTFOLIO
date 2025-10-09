"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    tech?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Gradiente de cinza escuro para claro - segue a paleta do projeto
  const backgroundColors = [
    "#1a1a1a", // Cinza escuro (começo)
    "#242424", // Cinza médio-escuro
    "#2e2e2e", // Cinza médio
    "#383838", // Cinza médio
    "#424242", // Cinza médio-claro
    "#4d4d4d", // Cinza claro
    "#585858", // Cinza mais claro
    "#636363", // Cinza bem claro
    "#6e6e6e", // Cinza muito claro
    "#7a7a7a", // Cinza claríssimo
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #1a1a1a, #242424)",
    "linear-gradient(to bottom right, #242424, #2e2e2e)",
    "linear-gradient(to bottom right, #2e2e2e, #383838)",
    "linear-gradient(to bottom right, #383838, #424242)",
    "linear-gradient(to bottom right, #424242, #4d4d4d)",
    "linear-gradient(to bottom right, #4d4d4d, #585858)",
    "linear-gradient(to bottom right, #585858, #636363)",
    "linear-gradient(to bottom right, #636363, #6e6e6e)",
    "linear-gradient(to bottom right, #6e6e6e, #7a7a7a)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const toggleExpand = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        opacity: "95%",
      }}
      className="h-[53rem] overflow-y-auto flex justify-center relative space-x-4 rounded-md py-6 px-4"
      ref={ref}
    >
      <div className="div relative flex items-start">
        <div className="max-w-xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-sm text-spotify-white max-w-sm mt-4"
              >
                {item.description}
              </motion.p>

              {/* Botão Ver Detalhes */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                onClick={() => toggleExpand(index)}
                className="mt-4 flex items-center gap-2 text-sm font-semibold text-spotify-green hover:text-white transition-colors"
              >
                {expandedCards.has(index) ? (
                  <>
                    Ocultar Detalhes <FaChevronUp className="text-xs" />
                  </>
                ) : (
                  <>
                    Ver Detalhes <FaChevronDown className="text-xs" />
                  </>
                )}
              </motion.button>

              {/* Detalhes expandidos */}
              {expandedCards.has(index) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 space-y-4"
                >
                  {/* Tecnologias */}
                  {item.tech && (
                    <div className="flex gap-2 flex-wrap">
                      {item.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-spotify-green text-spotify-black px-3 py-1 rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Miniatura */}
                  {item.content && (
                    <div className="rounded-lg overflow-hidden">
                      {item.content}
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
    </motion.div>
  );
};
