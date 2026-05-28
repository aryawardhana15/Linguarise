// LinguaRise — Career Sim home (scenarios) + In-Session, Topics grid, Co-Reading

const ScreenSimHome = ({ t, plan, onScreen }) => {
  const isPro = plan === "pro" || plan === "advanced";
  const scenarios = [
    { id: "interview", title: "Job Interview", role: "HRD", dur: "15–20 min", min: "B1+", icon: "sim", color: "var(--lr-primary-600)", bg: "var(--lr-primary-50)" },
    { id: "scholarship", title: t === "en" ? "Scholarship Interview" : "Wawancara Beasiswa", role: "LPDP / Chevening", dur: "20–25 min", min: "B2+", icon: "badge", color: "#D97757", bg: "rgba(217,119,87,0.12)", featured: true },
    { id: "presentation", title: "Business Presentation", role: t === "en" ? "Meeting attendees" : "Peserta rapat", dur: "12–15 min", min: "B2+", icon: "chart", color: "#3F4FA0", bg: "rgba(63,79,160,0.12)" },
    { id: "pitch", title: "Startup Pitch", role: "Investors", dur: "13 min", min: "B2+", icon: "sparkle", color: "#3D8C63", bg: "rgba(61,140,99,0.12)" },
    { id: "ielts", title: "IELTS Speaking", role: "Examiner", dur: "11–14 min", min: "B1+", icon: "book", color: "#8E2F6E", bg: "rgba(142,47,110,0.12)" },
    { id: "negotiation", title: "Business Negotiation", role: t === "en" ? "Business partner" : "Mitra bisnis", dur: "15–20 min", min: "C1+", icon: "headset", color: "var(--lr-ink)", bg: "var(--lr-primary-50)" },
  ];
  return (
    <Screen padBottom={104}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar title="Simulate" right={isPro ? <Pill bg="var(--lr-ink)" color="white" size="sm"><Icon name="crown" size={11} color="var(--lr-accent)"/> Pro</Pill> : <Pill bg="var(--lr-bg-elev)" color="var(--lr-ink-2)" size="sm" style={{ border: "0.5px solid var(--lr-line)" }}>Free · 1 trial</Pill>} transparent/>
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--lr-ink), var(--lr-primary-700))",
          borderRadius: "var(--lr-radius-lg)", padding: 18, color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -40, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,214,74,0.15)", filter: "blur(30px)" }}/>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase", opacity: 0.85, position: "relative" }}>
            <Icon name="sparkle" size={14} color="var(--lr-accent)"/> {t === "en" ? "Today's pick" : "Pilihan hari ini"}
          </div>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, marginTop: 6, lineHeight: 1.2, position: "relative" }}>{t === "en" ? "Mock LPDP Panel" : "Mock LPDP Panel"}</div>
          <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4, position: "relative" }}>{t === "en" ? "Tailored to your essay & target campus" : "Disesuaikan dengan essay & kampus target"}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 14, position: "relative" }}>
            <Btn variant="accent" size="sm" trailing={<Icon name="arrowR" size={14}/>}>{t === "en" ? "Start" : "Mulai"}</Btn>
            <Btn variant="ghost" size="sm" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>{t === "en" ? "Details" : "Detail"}</Btn>
          </div>
        </div>
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "All scenarios" : "Semua skenario"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {scenarios.map(sc => {
            const locked = !isPro && sc.id !== "interview" && sc.id !== "scholarship";
            return (
              <Card key={sc.id} padding={14} onClick={() => !locked && onScreen("simSetup")}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: sc.bg, color: sc.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={sc.icon} size={22}/>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{sc.title}</div>
                      {locked && <Icon name="lock" size={12} color="var(--lr-ink-3)"/>}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--lr-ink-3)", marginTop: 2 }}>{sc.role} · {sc.dur} · {sc.min}</div>
                  </div>
                  {locked ? <Pill bg="var(--lr-accent)" color="var(--lr-ink)" size="sm">Premium</Pill> : <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Screen>
  );
};

const ScreenSimSession = ({ t, onScreen }) => {
  const [elapsed, setElapsed] = React.useState(127);
  React.useEffect(() => {
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  return (
    <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
      {/* AI avatar (top half) */}
      <div style={{ flex: 1, position: "relative", background: "linear-gradient(180deg, #2D1857, var(--lr-bg-deep))", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ paddingTop: 56, position: "absolute", top: 0, left: 0, right: 0, padding: "60px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <button onClick={() => onScreen("sim")} style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(20px)" }}>
            <Icon name="close" size={18} color="white"/>
          </button>
          <div style={{ background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: 999, display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, backdropFilter: "blur(20px)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lr-accent-2)", animation: "pulseDot 1.2s infinite" }}/>
            REC · {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </div>
          <button style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,107,92,0.18)", border: "none", color: "var(--lr-accent-2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(20px)" }}>
            <Icon name="shield" size={18} color="var(--lr-accent-2)"/>
          </button>
        </div>

        {/* AI avatar */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, marginTop: 24 }}>
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg, var(--lr-primary-400), var(--lr-primary-700))", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "0 0 60px rgba(146,99,204,0.4)" }}>
            <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: "2px solid var(--lr-primary-200)", animation: "pulseRing 2.4s ease-out infinite" }}/>
            <Icon name="ai" size={62} color="white"/>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.7, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "AI Interviewer · Question 3 of 8" : "AI Interviewer · Soal 3 dari 8"}</div>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, marginTop: 8, lineHeight: 1.3, padding: "0 32px", letterSpacing: -0.3 }}>
              {t === "en" ? "Tell me about a time you led under uncertainty." : "Ceritakan saat memimpin dalam ketidakpastian."}
            </div>
          </div>
        </div>

        {/* Live transcript */}
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, padding: "10px 14px", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(20px)", borderRadius: 14, fontSize: 13, lineHeight: 1.4, fontFamily: "var(--lr-font-mono)", border: "0.5px solid rgba(255,255,255,0.1)" }}>
          <div style={{ fontSize: 9, fontWeight: 700, opacity: 0.5, letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 4 }}>You · live</div>
          <span>"During my product internship, the engineering lead resigned mid-sprint and I had to</span>
          <span style={{ color: "var(--lr-accent)", fontWeight: 600 }}> _</span>
        </div>
      </div>

      {/* User cam (bottom) */}
      <div style={{ height: 240, position: "relative", background: "linear-gradient(180deg, var(--lr-bg-deep), #000)", borderTop: "0.5px solid rgba(255,255,255,0.1)" }}>
        <div style={{ position: "absolute", top: 12, right: 12, padding: "4px 8px", background: "rgba(0,0,0,0.5)", borderRadius: 8, fontSize: 10, fontWeight: 700, backdropFilter: "blur(10px)" }}>You</div>
        <div style={{ position: "absolute", inset: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Avatar name="Aulia Rahma" size={84} hue={280}/>
        </div>
        {/* Bottom controls */}
        <div style={{ position: "absolute", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 14 }}>
          {[
            { ic: "mic", color: "rgba(255,255,255,0.15)" },
            { ic: "cam", color: "rgba(255,255,255,0.15)" },
            { ic: "end", color: "var(--lr-accent-2)", big: true },
            { ic: "chevR", color: "rgba(255,255,255,0.15)" },
            { ic: "ai", color: "rgba(255,214,74,0.18)" },
          ].map((c, i) => (
            <button key={i} style={{
              width: c.big ? 60 : 48, height: c.big ? 60 : 48, borderRadius: "50%",
              background: c.color, border: "none", color: c.ic === "end" ? "white" : "white",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              backdropFilter: "blur(20px)",
            }}>
              <Icon name={c.ic} size={c.big ? 28 : 22} color={c.ic === "ai" ? "var(--lr-accent)" : "white"}/>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulseDot { 0%,100% { opacity: 1 } 50% { opacity: 0.3 } }
        @keyframes pulseRing { 0% { transform: scale(0.95); opacity: 0.7 } 100% { transform: scale(1.25); opacity: 0 } }
      `}</style>
    </Screen>
  );
};

const ScreenTopics = ({ t, onScreen }) => {
  const cats = [
    { id: "daily", l: t === "en" ? "Daily Life" : "Kehidupan Sehari-hari", count: 28, ic: "home", color: "#D97757" },
    { id: "edu", l: "Education", count: 18, ic: "book", color: "var(--lr-primary-600)" },
    { id: "social", l: t === "en" ? "Social Issues" : "Isu Sosial", count: 22, ic: "shield", color: "#3F4FA0" },
    { id: "debate", l: t === "en" ? "Opinion & Debate" : "Opini & Debat", count: 15, ic: "flag", color: "var(--lr-accent-2)" },
    { id: "fun", l: "Fun & Creative", count: 12, ic: "sparkle", color: "var(--lr-accent)" },
    { id: "career", l: t === "en" ? "Career & Future" : "Karier & Masa Depan", count: 24, ic: "sim", color: "#3D8C63", featured: true },
  ];
  return (
    <Screen padBottom={104}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => onScreen("connect")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title="Topics" transparent/>
      <div style={{ padding: "8px var(--lr-pad-screen) 0" }}>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, margin: 0, letterSpacing: -0.5, lineHeight: 1.2 }}>{t === "en" ? "Pick a topic" : "Pilih topik"}</h2>
        <div style={{ fontSize: 13, color: "var(--lr-ink-2)", marginTop: 6 }}>{t === "en" ? "Match with someone who shares it." : "Cocokkan dengan partner yang minat sama."}</div>
      </div>

      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {cats.map(c => (
          <Card key={c.id} padding={16} style={c.featured ? { background: c.color, color: "white", border: "none" } : {}}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: c.featured ? "rgba(255,255,255,0.2)" : c.color + "22", color: c.featured ? "white" : c.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={c.ic} size={20}/>
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, marginTop: 12, lineHeight: 1.3 }}>{c.l}</div>
            <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>{c.count} {t === "en" ? "topics" : "topik"}</div>
          </Card>
        ))}
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "Trending now" : "Sedang tren"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { l: t === "en" ? "What does success mean to you?" : "Apa arti sukses bagimu?", lvl: "B2", time: "8 min" },
            { l: t === "en" ? "Should remote work be the default?" : "Haruskah WFH jadi default?", lvl: "B2", time: "10 min" },
            { l: t === "en" ? "Books vs podcasts for learning" : "Buku vs podcast untuk belajar", lvl: "B1", time: "6 min" },
          ].map((it, i) => (
            <Card key={i} padding={12}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.4 }}>{it.l}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                    <CEFRBadge level={it.lvl} size="sm"/>
                    <span style={{ fontSize: 11, color: "var(--lr-ink-3)" }}>· {it.time}</span>
                  </div>
                </div>
                <Btn variant="soft" size="sm">{t === "en" ? "Match" : "Cari"}</Btn>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenSimHome, ScreenSimSession, ScreenTopics });
