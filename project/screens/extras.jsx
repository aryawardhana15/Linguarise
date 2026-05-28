// LinguaRise — ProSpeak (tutor 1-on-1) + Notifications + Settings + Achievements

const ScreenProSpeak = ({ t, onScreen }) => {
  const tutors = [
    { name: "Sarah Mitchell", flag: "🇺🇸", spec: "Career · Interview", rating: 4.9, reviews: 248, price: 95, online: true, hue: 30, badge: "TEFL" },
    { name: "James O'Connor", flag: "🇬🇧", spec: "Business English", rating: 4.8, reviews: 312, price: 110, online: false, hue: 220, badge: "CELTA" },
    { name: "Aiko Tanaka", flag: "🇯🇵", spec: "Academic · IELTS", rating: 5.0, reviews: 156, price: 88, online: true, hue: 340, badge: "DELTA" },
    { name: "Mark Bennett", flag: "🇨🇦", spec: "Conversation · Casual", rating: 4.7, reviews: 421, price: 75, online: true, hue: 140 },
  ];
  return (
    <Screen padBottom={104}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("profile")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="ProSpeak"
        right={<Pill bg="var(--lr-primary-50)" color="var(--lr-primary-700)" size="sm"><Icon name="headset" size={11}/> 8 left</Pill>}
        transparent
      />
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <h2 style={{ fontFamily: "var(--lr-font-display)", fontSize: 24, fontWeight: 600, margin: 0, letterSpacing: -0.4, lineHeight: 1.2 }}>{t === "en" ? "Book a certified tutor" : "Booking tutor bersertifikat"}</h2>
        <div style={{ fontSize: 13, color: "var(--lr-ink-2)", marginTop: 6 }}>{t === "en" ? "1-on-1 · 25 or 50 min · Native speakers." : "1-on-1 · 25 atau 50 menit · Native speaker."}</div>
      </div>

      {/* Filter chips */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", gap: 6, overflowX: "auto" }}>
        {[t === "en" ? "All" : "Semua", "Career", "Academic", "IELTS", "Conversation", t === "en" ? "Online now" : "Online"].map((c, i) => (
          <button key={c} style={{
            padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
            background: i === 0 ? "var(--lr-ink)" : "var(--lr-bg-elev)", color: i === 0 ? "white" : "var(--lr-ink-2)",
            border: "0.5px solid var(--lr-line)", cursor: "pointer", fontFamily: "inherit",
          }}>{c}</button>
        ))}
      </div>

      {/* Tutor list */}
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {tutors.map(tu => (
          <Card key={tu.name} padding={14}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ position: "relative" }}>
                <Avatar name={tu.name} size={56} hue={tu.hue}/>
                {tu.online && <span style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderRadius: "50%", background: "var(--lr-success)", border: "2px solid white" }}/>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700 }}>{tu.name}</span>
                  <span style={{ fontSize: 14 }}>{tu.flag}</span>
                  {tu.badge && <Pill size="sm" bg="var(--lr-primary-50)" color="var(--lr-primary-700)">{tu.badge}</Pill>}
                </div>
                <div style={{ fontSize: 12, color: "var(--lr-ink-2)", marginTop: 3 }}>{tu.spec}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 6, fontSize: 11, color: "var(--lr-ink-3)" }}>
                  <Icon name="starF" size={12} color="var(--lr-accent)"/>
                  <b style={{ color: "var(--lr-ink)" }}>{tu.rating}</b>
                  <span>· {tu.reviews} {t === "en" ? "reviews" : "ulasan"}</span>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 18, fontWeight: 600, letterSpacing: -0.3 }}>Rp{tu.price}K</div>
                <div style={{ fontSize: 10, color: "var(--lr-ink-3)" }}>/ 25 min</div>
                <Btn variant="primary" size="sm" style={{ marginTop: 8 }}>{t === "en" ? "Book" : "Booking"}</Btn>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Screen>
  );
};

const ScreenNotifications = ({ t, onScreen }) => {
  const groups = [
    { l: t === "en" ? "Today" : "Hari Ini", items: [
      { ic: "connect", color: "var(--lr-primary-600)", t: t === "en" ? "Maya Chen wants to connect" : "Maya Chen ingin terhubung", s: t === "en" ? "Match score 93% · 2m ago" : "Match 93% · 2 mnt lalu", unread: true },
      { ic: "flame", color: "var(--lr-accent-2)", t: t === "en" ? "Don't break your streak!" : "Jangan putus streak!", s: t === "en" ? "12 days · 6h until reset" : "12 hari · 6 jam ke reset", unread: true },
      { ic: "sparkle", color: "var(--lr-accent)", t: t === "en" ? "Weekly Challenge: 5 sims" : "Tantangan Mingguan: 5 sim", s: t === "en" ? "3/5 done · reward: free ProSpeak" : "3/5 selesai · reward: ProSpeak gratis" },
    ]},
    { l: t === "en" ? "Yesterday" : "Kemarin", items: [
      { ic: "badge", color: "var(--lr-accent)", t: t === "en" ? "Achievement unlocked: 100 sessions" : "Pencapaian: 100 sesi", s: t === "en" ? "Centurion badge added to profile" : "Badge Centurion ditambahkan" },
      { ic: "chart", color: "var(--lr-success)", t: t === "en" ? "Weekly report ready" : "Laporan mingguan siap", s: t === "en" ? "LinguaScore +6 · view PDF" : "LinguaScore +6 · lihat PDF" },
    ]},
    { l: t === "en" ? "This Week" : "Minggu Ini", items: [
      { ic: "crown", color: "var(--lr-primary-600)", t: t === "en" ? "Pro is 50% off until Sunday" : "Pro diskon 50% sampai Minggu", s: t === "en" ? "Promo · 3 days left" : "Promo · 3 hari lagi" },
    ]},
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("home")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title={t === "en" ? "Notifications" : "Notifikasi"}
        right={<button style={{ background: "transparent", border: "none", color: "var(--lr-primary-600)", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t === "en" ? "Mark all" : "Tandai semua"}</button>}
        transparent
      />
      {groups.map(g => (
        <div key={g.l} style={{ padding: "8px var(--lr-pad-screen) 0" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8 }}>{g.l}</div>
          <Card padding={0}>
            {g.items.map((it, i, a) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "14px 16px", borderBottom: i < a.length - 1 ? "0.5px solid var(--lr-line)" : "none", position: "relative" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: it.color + "1a", color: it.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Icon name={it.ic} size={18}/>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--lr-ink)" }}>{it.t}</div>
                  <div style={{ fontSize: 11, color: "var(--lr-ink-3)", marginTop: 2 }}>{it.s}</div>
                </div>
                {it.unread && <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--lr-primary-600)", marginTop: 6 }}/>}
              </div>
            ))}
          </Card>
        </div>
      ))}
    </Screen>
  );
};

const ScreenSettings = ({ t, onScreen }) => {
  const sections = [
    { title: "Account", items: [
      { l: "Email", v: "aulia.r@email.com" },
      { l: t === "en" ? "Phone" : "No. Telepon", v: "+62 812 ••• 5432" },
      { l: "Password", v: "•••••••••" },
      { l: t === "en" ? "Linked accounts" : "Akun terhubung", v: "Google, Apple" },
    ]},
    { title: "Preferences", items: [
      { l: t === "en" ? "App language" : "Bahasa aplikasi", v: t === "en" ? "English" : "Bahasa Indonesia" },
      { l: "Dark Mode", toggle: false },
      { l: t === "en" ? "Notifications" : "Notifikasi", v: "Granular" },
    ]},
    { title: "Privacy", items: [
      { l: t === "en" ? "Anonymous profile" : "Profil anonim", toggle: false },
      { l: t === "en" ? "Allow recordings" : "Izinkan rekaman", toggle: true },
      { l: t === "en" ? "Online status" : "Status online", toggle: true },
      { l: "Two-factor auth", v: "On" },
      { l: "Biometric", v: "Face ID" },
    ]},
    { title: "Support", items: [
      { l: "Help Center" }, { l: t === "en" ? "Report a problem" : "Laporkan masalah" }, { l: "FAQ" },
    ]},
    { title: t === "en" ? "Danger zone" : "Zona berbahaya", danger: true, items: [
      { l: t === "en" ? "Log out" : "Keluar" }, { l: t === "en" ? "Delete account" : "Hapus akun" },
    ]},
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => onScreen("profile")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title={t === "en" ? "Settings" : "Pengaturan"} transparent/>
      {sections.map(sec => (
        <div key={sec.title} style={{ padding: "0 var(--lr-pad-screen)", marginBottom: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: sec.danger ? "var(--lr-accent-2)" : "var(--lr-ink-3)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 8, padding: "0 6px" }}>{sec.title}</div>
          <Card padding={0}>
            {sec.items.map((it, i, a) => (
              <div key={i} style={{ display: "flex", alignItems: "center", padding: "14px 16px", borderBottom: i < a.length - 1 ? "0.5px solid var(--lr-line)" : "none" }}>
                <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: sec.danger ? "var(--lr-accent-2)" : "var(--lr-ink)" }}>{it.l}</div>
                {it.v && <span style={{ fontSize: 12, color: "var(--lr-ink-3)", marginRight: 8 }}>{it.v}</span>}
                {it.toggle !== undefined ? (
                  <span style={{ width: 40, height: 24, borderRadius: 999, background: it.toggle ? "var(--lr-primary-600)" : "var(--lr-line-strong)", position: "relative", display: "inline-block", transition: "background 0.2s" }}>
                    <span style={{ position: "absolute", top: 2, left: it.toggle ? 18 : 2, width: 20, height: 20, borderRadius: "50%", background: "white", boxShadow: "var(--lr-shadow-sm)", transition: "left 0.2s" }}/>
                  </span>
                ) : <Icon name="chevR" size={14} color="var(--lr-ink-3)"/>}
              </div>
            ))}
          </Card>
        </div>
      ))}
    </Screen>
  );
};

const ScreenAchievements = ({ t, onScreen }) => {
  const cats = [
    { id: "speak", l: "Speaking", icon: "mic", color: "var(--lr-primary-600)" },
    { id: "listen", l: "Listening", icon: "headset", color: "#3D8C63" },
    { id: "write", l: "Writing", icon: "book", color: "#D97757" },
    { id: "career", l: "Career", icon: "sim", color: "#3F4FA0" },
  ];
  const badges = [
    { l: "First Words", desc: t === "en" ? "Complete first session" : "Selesaikan sesi pertama", unlocked: true, color: "var(--lr-primary-600)", ic: "mic" },
    { l: "100 Sessions", desc: t === "en" ? "Centurion" : "Centurion", unlocked: true, color: "var(--lr-accent)", ic: "badge" },
    { l: "30 Day Streak", desc: t === "en" ? "Consistent" : "Konsisten", unlocked: true, color: "var(--lr-accent-2)", ic: "flame" },
    { l: "B2 Achiever", desc: t === "en" ? "Reach upper-int." : "Capai upper-int.", unlocked: true, color: "#3F4FA0", ic: "star" },
    { l: "Polyglot", desc: t === "en" ? "3 languages" : "3 bahasa", unlocked: false, color: "var(--lr-ink-3)", ic: "globe" },
    { l: "Pitch Master", desc: t === "en" ? "Pitch ≥ 90" : "Pitch ≥ 90", unlocked: false, color: "var(--lr-ink-3)", ic: "sparkle" },
    { l: "Marathon", desc: t === "en" ? "100h spoken" : "100 jam bicara", unlocked: false, color: "var(--lr-ink-3)", ic: "clock" },
    { l: "Perfect Week", desc: t === "en" ? "7 days, all dims ≥ 80" : "7 hari, semua ≥ 80", unlocked: false, color: "var(--lr-ink-3)", ic: "shield" },
    { l: "Helper", desc: t === "en" ? "10 partner thanks" : "10 ucapan terima kasih", unlocked: false, color: "var(--lr-ink-3)", ic: "connect" },
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar left={<button onClick={() => onScreen("profile")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>} title={t === "en" ? "Achievements" : "Pencapaian"} transparent/>
      <div style={{ padding: "0 var(--lr-pad-screen)" }}>
        <Card padding={18} style={{ background: "linear-gradient(135deg, var(--lr-primary-600), var(--lr-primary-700))", color: "white", border: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 40, fontWeight: 600, letterSpacing: -1 }}>9<span style={{ opacity: 0.5, fontSize: 24 }}>/24</span></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{t === "en" ? "Badges earned" : "Badge diperoleh"}</div>
              <div style={{ fontSize: 11, opacity: 0.85, marginTop: 4 }}>{t === "en" ? "3 close to unlock" : "3 hampir terbuka"}</div>
              <div style={{ marginTop: 8 }}><ProgressBar value={9 / 24 * 100} color="var(--lr-accent)" track="rgba(255,255,255,0.2)" height={5}/></div>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "flex", gap: 6, overflowX: "auto" }}>
        {[t === "en" ? "All" : "Semua", ...cats.map(c => c.l), "Social"].map((c, i) => (
          <button key={c} style={{
            padding: "7px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, whiteSpace: "nowrap",
            background: i === 0 ? "var(--lr-ink)" : "var(--lr-bg-elev)", color: i === 0 ? "white" : "var(--lr-ink-2)",
            border: "0.5px solid var(--lr-line)", cursor: "pointer", fontFamily: "inherit",
          }}>{c}</button>
        ))}
      </div>
      <div style={{ padding: "16px var(--lr-pad-screen) 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
        {badges.map((b, i) => (
          <Card key={i} padding={12} style={{ textAlign: "center", filter: b.unlocked ? "none" : "grayscale(1)", opacity: b.unlocked ? 1 : 0.6 }}>
            <div style={{ width: 56, height: 56, margin: "0 auto", borderRadius: "50%", background: b.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: b.unlocked ? "0 6px 16px " + b.color + "55" : "none" }}>
              <Icon name={b.ic} size={26} color="white"/>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 8, lineHeight: 1.3 }}>{b.l}</div>
            <div style={{ fontSize: 10, color: "var(--lr-ink-3)", marginTop: 2, lineHeight: 1.3 }}>{b.desc}</div>
            {!b.unlocked && <div style={{ marginTop: 6 }}><Icon name="lock" size={12} color="var(--lr-ink-3)"/></div>}
          </Card>
        ))}
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenProSpeak, ScreenNotifications, ScreenSettings, ScreenAchievements });
