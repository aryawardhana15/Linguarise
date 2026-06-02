// LinguaRise — New screens: ForgotPassword, GoalSelection, Leaderboard, DailyComplete

// ── Forgot Password ───────────────────────────────────────────────
const ScreenForgotPassword = ({ t, onScreen }) => {
  const [step, setStep] = React.useState("email"); // email | sent
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    if (step !== "sent" || timer <= 0) return;
    const id = setTimeout(() => setTimer(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [step, timer]);

  if (step === "sent") {
    return (
      <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
        <div style={{ paddingTop: 56 }}/>
        <div style={{ flex: 1, padding: "0 var(--lr-pad-screen)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            width: 96, height: 96, borderRadius: "50%",
            background: "var(--lr-primary-50)", color: "var(--lr-primary-600)",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 24, animation: "pop 0.5s var(--lr-ease) both",
            boxShadow: "0 8px 32px rgba(107,63,160,0.2)",
          }}>
            <Icon name="globe" size={44}/>
          </div>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, margin: 0, textAlign: "center", letterSpacing: -0.4 }}>
            {t === "en" ? "Check your email" : "Cek emailmu"}
          </h2>
          <p style={{ fontSize: 14, color: "var(--lr-ink-2)", textAlign: "center", marginTop: 10, lineHeight: 1.6, maxWidth: 300 }}>
            {t === "en" ? "We sent a password reset link to" : "Kami kirim tautan reset ke"}{" "}
            <b style={{ color: "var(--lr-ink)" }}>aulia.r@email.com</b>
          </p>
          <div style={{ marginTop: 24, fontSize: 13, color: "var(--lr-ink-3)", textAlign: "center" }}>
            {timer > 0
              ? <>{t === "en" ? "Resend in " : "Kirim ulang dalam "}<span style={{ color: "var(--lr-primary-600)", fontWeight: 700, fontFamily: "var(--lr-font-mono)" }}>{timer}s</span></>
              : <button onClick={() => setTimer(60)} style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>{t === "en" ? "Resend link" : "Kirim ulang"}</button>
            }
          </div>
          <div style={{ marginTop: 28, padding: "14px 18px", background: "var(--lr-bg-elev)", borderRadius: 14, border: "0.5px solid var(--lr-line)", fontSize: 13, color: "var(--lr-ink-2)", lineHeight: 1.5, textAlign: "center", maxWidth: 300 }}>
            {t === "en" ? "Didn't receive it? Check spam, or try a different email." : "Tidak dapat? Cek folder spam atau coba email lain."}
          </div>
        </div>
        <div style={{ padding: "0 var(--lr-pad-screen) 40px", display: "flex", flexDirection: "column", gap: 10 }}>
          <Btn full size="lg" onClick={() => onScreen("login")}>
            {t === "en" ? "Back to Login" : "Kembali ke Login"}
          </Btn>
          <button onClick={() => setStep("email")} style={{
            background: "transparent", border: "none", color: "var(--lr-ink-3)",
            fontSize: 13, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", padding: 10, textAlign: "center",
          }}>{t === "en" ? "Use a different email" : "Ganti email"}</button>
        </div>
      </Screen>
    );
  }

  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("login")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title={t === "en" ? "Forgot Password" : "Lupa Password"}
        transparent
      />
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen) 0" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <LRLogo width={100}/>
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, margin: "0 0 8px", letterSpacing: -0.5, lineHeight: 1.2 }}>
          {t === "en" ? "Reset your password" : "Reset passwordmu"}
        </h2>
        <div style={{ fontSize: 14, color: "var(--lr-ink-3)", marginBottom: 28, lineHeight: 1.5 }}>
          {t === "en" ? "Enter your registered email. We'll send a secure reset link." : "Masukkan email terdaftar. Kami kirimkan tautan reset yang aman."}
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 8 }}>Email</div>
          <div style={{
            display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 14,
            background: "var(--lr-bg-elev)", border: "1.5px solid var(--lr-primary-600)",
            boxShadow: "0 0 0 4px var(--lr-primary-50)",
          }}>
            <Icon name="globe" size={18} color="var(--lr-primary-600)"/>
            <div style={{ fontSize: 14, fontWeight: 600 }}>aulia.r@email.com</div>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: "12px 14px", background: "var(--lr-bg-elev)", borderRadius: 12, border: "0.5px solid var(--lr-line)", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <Icon name="lock" size={16} color="var(--lr-ink-3)" style={{ marginTop: 2 }}/>
          <div style={{ fontSize: 12, color: "var(--lr-ink-3)", lineHeight: 1.5 }}>
            {t === "en" ? "The link expires in 15 minutes and can only be used once." : "Tautan ini kedaluwarsa dalam 15 menit dan hanya bisa digunakan sekali."}
          </div>
        </div>
      </div>
      <div style={{ padding: "0 var(--lr-pad-screen) 40px" }}>
        <Btn full size="lg" onClick={() => setStep("sent")} trailing={<Icon name="arrowR" size={16}/>}>
          {t === "en" ? "Send Reset Link" : "Kirim Tautan Reset"}
        </Btn>
      </div>
    </Screen>
  );
};

