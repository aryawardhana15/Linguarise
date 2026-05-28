// LinguaRise — AI Learn hub + Listening, Writing, Reading modules

const ScreenAILearn = ({ t, onScreen }) => {
  const modules = [
    { id: "ai", icon: "mic", title: t === "en" ? "Speaking Analysis" : "Speaking Analysis", desc: t === "en" ? "Free talk · Topic · Read aloud" : "Free talk · Topik · Read aloud", color: "var(--lr-primary-600)", bg: "var(--lr-primary-50)", score: 82 },
    { id: "listening", icon: "headset", title: t === "en" ? "Listening" : "Listening", desc: t === "en" ? "Lectures · News · Accents" : "Lectures · News · Accents", color: "#3D8C63", bg: "rgba(61,140,99,0.12)", score: 76 },
    { id: "writing", icon: "book", title: t === "en" ? "Writing Correction" : "Writing", desc: t === "en" ? "Essay · Email · Grammar" : "Essay · Email · Grammar", color: "#D97757", bg: "rgba(217,119,87,0.12)", score: 74 },
    { id: "reading", icon: "flag", title: t === "en" ? "Reading" : "Reading", desc: t === "en" ? "Articles · Vocab · Quiz" : "Artikel · Vocab · Quiz", color: "#3F4FA0", bg: "rgba(63,79,160,0.12)", score: 80 },
  ];
  return (
    <Screen padBottom={104}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar title="AI Learn" right={<Pill bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="sm"><Icon name="ai" size={11}/> 24/7</Pill>} transparent/>
      <div style={{ padding: "8px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Today's quota" : "Kuota hari ini"}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 4 }}>
          <span style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>3</span>
          <span style={{ fontSize: 13, color: "var(--lr-ink-3)" }}>/ 5 {t === "en" ? "free sessions left" : "sesi gratis tersisa"}</span>
        </div>
        <div style={{ marginTop: 8 }}><ProgressBar value={60} height={5}/></div>
      </div>
      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {modules.map(m => (
          <Card key={m.id} padding={16} onClick={() => onScreen(m.id)} style={{ minHeight: 168, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: m.bg, color: m.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={m.icon} size={22}/>
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 12, lineHeight: 1.3 }}>{m.title}</div>
              <div style={{ fontSize: 11, color: "var(--lr-ink-3)", marginTop: 4, lineHeight: 1.4 }}>{m.desc}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3 }}>Score</span>
              <span style={{ fontFamily: "var(--lr-font-display)", fontSize: 20, fontWeight: 600, color: m.color }}>{m.score}</span>
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
};

const ScreenListening = ({ t, onScreen }) => {
  const items = [
    { title: "TED — Power of Vulnerability", cefr: "B2", dur: "8 min", cat: t === "en" ? "Lecture" : "Lecture", playing: true },
    { title: "BBC News — Climate Summit", cefr: "C1", dur: "5 min", cat: "News" },
    { title: "How I Built This — Airbnb", cefr: "B2", dur: "12 min", cat: "Podcast" },
    { title: "Casual Café Talk · UK accent", cefr: "B1", dur: "6 min", cat: t === "en" ? "Conversation" : "Conversation" },
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => onScreen("ai")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title={t === "en" ? "Listening" : "Listening"} transparent/>
      <div style={{ padding: "0 var(--lr-pad-screen)", display: "flex", gap: 6, overflowX: "auto" }}>
        {[t === "en" ? "All" : "Semua", "Lecture", "News", "Podcast", t === "en" ? "Conversation" : "Conversation", "Accents"].map((c, i) => (
          <button key={c} style={{
            padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
            background: i === 0 ? "var(--lr-ink)" : "var(--lr-bg-elev)", color: i === 0 ? "white" : "var(--lr-ink-2)",
            border: "0.5px solid var(--lr-line)", cursor: "pointer", fontFamily: "inherit",
          }}>{c}</button>
        ))}
      </div>

      {/* Active player */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <Card padding={18} style={{ background: "linear-gradient(135deg, var(--lr-ink), var(--lr-primary-700))", color: "white", border: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 56, height: 56, borderRadius: 14, background: "var(--lr-accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--lr-ink)" }}>
              <Icon name="play" size={26} color="var(--lr-ink)"/>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Now playing" : "Sedang diputar"}</div>
              <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2, lineHeight: 1.3 }}>The Power of Vulnerability</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4 }}>Brené Brown · TED</div>
            </div>
          </div>
          <div style={{ marginTop: 14 }}>
            <div style={{ height: 4, background: "rgba(255,255,255,0.2)", borderRadius: 2, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, width: "42%", background: "var(--lr-accent)", borderRadius: 2 }}/>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 11, fontFamily: "var(--lr-font-mono)", opacity: 0.85 }}>
              <span>03:21</span>
              <span>−4:39</span>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
            <button style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 999, color: "white", padding: "5px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>1.0×</button>
            <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
              <Icon name="chevL" size={20} color="white"/>
              <Icon name="pause" size={26} color="var(--lr-accent)"/>
              <Icon name="chevR" size={20} color="white"/>
            </div>
            <button style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 999, color: "white", padding: "5px 10px", fontSize: 11, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 4 }}>
              <Icon name="book" size={12} color="white"/> Tx
            </button>
          </div>
        </Card>
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 10 }}>{t === "en" ? "Library" : "Pustaka"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {items.slice(1).map(it => (
            <Card key={it.title} padding={14}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="play" size={18}/>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4, fontSize: 11, color: "var(--lr-ink-3)" }}>
                    <CEFRBadge level={it.cefr} size="sm"/>
                    <span>· {it.cat}</span>
                    <span>· {it.dur}</span>
                  </div>
                </div>
                <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Screen>
  );
};

