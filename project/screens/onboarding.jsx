// LinguaRise — Onboarding flow
// Splash → Welcome carousel → Placement test → Result

const ScreenSplash = ({ t, onDone }) => {
  React.useEffect(() => {
    const id = setTimeout(onDone, 2200);
    return () => clearTimeout(id);
  }, []);
  return (
    <Screen bg="var(--lr-primary-600)" padBottom={0} style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      minHeight: 874, color: "white", position: "relative", overflow: "hidden",
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.5 }}>
        <div style={{ position: "absolute", top: -80, left: -80, width: 280, height: 280, borderRadius: "50%", background: "var(--lr-primary-400)", filter: "blur(60px)" }}/>
        <div style={{ position: "absolute", bottom: -60, right: -60, width: 240, height: 240, borderRadius: "50%", background: "var(--lr-accent)", filter: "blur(80px)", opacity: 0.4 }}/>
      </div>
      <div style={{
        animation: "splashFade 1.4s var(--lr-ease-out) both",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 18, position: "relative",
      }}>
        <div style={{ background: "white", padding: 18, borderRadius: 24, boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
          <LRLogo size={64}/>
        </div>
        <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>linguarise</div>
        <div style={{ fontSize: 13, opacity: 0.85, fontStyle: "italic" }}>Speak with Purpose. Rise with Confidence.</div>
      </div>
      <style>{`@keyframes splashFade { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }`}</style>
    </Screen>
  );
};

const ScreenWelcome = ({ t, onDone }) => {
  const [i, setI] = React.useState(0);
  const slides = [
    {
      title: t === "en" ? "Speak with confidence" : "Berbicara dengan percaya diri",
      sub: t === "en" ? "Practice with real humans worldwide, paired by what you actually want to talk about." : "Latihan dengan partner manusia, sambungkan ke topik yang kamu pedulikan.",
      art: "human",
    },
    {
      title: t === "en" ? "Career-ready practice" : "Latihan siap karier",
      sub: t === "en" ? "Mock interviews for LPDP, Chevening, IELTS, and your dream company." : "Mock interview untuk LPDP, Chevening, IELTS, dan perusahaan impian.",
      art: "career",
    },
    {
      title: t === "en" ? "Measure your rise" : "Ukur kemajuanmu",
      sub: t === "en" ? "5-dimension LinguaScore tracks fluency, pronunciation, confidence — proof you can show." : "LinguaScore 5 dimensi: bukti nyata kemajuan yang bisa kamu lampirkan.",
      art: "score",
    },
  ];
  const cur = slides[i];
  return (
    <Screen padBottom={0} style={{ display: "flex", flexDirection: "column", minHeight: 874 }}>
      <div style={{ height: 64 }}/>
      <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: 240, height: 240, borderRadius: 36, marginBottom: 32,
          background: cur.art === "human" ? "linear-gradient(135deg, var(--lr-primary-100), var(--lr-primary-200))" :
                       cur.art === "career" ? "linear-gradient(135deg, var(--lr-accent), #FFB13C)" :
                       "linear-gradient(135deg, var(--lr-primary-600), var(--lr-primary-400))",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "var(--lr-shadow-lg)", color: cur.art === "career" ? "var(--lr-ink)" : "white",
        }}>
          {cur.art === "human" && <Icon name="connect" size={120} strokeWidth={1.5}/>}
          {cur.art === "career" && <Icon name="badge" size={120} strokeWidth={1.5}/>}
          {cur.art === "score" && <Icon name="chart" size={120} strokeWidth={1.5}/>}
        </div>
        <h1 style={{ fontFamily: "var(--lr-font-display)", fontSize: 32, fontWeight: 600, margin: 0, textAlign: "center", letterSpacing: -0.5 }}>{cur.title}</h1>
        <p style={{ fontSize: 16, color: "var(--lr-ink-2)", textAlign: "center", marginTop: 12, lineHeight: 1.5, maxWidth: 320, textWrap: "pretty" }}>{cur.sub}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingBottom: 24 }}>
        {slides.map((_, j) => (
          <div key={j} onClick={() => setI(j)} style={{
            width: j === i ? 24 : 8, height: 8, borderRadius: 4,
            background: j === i ? "var(--lr-primary-600)" : "var(--lr-primary-100)",
            transition: "width 0.3s var(--lr-ease)", cursor: "pointer",
          }}/>
        ))}
      </div>
      <div style={{ padding: "0 24px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
        <Btn full size="lg" onClick={() => i < 2 ? setI(i + 1) : onDone("placement")}>
          {i < 2 ? (t === "en" ? "Next" : "Lanjut") : (t === "en" ? "Get Started" : "Mulai Sekarang")}
        </Btn>
        <button onClick={() => onDone("home")} style={{
          background: "transparent", border: "none", color: "var(--lr-ink-2)",
          fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer", padding: 12,
        }}>
          {t === "en" ? "Already have an account? Sign in" : "Sudah punya akun? Masuk"}
        </button>
      </div>
    </Screen>
  );
};

const ScreenPlacement = ({ t, onDone }) => {
  const [step, setStep] = React.useState(0); // 0..3 quiz, 4 speaking, 5 result
  const [answers, setAnswers] = React.useState([]);
  const [recording, setRecording] = React.useState(false);
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    if (step !== 4 || !recording) return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [step, recording]);

  const questions = [
    { q: "Choose the correct sentence:", opts: ["She don't like coffee", "She doesn't likes coffee", "She doesn't like coffee", "She not like coffee"], correct: 2 },
    { q: "I _____ to Singapore last summer.", opts: ["go", "went", "have gone", "going"], correct: 1 },
    { q: "Pick the synonym of 'meticulous':", opts: ["careless", "thorough", "rapid", "loud"], correct: 1 },
    { q: "Complete: 'If I _____ time, I would join you.'", opts: ["have", "had", "will have", "having"], correct: 1 },
  ];

  if (step === 5) {
    return (
      <Screen padBottom={0} style={{ display: "flex", flexDirection: "column", minHeight: 874 }}>
        <div style={{ height: 60 }}/>
        <div style={{ flex: 1, padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            width: 180, height: 180, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--lr-primary-600), var(--lr-primary-400))",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            color: "white", boxShadow: "var(--lr-shadow-lg)", marginBottom: 28,
            animation: "pop 0.6s var(--lr-ease) both",
          }}>
            <div style={{ fontSize: 14, opacity: 0.85, fontWeight: 600 }}>Your level</div>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 64, fontWeight: 600, lineHeight: 1, marginTop: 4 }}>B1</div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>Intermediate</div>
          </div>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 26, fontWeight: 600, margin: 0, textAlign: "center", letterSpacing: -0.3 }}>
            {t === "en" ? "Hi Aulia, you're at B1!" : "Halo Aulia, kamu di level B1!"}
          </h2>
          <p style={{ fontSize: 15, color: "var(--lr-ink-2)", textAlign: "center", marginTop: 12, lineHeight: 1.55, maxWidth: 320 }}>
            {t === "en"
              ? "Solid foundation. We'll start with conversation practice and build toward IELTS-ready speaking."
              : "Fondasi sudah baik. Kita mulai dari percakapan, lalu naik ke speaking siap IELTS."}
          </p>
          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {[
              { label: "Fluency", v: 64 },
              { label: "Grammar", v: 72 },
              { label: "Vocab", v: 58 },
            ].map(s => (
              <div key={s.label} style={{
                background: "var(--lr-bg-elev)", padding: "10px 14px", borderRadius: 12,
                border: "0.5px solid var(--lr-line)", textAlign: "center", minWidth: 88,
              }}>
                <div style={{ fontSize: 11, color: "var(--lr-ink-3)", fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "var(--lr-primary-600)", marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ padding: "0 24px 40px" }}>
          <Btn full size="lg" onClick={() => onDone()} trailing={<Icon name="arrowR" size={18}/>}>
            {t === "en" ? "Start Learning" : "Mulai Belajar"}
          </Btn>
        </div>
        <style>{`@keyframes pop { 0% { transform: scale(0.6); opacity: 0 } 60% { transform: scale(1.08); opacity: 1 } 100% { transform: scale(1) } }`}</style>
      </Screen>
    );
  }

  if (step === 4) {
    return (
      <Screen padBottom={0} style={{ display: "flex", flexDirection: "column", minHeight: 874 }}>
        <div style={{ height: 60 }}/>
        <div style={{ padding: "0 24px" }}>
          <ProgressBar value={(step / 5) * 100}/>
          <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 8, fontWeight: 600 }}>
            {t === "en" ? "Speaking · Final step" : "Speaking · Tahap akhir"}
          </div>
        </div>
        <div style={{ flex: 1, padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 24, fontWeight: 600, margin: 0, textAlign: "center", letterSpacing: -0.3 }}>
            {t === "en" ? "Tell us about yourself" : "Ceritakan tentang dirimu"}
          </h2>
          <p style={{ fontSize: 14, color: "var(--lr-ink-2)", textAlign: "center", marginTop: 10, lineHeight: 1.5 }}>
            {t === "en" ? "60 seconds. Speak in English about your goals." : "60 detik. Bicara dalam Bahasa Inggris tentang tujuanmu."}
          </p>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24, marginTop: 32 }}>
            <button onClick={() => setRecording(r => !r)} style={{
              width: 140, height: 140, borderRadius: "50%", border: "none",
              background: recording ? "var(--lr-accent-2)" : "var(--lr-primary-600)",
              color: "white", display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: recording ? "0 0 0 12px rgba(255,107,92,0.18), var(--lr-shadow-lg)" : "var(--lr-shadow-purple)",
              cursor: "pointer", transition: "all 0.3s var(--lr-ease)",
              animation: recording ? "pulseRec 1.6s ease-in-out infinite" : "none",
            }}>
              <Icon name="mic" size={56} strokeWidth={1.6}/>
            </button>
            <div style={{ fontFamily: "var(--lr-font-mono)", fontSize: 32, fontWeight: 700, color: "var(--lr-ink)", letterSpacing: 1 }}>
              {String(Math.floor(elapsed / 60)).padStart(2, "0")}:{String(elapsed % 60).padStart(2, "0")}
            </div>
            {recording && (
              <div style={{ display: "flex", gap: 3, alignItems: "flex-end", height: 32 }}>
                {[...Array(20)].map((_, i) => (
                  <div key={i} style={{
                    width: 4, background: "var(--lr-primary-600)", borderRadius: 2,
                    height: `${20 + Math.sin(elapsed * 0.5 + i) * 12 + Math.random() * 8}%`,
                    transition: "height 0.15s",
                  }}/>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ padding: "0 24px 40px", display: "flex", gap: 10 }}>
          <Btn variant="ghost" size="lg" onClick={() => setStep(5)} style={{ flex: 1 }}>{t === "en" ? "Skip" : "Lewati"}</Btn>
          <Btn size="lg" onClick={() => setStep(5)} style={{ flex: 2 }} disabled={!recording && elapsed === 0}>
            {t === "en" ? "Submit" : "Kirim"}
          </Btn>
        </div>
        <style>{`@keyframes pulseRec { 0%,100% { box-shadow: 0 0 0 12px rgba(255,107,92,0.18), var(--lr-shadow-lg) } 50% { box-shadow: 0 0 0 22px rgba(255,107,92,0.08), var(--lr-shadow-lg) } }`}</style>
      </Screen>
    );
  }

  const cur = questions[step];
  const sel = answers[step];
  return (
    <Screen padBottom={0} style={{ display: "flex", flexDirection: "column", minHeight: 874 }}>
      <div style={{ height: 60 }}/>
      <div style={{ padding: "0 24px" }}>
        <ProgressBar value={((step + 1) / 5) * 100}/>
        <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 8, fontWeight: 600 }}>
          {t === "en" ? `Question ${step + 1} of 5` : `Soal ${step + 1} dari 5`}
        </div>
      </div>
      <div style={{ flex: 1, padding: "32px 24px" }}>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, margin: 0, lineHeight: 1.3, letterSpacing: -0.2 }}>
          {cur.q}
        </h2>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
          {cur.opts.map((opt, i) => {
            const on = sel === i;
            return (
              <button key={i} onClick={() => {
                const next = [...answers]; next[step] = i; setAnswers(next);
              }} style={{
                textAlign: "left", padding: "16px 18px", borderRadius: 14,
                background: on ? "var(--lr-primary-50)" : "var(--lr-bg-elev)",
                border: `1.5px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line)"}`,
                fontSize: 15, fontWeight: 600, color: "var(--lr-ink)",
                fontFamily: "inherit", cursor: "pointer", display: "flex", alignItems: "center", gap: 12,
                transition: "all 0.15s",
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  border: `2px solid ${on ? "var(--lr-primary-600)" : "var(--lr-line-strong)"}`,
                  background: on ? "var(--lr-primary-600)" : "transparent",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>{on && <Icon name="check" size={14} color="white" strokeWidth={3}/>}</span>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ padding: "0 24px 40px" }}>
        <Btn full size="lg" disabled={sel == null} onClick={() => setStep(step + 1)}>
          {step < 3 ? (t === "en" ? "Next" : "Lanjut") : (t === "en" ? "Continue" : "Lanjut ke Speaking")}
        </Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenSplash, ScreenWelcome, ScreenPlacement });
