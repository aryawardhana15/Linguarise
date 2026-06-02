// LinguaRise — Auth: Register (identitas → OTP → setup) + Login

const ScreenRegister = ({ t, onDone, onScreen }) => {
  const [step, setStep] = React.useState(0); // 0=form, 1=otp, 2=setup
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = React.useState(60);
  const [showPwd, setShowPwd] = React.useState(false);
  const [agree, setAgree] = React.useState(false);
  const [target, setTarget] = React.useState("en");
  const [goal, setGoal] = React.useState("scholarship");

  React.useEffect(() => {
    if (step !== 1 || timer <= 0) return;
    const id = setTimeout(() => setTimer(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [step, timer]);

  if (step === 0) {
    return (
      <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
        <div style={{ paddingTop: 56 }}/>
        <TopBar left={<button onClick={() => onScreen("welcome")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title={t === "en" ? "Sign up" : "Daftar"} transparent/>
        <div style={{ flex: 1, padding: "8px var(--lr-pad-screen)" }}>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, margin: 0, letterSpacing: -0.4, lineHeight: 1.2 }}>{t === "en" ? "Create your account" : "Buat akunmu"}</h2>
          <div style={{ fontSize: 13, color: "var(--lr-ink-3)", marginTop: 6 }}>{t === "en" ? "Takes 2 minutes" : "Hanya 2 menit"}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
            {[
              { l: t === "en" ? "Full name" : "Nama lengkap", v: "Aulia Rahma", ic: "profile" },
              { l: "Email", v: "aulia.r@email.com", ic: "globe" },
              { l: t === "en" ? "Phone" : "No. Telepon", v: "+62 812 9876 5432", ic: "headset" },
              { l: t === "en" ? "Date of birth" : "Tanggal lahir", v: "12 Mar 2002", ic: "clock" },
            ].map(f => (
              <div key={f.l}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 6 }}>{f.l}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 12, background: "var(--lr-bg-elev)", border: "0.5px solid var(--lr-line)", boxShadow: "var(--lr-shadow-sm)" }}>
                  <Icon name={f.ic} size={16} color="var(--lr-ink-3)"/>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{f.v}</div>
                </div>
              </div>
            ))}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 6 }}>Password</div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", borderRadius: 12, background: "var(--lr-bg-elev)", border: "0.5px solid var(--lr-line)", boxShadow: "var(--lr-shadow-sm)" }}>
                <Icon name="lock" size={16} color="var(--lr-ink-3)"/>
                <div style={{ flex: 1, fontSize: 14, fontWeight: 600, fontFamily: "var(--lr-font-mono)", letterSpacing: 2 }}>{showPwd ? "Aulia2026!" : "•••••••••"}</div>
                <button onClick={() => setShowPwd(p => !p)} style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--lr-primary-600)", fontSize: 11, fontWeight: 700 }}>{showPwd ? "HIDE" : "SHOW"}</button>
              </div>
              <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
                {[1,2,3,4].map(i => <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= 3 ? "var(--lr-success)" : "var(--lr-line-strong)" }}/>)}
              </div>
              <div style={{ fontSize: 11, color: "var(--lr-success)", marginTop: 4, fontWeight: 600 }}>{t === "en" ? "Strong password" : "Password kuat"}</div>
            </div>
            <button onClick={() => setAgree(a => !a)} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 4, marginTop: 4, background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: 22, height: 22, borderRadius: 6, border: `1.5px solid ${agree ? "var(--lr-primary-600)" : "var(--lr-line-strong)"}`, background: agree ? "var(--lr-primary-600)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                {agree && <Icon name="check" size={14} color="white" strokeWidth={3}/>}
              </span>
              <span style={{ fontSize: 12, color: "var(--lr-ink-2)", lineHeight: 1.5 }}>{t === "en" ? "I agree to the " : "Saya menyetujui "}<span style={{ color: "var(--lr-primary-600)", fontWeight: 700 }}>Terms</span>{t === "en" ? " and " : " dan "}<span style={{ color: "var(--lr-primary-600)", fontWeight: 700 }}>Privacy Policy</span></span>
            </button>
          </div>
        </div>
        <div style={{ padding: "16px var(--lr-pad-screen) 32px" }}>
          <Btn full size="lg" disabled={!agree} onClick={() => setStep(1)}>{t === "en" ? "Sign up" : "Daftar"}</Btn>
        </div>
      </Screen>
    );
  }

  if (step === 1) {
    return (
      <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
        <div style={{ paddingTop: 56 }}/>
        <TopBar left={<button onClick={() => setStep(0)} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} transparent/>
        <div style={{ flex: 1, padding: "8px 24px", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, margin: 0, letterSpacing: -0.4, lineHeight: 1.2 }}>{t === "en" ? "Verify phone" : "Verifikasi nomor"}</h2>
          <div style={{ fontSize: 14, color: "var(--lr-ink-2)", marginTop: 8, lineHeight: 1.5 }}>
            {t === "en" ? "Enter the 6-digit code sent to" : "Masukkan kode 6 digit ke"} <b>+62 812 ••• 5432</b>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 32, justifyContent: "space-between" }}>
            {[2, 4, 1, 9, 0, 7].map((n, i) => (
              <div key={i} style={{
                flex: 1, aspectRatio: "1", maxWidth: 48, borderRadius: 12,
                background: "var(--lr-bg-elev)", border: `1.5px solid ${i === 5 ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, fontWeight: 700, fontFamily: "var(--lr-font-mono)",
                color: "var(--lr-ink)", boxShadow: i === 5 ? "0 0 0 4px var(--lr-primary-50)" : "var(--lr-shadow-sm)",
              }}>{i < 6 ? n : ""}</div>
            ))}
          </div>
          <div style={{ marginTop: 24, fontSize: 13, color: "var(--lr-ink-3)", textAlign: "center" }}>
            {timer > 0
              ? <>{t === "en" ? "Resend in" : "Kirim ulang dalam"} <span style={{ color: "var(--lr-primary-600)", fontWeight: 700, fontFamily: "var(--lr-font-mono)" }}>{String(Math.floor(timer / 60)).padStart(2, "0")}:{String(timer % 60).padStart(2, "0")}</span></>
              : <button style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>{t === "en" ? "Resend code" : "Kirim ulang kode"}</button>}
          </div>
        </div>
        <div style={{ padding: "16px 24px 32px" }}>
          <Btn full size="lg" onClick={() => setStep(2)}>{t === "en" ? "Continue" : "Lanjut"}</Btn>
        </div>
      </Screen>
    );
  }

  // Setup profile
  const langs = [
    { id: "en", flag: "🇬🇧", name: "English" },
    { id: "zh", flag: "🇨🇳", name: "Mandarin" },
    { id: "ja", flag: "🇯🇵", name: "Japanese" },
    { id: "ko", flag: "🇰🇷", name: "Korean" },
    { id: "es", flag: "🇪🇸", name: "Spanish" },
    { id: "fr", flag: "🇫🇷", name: "French" },
  ];
  const goals = [
    { id: "scholarship", l: t === "en" ? "Scholarship" : "Beasiswa", ic: "badge" },
    { id: "career", l: t === "en" ? "Career / Work" : "Karier / Kerja", ic: "sim" },
    { id: "ielts", l: "IELTS / TOEFL", ic: "book" },
    { id: "casual", l: t === "en" ? "Conversation" : "Percakapan", ic: "connect" },
  ];
  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => setStep(1)} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title={t === "en" ? "Set up profile" : "Setup profil"} transparent/>
      <div style={{ flex: 1, padding: "8px var(--lr-pad-screen)" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 8 }}>
          <div style={{ position: "relative" }}>
            <Avatar name="Aulia Rahma" size={88} hue={280}/>
            <button style={{ position: "absolute", bottom: 0, right: 0, width: 32, height: 32, borderRadius: "50%", border: "2px solid white", background: "var(--lr-primary-600)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <Icon name="cam" size={16} color="white"/>
            </button>
          </div>
          <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 8 }}>{t === "en" ? "Tap to upload photo" : "Tap untuk upload foto"}</div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "Target language" : "Bahasa target"}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            {langs.map(l => {
              const on = target === l.id;
              return (
                <button key={l.id} onClick={() => setTarget(l.id)} style={{
                  padding: "12px 8px", borderRadius: 12, border: `1.5px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                  background: on ? "var(--lr-primary-50)" : "var(--lr-bg-elev)", cursor: "pointer", fontFamily: "inherit",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                }}>
                  <div style={{ fontSize: 24 }}>{l.flag}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: on ? "var(--lr-primary-700)" : "var(--lr-ink-2)" }}>{l.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ marginTop: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 10 }}>{t === "en" ? "Main goal" : "Tujuan utama"}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {goals.map(g => {
              const on = goal === g.id;
              return (
                <button key={g.id} onClick={() => setGoal(g.id)} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12,
                  border: `1.5px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                  background: on ? "var(--lr-primary-50)" : "var(--lr-bg-elev)", cursor: "pointer", fontFamily: "inherit",
                  textAlign: "left",
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: on ? "var(--lr-primary-600)" : "var(--lr-primary-50)", color: on ? "white" : "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={g.ic} size={18}/>
                  </div>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: "var(--lr-ink)" }}>{g.l}</div>
                  {on && <Icon name="check" size={18} color="var(--lr-primary-600)" strokeWidth={2.5}/>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 32px" }}>
        <Btn full size="lg" onClick={() => onDone()} trailing={<Icon name="arrowR" size={16}/>}>{t === "en" ? "Continue to Placement" : "Lanjut ke Placement"}</Btn>
      </div>
    </Screen>
  );
};

const ScreenLogin = ({ t, onScreen }) => {
  return (
    <Screen padBottom={0} style={{ minHeight: 874, display: "flex", flexDirection: "column" }}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => onScreen("welcome")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} transparent/>
      <div style={{ flex: 1, padding: "16px var(--lr-pad-screen)", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LRLogo width={120}/>
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 30, fontWeight: 600, margin: "32px 0 6px", letterSpacing: -0.6 }}>{t === "en" ? "Welcome back" : "Selamat datang"}</h2>
        <div style={{ fontSize: 14, color: "var(--lr-ink-2)", lineHeight: 1.5 }}>{t === "en" ? "Sign in to continue your speaking journey." : "Masuk untuk lanjutkan perjalanan speaking-mu."}</div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 28 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 6 }}>Email</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px", borderRadius: 12, background: "var(--lr-bg-elev)", border: "0.5px solid var(--lr-line)", boxShadow: "var(--lr-shadow-sm)" }}>
              <Icon name="globe" size={16} color="var(--lr-ink-3)"/>
              <div style={{ fontSize: 14, fontWeight: 600 }}>aulia.r@email.com</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginBottom: 6 }}>Password</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px", borderRadius: 12, background: "var(--lr-bg-elev)", border: "0.5px solid var(--lr-line)", boxShadow: "var(--lr-shadow-sm)" }}>
              <Icon name="lock" size={16} color="var(--lr-ink-3)"/>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600, fontFamily: "var(--lr-font-mono)", letterSpacing: 2 }}>••••••••</div>
            </div>
          </div>
          <div style={{ textAlign: "right", marginTop: -4 }}>
            <button onClick={() => onScreen("forgotPassword")} style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>{t === "en" ? "Forgot password?" : "Lupa password?"}</button>
          </div>
        </div>

        <Btn full size="lg" style={{ marginTop: 20 }} onClick={() => onScreen("home")}>{t === "en" ? "Sign in" : "Masuk"}</Btn>

        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "24px 0", color: "var(--lr-ink-3)" }}>
          <div style={{ flex: 1, height: 1, background: "var(--lr-line)" }}/>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>{t === "en" ? "or" : "atau"}</div>
          <div style={{ flex: 1, height: 1, background: "var(--lr-line)" }}/>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Btn variant="ghost" full size="md" leading={<span style={{ fontSize: 16 }}>G</span>}>{t === "en" ? "Continue with Google" : "Lanjut dengan Google"}</Btn>
          <Btn variant="dark" full size="md" leading={<span style={{ fontSize: 16 }}>􀣺</span>}>{t === "en" ? "Continue with Apple" : "Lanjut dengan Apple"}</Btn>
        </div>

        <div style={{ flex: 1 }}/>
        <div style={{ textAlign: "center", fontSize: 13, color: "var(--lr-ink-2)", marginTop: 24, marginBottom: 12 }}>
          {t === "en" ? "New here? " : "Belum punya akun? "}<button onClick={() => onScreen("register")} style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontWeight: 700, cursor: "pointer", fontSize: 13 }}>{t === "en" ? "Sign up" : "Daftar"}</button>
        </div>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenRegister, ScreenLogin });
