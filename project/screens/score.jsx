// LinguaRise — LinguaScore detail (radar + dimensions)

const RadarChart = ({ values, size = 240, labels }) => {
  const cx = size / 2, cy = size / 2;
  const r = size / 2 - 32;
  const n = values.length;
  const point = (i, v) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    const dist = (v / 100) * r;
    return [cx + Math.cos(a) * dist, cy + Math.sin(a) * dist];
  };
  const polyPts = values.map((v, i) => point(i, v).join(",")).join(" ");
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[20, 40, 60, 80, 100].map(g => (
        <polygon key={g} fill="none" stroke="var(--lr-line-strong)" strokeWidth={0.5}
          points={values.map((_, i) => point(i, g).join(",")).join(" ")}/>
      ))}
      {values.map((_, i) => {
        const [x, y] = point(i, 100);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--lr-line-strong)" strokeWidth={0.5}/>;
      })}
      <polygon points={polyPts} fill="rgba(107,63,160,0.25)" stroke="var(--lr-primary-600)" strokeWidth={2}/>
      {values.map((v, i) => {
        const [x, y] = point(i, v);
        return <circle key={i} cx={x} cy={y} r={4} fill="var(--lr-primary-600)" stroke="white" strokeWidth={2}/>;
      })}
      {labels.map((lbl, i) => {
        const [x, y] = point(i, 118);
        return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
          fontSize="10" fontWeight="700" fill="var(--lr-ink-2)" fontFamily="var(--lr-font-ui)">{lbl}</text>;
      })}
    </svg>
  );
};

const ScreenScore = ({ t, onScreen }) => {
  const dims = [
    { l: "Fluency", v: 82, w: 25, c: "var(--lr-success)" },
    { l: "Pronunciation", v: 76, w: 25, c: "var(--lr-warn)" },
    { l: "Vocabulary", v: 72, w: 20, c: "var(--lr-warn)" },
    { l: "Confidence", v: 91, w: 15, c: "var(--lr-success)" },
    { l: "Career", v: 79, w: 15, c: "var(--lr-success)" },
  ];
  return (
    <Screen padBottom={120}>
      <div style={{ paddingTop: 56 }}/>
      <TopBar
        left={<button onClick={() => onScreen("home")} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="chevL" size={18}/></button>}
        title="LinguaScore"
        right={<button style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lr-bg-elev)", border: "none", boxShadow: "var(--lr-shadow-sm)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="share" size={18}/></button>}
        transparent
      />
      <div style={{ padding: "8px var(--lr-pad-screen) 0" }}>
        <Card padding={20}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <ScoreRing value={82} size={120} stroke={11}/>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--lr-success)", letterSpacing: 0.3, textTransform: "uppercase" }}>↑ +6 {t === "en" ? "this week" : "minggu ini"}</div>
              <div style={{ fontFamily: "var(--lr-font-display)", fontSize: 24, fontWeight: 600, marginTop: 4, lineHeight: 1.2 }}>
                {t === "en" ? "Upper-Intermediate" : "Upper-Intermediate"}
              </div>
              <div style={{ fontSize: 12, color: "var(--lr-ink-3)", marginTop: 4 }}>
                {t === "en" ? "Better than 73% at B2" : "Lebih baik dari 73% di B2"}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 12 }}>
            <RadarChart values={dims.map(d => d.v)} labels={dims.map(d => d.l)} size={260}/>
          </div>
        </Card>
      </div>

      <div style={{ padding: "16px var(--lr-pad-screen) 0" }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--lr-ink-2)", letterSpacing: 0.3, textTransform: "uppercase", marginBottom: 10 }}>{t === "en" ? "Dimensions" : "Dimensi"}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {dims.map(d => (
            <Card key={d.l} padding={14}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: d.c, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--lr-font-display)", fontSize: 18, fontWeight: 700 }}>{d.v}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{d.l}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, color: "var(--lr-ink-3)" }}>{d.w}% {t === "en" ? "weight" : "bobot"}</span>
                  </div>
                  <div style={{ marginTop: 6 }}><ProgressBar value={d.v} color={d.c} height={5}/></div>
                </div>
                <Icon name="chevR" size={16} color="var(--lr-ink-3)"/>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px var(--lr-pad-screen) 0", display: "flex", gap: 10 }}>
        <Btn variant="ghost" size="md" style={{ flex: 1 }} leading={<Icon name="download" size={16}/>}>PDF Report</Btn>
        <Btn variant="primary" size="md" style={{ flex: 1 }} trailing={<Icon name="arrowR" size={14}/>} onClick={() => onScreen("pricing")}>{t === "en" ? "Unlock Pro" : "Pro Unlock"}</Btn>
      </div>
    </Screen>
  );
};

Object.assign(window, { ScreenScore, RadarChart });