const ScreenWriting = ({ t, onScreen }) => {
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("ai")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title={t === "en" ? "Writing Review" : "Writing Review"}
        right={<Pill bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="sm">142 {t === "en" ? "words" : "kata"}</Pill>}
        transparent
      />
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Essay prompt" : "Soal essay"}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--lr-ink)", marginTop: 4, lineHeight: 1.5 }}>
          {t === "en" ? "Discuss whether technology has improved or harmed modern communication." : "Apakah teknologi memperbaiki atau merusak komunikasi modern?"}
        </div>
      </div>

      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <Card padding={16}>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--lr-ink)", fontFamily: "var(--lr-font-display)" }}>
            <span>Technology has dramatically </span>
            <span style={{ background: "rgba(229,72,77,0.12)", textDecoration: "underline wavy var(--lr-accent-2)", textUnderlineOffset: 4, padding: "1px 2px", borderRadius: 3 }}>changing</span>
            <sup style={{ fontSize: 9, fontWeight: 800, color: "var(--lr-accent-2)" }}> g</sup>
            <span> the way </span>
            <span style={{ background: "rgba(63,79,160,0.1)", padding: "1px 2px", borderRadius: 3 }}>peoples</span>
            <sup style={{ fontSize: 9, fontWeight: 800, color: "#3F4FA0" }}> s</sup>
            <span> communicate. On one hand, </span>
            <span style={{ background: "rgba(61,186,140,0.12)", padding: "1px 2px", borderRadius: 3, fontWeight: 600 }}>instantaneous</span>
            <sup style={{ fontSize: 9, fontWeight: 800, color: "var(--lr-success)" }}> v+</sup>
            <span> messaging </span>
            <span style={{ background: "rgba(229,72,77,0.12)", textDecoration: "underline wavy var(--lr-accent-2)", textUnderlineOffset: 4, padding: "1px 2px", borderRadius: 3 }}>have</span>
            <sup style={{ fontSize: 9, fontWeight: 800, color: "var(--lr-accent-2)" }}> g</sup>
            <span> connected families across continents. However, deep, meaningful conversations have been </span>
            <span style={{ background: "rgba(63,79,160,0.1)", padding: "1px 2px", borderRadius: 3 }}>made shorter</span>
            <sup style={{ fontSize: 9, fontWeight: 800, color: "#3F4FA0" }}> st</sup>
            <span> and increasingly transactional…</span>
          </div>
        </Card>
      </div>

      {/* Score grid */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {[
          { l: "Grammar", v: 76, c: "var(--lr-accent-2)" },
          { l: "Style", v: 84, c: "#3F4FA0" },
          { l: "Vocab", v: 88, c: "var(--lr-success)" },
          { l: t === "en" ? "Coher." : "Koher.", v: 81, c: "var(--lr-success)" },
        ].map(s => (
          <Card key={s.l} padding={10} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, color: s.c, letterSpacing: -0.4 }}>{s.v}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3 }}>{s.l}</div>
          </Card>
        ))}
      </div>

      {/* Suggestions list */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "Suggestions" : "Saran"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { type: "g", l: t === "en" ? "Subject-verb agreement" : "Konsistensi subjek-kata kerja", from: "have", to: "has", color: "var(--lr-accent-2)" },
            { type: "g", l: "Tense", from: "changing", to: "changed", color: "var(--lr-accent-2)" },
            { type: "s", l: t === "en" ? "Plural form" : "Bentuk jamak", from: "peoples", to: "people", color: "#3F4FA0" },
            { type: "v+", l: t === "en" ? "Strong vocab" : "Vocab kuat", note: "instantaneous", color: "var(--lr-success)" },
          ].map((s, i) => (
            <Card key={i} padding={14}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: s.color, color: "white", fontWeight: 800, fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.type}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700 }}>{s.l}</div>
                  {s.from && <div style={{ fontSize: 11, color: "var(--lr-ink-2)", marginTop: 2 }}><span style={{ textDecoration: "line-through", color: "var(--lr-accent-2)" }}>{s.from}</span> → <b style={{ color: "var(--lr-success)" }}>{s.to}</b></div>}
                  {s.note && <div style={{ fontSize: 11, color: "var(--lr-ink-2)", marginTop: 2, fontStyle: "italic" }}>"{s.note}" · {t === "en" ? "great choice" : "pilihan bagus"}</div>}
                </div>
                {s.from && <Btn variant="soft" size="sm">Apply</Btn>}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }}>{t === "en" ? "Edit manually" : "Edit manual"}</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1.4 }} trailing={<Icon name="check" size={16}/>}>{t === "en" ? "Apply all" : "Terapkan semua"}</Btn>
      </div>
    </Screen>
  );
};

