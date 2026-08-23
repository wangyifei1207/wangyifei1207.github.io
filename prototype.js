// Plan: throwaway UI prototype with five independent portfolio directions and one deterministic Agent demo.

const VARIANTS = [
  { id: "A", label: "A · Evidence Editorial" },
  { id: "B", label: "B · 90s Recruiter Journey" },
  { id: "C", label: "C · Product Studio" },
  { id: "D", label: "D · Product Field Notes" },
  { id: "E", label: "E · Editorial Oil" },
];

const PROFILE = {
  email: "tyfdwyf@163.com",
  phone: "18530631909",
  wechat: "tyfdwyf20031207",
};

const AWARDS = [
  { title: "全国大学生计算机设计大赛", note: "国家级一等奖", image: "computer-design-national.jpg" },
  { title: "美国大学生数学建模竞赛", note: "Meritorious Winner奖（国际一等奖）", image: "mcm.jpg" },
  { title: "中国机器人及人工智能大赛", note: "国家级二等奖", image: "robot-ai-national.jpg" },
  { title: "论文检索证明", note: "《Attention-based Deep Pyramidal Network for Low-light Image Enhancement》", image: "paper-conference-cover-index.jpg" },
  { title: "清华大学 SDG 开放马拉松挑战赛", note: "技术创新奖", image: "sdg.jpg" },
  { title: "国家励志奖学金", note: "", image: "national-inspirational-scholarship.jpg" },
  { title: "软件著作权登记证书", note: "", image: "software-copyright.jpg" },
  { title: "全国大学生数学建模竞赛", note: "黑龙江赛区一等奖", image: "math-modeling-national.jpg" },
  { title: "中国高校计算机大赛·人工智能创意赛", note: "东北赛区三等奖", image: "ai-innovation-contest.jpg" },
  { title: "国家级大学生创新创业训练计划·如果有来生", note: "结题良好", image: "innovation-afterlife.jpg" },
  { title: "国家级大学生创新创业训练计划·ADPN", note: "结题优秀", image: "innovation-adpn.jpg" },
  { title: "全国大学生计算机设计大赛", note: "黑龙江省赛二等奖", image: "computer-design-provincial.jpg" },
  { title: "中国机器人及人工智能大赛", note: "省级一等奖", image: "robot-ai-provincial.jpg" },
  { title: "优秀学生干部", note: "", image: "outstanding-student-leader.jpg" },
  { title: "优秀共青团员", note: "", image: "outstanding-youth-league.jpg" },
];

function awardLabel(award) {
  return [award.title, award.note].filter(Boolean).join(" ");
}

const HOBBIES = [
  {
    name: "旅行",
    note: "走进不同城市与风景，用新的体验刷新观察视角。",
    image: "travel-personal.jpeg",
    alt: "旅行途中在火山与群山前留影",
    credit: "个人旅行照片",
  },
  {
    name: "跳舞",
    note: "跟随音乐练习与表达，在节奏中保持活力。",
    image: "dance-user.png",
    alt: "舞蹈教室中手持折扇合影的舞者们",
  },
  {
    name: "钢琴",
    note: "享受练习与演奏的过程，在旋律中找到专注。",
    image: "piano-user.png",
    alt: "展厅内的黑色三角钢琴与琴凳",
  },
];

function hobbyGalleryMarkup() {
  return `
    <div class="hobby-carousel" data-hobby-carousel tabindex="0" role="region" aria-roledescription="carousel" aria-label="兴趣爱好">
      <div class="hobby-viewport">
        <div class="hobby-track" data-hobby-track>
      ${HOBBIES.map(
        (hobby, index) => `
          <figure class="hobby-slide" data-hobby-slide="${index}" aria-roledescription="slide" aria-label="${index + 1} / ${HOBBIES.length}：${hobby.name}">
            ${
              hobby.source
                ? `<a href="${hobby.source}" target="_blank" rel="noreferrer" aria-label="查看${hobby.name}意象图来源：${hobby.artist}"><img src="./assets/hobbies/${hobby.image}" alt="${hobby.alt}" loading="lazy" /></a>`
                : `<img src="./assets/hobbies/${hobby.image}" alt="${hobby.alt}" loading="lazy" />`
            }
            <figcaption>
              <strong>${hobby.name}</strong>
              <span>${hobby.note}</span>
              ${hobby.credit ? `<small>${hobby.credit}</small>` : ""}
            </figcaption>
          </figure>
        `,
      ).join("")}
        </div>
      </div>
      <div class="hobby-controls">
        <button type="button" data-hobby-direction="previous" aria-label="上一个兴趣">←</button>
        <div class="hobby-dots" role="group" aria-label="选择兴趣">
          ${HOBBIES.map(
            (hobby, index) => `<button type="button" data-hobby-index="${index}" aria-label="查看${hobby.name}" aria-pressed="${index === 0}"></button>`,
          ).join("")}
        </div>
        <span data-hobby-counter>01 / ${String(HOBBIES.length).padStart(2, "0")}</span>
        <button type="button" data-hobby-direction="next" aria-label="下一个兴趣">→</button>
      </div>
      <p class="sr-only" data-hobby-live aria-live="polite"></p>
    </div>
  `;
}

const D_SKILLS = {
  product: {
    label: "产品能力",
    title: "从真实用户问题，拆解到可验证的 MVP",
    body: "具备扎实的用户调研、需求分析与竞品研究能力，能够独立完成 PRD 撰写、原型设计及 MVP 拆解。",
    evidence: "关键能力：用户调研 · 需求分析 · 竞品研究 · PRD · 原型 · MVP",
  },
  agent: {
    label: "AI 产品与 Agent 设计",
    title: "把模型能力，编排成可复用的 Agent 工作流",
    body: "熟悉 LLM 基础原理、模型调用流程、推理 API 与 Token 计量机制；具备 Skill 能力封装与 Workflow 编排能力，能通过 Prompt 迭代与工具调用链设计，构建贴合业务场景的可复用 Agent 流程。",
    evidence: "关键能力：LLM · 推理 API · Token · Skill · Workflow · Prompt · 工具调用",
  },
  data: {
    label: "数据与评测",
    title: "用数据定义问题，用评测驱动产品迭代",
    body: "熟练掌握 Excel、SQL 与 Python，能够开展数据分析、核心指标拆解、模型效果评估与问题归因，为产品优化提供可执行的迭代依据。",
    evidence: "关键能力：Excel · SQL · Python · 指标拆解 · 效果评估 · 问题归因",
  },
  collaboration: {
    label: "技术协同",
    title: "在产品目标与技术约束之间，建立共同语言",
    body: "具备良好的计算机基础和技术沟通能力，能够准确理解技术边界，并协同算法、工程团队推进 AI 产品设计与应用落地。",
    evidence: "关键能力：技术理解 · 边界对齐 · 算法协作 · 工程交付",
  },
};

const SCENARIOS = {
  complete: {
    tab: "直接创建",
    title: "信息完整且无冲突",
    request: "周三下午 3 点，和导师开 30 分钟组会，提前 10 分钟提醒。",
    outcome: "组会已进入周三日历，并保留撤销入口。",
    decision: "低风险且信息完整时缩短路径，但仍先校验空闲与重复事件。",
    resultStep: 6,
    event: { day: 2, label: "导师组会", meta: "15:00 · 30 分钟", tone: "primary" },
    events: [
      ["读取请求", "识别事件、参与人、日期、时长与提醒偏好。", "understand"],
      ["解析约束", "周三 15:00，持续 30 分钟，提前 10 分钟提醒。", "plan"],
      ["检查空闲", "模拟日历返回：目标时段无冲突，也不存在重复事件。", "tool"],
      ["生成计划", "先校验，再写入，最后提供可撤销的结果确认。", "plan"],
      ["写入日历", "模拟工具调用成功，事件同步到本周视图。", "tool"],
      ["回传结果", "已完成创建，同时保留修改与撤销入口。", "result"],
    ],
  },
  missing: {
    tab: "信息缺失",
    title: "先澄清再执行",
    request: "下周帮我约一次项目复盘。",
    outcome: "补齐时间与时长后，复盘会进入周五日历。",
    decision: "不把猜测包装成智能。只询问阻塞执行的最少信息，并给出可直接选择的答案。",
    resultStep: 6,
    event: { day: 4, label: "项目复盘", meta: "16:00 · 60 分钟", tone: "violet" },
    events: [
      ["读取请求", "识别到“项目复盘”任务，但无法形成可执行计划。", "understand"],
      ["检查完整度", "缺少具体日期、开始时间与预计时长。", "warning"],
      ["发起澄清", "只追问关键缺口，并提供本周空闲时段建议。", "human"],
      ["获得选择", "用户选择：周五 16:00，持续 60 分钟。", "human"],
      ["重新校验", "模拟日历返回：该时段可用，可以安全写入。", "tool"],
      ["完成创建", "项目复盘已写入，澄清答案作为执行依据保留。", "result"],
    ],
  },
  conflict: {
    tab: "时间冲突",
    title: "备选方案与二次确认",
    request: "周四 14:00 安排 1 小时项目评审。",
    outcome: "用户确认备选时段后，项目评审进入周四日历。",
    decision: "发生冲突时不替用户做高影响决定。先解释冲突，再把可比较的备选交还给用户。",
    resultStep: 6,
    event: { day: 3, label: "项目评审", meta: "15:30 · 60 分钟", tone: "primary" },
    conflict: { day: 3, label: "需求同步", meta: "14:00 · 已存在" },
    events: [
      ["读取请求", "提取周四 14:00、60 分钟与项目评审主题。", "understand"],
      ["检测冲突", "目标时段与“需求同步”重叠，停止直接写入。", "warning"],
      ["搜索备选", "找到 15:30 与 16:30 两个连续空闲时段。", "tool"],
      ["解释并确认", "展示冲突原因、备选差异与保留原时间的选项。", "human"],
      ["获得选择", "用户确认周四 15:30，保持 60 分钟。", "human"],
      ["完成写入", "项目评审已创建，原有日程未被覆盖。", "result"],
    ],
  },
  failure: {
    tab: "工具失败",
    title: "重试、降级与退出",
    request: "把明天 10:00 的周会延后半小时。",
    outcome: "写入仍失败，原日程保持不变，并输出可复制的修改草稿。",
    decision: "失败时优先保持数据正确。有限重试后明确降级，不制造“已经完成”的假象。",
    resultStep: 6,
    event: { day: 1, label: "周会修改草稿", meta: "10:30 · 未写入", tone: "draft" },
    conflict: { day: 1, label: "原周会", meta: "10:00 · 保持不变" },
    events: [
      ["定位原事件", "找到明天 10:00 的周会，并读取当前版本。", "understand"],
      ["生成变更计划", "准备将开始时间移动至 10:30，其他字段保持不变。", "plan"],
      ["写入失败", "模拟日历工具超时，未对原事件产生任何修改。", "error"],
      ["有限重试", "刷新事件版本后重试一次，工具仍不可用。", "warning"],
      ["安全降级", "停止自动执行，保留原日程并生成修改草稿。", "human"],
      ["说明结果", "明确告知“未写入”，提供重试、复制草稿与退出入口。", "result"],
    ],
  },
};

const SCHEDUL_DEMOS = {
  dinner: {
    label: "偏好排程",
    request: "我下周四下班后和朋友去吃饭",
    title: "和朋友吃饭",
    detail: "已参考“工作日通常 18:00 下班”的偏好，并避开已有日程。",
    slots: ["周四 18:30", "周四 19:30", "周五 18:30"],
    duration: "90 分钟",
    event: { time: "19:30–21:00", title: "和朋友吃饭", meta: "Schedul Agent · 周四" },
  },
  conflict: {
    label: "冲突处理",
    request: "周三 14:00 安排 1 小时项目评审",
    title: "项目评审",
    detail: "14:00 与“需求同步”重叠。原日程不会被覆盖，请选择一个连续空档。",
    slots: ["周三 15:30", "周三 16:30"],
    duration: "60 分钟",
    event: { time: "15:30–16:30", title: "项目评审", meta: "Schedul Agent · 周三" },
    conflict: "需求同步 · 14:00–15:00",
  },
  failure: {
    label: "失败降级",
    request: "把明天 10:00 的周会延后半小时",
    title: "修改产品周会",
    detail: "准备把开始时间从 10:00 调整为 10:30，其他字段保持不变。",
    slots: ["明天 10:30"],
    duration: "30 分钟",
    event: { time: "10:30–11:00", title: "产品周会", meta: "修改草稿 · 尚未写入" },
    failure: true,
  },
};

const SCHEDUL_HISTORY = [
  { title: "看看我明天下午有没有空，没有的话帮我找两个小时写方案", stamp: "08/08 22:49", answer: "明天下午 14:00–18:00 目前是空的，可以直接在这个时间段写方案。" },
  { title: "今天下午四点提醒我提交周报", stamp: "07/03 15:19", answer: "已整理为 16:00 的本地提醒草稿，确认后才会写入。" },
  { title: "我今天下午四点有什么安排", stamp: "07/03 15:14", answer: "16:00 没有日程冲突，前一个事项在 15:30 结束。" },
  { title: "我下周五下班后想去健身", stamp: "07/03 14:55", answer: "已参考 18:00 下班偏好，推荐周五 18:30–20:00。" },
  { title: "记住我的下班时间通常是六点", stamp: "07/03 14:51", answer: "已生成候选偏好，需要你在设置中确认启用。" },
  { title: "我今天都有哪些安排", stamp: "07/03 12:54", answer: "今天共有 3 个事项，最近一个是 14:00 的作品集评审。" },
];

const EVIDENCE = {
  schedule: {
    title: "四类关键路径均可复放",
    nature: "本地交互原型验证",
    status: "当前原型可直接核验",
    body: "旗舰演示覆盖信息完整、信息缺失、时间冲突与工具失败四类任务。每个场景使用固定虚构数据，同一输入始终得到相同 Trace 与结果。",
    boundary: "不连接模型、真实日历或原项目服务；这里证明的是产品状态设计与前端交付，不代表线上效果指标。",
  },
  ola: {
    title: "汽水音乐二线退款工单 Agent",
    nature: "本人主导的实习项目",
    status: "当前处于灰度阶段",
    body: "汽水音乐日均约 100 张二线工单，其中退款场景占比超过 60%。前期先手工跑通退款工单链路，通过率达到 95% 后进入灰度；随后设计主 Agent + 独立 Verify Sub Agent 的写入前门禁。",
    boundary: "日均约 100 单与退款占比 60%+ 是业务规模；95% 是手工验证准入结果；约 92% 是退款场景连续一周实验准确率；约 80% 是二线人力节省结果。",
  },
  sophnet: {
    title: "把 Skill 当作可运营的平台对象",
    nature: "MaaS 平台产品案例",
    status: "本人提供的在职交付数据",
    body: "在职期间参与 3 个 B 端客户的平台交付，主导 5 个定制模块上线；独立开发客户管理 Skill，并负责企业后台消费明细模块，细化充值、模型 Token 消纳、SophClaw 实例订阅和调账记录 4 类资金流水的展示。",
    boundary: "“3 个 B 端客户、5 个定制模块、首周下载量 120+、4 类资金流水”为本人提供的项目口径。120+ 指客户管理 Skill 上线首周的下载次数，不延伸解读为活跃、留存或业务收入。",
  },
};

const ASSISTANT_ANSWERS = {
  schedule: {
    question: "她最完整的 Agent 项目是什么？",
    answer:
      "AI 日程管理 Agent 是最完整的 0 到 1 案例。它重点证明意图理解、约束识别、工具调用、异常处理与用户控制权设计。",
    href: "#schedule-agent",
    citation: "查看日程 Agent",
  },
  fit: {
    question: "为什么她适合 AI 产品岗位？",
    answer:
      "三个案例分别覆盖 0 到 1 Agent 产品、业务流程重构与 MaaS 平台产品。能力判断来自具体决策与产物，而不是技能自评分。",
    href: "#casework",
    citation: "查看案例组合",
  },
  ola: {
    question: "字节 OLA 项目做了什么？",
    answer:
      "主导汽水音乐二线退款工单 Agent：先手工验证可行性，再设计定时接单、证据检索、独立 Verify 门禁、内部备注写入与工单挂起的处理闭环。项目当前处于灰度阶段。",
    href: "#ola-case",
    citation: "查看 OLA 案例",
  },
  metrics: {
    question: "为什么页面没有放很多数字？",
    answer:
      "页面会区分业务规模、手工验证、灰度实验和业务价值。字节案例中，日均约 100 单、退款占比 60%+ 是规模；95% 是准入结果；约 92% 是连续一周实验准确率；约 80% 是人力节省结果。",
    href: "#evidence-led",
    citation: "查看证据原则",
  },
};

const state = {
  variant: variantFromUrl(),
  theme: "light",
  mode: "recruiter",
  scenario: "complete",
  step: 0,
  playing: false,
  lowMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  awardIndex: 0,
  awardAnimating: false,
  hobbyIndex: 0,
};

const schedulState = {
  view: "agent",
  phase: "idle",
  scenario: "dinner",
  request: "",
  selectedSlot: "周四 19:30",
  retryCount: 0,
  copyNotice: "",
  preferenceEnabled: true,
  preferenceExists: true,
  settingsSection: "defaults",
  historyOpen: false,
  historyIndex: 0,
  notice: "",
  calendarConnected: true,
  feishuConnected: true,
  feishuSyncHealthy: false,
  feishuNotice: "飞书连接状态已刷新",
  notificationAllowed: true,
  scheduleDayOffset: 0,
  reviewDayOffset: 0,
  events: [
    { time: "09:30–10:00", title: "产品站会", meta: "线上会议" },
    { time: "14:00–15:00", title: "作品集评审", meta: "会议室 A3" },
    { time: "18:30–19:00", title: "晚间复盘", meta: "个人日历" },
  ],
};

state.theme = defaultTheme(state.variant);

let playTimer = null;
let schedulTimer = null;
let revealObserver = null;
let lastFocusedElement = null;
let resumeReturnHash = "#d-home";

const app = document.querySelector("#app");
const evidenceDrawer = document.querySelector("[data-evidence-drawer]");
const drawerBackdrop = document.querySelector("[data-drawer-backdrop]");
const assistant = document.querySelector("[data-assistant]");

function variantFromUrl() {
  const requested = new URLSearchParams(window.location.search).get("variant")?.toUpperCase();
  return VARIANTS.some((variant) => variant.id === requested) ? requested : "E";
}

function defaultTheme(variant) {
  return variant === "C" ? "dark" : "light";
}

function modeControl() {
  return `
    <div class="mode-control" role="group" aria-label="阅读模式">
      <button type="button" data-mode="recruiter" aria-pressed="${state.mode === "recruiter"}">招聘官模式</button>
      <button type="button" data-mode="deep" aria-pressed="${state.mode === "deep"}">深度探索</button>
    </div>
  `;
}

function utilityActions() {
  const themeLabel = state.theme === "light" ? "切到暗色" : "切到亮色";
  return `
    <div class="utility-actions">
      <button type="button" class="text-action" data-open-assistant>问王亦菲</button>
      <button type="button" class="theme-action" data-toggle-theme aria-label="${themeLabel}">
        <span aria-hidden="true">${state.theme === "light" ? "◐" : "◑"}</span>
        ${state.theme === "light" ? "暗色" : "亮色"}
      </button>
    </div>
  `;
}

function render() {
  stopPlayback();
  document.body.classList.remove("resume-open");
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.dataset.variant = state.variant;
  const themeColor =
    ["D", "E"].includes(state.variant)
      ? "#f3eedf"
      : state.theme === "light"
        ? "#f7f8ff"
        : "#0b0c18";
  document.querySelector('meta[name="theme-color"]').setAttribute(
    "content",
    themeColor,
  );

  const builders = { A: variantA, B: variantB, C: variantC, D: variantD, E: variantE };
  app.innerHTML = builders[state.variant]();
  bindPageEvents();
  bindDemoEvents();
  bindSchedulEvents();
  updateDemo();
  setupRevealMotion();
}

function variantA() {
  const deepContent =
    state.mode === "deep"
      ? `
        <div class="decision-ledger depth-panel" data-reveal>
          <div>
            <span>关键取舍</span>
            <strong>确定性场景，而不是假实时对话</strong>
          </div>
          <p>面试官需要审查产品判断，不需要等待随机模型输出。固定场景让正常、澄清、冲突和失败路径都能被稳定复放。</p>
          <button type="button" data-evidence="schedule">打开证据说明</button>
        </div>
      `
      : "";

  return `
    <div class="variant variant-a">
      <header class="a-header">
        <a class="wordmark" href="#top" aria-label="返回首页">王亦菲<span>YIFEI WANG</span></a>
        <nav aria-label="主要导航">
          <a href="#schedule-agent">旗舰项目</a>
          <a href="#casework">代表案例</a>
          <a href="#contact">联系</a>
        </nav>
        ${modeControl()}
        ${utilityActions()}
      </header>

      <main id="main-content">
        <section class="a-hero" id="top">
          <div class="a-hero-copy">
            <p class="eyebrow">AI AGENT PRODUCT MANAGER · 2027</p>
            <h1>让 AI 不止能回答，<span>更能完成任务。</span></h1>
            <p class="hero-summary">我是王亦菲，专注把模型能力变成可评测、可控、能进入真实工作流的 AI 产品。</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#schedule-agent">体验旗舰项目 <span aria-hidden="true">↘</span></a>
              <a class="button button-quiet" href="#casework">查看产品证据</a>
            </div>
            <div class="hero-proofline" aria-label="岗位匹配证据">
              <div><span>01</span><strong>0 到 1 Agent</strong><small>日程工作流</small></div>
              <div><span>02</span><strong>业务流程重构</strong><small>字节 OLA</small></div>
              <div><span>03</span><strong>MaaS 平台</strong><small>SophNet</small></div>
            </div>
          </div>

          <div class="a-portrait-stage" aria-label="王亦菲个人照片">
            <div class="portrait-halo"></div>
            <figure>
              <img src="./assets/portrait-real-v1.jpg" alt="王亦菲手持花束的自然半身照" />
            </figure>
            <div class="portrait-note">
              <span>当前主投</span>
              <strong>AI Agent / AI 应用产品经理</strong>
              <small>AI Product Manager</small>
            </div>
          </div>
        </section>

        <section class="a-manifesto" id="evidence-led" data-reveal>
          <p>我的工作方式</p>
          <h2>先找到需要被改善的任务，<br />再决定 AI 应该出现在哪里。</h2>
          <div class="manifesto-list">
            <article>
              <span>DISCOVER</span>
              <h3>从任务而非功能出发</h3>
              <p>把模糊需求还原成用户目标、约束与失败成本。</p>
            </article>
            <article>
              <span>DESIGN</span>
              <h3>把不确定性变成状态</h3>
              <p>设计澄清、确认、重试与降级，让用户保有控制权。</p>
            </article>
            <article>
              <span>VALIDATE</span>
              <h3>让结论回到证据</h3>
              <p>区分线上结果、离线评测、估算与目标，不用裸指标。</p>
            </article>
          </div>
        </section>

        <section class="a-agent-section" id="schedule-agent">
          <header class="section-heading" data-reveal>
            <div>
              <p>FLAGSHIP CASE · AI SCHEDULE AGENT</p>
              <h2>把一句话，推进成一次<br />可控的日程执行。</h2>
            </div>
            <div class="section-intro">
              <p>这不是视频，也不是实时模型。选择四类场景，检查 Agent 如何理解、规划、调用、确认与处理失败。</p>
              <span>模拟演示 · 不连接模型或真实日历</span>
            </div>
          </header>
          <div class="a-demo-frame" data-reveal data-demo-root>${agentDemoMarkup()}</div>
          ${deepContent}
        </section>

        <section class="a-casework" id="casework">
          <header class="casework-heading" data-reveal>
            <p>THREE DIFFERENT PROOFS</p>
            <h2>不是项目陈列，<br />是三种产品能力的交叉验证。</h2>
          </header>

          <article class="ola-case" id="ola-case" data-reveal>
            <div class="case-index">01 / BUSINESS AGENT</div>
            <div class="case-copy">
              <span>字节跳动 · OLA · 2026.07 至今</span>
              <h3>让 24 个工具不再只是工具集合，而是一条可追踪的客服任务链。</h3>
              <p>围绕主 Agent、Verify 与工具调用重构原有流程，聚焦需求拆解、流程设计、方案推动和实验验证。</p>
              <button type="button" class="inline-evidence" data-evidence="ola">如何证明个人贡献 <span>↗</span></button>
            </div>
            <div class="ola-flow" aria-label="OLA 流程示意">
              <span>用户问题</span><i>→</i><span>主 Agent</span><i>→</i><span>Verify</span><i>→</i><span>工具执行</span><i>→</i><span>结果校验</span>
            </div>
          </article>

          <article class="sophnet-case" id="sophnet-case" data-reveal>
            <div class="sophnet-head">
              <div>
                <span>SophNet · 2026.03 至 2026.06</span>
                <h3>把 Skill 设计成可配置、可测试、可发布、可运营的平台对象。</h3>
              </div>
              <p>MaaS 平台产品经验，覆盖客户管理 Skill 与计费消费明细等典型 B 端任务。</p>
            </div>
            <div class="lifecycle" aria-label="Skill 生命周期">
              <div><small>01</small><strong>配置</strong><span>对象与权限</span></div>
              <div><small>02</small><strong>测试</strong><span>结果与边界</span></div>
              <div><small>03</small><strong>发布</strong><span>版本与审核</span></div>
              <div><small>04</small><strong>运营</strong><span>消费与迭代</span></div>
            </div>
            <button type="button" class="inline-evidence" data-evidence="sophnet">查看案例边界 <span>↗</span></button>
          </article>
        </section>

        ${contactSection("a")}
      </main>
    </div>
  `;
}

function variantB() {
  const deepContent =
    state.mode === "deep"
      ? `
        <section class="b-decision" data-reveal>
          <span>DEEP DIVE</span>
          <h2>一个被放弃的方向</h2>
          <p>没有把旗舰案例做成开放式聊天框。开放输入更“像 AI”，却会稀释面试官真正需要判断的边界、异常与用户控制。</p>
          <button type="button" data-evidence="schedule">查看取舍依据</button>
        </section>
      `
      : "";

  return `
    <div class="variant variant-b">
      <aside class="b-profile-rail">
        <a class="b-mark" href="#b-top">WYF<span>AI PRODUCT</span></a>
        <figure>
          <img src="./assets/portrait-real-v1.jpg" alt="王亦菲手持花束的自然半身照" />
        </figure>
        <div class="b-identity">
          <p>王亦菲</p>
          <h2>AI Agent /<br />AI 应用产品经理</h2>
          <span>2027 秋招 · 硕士研究生</span>
        </div>
        ${modeControl()}
        ${utilityActions()}
        <a class="button button-primary" href="#b-agent">直接看旗舰项目</a>
      </aside>

      <main id="main-content" class="b-story">
        <section class="b-opening" id="b-top">
          <div class="b-opening-meta">
            <span>给招聘官的一条短路径</span>
            <span>预计阅读 90 秒</span>
          </div>
          <h1>给我 90 秒，<br /><span>看我如何让 AI 完成任务。</span></h1>
          <p>不从技能列表开始。从三个真实案例，看清我在 Agent、业务流程与平台产品中的判断。</p>
          <div class="b-route" aria-label="快速阅读路线">
            <a href="#b-agent"><span>现在</span><strong>0 到 1 日程 Agent</strong><small>看工作流与异常设计</small></a>
            <a href="#b-cases"><span>接着</span><strong>OLA 业务 Agent</strong><small>看流程重构与协作</small></a>
            <a href="#b-cases"><span>最后</span><strong>SophNet MaaS</strong><small>看平台对象与生命周期</small></a>
          </div>
        </section>

        <section class="b-agent" id="b-agent">
          <div class="b-chapter-head" data-reveal>
            <span>CHAPTER · FLAGSHIP</span>
            <h2>不要只看 Happy Path。</h2>
            <p>真正决定 Agent 产品质量的，是信息不全、冲突发生与工具失败后仍然可控。</p>
          </div>
          <div class="b-demo-wrap" data-reveal data-demo-root>${agentDemoMarkup()}</div>
          ${deepContent}
        </section>

        <section class="b-case-ledger" id="b-cases">
          <div class="b-chapter-head" data-reveal>
            <span>CHAPTER · RANGE</span>
            <h2>同一套方法，进入不同产品环境。</h2>
          </div>

          <article class="b-case b-case-ola" id="ola-case" data-reveal>
            <div class="b-case-side">
              <span>业务 Agent</span>
              <strong>2026.07 至今</strong>
            </div>
            <div>
              <p>字节跳动 · OLA</p>
              <h3>从 24 个工具，重构一条可追踪的客服任务链。</h3>
              <ul>
                <li>需求拆解与问题边界</li>
                <li>主 Agent 与 Verify 流程设计</li>
                <li>方案推动与实验验证</li>
              </ul>
            </div>
            <button type="button" data-evidence="ola">证据说明 ↗</button>
          </article>

          <article class="b-case b-case-sophnet" id="sophnet-case" data-reveal>
            <div class="b-case-side">
              <span>平台产品</span>
              <strong>2026.03 至 2026.06</strong>
            </div>
            <div>
              <p>SophNet · MaaS</p>
              <h3>让 Skill 走完配置、测试、发布与运营生命周期。</h3>
              <div class="b-skill-path"><span>CONFIG</span><span>TEST</span><span>SHIP</span><span>OPERATE</span></div>
            </div>
            <button type="button" data-evidence="sophnet">职责边界 ↗</button>
          </article>
        </section>

        ${contactSection("b")}
      </main>
    </div>
  `;
}

function variantC() {
  const deepContent =
    state.mode === "deep"
      ? `
        <div class="c-audit-strip" data-reveal>
          <span>WHY THIS INTERACTION</span>
          <p>固定事件不是为了假装模型在思考，而是为了让面试官逐步审查产品可见状态。</p>
          <button type="button" data-evidence="schedule">阅读完整取舍</button>
        </div>
      `
      : "";

  return `
    <div class="variant variant-c">
      <header class="c-header">
        <a href="#c-top" class="c-wordmark">王亦菲 <span>/ AI PM</span></a>
        <nav aria-label="主要导航"><a href="#c-agent">LAB</a><a href="#c-cases">CASES</a><a href="#contact">CONTACT</a></nav>
        ${modeControl()}
        ${utilityActions()}
      </header>

      <main id="main-content">
        <section class="c-hero" id="c-top">
          <div class="c-hero-title">
            <p>AI AGENT PRODUCT MANAGER · 2027</p>
            <h1>产品不是功能清单。<br /><span>是一组被验证的判断。</span></h1>
          </div>

          <div class="c-product-first" id="c-agent">
            <div class="c-demo-title">
              <div><span>LIVE PROTOTYPE / 01</span><strong>AI SCHEDULE AGENT</strong></div>
              <p>确定性模拟 · 无外部服务</p>
            </div>
            <div class="c-demo-shell" data-demo-root>${agentDemoMarkup()}</div>
          </div>

          <aside class="c-profile">
            <figure><img src="./assets/portrait-real-v1.jpg" alt="王亦菲手持花束的自然半身照" /></figure>
            <div>
              <span>HELLO, I AM</span>
              <h2>王亦菲</h2>
              <p>把模型边界、Agent 工作流、评测闭环与业务价值放进同一个产品判断里。</p>
              <a href="#c-cases">继续看案例 <span>↓</span></a>
            </div>
          </aside>
          ${deepContent}
        </section>

        <section class="c-principles" data-reveal>
          <p>WHAT I OPTIMIZE FOR</p>
          <div>
            <h2>用户控制</h2><span>高影响动作前确认，随时可撤销。</span>
            <h2>异常可用</h2><span>失败必须有重试、降级与退出。</span>
            <h2>证据诚实</h2><span>指标带口径，不确定就明确表达。</span>
          </div>
        </section>

        <section class="c-cases" id="c-cases">
          <header data-reveal><span>CASE RANGE / 02 + 03</span><h2>从业务任务到平台对象。</h2></header>
          <div class="c-case-pair">
            <article class="c-case-ola" id="ola-case" data-reveal>
              <div class="c-case-top"><span>BYTE OLA</span><span>2026.07 至今</span></div>
              <h3>让 Agent 工具进入一条<br />可追踪的客服流程。</h3>
              <div class="c-tool-constellation" aria-label="OLA 组成">
                <strong>MAIN AGENT</strong><span>VERIFY</span><span>24 TOOLS</span><span>WORKFLOW</span>
              </div>
              <p>证明业务流程重构、跨团队推进与验证能力。</p>
              <button type="button" data-evidence="ola">OPEN EVIDENCE ↗</button>
            </article>
            <article class="c-case-sophnet" id="sophnet-case" data-reveal>
              <div class="c-case-top"><span>SOPHNET</span><span>2026.03 至 2026.06</span></div>
              <h3>把 Skill 作为完整生命周期<br />进行设计与运营。</h3>
              <ol>
                <li><span>01</span>配置</li><li><span>02</span>测试</li><li><span>03</span>发布</li><li><span>04</span>运营</li>
              </ol>
              <p>证明 MaaS 平台对象、系统边界与 B 端任务理解。</p>
              <button type="button" data-evidence="sophnet">OPEN BOUNDARY ↗</button>
            </article>
          </div>
        </section>

        ${contactSection("c")}
      </main>
    </div>
  `;
}

function variantD() {
  const initialSkill = D_SKILLS.product;

  return `
    <div class="variant variant-d">
      <header class="d-header">
        <a href="#d-home" class="d-wordmark" aria-label="返回首页">
          <strong>王亦菲</strong><span>PRODUCT FIELD NOTES</span>
        </a>
        <nav class="d-primary-nav" aria-label="主要导航">
          <a href="#d-home"><span>01</span>首页</a>
          <a href="#d-experience"><span>02</span>实习经历</a>
          <a href="#d-ai-work"><span>03</span>AI Coding 作品</a>
          <a href="#d-education"><span>04</span>教育背景</a>
          <a href="#d-skills"><span>05</span>技能与爱好</a>
        </nav>
        <div class="d-header-actions">
          <button type="button" data-open-resume>查看简历</button>
          <a href="#d-contact">联系我 ↘</a>
        </div>
      </header>

      <main id="main-content">
        <section class="d-hero" id="d-home">
          <div class="d-hero-copy">
            <p class="d-kicker"><span>01</span> AI AGENT PRODUCT MANAGER · 2027</p>
            <h1>让 AI 不止能回答，<br /><mark>更能完成任务。</mark></h1>
            <p class="d-hero-summary">我是王亦菲，一名计算机专业硕士研究生。专注把模型能力变成可评测、可控、能进入真实工作流的 AI 产品。</p>
            <div class="d-hero-actions">
              <a class="d-button d-button-solid" href="#d-experience">从实习经历开始 <span>↓</span></a>
              <button class="d-button d-button-paper" type="button" data-open-resume>查看简历</button>
              <a class="d-text-link" href="#d-contact">联系我 ↗</a>
            </div>
            <div class="d-trust-line" aria-label="公开材料范围">
              <span>真实经历</span><i></i><span>可交互作品</span><i></i><span>公开简历</span>
            </div>
          </div>

          <div class="d-hero-art" aria-label="把复杂任务整理成清晰计划的漫画插图">
            <div class="d-art-paper" aria-hidden="true"></div>
            <div class="d-halftone-field" aria-hidden="true"></div>
            <figure>
              <img src="./assets/oil-hero-character-v1.png" alt="眼镜小人与暖黄色牧羊犬在绘图桌上把杂乱任务整理成清晰周计划" />
            </figure>
            <p class="d-art-caption"><span>FIELD NOTE 001</span>复杂输入 → 可控执行</p>
          </div>
        </section>

        <nav class="d-chapter-index" aria-label="首页章节入口" data-reveal>
          <a href="#d-experience"><span>02</span><strong>实习经历</strong><small>真实业务里的产品判断</small><i>↘</i></a>
          <a href="#d-ai-work"><span>03</span><strong>AI Coding 作品</strong><small>直接操作日程 Agent 原型</small><i>↘</i></a>
          <a href="#d-education"><span>04</span><strong>教育背景</strong><small>计算机训练与荣誉</small><i>↘</i></a>
          <a href="#d-skills"><span>05</span><strong>技能与爱好</strong><small>能力如何落到证据</small><i>↘</i></a>
        </nav>

        <section class="d-section d-experience" id="d-experience">
          <header class="d-section-heading" data-reveal>
            <p><span>02</span> EXPERIENCE FILES</p>
            <div><h2>在真实业务里，<br />把判断推进成结果。</h2><p>不是职位描述，而是两段产品现场：问题是什么、我作出了什么判断、如何推动落地。</p></div>
          </header>

          <article class="d-case-file d-case-ola" data-reveal>
            <div class="d-case-index"><span>FILE 01</span><strong>2026.07<br />— 至今</strong></div>
            <div class="d-case-main">
              <p>字节跳动 · AI 客服 OLA</p>
              <h3>把 24 个工具组织成一条可追踪、可校验、可兜底的客服任务链。</h3>
              <dl><div><dt>产品场景</dt><dd>汽水音乐二线工单自动关单</dd></div><div><dt>核心判断</dt><dd>主 Agent 处理，Verify Agent 独立校验</dd></div><div><dt>个人贡献</dt><dd>需求拆解、流程设计、工具规划、实验验证</dd></div></dl>
              <button type="button" class="d-evidence-link" data-evidence="ola">展开贡献与可信边界 ↗</button>
            </div>
            <div class="d-ink-flow" aria-label="OLA 任务链">
              <span>读取工单</span><i>→</i><span>主 Agent</span><i>→</i><span>Verify</span><i>→</i><span>工具执行</span><i>→</i><span>结果校验</span>
            </div>
          </article>

          <article class="d-case-file d-case-sophnet" data-reveal>
            <div class="d-case-index"><span>FILE 02</span><strong>2026.03<br />— 2026.06</strong></div>
            <div class="d-case-main">
              <p>比特大陆 · SophNet</p>
              <h3>把 Skill 设计成可配置、可测试、可发布、可运营的平台对象。</h3>
              <dl><div><dt>产品场景</dt><dd>企业级 LLM / AI Agent 平台</dd></div><div><dt>核心交付</dt><dd>客户管理 Skill、消费明细模块</dd></div><div><dt>能力证明</dt><dd>MaaS 对象设计、B 端任务、技术协作</dd></div></dl>
              <button type="button" class="d-evidence-link" data-evidence="sophnet">展开职责边界 ↗</button>
            </div>
            <ol class="d-lifecycle" aria-label="Skill 生命周期">
              <li><span>01</span><strong>配置</strong></li><li><span>02</span><strong>测试</strong></li><li><span>03</span><strong>发布</strong></li><li><span>04</span><strong>运营</strong></li>
            </ol>
          </article>
        </section>

        <section class="d-section d-ai-work" id="d-ai-work">
          <header class="d-section-heading d-section-heading-inverse" data-reveal>
            <p><span>03</span> INTERACTIVE WORK</p>
            <div><h2>AI 日程管理 Agent</h2><p>唯一旗舰作品。网站重构交互体验，不公开安装包，不连接模型、真实日历或原项目服务。</p></div>
          </header>

          <div class="d-demo-intro" data-reveal>
            <div><span>PRODUCT EXPERIMENT 01</span><strong>选择场景，逐步检查每一个产品状态。</strong></div>
            <p>模拟演示 · 固定虚构数据 · 无外部服务</p>
          </div>
          <div class="d-demo-shell" data-reveal data-demo-root>${agentDemoMarkup()}</div>

          <div class="d-concept-index" data-reveal>
            <article><span>01</span><h3>产品判断</h3><p>什么应该自动执行，什么必须交还给用户确认。</p></article>
            <article><span>02</span><h3>Agent Loop</h3><p>请求、约束、计划、工具、校验与结果形成闭环。</p></article>
            <article><span>03</span><h3>记忆与来源</h3><p>偏好不能绕过授权，写回前再次确认权威来源。</p></article>
            <article><span>04</span><h3>评测与降级</h3><p>失败不是空白页：有限重试、保留原数据、输出草稿。</p></article>
          </div>
        </section>

        <section class="d-section d-education" id="d-education">
          <header class="d-section-heading" data-reveal>
            <p><span>04</span> EDUCATION</p>
            <div><h2>计算机训练，<br />是产品判断的技术底座。</h2><p>教育信息只呈现事实、研究训练与经过材料核验的代表荣誉。</p></div>
          </header>

          <div class="d-education-timeline" data-reveal>
            <article><time>2024 — 2027</time><div><span>硕士 · 推免</span><h3>哈尔滨工程大学</h3><p>计算机科学与技术 · 计算机科学与技术学院</p></div><strong>211</strong></article>
            <article><time>2020 — 2024</time><div><span>本科</span><h3>哈尔滨工程大学</h3><p>软件工程 · 计算机科学与技术学院</p></div><strong>211</strong></article>
          </div>

          <div class="d-awards" data-reveal>
            <p>SELECTED HONORS</p>
            <ol>
              <li><span>2025.08</span><strong>中国大学生计算机设计大赛</strong><em>国家级一等奖</em></li>
              <li><span>2023.06</span><strong>美国大学生数学建模竞赛</strong><em>Meritorious Winner</em></li>
              <li><span>2023.06</span><strong>中国机器人及人工智能大赛</strong><em>国家级二等奖</em></li>
              <li><span>2022.07</span><strong>清华大学 SDG 开放马拉松挑战赛</strong><em>技术创新奖</em></li>
            </ol>
          </div>
        </section>

        <section class="d-section d-skills" id="d-skills">
          <header class="d-section-heading" data-reveal>
            <p><span>05</span> SKILLS & LIFE</p>
            <div><h2>不做熟练度打分，<br />让能力回到使用证据。</h2><p>点击一项能力，查看它在真实项目中的使用方式。个人爱好将在内容确认后补充，不使用模板化人设。</p></div>
          </header>

          <div class="d-skill-workbench" data-reveal>
            <div class="d-skill-tabs" role="group" aria-label="能力分类">
              ${Object.entries(D_SKILLS)
                .map(
                  ([id, skill], index) => `<button type="button" data-d-skill="${id}" aria-pressed="${index === 0}"><span>0${index + 1}</span>${skill.label}</button>`,
                )
                .join("")}
            </div>
            <div class="d-skill-detail" data-d-skill-detail aria-live="polite">
              <span>能力与证据</span><h3>${initialSkill.title}</h3><p>${initialSkill.body}</p><strong>${initialSkill.evidence}</strong>
            </div>
            <aside class="d-life-note">
              <span>LIFE NOTE</span><h3>工作之外，用兴趣保持感受力。</h3><p>跳舞、钢琴与旅行，是我在日常中切换节奏、获得灵感的方式。</p>
              ${hobbyGalleryMarkup()}
            </aside>
          </div>
        </section>

        <section class="d-contact" id="d-contact" data-reveal>
          <div><span>LET'S TALK</span><h2>如果你也在思考 AI 如何进入真实任务，我们可以聊聊。</h2></div>
          <dl>
            <div><dt>邮箱</dt><dd><a href="mailto:${PROFILE.email}">${PROFILE.email}</a><button type="button" data-copy-contact="email">复制</button></dd></div>
            <div><dt>微信</dt><dd><span>${PROFILE.wechat}</span><button type="button" data-copy-contact="wechat">复制</button></dd></div>
          </dl>
          <button type="button" class="d-button d-button-yellow" data-open-resume>查看完整简历 ↗</button>
        </section>

        <footer class="d-footer"><span>王亦菲 · AI PRODUCT MANAGER</span><span>THROWAWAY VISUAL PROTOTYPE · ALL DEMO DATA IS FICTIONAL</span></footer>
      </main>

      <div class="d-resume-backdrop" data-resume-backdrop hidden></div>
      <aside class="d-resume-viewer" data-resume-viewer aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="d-resume-title">
        <header>
          <div><span>STRUCTURED RESUME · UPDATED 2026.08</span><h2 id="d-resume-title">王亦菲 · AI 产品经理</h2></div>
          <div><button type="button" data-print-resume>打印 / 保存 PDF</button><button type="button" data-close-resume aria-label="关闭简历">关闭 ×</button></div>
        </header>
        <div class="d-resume-body">
          <aside>
            <section><span>CONTACT</span><p>${PROFILE.phone}<br /><a href="mailto:${PROFILE.email}">${PROFILE.email}</a><br />微信 ${PROFILE.wechat}</p></section>
            <section><span>EDUCATION</span><p><strong>哈尔滨工程大学</strong><br />计算机科学与技术 · 硕士<br />2024.09 — 2027.06</p><p><strong>哈尔滨工程大学</strong><br />软件工程 · 本科<br />2020.09 — 2024.06</p></section>
            <section><span>FOCUS</span><p>AI Agent / AI 应用产品经理<br />兼容 AI 平台产品方向</p></section>
          </aside>
          <article>
            <section><span>PROFILE</span><h3>把模型能力转化为可评测、可控、能进入真实工作流的产品价值。</h3></section>
            <section><span>EXPERIENCE</span><div class="d-resume-entry"><time>2026.07 — 至今</time><h3>字节跳动 · AI 产品实习生</h3><p>参与 AI 客服 OLA 在线服务 Agent Harness，推进汽水音乐二线工单自动关单；完成需求拆解、双 Agent 流程、工具规划与实验验证。</p></div><div class="d-resume-entry"><time>2026.03 — 2026.06</time><h3>比特大陆 · AI 产品实习生</h3><p>参与 SophNet 企业级 MaaS / Agent 平台，交付客户管理 Skill 与企业后台消费明细模块。</p></div></section>
            <section><span>PROJECT</span><div class="d-resume-entry"><time>2026.02 — 2026.03</time><h3>AI 日程管理 Agent · 项目负责人</h3><p>独立完成从需求、产品方案到桌面端 MVP，重点设计 Agent Runtime、结构化记忆、多日历来源与评测闭环。</p></div></section>
            <section><span>CAPABILITIES</span><p>产品与需求分析 · AI 产品与 Agent 设计 · AI Coding · 数据与评测 · 技术协作</p></section>
          </article>
        </div>
      </aside>
    </div>
  `;
}

function variantE() {
  return `
    <div class="variant variant-e">
      <header class="e-header">
        <a class="e-wordmark" href="#e-home" aria-label="返回首页">
          <strong>王亦菲</strong><span>AI PRODUCT MANAGER</span>
        </a>
        <nav class="e-primary-nav" aria-label="主要导航">
          <a href="#e-home">首页</a>
          <a href="#e-experience">产品经历</a>
          <a href="#e-vibe">Vibe Coding</a>
          <a href="#e-education">教育背景</a>
          <a href="#e-skills">技能与爱好</a>
        </nav>
        <button class="e-resume-button" type="button" data-open-resume>简历预览 <span>↗</span></button>
      </header>

      <main id="main-content">
        <section class="e-hero" id="e-home">
          <div class="e-hero-copy">
            <div class="e-hero-meta">
              <p class="e-kicker"><span>求职方向</span> 2027 届秋招</p>
              <p class="e-school"><img src="./assets/heu-emblem-official.jpg" alt="哈尔滨工程大学校徽" /><strong>哈尔滨工程大学</strong></p>
            </div>
            <h1 class="e-identity-title"><strong>王亦菲</strong><span>AI 产品经理</span></h1>
            <ul class="e-intro e-intro-list" aria-label="个人经历概览">
              <li><b>02<small>段</small></b><span>实习</span><p><strong>字节跳动、比特大陆</strong><em>· AI 产品实习生</em></p></li>
              <li><b>01<small>个</small></b><span>项目</span><p><strong>日程管理 Agent</strong><em>· 个人 Vibe Coding 项目</em></p></li>
              <li><b aria-hidden="true">CS</b><span>背景</span><p><strong>计算机专业硕士研究生</strong><em>· 2027 届</em></p></li>
            </ul>
            <div class="e-hero-actions">
              <a href="#e-experience">沿着经历认识我 <span>↓</span></a>
              <button type="button" data-open-resume>查看简历</button>
            </div>
          </div>

          <div class="e-hero-stage" aria-label="个人照片与 oil-visual 创作场景">
            <div class="e-stage-note e-stage-note-top">FIELD NOTE<br /><strong>复杂输入 → 清晰行动</strong></div>
            <figure class="e-portrait-cutout">
              <img class="e-portrait-mask" src="./assets/portrait-flower-cutout-v3.png" alt="王亦菲戴着花环、手持花束的个人照片" />
            </figure>
          </div>
        </section>

        <section class="e-section e-experience" id="e-experience">
          <header class="e-section-heading e-experience-heading" data-reveal>
            <div>
              <span>产品实习 / 01</span>
              <p>PRODUCT INTERNSHIP · 2026.07 — 至今</p>
            </div>
            <div class="e-experience-title">
              <p>第一段产品实习</p>
              <h2>把复杂工单流程，重构为可验证、可闭环的 Agent 系统。</h2>
            </div>
          </header>

          <article class="e-case e-case-ola" data-reveal>
            <div class="e-case-copy">
              <h2 class="e-case-role-title">字节跳动 · AI 产品实习生</h2>
              <p class="e-case-team">AI 客服 OLA Agent Harness 团队</p>
              <div class="e-case-project-intro">
                <h3>端到端智能工单 Agent</h3>
                <p class="e-case-project-summary">面向汽水二线工单，自动读取工单与会话、检索知识、查询业务事实并生成处理方案，调用退款/再次触达/服务方案透传等工具实现工单完结。</p>
              </div>
              <ul class="e-ola-highlights" aria-label="个人贡献重点">
                <li><span>项目建设</span><p>参与 OLA 在线服务 Agent Harness 场景应用，推进汽水音乐二线退款工单自动关单；基于 OLA Work 将标准化人工流程重构为云端自动处理链路。</p></li>
                <li><span>方案落地</span><p>完成效果验证与方案设计，搭建“主 Agent 处理 + Verify Agent 独立校验”双智能体流程；规划 <b>24 项</b> ByteHi CLI 能力，并建立日志、Trace 与异常升级机制。</p></li>
              </ul>
              <div class="e-ola-results">
                <p class="e-ola-results-label">业务收益</p>
                <div class="e-ola-context" aria-label="业务收益数据">
                  <div><strong>≈100</strong><span>张二线工单 / 日</span></div>
                  <div><strong>60%+</strong><span>退款场景占比</span></div>
                  <div><strong>≈92%</strong><span>连续一周准确率</span></div>
                  <div><strong>≈80%</strong><span>人力节省 · 6→1</span></div>
                </div>
              </div>
            </div>
            <figure class="e-case-visual e-case-ola-visual">
              <img class="e-case-field-photo" src="./assets/bytedance-internship-v1.jpeg" alt="字节跳动实习期间的办公环境与个人工牌" />
              <figcaption><span>FIELD NOTE · BYTEDANCE 2026</span><strong>在真实业务现场推进 Agent 灰度</strong></figcaption>
            </figure>
          </article>

          <header class="e-section-heading e-experience-heading e-experience-heading-secondary" data-reveal>
            <div>
              <span>产品实习 / 02</span>
              <p>PRODUCT INTERNSHIP · 2026.04 — 2026.07</p>
            </div>
            <div class="e-experience-title">
              <p>第二段产品实习</p>
              <h2>把企业级 AI 能力，落成可交付、可运营的平台产品。</h2>
            </div>
          </header>

          <article class="e-case e-case-sophnet" data-reveal>
            <div class="e-case-copy">
              <h2 class="e-case-role-title">比特大陆 · AI 产品实习生</h2>
              <div class="e-case-project-intro">
                <h3>SophNet 企业级<br />Mass / Agent 平台</h3>
                <p class="e-case-project-summary">参与企业级 AI 平台 SophNet 的产品化与应用开发工作，平台主要包含 MaaS 模型服务与 OpenClaw 云端 AI Agent 两大模块，实习期间参与平台核心功能建设，熟悉大模型企业级应用与运营管理的完整链路。</p>
              </div>
              <ul class="e-sophnet-highlights" aria-label="SophClaw 优化与计费能力建设">
                <li><span>SophClaw 优化</span><p>独立开发客户管理 Skill，设计 <b>SKILL.md</b> 使用规约与 <b>Python CLI</b> 工具调用链，为 SophClaw 拓展企业客户管理场景</p></li>
                <li><span>计费能力建设</span><p>负责企业后台消费明细模块开发，支持用户充值、模型 Token 消纳、Sophclaw 实例订阅、调账记录等资金流水查询</p></li>
              </ul>
              <div class="e-sophnet-results">
                <p class="e-sophnet-results-label">量化结果</p>
                <div class="e-sophnet-context" aria-label="在职交付指标">
                  <div><strong>3</strong><span>个 B 端客户交付</span></div>
                  <div><strong>5</strong><span>个定制模块上线</span></div>
                  <div><strong>120+</strong><span>Skill 首周下载</span></div>
                  <div><strong>4</strong><span>类资金流水展示</span></div>
                </div>
              </div>
            </div>
            <figure class="e-case-visual">
              <img class="e-case-bitmain-photo" src="./assets/bitmain-internship-v1.jpeg" alt="比特大陆实习期间在公司前台与机器人装置合影" />
              <figcaption><span>FIELD NOTE · BITMAIN 2026</span><strong>在企业级 AI 平台现场推进产品交付</strong></figcaption>
            </figure>
          </article>
        </section>

        <section class="e-section e-vibe" id="e-vibe">
          <header class="e-section-heading e-heading-inverse" data-reveal>
            <div><span>02 / VIBE CODING</span><p>个人 AI 项目</p></div>
            <h2><span>从我的时间管理习惯出发，</span><span>把想法做成日程 Agent。</span></h2>
          </header>

          <article class="e-case e-case-schedule" data-reveal>
            <div class="e-project-story">
              <header class="e-project-story-meta">
                <span>CASE 03 · PERSONAL PROJECT</span>
                <strong>0 → 1 · 40 DAYS</strong>
              </header>

              <div class="e-project-story-hero">
                <div>
                  <p class="e-case-org">SCHEDUL · 个人效率项目</p>
                  <h3>AI 日程管理 Agent</h3>
                </div>
                <p class="e-project-story-lead">不是替代日历，而是在日历之上建立可确认的智能协作层。</p>
              </div>

              <div class="e-project-story-grid">
                <section class="e-project-story-block e-project-story-thinking">
                  <span>01 / 背景与判断</span>
                  <h4>Agent 负责理解与规划，用户保留最终控制权。</h4>
                  <p>查询、创建、找时间、改期、取消与复盘都由同一协作层承接；复杂变更先生成方案，再允许查看、编辑、拒绝或确认，降低模型误操作的信任成本。</p>
                </section>

                <section class="e-project-story-block e-project-story-work">
                  <span>02 / 核心工作</span>
                  <ul>
                    <li><b>执行链路</b><p>LLM Planner + 受控工具集 + Agent Loop + 计划工作区</p></li>
                    <li><b>偏好记忆</b><p>用可追溯证据沉淀时段、时长与缓冲习惯，不越过确认边界</p></li>
                    <li><b>多源日历</b><p>统一 Apple、飞书与托管日历的查询、冲突判断和权威写回</p></li>
                  </ul>
                </section>

                <section class="e-project-story-block e-project-story-results">
                  <span>03 / 结果证据</span>
                  <div class="e-project-metrics" aria-label="项目结果">
                    <div><strong>40 天</strong><p>独立完成桌面端 APP 0→1</p></div>
                    <div><strong>98.2%</strong><p>核心 Case 硬断言通过率</p></div>
                    <div><strong>100%</strong><p>P0 核心路径通过</p></div>
                    <div><strong>7.6s</strong><p>单轮响应 P50 · P90 14.1s</p></div>
                  </div>
                </section>

                <section class="e-project-story-block e-project-story-feedback">
                  <header class="e-project-feedback-heading">
                    <span>04 / 真实试用反馈</span>
                    <p class="e-feedback-audience"><strong>≈10 位试用者</strong><span>同学 · 老师 · 同事</span></p>
                  </header>
                  <div class="e-feedback-proof">
                    <ul>
                      <li><b>反馈 → 迭代</b><p>高频使用的飞书日历有迁移成本，推动我增加飞书与 Apple 日程同步，让 Agent 成为日历之上的协作层。</p></li>
                      <li><b>价值时刻</b><p>期末周用它统筹考试、课程与作业：制定复习计划，并在截止前提醒完成。</p></li>
                    </ul>
                  </div>
                </section>
              </div>

              <figure class="e-project-dog" aria-label="确认结果的小狗插画">
                <img src="./assets/oil-dog-schedule-v1.png" alt="举着确认标记的暖黄色小狗" />
              </figure>
            </div>
          </article>

          <div class="e-demo-heading" data-reveal>
            <div><span>INTERACTIVE PRODUCT</span><h3>直接操作一次可信排程。</h3></div>
            <p>前端交互原型 · 固定模拟数据 · 不连接真实服务</p>
          </div>
          <div class="e-demo-shell e-schedul-shell" data-reveal data-schedul-root>${schedulAppMarkup()}</div>
        </section>

        <section class="e-section e-education" id="e-education">
          <header class="e-section-heading e-education-heading" data-reveal>
            <div><span>03 / EDUCATION</span><p>教育背景</p></div>
            <h2><span>计算机训练，</span><span>是产品判断的技术底座。</span></h2>
          </header>

          <div class="e-education-showcase" data-reveal>
            <article class="e-education-column">
              <header class="e-panel-heading">
                <div><span>EDUCATION</span><strong>01 / 学习路径</strong></div>
                <p>本科与硕士阶段，持续在计算机学科中训练技术理解与系统思维。</p>
              </header>

              <figure class="e-school-photo">
                <img src="./assets/heu-campus-main-building.png" alt="蓝天下的哈尔滨工程大学主楼与校名石" />
              </figure>

              <div class="e-school-list">
                <article><time>2024 — 2027</time><div><span>硕士 · 推免</span><h3>计算机科学与技术</h3><p>哈尔滨工程大学 · 计算机科学与技术学院</p></div></article>
                <article><time>2020 — 2024</time><div><span>本科</span><h3>软件工程</h3><p>哈尔滨工程大学 · 计算机科学与技术学院</p></div></article>
              </div>

              <footer class="e-education-foundation">
                <span>WHAT IT GIVES ME</span>
                <p>能和技术团队讨论边界，也能把复杂度重新翻译给用户。</p>
              </footer>
            </article>

            <section class="e-award-column" aria-labelledby="e-award-title">
              <header class="e-panel-heading e-award-heading">
                <div><span>AWARDS</span><strong>02 / 成果材料</strong></div>
                <div class="e-award-counter" aria-hidden="true"><strong data-award-current>01</strong><span>/ ${String(AWARDS.length).padStart(2, "0")}</span></div>
                <h3 id="e-award-title" data-award-title>${AWARDS[0].title}</h3>
                <p>点击最上方卡片继续翻动，也可使用左右方向键或下方按钮。</p>
              </header>

              <div class="e-award-deck" data-award-deck role="group" aria-roledescription="奖项图片轮播" aria-label="奖项材料，可翻动">
                ${AWARDS.map(
                  (award, index) => `
                    <button class="e-award-card" type="button" data-award-index="${index}" aria-label="${awardLabel(award)}，点击查看下一张">
                      <figure>
                        <img src="./assets/awards/${award.image}" alt="${award.title}相关材料" loading="lazy" />
                        <figcaption><span>${String(index + 1).padStart(2, "0")}</span><strong>${awardLabel(award)}</strong></figcaption>
                      </figure>
                    </button>
                  `,
                ).join("")}
              </div>

              <footer class="e-award-controls">
                <button type="button" data-award-direction="previous" aria-label="上一张奖项图片">←</button>
                <div><span>点击卡片或左右滑动翻页</span><i><b data-award-progress></b></i></div>
                <button type="button" data-award-direction="next" aria-label="下一张奖项图片">→</button>
              </footer>
              <p class="sr-only" data-award-live aria-live="polite"></p>
            </section>
          </div>
        </section>

        <section class="e-section e-skills" id="e-skills">
          <header class="e-section-heading" data-reveal>
            <div><span>04 / SKILLS & LIFE</span><p>技能与爱好</p></div>
            <h2>不做熟练度打分，<br />让能力回到使用证据。</h2>
          </header>

          <div class="e-skill-layout" data-reveal>
            <div class="e-skill-list" aria-label="能力列表">
              ${Object.entries(D_SKILLS)
                .map(
                  ([, item], index) => `
                    <article class="e-skill-item">
                      <span class="e-skill-index">0${index + 1}</span>
                      <div class="e-skill-heading">
                        <span>CAPABILITY</span>
                        <h3>${item.label}</h3>
                        <p>${item.title}</p>
                      </div>
                      <div class="e-skill-copy">
                        <p>${item.body}</p>
                        <strong>${item.evidence}</strong>
                      </div>
                    </article>
                  `,
                )
                .join("")}
            </div>
            <aside class="e-life-card">
              <span>LIFE NOTE · OUTSIDE WORK</span>
              <h3>用兴趣保持感受力。</h3>
              <p>跳舞、钢琴与旅行，是我切换节奏、获得灵感的方式。</p>
              ${hobbyGalleryMarkup()}
            </aside>
          </div>
        </section>

        <section class="e-resume-entry" id="e-resume-entry" data-reveal>
          <div>
            <span>05 / RESUME & CONTACT</span>
            <h2>如果您想更快地了解我，<br />可以直接打开简历。</h2>
          </div>
          <div class="e-contact-list">
            <div><span>EMAIL</span><a href="mailto:${PROFILE.email}">${PROFILE.email}</a><button type="button" data-copy-contact="email">复制</button></div>
          </div>
          <div class="e-resume-actions">
            <button type="button" data-open-resume>打开简历预览 <span>↗</span></button>
            <a href="./assets/wang-yifei-resume-draft-v1.pdf" download>下载 PDF <span>↓</span></a>
          </div>
        </section>

        <footer class="e-footer">
          <div><strong>王亦菲</strong><span>AI PRODUCT MANAGER</span></div>
          <span>PORTFOLIO · 2026</span>
        </footer>
      </main>

      <nav class="e-mobile-nav" aria-label="移动端章节导航">
        <a href="#e-home">首页</a><a href="#e-experience">经历</a><a href="#e-vibe">作品</a><a href="#e-skills">技能</a><button type="button" data-open-resume>简历</button>
      </nav>

      <div class="e-resume-backdrop" data-resume-backdrop hidden></div>
      <aside class="e-resume-viewer" data-resume-viewer aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="e-resume-title">
        <header>
          <div><span>RESUME PREVIEW · DRAFT</span><h2 id="e-resume-title">王亦菲 · 个人简历</h2></div>
          <div><a href="./assets/wang-yifei-resume-draft-v1.pdf" download>下载 PDF</a><button type="button" data-close-resume aria-label="关闭简历预览">关闭 ×</button></div>
        </header>
        <iframe data-resume-pdf data-src="./assets/wang-yifei-resume-draft-v1.pdf#view=FitH" title="王亦菲个人简历 PDF 预览"></iframe>
        <p>如果浏览器无法显示 PDF，请使用“下载 PDF”。</p>
      </aside>
    </div>
  `;
}

function contactSection(prefix) {
  return `
    <section class="contact-section ${prefix}-contact" id="contact" data-reveal>
      <div>
        <span>READY FOR A CONVERSATION</span>
        <h2>如果你也在思考 AI 如何进入真实任务，我们可以聊聊。</h2>
      </div>
      <dl>
        <div><dt>邮箱</dt><dd>待确认后公开</dd></div>
        <div><dt>所在城市</dt><dd>待确认后公开</dd></div>
        <div><dt>公开简历</dt><dd>校对完成后开放</dd></div>
      </dl>
      <button type="button" class="button button-primary" data-open-assistant>先问我的经历</button>
    </section>
    <footer class="site-footer">
      <span>王亦菲 · AI PRODUCT MANAGER</span>
      <span>当前为高保真交互原型，所有演示均使用虚构数据</span>
    </footer>
  `;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function schedulAppMarkup() {
  const navItems = [
    ["agent", "Agent", "智能排程"],
    ["schedule", "日程", "日历与新增"],
    ["review", "复盘", "事实复盘"],
    ["settings", "设置", "本地偏好"],
  ];

  return `
    <div class="schedul-app" aria-label="Schedul Manage 可交互产品原型">
      <header class="schedul-titlebar">
        <div class="schedul-traffic" aria-hidden="true"><i></i><i></i><i></i></div>
        <strong>Schedul Manage</strong>
        <span>交互原型 · 模拟数据</span>
      </header>
      <div class="schedul-layout">
        <aside class="schedul-sidebar">
          <div class="schedul-brand"><span>S</span><div><strong>Schedul</strong><small>本地日程协作层</small></div></div>
          <nav aria-label="Schedul 功能导航">
            ${navItems
              .map(
                ([id, label, note]) => `
                  <button type="button" data-schedul-view="${id}" aria-pressed="${schedulState.view === id}">
                    <i aria-hidden="true"></i><span><strong>${label}</strong><small>${note}</small></span>
                  </button>
                `,
              )
              .join("")}
          </nav>
          <p>所有操作仅发生在当前页面，不连接模型或真实日历。</p>
        </aside>
        <main class="schedul-main">${schedulViewMarkup()}</main>
      </div>
      <nav class="schedul-mobile-nav" aria-label="Schedul 移动端导航">
        ${navItems
          .map(
            ([id, label]) => `<button type="button" data-schedul-view="${id}" aria-pressed="${schedulState.view === id}">${label}</button>`,
          )
          .join("")}
      </nav>
    </div>
  `;
}

function schedulViewMarkup() {
  if (schedulState.view === "schedule") return schedulScheduleMarkup();
  if (schedulState.view === "review") return schedulReviewMarkup();
  if (schedulState.view === "settings") return schedulSettingsMarkup();
  return schedulAgentMarkup();
}

function schedulPageHead(kicker, title, body, extra = "") {
  return `
    <header class="schedul-page-head">
      <div><span>${kicker}</span><h4>${title}</h4><p>${body}</p></div>
      ${extra}
    </header>
  `;
}

function schedulAgentMarkup() {
  const demo = SCHEDUL_DEMOS[schedulState.scenario];
  const isIdle = schedulState.phase === "idle";
  const isThinking = schedulState.phase === "thinking";
  const hasPlan = ["proposal", "failure", "success"].includes(schedulState.phase);
  const isFailure = schedulState.phase === "failure";
  const isSuccess = schedulState.phase === "success";

  return `
    <section class="schedul-agent-view">
      ${schedulPageHead(
        "Local Schedule Agent",
        "Agent",
        "用自然语言表达安排，复杂操作先生成方案，再由你确认写入。",
        `<div class="schedul-head-actions"><button type="button" class="schedul-history-trigger" data-schedul-action="toggle-history" aria-expanded="${schedulState.historyOpen}">对话记录</button><div class="schedul-status"><i></i> 演示后端已连接</div></div>`,
      )}

      ${
        schedulState.historyOpen
          ? `<aside class="schedul-history-panel" aria-label="历史对话">
              <header><strong>对话</strong><button type="button" data-schedul-action="new-conversation">新建</button></header>
              <div>${SCHEDUL_HISTORY.map((item, index) => `<button type="button" data-schedul-history="${index}" aria-pressed="${schedulState.historyIndex === index}"><strong>${escapeHtml(item.title)}</strong><small>${item.stamp}</small></button>`).join("")}</div>
            </aside>`
          : ""
      }

      <section class="schedul-plan" aria-live="polite">
        <span>当前方案区</span>
        ${
          hasPlan
            ? `<div class="schedul-plan-card ${isFailure ? "is-error" : isSuccess ? "is-success" : ""}">
                <div><small>${demo.label}</small><strong>${demo.title}</strong><p>${demo.detail}</p></div>
                <dl><div><dt>时间</dt><dd>${escapeHtml(schedulState.selectedSlot)}</dd></div><div><dt>时长</dt><dd>${demo.duration}</dd></div><div><dt>状态</dt><dd>${isFailure ? "未写入" : isSuccess ? "已写入" : "待确认"}</dd></div></dl>
              </div>`
            : `<div class="schedul-plan-empty"><strong>${isThinking ? "正在组织方案" : "还没有待确认方案"}</strong><p>${isThinking ? "正在读取模拟日程、偏好和冲突状态。" : "清晰、低风险的日程会直接创建；复杂安排会先在这里生成方案。"}</p>${isThinking ? '<div class="schedul-loading"><i></i><i></i><i></i></div>' : ""}</div>`
        }
      </section>

      <section class="schedul-chat" aria-label="Agent 对话">
        <div class="schedul-messages" aria-live="polite">
          ${
            isIdle
              ? `<div class="schedul-welcome"><strong>想安排什么？</strong><p>从下面的真实产品场景开始，体验意图理解、冲突检查、确认与失败降级。</p></div>`
              : `<div class="schedul-bubble user">${escapeHtml(schedulState.request || demo.request)}</div>
                 <div class="schedul-bubble agent">${
                   isThinking
                     ? "我正在检查你的日程和偏好，生成可确认的下一步。"
                     : schedulState.phase === "history"
                       ? escapeHtml(SCHEDUL_HISTORY[schedulState.historyIndex]?.answer || "这条历史对话没有更多内容。")
                     : schedulState.phase === "discarded"
                       ? "已丢弃当前方案。"
                     : isFailure
                       ? `写入没有成功，原日程保持不变。${schedulState.retryCount ? "重试仍失败，已停止自动执行。" : "你可以重试一次，或复制修改草稿。"}`
                       : isSuccess
                         ? "已按确认方案写入模拟日历。你可以前往日程页核验，也可以撤销这次演示。"
                         : demo.conflict
                           ? `发现冲突：${demo.conflict}。我没有覆盖它，下面是两个连续空档。`
                           : "我参考了你的日程与已启用偏好，找到了以下候选时间。确认前不会写入。"
                 }</div>`
          }

          ${
            schedulState.phase === "proposal"
              ? `<div class="schedul-proposal">
                  <div><span>候选时间</span><small>${demo.duration}</small></div>
                  <div class="schedul-slot-list">
                    ${demo.slots.map((slot) => `<button type="button" data-schedul-slot="${slot}" aria-pressed="${schedulState.selectedSlot === slot}"><strong>${slot}</strong><small>${slot === demo.slots[0] ? "最早可用" : "空闲"}</small></button>`).join("")}
                  </div>
                  <div class="schedul-plan-actions"><button type="button" class="primary" data-schedul-action="confirm">确认写入</button><button type="button" data-schedul-action="discard">放弃方案</button></div>
                </div>`
              : ""
          }
          ${
            isFailure
              ? `<div class="schedul-plan-actions failure-actions"><button type="button" class="primary" data-schedul-action="retry" ${schedulState.retryCount ? "disabled" : ""}>${schedulState.retryCount ? "已停止重试" : "重试一次"}</button><button type="button" data-schedul-action="copy">${schedulState.copyNotice || "复制修改草稿"}</button></div>`
              : ""
          }
          ${
            isSuccess
              ? `<div class="schedul-plan-actions"><button type="button" class="primary" data-schedul-view="schedule">查看日程</button><button type="button" data-schedul-action="undo">撤销演示</button></div>`
              : ""
          }
        </div>

        <div class="schedul-prompts" aria-label="示例日程指令">
          ${Object.entries(SCHEDUL_DEMOS).map(([id, item]) => `<button type="button" data-schedul-prompt="${id}">${item.request}</button>`).join("")}
        </div>
        <form class="schedul-composer" data-schedul-form>
          <label class="sr-only" for="schedul-request">输入日程安排</label>
          <input id="schedul-request" name="request" autocomplete="off" placeholder="输入日程安排，或点击上方示例" value="${escapeHtml(isIdle || schedulState.phase === "discarded" ? "" : schedulState.request)}" ${isThinking ? "disabled" : ""} />
          <button type="submit" ${isThinking ? "disabled" : ""}>发送</button>
        </form>
      </section>
    </section>
  `;
}

function schedulDateLabel(offset, iso = false) {
  const dates = {
    "-1": { label: "8月19日 星期三", iso: "2026-08-19" },
    0: { label: "8月20日 星期四", iso: "2026-08-20" },
    1: { label: "8月21日 星期五", iso: "2026-08-21" },
  };
  const date = dates[String(Math.max(-1, Math.min(1, offset)))] || dates[0];
  return iso ? date.iso : date.label;
}

function schedulScheduleMarkup() {
  const dateLabel = schedulDateLabel(schedulState.scheduleDayOffset);
  return `
    <section class="schedul-schedule-view">
      ${schedulPageHead("日程安排", "把时间摆到眼前", "查看当天日程事实；手动补充不会进入 Agent 推理。")}
      <div class="schedul-datebar"><div><span>当天日程</span><strong>${dateLabel}</strong></div><div><button type="button" data-schedul-day="previous">上一天</button><button type="button" class="active" data-schedul-day="today">当天</button><button type="button" data-schedul-day="next">下一天</button></div></div>
      <div class="schedul-schedule-grid">
        <section class="schedul-day-card">
          <header><div><span>当天日程</span><strong>${dateLabel}</strong></div><small>${schedulState.events.length} 个事项</small></header>
          <ol class="schedul-event-list">
            ${schedulState.events.map((event, index) => `<li><i></i><time>${event.time}</time><div><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(event.meta)}</small></div><button type="button" data-schedul-remove="${index}">删除</button></li>`).join("")}
          </ol>
        </section>
        <aside class="schedul-quick-add">
          <span>手动新增</span><h5>快速记录</h5><p>适合已经确定的事项，Agent 推荐方案仍在对话页处理。</p>
          <form data-schedul-quick-form>
            <label>标题<input name="title" placeholder="例如：买药" required /></label>
            <div><label>开始<input name="start" type="time" value="09:00" /></label><label>结束<input name="end" type="time" value="10:00" /></label></div>
            <button type="submit">加入当天日程</button>
          </form>
        </aside>
      </div>
    </section>
  `;
}

function schedulReviewMarkup() {
  const reviewDate = schedulDateLabel(schedulState.reviewDayOffset, true);
  return `
    <section class="schedul-review-view">
      ${schedulPageHead("日程复盘", "只看事实，不替你下结论", "复盘根据时间线汇总已发生、未到时间、取消和待安排事项。")}
      <div class="schedul-review-date"><span>当天复盘</span><strong>${reviewDate}</strong><div><button type="button" data-schedul-review-day="previous">前一天</button><button type="button" class="active" data-schedul-review-day="today">当天</button><button type="button" data-schedul-review-day="next">后一天</button></div></div>
      <div class="schedul-review-grid">
        <section class="schedul-review-stats"><span>复盘范围</span><strong>${reviewDate}</strong><p>只根据日程事实生成，不推断事项是否完成。</p><div><article><b>${Math.max(3, schedulState.events.length)}</b><small>已安排</small></article><article><b>2</b><small>时间已过去</small></article><article><b>${Math.max(1, schedulState.events.length - 2)}</b><small>未到时间</small></article><article><b>1</b><small>已取消</small></article></div><aside><strong>复盘说明</strong><p>“已过去”仅根据时间判断，不代表事项已完成。</p></aside></section>
        <section class="schedul-fact-list"><span>时间已过去</span><h5>2 个事项</h5><ol><li><time>09:30–10:00</time><strong>产品站会</strong></li><li><time>14:00–15:00</time><strong>作品集评审</strong></li></ol><span>未到时间</span><h5>${Math.max(1, schedulState.events.length - 2)} 个事项</h5><ol>${schedulState.events.slice(2).map((event) => `<li><time>${event.time}</time><strong>${escapeHtml(event.title)}</strong></li>`).join("") || '<li><strong>没有未到时间事项</strong></li>'}</ol></section>
      </div>
    </section>
  `;
}

function schedulSettingsPanelMarkup() {
  if (schedulState.settingsSection === "defaults") {
    return `<section class="schedul-settings-panel">
      <span>排程默认值</span><h5>默认安排</h5><p>这些值会影响模糊时间和常见排程窗口的解释方式。</p>
      <div class="schedul-field-stack"><label>默认提醒提前分钟<input type="number" value="10" min="0" /></label><label>每周开始日<select><option>周一</option><option>周日</option></select></label></div>
      <article class="schedul-settings-surface"><h6>常用时间窗口</h6>
        ${[["上午","09:00","12:00"],["下午","14:00","18:00"],["晚上","19:00","21:00"]].map(([name,start,end], index) => `<div class="schedul-time-window"><label>名称<input value="${name}" /></label><label>开始<input type="time" value="${start}" /></label><label>结束<input type="time" value="${end}" /></label><label class="schedul-check"><input type="checkbox" ${index < 2 ? "checked" : ""} />启用</label></div>`).join("")}
      </article><footer><button type="button" class="primary" data-schedul-action="save-defaults">保存默认值</button></footer>
    </section>`;
  }

  if (schedulState.settingsSection === "calendars") {
    return `<section class="schedul-settings-panel schedul-calendar-panel">
      <span>日历来源</span><h5>外部数据源</h5><p>查看每个来源的写入能力、同步范围和当前同步状态。</p>
      <article class="schedul-source-card schedul-source-card-apple">
        <header><div class="schedul-source-title"><span class="schedul-source-badge ${schedulState.calendarConnected ? "connected" : "failed"}">${schedulState.calendarConnected ? "已连接" : "未连接"}</span><strong>Apple 日历连接</strong></div></header>
        <div class="schedul-source-summary"><div class="schedul-source-info"><strong>Apple 本地日历</strong><small>${schedulState.calendarConnected ? "已允许访问" : "需要重新授权"}<br />同步范围：Untitled、个人、大麦、工作、计划的提醒事项</small><button type="button" data-schedul-action="sync-apple">同步 Apple 本地日历</button></div><div class="schedul-source-actions"><button type="button" data-schedul-action="reauthorize-apple">重新授权 Apple 日历</button></div></div>
        <fieldset class="schedul-source-scope"><legend>同步范围</legend><div class="schedul-scope-grid"><label class="schedul-check"><input type="checkbox" checked />Untitled</label><label class="schedul-check"><input type="checkbox" checked />个人</label><label class="schedul-check"><input type="checkbox" checked />工作</label><label class="schedul-check"><input type="checkbox" checked />大麦</label><label class="schedul-check"><input type="checkbox" checked />计划的提醒事项</label><label class="schedul-check"><input type="checkbox" />生日（只读）</label><label class="schedul-check"><input type="checkbox" />中国大陆节假日（只读）</label><label class="schedul-check"><input type="checkbox" />Siri 建议（只读）</label></div><button type="button" data-schedul-action="save-calendar-scope">保存同步范围</button></fieldset>
      </article>
      <article class="schedul-source-card schedul-source-card-feishu">
        <header><div class="schedul-source-title"><span class="schedul-source-badge ${schedulState.feishuSyncHealthy ? "connected" : "failed"}">${schedulState.feishuSyncHealthy ? "已连接" : "同步失败"}</span><strong>飞书日历连接</strong></div></header>
        <div class="schedul-source-summary"><div><strong>飞书日历</strong><small>${schedulState.feishuConnected ? "已允许访问" : "需要重新连接"}<br />最近同步：2026年7月3日 17:27</small></div><div class="schedul-source-actions"><button type="button" data-schedul-action="refresh-feishu">刷新连接与日历列表</button><button type="button" data-schedul-action="sync-feishu">同步飞书日程</button></div></div>
        ${schedulState.feishuNotice ? `<p class="schedul-source-status">${escapeHtml(schedulState.feishuNotice)}</p>` : ""}
      </article>
    </section>`;
  }

  if (schedulState.settingsSection === "notifications") {
    return `<section class="schedul-settings-panel">
      <span>本地通知</span><h5>托管提醒</h5><p>只用于提醒你本人，不向日程参与者发送通知。</p>
      <article class="schedul-notification-card"><div><strong>通知权限</strong><p>当前状态：${schedulState.notificationAllowed ? "已允许" : "未允许"}</p></div><footer><button type="button" data-schedul-action="request-notification">请求权限</button><button type="button" data-schedul-action="test-notification">发送测试提醒</button></footer></article>
    </section>`;
  }

  if (schedulState.settingsSection === "ai") {
    return `<section class="schedul-settings-panel">
      <span>AI 语义理解</span><h5>Agent 模型</h5><p>配置后可运行一次语义理解测试，确认工具规划链路可用。</p>
      <article class="schedul-ai-card"><header><div><strong>大模型优先</strong><small>Prompt：tool-plan-v19-2026-06-30<br />API Key：已配置</small></div><button type="button" data-schedul-action="test-ai">测试 AI 理解</button></header><div class="schedul-ai-grid"><label>模型<input value="DeepSeek-V4-Flash" /></label><label>Base URL<input value="https://api.example.com/open-ai" /></label><label>超时时间（秒）<input type="number" value="20" /></label><label>API Key<input type="password" placeholder="已保存，留空则保留" /></label></div><label class="schedul-check"><input type="checkbox" />清除已保存的 API Key</label><button type="button" class="primary full" data-schedul-action="save-ai">保存 AI 配置</button></article>
    </section>`;
  }

  return `<section class="schedul-settings-panel schedul-preference-panel">
    <span>偏好记忆</span><h5>可管理的记忆</h5><p>候选偏好需要你确认，启用后才会影响时间推荐。</p>
    ${schedulState.preferenceExists ? `<article><header><button type="button" class="schedul-switch ${schedulState.preferenceEnabled ? "on" : ""}" data-schedul-action="toggle-preference" aria-pressed="${schedulState.preferenceEnabled}"><i></i><span>${schedulState.preferenceEnabled ? "已启用" : "未启用"}</span></button><strong>更偏好下午安排弹性事项</strong></header><label>标题<input value="更偏好下午安排弹性事项" /></label><label>描述<textarea>候选偏好，启用后找时间会优先推荐下午时间段。</textarea></label><div><label>偏好开始<input type="time" value="14:00" /></label><label>偏好结束<input type="time" value="18:00" /></label><label>权重<input type="number" value="60" /></label></div><aside>MVP 默认候选偏好，用于让用户理解和调整偏好机制。</aside><footer><button type="button" data-schedul-action="save-preference">保存偏好</button><button type="button" data-schedul-action="toggle-preference">${schedulState.preferenceEnabled ? "忽略" : "启用"}</button><button type="button" data-schedul-action="candidate-preference">设为候选</button><button type="button" data-schedul-action="delete-preference">删除</button></footer></article>` : `<div class="schedul-settings-empty"><strong>没有偏好记忆</strong><p>演示中的偏好已删除。你可以恢复默认候选以继续体验。</p><button type="button" data-schedul-action="restore-preference">恢复默认候选</button></div>`}
  </section>`;
}

function schedulSettingsMarkup() {
  const settingsItems = [
    ["defaults", "排程默认值", "提醒、周起始、常用时间"],
    ["calendars", "日历来源", "连接、同步状态和范围"],
    ["preference", "偏好记忆", "候选偏好和证据"],
    ["notifications", "本地通知", "权限和测试提醒"],
    ["ai", "AI 语义理解", "模型、密钥和连通测试"],
  ];
  return `
    <section class="schedul-settings-view">
      ${schedulPageHead("本地设置", "让 Agent 按你的节奏工作", "管理排程默认值、偏好记忆、提醒权限和 AI 语义理解配置。")}
      ${schedulState.notice ? `<div class="schedul-settings-notice" role="status">${escapeHtml(schedulState.notice)}</div>` : ""}
      <div class="schedul-settings-grid">
        <nav aria-label="设置分类">${settingsItems.map(([id,title,note], index) => `<button type="button" data-schedul-settings="${id}" class="${schedulState.settingsSection === id ? "active" : ""}" aria-pressed="${schedulState.settingsSection === id}"><i>${index + 1}</i><span><strong>${title}</strong><small>${note}</small></span></button>`).join("")}</nav>
        ${schedulSettingsPanelMarkup()}
      </div>
    </section>
  `;
}

function agentDemoMarkup() {
  const scenario = SCENARIOS[state.scenario];
  return `
    <div class="agent-demo" aria-label="AI 日程 Agent 场景模拟">
      <header class="demo-chrome">
        <div class="demo-brand"><span>S</span><strong>SCHEDUL</strong></div>
        <div class="demo-disclosure"><i></i> 模拟演示 · 无外部服务</div>
        <div class="demo-date">2026 / 08 / WEEK 3</div>
      </header>

      <div class="demo-body">
        <nav class="scenario-rail" aria-label="演示场景">
          <div class="rail-title"><span>SCENARIOS</span><strong>关键任务路径</strong></div>
          ${Object.entries(SCENARIOS)
            .map(
              ([id, item], index) => `
                <button type="button" data-scenario="${id}" aria-pressed="${state.scenario === id}">
                  <span>0${index + 1}</span>
                  <div><strong>${item.tab}</strong><small>${item.title}</small></div>
                </button>
              `,
            )
            .join("")}
          <p class="rail-note">所有步骤均可暂停、回退与复放。</p>
        </nav>

        <section class="trace-canvas" aria-label="执行事件流">
          <header>
            <div>
              <span>USER REQUEST</span>
              <p>“${scenario.request}”</p>
            </div>
            <strong data-demo-counter>00 / 0${scenario.events.length}</strong>
          </header>
          <div class="trace-progress"><i data-demo-progress></i></div>
          <ol class="trace-list" aria-live="polite">
            ${scenario.events
              .map(
                ([title, detail, kind], index) => `
                  <li data-trace-index="${index}" data-kind="${kind}">
                    <span class="trace-number">0${index + 1}</span>
                    <div><strong>${title}</strong><p>${detail}</p></div>
                    <span class="trace-state">等待</span>
                  </li>
                `,
              )
              .join("")}
          </ol>
        </section>

        <section class="calendar-canvas" aria-label="模拟周历结果">
          <header>
            <div><span>AUGUST</span><strong>本周日历</strong></div>
            <small>虚构数据</small>
          </header>
          ${calendarMarkup(scenario)}
          <div class="result-summary" data-show-step="${scenario.resultStep}">
            <span>RESULT</span><p>${scenario.outcome}</p>
          </div>
        </section>
      </div>

      <footer class="demo-controls">
        <div class="demo-step-copy">
          <span data-demo-status>准备开始</span>
          <p>${scenario.decision}</p>
        </div>
        <div class="control-buttons" role="group" aria-label="播放控制">
          <button type="button" data-demo-action="previous" aria-label="上一步">←</button>
          <button type="button" class="control-primary" data-demo-action="play">播放</button>
          <button type="button" data-demo-action="next" aria-label="下一步">→</button>
          <button type="button" data-demo-action="result">看结果</button>
          <button type="button" data-demo-action="reset">重置</button>
        </div>
      </footer>
    </div>
  `;
}

function calendarMarkup(scenario) {
  const days = [
    ["MON", "17"],
    ["TUE", "18"],
    ["WED", "19"],
    ["THU", "20"],
    ["FRI", "21"],
  ];

  return `
    <div class="calendar-grid">
      ${days
        .map(([day, date], index) => {
          const existing = scenario.conflict?.day === index
            ? `<div class="calendar-event existing" style="--event-row: 2"><strong>${scenario.conflict.label}</strong><span>${scenario.conflict.meta}</span></div>`
            : "";
          const result = scenario.event.day === index
            ? `<div class="calendar-event ${scenario.event.tone}" data-show-step="${scenario.resultStep}" style="--event-row: ${scenario.event.day === 1 ? 3 : scenario.event.day === 4 ? 5 : 4}"><strong>${scenario.event.label}</strong><span>${scenario.event.meta}</span></div>`
            : "";
          return `
            <div class="calendar-day ${index === 2 ? "today" : ""}">
              <div class="day-head"><span>${day}</span><strong>${date}</strong></div>
              <div class="day-slots">${existing}${result}</div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function bindPageEvents() {
  app.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.mode = button.dataset.mode;
      render();
    });
  });

  app.querySelectorAll("[data-toggle-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.theme = state.theme === "light" ? "dark" : "light";
      render();
    });
  });

  app.querySelectorAll("[data-evidence]").forEach((button) => {
    button.addEventListener("click", () => openEvidence(button.dataset.evidence, button));
  });

  app.querySelectorAll("[data-open-assistant]").forEach((button) => {
    button.addEventListener("click", () => openAssistant(button));
  });

  app.querySelectorAll("[data-open-resume]").forEach((button) => {
    button.addEventListener("click", () => openResume(button));
  });

  app.querySelectorAll("[data-close-resume]").forEach((button) => {
    button.addEventListener("click", closeResume);
  });

  app.querySelectorAll("[data-resume-backdrop]").forEach((backdrop) => {
    backdrop.addEventListener("click", closeResume);
  });

  app.querySelectorAll("[data-print-resume]").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  app.querySelectorAll("[data-copy-contact]").forEach((button) => {
    button.addEventListener("click", () => copyContact(button.dataset.copyContact, button));
  });

  app.querySelectorAll("[data-d-skill]").forEach((button) => {
    button.addEventListener("click", () => showDSkill(button.dataset.dSkill));
  });

  bindAwardEvents();
  bindHobbyCarouselEvents();
}

function bindHobbyCarouselEvents() {
  const carousel = app.querySelector("[data-hobby-carousel]");
  if (!carousel) return;
  let pointerStartX = null;

  app.querySelectorAll("[data-hobby-direction]").forEach((button) => {
    button.addEventListener("click", () => turnHobby(button.dataset.hobbyDirection === "next" ? 1 : -1));
  });

  app.querySelectorAll("[data-hobby-index]").forEach((button) => {
    button.addEventListener("click", () => selectHobby(Number(button.dataset.hobbyIndex)));
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      turnHobby(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      turnHobby(1);
    }
  });

  carousel.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });
  carousel.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) >= 44) turnHobby(distance < 0 ? 1 : -1);
  });
  carousel.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  updateHobbyCarousel();
}

function turnHobby(direction) {
  selectHobby((state.hobbyIndex + direction + HOBBIES.length) % HOBBIES.length);
}

function selectHobby(index) {
  if (!Number.isInteger(index) || index < 0 || index >= HOBBIES.length) return;
  state.hobbyIndex = index;
  updateHobbyCarousel();
}

function updateHobbyCarousel() {
  const track = app.querySelector("[data-hobby-track]");
  if (!track) return;
  track.style.transform = `translateX(-${state.hobbyIndex * 100}%)`;

  app.querySelectorAll("[data-hobby-slide]").forEach((slide) => {
    const active = Number(slide.dataset.hobbySlide) === state.hobbyIndex;
    slide.setAttribute("aria-hidden", String(!active));
    slide.querySelectorAll("a, button").forEach((control) => {
      control.tabIndex = active ? 0 : -1;
    });
  });

  app.querySelectorAll("[data-hobby-index]").forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.hobbyIndex) === state.hobbyIndex));
  });

  const counter = app.querySelector("[data-hobby-counter]");
  const live = app.querySelector("[data-hobby-live]");
  const hobby = HOBBIES[state.hobbyIndex];
  if (counter) counter.textContent = `${String(state.hobbyIndex + 1).padStart(2, "0")} / ${String(HOBBIES.length).padStart(2, "0")}`;
  if (live) live.textContent = `当前兴趣：${hobby.name}。${hobby.note}`;
}

function bindAwardEvents() {
  const deck = app.querySelector("[data-award-deck]");
  if (!deck) return;
  let pointerStartX = null;
  let suppressClick = false;

  app.querySelectorAll("[data-award-direction]").forEach((button) => {
    button.addEventListener("click", () => turnAwardDeck(button.dataset.awardDirection === "next" ? 1 : -1));
  });

  app.querySelectorAll("[data-award-index]").forEach((card) => {
    card.addEventListener("click", () => {
      if (!suppressClick && Number(card.dataset.awardIndex) === state.awardIndex) turnAwardDeck(1);
    });
  });

  deck.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      event.stopPropagation();
      turnAwardDeck(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();
      turnAwardDeck(1);
    }
  });
  deck.addEventListener("pointerdown", (event) => {
    pointerStartX = event.clientX;
  });
  deck.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 44) return;
    suppressClick = true;
    turnAwardDeck(distance < 0 ? 1 : -1);
    window.setTimeout(() => {
      suppressClick = false;
    }, 80);
  });
  deck.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  updateAwardDeck();
}

function turnAwardDeck(direction) {
  if (state.awardAnimating) return;
  const current = app.querySelector(`[data-award-index="${state.awardIndex}"]`);
  const finish = () => {
    state.awardIndex = (state.awardIndex + direction + AWARDS.length) % AWARDS.length;
    state.awardAnimating = false;
    current?.classList.remove("is-leaving");
    updateAwardDeck();
    if (direction < 0 && !state.lowMotion) {
      app.querySelector(`[data-award-index="${state.awardIndex}"]`)?.animate(
        [
          { opacity: 0, transform: "translateX(-28%) rotate(-7deg) scale(.96)" },
          { opacity: 1, transform: "translateX(0) rotate(-1deg) scale(1)" },
        ],
        { duration: 320, easing: "cubic-bezier(.22,1,.36,1)" },
      );
    }
  };

  if (state.lowMotion || direction < 0 || !current) {
    finish();
    return;
  }
  state.awardAnimating = true;
  current.classList.add("is-leaving");
  window.setTimeout(finish, 300);
}

function updateAwardDeck() {
  const cards = app.querySelectorAll("[data-award-index]");
  if (!cards.length) return;
  cards.forEach((card) => {
    const index = Number(card.dataset.awardIndex);
    const position = (index - state.awardIndex + AWARDS.length) % AWARDS.length;
    card.dataset.stackPosition = position < 4 ? String(position) : "hidden";
    card.style.zIndex = String(AWARDS.length - position);
    card.tabIndex = position === 0 ? 0 : -1;
    card.setAttribute("aria-hidden", String(position > 3));
  });
  const award = AWARDS[state.awardIndex];
  const current = app.querySelector("[data-award-current]");
  const title = app.querySelector("[data-award-title]");
  const progress = app.querySelector("[data-award-progress]");
  const live = app.querySelector("[data-award-live]");
  if (current) current.textContent = String(state.awardIndex + 1).padStart(2, "0");
  if (title) title.textContent = award.title;
  if (progress) progress.style.width = `${((state.awardIndex + 1) / AWARDS.length) * 100}%`;
  if (live) live.textContent = `第 ${state.awardIndex + 1} 张，共 ${AWARDS.length} 张：${awardLabel(award)}`;
}

function showDSkill(id) {
  const skill = D_SKILLS[id];
  const target = app.querySelector("[data-d-skill-detail]");
  if (!skill || !target) return;
  app.querySelectorAll("[data-d-skill]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.dSkill === id));
  });
  target.innerHTML = `<span>能力与证据</span><h3>${skill.title}</h3><p>${skill.body}</p><strong>${skill.evidence}</strong>`;
  target.animate?.(
    [
      { opacity: 0.35, transform: "translateY(6px)" },
      { opacity: 1, transform: "translateY(0)" },
    ],
    { duration: state.lowMotion ? 1 : 240, easing: "cubic-bezier(.22,1,.36,1)" },
  );
}

async function copyContact(field, button) {
  const value = PROFILE[field];
  if (!value) return;
  const original = button.textContent;
  try {
    await navigator.clipboard.writeText(value);
    button.textContent = "已复制";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    const valueNode = button.parentElement?.querySelector("a, span");
    if (valueNode && selection) {
      range.selectNodeContents(valueNode);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = "请手动复制";
    }
  }
  window.setTimeout(() => {
    button.textContent = original;
  }, 1800);
}

function openResume(trigger) {
  const viewer = app.querySelector("[data-resume-viewer]");
  const backdrop = app.querySelector("[data-resume-backdrop]");
  if (!viewer || !backdrop) return;
  lastFocusedElement = trigger;
  resumeReturnHash =
    window.location.hash && window.location.hash !== "#resume"
      ? window.location.hash
      : state.variant === "E"
        ? "#e-home"
        : "#d-home";
  backdrop.hidden = false;
  viewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("resume-open");
  const pdfFrame = viewer.querySelector("[data-resume-pdf]");
  if (pdfFrame && !pdfFrame.getAttribute("src")) {
    pdfFrame.setAttribute("src", pdfFrame.dataset.src);
  }
  requestAnimationFrame(() => {
    backdrop.classList.add("is-open");
    viewer.classList.add("is-open");
  });
  window.history.pushState({ resume: true }, "", "#resume");
  viewer.querySelector("[data-close-resume]")?.focus();
}

function closeResume() {
  const viewer = app.querySelector("[data-resume-viewer]");
  const backdrop = app.querySelector("[data-resume-backdrop]");
  if (!viewer || viewer.getAttribute("aria-hidden") === "true") return;
  viewer.classList.remove("is-open");
  viewer.setAttribute("aria-hidden", "true");
  backdrop?.classList.remove("is-open");
  document.body.classList.remove("resume-open");
  window.history.replaceState({}, "", resumeReturnHash);
  window.setTimeout(() => {
    if (backdrop) backdrop.hidden = true;
  }, 220);
  lastFocusedElement?.focus();
}

function isResumeOpen() {
  return app.querySelector("[data-resume-viewer]")?.getAttribute("aria-hidden") === "false";
}

function bindSchedulEvents() {
  const root = app.querySelector("[data-schedul-root]");
  if (!root) return;

  root.querySelectorAll("[data-schedul-view]").forEach((button) => {
    button.addEventListener("click", () => {
      schedulState.view = button.dataset.schedulView;
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-prompt]").forEach((button) => {
    button.addEventListener("click", () => startSchedulRequest(button.dataset.schedulPrompt));
  });

  root.querySelectorAll("[data-schedul-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      schedulState.selectedSlot = button.dataset.schedulSlot;
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      schedulState.settingsSection = button.dataset.schedulSettings;
      schedulState.notice = "";
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-history]").forEach((button) => {
    button.addEventListener("click", () => {
      schedulState.historyIndex = Number(button.dataset.schedulHistory);
      schedulState.request = SCHEDUL_HISTORY[schedulState.historyIndex].title;
      schedulState.phase = "history";
      schedulState.historyOpen = false;
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.schedulDay;
      schedulState.scheduleDayOffset = direction === "today" ? 0 : Math.max(-1, Math.min(1, schedulState.scheduleDayOffset + (direction === "next" ? 1 : -1)));
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-review-day]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.schedulReviewDay;
      schedulState.reviewDayOffset = direction === "today" ? 0 : Math.max(-1, Math.min(1, schedulState.reviewDayOffset + (direction === "next" ? 1 : -1)));
      replaceSchedulPrototype();
    });
  });

  root.querySelectorAll("[data-schedul-action]").forEach((button) => {
    button.addEventListener("click", () => handleSchedulAction(button.dataset.schedulAction));
  });

  root.querySelectorAll("[data-schedul-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      schedulState.events.splice(Number(button.dataset.schedulRemove), 1);
      replaceSchedulPrototype();
    });
  });

  root.querySelector("[data-schedul-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const request = new FormData(event.currentTarget).get("request")?.trim();
    if (!request) return;
    const scenario = /延后|周会|10[:：]?00/.test(request)
      ? "failure"
      : /评审|冲突|14[:：]?00/.test(request)
        ? "conflict"
        : "dinner";
    startSchedulRequest(scenario, request);
  });

  root.querySelector("[data-schedul-quick-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get("title")?.trim();
    if (!title) return;
    schedulState.events.push({
      time: `${data.get("start")}–${data.get("end")}`,
      title,
      meta: "手动新增 · 模拟日历",
    });
    replaceSchedulPrototype();
  });
}

function replaceSchedulPrototype() {
  const root = app.querySelector("[data-schedul-root]");
  if (!root) return;
  root.innerHTML = schedulAppMarkup();
  bindSchedulEvents();
}

function startSchedulRequest(scenario, customRequest = "") {
  window.clearTimeout(schedulTimer);
  const demo = SCHEDUL_DEMOS[scenario] || SCHEDUL_DEMOS.dinner;
  schedulState.view = "agent";
  schedulState.scenario = scenario in SCHEDUL_DEMOS ? scenario : "dinner";
  schedulState.request = customRequest || demo.request;
  schedulState.selectedSlot = demo.slots[0];
  schedulState.phase = "thinking";
  schedulState.retryCount = 0;
  schedulState.copyNotice = "";
  replaceSchedulPrototype();
  schedulTimer = window.setTimeout(() => {
    schedulState.phase = "proposal";
    replaceSchedulPrototype();
  }, state.lowMotion ? 140 : 760);
}

function handleSchedulAction(action) {
  const demo = SCHEDUL_DEMOS[schedulState.scenario];
  schedulState.notice = "";
  if (action === "toggle-history") {
    schedulState.historyOpen = !schedulState.historyOpen;
  }
  if (action === "new-conversation") {
    schedulState.historyOpen = false;
    schedulState.phase = "idle";
    schedulState.request = "";
  }
  if (action === "discard") {
    schedulState.phase = "discarded";
  }
  if (action === "confirm") {
    if (demo.failure) {
      schedulState.phase = "failure";
    } else {
      const start = schedulState.selectedSlot.match(/\d{2}:\d{2}/)?.[0] || demo.event.time.split("–")[0];
      const [hour, minute] = start.split(":").map(Number);
      const duration = Number(demo.duration.match(/\d+/)?.[0] || 60);
      const endMinutes = hour * 60 + minute + duration;
      const end = `${String(Math.floor(endMinutes / 60)).padStart(2, "0")}:${String(endMinutes % 60).padStart(2, "0")}`;
      schedulState.events = schedulState.events.filter((event) => event.meta !== `Schedul Agent · ${schedulState.scenario}`);
      schedulState.events.push({ time: `${start}–${end}`, title: demo.title, meta: `Schedul Agent · ${schedulState.scenario}` });
      schedulState.phase = "success";
    }
  }
  if (action === "undo") {
    schedulState.events = schedulState.events.filter((event) => event.meta !== `Schedul Agent · ${schedulState.scenario}`);
    schedulState.phase = "proposal";
  }
  if (action === "retry") {
    schedulState.retryCount += 1;
    schedulState.copyNotice = "";
  }
  if (action === "copy") {
    const text = `${demo.title}：${schedulState.selectedSlot}，${demo.duration}（尚未写入）`;
    navigator.clipboard?.writeText(text).catch(() => {});
    schedulState.copyNotice = "草稿已复制";
  }
  if (action === "toggle-preference") {
    schedulState.preferenceEnabled = !schedulState.preferenceEnabled;
    schedulState.notice = schedulState.preferenceEnabled ? "偏好已启用" : "偏好已忽略";
  }
  if (action === "save-defaults") schedulState.notice = "排程默认值已保存（模拟）";
  if (action === "toggle-calendar") {
    schedulState.calendarConnected = !schedulState.calendarConnected;
    schedulState.notice = schedulState.calendarConnected ? "日历来源已重新连接" : "日历来源已断开";
  }
  if (action === "sync-calendar") schedulState.notice = schedulState.calendarConnected ? "同步完成：3 个日历保持最新" : "请先连接日历来源";
  if (action === "reauthorize-apple") {
    schedulState.calendarConnected = true;
    schedulState.notice = "Apple 日历已重新授权（模拟）";
  }
  if (action === "sync-apple") schedulState.notice = schedulState.calendarConnected ? "Apple 本地日历同步完成（模拟）" : "请先重新授权 Apple 日历";
  if (action === "save-calendar-scope") schedulState.notice = "Apple 日历同步范围已保存（模拟）";
  if (action === "refresh-feishu") {
    schedulState.feishuConnected = true;
    schedulState.feishuSyncHealthy = true;
    schedulState.feishuNotice = "飞书连接状态已刷新";
    schedulState.notice = "飞书连接与日历列表已刷新（模拟）";
  }
  if (action === "sync-feishu") {
    schedulState.feishuSyncHealthy = true;
    schedulState.feishuNotice = "飞书日程同步完成";
    schedulState.notice = "飞书日程同步完成（模拟）";
  }
  if (action === "request-notification") {
    schedulState.notificationAllowed = true;
    schedulState.notice = "通知权限已允许（模拟）";
  }
  if (action === "test-notification") schedulState.notice = schedulState.notificationAllowed ? "测试提醒已发送（模拟）" : "请先允许通知权限";
  if (action === "test-ai") schedulState.notice = "语义理解测试通过：工具规划链路可用";
  if (action === "save-ai") schedulState.notice = "AI 配置已保存（模拟）";
  if (action === "save-preference") schedulState.notice = "偏好修改已保存";
  if (action === "candidate-preference") {
    schedulState.preferenceEnabled = false;
    schedulState.notice = "已设为候选，等待再次确认";
  }
  if (action === "delete-preference") {
    schedulState.preferenceExists = false;
    schedulState.notice = "偏好已从演示中删除";
  }
  if (action === "restore-preference") {
    schedulState.preferenceExists = true;
    schedulState.preferenceEnabled = true;
    schedulState.notice = "已恢复默认候选偏好";
  }
  replaceSchedulPrototype();
}

function bindDemoEvents() {
  app.querySelectorAll("[data-scenario]").forEach((button) => {
    button.addEventListener("click", () => {
      stopPlayback();
      state.scenario = button.dataset.scenario;
      state.step = 0;
      replaceDemo();
    });
  });

  app.querySelectorAll("[data-demo-action]").forEach((button) => {
    button.addEventListener("click", () => handleDemoAction(button.dataset.demoAction));
  });
}

function replaceDemo() {
  app.querySelectorAll("[data-demo-root]").forEach((root) => {
    root.innerHTML = agentDemoMarkup();
  });
  bindDemoEvents();
  updateDemo();
}

function handleDemoAction(action) {
  const scenario = SCENARIOS[state.scenario];
  if (action === "play") {
    if (state.playing) {
      stopPlayback();
      updateDemo();
      return;
    }
    if (state.step >= scenario.events.length) state.step = 0;
    state.playing = true;
    updateDemo();
    scheduleNextStep();
    return;
  }

  stopPlayback();
  if (action === "previous") state.step = Math.max(0, state.step - 1);
  if (action === "next") state.step = Math.min(scenario.events.length, state.step + 1);
  if (action === "result") state.step = scenario.events.length;
  if (action === "reset") state.step = 0;
  updateDemo();
}

function scheduleNextStep() {
  const delay = state.lowMotion ? 120 : 920;
  playTimer = window.setTimeout(() => {
    const total = SCENARIOS[state.scenario].events.length;
    state.step = Math.min(total, state.step + 1);
    updateDemo();
    if (state.step < total && state.playing) {
      scheduleNextStep();
    } else {
      state.playing = false;
      updateDemo();
    }
  }, delay);
}

function stopPlayback() {
  state.playing = false;
  window.clearTimeout(playTimer);
  playTimer = null;
}

function updateDemo() {
  const scenario = SCENARIOS[state.scenario];
  const total = scenario.events.length;
  app.querySelectorAll("[data-demo-counter]").forEach((counter) => {
    counter.textContent = `${String(state.step).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  });
  app.querySelectorAll("[data-demo-progress]").forEach((progress) => {
    progress.style.width = `${(state.step / total) * 100}%`;
  });

  app.querySelectorAll("[data-trace-index]").forEach((item) => {
    const index = Number(item.dataset.traceIndex);
    const visible = index < state.step;
    const active = index === state.step - 1;
    item.classList.toggle("is-visible", visible);
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-current", active ? "step" : "false");
    const label = item.querySelector(".trace-state");
    if (label) label.textContent = active ? "当前" : visible ? "完成" : "等待";
  });

  app.querySelectorAll("[data-show-step]").forEach((element) => {
    const shouldShow = state.step >= Number(element.dataset.showStep);
    element.classList.toggle("is-shown", shouldShow);
    element.setAttribute("aria-hidden", String(!shouldShow));
  });

  app.querySelectorAll("[data-demo-status]").forEach((status) => {
    status.textContent = state.playing
      ? `正在执行第 ${Math.min(state.step + 1, total)} 步`
      : state.step === 0
        ? "准备开始"
        : state.step === total
          ? "场景已完成"
          : `已暂停在第 ${state.step} 步`;
  });

  app.querySelectorAll('[data-demo-action="play"]').forEach((button) => {
    button.textContent = state.playing ? "暂停" : state.step === total ? "重播" : "播放";
  });
  app.querySelectorAll('[data-demo-action="previous"]').forEach((button) => {
    button.disabled = state.step === 0;
  });
  app.querySelectorAll('[data-demo-action="next"]').forEach((button) => {
    button.disabled = state.step === total;
  });
}

function setupRevealMotion() {
  revealObserver?.disconnect();
  const elements = app.querySelectorAll("[data-reveal]");
  if (state.lowMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("revealed"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8%" },
  );
  elements.forEach((element) => revealObserver.observe(element));
}

function openEvidence(id, trigger) {
  const evidence = EVIDENCE[id];
  if (!evidence) return;
  lastFocusedElement = trigger;
  document.querySelector("#evidence-title").textContent = evidence.title;
  document.querySelector("[data-evidence-content]").innerHTML = `
    <dl class="evidence-meta">
      <div><dt>证据性质</dt><dd>${evidence.nature}</dd></div>
      <div><dt>公开状态</dt><dd>${evidence.status}</dd></div>
    </dl>
    <h3>它说明什么</h3>
    <p>${evidence.body}</p>
    <h3>可信边界</h3>
    <p>${evidence.boundary}</p>
  `;
  evidenceDrawer.classList.add("is-open");
  evidenceDrawer.setAttribute("aria-hidden", "false");
  drawerBackdrop.hidden = false;
  requestAnimationFrame(() => drawerBackdrop.classList.add("is-open"));
  document.querySelector("[data-close-evidence]").focus();
}

function closeEvidence() {
  evidenceDrawer.classList.remove("is-open");
  evidenceDrawer.setAttribute("aria-hidden", "true");
  drawerBackdrop.classList.remove("is-open");
  window.setTimeout(() => {
    drawerBackdrop.hidden = true;
  }, 220);
  lastFocusedElement?.focus();
}

function openAssistant(trigger) {
  lastFocusedElement = trigger;
  assistant.classList.add("is-open");
  assistant.setAttribute("aria-hidden", "false");
  document.querySelector("#assistant-input").focus();
}

function closeAssistant() {
  assistant.classList.remove("is-open");
  assistant.setAttribute("aria-hidden", "true");
  lastFocusedElement?.focus();
}

function showAssistantAnswer(id) {
  const item = ASSISTANT_ANSWERS[id];
  const target = document.querySelector("[data-assistant-answer]");
  if (!item) {
    target.textContent = "现有公开材料中没有相关信息。你可以询问日程 Agent、字节 OLA、SophNet 或指标口径。";
    return;
  }
  target.innerHTML = `<p>${item.answer}</p><a href="${item.href}" data-assistant-citation>${item.citation} ↗</a>`;
  target.querySelector("a")?.addEventListener("click", closeAssistant);
}

function initAssistant() {
  const suggestions = document.querySelector("[data-assistant-suggestions]");
  suggestions.innerHTML = Object.entries(ASSISTANT_ANSWERS)
    .slice(0, 3)
    .map(([id, item]) => `<button type="button" data-assistant-question="${id}">${item.question}</button>`)
    .join("");
  suggestions.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => showAssistantAnswer(button.dataset.assistantQuestion));
  });

  document.querySelector("[data-assistant-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    const question = new FormData(event.currentTarget).get("question").trim();
    if (/字节|OLA|客服/i.test(question)) return showAssistantAnswer("ola");
    if (/指标|数字|数据|真实|效果/i.test(question)) return showAssistantAnswer("metrics");
    if (/日程|Agent|智能体|项目/i.test(question)) return showAssistantAnswer("schedule");
    if (/适合|能力|岗位|为什么/i.test(question)) return showAssistantAnswer("fit");
    showAssistantAnswer(null);
  });
}

document.querySelector("[data-close-evidence]").addEventListener("click", closeEvidence);
document.querySelector("[data-close-assistant]").addEventListener("click", closeAssistant);
drawerBackdrop.addEventListener("click", closeEvidence);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (isResumeOpen()) closeResume();
    if (evidenceDrawer.classList.contains("is-open")) closeEvidence();
    if (assistant.classList.contains("is-open")) closeAssistant();
    return;
  }
  if (isResumeOpen()) return;
  const tag = event.target.tagName?.toLowerCase();
  if (["input", "textarea", "select"].includes(tag) || event.target.isContentEditable) return;
});

window.addEventListener("popstate", () => {
  state.variant = variantFromUrl();
  state.theme = defaultTheme(state.variant);
  render();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopPlayback();
    updateDemo();
  }
});

initAssistant();
render();