// ── Goal Selection ────────────────────────────────────────────────
const ScreenGoalSelection = ({ t, onScreen }) => {
  const [selected, setSelected] = React.useState(null);
  const goals = [
    { id: "lpdp",      title: "LPDP / Scholarship",              sub: t === "en" ? "Essay defense · Panel interview prep" : "Sidang essay · Persiapan interview panel", icon: "badge",   color: "var(--lr-primary-600)", bg: "var(--lr-primary-50)" },
    { id: "career",    title: t === "en" ? "Job Interview / Career" : "Wawancara Kerja / Karier", sub: t === "en" ? "HR screening · Behavioral · Technical" : "Screening HR · Behavioral · Teknis", icon: "sim",     color: "#3D8C63",              bg: "rgba(61,140,99,0.1)" },
    { id: "ielts",     title: "IELTS / TOEFL / TOEIC",           sub: t === "en" ? "Speaking part 1–3 full prep" : "Persiapan Speaking part 1–3 lengkap",               icon: "book",    color: "#3F4FA0",              bg: "rgba(63,79,160,0.1)" },
    { id: "chevening", title: "Chevening / Erasmus / AAS",       sub: t === "en" ? "Leadership story · Motivation interview" : "Cerita kepemimpinan · Interview motivasi", icon: "crown",   color: "#D97757",              bg: "rgba(217,119,87,0.1)" },
    { id: "casual",    title: t === "en" ? "Everyday Conversation" : "Percakapan Sehari-hari", sub: t === "en" ? "Fluency · Confidence · Casual talk" : "Kelancaran · Percaya diri · Ngobrol santai", icon: "connect", color: "var(--lr-ink-2)",       bg: "var(--lr-bg-elev)" },
  ];

  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("welcome")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        transparent
      />
      <div style={{ flex: 1, padding: "0 var(--lr-pad-screen)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", letterSpacing: 0.5, textTransform: "uppercase", marginBottom: 6 }}>2 / 3</div>
        <ProgressBar value={66}/>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, margin: "18px 0 6px", letterSpacing: -0.5, lineHeight: 1.2 }}>
          {t === "en" ? "What's your main goal?" : "Apa tujuan utamamu?"}
        </h2>
        <p style={{ fontSize: 13, color: "var(--lr-ink-3)", margin: "0 0 20px", lineHeight: 1.5 }}>
          {t === "en" ? "We'll personalize your practice path." : "Kami sesuaikan jalur latihanmu."}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {goals.map(g => {
            const on = selected === g.id;
            return (
              <button key={g.id} onClick={() => setSelected(g.id)} style={{
                display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 14,
                border: `1.5px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                background: on ? "var(--lr-primary-50)" : g.bg,
                cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                transition: "all 0.15s",
                boxShadow: on ? "0 0 0 4px var(--lr-primary-50), var(--lr-shadow-sm)" : "var(--lr-shadow-sm)",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: on ? g.color : g.bg, color: on ? "white" : g.color,
                  display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
                }}>
                  <Icon name={g.icon} size={20}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--lr-ink)" }}>{g.title}</div>
                  <div style={{ fontSize: 11, color: "var(--lr-ink-3)", marginTop: 2, lineHeight: 1.4 }}>{g.sub}</div>
                </div>
                <div style={{
                  width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                  border: `2px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line-strong)"}`,
                  background: on ? "var(--lr-primary-600)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s",
                }}>
                  {on && <Icon name="check" size={12} color="white" strokeWidth={3}/>}
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 40px" }}>
        <Btn full size="lg" disabled={!selected} onClick={() => onScreen("register")} trailing={<Icon name="arrowR" size={16}/>}>
          {t === "en" ? "Continue" : "Lanjut"}
        </Btn>
      </div>
    </Screen>
  );
};

// ── Leaderboard ───────────────────────────────────────────────────
const ScreenLeaderboard = ({ t, onScreen }) => {
  const [tab, setTab] = React.useState("week");

  const users = [
    { rank: 1, name: "Rizky Ananda",  level: "C1", score: 1240, streak: 28, hue: 180, delta: "+42" },
    { rank: 2, name: "Maya Chen",     level: "B2", score: 1185, streak: 21, hue: 30,  delta: "+38" },
    { rank: 3, name: "Aulia Rahma",   level: "B2", score: 1102, streak: 12, hue: 280, delta: "+31", isMe: true },
    { rank: 4, name: "Siti Nadia",    level: "B2", score: 1088, streak: 8,  hue: 60,  delta: "+27" },
    { rank: 5, name: "Kenji T.",      level: "B1", score: 972,  streak: 14, hue: 220, delta: "+25" },
    { rank: 6, name: "Sofia L.",      level: "C1", score: 940,  streak: 19, hue: 340, delta: "+19" },
    { rank: 7, name: "Ahmad Z.",      level: "B1", score: 910,  streak: 6,  hue: 130, delta: "+15" },
    { rank: 8, name: "Devi P.",       level: "B2", score: 887,  streak: 11, hue: 200, delta: "+12" },
  ];
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("home")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title={t === "en" ? "Leaderboard" : "Papan Peringkat"}
        right={<Pill bg="rgba(255,107,92,0.12)" color="var(--lr-accent-2)" size="sm"><Icon name="flame" size={11}/> Weekly</Pill>}
        transparent
      />

      {/* Top-3 podium */}
      <div style={{ padding: "4px var(--lr-pad-screen) 0" }}>
        <Card padding={20} style={{ background: "linear-gradient(135deg, var(--lr-ink) 0%, var(--lr-primary-700) 100%)", color: "white", border: "none", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", top: -50, right: -40, width: 160, height: 160, borderRadius: "50%", background: "rgba(255,214,74,0.15)", filter: "blur(40px)" }}/>
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", gap: 8, position: "relative" }}>
            {/* 2nd */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Avatar name={users[1].name} size={52} hue={users[1].hue}/>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75 }}>{users[1].name.split(" ")[0]}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#C0C7D0" }}>🥈 {users[1].score}</div>
              </div>
            </div>
            {/* 1st */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 8 }}>
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", fontSize: 22 }}>👑</div>
                <Avatar name={users[0].name} size={68} hue={users[0].hue}/>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75 }}>{users[0].name.split(" ")[0]}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "var(--lr-accent)" }}>🥇 {users[0].score}</div>
              </div>
            </div>
            {/* 3rd */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <Avatar name={users[2].name} size={52} hue={users[2].hue}/>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75 }}>{users[2].name.split(" ")[0]}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#D97757" }}>🥉 {users[2].score}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Your position highlight */}
      <div style={{ padding: "12px var(--lr-pad-screen) 0" }}>
        <div style={{ background: "var(--lr-primary-50)", borderRadius: 12, padding: "10px 14px", display: "flex", alignItems: "center", gap: 10, border: "1px solid var(--lr-primary-200)" }}>
          <Icon name="sparkle" size={16} color="var(--lr-primary-600)"/>
          <div style={{ flex: 1, fontSize: 13, color: "var(--lr-primary-700)", fontWeight: 600 }}>
            {t === "en" ? "You're #3 this week · +31 XP ahead of #4" : "Kamu #3 minggu ini · Unggul +31 XP dari #4"}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: "12px var(--lr-pad-screen) 0", display: "flex", gap: 6 }}>
        {[
          { id: "week",    l: t === "en" ? "This Week" : "Minggu Ini" },
          { id: "all",     l: t === "en" ? "All Time"  : "Sepanjang Masa" },
          { id: "friends", l: t === "en" ? "Friends"   : "Teman" },
        ].map(tb => (
          <button key={tb.id} onClick={() => setTab(tb.id)} style={{
            padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700,
            background: tab === tb.id ? "var(--lr-ink)" : "var(--lr-bg-elev)",
            color:      tab === tb.id ? "white"         : "var(--lr-ink-2)",
            border: "0.5px solid var(--lr-line)", cursor: "pointer", fontFamily: "inherit",
          }}>{tb.l}</button>
        ))}
      </div>

      {/* Full list */}
      <div style={{ padding: "12px var(--lr-pad-screen) 0" }}>
        <Card padding={0}>
          {users.map((u, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "12px 16px",
              borderBottom: i < users.length - 1 ? "0.5px solid var(--lr-line)" : "none",
              background: u.isMe ? "var(--lr-primary-50)" : "transparent",
            }}>
              <div style={{ width: 24, textAlign: "center", fontSize: 14, fontWeight: 800, color: i < 3 ? ["var(--lr-accent)","#C0C7D0","#D97757"][i] : "var(--lr-ink-3)", flexShrink: 0 }}>
                {i < 3 ? medals[i] : u.rank}
              </div>
              <Avatar name={u.name} size={38} hue={u.hue}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: u.isMe ? 800 : 600, display: "flex", alignItems: "center", gap: 6 }}>
                  {u.name}
                  {u.isMe && <span style={{ fontSize: 10, background: "var(--lr-primary-600)", color: "white", padding: "1px 6px", borderRadius: 99, fontWeight: 700 }}>You</span>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                  <CEFRBadge level={u.level} size="sm"/>
                  <span style={{ fontSize: 11, color: "var(--lr-ink-3)" }}>· 🔥 {u.streak} days</span>
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 17, fontWeight: 700 }}>{u.score}</div>
                <div style={{ fontSize: 11, color: "var(--lr-success)", fontWeight: 700 }}>{u.delta} XP</div>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </Screen>
  );
};

