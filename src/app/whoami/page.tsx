"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { RightClickGuard } from "../components/RightClickGuard";

type Line =
  | { kind: "cmd"; text: string }
  | { kind: "out"; text: string }
  | { kind: "blank" }
  | { kind: "section"; text: string };

const SCRIPT: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "michael@bullet  —  infra specialist turned software engineer" },
  { kind: "blank" },
  { kind: "cmd", text: "uptime" },
  { kind: "out", text: "~7 years in tech  ·  3 years running infra  ·  pivoting to offensive security" },
  { kind: "blank" },
  { kind: "cmd", text: "cat background.txt" },
  { kind: "section", text: "┌─ Atento Brasil · Infrastructure Specialist ──────────────────────┐" },
  { kind: "out", text: "│  Jul 2023 → Mar 2025 · On-site · Feira de Santana                 │" },
  { kind: "out", text: "│                                                                    │" },
  { kind: "out", text: "│  Led secure infra ops across physical and cloud environments       │" },
  { kind: "out", text: "│  VPN hardening: FortiClient, Cisco AnyConnect, MFA/FortToken       │" },
  { kind: "out", text: "│  IAM: Entra ID (Azure AD), AAD Connect, SailPoint, CrowdStrike     │" },
  { kind: "out", text: "│  Automation: Ansible, Terraform, SCCM at scale                    │" },
  { kind: "out", text: "│  Compliance: LGPD, ISO 27001, Zero Trust, DevSecOps                │" },
  { kind: "out", text: "└────────────────────────────────────────────────────────────────────┘" },
  { kind: "blank" },
  { kind: "section", text: "┌─ Rede Mater de Saúde · SysAdmin ──────────────────────────────────┐" },
  { kind: "out", text: "│  Jul 2022 → Jul 2023 · Hospital environment                        │" },
  { kind: "out", text: "│                                                                    │" },
  { kind: "out", text: "│  99.9% uptime in hybrid Windows/Linux environment                  │" },
  { kind: "out", text: "│  Active Directory: GPO, RBAC, network folders                      │" },
  { kind: "out", text: "│  VPN, Access Points, VoIP (Avaya, AudioCodes) infrastructure       │" },
  { kind: "out", text: "│  PowerShell automation · Remedy · ServiceNow · SLA compliance      │" },
  { kind: "out", text: "└────────────────────────────────────────────────────────────────────┘" },
  { kind: "blank" },
  { kind: "cmd", text: "ls skills/security/" },
  { kind: "out", text: "zero-trust/  vpn-hardening/  iam-config/  crowdstrike/  ansible-playbooks/" },
  { kind: "out", text: "terraform-modules/  devsecops-pipeline/  powershell-scripts/" },
  { kind: "blank" },
  { kind: "cmd", text: "echo $CURRENT_FOCUS" },
  { kind: "out", text: "offensive security  ·  red team  ·  penetration testing  ·  TryHackMe" },
  { kind: "blank" },
  { kind: "cmd", text: "cat /etc/motd" },
  { kind: "out", text: '  "the network perimeter was always an illusion.' },
  { kind: "out", text: '   now i am learning to walk through walls."' },
  { kind: "blank" },
  { kind: "cmd", text: "ls -la / && cd /portfolio" },
  { kind: "out", text: "  drwxr-xr-x   michael  portfolio/" },
  { kind: "out", text: "  drwxr-xr-x   michael  skills/" },
  { kind: "out", text: "  -rw-r--r--   root     robots.txt" },
  { kind: "blank" },
];

const CMD_DELAY = 60;
const CHAR_DELAY = 28;
const AFTER_CMD_DELAY = 320;
const OUT_DELAY = 40;

export default function WhoAmI() {
  const [visibleLines, setVisibleLines] = useState<{ line: Line; partial?: string }[]>([]);
  const [done, setDone] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function run() {
      for (const line of SCRIPT) {
        if (cancelled) return;

        if (line.kind === "cmd") {
          // type the command character by character
          setVisibleLines((prev) => [...prev, { line, partial: "" }]);
          for (let i = 1; i <= line.text.length; i++) {
            if (cancelled) return;
            await sleep(CHAR_DELAY);
            setVisibleLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = { line, partial: line.text.slice(0, i) };
              return next;
            });
          }
          await sleep(AFTER_CMD_DELAY);
        } else if (line.kind === "blank") {
          await sleep(OUT_DELAY);
          setVisibleLines((prev) => [...prev, { line }]);
        } else {
          await sleep(OUT_DELAY);
          setVisibleLines((prev) => [...prev, { line }]);
        }
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleLines]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-start px-4 py-10 font-mono">
      <RightClickGuard />
      {/* terminal window */}
      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/30 tracking-wide">
            bash — michael@bullet:~
          </span>
        </div>

        {/* terminal body */}
        <div className="bg-[#0d0d0d] px-5 py-5 min-h-[420px] text-[12.5px] leading-relaxed overflow-x-auto">
          {visibleLines.map((item, i) => {
            const { line, partial } = item;

            if (line.kind === "blank") {
              return <div key={i} className="h-3" />;
            }

            if (line.kind === "cmd") {
              const displayed = partial ?? line.text;
              const isTyping = partial !== undefined && partial.length < line.text.length;
              return (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#1db954] select-none shrink-0">❯</span>
                  <span className="text-white break-all">
                    {displayed}
                    {isTyping && (
                      <span className="inline-block w-[6px] h-[13px] bg-[#1db954] ml-px align-text-bottom animate-pulse" />
                    )}
                  </span>
                </div>
              );
            }

            if (line.kind === "section") {
              return (
                <div key={i} className="text-[#1db954] whitespace-pre break-all pl-5">
                  {line.text}
                </div>
              );
            }

            return (
              <div key={i} className="text-white/50 whitespace-pre break-all pl-5">
                {line.text}
              </div>
            );
          })}

          {done && (
            <div className="flex items-start gap-2 mt-1">
              <span className="text-[#1db954] select-none shrink-0">❯</span>
              <span className="inline-block w-[6px] h-[13px] bg-[#1db954] ml-px align-text-bottom animate-pulse" />
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* back link — appears after animation */}
      {done && (
        <div className="mt-8 flex flex-col items-center gap-2 animate-fadeIn">
          <p className="text-xs text-white/30 tracking-widest uppercase">session complete</p>
          <Link
            href="/"
            className="text-sm text-[#1db954] border border-[#1db954]/30 hover:border-[#1db954]/70 hover:bg-[#1db954]/10 px-6 py-2.5 rounded-lg transition-all duration-200"
          >
            cd /portfolio
          </Link>
        </div>
      )}
    </div>
  );
}
