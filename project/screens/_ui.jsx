// LinguaRise — Shared UI primitives & icon system
// All consumers expect Plus Jakarta + Fraunces loaded from Google Fonts and tokens.css.

// ───────────────────────────────────────────────────────
// Icon set — minimal, custom-drawn line icons (24px grid)
// Single-color, controlled via currentColor / stroke
// ───────────────────────────────────────────────────────
const Icon = ({ name, size = 22, color = "currentColor", strokeWidth = 1.8, ...rest }) => {
  const s = { width: size, height: size, flexShrink: 0, ...rest.style };
  const stroke = { fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    home: <><path {...stroke} d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z"/></>,
    connect: <><circle cx="8" cy="9" r="3.2" {...stroke}/><circle cx="16" cy="9" r="3.2" {...stroke}/><path {...stroke} d="M3 20c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5M11 20c0-2.5 2.2-4.5 5-4.5s5 2 5 4.5"/></>,
    ai: <><path {...stroke} d="M12 3l1.8 4.8L18.6 9.6 13.8 11.4 12 16.2 10.2 11.4 5.4 9.6l4.8-1.8z"/><circle cx="18" cy="18" r="1.5" fill={color}/><circle cx="6" cy="18" r="1" fill={color}/></>,
    sim: <><rect x="3" y="5" width="18" height="13" rx="2" {...stroke}/><path {...stroke} d="M9 21h6M12 18v3"/><circle cx="12" cy="11" r="2.5" {...stroke}/></>,
    profile: <><circle cx="12" cy="8" r="4" {...stroke}/><path {...stroke} d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/></>,
    bell: <><path {...stroke} d="M6 16V11a6 6 0 0112 0v5l1.5 2H4.5z"/><path {...stroke} d="M10 21a2 2 0 004 0"/></>,
    flame: <><path {...stroke} d="M12 3c1 3 4 4.5 4 8.5C16 15 14.5 17 12 17S8 15 8 11.5c0-2 1.2-3 1.2-5C9.2 5 10.5 4 12 3z"/><path {...stroke} d="M12 17c1 0 2-.8 2-2 0-1.2-1-1.5-2-3-1 1.5-2 1.8-2 3 0 1.2 1 2 2 2z"/></>,
    chevR: <><path {...stroke} d="M9 5l7 7-7 7"/></>,
    chevL: <><path {...stroke} d="M15 5l-7 7 7 7"/></>,
    chevD: <><path {...stroke} d="M5 9l7 7 7-7"/></>,
    close: <><path {...stroke} d="M6 6l12 12M18 6L6 18"/></>,
    plus: <><path {...stroke} d="M12 5v14M5 12h14"/></>,
    play: <><path {...stroke} fill={color} d="M7 4l13 8-13 8z"/></>,
    pause: <><rect x="6" y="4" width="4" height="16" rx="1" fill={color}/><rect x="14" y="4" width="4" height="16" rx="1" fill={color}/></>,
    mic: <><rect x="9" y="3" width="6" height="12" rx="3" {...stroke}/><path {...stroke} d="M5 11a7 7 0 0014 0M12 18v3"/></>,
    micOff: <><path {...stroke} d="M3 3l18 18M9 9v3a3 3 0 005.2 2"/><path {...stroke} d="M15 9V6a3 3 0 00-5.5-1.7M5 11a7 7 0 0011 5.5M12 18v3"/></>,
    cam: <><path {...stroke} d="M3 7a1 1 0 011-1h11a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1zM16 10l5-3v10l-5-3z"/></>,
    end: <><path {...stroke} d="M3 12c4-4 14-4 18 0l-1.5 2-3-1V11c-2.5-.5-6-.5-8.5 0v2L4.5 14z"/></>,
    shield: <><path {...stroke} d="M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6z"/><path {...stroke} d="M9 12l2 2 4-4"/></>,
    star: <><path {...stroke} d="M12 3l2.7 5.5L21 9.5l-4.5 4.4 1.1 6.1L12 17.1l-5.6 2.9 1.1-6.1L3 9.5l6.3-1z"/></>,
    starF: <><path fill={color} d="M12 2.5l3 6 6.5 1-4.7 4.6 1.2 6.4-6-3.2-6 3.2 1.2-6.4-4.7-4.6 6.5-1z"/></>,
    book: <><path {...stroke} d="M4 4h6a2 2 0 012 2v14a2 2 0 00-2-2H4zM20 4h-6a2 2 0 00-2 2v14a2 2 0 012-2h6z"/></>,
    chart: <><path {...stroke} d="M4 20V8M10 20V4M16 20v-7M22 20H2"/></>,
    clock: <><circle cx="12" cy="12" r="9" {...stroke}/><path {...stroke} d="M12 7v5l3 2"/></>,
    lock: <><rect x="5" y="11" width="14" height="9" rx="2" {...stroke}/><path {...stroke} d="M8 11V8a4 4 0 018 0v3"/></>,
    sparkle: <><path {...stroke} d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></>,
    check: <><path {...stroke} d="M5 12l5 5 9-11"/></>,
    arrowR: <><path {...stroke} d="M5 12h14M13 6l6 6-6 6"/></>,
    settings: <><circle cx="12" cy="12" r="3" {...stroke}/><path {...stroke} d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h0a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5h0a1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8 1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z"/></>,
    crown: <><path {...stroke} d="M3 8l4 4 5-7 5 7 4-4-2 11H5z"/></>,
    globe: <><circle cx="12" cy="12" r="9" {...stroke}/><path {...stroke} d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></>,
    waveform: <><path {...stroke} d="M3 12h2M7 8v8M11 5v14M15 9v6M19 11v2M21 12h2"/></>,
    target: <><circle cx="12" cy="12" r="9" {...stroke}/><circle cx="12" cy="12" r="5" {...stroke}/><circle cx="12" cy="12" r="1.5" fill={color}/></>,
    headset: <><path {...stroke} d="M4 14a8 8 0 0116 0v3a2 2 0 01-2 2h-2v-6h4M6 13H4v6a2 2 0 002 2h2v-6"/></>,
    download: <><path {...stroke} d="M12 4v11M6 11l6 6 6-6M4 20h16"/></>,
    share: <><circle cx="6" cy="12" r="2.5" {...stroke}/><circle cx="18" cy="6" r="2.5" {...stroke}/><circle cx="18" cy="18" r="2.5" {...stroke}/><path {...stroke} d="M8 11l8-4M8 13l8 4"/></>,
    flag: <><path {...stroke} d="M5 21V4M5 4h11l-2 4 2 4H5"/></>,
    badge: <><path {...stroke} d="M12 3l3 2 3.5-.5L19 8l2 3-2 3-.5 3.5L15 17l-3 2-3-2-3.5.5L5 14l-2-3 2-3 .5-3.5L9 5z"/><path {...stroke} d="M9 12l2 2 4-4"/></>,
  };
  return <svg viewBox="0 0 24 24" style={s} aria-hidden="true">{paths[name]}</svg>;
};

