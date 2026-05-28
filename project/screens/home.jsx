// LinguaRise — Home Dashboard
// Greeting, Performance Score, Today's Focus, Streak, Recent Activity, Weekly chart

const ScoreRing = ({ value = 85, size = 88, stroke = 8, label }) => {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  const color = value >= 80 ? "var(--lr-success)" : value >= 60 ? "var(--lr-warn)" : "var(--lr-accent-2)";
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size}>
        <circle cx={size/2} cy={size/2} r={r} stroke="var(--lr-primary-50)" strokeWidth={stroke} fill="none"/>
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{ transition: "stroke-dashoffset 0.8s var(--lr-ease-out)" }}/>
      </svg>
      <div style={{
        position: "absolute", inset: 0, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ fontFamily: "var(--lr-font-display)", fontSize: size * 0.32, fontWeight: 600, lineHeight: 1, letterSpacing: -0.5 }}>{value}</div>
        {label && <div style={{ fontSize: 9, color: "var(--lr-ink-3)", fontWeight: 700, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>}
      </div>
    </div>
  );
};

const MiniBar = ({ data, max = 60 }) => (
  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 64 }}>
    {data.map((d, i) => (
      <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <div style={{
          width: "100%", height: `${(d.v / max) * 100}%`,
          background: d.today ? "var(--lr-primary-600)" : "var(--lr-primary-200)",
          borderRadius: 4, minHeight: 4,
          animation: `barRise 0.6s var(--lr-ease-out) ${i * 0.05}s both`,
        }}/>
        <div style={{ fontSize: 10, color: "var(--lr-ink-3)", fontWeight: 600 }}>{d.day}</div>
      </div>
    ))}
    <style>{`@keyframes barRise { from { height: 0 } }`}</style>
  </div>
);

