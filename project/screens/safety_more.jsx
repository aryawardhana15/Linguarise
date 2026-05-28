// LinguaRise — SafeTalk modal + Parental Consent + Payment Success + Vocab Book + Co-Reading + Sim Setup/Briefing

const ScreenSafeTalk = ({ t, onScreen }) => {
  const [step, setStep] = React.useState(0); // 0=report, 1=submitted
  const [reason, setReason] = React.useState(null);
  const reasons = [
    { id: "harass", l: t === "en" ? "Harassment / Bullying" : "Pelecehan / Bullying", ic: "shield" },
    { id: "inappro", l: t === "en" ? "Inappropriate content" : "Konten tidak pantas", ic: "flag" },
    { id: "spam", l: "Spam / Promotion", ic: "close" },
    { id: "underage", l: t === "en" ? "Underage user (<13)" : "Pengguna di bawah umur", ic: "lock" },
    { id: "fake", l: t === "en" ? "Fake profile" : "Profil palsu", ic: "profile" },
    { id: "other", l: t === "en" ? "Something else" : "Lainnya", ic: "plus" },
  ];

  if (step === 1) {
    return (
      <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px" }}>
        <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--lr-success)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 60px rgba(61,186,140,0.4)" }}>
          <Icon name="check" size={56} color="white" strokeWidth={3}/>
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, marginTop: 28, textAlign: "center", letterSpacing: -0.4 }}>{t === "en" ? "Report submitted" : "Laporan terkirim"}</h2>
        <div style={{ fontSize: 14, opacity: 0.85, marginTop: 12, textAlign: "center", lineHeight: 1.5 }}>
          {t === "en" ? "Our Trust & Safety team will review within 12 hours. You're now safe — the user has been blocked from contacting you again." : "Tim Trust & Safety akan meninjau dalam 12 jam. Kamu aman — pengguna sudah diblokir."}
        </div>
        <Card padding={14} style={{ marginTop: 28, width: "100%", background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.1)", color: "white" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="shield" size={18} color="var(--lr-accent)"/>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>{t === "en" ? "Ticket #LR-8821 · Resources & helpline available 24/7." : "Tiket #LR-8821 · Resources & hotline 24/7."}</div>
          </div>
        </Card>
        <Btn variant="accent" size="lg" full style={{ marginTop: 28 }} onClick={() => onScreen("home")}>{t === "en" ? "Back to Home" : "Kembali ke Home"}</Btn>
        <Btn variant="ghost" size="md" full style={{ marginTop: 10, borderColor: "rgba(255,255,255,0.2)", color: "white" }}>{t === "en" ? "Talk to a counselor" : "Bicara ke konselor"}</Btn>
      </Screen>
    );
  }

  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("connect")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18}/></button>}
        title={t === "en" ? "Report user" : "Laporkan pengguna"}
        right={<Pill bg="rgba(229,72,77,0.12)" color="var(--lr-danger)" size="sm"><Icon name="shield" size={11}/> SafeTalk</Pill>}
        transparent
      />
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen) 0" }}>
        <Card padding={14} style={{ background: "rgba(229,72,77,0.06)", border: "0.5px solid rgba(229,72,77,0.2)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Avatar name="User Anon" size={40} hue={220}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{t === "en" ? "About this session" : "Tentang sesi ini"}</div>
              <div style={{ fontSize: 11, color: "var(--lr-ink-3)" }}>Maya C. · 12 min · {t === "en" ? "Today" : "Hari ini"}</div>
            </div>
          </div>
        </Card>

        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, margin: "20px 0 10px" }}>{t === "en" ? "What happened?" : "Apa yang terjadi?"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {reasons.map(r => {
            const on = reason === r.id;
            return (
              <button key={r.id} onClick={() => setReason(r.id)} style={{
                display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12,
                border: `1.5px solid ${on ? "var(--lr-danger)" : "var(--lr-line)"}`,
                background: on ? "rgba(229,72,77,0.06)" : "var(--lr-bg-elev)", cursor: "pointer", fontFamily: "inherit", textAlign: "left",
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: on ? "var(--lr-danger)" : "rgba(229,72,77,0.1)", color: on ? "white" : "var(--lr-danger)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={r.ic} size={16}/>
                </div>
                <div style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>{r.l}</div>
                {on && <Icon name="check" size={18} color="var(--lr-danger)" strokeWidth={2.5}/>}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 18 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 8 }}>{t === "en" ? "Add details (optional)" : "Detail (opsional)"}</div>
          <Card padding={14} style={{ minHeight: 90 }}>
            <div style={{ fontSize: 13, color: "var(--lr-ink-3)", lineHeight: 1.5, fontStyle: "italic" }}>
              {t === "en" ? "Describe what happened. We auto-attach the last 30s of recording for review." : "Jelaskan kejadiannya. Sistem akan menyertakan 30 detik terakhir rekaman."}
            </div>
          </Card>
        </div>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 32px", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="lg" style={{ flex: 1 }} onClick={() => onScreen("connect")}>Cancel</Btn>
        <Btn size="lg" style={{ flex: 1.4, background: "var(--lr-danger)", boxShadow: "0 8px 20px rgba(229,72,77,0.4)" }} disabled={!reason} onClick={() => setStep(1)}>{t === "en" ? "Submit & block" : "Kirim & blokir"}</Btn>
      </div>
    </Screen>
  );
};

const ScreenParental = ({ t, onScreen }) => {
  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar transparent/>
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen)" }}>
        <div style={{ width: 72, height: 72, borderRadius: 18, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center", margin: "8px auto 16px" }}>
          <Icon name="shield" size={36}/>
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 24, fontWeight: 600, margin: 0, letterSpacing: -0.4, textAlign: "center", lineHeight: 1.2 }}>{t === "en" ? "Parental consent" : "Persetujuan Orang Tua"}</h2>
        <div style={{ fontSize: 13, color: "var(--lr-ink-2)", marginTop: 8, textAlign: "center", lineHeight: 1.6, padding: "0 8px" }}>
          {t === "en"
            ? "Aulia (15) has requested LinguaRise. As a guardian, please review and approve."
            : "Aulia (15 thn) ingin menggunakan LinguaRise. Sebagai wali, silakan tinjau & setujui."}
        </div>

        <Card padding={16} style={{ marginTop: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--lr-ink-2)", marginBottom: 12 }}>{t === "en" ? "What we collect" : "Yang kami kumpulkan"}</div>
          {[
            { ic: "mic", l: t === "en" ? "Voice recordings (analyzed by AI, deleted after 90 days)" : "Rekaman suara (dianalisis AI, dihapus 90 hari)" },
            { ic: "cam", l: t === "en" ? "No video recordings stored" : "Video tidak disimpan" },
            { ic: "connect", l: t === "en" ? "Practice partners are auto-screened, never adults" : "Partner latih disaring otomatis, bukan dewasa" },
            { ic: "shield", l: t === "en" ? "All sessions monitored by Trust & Safety AI" : "Semua sesi dipantau AI Trust & Safety" },
          ].map((p, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderTop: i ? "0.5px solid var(--lr-line)" : "none" }}>
              <Icon name={p.ic} size={18} color="var(--lr-primary-600)"/>
              <div style={{ fontSize: 12, color: "var(--lr-ink-2)", lineHeight: 1.4 }}>{p.l}</div>
            </div>
          ))}
        </Card>

        <Card padding={14} style={{ marginTop: 12, background: "var(--lr-primary-50)", border: "none" }}>
          <div style={{ fontSize: 12, color: "var(--lr-primary-700)", fontWeight: 600, lineHeight: 1.5 }}>
            {t === "en"
              ? "I confirm I am Aulia's parent or legal guardian and agree to LinguaRise's Privacy Policy."
              : "Saya konfirmasi sebagai orang tua/wali Aulia dan menyetujui Kebijakan Privasi LinguaRise."}
          </div>
        </Card>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 32px", display: "flex", flexDirection: "column", gap: 8 }}>
        <Btn full size="lg" onClick={() => onScreen("home")}>{t === "en" ? "I approve" : "Saya setujui"}</Btn>
        <Btn full size="md" variant="ghost">{t === "en" ? "I need more info" : "Butuh info lebih"}</Btn>
      </div>
    </Screen>
  );
};

const ScreenPaymentSuccess = ({ t, onScreen, onPlan }) => {
  React.useEffect(() => {
    const id = setTimeout(() => {}, 0);
    return () => clearTimeout(id);
  }, []);
  return (
    <Screen padBottom={0} style={{
      minHeight: 874, display: "flex", flexDirection: "column",
      background: "linear-gradient(180deg, var(--lr-primary-600) 0%, var(--lr-primary-700) 60%, var(--lr-bg-deep) 100%)",
      color: "white", overflow: "hidden", position: "relative",
    }}>
      {/* Confetti */}
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} style={{
          position: "absolute", top: -20, left: `${(i * 17) % 100}%`,
          width: 8, height: 12, borderRadius: 2,
          background: ["var(--lr-accent)", "var(--lr-primary-200)", "var(--lr-accent-2)", "white"][i % 4],
          animation: `confettiFall ${2.5 + (i % 5) * 0.4}s ${(i % 7) * 0.18}s ease-out forwards`,
          transform: `rotate(${i * 23}deg)`,
        }}/>
      ))}
      <div style={{ paddingTop: 56 }}/>
      <div style={{ padding: "0 24px", display: "flex", justifyContent: "flex-end" }}>
        <button onClick={() => { onPlan && onPlan("pro"); onScreen("home"); }} style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,255,255,0.15)", border: "none", color: "white", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(20px)" }}>
          <Icon name="close" size={18} color="white"/>
        </button>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center", position: "relative", zIndex: 2 }}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", background: "var(--lr-accent)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 60px rgba(255,214,74,0.4)", animation: "popIn 0.6s var(--lr-ease) both" }}>
          <Icon name="crown" size={64} color="var(--lr-ink)" strokeWidth={2.4}/>
        </div>
        <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: 1.5, opacity: 0.85, marginTop: 28, textTransform: "uppercase" }}>{t === "en" ? "Welcome to" : "Selamat datang di"}</div>
        <h1 style={{ fontFamily: "var(--lr-font-display)", fontSize: 56, fontWeight: 600, margin: "8px 0", letterSpacing: -2, lineHeight: 1 }}>linguarise <span style={{ color: "var(--lr-accent)" }}>Pro</span></h1>
        <div style={{ fontSize: 15, opacity: 0.9, lineHeight: 1.5, maxWidth: 320 }}>
          {t === "en" ? "All AI features unlocked. 2 free ProSpeak sessions added to your account." : "Semua fitur AI dibuka. 2 sesi ProSpeak gratis ditambahkan."}
        </div>

        <Card padding={14} style={{ marginTop: 28, width: "100%", background: "rgba(255,255,255,0.12)", border: "0.5px solid rgba(255,255,255,0.18)", color: "white", backdropFilter: "blur(20px)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Receipt" : "Struk"}</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2 }}>Pro Plan · Yearly</div>
              <div style={{ fontSize: 11, opacity: 0.7, marginTop: 2, fontFamily: "var(--lr-font-mono)" }}>#LR-INV-2026-0428</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>Rp 1.788K</div>
              <div style={{ fontSize: 10, opacity: 0.7 }}>{t === "en" ? "Renews 28 Apr 2027" : "Perpanjang 28 Apr 2027"}</div>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ padding: "16px 24px 40px", position: "relative", zIndex: 2 }}>
        <Btn variant="accent" full size="lg" onClick={() => { onPlan && onPlan("pro"); onScreen("home"); }} trailing={<Icon name="arrowR" size={16} color="var(--lr-ink)"/>}>{t === "en" ? "Start exploring Pro" : "Mulai jelajahi Pro"}</Btn>
        <Btn variant="ghost" full size="md" style={{ marginTop: 8, borderColor: "rgba(255,255,255,0.25)", color: "white" }}>{t === "en" ? "Email me the receipt" : "Email-kan struk"}</Btn>
      </div>
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1 }
          100% { transform: translateY(900px) rotate(720deg); opacity: 0 }
        }
        @keyframes popIn { 0% { transform: scale(0); } 60% { transform: scale(1.2); } 100% { transform: scale(1); } }
      `}</style>
    </Screen>
  );
};

const ScreenVocab = ({ t, onScreen }) => {
  const tabs = [
    { id: "all", l: t === "en" ? "All" : "Semua", n: 142 },
    { id: "due", l: t === "en" ? "Due" : "Review", n: 18 },
    { id: "mastered", l: "Mastered", n: 56 },
  ];
  const [tab, setTab] = React.useState("all");
  const words = [
    { w: "ubiquity", pos: "n.", id: t === "en" ? "the state of being everywhere" : "ada di mana-mana", lvl: 3, src: "Reading", date: t === "en" ? "Today" : "Hari ini" },
    { w: "incisive", pos: "adj.", id: t === "en" ? "sharp, accurate" : "tajam, akurat", lvl: 2, src: "Reading", date: t === "en" ? "Today" : "Hari ini" },
    { w: "meticulous", pos: "adj.", id: t === "en" ? "very careful and precise" : "sangat teliti", lvl: 4, src: "Placement", date: "12 Apr" },
    { w: "ambiguous", pos: "adj.", id: t === "en" ? "open to several interpretations" : "ambigu", lvl: 3, src: "Sim · Pitch", date: "11 Apr" },
    { w: "leverage", pos: "v.", id: t === "en" ? "use to maximum advantage" : "memanfaatkan", lvl: 5, src: "AI Speaking", date: "10 Apr" },
    { w: "coherent", pos: "adj.", id: t === "en" ? "logical and consistent" : "koheren, runtut", lvl: 4, src: "Writing", date: "9 Apr" },
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("profile")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="Vocab Book"
        right={<Btn variant="soft" size="sm" leading={<Icon name="play" size={12}/>}>{t === "en" ? "Practice" : "Latih"}</Btn>}
        transparent
      />
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <Card padding={14} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Total saved" : "Tersimpan"}</div>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, letterSpacing: -0.5 }}>142 <span style={{ color: "var(--lr-ink-3)", fontSize: 14 }}>{t === "en" ? "words" : "kata"}</span></div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>{t === "en" ? "Today's review" : "Review hari ini"}</div>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, color: "var(--lr-accent-2)", letterSpacing: -0.5 }}>18</div>
          </div>
        </Card>

        <div style={{ display: "flex", gap: 0, background: "var(--lr-bg-elev)", borderRadius: 12, padding: 4, marginTop: 14, border: "0.5px solid var(--lr-line)" }}>
          {tabs.map(tb => {
            const on = tab === tb.id;
            return (
              <button key={tb.id} onClick={() => setTab(tb.id)} style={{
                flex: 1, padding: "8px 0", borderRadius: 8,
                background: on ? "var(--lr-primary-600)" : "transparent", color: on ? "white" : "var(--lr-ink-2)",
                border: "none", fontWeight: 700, fontSize: 12, cursor: "pointer", fontFamily: "inherit",
              }}>{tb.l} <span style={{ opacity: 0.7, marginLeft: 4 }}>{tb.n}</span></button>
            );
          })}
        </div>
      </div>

      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 8 }}>
        {words.map(w => (
          <Card key={w.w} padding={14}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontFamily: "var(--lr-font-display)", fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>{w.w}</span>
                  <span style={{ fontSize: 11, fontStyle: "italic", color: "var(--lr-ink-3)" }}>{w.pos}</span>
                </div>
                <div style={{ fontSize: 12, color: "var(--lr-ink-2)", marginTop: 2, lineHeight: 1.4 }}>{w.id}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontSize: 10, color: "var(--lr-ink-3)" }}>
                  <span>{w.src}</span>· <span>{w.date}</span>
                </div>
              </div>
              <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                <button style={{ width: 32, height: 32, borderRadius: 8, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="play" size={14}/>
                </button>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1,2,3,4,5].map(i => (
                    <span key={i} style={{ width: 4, height: 8, borderRadius: 1, background: i <= w.lvl ? "var(--lr-primary-600)" : "var(--lr-line-strong)" }}/>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
};

const ScreenCoReading = ({ t, onScreen }) => {
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("connect")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="Co-Reading"
        right={<div style={{ display: "flex", alignItems: "center", gap: -8 }}><Avatar name="Maya C" size={28} hue={30}/><Avatar name="You A" size={28} hue={280} style={{ marginLeft: -10, border: "2px solid white" }}/></div>}
        transparent
      />
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <Card padding={14} style={{ background: "linear-gradient(135deg, var(--lr-primary-50), var(--lr-bg-elev))", border: "none" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--lr-primary-700)", fontWeight: 700, letterSpacing: 0.3, textTransform: "uppercase" }}>{t === "en" ? "Reading together" : "Membaca bareng"}</div>
              <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{t === "en" ? "Career Chapter 3 · 18 of 24 pages" : "Bab Karier 3 · halaman 18/24"}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lr-success)", animation: "pulseDot 1.6s infinite" }}/>
              <span style={{ fontSize: 11, color: "var(--lr-ink-2)", fontWeight: 700 }}>LIVE</span>
            </div>
          </div>
          <div style={{ marginTop: 8 }}><ProgressBar value={75} height={4} color="var(--lr-primary-600)" track="rgba(107,63,160,0.18)"/></div>
        </Card>

        {/* Reading content */}
        <Card padding={18} style={{ marginTop: 12 }}>
          <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>Page 18</div>
          <h3 style={{ fontFamily: "var(--lr-font-display)", fontSize: 18, fontWeight: 600, margin: "6px 0 12px", letterSpacing: -0.3 }}>{t === "en" ? "Negotiating salary, with grace" : "Negosiasi gaji, dengan elegan"}</h3>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--lr-ink)", fontFamily: "var(--lr-font-display)" }}>
            <span>The negotiation begins long before the </span>
            <span style={{ background: "rgba(255,214,74,0.4)", padding: "1px 3px", borderRadius: 4, position: "relative" }}>
              offer
              <span style={{ position: "absolute", top: -16, right: -2, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg, oklch(0.78 0.12 30), oklch(0.55 0.18 60))", border: "2px solid white", display: "block" }}/>
            </span>
            <span> arrives. By the time numbers are exchanged, your </span>
            <span style={{ background: "rgba(146,99,204,0.18)", padding: "1px 3px", borderRadius: 4, position: "relative" }}>
              leverage
              <span style={{ position: "absolute", top: -16, right: -2, width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg, oklch(0.78 0.12 280), oklch(0.55 0.18 310))", border: "2px solid white", display: "block" }}/>
            </span>
            <span> has already been quietly built — through the questions you asked, the alternatives you mentioned, and the way you described the problems you solved.</span>
          </div>
        </Card>

        {/* Voice chat strip */}
        <Card padding={12} style={{ marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ position: "relative" }}>
              <Avatar name="Maya Chen" size={40} hue={30}/>
              <span style={{ position: "absolute", bottom: -2, right: -2, width: 14, height: 14, borderRadius: "50%", background: "var(--lr-success)", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="mic" size={8} color="white"/></span>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 700 }}>Maya {t === "en" ? "is reading aloud…" : "sedang membaca…"}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 4 }}>
                {Array.from({ length: 22 }).map((_, i) => (
                  <span key={i} style={{ width: 2, background: "var(--lr-primary-600)", borderRadius: 1, height: `${6 + Math.abs(Math.sin(i * 0.5)) * 14}px` }}/>
                ))}
              </div>
            </div>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="mic" size={16}/>
            </button>
          </div>
        </Card>

        {/* Glossary */}
        <div style={{ marginTop: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 8 }}>{t === "en" ? "From this page" : "Dari halaman ini"}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["leverage", "negotiation", "alternatives", "exchange"].map(w => (
              <Pill key={w} bg="var(--lr-bg-elev)" color="var(--lr-ink)" size="md" style={{ border: "0.5px solid var(--lr-line)" }}>{w}</Pill>
            ))}
          </div>
        </div>
      </div>

      {/* Page nav */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }} leading={<Icon name="chevL" size={14}/>}>17</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1.5 }} trailing={<Icon name="chevR" size={14}/>}>{t === "en" ? "Next page" : "Halaman berikut"}</Btn>
      </div>
      <style>{`@keyframes pulseDot { 0%,100% { opacity: 1 } 50% { opacity: 0.3 } }`}</style>
    </Screen>
  );
};

const ScreenSimSetup = ({ t, onScreen }) => {
  const [opt, setOpt] = React.useState({ comp: "tech-startup", role: "PM", lvl: "B2", lang: "EN-US", focus: ["Tell me about yourself", "Strengths", "Weaknesses", "Why this company"] });
  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("sim")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title={t === "en" ? "Setup Job Interview" : "Setup Interview"}
        transparent
      />
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen) 0" }}>
        {[
          { k: "comp", l: t === "en" ? "Company type" : "Tipe perusahaan", v: "Tech Startup", opts: ["Tech Startup", "Big Tech", "Bank", "Consulting", "NGO"] },
          { k: "role", l: t === "en" ? "Role" : "Posisi", v: "Product Manager (mid)", opts: ["Junior Dev", "Mid PM", "Senior Designer", "Marketing"] },
          { k: "lvl", l: t === "en" ? "Difficulty" : "Tingkat kesulitan", v: "B2 · Standard", opts: ["B1 · Friendly", "B2 · Standard", "C1 · Tough"] },
          { k: "lang", l: t === "en" ? "Language" : "Bahasa", v: "English (US)", opts: ["English (US)", "English (UK)", "English (AU)"] },
        ].map(s => (
          <div key={s.k} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 8 }}>{s.l}</div>
            <Card padding={14} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{s.v}</div>
              <Icon name="chevD" size={16} color="var(--lr-ink-3)"/>
            </Card>
          </div>
        ))}

        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 8 }}>{t === "en" ? "Focus questions" : "Fokus pertanyaan"}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {opt.focus.map(f => <Pill key={f} bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="md">{f} ✕</Pill>)}
            <Pill bg="var(--lr-bg-elev)" color="var(--lr-ink-2)" size="md" style={{ border: "0.5px dashed var(--lr-line-strong)" }}>+ Add</Pill>
          </div>
        </div>

        <Card padding={14} style={{ background: "var(--lr-primary-50)", border: "none" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <Icon name="sparkle" size={18} color="var(--lr-primary-600)"/>
            <div style={{ flex: 1, fontSize: 12, color: "var(--lr-primary-700)", lineHeight: 1.5 }}>
              {t === "en"
                ? <>You can upload your resume / job description so the AI tailors questions to your background.</>
                : <>Kamu bisa upload CV / job description agar AI menyesuaikan dengan latar belakangmu.</>}
              <div style={{ marginTop: 8 }}><Btn variant="primary" size="sm" leading={<Icon name="plus" size={12}/>}>Upload</Btn></div>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 32px" }}>
        <Btn full size="lg" onClick={() => onScreen("simBriefing")} trailing={<Icon name="arrowR" size={16}/>}>{t === "en" ? "Continue to Briefing" : "Lanjut ke Briefing"}</Btn>
      </div>
    </Screen>
  );
};

const ScreenSimBriefing = ({ t, onScreen }) => {
  const [count, setCount] = React.useState(5);
  const [phase, setPhase] = React.useState("brief"); // brief | countdown
  React.useEffect(() => {
    if (phase !== "countdown") return;
    if (count <= 0) {
      const id = setTimeout(() => onScreen("simSession"), 400);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => setCount(c => c - 1), 1000);
    return () => clearTimeout(id);
  }, [phase, count]);

  if (phase === "countdown") {
    return (
      <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 13, opacity: 0.7, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase" }}>{t === "en" ? "Starting in" : "Mulai dalam"}</div>
          <div key={count} style={{
            fontFamily: "var(--lr-font-display)", fontSize: 200, fontWeight: 600, lineHeight: 1, marginTop: 16,
            color: count === 0 ? "var(--lr-success)" : "white", letterSpacing: -8,
            animation: "countPulse 1s var(--lr-ease) both",
          }}>{count === 0 ? "GO" : count}</div>
        </div>
        <style>{`@keyframes countPulse { 0% { transform: scale(1.4); opacity: 0 } 60% { transform: scale(0.95); opacity: 1 } 100% { transform: scale(1); opacity: 1 } }`}</style>
      </Screen>
    );
  }

  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("simSetup")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="Briefing"
        transparent
      />
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen) 0" }}>
        <Card padding={18} style={{ background: "linear-gradient(135deg, var(--lr-ink), var(--lr-primary-700))", color: "white", border: "none" }}>
          <Pill bg="rgba(255,255,255,0.15)" color="white" size="sm" style={{ backdropFilter: "blur(10px)" }}><Icon name="sim" size={12} color="white"/> {t === "en" ? "Scenario" : "Skenario"}</Pill>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, margin: "10px 0 6px", letterSpacing: -0.3, lineHeight: 1.2 }}>{t === "en" ? "Mid-PM Interview · Tech Startup" : "Interview Mid-PM · Tech Startup"}</h2>
          <div style={{ fontSize: 13, opacity: 0.85, lineHeight: 1.5 }}>{t === "en" ? "You'll meet a hiring manager who'll ask 8 behavioral and product questions over 15 minutes." : "Kamu akan ketemu hiring manager untuk 8 pertanyaan behavioral & product, 15 menit."}</div>
        </Card>

        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "Tips before you start" : "Tips sebelum mulai"}</div>
          <Card padding={0}>
            {[
              { ic: "headset", l: t === "en" ? "Use headphones for clean audio" : "Gunakan headphone biar audio bersih" },
              { ic: "globe", l: t === "en" ? "Quiet, well-lit room" : "Ruangan tenang & terang" },
              { ic: "mic", l: t === "en" ? "Speak naturally — pauses are fine" : "Bicara natural — boleh jeda" },
              { ic: "shield", l: t === "en" ? "STAR method recommended" : "Disarankan metode STAR" },
            ].map((p, i, a) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", borderBottom: i < a.length - 1 ? "0.5px solid var(--lr-line)" : "none", alignItems: "center" }}>
                <Icon name={p.ic} size={16} color="var(--lr-primary-600)"/>
                <div style={{ fontSize: 13, color: "var(--lr-ink-2)" }}>{p.l}</div>
              </div>
            ))}
          </Card>
        </div>

        <div style={{ marginTop: 16, display: "flex", gap: 10 }}>
          <Card padding={14} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>15</div>
            <div style={{ fontSize: 10, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>min</div>
          </Card>
          <Card padding={14} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>8</div>
            <div style={{ fontSize: 10, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>questions</div>
          </Card>
          <Card padding={14} style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>B2</div>
            <div style={{ fontSize: 10, color: "var(--lr-ink-3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.3 }}>level</div>
          </Card>
        </div>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 32px", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="lg" style={{ flex: 1 }} onClick={() => onScreen("simSetup")}>{t === "en" ? "Edit setup" : "Ubah setup"}</Btn>
        <Btn size="lg" style={{ flex: 1.4 }} onClick={() => setPhase("countdown")} trailing={<Icon name="play" size={16} color="white"/>}>{t === "en" ? "I'm ready" : "Aku siap"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenSafeTalk, ScreenParental, ScreenPaymentSuccess, ScreenVocab, ScreenCoReading, ScreenSimSetup, ScreenSimBriefing });