// ───────────────────────────────────────────────────────
// Logo — 3-layer mark (Human · AI · Career stack)
// ───────────────────────────────────────────────────────
const LRLogo = ({ size = 28, color = "var(--lr-primary-600)", accent = "var(--lr-accent)" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-label="LinguaRise">
    {/* Bottom: career bar */}
    <rect x="3" y="22" width="26" height="6" rx="3" fill={color} opacity="0.25"/>
    {/* Middle: AI diamond */}
    <rect x="6" y="13" width="20" height="6" rx="3" fill={color} opacity="0.55"/>
    {/* Top: human dot rising */}
    <rect x="10" y="4" width="12" height="6" rx="3" fill={color}/>
    <circle cx="24" cy="7" r="2.5" fill={accent}/>
  </svg>
);

// ───────────────────────────────────────────────────────
// Building blocks
// ───────────────────────────────────────────────────────
const Pill = ({ children, color = "var(--lr-primary-600)", bg, size = "md", style = {} }) => {
  const sz = { sm: { fs: 11, px: 8, py: 3 }, md: { fs: 12, px: 10, py: 4 }, lg: { fs: 13, px: 12, py: 5 } }[size];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: sz.fs, fontWeight: 700, padding: `${sz.py}px ${sz.px}px`,
      borderRadius: 999, color: color, background: bg || "var(--lr-primary-50)",
      letterSpacing: 0.1, lineHeight: 1.1, ...style,
    }}>{children}</span>
  );
};