const ScreenHome = ({ t, plan, onNav, onScreen }) => {
  const isPro = plan === "pro";
  const isPaid = plan !== "free";
  const greeting = t === "en" ? "Hi, Aulia 👋" : "Halo, Aulia 👋";
  const subg = t === "en" ? "Tuesday, May 6" : "Selasa, 6 Mei";

  const metrics = [
    { label: t === "en" ? "Fluency" : "Fluency", v: 82, d: "+2", color: "var(--lr-success)" },
    { label: t === "en" ? "Accuracy" : "Akurasi", v: 78, d: "+1", color: "var(--lr-warn)" },
    { label: t === "en" ? "Pronunciation" : "Pelafalan", v: 85, d: "+5", color: "var(--lr-success)" },
    { label: t === "en" ? "Confidence" : "Confidence", v: 87, d: "+8", color: "var(--lr-success)" },
  ];

  return (
    <Screen padBottom={104}>
      {/* Top bar */}
      <div style={{ paddingTop: 56 }}/>
      <div style={{ padding: "0 var(--lr-pad-screen) 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LRLogo width={120}/>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button style={{ position: "relative", width: 40, height: 40, borderRadius: 12, border: "none", background: "var(--lr-bg-elev)", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer" }}>
            <Icon name="bell" size={20}/>
            <span style={{ position: "absolute", top: 8, right: 8, width: 8, height: 8, borderRadius: "50%", background: "var(--lr-accent-2)", border: "1.5px solid var(--lr-bg-elev)" }}/>
          </button>
          <Avatar name="Aulia Rahma" size={40} hue={280}/>
        </div>
      </div>

      {/* Greeting */}
      <div style={{ padding: "12px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{subg}</div>
        <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, marginTop: 2, letterSpacing: -0.5 }}>{greeting}</div>
        <div style={{ display: "flex", gap: 8, marginTop: 10, alignItems: "center" }}>
          <CEFRBadge level="B2"/>
          <Pill bg="rgba(255,107,92,0.12)" color="var(--lr-accent-2)" size="md">
            <Icon name="flame" size={12}/> 12 {t === "en" ? "day streak" : "hari streak"}
          </Pill>
        </div>
      </div>

      {/* Quick action */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <div onClick={() => onScreen("speaking")} style={{
          background: "linear-gradient(135deg, var(--lr-primary-600) 0%, var(--lr-primary-400) 100%)",
          borderRadius: "var(--lr-radius-lg)", padding: 22, color: "white",
          boxShadow: "var(--lr-shadow-purple)", position: "relative", overflow: "hidden", cursor: "pointer",
        }}>
          <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }}/>
          <div style={{ position: "absolute", bottom: -40, right: 40, width: 90, height: 90, borderRadius: "50%", background: "rgba(255,214,74,0.15)" }}/>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8, position: "relative" }}>
            <ThreeLayer size={12} gap={2}/>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, opacity: 0.85, textTransform: "uppercase" }}>{t === "en" ? "Today's focus" : "Fokus hari ini"}</span>
          </div>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, lineHeight: 1.2, position: "relative" }}>
            {t === "en" ? "Ready for the best perform?" : "Siap tampil terbaik hari ini?"}
          </div>
          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 6, position: "relative", lineHeight: 1.45 }}>
            {t === "en" ? "Theme: Future of Work. Practice with story-telling." : "Tema: Future of Work. Latihan lewat story-telling."}
          </div>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
            <Btn variant="accent" size="sm" trailing={<Icon name="arrowR" size={14}/>}>
              {t === "en" ? "Practice now" : "Mulai latihan"}
            </Btn>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, opacity: 0.85 }}>
              <Icon name="clock" size={14}/> 8 min
            </div>
          </div>
        </div>
      </div>

      {/* Performance card */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <Card padding={18} onClick={() => onScreen("score")}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <ScoreRing value={85} size={92} label="LinguaScore"/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--lr-ink-2)" }}>{t === "en" ? "Performance" : "Performa"}</div>
                <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {metrics.map(m => (
                  <div key={m.label}>
                    <div style={{ fontSize: 10, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{m.label}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 1 }}>
                      <div style={{ fontSize: 17, fontWeight: 800, fontFamily: "var(--lr-font-display)", letterSpacing: -0.4 }}>{m.v}</div>
                      <div style={{ fontSize: 10, fontWeight: 700, color: m.color }}>{m.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Today's career focus card */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <Icon name="badge" size={14} color="var(--lr-primary-600)"/>
          {t === "en" ? "Pick up where you left" : "Lanjutkan latihanmu"}
        </div>
        <Card padding={16} onClick={() => onScreen("simReport")}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{
              width: 56, height: 56, borderRadius: 14, flexShrink: 0,
              background: "linear-gradient(135deg, var(--lr-accent), #FFB13C)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Icon name="badge" size={28} color="var(--lr-ink)" strokeWidth={1.8}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
                <Pill size="sm" bg="var(--lr-primary-50)" color="var(--lr-primary-700)">{t === "en" ? "Career Sim" : "Career Sim"}</Pill>
                <Pill size="sm" bg="rgba(245,166,35,0.12)" color="#A66B00">Hard</Pill>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>Mock Interview · Senior PM</div>
              <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 2, display: "flex", alignItems: "center", gap: 8 }}>
                <span>15 min</span><span>·</span><span>{t === "en" ? "8 questions" : "8 pertanyaan"}</span>
              </div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "var(--lr-primary-600)", color: "white",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <Icon name="play" size={14} color="white"/>
            </div>
          </div>
        </Card>
      </div>

      {/* Weekly chart + Recent — split */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 12 }}>
        <Card padding={14}>
          <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "This week" : "Minggu ini"}</div>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 2 }}>3h 42m</div>
          <div style={{ marginTop: 10 }}>
            <MiniBar data={[
              { day: "S", v: 24 }, { day: "M", v: 38 }, { day: "T", v: 52 },
              { day: "W", v: 45 }, { day: "T", v: 28 }, { day: "F", v: 60 },
              { day: "S", v: 18, today: true },
            ]}/>
          </div>
        </Card>
        <Card padding={14}>
          <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Goal" : "Target"}</div>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4, marginTop: 2 }}>4h / 5h</div>
          <div style={{ marginTop: 12 }}>
            <ProgressBar value={80} height={10}/>
            <div style={{ marginTop: 8, fontSize: 11, color: "var(--lr-ink-2)", lineHeight: 1.4 }}>
              {t === "en" ? "1h 18m to weekly goal" : "Tinggal 1j 18m"}
            </div>
          </div>
          <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--lr-primary-700)", fontWeight: 700 }}>
            <Icon name="sparkle" size={14} color="var(--lr-primary-600)"/>
            {t === "en" ? "On track for streak" : "Streak aman"}
          </div>
        </Card>
      </div>

      {/* Recent partners */}
      <div style={{ padding: "20px var(--lr-pad-screen) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase" }}>
            {t === "en" ? "Recent" : "Aktivitas terakhir"}
          </div>
          <button style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontWeight: 700, fontSize: 12, cursor: "pointer" }}>{t === "en" ? "See all" : "Lihat semua"}</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { who: "Maya Chen", role: t === "en" ? "Connect · 18 min" : "Connect · 18 min", rating: 5, hue: 30, type: "human" },
            { who: t === "en" ? "Speaking Coach" : "AI Speaking Coach", role: t === "en" ? "AI Learn · Free Talk" : "AI Learn · Free Talk", rating: 4, hue: 280, type: "ai" },
            { who: "Devi Putri", role: t === "en" ? "ProSpeak · 50 min" : "ProSpeak · 50 min", rating: 5, hue: 200, type: "tutor" },
          ].map((r, i) => (
            <div key={i} style={{
              background: "var(--lr-bg-elev)", borderRadius: "var(--lr-radius)",
              padding: "12px 14px", display: "flex", alignItems: "center", gap: 12,
              border: "0.5px solid var(--lr-line)",
            }}>
              {r.type === "ai" ? (
                <div style={{ width: 38, height: 38, borderRadius: "50%", background: "var(--lr-primary-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name="ai" size={20} color="var(--lr-primary-600)"/>
                </div>
              ) : (
                <Avatar name={r.who} hue={r.hue} size={38}/>
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{r.who}</div>
                <div style={{ fontSize: 11, color: "var(--lr-ink-3)" }}>{r.role}</div>
              </div>
              <div style={{ display: "flex", gap: 1 }}>
                {[1,2,3,4,5].map(n => (
                  <Icon key={n} name={n <= r.rating ? "starF" : "star"} size={12} color={n <= r.rating ? "var(--lr-accent)" : "var(--lr-ink-3)"}/>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenHome, ScoreRing, MiniBar });