// ── Daily Challenge Complete ──────────────────────────────────────
const ScreenDailyComplete = ({ t, onScreen }) => {
  const rewards = [
    { l: t === "en" ? "XP Gained" : "XP Didapat", v: "+50 XP", color: "var(--lr-accent)" },
    { l: "Streak",                                  v: "13 🔥",  color: "var(--lr-accent-2)" },
    { l: "LinguaScore",                             v: "+3 ↑",   color: "var(--lr-success)" },
  ];

  return (
    <Screen bg="var(--lr-bg-deep)" padBottom={0} style={{ minHeight: 874, color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      {/* Background glows */}
      <div style={{ position: "absolute", top: -100, left: -100, width: 360, height: 360, borderRadius: "50%", background: "rgba(107,63,160,0.35)", filter: "blur(80px)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", bottom: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(61,186,140,0.2)", filter: "blur(80px)", pointerEvents: "none" }}/>
      <div style={{ position: "absolute", top: "30%", right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,214,74,0.12)", filter: "blur(60px)", pointerEvents: "none" }}/>

      {/* Confetti */}
      {[...Array(16)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          top: `${5 + (i % 4) * 20}%`,
          left: `${4 + (i / 16) * 92}%`,
          width: i % 3 === 0 ? 10 : 7,
          height: i % 3 === 0 ? 10 : 7,
          borderRadius: i % 2 === 0 ? "50%" : 2,
          background: ["var(--lr-accent)","var(--lr-primary-300)","var(--lr-success)","var(--lr-accent-2)","white"][i % 5],
          animation: `confettiFall ${1.4 + (i % 4) * 0.3}s ease-out ${(i % 6) * 0.12}s both`,
          opacity: 0.75,
        }}/>
      ))}

      {/* Content */}
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "0 var(--lr-pad-screen)", width: "100%", textAlign: "center", gap: 4 }}>
        {/* Trophy */}
        <div style={{
          width: 120, height: 120, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--lr-accent) 0%, #FFB13C 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 64px rgba(255,214,74,0.45), 0 20px 40px rgba(0,0,0,0.3)",
          marginBottom: 16, animation: "pop 0.65s var(--lr-ease) 0.05s both",
        }}>
          <Icon name="badge" size={60} color="var(--lr-ink)"/>
        </div>

        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", opacity: 0.6, marginBottom: 8 }}>
          {t === "en" ? "Daily Goal Complete!" : "Target Harian Tercapai!"}
        </div>
        <h1 style={{ fontFamily: "var(--lr-font-display)", fontSize: 36, fontWeight: 600, margin: 0, letterSpacing: -1, lineHeight: 1.1, animation: "pop 0.6s var(--lr-ease) 0.2s both" }}>
          {t === "en" ? "Keep rising,\nAulia! 🚀" : "Terus naik,\nAulia! 🚀"}
        </h1>

        {/* Reward pills */}
        <div style={{ display: "flex", gap: 10, marginTop: 28, width: "100%" }}>
          {rewards.map((r, i) => (
            <div key={i} style={{
              flex: 1, background: "rgba(255,255,255,0.07)", borderRadius: 14,
              padding: "14px 6px", textAlign: "center",
              border: "0.5px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)",
              animation: `pop 0.5s var(--lr-ease) ${0.35 + i * 0.1}s both`,
            }}>
              <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 20, fontWeight: 700, color: r.color }}>{r.v}</div>
              <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.55, marginTop: 5, textTransform: "uppercase", letterSpacing: 0.4 }}>{r.l}</div>
            </div>
          ))}
        </div>

        {/* Next challenge teaser */}
        <div style={{
          marginTop: 18, padding: "14px 16px", width: "100%",
          background: "rgba(255,255,255,0.07)", borderRadius: 14,
          border: "0.5px solid rgba(255,255,255,0.12)", backdropFilter: "blur(20px)",
          textAlign: "left", display: "flex", alignItems: "center", gap: 12,
        }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <Icon name="clock" size={20} color="var(--lr-accent)"/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, opacity: 0.55, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 4 }}>
              {t === "en" ? "Next challenge" : "Tantangan berikutnya"}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>
              {t === "en" ? "Scholarship Interview Mock · Tomorrow 07:00" : "Mock Interview Beasiswa · Besok 07.00"}
            </div>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div style={{ position: "absolute", bottom: 40, left: "var(--lr-pad-screen)", right: "var(--lr-pad-screen)", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="lg" style={{ flex: 1, borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }} leading={<Icon name="share" size={16}/>}>
          {t === "en" ? "Share" : "Bagikan"}
        </Btn>
        <Btn variant="accent" size="lg" style={{ flex: 1.6 }} onClick={() => onScreen("home")} trailing={<Icon name="arrowR" size={16}/>}>
          {t === "en" ? "Awesome!" : "Mantap!"}
        </Btn>
      </div>

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0 }
          15%  { opacity: 0.8 }
          100% { transform: translateY(55vh) rotate(400deg); opacity: 0 }
        }
      `}</style>
    </Screen>
  );
};

Object.assign(window, { ScreenForgotPassword, ScreenGoalSelection, ScreenLeaderboard, ScreenDailyComplete });
