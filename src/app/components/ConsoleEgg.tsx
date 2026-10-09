"use client";

import { useEffect } from "react";

export default function ConsoleEgg() {
  useEffect(() => {
    const g = "color: #1db954; font-family: monospace; font-size: 11px; font-weight: bold";
    const d = "color: #888; font-family: monospace; font-size: 11px";
    const w = "color: #e8e8e8; font-family: monospace; font-size: 11px";
    const y = "color: #f5c542; font-family: monospace; font-size: 11px; font-weight: 600";

    console.log(
      `%c
╔══════════════════════════════════════════════╗
║    recon detected — you look like my kind    ║
╚══════════════════════════════════════════════╝
%c
%c$ whoami%c
  michael · infra specialist → software engineer

%c$ cat /etc/prior-art%c
  atento brasil  · infrastructure specialist  · 2023-2025
  rede mater     · sysadmin                   · 2022-2023

  vpn hardening (forticlient · cisco anyconnect · mfa/fortoken)
  iam: entra id · sailpoint · crowdstrike · zero trust
  automation: ansible · terraform · sccm · powershell · python
  compliance: lgpd · iso 27001 · devSecOps

%c→ hint:%c
  there's a hidden page for people who look this deep
  try → whoami
`,
      g, d, g, d, g, d, y, w
    );

    Object.defineProperty(window, "whoami", {
      get() {
        window.location.href = "/whoami";
        return "→ /whoami";
      },
      configurable: true,
    });

  }, []);

  return null;
}
