// LinguaRise — AI Speaking Analysis (record → processing → result)

const ScreenSpeaking = ({ t, onScreen }) => {
  const [phase, setPhase] = React.useState("setup"); // setup | record | processing | result
  const [recording, setRecording] = React.useState(false);
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    if (phase !== "record" || !recording) return;
    const id = setInterval(() => setElapsed(e => e + 0.1), 100);
    return () => clearInterval(id);
  }, [phase, recording]);

  React.useEffect(() => {
    if (phase !== "processing") return;
    const id = setTimeout(() => setPhase("result"), 2600);
    return () => clearTimeout(id);
  }, [phase]);

  if (phase === "setup") {
    return (
      <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
        <div style={{ paddingTop: 56 }}/>
        <TopBar
          left={<button onClick={() => onScreen("home")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
          title={t === "en" ? "Speaking Analysis" : "Analisis Speaking"}
          right={<Pill bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="sm"><Icon name="ai" size={11}/> AI</Pill>}
          transparent
        />
        <div style={{ flex: 1, padding: "12px var(--lr-pad-screen)" }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Choose mode" : "Pilih mode"}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
            {[
              { key: "free", title: t === "en" ? "Free Talk" : "Free Talk", sub: t === "en" ? "Open topic. AI scores delivery, fluency, accent." : "Topik bebas. AI menilai delivery & kefasihan.", icon: "mic" },
              { key: "topic", title: t === "en" ? "Topic-Based" : "Topik Terpandu", sub: t === "en" ? "Today: \"What does success mean to you?\"" : "Hari ini: \"Apa arti sukses bagimu?\"", icon: "target", featured: true },
              { key: "read", title: t === "en" ? "Read Aloud" : "Baca Lantang", sub: t === "en" ? "Pronunciation drill from curated passages" : "Latihan pelafalan dari teks pilihan", icon: "book" },
            ].map(m => (
              <Card key={m.key} padding={14} onClick={() => setPhase("record")} style={m.featured ? { border: "1.5px solid var(--lr-primary-600)", background: "var(--lr-primary-50)" } : {}}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: m.featured ? "var(--lr-primary-600)" : "var(--lr-primary-50)", color: m.featured ? "white" : "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={m.icon} size={22}/>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ fontSize: 15, fontWeight: 700 }}>{m.title}</div>
                      {m.featured && <Pill size="sm" bg="var(--lr-accent)" color="var(--lr-ink)">{t === "en" ? "Today" : "Hari ini"}</Pill>}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 2, lineHeight: 1.4 }}>{m.sub}</div>
                  </div>
                  <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.3, textTransform: "uppercase", marginTop: 24 }}>{t === "en" ? "Last result" : "Hasil terakhir"}</div>
          <Card padding={14} style={{ marginTop: 10 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <ScoreRing value={78} size={56} stroke={6}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>{t === "en" ? "Free Talk · Yesterday" : "Free Talk · Kemarin"}</div>
                <div style={{ fontSize: 11, color: "var(--lr-ink-3)", marginTop: 2 }}>{t === "en" ? "Pronunciation needs work · 4 filler words" : "Pelafalan perlu ditingkatkan · 4 filler"}</div>
              </div>
              <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>
            </div>
          </Card>
        </div>
      </Screen>
    );
  }

  if (phase === "record") {
    const min = Math.floor(elapsed / 60);
    const sec = (elapsed % 60).toFixed(1);
    return (
      <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at top, rgba(107,63,160,0.4), transparent 60%)" }}/>
        <div style={{ paddingTop: 60, padding: "60px 20px 0", position: "relative" }}>
          <button onClick={() => setPhase("setup")} style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.1)", border: "none", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(20px)" }}>
            <Icon name="chevL" size={18} color="white"/>
          </button>
        </div>
        <div style={{ position: "relative", padding: "32px 24px 0", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-accent)", letterSpacing: 0.5, textTransform: "uppercase" }}>{t === "en" ? "Topic" : "Topik"}</div>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 24, fontWeight: 600, marginTop: 8, letterSpacing: -0.3, lineHeight: 1.3 }}>
            {t === "en" ? "What does success mean to you?" : "Apa arti sukses bagimu?"}
          </div>
          <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8, lineHeight: 1.5 }}>
            {t === "en" ? "Speak for 60–120 seconds in English." : "Bicara 60–120 detik dalam Bahasa Inggris."}
          </div>
        </div>
        <div style={{ flex: 1, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
          {/* Pulsing rings */}
          <div style={{ position: "relative", width: 220, height: 220, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {recording && [0, 1, 2].map(i => (
              <div key={i} style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "1.5px solid var(--lr-primary-200)",
                animation: `pingRing 2.4s ease-out ${i * 0.8}s infinite`,
                opacity: 0,
              }}/>
            ))}
            <button onClick={() => setRecording(r => !r)} style={{
              width: 160, height: 160, borderRadius: "50%", border: "none",
              background: recording ? "var(--lr-accent-2)" : "var(--lr-primary-600)",
              color: "white", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 12px 40px rgba(107,63,160,0.6)", cursor: "pointer", position: "relative", zIndex: 1,
            }}>
              <Icon name={recording ? "pause" : "mic"} size={56} color="white"/>
            </button>
          </div>
          <div style={{ fontFamily: "var(--lr-font-mono)", fontSize: 36, fontWeight: 700, letterSpacing: 1 }}>
            {String(min).padStart(2, "0")}:{String(sec).padStart(4, "0")}
          </div>
          {/* Live waveform */}
          <div style={{ display: "flex", gap: 3, alignItems: "center", height: 56 }}>
            {[...Array(40)].map((_, i) => (
              <div key={i} style={{
                width: 3, background: recording ? "var(--lr-primary-200)" : "rgba(255,255,255,0.2)", borderRadius: 2,
                height: recording ? `${20 + Math.abs(Math.sin(elapsed * 8 + i * 0.4)) * 36 + Math.random() * 12}px` : "8px",
                transition: "height 0.1s",
              }}/>
            ))}
          </div>
          {recording && (
            <div style={{ fontSize: 12, color: "var(--lr-accent)", display: "flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lr-accent-2)", animation: "pulse 1.2s infinite" }}/>
              {t === "en" ? "Recording" : "Merekam"}
            </div>
          )}
        </div>
        <div style={{ padding: "0 24px 40px", position: "relative" }}>
          <Btn variant="accent" full size="lg" onClick={() => setPhase("processing")} disabled={elapsed < 2}>
            {t === "en" ? "Submit for analysis" : "Analisis Sekarang"}
          </Btn>
        </div>
        <style>{`
          @keyframes pingRing { 0% { transform: scale(0.7); opacity: 0.6 } 100% { transform: scale(1.4); opacity: 0 } }
          @keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.3 } }
        `}</style>
      </Screen>
    );
  }

  if (phase === "processing") {
    return (
      <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 28 }}>
        <div style={{ position: "relative", width: 160, height: 160 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: "absolute", inset: i * 16, borderRadius: "50%",
              border: `2px solid var(--lr-primary-${[200, 400, 600][i]})`,
              borderRightColor: "transparent",
              animation: `spinAI ${2.4 - i * 0.4}s linear infinite ${i % 2 ? "reverse" : ""}`,
            }}/>
          ))}
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="ai" size={48} color="var(--lr-accent)"/>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>{t === "en" ? "Analyzing your speech…" : "Menganalisis suaramu…"}</div>
          <div style={{ fontSize: 13, opacity: 0.7, marginTop: 8 }}>{t === "en" ? "Phonetics · Fluency · Confidence" : "Pelafalan · Fluency · Confidence"}</div>
        </div>
        <style>{`@keyframes spinAI { to { transform: rotate(360deg) } }`}</style>
      </Screen>
    );
  }

  // Result
  const transcript = [
    { w: "I", t: "ok" }, { w: "think", t: "ok" }, { w: "succuess", t: "err", note: "success" },
    { w: "is", t: "ok" }, { w: "about", t: "ok" }, { w: "uh,", t: "filler" }, { w: "doing", t: "ok" },
    { w: "what", t: "ok" }, { w: "you", t: "ok" }, { w: "love", t: "ok" }, { w: "every", t: "imp" },
    { w: "single", t: "ok" }, { w: "day", t: "ok" }, { w: ",", t: "ok" }, { w: "and", t: "ok" },
    { w: "um,", t: "filler" }, { w: "growing", t: "ok" }, { w: "with", t: "ok" }, { w: "perpouse", t: "err", note: "purpose" }, { w: ".", t: "ok" },
  ];
  const colors = { ok: "var(--lr-ink)", err: "var(--lr-accent-2)", filler: "var(--lr-warn)", imp: "var(--lr-primary-600)" };

  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => setPhase("setup")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18}/></button>}
        title={t === "en" ? "Result" : "Hasil"}
        right={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="share" size={18}/></button>}
        transparent
      />
      <div style={{ padding: "8px var(--lr-pad-screen) 0" }}>
        <Card padding={20}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <ScoreRing value={82} size={108} stroke={10} label="Overall"/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.3, textTransform: "uppercase" }}>+5 {t === "en" ? "from last" : "dari sesi terakhir"}</div>
              <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, lineHeight: 1.2, marginTop: 4 }}>
                {t === "en" ? "Strong & confident" : "Kuat & percaya diri"}
              </div>
              <div style={{ fontSize: 12, color: "var(--lr-ink-2)", marginTop: 6, lineHeight: 1.4 }}>
                {t === "en" ? "Watch 2 mispronunciations and reduce filler words." : "Perbaiki 2 pelafalan & kurangi filler."}
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginTop: 18 }}>
            {[
              { l: "Pron.", v: 76, c: "var(--lr-warn)" },
              { l: "Fluency", v: 88, c: "var(--lr-success)" },
              { l: "Vocab", v: 72, c: "var(--lr-warn)" },
              { l: "Confid.", v: 91, c: "var(--lr-success)" },
            ].map(m => (
              <div key={m.l} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, color: m.c, letterSpacing: -0.4 }}>{m.v}</div>
                <div style={{ fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Transcript with highlights */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Transcript" : "Transkrip"}</div>
          <div style={{ display: "flex", gap: 10, fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)" }}>
            <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--lr-accent-2)", marginRight: 4 }}/>{t === "en" ? "Error" : "Salah"}</span>
            <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--lr-warn)", marginRight: 4 }}/>Filler</span>
            <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--lr-primary-600)", marginRight: 4 }}/>{t === "en" ? "Improve" : "Perbaiki"}</span>
          </div>
        </div>
        <Card padding={16}>
          <div style={{ fontSize: 16, lineHeight: 1.7, fontFamily: "var(--lr-font-display)" }}>
            {transcript.map((seg, i) => (
              <span key={i} style={{
                color: colors[seg.t], fontWeight: seg.t === "ok" ? 400 : 600,
                textDecoration: seg.t === "err" ? "line-through" : "none",
                marginRight: 4, position: "relative",
                background: seg.t === "filler" ? "rgba(245,166,35,0.1)" : seg.t === "imp" ? "rgba(107,63,160,0.1)" : "transparent",
                padding: seg.t !== "ok" ? "1px 4px" : "0", borderRadius: 4,
              }}>
                {seg.w}
                {seg.note && <sup style={{ color: "var(--lr-success)", fontSize: 10, fontWeight: 700, marginLeft: 2 }}>→{seg.note}</sup>}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: "0.5px dashed var(--lr-line-strong)", display: "flex", justifyContent: "space-around", fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700 }}>
            <span>112 WPM</span><span>·</span><span>2 {t === "en" ? "fillers" : "filler"}</span><span>·</span><span>2 {t === "en" ? "errors" : "error"}</span>
          </div>
        </Card>
      </div>

      {/* Actions */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }}>{t === "en" ? "Practice again" : "Latih lagi"}</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1 }} onClick={() => onScreen("score")} trailing={<Icon name="arrowR" size={14}/>}>{t === "en" ? "View LinguaScore" : "Lihat Skor"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenSpeaking });
