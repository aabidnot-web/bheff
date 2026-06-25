const W=[{id:"instagram",label:"Instagram",category:"social",domain:"instagram.com",confession:"I am voluntarily comparing my real life to fake internet lives because I have given up"},{id:"x",label:"X / Twitter",category:"social",domain:"x.com",confession:"I am desperately seeking outrage because my own life feels too empty right now"},{id:"youtube",label:"YouTube",category:"social",domain:"youtube.com",confession:"I am choosing to rot my brain with endless videos instead of doing anything meaningful"},{id:"reddit",label:"Reddit",category:"social",domain:"reddit.com",confession:"I am hiding from reality by reading the useless opinions of absolute strangers"},{id:"linkedin",label:"LinkedIn",category:"social",domain:"linkedin.com",confession:"I am pretending to be productive while secretly feeling entirely inadequate"},{id:"tiktok",label:"TikTok",category:"social",domain:"tiktok.com",confession:"I am surrendering my remaining attention span to an algorithm that thinks I am an idiot"},{id:"snapchat",label:"Snapchat",category:"social",domain:"snapchat.com",confession:"I am sending pointless images to people who do not actually care about me"}],ie=["instagram.com","x.com","twitter.com","youtube.com","reddit.com","linkedin.com","tiktok.com","snapchat.com"],T={config:"ratmode.config",sessions:"ratmode.sessions",history:"ratmode.history",badges:"ratmode.badges"},U={confessionPhrase:"I am willingly wasting my time right now",roastIntervalMinutes:.5,geminiApiKey:void 0,geminiModel:"gemini-3.1-pro-preview",roastsEnabled:!0,roastMode:"local"},te={unlocked:[],currentStreakDays:0,bestStreakDays:0,lastConfessionDate:null},K=[{id:"first-confession",label:"First Confession",description:"Completed 1 session"},{id:"repeat-offender",label:"Repeat Offender",description:"3 confessions in one day"},{id:"ten-minute-tragedy",label:"Ten Minute Tragedy",description:"Session over 10 min or 1+ roast survived"},{id:"basement-royalty",label:"Basement Royalty",description:"100+ lifetime minutes"},{id:"honest-rat",label:"Honest Rat",description:"5-day confession streak"}],oe="ratmode-extension-root",se=2147483647,ce=.5,le=180,de=["Are we having fun staring at other people's highlight reels while your actual life sits in the background gathering dust?","Brain rot level: critical. You are voluntarily trading your precious dopamine and focus for corporate ads and toxic rage bait.","The algorithm designed this endless loop for children, yet here you are, an adult, trapped like a hamster on a digital wheel.","Your attention span is now shorter than a goldfish's. The tech executives are literally printing money off your cognitive decay.","Still scrolling? Impressive commitment to your own downfall. Close the tab before your last remaining brain cell self-destructs.","Your dreams called. RatMode had to tell them you were busy seeking cheap approval from strangers.","This isn't a quick break. This is a complete surrender of your day. Are you proud of this performance?","Every swipe is another minute you'll never get back. How does it feel to watch your lifetime slip away in real time?"],pe=["Ah, another masterclass in active avoidance. You're pretending this is 'research' or 'planning' to avoid doing the actual work.","Your deadline is sprinting toward you while you are doing literally anything else. Stop lying to yourself and open the editor.","Lying to yourself that 'polishing the layout' is work is your favorite hobby. Put down the paintbrush and write the core logic.","Your client and stakeholders expect results, but what they will actually get is another pathetic excuse about not having enough time.","You've been planning this portfolio/project for months. Actually build it instead of endlessly organizing your tasks.","Procrastination is just fear of failure in a fancy suit. Stop running away from the challenge and start typing.","Another checkpoint of voluntary delay. No one is coming to save you from your own lack of self-discipline.","Your future self is going to look back at this exact moment with profound disappointment. Prove them wrong and do the work now."],ue=`
  @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");

  :host {
    all: initial;
    color-scheme: dark;
    --ink: #f4f0e8;
    --muted: #aaa59a;
    --dim: #777268;
    --paper: rgba(11, 11, 9, 0.82);
    --paper-strong: rgba(16, 16, 13, 0.94);
    --line: rgba(244, 240, 232, 0.18);
    --line-strong: rgba(244, 240, 232, 0.36);
    --acid: #c6ff4d;
    --acid-ink: #111407;
    --danger: #ff7058;
    --shadow: #000000;
    --display-font: "Instrument Serif", Georgia, serif;
    --ui-font: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-family: var(--ui-font);
    inset: 0;
    pointer-events: none;
    position: fixed;
    z-index: ${se};
  }

  *, *::before, *::after { box-sizing: border-box; }
  button, input { font: inherit; }

  ::selection {
    color: var(--acid-ink);
    background: var(--acid);
  }

  /* ── Gate (fullscreen blocker) ── */

  .gate {
    align-items: center;
    background:
      radial-gradient(circle at top left, rgba(198, 255, 77, 0.06), transparent 34rem),
      linear-gradient(135deg, rgba(5, 5, 5, 0.98), rgba(8, 8, 6, 0.98));
    color: var(--ink);
    display: flex;
    flex-direction: column;
    inset: 0;
    justify-content: center;
    overflow-y: auto;
    padding: 24px;
    pointer-events: auto;
    position: fixed;
  }

  .gate-inner {
    max-width: 680px;
    width: 100%;
  }

  .gate-eyebrow {
    color: var(--acid);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    margin: 0 0 8px;
    text-transform: uppercase;
  }

  .gate-title {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: clamp(3.2rem, 9vw, 5.6rem);
    font-weight: 400;
    font-style: italic;
    letter-spacing: -0.02em;
    line-height: 0.92;
    margin: 0 0 16px;
  }

  .gate-copy {
    color: var(--muted);
    font-size: 15px;
    line-height: 1.55;
    margin: 0 0 28px;
    max-width: 480px;
  }

  .gate-copy strong {
    color: var(--ink);
  }

  /* ── Site Picker ── */

  .site-picker { margin-bottom: 12px; }

  .site-category {
    margin-bottom: 20px;
  }

  .site-category-label {
    color: var(--dim);
    display: block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .site-grid {
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .site-card {
    align-items: center;
    background: rgba(244, 240, 232, 0.04);
    border: 1px solid var(--line);
    color: var(--ink);
    cursor: pointer;
    display: flex;
    gap: 8px;
    padding: 12px 14px;
    transition: border-color 0.18s, background 0.18s, transform 0.18s;
    animation: card-enter 0.4s ease both;
  }

  .site-card:nth-child(1) { animation-delay: 0.02s; }
  .site-card:nth-child(2) { animation-delay: 0.06s; }
  .site-card:nth-child(3) { animation-delay: 0.10s; }
  .site-card:nth-child(4) { animation-delay: 0.14s; }
  .site-card:nth-child(5) { animation-delay: 0.18s; }
  .site-card:nth-child(6) { animation-delay: 0.22s; }
  .site-card:nth-child(7) { animation-delay: 0.26s; }

  @keyframes card-enter {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .site-card:hover {
    background: rgba(198, 255, 77, 0.08);
    border-color: var(--acid);
    transform: translateY(-1px);
  }

  .site-card:active {
    transform: translateY(0);
  }

  .site-name {
    font-size: 13px;
    font-weight: 700;
  }

  .site-card-selected {
    background: rgba(198, 255, 77, 0.12);
    border-color: var(--acid);
    box-shadow: 4px 4px 0 var(--shadow);
  }

  /* ── Confession Form ── */

  .confession-section {
    animation: fade-in 0.3s ease;
    margin-top: 8px;
  }

  @keyframes fade-in {
    from { opacity: 0; transform: translateY(6px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .back-link {
    background: none;
    border: 0;
    color: var(--dim);
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 0;
    text-transform: uppercase;
  }

  .back-link:hover { color: var(--acid); }

  .confession-title {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: clamp(2.4rem, 7vw, 4rem);
    font-weight: 400;
    line-height: 1;
    margin: 8px 0 12px;
  }

  .phrase {
    background: rgba(198, 255, 77, 0.06);
    border: 1px solid rgba(198, 255, 77, 0.18);
    color: var(--acid);
    display: block;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 0 14px;
    padding: 14px;
    white-space: pre-wrap;
  }

  .input-voice-row {
    display: flex;
    gap: 8px;
    margin-bottom: 10px;
  }

  .confession-input {
    background: rgba(2, 6, 23, 0.88);
    border: 1px solid var(--line-strong);
    color: var(--ink);
    display: block;
    flex: 1;
    font-size: 15px;
    line-height: 1.4;
    outline: none;
    padding: 12px 14px;
    width: 100%;
  }

  .confession-input:focus {
    border-color: var(--acid);
    box-shadow: 0 0 0 2px rgba(198, 255, 77, 0.18);
  }

  .confession-input:disabled {
    cursor: wait;
    opacity: 0.5;
  }

  /* ── Mic Button ── */

  .mic-button {
    align-items: center;
    background: rgba(244, 240, 232, 0.06);
    border: 1px solid var(--line);
    color: var(--muted);
    cursor: pointer;
    display: inline-flex;
    flex: 0 0 auto;
    height: 46px;
    justify-content: center;
    position: relative;
    width: 46px;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
  }

  .mic-button:hover {
    border-color: var(--acid);
    color: var(--acid);
  }

  .mic-active {
    background: rgba(198, 255, 77, 0.12);
    border-color: var(--acid);
    color: var(--acid);
  }

  .mic-pulse {
    animation: pulse-ring 1.4s ease-out infinite;
    border: 2px solid var(--acid);
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @keyframes pulse-ring {
    0% { opacity: 0.6; transform: scale(1); }
    100% { opacity: 0; transform: scale(1.6); }
  }

  .mic-error {
    border-color: var(--danger);
    color: var(--danger);
  }

  /* ── Voice Feedback ── */

  .voice-feedback {
    border: 1px solid var(--line);
    margin-bottom: 10px;
    padding: 10px 12px;
  }

  .voice-match { border-color: var(--acid); }
  .voice-partial { border-color: var(--danger); }

  .voice-label {
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .voice-match .voice-label { color: var(--acid); }
  .voice-partial .voice-label { color: var(--danger); }

  .voice-transcript {
    color: var(--muted);
    font-size: 13px;
    font-style: italic;
    line-height: 1.4;
    margin: 0;
  }

  .voice-hint {
    color: var(--dim);
    font-size: 11px;
    margin: 6px 0 0;
  }

  /* ── Form Row ── */

  .form-row {
    align-items: center;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    margin-top: 4px;
  }

  .status {
    color: var(--dim);
    font-size: 12px;
    line-height: 1.35;
    margin: 0;
  }

  .status-good { color: var(--acid); }

  .warning {
    color: var(--danger);
    font-size: 12px;
    margin: 8px 0 0;
  }

  /* ── Buttons ── */

  .button {
    align-items: center;
    background: var(--acid);
    border: 0;
    box-shadow: 3px 3px 0 var(--shadow);
    color: var(--acid-ink);
    cursor: pointer;
    display: inline-flex;
    font-size: 13px;
    font-weight: 850;
    justify-content: center;
    letter-spacing: 0.02em;
    min-height: 40px;
    padding: 0 18px;
    text-transform: uppercase;
    transition: transform 0.1s, box-shadow 0.1s;
  }

  .button:hover:not(:disabled) {
    transform: translate(-1px, -1px);
    box-shadow: 4px 4px 0 var(--shadow);
  }

  .button:active:not(:disabled) {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0 var(--shadow);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  .button-secondary {
    background: rgba(244, 240, 232, 0.08);
    box-shadow: 2px 2px 0 var(--shadow);
    color: var(--ink);
  }

  .button-secondary:hover:not(:disabled) {
    background: rgba(244, 240, 232, 0.14);
  }

  .button-danger {
    background: var(--danger);
    color: #fff;
  }

  .button-small {
    font-size: 11px;
    min-height: 30px;
    padding: 0 10px;
  }

  /* ── Tracker (floating widget) ── */

  .tracker {
    background: var(--paper-strong);
    border: 1px solid var(--acid);
    bottom: 16px;
    box-shadow: 6px 6px 0 var(--shadow);
    color: var(--ink);
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: min(400px, calc(100vw - 32px));
    min-width: 260px;
    padding: 14px 16px;
    pointer-events: auto;
    position: fixed;
    right: 16px;
    animation: tracker-enter 0.35s ease both;
  }

  @keyframes tracker-enter {
    from { opacity: 0; transform: translateY(20px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .tracker-header {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  .tracker-brand {
    align-items: center;
    display: flex;
    gap: 8px;
  }

  .tracker-mark {
    background: var(--acid);
    color: var(--acid-ink);
    font-size: 10px;
    font-weight: 900;
    height: 22px;
    line-height: 22px;
    text-align: center;
    width: 22px;
  }

  .tracker-title {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin: 0;
  }

  .tracker-meta {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }

  .tracker-timer {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -0.02em;
    margin: 2px 0;
  }

  .tracker-score {
    color: var(--acid);
    font-size: 13px;
    font-weight: 800;
    margin: 0;
  }

  .tracker-badges {
    color: var(--dim);
    font-size: 11px;
    margin: 0;
  }

  .tracker-actions {
    border-top: 1px solid var(--line);
    display: flex;
    gap: 6px;
    padding-top: 8px;
  }

  .tracker-expand {
    background: none;
    border: 0;
    color: var(--dim);
    cursor: pointer;
    font-size: 11px;
    padding: 0;
  }

  .tracker-expand:hover { color: var(--acid); }

  /* ── Roast Log (in tracker) ── */

  .roast-log {
    border-top: 1px solid var(--line);
    display: none;
    max-height: 180px;
    overflow-y: auto;
    padding-top: 8px;
  }

  .roast-log.visible { display: block; }

  .roast-log-entry {
    border-bottom: 1px solid rgba(244, 240, 232, 0.06);
    margin-bottom: 6px;
    padding-bottom: 6px;
  }

  .roast-log-text {
    color: var(--muted);
    font-size: 12px;
    line-height: 1.4;
    margin: 0;
  }

  .roast-log-meta {
    color: var(--dim);
    font-size: 10px;
    margin: 2px 0 0;
  }

  /* ── Roast Modal ── */

  .modal-backdrop {
    align-items: center;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(6px);
    display: flex;
    inset: 0;
    justify-content: center;
    padding: 20px;
    pointer-events: auto;
    position: fixed;
    animation: backdrop-in 0.2s ease;
  }

  @keyframes backdrop-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .roast-modal {
    background: var(--paper-strong);
    border: 1px solid var(--acid);
    box-shadow: 10px 10px 0 var(--shadow);
    color: var(--ink);
    max-width: 460px;
    padding: 22px;
    width: min(460px, 100%);
    animation: modal-in 0.25s ease;
  }

  @keyframes modal-in {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .modal-head {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .modal-title {
    color: var(--acid);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    margin: 0;
    text-transform: uppercase;
  }

  .close {
    background: transparent;
    border: 0;
    color: var(--dim);
    cursor: pointer;
    font-size: 22px;
    height: 30px;
    line-height: 1;
    padding: 0;
    width: 30px;
  }

  .close:hover { color: var(--ink); }

  .roast-copy {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 20px;
    font-style: italic;
    line-height: 1.4;
    margin: 0 0 16px;
  }

  .roast-source {
    color: var(--dim);
    font-size: 11px;
    margin: 0 0 14px;
  }

  /* ── Exit Report Modal ── */

  .report-modal {
    background: var(--paper-strong);
    border: 1px solid var(--acid);
    box-shadow: 10px 10px 0 var(--shadow);
    color: var(--ink);
    max-height: 80vh;
    max-width: 520px;
    overflow-y: auto;
    padding: 24px;
    width: min(520px, 100%);
    animation: modal-in 0.25s ease;
  }

  .report-title {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 28px;
    font-weight: 400;
    margin: 0 0 4px;
  }

  .report-subtitle {
    color: var(--dim);
    font-size: 12px;
    margin: 0 0 16px;
  }

  .report-stats {
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 16px;
  }

  .report-stat {
    background: rgba(244, 240, 232, 0.04);
    border: 1px solid var(--line);
    padding: 10px 12px;
  }

  .report-stat span {
    color: var(--dim);
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .report-stat strong {
    color: var(--ink);
    font-family: var(--display-font);
    font-size: 22px;
  }

  .report-badges {
    margin-bottom: 16px;
  }

  .report-badge-label {
    color: var(--dim);
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .badge-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  .badge {
    background: rgba(198, 255, 77, 0.1);
    border: 1px solid rgba(198, 255, 77, 0.24);
    color: var(--acid);
    font-size: 11px;
    font-weight: 700;
    padding: 4px 8px;
  }

  .badge-locked {
    background: rgba(244, 240, 232, 0.03);
    border-color: var(--line);
    color: var(--dim);
    opacity: 0.5;
  }

  .report-note {
    margin-bottom: 16px;
  }

  .report-note label {
    color: var(--dim);
    display: block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-bottom: 6px;
    text-transform: uppercase;
  }

  .report-note textarea {
    background: rgba(2, 6, 23, 0.88);
    border: 1px solid var(--line-strong);
    color: var(--ink);
    font-family: var(--ui-font);
    font-size: 13px;
    line-height: 1.4;
    min-height: 60px;
    outline: none;
    padding: 10px;
    resize: vertical;
    width: 100%;
  }

  .report-note textarea:focus {
    border-color: var(--acid);
  }

  .report-actions {
    display: flex;
    gap: 6px;
  }

  .report-actions .button { flex: 1; }

  /* ── Responsive ── */

  @media (max-width: 520px) {
    .gate { padding: 14px; }
    .gate-title { font-size: clamp(2.4rem, 12vw, 3.6rem); }
    .site-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { flex-direction: column; align-items: stretch; }
    .form-row .button { width: 100%; }
    .tracker { bottom: 10px; left: 10px; right: 10px; max-width: none; }
    .report-stats { grid-template-columns: 1fr; }
  }
`;function X(e,t){if(e==="youtube.com"){const n=t.toLowerCase(),o=n==="/"||n===""||n==="/index.html",a=n.startsWith("/shorts"),i=n.startsWith("/feed");return o||a||i}return!0}me();async function me(){const e=fe(window.location.hostname);if(!e||!ge()||document.getElementById(oe))return;const t=W.find(y=>{const M=y.domain.toLowerCase(),A=e.replace("twitter.com","x.com");return M===A||M===e}),n=t?.label??e,o=t?.confession??U.confessionPhrase,a=Pe(),i=he();let f=U,s=null,u=null,d=te,c=!1;const p=await a.get([T.badges]);d=Ne(p[T.badges]),d=Ee(d),await a.set({[T.badges]:d});const g=()=>{document.documentElement.style.setProperty("overflow","hidden","important"),document.body&&document.body.style.setProperty("overflow","hidden","important")},v=()=>{document.documentElement.style.removeProperty("overflow"),document.body&&document.body.style.removeProperty("overflow")},R=()=>{u||s||c||(g(),document.addEventListener("DOMContentLoaded",g),u=be(i.shadow,e,n,o,f,!1,async(y,M)=>{f=y;const A=await Oe(a,e,n,M);document.removeEventListener("DOMContentLoaded",g),v(),u?.remove(),u=null,c=!0,s=xe(i.shadow,a,e,n,A,f,d)}),u.updateConfig(f,!0))};f=await Ie(a),X(e,window.location.pathname)&&R();let C=window.location.pathname;setInterval(()=>{const y=window.location.pathname;y!==C&&(C=y,X(e,y)&&R())},500),window.addEventListener("popstate",()=>{const y=window.location.pathname;y!==C&&(C=y,X(e,y)&&R())}),a.onChanged((y,M)=>{if(M!=="local"||!Object.prototype.hasOwnProperty.call(y,T.config))return;const A=ne(y[T.config]?.newValue);f=A,s?s.updateConfig(A):u&&u.updateConfig(A,!0)}),window.addEventListener("pagehide",()=>{s?.stop()},{once:!0})}function fe(e){const t=e.toLowerCase().replace(/^www\./,"");if(t==="music.youtube.com"||t==="studio.youtube.com")return null;const n=ie.find(o=>t===o||t.endsWith(`.${o}`));return n||null}function ge(){return document.contentType==="text/html"||document.contentType==="application/xhtml+xml"}function he(){const e=document.createElement("div");e.id=oe;const t=e.attachShadow({mode:"open"}),n=document.createElement("style");n.textContent=ue,t.append(n);const o=document.documentElement??document.body;return o?o.append(e):document.addEventListener("DOMContentLoaded",()=>{document.documentElement.append(e)},{once:!0}),{host:e,shadow:t}}function Q(){return typeof window>"u"?null:window.SpeechRecognition??window.webkitSpeechRecognition??null}function ee(e){return e.toLowerCase().replace(/[''`]/g,"'").replace(/[^\w\s']/g,"").replace(/\s+/g," ").trim()}function _(e,t){const n=W.find(i=>i.id===t);if(!n)return!1;const o=ee(e),a=ee(n.confession);return o===a}function ye(e,t){const n=e.trim().split(/\s+/).filter(Boolean),o=t.trim().split(/\s+/).filter(Boolean);let a=0;for(let i=0;i<o.length&&(i<n.length&&n[i].toLowerCase()===o[i].toLowerCase());i++)a++;return a}function be(e,t,n,o,a,i,f){let s=a,u=i,d=!1,c=null,p=!1,g="";const v=o,R=W.find(m=>{const x=m.domain.toLowerCase(),L=t.replace("twitter.com","x.com");return x===L||x===t}),w=R?R.id:"instagram",C=r("section","gate");C.setAttribute("aria-label","RatMode confession gate"),C.setAttribute("aria-modal","true"),C.setAttribute("role","dialog");const y=r("div","gate-inner"),M=r("p","gate-eyebrow","RATMODE — VOLUNTARY ACCOUNTABILITY GATE"),A=r("h1","gate-title",`Confess before ${n}`),F=r("p","gate-copy");F.innerHTML="Type — or <strong>speak aloud</strong> — the sentence below. Paste and drop are blocked. The page stays behind this wall until the confession matches.";const Y=r("code","phrase",v),P=r("div","input-voice-row"),l=document.createElement("input");l.className="confession-input",l.autocomplete="off",l.disabled=!u,l.inputMode="text",l.spellcheck=!1,l.type="text",l.placeholder="Type or speak the confession...",P.append(l);const O=Q()!==null;let k=null;O&&(k=r("button","mic-button"),k.type="button",k.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',P.append(k));const b=r("div","voice-feedback");b.style.display="none";const I=r("span","voice-label"),B=r("p","voice-transcript"),S=r("p","voice-hint","Speak clearly and match the phrase above. Tap mic to retry.");b.append(I,B,S);const z=r("div","form-row"),E=r("span","status",u?"Waiting for an exact match.":"Loading settings..."),N=r("button","button","UNLOCK SESSION");N.disabled=!0,N.type="button",z.append(E,N),y.append(M,A,F,Y,P,b,z),C.append(y),e.append(C);const j=()=>{const m=_(l.value,w);if(Ue(l.value,v),N.disabled=!u||d||!m,!u)E.textContent="Loading settings...",E.className="status";else if(m)E.textContent="Confession accepted. You may enter, but RatMode is watching.",E.className="status status-good";else{const x=ye(l.value,v),L=v.trim().split(/\s+/).filter(Boolean).length;E.textContent=`${x}/${L} exact words matched.`,E.className="status"}},h=m=>{m.preventDefault(),E.textContent="Manual typing only. Paste and drop stay outside."};l.addEventListener("paste",h),l.addEventListener("drop",h),l.addEventListener("dragover",m=>m.preventDefault()),l.addEventListener("beforeinput",m=>{const x=m,L=x.inputType.toLowerCase();(L.includes("paste")||L.includes("drop")||x.dataTransfer)&&h(m)}),l.addEventListener("keydown",m=>{(m.ctrlKey||m.metaKey)&&m.key.toLowerCase()==="v"&&h(m)}),l.addEventListener("input",()=>{g="",b.style.display="none",j()}),l.addEventListener("keyup",m=>{m.key==="Enter"&&!N.disabled&&N.click()}),k&&k.addEventListener("click",()=>{if(p){c?.stop(),p=!1,D();return}const m=Q();if(!m)return;c?.abort();const x=new m;x.continuous=!0,x.interimResults=!0,x.lang="en-US",c=x,p=!0,g="",D(),x.onstart=()=>{p=!0,D()},x.onresult=L=>{let Z="";for(let V=0;V<L.results.length;V++)Z+=L.results[V][0].transcript;g=Z,$(),_(g,w)&&(l.value=v,j())},x.onerror=L=>{p=!1,L.error!=="aborted"&&(I.textContent=`Voice error: ${L.error}`,b.style.display="block",b.className="voice-feedback voice-partial"),D()},x.onend=()=>{p=!1,D()},x.start()});function D(){k&&(p?(k.className="mic-button mic-active",k.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1" fill="currentColor"/></svg><span class="mic-pulse"></span>'):(k.className="mic-button",k.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="17" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>'))}function $(){if(!g){b.style.display="none";return}b.style.display="block",B.textContent=`"${g}"`;const m=_(g,w);p?(I.textContent="Listening...",b.className="voice-feedback",S.style.display="none"):m?(I.textContent="Voice confession accepted!",b.className="voice-feedback voice-match",S.style.display="none"):(I.textContent="Didn't match — try again",b.className="voice-feedback voice-partial",S.style.display="block")}return N.addEventListener("click",()=>{const m=_(l.value,w);N.disabled||d||!m||(d=!0,c?.abort(),j(),f(s,l.value).catch(x=>{d=!1,E.textContent="Could not store session. Local fallback active.",console.warn("[RatMode] Failed to start session.",x),j()}))}),setTimeout(()=>l.focus({preventScroll:!0}),0),j(),{updateConfig(m,x){s=m,u=x,l.disabled=!u,j(),u&&setTimeout(()=>l.focus({preventScroll:!0}),0)},remove(){c?.abort(),C.remove()}}}function xe(e,t,n,o,a,i,f){let s=i,u,d,c=!1,p=!1,g=!1;const v=r("aside","tracker");v.setAttribute("aria-live","polite");const R=r("div","tracker-header"),w=r("div","tracker-brand"),C=r("span","tracker-mark","RM"),y=r("p","tracker-title");y.innerHTML='Rat<span style="font-style: italic; font-weight: 400;">Mode</span> <span style="font-family: var(--ui-font); font-size: 9px; font-weight: 800; color: var(--acid); letter-spacing: 0.08em; text-transform: uppercase; margin-left: 6px; vertical-align: middle;">Active</span>',w.append(C,y);const M=r("p","tracker-meta"),A=r("div","tracker-timer"),F=r("p","tracker-score"),Y=r("p","tracker-badges");R.append(w);const P=r("div","tracker-actions"),l=r("button","button-secondary button-small","ROAST ME");l.type="button";const O=r("button","tracker-expand","Show log");O.type="button";const k=r("button","button-danger button-small","END SESSION");k.type="button",P.append(l,O,k);const b=r("div","roast-log");v.append(R,M,A,F,Y,P,b),e.append(v),O.addEventListener("click",()=>{g=!g,b.className=g?"roast-log visible":"roast-log",O.textContent=g?"Hide log":"Show log"});const I=()=>{if(c)return;c=!0,z(),d!==void 0&&(window.clearInterval(d),d=void 0),S();const h=r("section","modal-backdrop");h.style.background="rgba(0,0,0,0.98)",h.style.zIndex="2147483647";const D=r("div","roast-modal");D.style.textAlign="center";const $=r("h2","roast-copy","BY this is enoght for today build your empire dont waste yourself here , you have parents , dreams , please do for your younger version!");$.style.color="var(--danger)",$.style.fontSize="32px",D.append($),h.append(D),e.append(h)},B=()=>{const h=Date.now()-a.startedAt;if(Math.floor(h/6e4)>=10&&!c){I();return}M.textContent=`${o} — ${a.roastCount} roast${a.roastCount===1?"":"s"}`,A.textContent=J(h),a.ratScore=ke(h,a.roastCount,f),F.textContent=`RAT SCORE: ${a.ratScore}/100`;const $=Se(a,f);$.length>0?Y.textContent=$.map(m=>m.label).join(" / "):Y.textContent=""},S=async()=>{a.lastSeenAt=Date.now(),await ae(t,a)},z=()=>{u!==void 0&&(window.clearTimeout(u),u=void 0)},E=()=>{if(z(),c||!s.roastsEnabled)return;const h=s.roastIntervalMinutes*6e4;u=window.setTimeout(()=>{N()},h)},N=async()=>{if(c||p)return;z(),p=!0,l.disabled=!0,l.textContent="WAIT...";const h=await Te(s,o,a);a.roastCount+=1,a.lastRoastAt=Date.now(),a.roastLog.push({text:h.text,source:h.source,shownAt:Date.now()}),B(),j(),await S(),ve(e,h,()=>{p=!1,l.disabled=!1,l.textContent="ROAST ME",E()})},j=()=>{b.innerHTML="";for(const h of a.roastLog){const D=r("div","roast-log-entry"),$=r("p","roast-log-text",h.text),m=r("p","roast-log-meta",`${h.source} — ${Fe(h.shownAt)}`);D.append($,m),b.append(D)}};return k.addEventListener("click",()=>{we(e,a,o,f,t,()=>{c=!0,z(),d!==void 0&&window.clearInterval(d),v.remove()})}),l.addEventListener("click",()=>{N()}),B(),S(),d=window.setInterval(B,1e3),E(),{updateConfig(h){s=h,E()},stop(){c=!0,z(),d!==void 0&&(window.clearInterval(d),d=void 0),S()}}}function ve(e,t,n){const o=r("section","modal-backdrop");o.setAttribute("aria-label","RatMode roast"),o.setAttribute("aria-modal","true"),o.setAttribute("role","dialog");const a=r("div","roast-modal"),i=r("div","modal-head"),f=r("h2","modal-title","SCHEDULED ROAST"),s=r("button","close","x");s.type="button";const u=r("p","roast-copy",`"${t.text}"`),d=r("p","roast-source",`Source: ${t.source}`),c=r("button","button","ACKNOWLEDGE DEFEAT");c.type="button",i.append(f,s),a.append(i,u,d,c),o.append(a),e.append(o);const p=()=>{o.remove(),n()};o.addEventListener("click",g=>{g.target===o&&p()}),s.addEventListener("click",p),c.addEventListener("click",p),c.focus({preventScroll:!0})}function we(e,t,n,o,a,i){const f=r("section","modal-backdrop");f.setAttribute("aria-label","Session report"),f.setAttribute("aria-modal","true"),f.setAttribute("role","dialog");const s=r("div","report-modal"),u=r("div","modal-head"),d=r("h2","modal-title","SESSION REPORT"),c=r("button","close","x");c.type="button",u.append(d,c);const p=r("h3","report-title",`${n} Session`),g=Date.now()-t.startedAt,v=r("p","report-subtitle",`${J(g)} — ${new Date().toLocaleDateString()}`),R=r("div","report-stats"),w=G("Duration",J(g)),C=G("Roasts",String(t.roastCount)),y=G("Rat Score",`${t.ratScore}/100`),M=G("Streak",`${o.currentStreakDays}d`);R.append(w,C,y,M);const A=r("div","report-badges"),F=r("span","report-badge-label","BADGES"),Y=r("div","badge-grid");for(const S of K){const z=o.unlocked.includes(S.id),E=r("span",z?"badge":"badge badge-locked",S.label);E.title=S.description,Y.append(E)}A.append(F,Y);const P=r("div","report-note"),l=document.createElement("label");l.textContent="Exit note";const O=document.createElement("textarea");O.placeholder="What happened out there?",P.append(l,O);const k=r("div","report-actions"),b=r("button","button-secondary button-small","COPY RECEIPT");b.type="button";const I=r("button","button","CLOSE & RETURN");I.type="button",k.append(b,I),s.append(u,p,v,R,A,P,k),f.append(s),e.append(f),b.addEventListener("click",async()=>{const S=Le(n,g,t.ratScore,t.roastCount);try{await navigator.clipboard.writeText(S),b.textContent="COPIED",setTimeout(()=>{b.textContent="COPY RECEIPT"},2e3)}catch{b.textContent="FAILED",setTimeout(()=>{b.textContent="COPY RECEIPT"},2e3)}});const B=async()=>{t.exitNote=O.value.trim();const S={id:t.id,siteRoot:t.siteRoot,siteLabel:t.siteLabel,startedAt:t.startedAt,endedAt:Date.now(),durationMs:Date.now()-t.startedAt,roastCount:t.roastCount,ratScore:t.ratScore,confessionText:t.confessionText,exitNote:t.exitNote};await $e(a,S),await Ce(a,t,o),f.remove(),i()};c.addEventListener("click",()=>{B()}),I.addEventListener("click",()=>{B()})}function G(e,t){const n=r("div","report-stat"),o=r("span","",e),a=document.createElement("strong");return a.textContent=t,n.append(o,a),n}function ke(e,t,n){const o=Math.floor(e/6e4),a=o<2?8:0;let i=8+o*2.25+t*7+Math.min(18,n.currentStreakDays*3)-a;return Math.min(100,Math.max(0,Math.round(i)))}function Se(e,t,n){const o=[],a=Date.now()-e.startedAt,i=Math.floor(a/6e4);return o.push(K[0]),(i>=10||e.roastCount>=1)&&o.push(K[2]),t.currentStreakDays>=5&&o.push(K[4]),o}async function Ce(e,t,n){const o=Date.now()-t.startedAt,a=Math.floor(o/6e4);n.unlocked.includes("first-confession")||n.unlocked.push("first-confession"),!n.unlocked.includes("ten-minute-tragedy")&&(a>=10||t.roastCount>=1)&&n.unlocked.push("ten-minute-tragedy"),!n.unlocked.includes("honest-rat")&&n.currentStreakDays>=5&&n.unlocked.push("honest-rat");const i=await e.get([T.history]),f=re(i[T.history]),s=new Date().toISOString().slice(0,10),u=f.filter(c=>new Date(c.startedAt).toISOString().slice(0,10)===s);!n.unlocked.includes("repeat-offender")&&u.length>=3&&n.unlocked.push("repeat-offender");const d=f.reduce((c,p)=>c+Math.floor(p.durationMs/6e4),0);!n.unlocked.includes("basement-royalty")&&d>=100&&n.unlocked.push("basement-royalty"),await e.set({[T.badges]:n})}function Ee(e){const t=new Date().toISOString().slice(0,10);if(e.lastConfessionDate===t)return e;if(e.lastConfessionDate){const n=new Date(e.lastConfessionDate),o=new Date(t);Math.floor((o.getTime()-n.getTime())/(1e3*60*60*24))===1?e.currentStreakDays+=1:e.currentStreakDays=1}else e.currentStreakDays=1;return e.bestStreakDays=Math.max(e.bestStreakDays,e.currentStreakDays),e.lastConfessionDate=t,e}async function Te(e,t,n){if(e.roastMode==="gemini"&&e.geminiApiKey){const o=await Me(e,t,n);if(o)return{text:o,source:"Gemini"}}return{text:Ae(t,n),source:"local"}}async function Me(e,t,n){const o=e.geminiApiKey?.trim();if(!o)return null;const i=`https://generativelanguage.googleapis.com/v1beta/models/${De(e.geminiModel)}:generateContent?key=${encodeURIComponent(o)}`,f=Math.max(0,Math.round((Date.now()-n.startedAt)/6e4)),s=W.find(w=>w.label.toLowerCase()===t.toLowerCase()||w.id.toLowerCase()===t.toLowerCase()),u=s?.category==="work"?"Procrastinating":"Doom scrolling",d=new Date().getHours();let c="";d>=5&&d<9?c="Early Morning (5am-9am): They chose this over the one part of the day that was entirely theirs. Before the emails and demands.":d>=9&&d<18?c="Work Hours (9am-6pm): The escape, the small rebellion. But it is debt. Every minute is borrowed from later.":d>=18&&d<24?c="Late Evening (9pm-midnight): The day is done. Whatever they meant to do is now tomorrow's problem.":c="Deep Night (midnight-4am): Avoidance has run out of day. Sleep is the thing they are avoiding because tomorrow requires being a person again.";let p="";s&&(s.id==="instagram"?p="Instagram: comparison disguised as entertainment. They came to feel like they are falling behind.":s.id==="youtube"?p="YouTube: the great deceiver. It feels productive or like learning, but it is the safest way to feel busy doing nothing.":s.id==="x"||s.id==="twitter"?p="Twitter/X: pure cortisol delivery system. They leave angrier than they arrived, mistaking rage for awareness.":s.id==="reddit"?p="Reddit: the intellectual's doom scroll where curiosity procrastinates. Reading about self-improvement instead of doing it.":s.id==="linkedin"?p="LinkedIn: career anxiety monetized. Watching others announce futures while sitting exactly where they were yesterday.":s.id==="tiktok"?p="TikTok: dopamine algorithmically optimized. The algorithm model knows their avoidance patterns better than they do.":s.id==="snapchat"?p="Snapchat: maintaining low-effort streaks instead of maintaining their actual life and goals.":s.category==="work"&&(p=`Procrastination on ${s.label}: active avoidance, pretending planning is coding/writing, escaping real effort.`));let g="";const v=n.roastCount+1;v===1?g="Session 1: Observed. Measured, almost gentle. The tone of someone who noticed.":v===2?g="Session 2: Recognized. Pattern recognition. They left and came back to avoid sitting with something.":v===3?g="Session 3: Documented. Clinical. A choice made so many times it doesn't feel like one.":v===4?g="Session 4: Witnessed. flat diagnosis. The shape their day took in the absence of a plan.":g=`Session ${v}: Just watching. No longer trying to change anything. Simply documenting.`;const R=["You are the last honest voice this person will hear before they lose themselves to the scroll.","You are the part of them that still remembers who they wanted to be — and you are furious. Not at them, but for them.","VOICE: Cold. Precise. Devastatingly specific. Tell the truth in a voice so calm and accurate it cannot be ignored. A surgeon's scalpel.","CONTEXT INFORMATION:",`- Site they are wasting time on: ${t} (Category: ${u})`,p?`- Site Profile: ${p}`:"",`- Elapsed minutes this session: ${f}`,`- Current Time Context: ${c}`,`- Session Count: ${g}`,`- Confession they made: "${n.confessionText}"`,"ROAST ARCHITECTURE:","1. Observation: specific and quiet.","2. Excavation: why they are avoiding reality.","3. Weight: make them feel time as life, not minutes.","4. Landing: one quiet, echoing truth.","ABSOLUTE RULES:","- No exclamation marks. Ever.","- No 'hey', 'listen', or conversational filler. Just say it.","- No motivational language or coaching. You are a mirror, not a coach.","- No emojis.","- Keep the response under 28 words.","- Never end on advice. End on truth.","- Never use the word 'just'.","- Never say 'I know this is hard' or offer comfort.","- Return only the raw roast text, without quotation marks or explanations."].filter(Boolean).join(`
`);try{const w=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:R}]}],generationConfig:{maxOutputTokens:80,temperature:.85}})});if(!w.ok)return console.warn("[RatMode] Gemini roast request failed.",w.status),null;const y=(await w.json()).candidates?.[0]?.content?.parts?.map(M=>M.text??"").join(" ");return Re(y)}catch(w){return console.warn("[RatMode] Gemini request error.",w),null}}function Ae(e,t){const n=Math.max(0,Math.round((Date.now()-t.startedAt)/6e4)),o=W.find(u=>u.label.toLowerCase()===e.toLowerCase()||u.id.toLowerCase()===e.toLowerCase()),i=(o?o.category:"social")==="work"?pe:de,f=(t.roastCount+n)%i.length;return`${i[f]} ${e} has consumed ${n} minute(s) of your very finite life.`}function Re(e){if(!e)return null;const t=e.replace(/\s+/g," ").replace(/^["']+|["']+$/g,"").trim();return t?t.length>240?`${t.slice(0,237)}...`:t:null}function De(e){return e.replace(/^models\//,"").split("/").map(t=>encodeURIComponent(t)).join("/")}function Le(e,t,n,o){const a=Math.max(1,Math.round(t/6e4));let i="";return n>70?i="the long duration and repeated checks showing severe procrastination":n>40?i="the mid-day escape behavior and inability to maintain focus":i="the short attention fragment check and rapid bounce back",[`Today: 1 session. ${a} total minutes. ${o} roasts survived.`,"",`Somewhere in those ${a} minutes there was something else. Something that needed you. It is still there.`,"",`Rat Score: ${n}/100. Not because you were here. Because of ${i}. The score is not a judgment. It is a pattern, measured.`,"","You cannot scroll away from who you are."].join(`
`)}async function Ie(e){const t=await e.get([T.config]);return ne(t[T.config])}function ne(e){if(!q(e))return U;const t=H(e.confessionPhrase)??U.confessionPhrase,n=H(e.geminiApiKey)??H(e.geminiRuntimeKey)??H(e.geminiKey)??U.geminiApiKey,o=H(e.geminiModel)??U.geminiModel,a=We(He(e.roastIntervalMinutes),ce,le,U.roastIntervalMinutes),i=e.roastsEnabled===void 0?U.roastsEnabled:e.roastsEnabled!==!1,f=e.roastMode==="local"||e.roastMode==="gemini"?e.roastMode:n?"gemini":"local";return{confessionPhrase:t,roastIntervalMinutes:a,geminiApiKey:n,geminiModel:o,roastsEnabled:i,roastMode:f}}function Ne(e){return q(e)?{unlocked:Array.isArray(e.unlocked)?e.unlocked.filter(t=>typeof t=="string"):[],currentStreakDays:typeof e.currentStreakDays=="number"?e.currentStreakDays:0,bestStreakDays:typeof e.bestStreakDays=="number"?e.bestStreakDays:0,lastConfessionDate:typeof e.lastConfessionDate=="string"?e.lastConfessionDate:null}:{...te}}async function Oe(e,t,n,o){const a={id:je(t),siteRoot:t,siteLabel:n,hostname:window.location.hostname,startedAt:Date.now(),confessionText:o,roastCount:0,lastSeenAt:Date.now(),roastLog:[],ratScore:0,exitNote:""};return await ae(e,a),a}async function ae(e,t){const n=await e.get([T.sessions]),o=ze(n[T.sessions]);o[t.siteRoot]=t,await e.set({[T.sessions]:o})}function ze(e){return q(e)?{...e}:{}}async function $e(e,t){const n=await e.get([T.history]),o=re(n[T.history]);o.unshift(t),o.length>50&&(o.length=50),await e.set({[T.history]:o})}function re(e){return Array.isArray(e)?e.filter(q):[]}function Pe(){const e=Be(),t=Ye();return t?.storage?.local?{async get(n){try{return await new Promise(o=>{t.storage.local.get(n,a=>{const i=t.runtime?.lastError;if(i){console.warn("[RatMode] storage.get failed.",i.message),e.get(n).then(o);return}o(a)})})}catch(o){return console.warn("[RatMode] storage.get threw.",o),e.get(n)}},async set(n){await e.set(n);try{await new Promise(o=>{t.storage.local.set(n,()=>{const a=t.runtime?.lastError;a&&console.warn("[RatMode] storage.set failed.",a.message),o()})})}catch(o){console.warn("[RatMode] storage.set threw.",o)}},onChanged(n){try{t.storage.onChanged.addListener((o,a)=>{n(o,a)})}catch(o){console.warn("[RatMode] storage.onChanged unavailable.",o)}}}:(console.warn("[RatMode] chrome.storage.local unavailable. Using in-memory storage."),e)}function Be(){const e={};return{async get(t){const n={};for(const o of t)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},async set(t){Object.assign(e,t)},onChanged(){}}}function Ye(){try{return typeof chrome>"u"?null:chrome}catch{return null}}function r(e,t,n){const o=document.createElement(e);return o.className=t,n!==void 0&&(o.textContent=n),o}function je(e){return globalThis.crypto?.randomUUID?globalThis.crypto.randomUUID():`${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Ue(e,t){const n=Math.min(e.length,t.length);for(let o=0;o<n;o++)if(e[o]!==t[o])return o;return n}function J(e){const t=Math.max(0,Math.floor(e/1e3)),n=Math.floor(t/3600),o=Math.floor(t%3600/60),a=t%60;return n>0?`${n}:${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`:`${o.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}function Fe(e){const t=Date.now()-e,n=Math.floor(t/6e4);return n<1?"just now":n===1?"1 min ago":`${n} min ago`}function H(e){return typeof e=="string"&&e.trim().length>0?e.trim():void 0}function He(e){if(typeof e=="number")return Number.isFinite(e)?e:void 0;if(typeof e=="string"&&e.trim().length>0){const t=Number(e);return Number.isFinite(t)?t:void 0}}function We(e,t,n,o){return e===void 0?o:Math.min(n,Math.max(t,e))}function q(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}
