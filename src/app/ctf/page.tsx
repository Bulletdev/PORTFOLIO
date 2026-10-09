"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { RightClickGuard } from "../components/RightClickGuard";

const INNER_KEY = "3t3rn4l_blu3_n3v3r_p4tch3d";
const FLAG = `BULLET{${INNER_KEY}}`;

type Color = "green" | "red" | "yellow" | "white" | "dim" | "cyan";

type OutputLine = {
  text: string;
  color?: Color;
};

const colorMap: Record<Color, string> = {
  green: "text-[#1db954]",
  red: "text-red-400",
  yellow: "text-yellow-400",
  white: "text-white",
  dim: "text-white/40",
  cyan: "text-cyan-400",
};

const BANNER: OutputLine[] = [
  { text: "╔══════════════════════════════════════════════════╗", color: "green" },
  { text: "║  BULLET.CTF — unauthorized access is encouraged  ║", color: "green" },
  { text: "╚══════════════════════════════════════════════════╝", color: "green" },
  { text: "" },
  { text: "  target : 10.10.31.337", color: "dim" },
  { text: "  status : LOCKED", color: "red" },
  { text: "" },
  { text: "  type 'help' to begin.", color: "dim" },
  { text: "" },
];

function processCommand(
  input: string,
  stage: number,
  encodedKey: string,
): { output: OutputLine[]; newStage: number; solved: boolean; clear: boolean } {
  const parts = input.trim().split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const rest = parts.slice(1);
  let newStage = stage;

  switch (cmd) {
    case "help":
      return {
        output: [
          { text: "  commands:", color: "dim" },
          { text: "" },
          { text: "  nmap    <target>   — scan the network", color: "white" },
          { text: "  curl    <flags>    — send an http request", color: "white" },
          { text: "  decode  <base64>   — decode base64 string", color: "white" },
          { text: "  submit  <flag>     — submit BULLET{...}", color: "white" },
          { text: "  clear              — clear terminal", color: "white" },
          { text: "  whoami             — current context", color: "white" },
        ],
        newStage,
        solved: false,
        clear: false,
      };

    case "whoami":
      return {
        output: [{ text: "  root@attacker  [unauthenticated shell]", color: "yellow" }],
        newStage,
        solved: false,
        clear: false,
      };

    case "clear":
      return { output: BANNER, newStage, solved: false, clear: true };

    case "nmap": {
      // streaming handled separately in executeCommand
      return { output: [], newStage, solved: false, clear: false };
    }

    case "curl": {
      if (stage < 1) {
        return {
          output: [{ text: "  run nmap first.", color: "red" }],
          newStage,
          solved: false,
          clear: false,
        };
      }
      if (stage < 2) newStage = 2;
      return {
        output: [
          { text: "" },
          { text: "  HTTP/1.1 403 Forbidden", color: "red" },
          { text: "  Server: Apache/2.4.18 (Ubuntu)", color: "dim" },
          { text: "  X-Powered-By: revenge", color: "dim" },
          { text: "  X-Hint: the key is encoded in the next header", color: "yellow" },
          { text: `  X-Key: ${encodedKey}`, color: "green" },
          { text: "" },
          { text: "  → decode that header value.", color: "dim" },
          { text: "    try: decode <X-Key value>", color: "dim" },
        ],
        newStage,
        solved: false,
        clear: false,
      };
    }

    case "decode": {
      if (stage < 2) {
        return {
          output: [{ text: "  nothing to decode yet.", color: "red" }],
          newStage,
          solved: false,
          clear: false,
        };
      }
      const raw = rest.join("").trim();
      let decoded = "";
      try {
        decoded = atob(raw);
      } catch {
        return {
          output: [{ text: "  invalid base64.", color: "red" }],
          newStage,
          solved: false,
          clear: false,
        };
      }
      if (decoded === INNER_KEY) {
        if (stage < 3) newStage = 3;
        return {
          output: [
            { text: "" },
            { text: `  decoded → ${decoded}`, color: "green" },
            { text: "" },
            { text: "  format looks familiar.", color: "dim" },
            { text: "  wrap it and submit: BULLET{<decoded>}", color: "yellow" },
          ],
          newStage,
          solved: false,
          clear: false,
        };
      }
      return {
        output: [
          { text: `  decoded → ${decoded}`, color: "white" },
          { text: "  that's not the key.", color: "red" },
        ],
        newStage,
        solved: false,
        clear: false,
      };
    }

    case "submit": {
      const submitted = rest.join(" ").trim();
      if (submitted === FLAG) {
        return {
          output: [
            { text: "" },
            { text: "  ██████████████████████████████████████████", color: "green" },
            { text: "  ██                                      ██", color: "green" },
            { text: "  ██   ACCESS GRANTED                     ██", color: "green" },
            { text: `  ██   ${FLAG}   ██`, color: "green" },
            { text: "  ██                                      ██", color: "green" },
            { text: "  ██████████████████████████████████████████", color: "green" },
            { text: "" },
            { text: "  you think like an attacker.", color: "dim" },
            { text: "  that's the point.", color: "dim" },
            { text: "" },
          ],
          newStage: 4,
          solved: true,
          clear: false,
        };
      }
      return {
        output: [{ text: "  wrong flag. keep digging.", color: "red" }],
        newStage,
        solved: false,
        clear: false,
      };
    }

    default:
      return {
        output: [{ text: `  command not found: ${cmd}. type 'help'.`, color: "red" }],
        newStage,
        solved: false,
        clear: false,
      };
  }
}

function getNmapLines(target: string): { line: OutputLine; delay: number }[] {
  return [
    { line: { text: "" }, delay: 0 },
    { line: { text: `  Starting Nmap 7.94 ( https://nmap.org )`, color: "dim" }, delay: 180 },
    { line: { text: `  Nmap scan report for ${target}`, color: "white" }, delay: 320 },
    { line: { text: "  Host is up (0.098s latency).", color: "white" }, delay: 220 },
    { line: { text: "" }, delay: 120 },
    { line: { text: "  PORT      STATE  SERVICE      VERSION", color: "cyan" }, delay: 260 },
    { line: { text: "  22/tcp    open   ssh          OpenSSH 7.6p1 Ubuntu", color: "white" }, delay: 180 },
    { line: { text: "  80/tcp    open   http         Apache httpd 2.4.29", color: "white" }, delay: 200 },
    { line: { text: "  445/tcp   open   microsoft-ds Samba smbd 3.X - 4.X", color: "white" }, delay: 220 },
    { line: { text: "  8080/tcp  open   http-proxy   ?", color: "white" }, delay: 160 },
    { line: { text: "" }, delay: 100 },
    { line: { text: "  Host script results:", color: "yellow" }, delay: 600 },
    { line: { text: "  | smb-vuln-ms17-010:", color: "yellow" }, delay: 280 },
    { line: { text: "  |   VULNERABLE: MS17-010 — EternalBlue SMB RCE", color: "red" }, delay: 200 },
    { line: { text: "  |   State: VULNERABLE", color: "red" }, delay: 160 },
    { line: { text: "  |_  Risk factor: HIGH", color: "red" }, delay: 140 },
    { line: { text: "" }, delay: 200 },
    { line: { text: "  → port 8080 looks interesting.", color: "dim" }, delay: 400 },
    { line: { text: "    try: curl -I http://10.10.31.337:8080/secret", color: "dim" }, delay: 120 },
  ];
}

export default function CTF() {
  const [output, setOutput] = useState<OutputLine[]>(BANNER);
  const [input, setInput] = useState("");
  const [stage, setStage] = useState(0);
  const [solved, setSolved] = useState(false);
  const [streaming, setStreaming] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [encodedKey] = useState(() => btoa(INNER_KEY));
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef(stage);
  stageRef.current = stage;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  async function executeCommand(cmd: string) {
    const trimmed = cmd.trim();
    if (!trimmed || streaming) return;

    const cmdEcho: OutputLine = { text: `  ❯ ${trimmed}`, color: "white" };
    const topCmd = trimmed.split(/\s+/)[0].toLowerCase();
    const target = trimmed.split(/\s+/).slice(1).join(" ") || "10.10.31.337";

    if (topCmd === "nmap") {
      setStreaming(true);
      setOutput((prev) => [...prev, { text: "" }, cmdEcho]);
      setHistory((prev) => [trimmed, ...prev]);
      setHistIdx(-1);
      setInput("");

      for (const { line, delay } of getNmapLines(target)) {
        await new Promise<void>((r) => setTimeout(r, delay));
        setOutput((prev) => [...prev, line]);
      }

      setStage((prev) => Math.max(prev, 1));
      setStreaming(false);
      return;
    }

    const { output: newOut, newStage, solved: isSolved, clear } = processCommand(
      trimmed,
      stageRef.current,
      encodedKey,
    );

    if (clear) {
      setOutput(newOut);
    } else {
      setOutput((prev) => [...prev, { text: "" }, cmdEcho, ...newOut]);
    }

    setStage(newStage);
    if (isSolved) setSolved(true);
    setHistory((prev) => [trimmed, ...prev]);
    setHistIdx(-1);
    setInput("");
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(histIdx - 1, -1);
      setHistIdx(next);
      setInput(next === -1 ? "" : history[next]);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-start px-4 py-10 font-mono">
      <RightClickGuard />
      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-white/10 shadow-2xl">
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1c1c] border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-white/30 tracking-wide">
            bullet.ctf — root@attacker:~
          </span>
        </div>

        {/* output */}
        <div
          className="bg-[#0d0d0d] px-5 py-5 min-h-[500px] max-h-[70vh] overflow-y-auto text-[12.5px] leading-relaxed cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {output.map((line, i) => (
            <div
              key={i}
              className={`whitespace-pre ${line.color ? colorMap[line.color] : "text-white/50"}`}
            >
              {line.text || " "}
            </div>
          ))}

          {!solved && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#1db954] select-none shrink-0 pl-5">❯</span>
              {streaming ? (
                <span className="text-white/30 text-[12.5px] animate-pulse">scanning...</span>
              ) : (
                <input
                  ref={inputRef}
                  className="flex-1 bg-transparent text-white outline-none text-[12.5px] font-mono"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  autoFocus
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                />
              )}
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {solved && (
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-xs text-white/30 tracking-widest uppercase">challenge complete</p>
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