const Card = ({ children, padding, style = {}, onClick, elevated = false }) => (
  <div onClick={onClick} style={{
    background: "var(--lr-bg-elev)",
    borderRadius: "var(--lr-radius)",
    padding: padding ?? "var(--lr-pad-card)",
    boxShadow: elevated ? "var(--lr-shadow)" : "var(--lr-shadow-sm)",
    border: "0.5px solid var(--lr-line)",
    cursor: onClick ? "pointer" : undefined,
    ...style,
  }}>{children}</div>
);

const Btn = ({ children, variant = "primary", size = "md", onClick, leading, trailing, disabled, style = {}, full }) => {
  const sizes = {
    sm: { h: 36, fs: 13, px: 14, r: 10 },
    md: { h: 48, fs: 15, px: 18, r: 14 },
    lg: { h: 56, fs: 16, px: 22, r: 16 },
  }[size];
  const variants = {
    primary: { bg: "var(--lr-primary-600)", color: "var(--lr-on-primary)", border: "none", shadow: "var(--lr-shadow-purple)" },
    accent:  { bg: "var(--lr-accent)", color: "var(--lr-ink)", border: "none", shadow: "0 6px 16px rgba(255,214,74,0.5)" },
    ghost:   { bg: "transparent", color: "var(--lr-primary-600)", border: "1.5px solid var(--lr-primary-200)", shadow: "none" },
    soft:    { bg: "var(--lr-primary-50)", color: "var(--lr-primary-700)", border: "none", shadow: "none" },
    dark:    { bg: "var(--lr-ink)", color: "#fff", border: "none", shadow: "var(--lr-shadow)" },
  }[variant];
  return (
    <button onClick={onClick} disabled={disabled} style={{
      height: sizes.h, fontSize: sizes.fs, padding: `0 ${sizes.px}px`, borderRadius: sizes.r,
      background: variants.bg, color: variants.color, border: variants.border,
      boxShadow: variants.shadow, fontWeight: 700, fontFamily: "var(--lr-font-ui)",
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
      width: full ? "100%" : undefined, cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1, letterSpacing: 0.1,
      transition: "transform 0.1s, box-shadow 0.15s",
      ...style,
    }}
    onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
    onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
    >
      {leading}
      <span>{children}</span>
      {trailing}
    </button>
  );
};

// CEFR badge — color-coded
const CEFRBadge = ({ level = "B2", size = "md" }) => {
  const colors = {
    A1: "#9CA3AF", A2: "#6B7280", B1: "#3B82F6", B2: "#6B3FA0", C1: "#7C3AED", C2: "#1A0F2E",
  };
  const sz = { sm: { fs: 10, px: 6, py: 2 }, md: { fs: 11, px: 8, py: 3 } }[size];
  return (
    <span style={{
      fontSize: sz.fs, fontWeight: 800, padding: `${sz.py}px ${sz.px}px`,
      borderRadius: 6, color: "white", background: colors[level] || colors.B2,
      letterSpacing: 0.5, fontFamily: "var(--lr-font-mono)",
    }}>{level}</span>
  );
};

// Avatar with initials fallback
const Avatar = ({ name = "User", size = 36, hue = 280, src }) => {
  const initials = name.split(" ").slice(0, 2).map(n => n[0]).join("").toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: `linear-gradient(135deg, oklch(0.78 0.12 ${hue}), oklch(0.55 0.18 ${hue + 30}))`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "white", fontWeight: 800, fontSize: size * 0.36,
      fontFamily: "var(--lr-font-ui)", flexShrink: 0,
      backgroundImage: src ? `url(${src})` : undefined, backgroundSize: "cover",
    }}>{!src && initials}</div>
  );
};