const ScreenReading = ({ t, onScreen }) => {
  const [popOpen, setPopOpen] = React.useState(true);
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("ai")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="Reading"
        right={<Pill bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="sm">68% read</Pill>}
        transparent
      />
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <CEFRBadge level="B2"/>
          <span style={{ fontSize: 12, color: "var(--lr-ink-3)" }}>· {t === "en" ? "Article" : "Artikel"} · 6 min</span>
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, margin: "8px 0", letterSpacing: -0.4, lineHeight: 1.2 }}>
          The Quiet Power of Listening
        </h2>
      </div>

      <div style={{ padding: "8px var(--lr-pad-screen) 0", position: "relative" }}>
        <Card padding={18}>
          <div style={{ fontSize: 16, lineHeight: 1.75, color: "var(--lr-ink)", fontFamily: "var(--lr-font-display)" }}>
            <span>In a world that rewards speaking up, the </span>
            <span onClick={() => setPopOpen(true)} style={{ background: "rgba(255,214,74,0.35)", padding: "1px 4px", borderRadius: 4, cursor: "pointer", fontWeight: 600 }}>ubiquity</span>
            <span> of noise has made true listeners rare and valuable. The most </span>
            <span style={{ borderBottom: "2px dashed var(--lr-primary-400)", cursor: "pointer" }}>persuasive</span>
            <span> people in any room are often the ones speaking the least — they ask, observe, then deliver one </span>
            <span style={{ borderBottom: "2px dashed var(--lr-primary-400)", cursor: "pointer" }}>incisive</span>
            <span> sentence that shifts the entire conversation…</span>
          </div>
        </Card>
        {popOpen && (
          <div style={{
            position: "absolute", left: 32, right: 32, top: 92,
            background: "var(--lr-ink)", color: "white", padding: 14, borderRadius: 14,
            boxShadow: "var(--lr-shadow-lg)", border: "0.5px solid rgba(255,255,255,0.15)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontFamily: "var(--lr-font-display)", fontSize: 18, fontWeight: 600 }}>ubiquity</span>
              <span style={{ fontSize: 11, opacity: 0.7, fontFamily: "var(--lr-font-mono)" }}>/juːˈbɪkwəti/</span>
              <button style={{ marginLeft: "auto", background: "rgba(255,255,255,0.1)", border: "none", color: "white", borderRadius: 8, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => setPopOpen(false)}>
                <Icon name="close" size={14} color="white"/>
              </button>
            </div>
            <div style={{ fontSize: 12, marginTop: 6, opacity: 0.9, lineHeight: 1.5 }}>
              {t === "en" ? "noun · the fact of being everywhere or seeming to be everywhere at once." : "kt benda · sifat ada di mana-mana sekaligus."}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <Btn variant="accent" size="sm" leading={<Icon name="plus" size={12} color="var(--lr-ink)"/>}>{t === "en" ? "Save" : "Simpan"}</Btn>
              <Btn variant="ghost" size="sm" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }} leading={<Icon name="play" size={12} color="white"/>}>{t === "en" ? "Pronounce" : "Lafal"}</Btn>
            </div>
            {/* Tail */}
            <div style={{ position: "absolute", top: -6, left: 60, width: 12, height: 12, background: "var(--lr-ink)", transform: "rotate(45deg)" }}/>
          </div>
        )}
      </div>

      {/* Vocabulary collected */}
      <div style={{ padding: "20px var(--lr-pad-screen) 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Saved this session" : "Disimpan sesi ini"}</div>
          <span style={{ fontSize: 11, color: "var(--lr-primary-600)", fontWeight: 700 }}>{t === "en" ? "View all" : "Lihat semua"}</span>
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["ubiquity", "incisive", "persuasive", "rare", "shift"].map(w => (
            <Pill key={w} bg="var(--lr-bg-elev)" color="var(--lr-ink)" size="md" style={{ border: "0.5px solid var(--lr-line)" }}>{w}</Pill>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }} leading={<Icon name="book" size={16}/>}>{t === "en" ? "Flashcards" : "Flashcards"}</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1.5 }} trailing={<Icon name="arrowR" size={16}/>}>{t === "en" ? "Take quiz" : "Mulai kuis"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenAILearn, ScreenListening, ScreenWriting, ScreenReading });
