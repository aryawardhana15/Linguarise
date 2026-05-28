// LinguaRise — Pricing & Profile

const ScreenPricing = ({ t, plan, onScreen, onPlan }) => {
  const [yearly, setYearly] = React.useState(false);
  const plans = [
    { id: "free", name: "Free", price: 0, color: "var(--lr-ink-3)", feats: [t === "en" ? "Connect 3×/day" : "Connect 3×/hari", "AI Learn 5×/day", t === "en" ? "Group calls only" : "Group call saja", t === "en" ? "Ads supported" : "Ada iklan"] },
    { id: "basic", name: "Basic", price: 75, color: "var(--lr-primary-400)", feats: [t === "en" ? "Connect unlimited" : "Connect unlimited", "AI Learn full", "Grammar Check", "No Ads"] },
    { id: "advanced", name: "Advanced", price: 175, color: "var(--lr-primary-600)", badge: t === "en" ? "Best Value" : "Terbaik", feats: [t === "en" ? "Everything in Basic" : "Semua Basic", t === "en" ? "3 Career Sims" : "3 Career Sim", "2× ProSpeak", t === "en" ? "Custom matching" : "Custom matching", "LinguaScore full"] },
    { id: "pro", name: "Pro", price: 375, color: "var(--lr-ink)", badge: t === "en" ? "Most Popular" : "Paling Populer", feats: [t === "en" ? "Everything in Advanced" : "Semua Advanced", t === "en" ? "Sim unlimited" : "Sim unlimited", "8× ProSpeak", "Session Replay", t === "en" ? "Priority match" : "Priority match"] },
  ];
  const fmt = (n) => n === 0 ? "0" : n.toLocaleString("id-ID");

  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("profile")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="close" size={18}/></button>}
        title={t === "en" ? "Plans" : "Paket"}
        transparent
      />
      <div style={{ padding: "8px var(--lr-pad-screen) 0", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 999, background: "var(--lr-primary-50)", color: "var(--lr-primary-700)", fontSize: 11, fontWeight: 700 }}>
          <Icon name="sparkle" size={12} color="var(--lr-primary-600)"/>
          {t === "en" ? "7-day free trial included" : "7 hari gratis trial"}
        </div>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 28, fontWeight: 600, marginTop: 12, letterSpacing: -0.5, lineHeight: 1.2 }}>
          {t === "en" ? "Find your level. Find your pace." : "Pilih ritmemu. Pilih targetmu."}
        </h2>
        {/* Toggle */}
        <div style={{ display: "inline-flex", marginTop: 18, padding: 4, background: "var(--lr-bg-elev)", borderRadius: 999, boxShadow: "var(--lr-shadow-sm)", border: "0.5px solid var(--lr-line)" }}>
          <button onClick={() => setYearly(false)} style={{ padding: "8px 18px", borderRadius: 999, border: "none", background: !yearly ? "var(--lr-ink)" : "transparent", color: !yearly ? "white" : "var(--lr-ink-2)", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{t === "en" ? "Monthly" : "Bulanan"}</button>
          <button onClick={() => setYearly(true)} style={{ padding: "8px 18px", borderRadius: 999, border: "none", background: yearly ? "var(--lr-ink)" : "transparent", color: yearly ? "white" : "var(--lr-ink-2)", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}>
            {t === "en" ? "Yearly" : "Tahunan"}
            <span style={{ fontSize: 9, fontWeight: 800, padding: "2px 6px", borderRadius: 999, background: "var(--lr-accent)", color: "var(--lr-ink)" }}>−20%</span>
          </button>
        </div>
      </div>

      {/* Plan cards */}
      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 12 }}>
        {plans.map(p => {
          const cur = plan === p.id;
          const featured = p.id === "advanced";
          return (
            <div key={p.id} style={{
              background: featured ? "var(--lr-ink)" : "var(--lr-bg-elev)",
              color: featured ? "white" : "var(--lr-ink)",
              borderRadius: "var(--lr-radius-lg)", padding: 20,
              border: featured ? "1.5px solid var(--lr-primary-600)" : "0.5px solid var(--lr-line)",
              boxShadow: featured ? "var(--lr-shadow-lg)" : "var(--lr-shadow-sm)",
              position: "relative",
            }}>
              {p.badge && (
                <div style={{ position: "absolute", top: -10, right: 16, background: "var(--lr-accent)", color: "var(--lr-ink)", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: 999, letterSpacing: 0.3, textTransform: "uppercase" }}>{p.badge}</div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600 }}>{p.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 }}>
                    <span style={{ fontSize: 14, opacity: 0.7 }}>Rp</span>
                    <span style={{ fontFamily: "var(--lr-font-display)", fontSize: 32, fontWeight: 700, letterSpacing: -1 }}>{fmt(yearly ? p.price * 12 * 0.8 : p.price)}</span>
                    <span style={{ fontSize: 13, opacity: 0.7 }}>/{yearly ? (t === "en" ? "yr" : "thn") : (t === "en" ? "mo" : "bln")}</span>
                  </div>
                </div>
                {cur && <Pill bg="rgba(255,255,255,0.18)" color={featured ? "white" : "var(--lr-primary-700)"} size="sm" style={featured ? {} : { background: "var(--lr-primary-50)" }}>{t === "en" ? "Current" : "Aktif"}</Pill>}
              </div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
                {p.feats.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, opacity: 0.92 }}>
                    <Icon name="check" size={14} color={featured ? "var(--lr-accent)" : "var(--lr-success)"} strokeWidth={2.5}/>
                    {f}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16 }}>
                {cur ? (
                  <Btn variant={featured ? "ghost" : "soft"} full size="md" disabled style={featured ? { borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.7)" } : {}}>{t === "en" ? "Current plan" : "Paket aktif"}</Btn>
                ) : (
                  <Btn variant={featured ? "accent" : "primary"} full size="md" onClick={() => onPlan(p.id)} trailing={<Icon name="arrowR" size={14}/>}>
                    {p.id === "free" ? (t === "en" ? "Downgrade" : "Turunkan") : (t === "en" ? `Choose ${p.name}` : `Pilih ${p.name}`)}
                  </Btn>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 0", textAlign: "center", fontSize: 11, color: "var(--lr-ink-3)", lineHeight: 1.5 }}>
        {t === "en" ? "Cancel anytime · Sertifikasi ISO 27001 · UU PDP compliant" : "Batalkan kapan saja · Sertifikasi ISO 27001 · UU PDP"}
      </div>
    </Screen>
  );
};

// ── Profile screen ─────────────────────────────────────────────────
const ScreenProfile = ({ t, plan, onScreen }) => {
  const planLabel = { free: "Free", basic: "Basic", advanced: "Advanced", pro: "Pro" }[plan];
  const planColor = plan === "pro" ? "var(--lr-ink)" : plan === "advanced" ? "var(--lr-primary-600)" : plan === "basic" ? "var(--lr-primary-400)" : "var(--lr-ink-3)";

  return (
    <Screen padBottom={104}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        title={t === "en" ? "Profile" : "Profil"}
        right={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="settings" size={18}/></button>}
        transparent
      />
      <div style={{ padding: "8px var(--lr-pad-screen) 0", display: "flex", alignItems: "center", gap: 14 }}>
        <Avatar name="Aulia Rahma" size={68} hue={280}/>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.3 }}>Aulia Rahma</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
            <CEFRBadge level="B2" size="sm"/>
            <span style={{ fontSize: 12, color: "var(--lr-ink-3)" }}>· LPDP applicant</span>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 4, marginTop: 6, padding: "3px 8px", borderRadius: 999, background: planColor, color: "white", fontSize: 10, fontWeight: 800, letterSpacing: 0.3, textTransform: "uppercase" }}>
            {plan === "pro" && <Icon name="crown" size={11} color="var(--lr-accent)"/>}
            {planLabel}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        {[
          { l: t === "en" ? "Sessions" : "Sesi", v: 87 },
          { l: t === "en" ? "Hours" : "Jam", v: "24h" },
          { l: t === "en" ? "Streak" : "Streak", v: 12 },
        ].map(s => (
          <Card key={s.l} padding={12}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 22, fontWeight: 600, letterSpacing: -0.4 }}>{s.v}</div>
            <div style={{ fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.3, marginTop: 2 }}>{s.l}</div>
          </Card>
        ))}
      </div>

      {/* Pro upsell card if not pro */}
      {plan !== "pro" && (
        <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
          <Card padding={16} onClick={() => onScreen("pricing")} style={{
            background: "linear-gradient(135deg, var(--lr-ink) 0%, var(--lr-primary-700) 100%)",
            color: "white", border: "none", boxShadow: "var(--lr-shadow-lg)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--lr-accent)", color: "var(--lr-ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name="crown" size={22}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 800 }}>{t === "en" ? "Unlock Career Sim Unlimited" : "Buka Career Sim Unlimited"}</div>
                <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{t === "en" ? "8× ProSpeak · LinguaScore PDF · Replay" : "8× ProSpeak · LinguaScore PDF · Replay"}</div>
              </div>
              <Icon name="chevR" size={18} color="white"/>
            </div>
          </Card>
        </div>
      )}

      {/* Menu */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <Card padding={0}>
          {[
            { ic: "chart", l: "LinguaScore", screen: "score" },
            { ic: "headset", l: "ProSpeak Sessions", badge: plan === "pro" ? "8 left" : null },
            { ic: "book", l: t === "en" ? "Vocabulary Book" : "Vocabulary Book", count: "142" },
            { ic: "badge", l: t === "en" ? "Achievements" : "Achievement", count: "9/24" },
            { ic: "shield", l: "SafeTalk Settings" },
            { ic: "crown", l: t === "en" ? "Subscription" : "Langganan", screen: "pricing", count: planLabel },
          ].map((m, i, a) => (
            <div key={m.l} onClick={() => m.screen && onScreen(m.screen)} style={{
              display: "flex", alignItems: "center", gap: 12, padding: "14px 16px",
              borderBottom: i < a.length - 1 ? "0.5px solid var(--lr-line)" : "none",
              cursor: m.screen ? "pointer" : "default",
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-primary-50)", color: "var(--lr-primary-600)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={m.ic} size={18}/>
              </div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 600 }}>{m.l}</div>
              {m.count && <span style={{ fontSize: 12, color: "var(--lr-ink-3)", fontWeight: 600 }}>{m.count}</span>}
              {m.badge && <Pill size="sm" bg="var(--lr-success)" color="white">{m.badge}</Pill>}
              <Icon name="chevR" size={14} color="var(--lr-ink-3)"/>
            </div>
          ))}
        </Card>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenPricing, ScreenProfile });