// Progress bar
const ProgressBar = ({ value = 50, color = "var(--lr-primary-600)", track = "var(--lr-primary-50)", height = 8 }) => (
  <div style={{ width: "100%", height, background: track, borderRadius: 999, overflow: "hidden" }}>
    <div style={{
      width: `${value}%`, height: "100%", background: color, borderRadius: 999,
      transition: "width 0.6s var(--lr-ease-out)",
    }}/>
  </div>
);

// 3-Layer indicator (signature motif)
const ThreeLayer = ({ size = 14, gap = 2 }) => (
  <span style={{ display: "inline-flex", flexDirection: "column", gap, lineHeight: 0 }}>
    <span style={{ width: size, height: 2, background: "var(--lr-primary-600)", borderRadius: 1 }}/>
    <span style={{ width: size, height: 2, background: "var(--lr-primary-400)", borderRadius: 1 }}/>
    <span style={{ width: size, height: 2, background: "var(--lr-accent)", borderRadius: 1 }}/>
  </span>
);

// ───────────────────────────────────────────────────────
// App-shell helpers (status bar tone, top bar, bottom tab)
// ───────────────────────────────────────────────────────
const Screen = ({ children, bg, padBottom = 96, padTop = 0, style = {} }) => (
  <div style={{
    minHeight: "100%", background: bg || "var(--lr-bg)",
    paddingBottom: padBottom, paddingTop: padTop,
    fontFamily: "var(--lr-font-ui)", color: "var(--lr-ink)",
    WebkitFontSmoothing: "antialiased",
    ...style,
  }}>{children}</div>
);

const TopBar = ({ left, right, title, subtitle, transparent = false, style = {} }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "8px 16px 12px", height: 56,
    background: transparent ? "transparent" : "var(--lr-bg)",
    ...style,
  }}>
    <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>{left}</div>
    {(title || subtitle) && (
      <div style={{ flex: 2, textAlign: "center", minWidth: 0 }}>
        {title && <div style={{ fontSize: 16, fontWeight: 700 }}>{title}</div>}
        {subtitle && <div style={{ fontSize: 12, color: "var(--lr-ink-3)" }}>{subtitle}</div>}
      </div>
    )}
    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>{right}</div>
  </div>
);

const BottomTabs = ({ active, onChange, t }) => {
  const labels = t === "en"
    ? { home: "Home", connect: "Connect", ai: "AI Learn", sim: "Simulate", profile: "Profile" }
    : { home: "Home", connect: "Connect", ai: "AI Learn", sim: "Simulasi", profile: "Profil" };
  const tabs = [
    { id: "home", icon: "home", label: labels.home },
    { id: "connect", icon: "connect", label: labels.connect },
    { id: "ai", icon: "ai", label: labels.ai },
    { id: "sim", icon: "sim", label: labels.sim },
    { id: "profile", icon: "profile", label: labels.profile },
  ];
  return (
    <div style={{
      position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 30,
      paddingBottom: 24, paddingTop: 8, paddingLeft: 8, paddingRight: 8,
      background: "var(--lr-bg-elev)",
      borderTop: "0.5px solid var(--lr-line)",
      display: "flex", justifyContent: "space-around",
    }}>
      {tabs.map(tab => {
        const on = active === tab.id;
        return (
          <button key={tab.id} onClick={() => onChange(tab.id)} style={{
            flex: 1, height: 56, border: "none", background: "transparent",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            color: on ? "var(--lr-primary-600)" : "var(--lr-ink-3)",
            fontFamily: "inherit", cursor: "pointer", padding: 0,
          }}>
            <Icon name={tab.icon} size={24} strokeWidth={on ? 2.2 : 1.7}/>
            <span style={{ fontSize: 10, fontWeight: on ? 700 : 600 }}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

Object.assign(window, {
  Icon, LRLogo, Pill, Card, Btn, CEFRBadge, Avatar, ProgressBar,
  ThreeLayer, Screen, TopBar, BottomTabs,
});
