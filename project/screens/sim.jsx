// LinguaRise — Career Simulation report (job interview)

const ScreenSimReport = ({ t, onScreen, plan }) => {
  const [tab, setTab] = React.useState("overview");
  const dims = [
    { l: t === "en" ? "Communication" : "Komunikasi", v: 84, c: "var(--lr-success)" },
    { l: "STAR Method", v: 72, c: "var(--lr-warn)" },
    { l: t === "en" ? "Confidence" : "Confidence", v: 88, c: "var(--lr-success)" },
    { l: t === "en" ? "Technical" : "Teknis", v: 79, c: "var(--lr-warn)" },
    { l: t === "en" ? "Body Language" : "Bahasa Tubuh", v: 65, c: "var(--lr-accent-2)" },
  ];
  const questions = [
    { q: t === "en" ? "Tell me about a time you led a difficult project." : "Ceritakan saat memimpin proyek yang sulit.", score: 78, status: "good" },
    { q: t === "en" ? "How do you handle disagreement with stakeholders?" : "Bagaimana mengatasi konflik dengan stakeholder?", score: 84, status: "good" },
    { q: t === "en" ? "Describe a time you failed and what you learned." : "Ceritakan kegagalan dan pelajarannya.", score: 62, status: "weak" },
    { q: t === "en" ? "Why do you want to work at our company?" : "Mengapa ingin bekerja di kami?", score: 91, status: "best" },
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("home")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18}/></button>}
        title={t === "en" ? "Career Report" : "Laporan Karier"}
        right={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="download" size={18}/></button>}
        transparent
      />
      {/* Hero */}
      <div style={{ padding: "8px var(--lr-pad-screen) 0" }}>
        <div style={{
          background: "linear-gradient(135deg, var(--lr-ink) 0%, var(--lr-primary-700) 100%)",
          borderRadius: "var(--lr-radius-lg)", padding: 22, color: "white", position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", top: -50, right: -50, width: 180, height: 180, borderRadius: "50%", background: "rgba(255,214,74,0.18)", filter: "blur(40px)" }}/>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase", opacity: 0.85, position: "relative" }}>
            <Icon name="badge" size={14} color="var(--lr-accent)"/> {t === "en" ? "Mock Interview · Senior PM" : "Mock Interview · Senior PM"}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 14, position: "relative" }}>
            <ScoreRing value={79} size={104} stroke={9} label={t === "en" ? "Readiness" : "Kesiapan"}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>
                {t === "en" ? "Almost interview-ready" : "Hampir siap interview"}
              </div>
              <div style={{ fontSize: 12, opacity: 0.85, marginTop: 6, lineHeight: 1.45 }}>
                {t === "en" ? "Strong on confidence & communication. Sharpen STAR responses." : "Confidence kuat. Asah kerangka jawaban STAR."}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: 14, paddingTop: 14, borderTop: "0.5px solid rgba(255,255,255,0.18)", position: "relative" }}>
            <div><div style={{ fontSize: 11, opacity: 0.7 }}>{t === "en" ? "Duration" : "Durasi"}</div><div style={{ fontSize: 14, fontWeight: 700 }}>17:42</div></div>
            <div><div style={{ fontSize: 11, opacity: 0.7 }}>{t === "en" ? "Questions" : "Pertanyaan"}</div><div style={{ fontSize: 14, fontWeight: 700 }}>8/8</div></div>
            <div><div style={{ fontSize: 11, opacity: 0.7 }}>{t === "en" ? "Words" : "Kata"}</div><div style={{ fontSize: 14, fontWeight: 700 }}>1,284</div></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", gap: 6 }}>
        {[
          { id: "overview", label: t === "en" ? "Overview" : "Ringkasan" },
          { id: "qs", label: t === "en" ? "Per Question" : "Per Soal" },
          { id: "tips", label: "Tips" },
        ].map(tt => (
          <button key={tt.id} onClick={() => setTab(tt.id)} style={{
            padding: "8px 14px", borderRadius: 999, fontSize: 13, fontWeight: 700,
            background: tab === tt.id ? "var(--lr-ink)" : "var(--lr-bg-elev)",
            color: tab === tt.id ? "white" : "var(--lr-ink-2)",
            border: "0.5px solid var(--lr-line)", cursor: "pointer", fontFamily: "inherit",
          }}>{tt.label}</button>
        ))}
      </div>

      {tab === "overview" && (
        <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
          <Card padding={16}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 12 }}>{t === "en" ? "Skill breakdown" : "Rincian skill"}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {dims.map(d => (
                <div key={d.l}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600 }}>{d.l}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, fontFamily: "var(--lr-font-display)", color: d.c }}>{d.v}</span>
                  </div>
                  <ProgressBar value={d.v} color={d.c} height={6}/>
                </div>
              ))}
            </div>
          </Card>
          <Card padding={16} style={{ marginTop: 12 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
              <Icon name="sparkle" size={18} color="var(--lr-primary-600)"/>
              <div style={{ fontSize: 13, fontWeight: 800 }}>{t === "en" ? "AI Coach insight" : "Insight Coach AI"}</div>
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--lr-ink-2)", textWrap: "pretty" }}>
              {t === "en"
                ? "You handled \"why our company\" beautifully — specific and personal. The failure question, however, jumped straight to learnings without setting context. Try: Situation → Task → Action → Result."
                : "Jawaban \"kenapa perusahaan kami\" sangat baik — spesifik & personal. Untuk soal kegagalan, langsung loncat ke pelajaran tanpa konteks. Coba: Situation → Task → Action → Result."}
            </div>
          </Card>
        </div>
      )}

      {tab === "qs" && (
        <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 10 }}>
          {questions.map((q, i) => (
            <Card key={i} padding={14}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: q.status === "best" ? "var(--lr-success)" : q.status === "weak" ? "var(--lr-accent-2)" : "var(--lr-primary-50)",
                  color: q.status === "good" ? "var(--lr-primary-700)" : "white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontFamily: "var(--lr-font-display)", fontSize: 14,
                }}>{q.score}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>Q{i+1}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4, marginTop: 2 }}>{q.q}</div>
                </div>
                <Icon name="play" size={14} color="var(--lr-ink-3)"/>
              </div>
            </Card>
          ))}
        </div>
      )}

      {tab === "tips" && (
        <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { t: t === "en" ? "Use the STAR framework" : "Gunakan kerangka STAR", d: t === "en" ? "Situation, Task, Action, Result. Practice with our STAR drill." : "Situation, Task, Action, Result. Latih lewat drill STAR.", icon: "target" },
            { t: t === "en" ? "Reduce \"um\" and \"uh\"" : "Kurangi \"um\" dan \"uh\"", d: t === "en" ? "You used 7 fillers. Pause silently instead." : "Kamu pakai 7 filler. Coba diam sebentar daripada filler.", icon: "waveform" },
            { t: t === "en" ? "Eye contact with camera" : "Kontak mata ke kamera", d: t === "en" ? "Look slightly above screen edge to mimic natural gaze." : "Pandang sedikit di atas layar untuk efek alami.", icon: "cam" },
          ].map((tip, i) => (
            <Card key={i} padding={14}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={tip.icon} size={20}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{tip.t}</div>
                  <div style={{ fontSize: 12, color: "var(--lr-ink-2)", marginTop: 3, lineHeight: 1.45 }}>{tip.d}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }} onClick={() => onScreen("home")}>{t === "en" ? "Done" : "Selesai"}</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1.5 }} trailing={<Icon name="arrowR" size={14}/>}>{t === "en" ? "Retry · Hard mode" : "Ulangi · Mode Sulit"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenSimReport });
