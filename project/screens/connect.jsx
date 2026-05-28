// LinguaRise — Connect Smart Match (in-session) + post-session

const ScreenConnect = ({ t, onScreen }) => {
  const [tab, setTab] = React.useState("match"); // match | session | post
  const [duration, setDuration] = React.useState(15);
  const [video, setVideo] = React.useState(true);
  const [muted, setMuted] = React.useState(false);
  const [elapsed, setElapsed] = React.useState(0);
  const [rating, setRating] = React.useState(0);
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    if (tab !== "session") return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [tab]);

  const partner = { name: "Maya Chen", age: 24, country: "🇸🇬", level: "B2", match: 93, hue: 30, bio: "Marketing student. LPDP applicant. Loves K-drama & basketball.", interests: ["Career", "Travel", "K-pop", "Startups"] };

  // ── Smart Match list ────────────────────────────────────────
  if (tab === "match") {
    const partners = [
      partner,
      { name: "Kenji Tanaka", age: 28, country: "🇯🇵", level: "B1", match: 88, hue: 220, bio: "Software dev. Practicing for relocation to SG.", interests: ["Tech", "Anime", "Cooking"] },
      { name: "Sofia López", age: 22, country: "🇪🇸", level: "C1", match: 82, hue: 340, bio: "PhD candidate. Happy to help with academic English.", interests: ["Academic", "Books", "Yoga"] },
    ];
    return (
      <Screen padBottom={104}>
        <div style={{ paddingTop: 56 }}/>
        <TopBar
          title={t === "en" ? "Connect" : "Connect"}
          left={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="settings" size={18}/></button>}
          right={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="globe" size={18}/></button>}
          transparent
        />
        {/* Sub-tabs */}
        <div style={{ padding: "0 var(--lr-pad-screen)", display: "flex", gap: 6 }}>
          {[
            { id: "smart", label: t === "en" ? "Smart Match" : "Smart Match" },
            { id: "topics", label: t === "en" ? "Topics" : "Topik" },
            { id: "co", label: t === "en" ? "Co-Read" : "Co-Read" },
          ].map((s, i) => (
            <div key={s.id} style={{
              padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 700,
              background: i === 0 ? "var(--lr-ink)" : "var(--lr-bg-elev)",
              color: i === 0 ? "white" : "var(--lr-ink-2)",
              border: "0.5px solid var(--lr-line)",
              cursor: "pointer",
            }}>{s.label}</div>
          ))}
        </div>
        {/* Match status banner */}
        <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
          <div style={{
            background: "var(--lr-primary-50)", borderRadius: "var(--lr-radius)",
            padding: 14, display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--lr-primary-600)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="sparkle" size={20} color="white"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--lr-primary-900)" }}>{t === "en" ? "3 matches just for you" : "3 partner cocok untukmu"}</div>
              <div style={{ fontSize: 11, color: "var(--lr-primary-700)" }}>{t === "en" ? "Based on B2 + Career interest" : "Dipilih dari B2 + minat Karier"}</div>
            </div>
            <Btn variant="primary" size="sm">{t === "en" ? "Quick Match" : "Cepat"}</Btn>
          </div>
        </div>
        {/* Partner cards */}
        <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 12 }}>
          {partners.map((p, i) => (
            <Card key={i} padding={16} onClick={i === 0 ? () => setTab("session") : undefined}>
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ position: "relative" }}>
                  <Avatar name={p.name} size={60} hue={p.hue}/>
                  <div style={{
                    position: "absolute", bottom: -4, right: -4,
                    background: "white", borderRadius: 999, padding: "2px 6px",
                    fontSize: 10, fontWeight: 800, color: "var(--lr-success)",
                    border: "1.5px solid var(--lr-bg-elev)", boxShadow: "var(--lr-shadow-sm)",
                  }}>{p.match}%</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{p.name}</div>
                    <span style={{ fontSize: 14 }}>{p.country}</span>
                    <CEFRBadge level={p.level} size="sm"/>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 3, lineHeight: 1.4 }}>{p.bio}</div>
                  <div style={{ display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap" }}>
                    {p.interests.slice(0, 3).map(tag => (
                      <span key={tag} style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 999, background: "var(--lr-primary-50)", color: "var(--lr-primary-700)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                <Btn variant="ghost" size="sm" style={{ flex: 1 }}>{t === "en" ? "View" : "Lihat"}</Btn>
                <Btn variant="primary" size="sm" style={{ flex: 2 }} trailing={<Icon name="arrowR" size={14}/>}>{t === "en" ? "Connect" : "Hubungi"}</Btn>
              </div>
            </Card>
          ))}
        </div>
      </Screen>
    );
  }

  // ── In-session ──────────────────────────────────────────────
  if (tab === "session") {
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const seconds = String(elapsed % 60).padStart(2, "0");
    const remaining = duration * 60 - elapsed;
    const remM = String(Math.floor(remaining / 60)).padStart(2, "0");
    const remS = String(Math.max(0, remaining % 60)).padStart(2, "0");
    return (
      <Screen bg="#0A0413" padBottom={0} style={{ minHeight: 874, position: "relative", overflow: "hidden", color: "white" }}>
        {/* Fake video bg */}
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at center, oklch(0.45 0.16 30) 0%, oklch(0.25 0.10 30) 50%, oklch(0.12 0.06 280) 100%)`,
        }}/>
        {/* Top status */}
        <div style={{ position: "relative", padding: "60px 16px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,0,0,0.4)", padding: "6px 12px", borderRadius: 999, backdropFilter: "blur(20px)" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lr-success)", boxShadow: "0 0 8px var(--lr-success)" }}/>
              <span style={{ fontSize: 12, fontWeight: 700 }}>{t === "en" ? "Live" : "Live"}</span>
              <span style={{ fontSize: 12, opacity: 0.7, fontFamily: "var(--lr-font-mono)" }}>{minutes}:{seconds}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,0,0,0.4)", padding: "6px 12px", borderRadius: 999, backdropFilter: "blur(20px)" }}>
              <Icon name="clock" size={14} color="white"/>
              <span style={{ fontSize: 12, fontWeight: 700, fontFamily: "var(--lr-font-mono)" }}>−{remM}:{remS}</span>
            </div>
          </div>
        </div>
        {/* Partner big tile */}
        <div style={{ position: "relative", padding: "20px 16px 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginTop: 80 }}>
            <Avatar name={partner.name} size={140} hue={partner.hue}/>
            <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--lr-font-display)" }}>{partner.name}</div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <CEFRBadge level={partner.level} size="sm"/>
              <span style={{ fontSize: 12, opacity: 0.85 }}>{partner.country} · {t === "en" ? "Speaking" : "Berbicara"}</span>
            </div>
            <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 24, marginTop: 8 }}>
              {[...Array(14)].map((_, i) => (
                <div key={i} style={{
                  width: 3, background: "white", borderRadius: 2,
                  height: `${20 + Math.abs(Math.sin(elapsed * 0.8 + i * 0.5)) * 80}%`,
                  transition: "height 0.2s", opacity: 0.85,
                }}/>
              ))}
            </div>
          </div>
        </div>
        {/* Topic suggestion card */}
        <div style={{ position: "absolute", left: 16, right: 16, bottom: 180 }}>
          <div style={{
            background: "rgba(255,255,255,0.95)", color: "var(--lr-ink)",
            borderRadius: 16, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10,
            backdropFilter: "blur(20px)", boxShadow: "var(--lr-shadow-lg)",
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "var(--lr-primary-50)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Icon name="sparkle" size={16} color="var(--lr-primary-600)"/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: "var(--lr-primary-700)", fontWeight: 800, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Topic suggest" : "Topik saran"}</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 1 }}>{t === "en" ? "What does \"work-life balance\" mean to you?" : "Apa arti \"work-life balance\" untukmu?"}</div>
            </div>
            <button style={{ background: "transparent", border: "none", color: "var(--lr-ink-3)", cursor: "pointer", padding: 4 }}>
              <Icon name="close" size={16}/>
            </button>
          </div>
        </div>
        {/* Self preview */}
        <div style={{ position: "absolute", top: 110, right: 16, width: 96, height: 132, borderRadius: 14, background: "linear-gradient(135deg, oklch(0.4 0.15 280), oklch(0.2 0.08 280))", boxShadow: "var(--lr-shadow-lg)", border: "1.5px solid rgba(255,255,255,0.2)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Avatar name="Aulia Rahma" size={52} hue={280}/>
          {muted && (
            <div style={{ position: "absolute", bottom: 6, left: 6, background: "rgba(229,72,77,0.9)", borderRadius: 8, padding: 4 }}>
              <Icon name="micOff" size={12} color="white"/>
            </div>
          )}
        </div>
        {/* Control bar */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px 36px" }}>
          <div style={{
            background: "rgba(20,9,31,0.7)", backdropFilter: "blur(28px)",
            borderRadius: 32, padding: 10, display: "flex", justifyContent: "space-around", alignItems: "center",
            border: "0.5px solid rgba(255,255,255,0.15)",
          }}>
            <button onClick={() => setMuted(m => !m)} style={{
              width: 52, height: 52, borderRadius: "50%",
              background: muted ? "white" : "rgba(255,255,255,0.15)",
              border: "none", color: muted ? "var(--lr-ink)" : "white", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}><Icon name={muted ? "micOff" : "mic"} size={22}/></button>
            <button onClick={() => setVideo(v => !v)} style={{
              width: 52, height: 52, borderRadius: "50%",
              background: !video ? "white" : "rgba(255,255,255,0.15)",
              border: "none", color: !video ? "var(--lr-ink)" : "white", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="cam" size={22}/></button>
            <button onClick={() => setTab("post")} style={{
              width: 64, height: 52, borderRadius: 26,
              background: "var(--lr-accent-2)", border: "none", color: "white", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 6px 16px rgba(229,72,77,0.5)",
            }}><Icon name="end" size={24} color="white"/></button>
            <button style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "rgba(255,255,255,0.15)", border: "none", color: "white", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}><Icon name="shield" size={22}/></button>
          </div>
        </div>
      </Screen>
    );
  }

  // ── Post-session rating ─────────────────────────────────────
  const allTags = t === "en"
    ? ["Great conversation", "Patient", "Helpful", "Clear pronunciation", "Encouraging", "Native-like"]
    : ["Asik diajak ngobrol", "Sabar", "Membantu", "Pelafalan jelas", "Suportif", "Sangat fasih"];
  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 60 }}/>
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%", background: "var(--lr-success)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(61,186,140,0.4)", marginBottom: 16,
          animation: "pop 0.5s var(--lr-ease) both",
        }}>
          <Icon name="check" size={32} color="white" strokeWidth={3}/>
        </div>
        <div style={{ fontSize: 13, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Session complete" : "Sesi selesai"}</div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, marginTop: 6, textAlign: "center", letterSpacing: -0.3 }}>
          {t === "en" ? "How was Maya?" : "Bagaimana sesi dengan Maya?"}
        </h2>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 18 }}>
          <Avatar name={partner.name} size={48} hue={partner.hue}/>
          <div>
            <div style={{ fontSize: 15, fontWeight: 700 }}>{partner.name}</div>
            <div style={{ fontSize: 12, color: "var(--lr-ink-3)" }}>{Math.floor(elapsed / 60) || duration} min · 142 {t === "en" ? "words" : "kata"}</div>
          </div>
        </div>

        {/* Stars */}
        <div style={{ display: "flex", gap: 8, marginTop: 28 }}>
          {[1,2,3,4,5].map(n => (
            <button key={n} onClick={() => setRating(n)} style={{
              background: "transparent", border: "none", padding: 4, cursor: "pointer",
              transform: rating >= n ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.2s var(--lr-ease)",
            }}>
              <Icon name={rating >= n ? "starF" : "star"} size={40} color={rating >= n ? "var(--lr-accent)" : "var(--lr-ink-3)"}/>
            </button>
          ))}
        </div>

        {/* Feedback tags */}
        <div style={{ marginTop: 28, width: "100%" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 10 }}>
            {t === "en" ? "What stood out?" : "Apa yang menonjol?"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {allTags.map(tag => {
              const on = tags.includes(tag);
              return (
                <button key={tag} onClick={() => setTags(on ? tags.filter(x => x !== tag) : [...tags, tag])} style={{
                  padding: "10px 14px", borderRadius: 999,
                  background: on ? "var(--lr-primary-600)" : "var(--lr-bg-elev)",
                  color: on ? "white" : "var(--lr-ink-2)",
                  border: `1.5px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                  fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                }}>{tag}</button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ padding: "24px 24px 40px", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="lg" style={{ flex: 1 }} onClick={() => onScreen("home")}>{t === "en" ? "Done" : "Selesai"}</Btn>
        <Btn variant="primary" size="lg" style={{ flex: 1.5 }} onClick={() => { setTab("match"); setElapsed(0); setRating(0); setTags([]); }}>{t === "en" ? "Find Another" : "Cari Partner Lain"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenConnect });
