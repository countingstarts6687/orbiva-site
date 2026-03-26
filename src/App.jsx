import React, { useMemo, useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const brand = {
  navy: "#0E2841",
  blue: "#1A3D5F",
  blueSoft: "#4A6D8C",
  lightBlue: "#64B5F6",
  mint: "#7BE0D1",
  mintSoft: "#C7F3EC",
  white: "#FFFFFF",
  logoBlue: "#223E7D",
};

function ChevronRight({ className = "" }) {
  return <span className={className}>›</span>;
}

function BrandLogo({ className = "", textClassName = "", dark = false, withTagline = false }) {
  const wordColor = dark ? "#F8FAFC" : brand.logoBlue;
  const taglineColor = dark ? "rgba(226,232,240,0.72)" : "#6B7280";
  return (
    <div className={cn("inline-flex items-center", className)}>
      <div
        className={cn("font-light leading-none tracking-[-0.06em]", textClassName || "text-[34px] sm:text-[40px]")}
        style={{
          color: wordColor,
          fontFamily:
            'ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        MedTech Living
      </div>
      {withTagline && (
        <div className="ml-3 hidden sm:block">
          <div className="text-[10px] uppercase tracking-[0.22em]" style={{ color: taglineColor }}>
            AIoT · Healthcare Intelligence
          </div>
        </div>
      )}
    </div>
  );
}

function GlassPanel({ children, className = "" }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-white/14 bg-white/68 backdrop-blur-xl",
        className
      )}
      style={{
        boxShadow: "0 26px 72px -34px rgba(11,31,51,0.24), inset 0 1px 0 rgba(255,255,255,0.38)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0.02) 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ children, variant = "default", className = "", style = {}, ...props }) {
  const isOutline = variant === "outline";
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.10em]",
        isOutline ? "text-slate-700" : "text-white",
        className
      )}
      style={{
        borderColor: isOutline ? "rgba(26,61,95,0.12)" : "rgba(255,255,255,0.10)",
        background: isOutline
          ? "rgba(255,255,255,0.78)"
          : "linear-gradient(135deg, rgba(26,61,95,0.96) 0%, rgba(14,40,65,0.98) 100%)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={cn("relative overflow-hidden rounded-[30px] border bg-white/78 backdrop-blur-xl", className)}
      style={{
        borderColor: "rgba(26,61,95,0.10)",
        boxShadow: "0 24px 60px -34px rgba(11,31,51,0.18), inset 0 1px 0 rgba(255,255,255,0.42)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.04) 46%, rgba(255,255,255,0.01) 100%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function CardHeader({ children, className = "" }) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardTitle({ children, className = "" }) {
  return <h3 className={cn("font-semibold tracking-tight", className)}>{children}</h3>;
}

function CardDescription({ children, className = "" }) {
  return <p className={className}>{children}</p>;
}

function SectionTitle({ eyebrow, title, description, dark = false }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div
          className="h-px w-14"
          style={{
            background: dark
              ? "linear-gradient(90deg, rgba(100,181,246,0) 0%, rgba(100,181,246,0.75) 100%)"
              : "linear-gradient(90deg, rgba(100,181,246,0) 0%, rgba(26,61,95,0.35) 100%)",
          }}
        />
        <Badge
          variant="outline"
          className={cn("px-3.5 py-1.5", dark && "text-slate-100")}
          style={
            dark
              ? {
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.14)",
                  color: "#E2E8F0",
                }
              : {}
          }
        >
          {eyebrow}
        </Badge>
      </div>
      <div className="space-y-3">
        <h2 className={cn("text-[30px] font-semibold tracking-[-0.03em] sm:text-[40px]", dark ? "text-white" : "text-slate-950")}>
          {title}
        </h2>
        <p className={cn("max-w-2xl text-sm leading-7 sm:text-[15px]", dark ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      </div>
    </div>
  );
}

function SectionShell({ id, children, dark = false, className = "" }) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden rounded-[34px] border px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10",
        className
      )}
      style={{
        background: dark
          ? "linear-gradient(135deg, rgba(7,21,34,0.98) 0%, rgba(10,30,48,0.96) 48%, rgba(18,59,84,0.94) 100%)"
          : "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(248,251,253,0.76) 100%)",
        borderColor: dark ? "rgba(255,255,255,0.08)" : "rgba(26,61,95,0.10)",
        boxShadow: dark
          ? "0 34px 90px -46px rgba(7,18,31,0.72)"
          : "0 26px 70px -42px rgba(11,31,51,0.18)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: dark
            ? "radial-gradient(circle at top right, rgba(123,224,209,0.12) 0%, rgba(123,224,209,0) 28%), radial-gradient(circle at 18% 18%, rgba(100,181,246,0.12) 0%, rgba(100,181,246,0) 26%), linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)"
            : "radial-gradient(circle at top right, rgba(100,181,246,0.18) 0%, rgba(100,181,246,0) 32%), linear-gradient(180deg, rgba(255,255,255,0.42) 0%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: dark
            ? "linear-gradient(90deg, transparent 0%, rgba(100,181,246,0.65) 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(26,61,95,0.20) 50%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -right-10 top-6 h-32 w-32 rounded-full bg-sky-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-slate-200/40 blur-3xl" />
      {dark && <div className="pointer-events-none absolute left-[10%] top-[18%] h-20 w-20 rounded-full border border-emerald-200/10" />}
      {dark && <div className="pointer-events-none absolute right-[12%] bottom-[12%] h-16 w-16 rounded-full border border-sky-200/10" />}
      <div className="relative">{children}</div>
    </section>
  );
}

function StatCard({ label, value, note }) {
  return (
    <Card className="overflow-hidden bg-white/88">
      <CardContent className="p-5">
        <div className="mb-4 h-1.5 w-14 rounded-full" style={{ background: "linear-gradient(90deg, #64B5F6 0%, #1A3D5F 100%)" }} />
        <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">{label}</div>
        <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</div>
        <div className="mt-2 text-sm text-slate-500">{note}</div>
      </CardContent>
    </Card>
  );
}

const heroStats = [
  { label: "目标硬件营收", value: "$10M", note: "2026 VivaBox 目标" },
  { label: "全球 AI 医疗 CAGR", value: "38.6%", note: "2025–2030" },
  { label: "全球 RPM 市场", value: "$480B", note: "2030 年规模" },
  { label: "印尼 BPJS 覆盖", value: "260M+", note: "国家级医保入口" },
];

const overviewIntroCards = [
  { title: "Home Control IoT 技术", desc: "30+ 年 IoT 积累，具备全球渠道与制造基础。", bullets: ["30+ 年 IoT", "全球渠道", "制造基础"] },
  { title: "NTU AI 团队", desc: "具备 SEA-Lion、医疗安全与国家级医疗 AI 项目经验。", bullets: ["SEA-Lion", "医疗安全", "临床合作"] },
  { title: "股东资源注入", desc: "潜在连接印尼国家级项目与主权医疗大模型机会。", bullets: ["印尼项目", "主权模型", "AI Agent"] },
];

const opportunityStats = [
  { label: "全球 AI 医疗 CAGR", value: "38.6%", note: "2025–2030" },
  { label: "亚太地区", value: "增速最快", note: "2033 预计 1000 亿美元" },
  { label: "亚太远程医疗", value: "$21B", note: "2025 市场规模" },
  { label: "2030 预估", value: "$40.8B", note: "预计翻倍增长" },
];

const validationCases = [
  { name: "OpenEvidence", region: "美国 · 临床决策 AI", statA: "$12B", takeaway: "垂直医疗 AI 商业价值已被验证。" },
  { name: "Ping An Good Doctor", region: "中国 · AI + 医生模式", statA: "亿级", takeaway: "AI 先问诊、医生后介入，合规路径清晰。" },
  { name: "Halodoc / Alodokter", region: "印尼 · 健康平台", statA: "3000万+", takeaway: "本地流量入口成熟，但 AI 能力仍有空白。" },
  { name: "Synapxe SELENA+", region: "新加坡 · 国家级 AI", statA: "全国部署", takeaway: "政府采购与国家级部署路径已被验证。" },
];

const entryPillars = [
  { title: "新加坡", subtitle: "技术合规基地", bullets: ["NTU 合作", "HSA 认证", "GDPR / HIPAA"] },
  { title: "印尼", subtitle: "规模化首发市场", bullets: ["2.7 亿人口", "市场空白", "数字医疗战略"] },
  { title: "核心能力", subtitle: "硬件 + 算法双引擎", bullets: ["IoT 基因", "算法能力", "全球渠道"] },
];

const entryBarriers = ["政策壁垒", "数据壁垒", "技术壁垒"];

const capabilityData = [
  {
    key: "hardware",
    title: "AI 硬件生态",
    subtitle: "VivaBox 产品矩阵 + 家庭健康数据入口",
    highlight: "AI 硬件是用户入口与数据采集引擎。",
    bullets: ["VivaBox 为核心终端", "全球渠道获客", "家庭场景 Digital Twin", "2026 目标营收 $10M"],
  },
  {
    key: "model",
    title: "AI 大模型",
    subtitle: "主权化 + 本地化医疗大模型底座",
    highlight: "AI 大模型是技术底座与行业背书。",
    bullets: ["闭源 + 政府背书", "数据不出境", "本土语言与疾病谱", "三步走战略"],
  },
  {
    key: "service",
    title: "创新服务",
    subtitle: "Web3 + 药企服务 + 定制化解决方案",
    highlight: "创新服务是高毛利增长引擎。",
    bullets: ["数据主权与激励", "RWS 与精算数据包", "定制化解决方案", "ToB 高毛利飞轮"],
  },
];

const flywheelCards = [
  { title: "AI 硬件", subtitle: "VivaBox 产品矩阵", points: ["家庭场景", "数字孪生", "$10M 目标"] },
  { title: "AI 大模型", subtitle: "底座能力 + 印尼样板", points: ["闭源", "政府背书", "IP 联合持有"] },
  { title: "创新服务", subtitle: "Web3 · 药企 · 定制化", points: ["数据授权", "高毛利", "增长引擎"] },
];

const tokenConceptCards = [
  { title: "为什么需要 Token Hub", body: "让医疗健康数据在主权不转移的前提下流通。" },
  { title: "核心判断", body: "它不是数据仓库，而是一套价值流通基础设施。" },
  { title: "先发优势", body: "信任、硬件锚点与激励机制需要时间累积。" },
  { title: "MedTech Living 切入点", body: "VivaBox + NTU + Web3 共同构成护城河。" },
];

const tokenAttributes = ["算力", "信息", "价值", "回报"];

const tokenArchitectureLayers = [
  { stage: "生产层", title: "Token Production", items: ["Vivastation", "VivaCard", "AI Server"] },
  { stage: "加工层", title: "Token Processing", items: ["NTU + MedTech Living OS", "原子化处理", "多源标准化"] },
  { stage: "分发层", title: "Token Distribution", items: ["美国 CMS", "印尼国家平台", "默认调用协议"] },
  { stage: "激励层", title: "Token Incentive", items: ["药企 / 保险付费", "Web3 激励", "更强飞轮"] },
];

const hardwareProducts = [
  { title: "VivaBox Cube", subtitle: "核心入口", note: "高频交互 · 数据连续性" },
  { title: "VivaBox App", subtitle: "数据分析中枢", note: "健康孪生体 · 全设备整合" },
];

const hardwareMatrixGroups = [
  { title: "核心体征", items: ["乳酸芯片", "睡眠监测仪"] },
  { title: "生活行为", items: ["智能压力坐垫", "追踪药箱"] },
  { title: "环境背景", items: ["智能魔镜", "光疗灯"] },
];

const saasPlans = [
  { title: "免费版", users: "体验用户", features: ["基础指标", "异常检测", "7 天存储"] },
  { title: "基础版", users: "中老年群体", features: ["健康评分", "14 天预警", "20 次语音问答"] },
  { title: "专业版", users: "慢病 / 运动人群", features: ["多维分析", "30 天预测", "长期存储"] },
];

const modelComparisonRows = [
  { label: "数据主权", MedTech Living: "数据不出境", external: "需跨境上传" },
  { label: "逻辑可控", MedTech Living: "可解释、可审计", external: "黑盒运行" },
  { label: "IP 控制权", MedTech Living: "联合持有", external: "依赖外部巨头" },
];

const modelLevers = [
  { title: "技术殖民", desc: "必须深度适配本土疾病谱与文化语境。" },
  { title: "生物安全", desc: "国民健康数据是国家战略情报。" },
  { title: "时间杠杆", desc: "抢占 3–5 年窗口期。" },
];

const modelRoadmap = [
  { stage: "2026 H1", title: "Healthcare 平台", desc: "先建立业务入口。" },
  { stage: "2026 H2", title: "AI Server", desc: "实现数据不出境。" },
  { stage: "2027+", title: "医疗大模型", desc: "通过 API 与服务费变现。" },
];

const servicePillars = [
  { title: "Web3 服务", subtitle: "数据授权层", metric: "激励飞轮" },
  { title: "药企服务", subtitle: "ToB 数据变现层", metric: "~70% 毛利率" },
  { title: "定制化解决方案", subtitle: "交付层", metric: "~41% 毛利率" },
];

const servicePricingModes = ["数据授权费", "API 调用", "营销效果计费"];

const marketTabs = [
  { key: "overview", label: "RPM 概览" },
  { key: "logic", label: "协同逻辑" },
  { key: "us", label: "美国 CMS" },
  { key: "indonesia", label: "印尼主权 AI" },
  { key: "partners", label: "合作生态" },
];

const rpmDrivers = [
  { title: "政策驱动", body: "HIPAA 新规推动合规升级，现有竞品出现真空。" },
  { title: "技术驱动", body: "高质量医疗数据成为 AI 大模型的关键燃料。" },
  { title: "支付驱动", body: "政府 / 医保采购推动市场从尝试走向规模化。" },
];

const rpmCutinPoints = [
  { title: "北美市场", body: "以 CMS ACCESS 模型申请为入口，卡位 RPM 合规解决方案。" },
  { title: "东南亚市场", body: "新加坡验证，印尼规模化复制。" },
  { title: "共同逻辑", body: "政府付费、医院减负、患者零成本获设备。" },
];

const logicBlocks = [
  { title: "① 数据问题：院内数据不够", body: "RPM 需要高质量、持续、可信的数据，院内数据无法覆盖日常 80% 健康状态。", tags: ["居家设备", "Home Healthcare"] },
  { title: "② AI 赋能：提升 Token 质量", body: "边缘计算与标准化处理把原始数据变成高价值报告与结构化数据集。", tags: ["原子化处理", "时间序列", "结构化报告"] },
  { title: "③ 商业模式：ToG + ToC", body: "居民获得可信服务，政府获得精算与公共卫生决策能力。", tags: ["ToC 管理", "ToG 管理", "政府关系"] },
];

const logicPaths = [
  { title: "路径一：美国 CMS 新政卡位", body: "HIPAA 新规 + ACCESS 申请窗口，是进入北美 RPM 的战略杠杆。" },
  { title: "路径二：印尼国家主权 AI 专项", body: "建立印尼唯一医疗健康 Token 调用入口。" },
];

const usWindows = [
  { title: "2026 年 HIPAA 新规", body: "要求 RPM 设备满足全程加密、最小必要原则与物理授权记录。", tag: "合规真空" },
  { title: "CMS ACCESS 模型", body: "进入 ACCESS 等于获得 CMS 认可，并建立 6–12 个月壁垒。", tag: "政府级背书" },
  { title: "FDA TEMPO 通道", body: "试验与认证可同步推进，大幅降低进入风险。", tag: "加速通道" },
];

const usReimbursement = [
  { code: "CPT 99453", label: "初始设置", value: "~$22" },
  { code: "CPT 99454/99445", label: "设备监测费", value: "~$47/月" },
  { code: "CPT 99457/99470", label: "管理费", value: "$26–50/月" },
  { code: "CPT 99458", label: "追加管理", value: "~$41/次" },
  { code: "合计上限", label: "每患者每月", value: "~$181" },
];

const indonesiaWhyCards = [
  { title: "医疗资源短缺", metric: "0.47 名医生/千人", body: "基层医疗缺口巨大，AI 辅助需求迫切。" },
  { title: "语言壁垒", metric: "77% 偏好印尼语", body: "本土语言模型是落地硬门槛。" },
  { title: "慢病负担沉重", metric: "糖尿病 / 高血压 / 结核病", body: "慢病管理是高频刚需场景。" },
  { title: "政策窗口", metric: "数字医疗战略", body: "国民健康数据被视作国家战略情报。" },
];

const indonesiaRoadmap = [
  { stage: "01 Healthcare 平台", time: "2026 H1", body: "建立平台入口与高质量 RAW DATA。" },
  { stage: "02 AI Server", time: "2026 H2", body: "与印尼合资方共建服务器，完成数据主权基础设施。" },
  { stage: "03 印尼本土医疗 AI 大脑", time: "2027+", body: "训练印尼语垂直医疗模型，并启动 Token 平台商业化。" },
];

const indonesiaOutcomes = ["唯一合规入口", "数据加工能力", "国家主权联合实验室", "Token 调用变现", "公共卫生价值", "先发锁定效应"];

const partnerCards = [
  { title: "目标政府授权方", desc: "提供政策许可、国家背书、公信力与政府采购渠道。", tag: "政策支持" },
  { title: "印尼市场渗透方", desc: "深度渗透医院系统，具备本地政府与医院渠道资源。", tag: "市场渗透" },
  { title: "MedTech Living", desc: "提供技术平台、医疗网络资源与跨区域落地经验。", tag: "技术平台" },
  { title: "南洋理工大学 NTU AI", desc: "提供算法团队、核心专利能力与学术背书。", tag: "算法与 IP" },
];

const geoCards = [
  { city: "香港", role: "集团总部", bullets: ["集团总部 / 资本运作 / 法律合规", "港股平台融资能力", "品牌背书与公信力", "连接内地资源"] },
  { city: "深圳", role: "供应链 & 研发工程中心", bullets: ["研发中心 / 供应链 / 制造", "中国白牌 AIoT 供应链整合", "硬件研发与生产", "成本优势与柔性生产"] },
  { city: "新加坡", role: "技术合规基地", bullets: ["技术合规基地 / 国际市场销售", "NTU 合作与算法能力", "新加坡产地认证（HSA）", "东南亚市场准入"] },
];

const geoSynergy = [
  { title: "资本与品牌", body: "香港提供融资能力与品牌背书。" },
  { title: "技术与制造", body: "深圳提供供应链与生产能力。" },
  { title: "合规与市场", body: "新加坡提供认证与市场准入。" },
];

const entityBudgets = [
  {
    city: "香港",
    role: "集团总部",
    people: "战略及合规管理",
    total: "HK$ 40,000k",
    items: [["投融资相关", "200"], ["商业规划 / 法律 / 财务顾问", "12,000"], ["日常经营", "2,800"], ["战略研发投入", "25,000"]],
    note: "不包括对深圳和新加坡主体的初始投入。",
  },
  {
    city: "新加坡",
    role: "技术合规基地",
    people: "核心研发及商业化团队 5–10 人",
    total: "HK$ 31,000k",
    items: [["产品初期开发及工程化落地", "4,600"], ["技术基础设施及 AIoT 研发经费", "5,000"], ["日常经营", "1,400"], ["战略研发投入", "20,000"]],
    note: "未包含 NTU 新增 IP 购买费用。",
  },
  {
    city: "深圳",
    role: "供应链 & 研发工程中心",
    people: "重点技术 / 供应链管理人员 5–10 人",
    total: "HK$ 9,300k",
    items: [["供应链及生产合作", "1,800"], ["产品 / 架构 / 研发 AI 工具等", "1,000"], ["办公 / 行政 / 合规 / 差旅", "1,500"], ["业务启动与缓冲", "5,000"]],
    note: "非利润主体，以给母公司提供服务为主。",
  },
];

const budgetHighlights = [
  { label: "Total OPEX", value: "~ 20,000–30,000k", note: "短期运营开支" },
  { label: "Total CAPEX", value: "~ 50,000k+", note: "长期投入" },
  { label: "直接收入预期", value: "HK$ 40,000–80,000k", note: "中短期收入区间" },
];

const outputTargets = [
  "品牌心智占位 + 核心技术护城河",
  "RPM 赛道卡位 + 锁定未来规模化增长",
  "直接收入预期 HK$ 40,000–80,000k",
];

const supplyChainFlow = [
  { title: "01 上游 · 中国供应链", subtitle: "低成本采购", desc: "主体是白牌 AIoT 厂商，核心动作是低采购成本、高品控、柔性生产。" },
  { title: "02 中游 · 新加坡品牌升级", subtitle: "高附加值组装", desc: "由 MedTech Living 新加坡完成 AIoT 协议改造、产地认证与品牌升级。" },
  { title: "03 下游 · 国际市场", subtitle: "品牌溢价销售", desc: "通过 MedTech Living 全球渠道释放 B2B / B2G / D2C 三渠道的品牌溢价。" },
];

const shenzhenReasons = [
  { title: "Speed to Market", body: "深圳具备高度压缩的打样与原型迭代能力。" },
  { title: "人才密度与成本效率", body: "硬件工程、供应链与制造人才密集，效率更高。" },
  { title: "闭环质控", body: "在生产现场部署专职 QC 可显著降低质量事故风险。" },
  { title: "成本套利", body: "直接嵌入中国成熟供应链生态，有助于压缩整体生产支出。" },
];

const shenzhenUpdate = [
  ["公司名称", "MedTech Living (Shenzhen) Intelligent Tech Co., Ltd / 欧博凡（深圳）智能科技有限公司"],
  ["成立日期", "2026-03-18"],
  ["股权结构", "MedTech Living Limited 100% 子公司"],
  ["办公地点", "南山（高科技产业与人才聚集区）"],
];

const singaporeImportance = [
  { title: "法律架构基础", body: "MedTech Living 在新加坡成立实体，并通过合资等方式进入印尼市场。" },
  { title: "国际通行证", body: "新加坡 100% 产地认证 + HSA 医疗认证，为产品提供国际通行证。" },
  { title: "NTU AI 技术沉淀", body: "帮助快速推出 / 拿到项目，并作为合作伙伴背书。" },
];

const singaporeTimeline = ["Q1 谈判推进", "Q2 注册落地", "Q3 运营启动", "Q4 业务展开"];

const executionPhases = [
  {
    quarter: "Q1",
    range: "1–3月",
    focus: "董事会授权",
    model: ["新加坡主体谈判推进", "印尼项目深度对接"],
    hardware: ["三地实体注册启动", "技术供应商筛选"],
    company: ["董事会授权获取", "全球 IP 抢注启动"],
  },
  {
    quarter: "Q2",
    range: "4–6月",
    focus: "实体落地",
    model: ["印尼合资公司注册启动", "标杆医院谈判推进", "NTU 联合实验室筹备"],
    hardware: ["三地实体全部落地", "VivaBox 原型机完成"],
    company: ["全球 IP 抢注完成"],
  },
  {
    quarter: "Q3",
    range: "7–9月",
    focus: "产品上市",
    model: ["AI Server 建设启动", "国家主权联合创新实验室挂牌"],
    hardware: ["Amazon / TikTok 电商正式启动", "深圳认证供应链建成", "首批 VivaBox 出货"],
    company: ["品牌全球化推广启动", "创新服务框架协议谈判"],
  },
  {
    quarter: "Q4",
    range: "10–12月",
    focus: "营收冲刺",
    model: ["Healthcare 平台规模化交付推进"],
    hardware: ["Kickstarter 众筹发起", "黑五 / Prime Day 营收冲刺"],
    company: ["季度及全年营收目标达成", "首批药企数据合作启动"],
  },
];

const executionOutlook = {
  model: "印尼本土大模型数据采集机制建立。",
  hardware: "数据平台上线；AI 硬件用户规模突破里程碑。",
  company: "A 轮融资路演启动；从硬件销售转向创新服务变现。",
};

const riskItems = [
  { level: "高", title: "新加坡主体成立进度", symptom: "这是所有东南亚业务的法律前提。", response: "列为高优先级，并尽快明确授权。" },
  { level: "高", title: "印尼政府授权推进", symptom: "政府部门决策周期长，正式授权时间存在不确定性。", response: "把授权文件作为项目启动前置条件。" },
  { level: "高", title: "技术伙伴依赖", symptom: "关键技术集中于 NTU。", response: "协议明确技术转让里程碑与退出机制。" },
  { level: "中", title: "医院合作落实", symptom: "医院数据共享与合作意愿存在摩擦。", response: "引入医院中高层利益绑定机制。" },
  { level: "中", title: "数据质量与标准化", symptom: "医院数据标准差异大。", response: "前期投入标准化资源。" },
  { level: "中", title: "AI 硬件营收达成", symptom: "$10M 目标依赖 Q3 供应链建成与 Q4 电商冲量。", response: "提前锁定供应商并启动预售测试。" },
  { level: "中", title: "算力成本超支", symptom: "训练需求快速增长可能推高云成本。", response: "提前签订云平台框架协议。" },
  { level: "低", title: "市场竞争加剧", symptom: "其他国际机构可能进入印尼主权医疗 AI 市场。", response: "尽快形成政策与数据双重壁垒。" },
];

const sectionLinks = [
  ["overview", "01 公司定位、核心资产与行业机会"],
  ["capabilities", "02 三大核心能力"],
  ["market", "03 市场机会"],
  ["geo", "04 三地协同架构"],
  ["execution", "05 2026 执行计划"],
];

export default function MedTech LivingInteractiveBoardSite() {
  const [activeCapability, setActiveCapability] = useState("hardware");
  const [activeMarketTab, setActiveMarketTab] = useState("overview");
  const [activeExecutionQuarter, setActiveExecutionQuarter] = useState("Q1");
  const [activeRiskLevel, setActiveRiskLevel] = useState("全部");

  const activeData = useMemo(
    () => capabilityData.find((item) => item.key === activeCapability) ?? capabilityData[0],
    [activeCapability]
  );

  const activePhase = useMemo(
    () => executionPhases.find((item) => item.quarter === activeExecutionQuarter) ?? executionPhases[0],
    [activeExecutionQuarter]
  );

  const filteredRisks = useMemo(
    () => riskItems.filter((item) => activeRiskLevel === "全部" || item.level === activeRiskLevel),
    [activeRiskLevel]
  );

  return (
    <div
      className="min-h-screen text-slate-950"
      style={{
        background:
          "radial-gradient(circle at 10% 8%, rgba(123,224,209,0.24) 0%, rgba(123,224,209,0) 22%), radial-gradient(circle at 84% 10%, rgba(100,181,246,0.22) 0%, rgba(100,181,246,0) 26%), radial-gradient(circle at 52% 30%, rgba(199,243,236,0.18) 0%, rgba(199,243,236,0) 24%), linear-gradient(180deg, #E6F5F4 0%, #EDF6FB 26%, #E9F1F8 56%, #F3F7FB 100%)",
      }}
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-24 top-[-3rem] h-[30rem] w-[30rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(123,224,209,0.30) 0%, rgba(123,224,209,0) 68%)" }} />
        <div className="absolute right-[-4rem] top-[1rem] h-[34rem] w-[34rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(100,181,246,0.26) 0%, rgba(100,181,246,0) 72%)" }} />
        <div className="absolute left-[30%] top-[28rem] h-[22rem] w-[22rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(199,243,236,0.34) 0%, rgba(199,243,236,0) 72%)" }} />
        <div className="absolute right-[10%] bottom-[-5rem] h-[26rem] w-[26rem] rounded-full blur-3xl" style={{ background: "radial-gradient(circle, rgba(74,109,140,0.18) 0%, rgba(74,109,140,0) 72%)" }} />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(26,61,95,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(26,61,95,0.07) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
            maskImage: "linear-gradient(180deg, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 46%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-[7rem] h-[16rem] opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10px 10px, rgba(14,40,65,0.20) 2px, transparent 2.5px)",
            backgroundSize: "34px 34px",
            maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.82) 18%, rgba(0,0,0,0.82) 82%, transparent 100%)",
          }}
        />
        <div className="absolute right-[8%] top-[6rem] h-[16rem] w-[16rem] rounded-full border border-sky-300/22" />
        <div className="absolute right-[10%] top-[8rem] h-[12rem] w-[12rem] rounded-full border border-emerald-200/24" />
        <div className="absolute right-[13%] top-[11rem] h-[6rem] w-[6rem] rounded-full border border-white/25 bg-white/8 backdrop-blur-sm" />
        <div className="absolute right-[25%] top-[11rem] h-3 w-3 rounded-full bg-emerald-300/85 shadow-[0_0_22px_rgba(123,224,209,0.9)]" />
        <div className="absolute right-[7%] top-[18rem] h-2.5 w-2.5 rounded-full bg-sky-300/80 shadow-[0_0_18px_rgba(100,181,246,0.95)]" />
        <div
          className="absolute left-[6%] top-[17rem] h-[6rem] w-[22rem] opacity-[0.18]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='520' height='120' viewBox='0 0 520 120'%3E%3Cpath d='M0 70h82l18-26 22 48 30-62 24 38h344' fill='none' stroke='%231A3D5F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <GlassPanel className="sticky top-4 z-40 rounded-[24px]">
          <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-[18px] bg-white/92 px-3 py-2 shadow-sm">
                <BrandLogo className="gap-0" textClassName="text-[34px] sm:text-[38px]" />
              </div>
              <div>
                <div className="text-xs tracking-[0.18em] text-slate-500">INTERACTIVE BOARD SITE</div>
              </div>
            </div>
            <div className="hidden flex-wrap items-center gap-2 lg:flex">
              {sectionLinks.map(([id, label]) => (
                <button
                  key={id}
                  className="rounded-full px-3 py-2 text-sm text-slate-600 transition hover:bg-white hover:text-slate-950"
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </GlassPanel>

        <main className="space-y-6 pt-6 lg:pt-8">
          <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(7,18,31,0.98)_0%,rgba(12,32,52,0.96)_58%,rgba(22,56,91,0.93)_100%)] p-7 shadow-[0_38px_100px_-46px_rgba(7,18,31,0.86)] sm:p-8 lg:p-10">
              <div className="absolute inset-0 opacity-90" style={{ background: "radial-gradient(circle at 14% 16%, rgba(123,224,209,0.20) 0%, rgba(123,224,209,0) 24%), radial-gradient(circle at 84% 20%, rgba(100,181,246,0.20) 0%, rgba(100,181,246,0) 20%), radial-gradient(circle at 70% 72%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 18%)" }} />
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(100,181,246,0.8),transparent)]" />
              <div className="absolute right-[-2rem] top-[3.5rem] hidden h-[20rem] w-[20rem] lg:block" aria-hidden="true">
                <div className="absolute inset-0 rounded-full border border-white/10" />
                <div className="absolute inset-[1.4rem] rounded-full border border-emerald-200/16" />
                <div className="absolute inset-[3.1rem] rounded-full border border-sky-200/18" />
                <div className="absolute left-[50%] top-[50%] h-[4.8rem] w-[4.8rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/18 bg-white/8 backdrop-blur-sm" />
                <div className="absolute left-[50%] top-[2rem] h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(123,224,209,0.85)]" />
                <div className="absolute right-[2.5rem] top-[50%] h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-sky-300 shadow-[0_0_20px_rgba(100,181,246,0.95)]" />
                <div className="absolute bottom-[2.4rem] left-[28%] h-2.5 w-2.5 rounded-full bg-white/70 shadow-[0_0_16px_rgba(255,255,255,0.65)]" />
                <div className="absolute left-[2rem] top-[54%] h-[4.8rem] w-[8rem] rounded-[20px] border border-white/12 bg-white/8 backdrop-blur-md" />
                <div className="absolute left-[2.8rem] top-[5rem] h-[3.8rem] w-[7.2rem] rounded-[18px] border border-white/10 bg-white/6 backdrop-blur-md" />
                <div className="absolute left-[2.95rem] top-[5.8rem] h-[0.42rem] w-[4.3rem] rounded-full bg-emerald-200/80" />
                <div className="absolute left-[2.95rem] top-[6.75rem] h-[0.35rem] w-[2.6rem] rounded-full bg-white/55" />
                <div className="absolute left-[2.95rem] top-[7.5rem] h-[0.35rem] w-[3.4rem] rounded-full bg-sky-200/55" />
                <div className="absolute left-[2.7rem] top-[54.9%] h-[0.4rem] w-[4.8rem] rounded-full bg-sky-200/70" />
                <div className="absolute left-[2.7rem] top-[57.2%] h-[0.35rem] w-[2.8rem] rounded-full bg-white/55" />
                <div className="absolute left-[2.7rem] top-[59.1%] h-[0.35rem] w-[5.6rem] rounded-full bg-emerald-200/55" />
              </div>

              <div className="relative flex h-full flex-col justify-between gap-8">
                <div className="space-y-6 text-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge>2026 全球业务推进方案</Badge>
                    <Badge variant="outline" style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}>Interactive Board</Badge>
                    <Badge variant="outline" style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", color: "#FFFFFF" }}>HealthTech Brand Site</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex rounded-[24px] border border-white/10 bg-white/92 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.48)]">
                      <BrandLogo className="gap-0" textClassName="text-[40px] sm:text-[50px]" withTagline />
                    </div>
                    <div className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-[15px]">
                      点击下方板块可直接进入相应章节。
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="outline" style={{ borderColor: "rgba(123,224,209,0.24)", background: "rgba(123,224,209,0.12)", color: "#E6FFFB" }}>Home Health</Badge>
                      <Badge variant="outline" style={{ borderColor: "rgba(100,181,246,0.22)", background: "rgba(100,181,246,0.10)", color: "#EAF6FF" }}>Medical AI</Badge>
                      <Badge variant="outline" style={{ borderColor: "rgba(255,255,255,0.16)", background: "rgba(255,255,255,0.08)", color: "#F8FAFC" }}>AIoT Ecosystem</Badge>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {sectionLinks.map(([target, label], index) => (
                    <button
                      key={target}
                      type="button"
                      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                      className="group flex items-center justify-between rounded-[20px] border px-4 py-4 text-left transition"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(180deg, rgba(224,242,245,0.95) 0%, rgba(203,230,235,0.90) 100%)"
                            : "linear-gradient(180deg, rgba(245,250,251,0.18) 0%, rgba(255,255,255,0.10) 100%)",
                        borderColor: index === 0 ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.10)",
                        boxShadow: index === 0 ? "0 18px 30px -22px rgba(0,0,0,0.42)" : "inset 0 1px 0 rgba(255,255,255,0.12)",
                      }}
                    >
                      <div className="flex min-w-0 items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold tracking-[0.14em]" style={{ color: index === 0 ? "#0A6C72" : "#E2E8F0", background: index === 0 ? "rgba(255,255,255,0.68)" : "rgba(255,255,255,0.10)" }}>
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className={cn("min-w-0 text-[15px] font-medium leading-6 sm:text-[16px]", index === 0 ? "text-[#066970]" : "text-white")}>
                          {label}
                        </div>
                      </div>
                      <div className={cn("ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition group-hover:translate-x-0.5", index === 0 ? "text-[#066970]" : "text-slate-200")} style={{ background: index === 0 ? "rgba(255,255,255,0.52)" : "rgba(255,255,255,0.10)" }}>
                        ›
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              <GlassPanel className="rounded-[32px] p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500">Key Indicators</div>
                    <div className="mt-1 text-lg font-semibold text-slate-950">HealthTech Board View</div>
                  </div>
                  <Badge variant="outline">Live Snapshot</Badge>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {heroStats.map((item) => (
                    <StatCard key={item.label} {...item} />
                  ))}
                </div>
              </GlassPanel>

              </div>
          </section>

          <SectionShell id="overview">
            <div className="space-y-8">
              <SectionTitle eyebrow="PART 01" title="公司定位、核心资产与行业机会" description="从公司定位、核心资产到行业机会与入场逻辑的整体概览。" />

              <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <Card className="bg-white/92">
                  <CardHeader className="space-y-4">
                    <Badge variant="outline">关于 MedTech Living</Badge>
                    <CardTitle className="text-2xl text-slate-950">以 AIoT 为核心的新一代健康科技品牌</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-600">
                      MedTech Living 是 Home Control International（1747.HK）旗下全资子公司，以家庭健康监测为切入点，构建硬件、软件、数据、服务一体化的健康生态平台。
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">核心定位</div>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        以终端、医疗数据、算法能力与跨区域合规路径为底座，抢占东南亚健康科技的入口型基础设施位置。
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-4 lg:grid-cols-3">
                  {overviewIntroCards.map((item) => (
                    <Card key={item.title} className="h-full bg-white/92">
                      <CardHeader className="space-y-3">
                        <CardTitle className="text-lg text-slate-950">{item.title}</CardTitle>
                        <CardDescription className="text-sm leading-7 text-slate-600">{item.desc}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 px-6 pb-6">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="rounded-[18px] border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                            {bullet}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <Card className="bg-white/92">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-950">全球 AI 医疗市场：规模与增长</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-500">亚太与东南亚是最关键增长区间。</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 px-6 pb-6 sm:grid-cols-2">
                    {opportunityStats.map((item) => (
                      <StatCard key={item.label} {...item} />
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/92">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-950">赛道验证：代表性公司与模式</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-500">垂直医疗 AI、本地化流量入口与政府采购路径都已被验证。</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-2">
                    {validationCases.map((item) => (
                      <div key={item.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                        <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.region}</div>
                        <div className="mt-2 text-lg font-semibold text-slate-950">{item.name}</div>
                        <div className="mt-4 rounded-[18px] bg-white p-3">
                          <div className="text-xl font-semibold text-slate-950">{item.statA}</div>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{item.takeaway}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <SectionShell dark className="px-6 py-6 sm:px-7 sm:py-7">
                <div className="space-y-7 text-white">
                  <div className="space-y-3">
                    <div className="text-xs uppercase tracking-[0.22em] text-sky-100/70">MedTech Living 入场逻辑</div>
                    <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">以新加坡为技术合规基地，以印尼为规模化首发市场</h3>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-3">
                    {entryPillars.map((item) => (
                      <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                        <div className="text-sm text-sky-100/70">{item.subtitle}</div>
                        <div className="mt-1 text-2xl font-semibold text-white">{item.title}</div>
                        <div className="mt-4 space-y-2">
                          {item.bullets.map((bullet) => (
                            <div key={bullet} className="rounded-[18px] border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-200">
                              {bullet}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-sky-100/70">竞争壁垒构建</div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {entryBarriers.map((item) => (
                          <div key={item} className="rounded-[20px] border border-white/10 bg-white/6 p-4 text-sm leading-7 text-slate-200">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-sky-100/70">时间窗口</div>
                      <div className="mt-3 text-xl font-semibold text-white">现在入场，可建立 3–5 年领先优势</div>
                    </div>
                  </div>
                </div>
              </SectionShell>
            </div>
          </SectionShell>

          <SectionShell id="capabilities">
            <div className="space-y-6">
              <SectionTitle eyebrow="PART 02" title="三大核心能力" description="以基础设施视角展示 AI 硬件、AI 大模型与创新服务之间的协同关系。" />

              <div className="grid gap-4 lg:grid-cols-3">
                {flywheelCards.map((item, index) => (
                  <Card key={item.title} className="bg-white/92 overflow-hidden">
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(90deg, #64B5F6 0%, #1A3D5F 100%)"
                            : index === 1
                              ? "linear-gradient(90deg, #1A3D5F 0%, #0E2841 100%)"
                              : "linear-gradient(90deg, #4A6D8C 0%, #0E2841 100%)",
                      }}
                    />
                    <CardContent className="p-5">
                      <div className="text-xs uppercase tracking-[0.16em] text-slate-500">0{index + 1}</div>
                      <div className="mt-2 text-xl font-semibold text-slate-950">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-500">{item.subtitle}</div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <Badge key={point} variant="outline">{point}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
                <Card className="bg-white/92">
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-2xl text-slate-950">VivaBox / Token Hub</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-500">三大核心能力共同构建的是一套让医疗健康数据在主权不转移前提下流通的基础设施。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {tokenConceptCards.map((item, index) => (
                      <details key={item.title} className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-950">
                          <span>{item.title}</span>
                          <span className="text-slate-400 transition group-open:rotate-90">›</span>
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </details>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/92 overflow-hidden">
                  <CardHeader className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {tokenAttributes.map((item) => (
                        <Badge key={item} variant="outline">{item}</Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl text-slate-950">四层架构</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-500">用折叠式结构展示生产、加工、分发、激励四层。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {tokenArchitectureLayers.map((layer, index) => (
                      <details key={layer.title} className="group rounded-[20px] border border-slate-200 bg-white px-4 py-3" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold text-slate-950">{layer.stage}</div>
                            <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{layer.title}</div>
                          </div>
                          <span className="text-slate-400 transition group-open:rotate-90">›</span>
                        </summary>
                        <div className="mt-3 grid gap-2 sm:grid-cols-3">
                          {layer.items.map((item) => (
                            <div key={item} className="rounded-[16px] bg-slate-50 px-3 py-2 text-sm leading-7 text-slate-600">
                              {item}
                            </div>
                          ))}
                        </div>
                      </details>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr]">
                <Card className="bg-white/92">
                  <CardContent className="p-4 sm:p-5">
                    <div className="space-y-3">
                      {capabilityData.map((item) => {
                        const active = activeCapability === item.key;
                        return (
                          <button
                            key={item.key}
                            onClick={() => setActiveCapability(item.key)}
                            className="w-full rounded-[22px] border p-4 text-left transition"
                            style={{
                              borderColor: active ? "rgba(26,61,95,0.18)" : "rgba(26,61,95,0.10)",
                              background: active ? "linear-gradient(135deg, rgba(9,26,43,0.98) 0%, rgba(14,40,65,0.96) 100%)" : "rgba(248,250,252,0.95)",
                              boxShadow: active ? "0 24px 50px -30px rgba(11,31,51,0.55)" : "none",
                            }}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className={cn("font-medium", active ? "text-white" : "text-slate-950")}>{item.title}</div>
                                <div className={cn("mt-1 text-sm leading-6", active ? "text-slate-300" : "text-slate-500")}>{item.subtitle}</div>
                              </div>
                              <ChevronRight className={cn("mt-1 text-base", active ? "text-slate-300" : "text-slate-400")} />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden bg-white/92">
                  <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #64B5F6 0%, #1A3D5F 50%, #0E2841 100%)" }} />
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-2xl text-slate-950">{activeData.title}</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-500">{activeData.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 px-6 pb-6">
                    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-700">{activeData.highlight}</div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {activeData.bullets.map((bullet, index) => (
                        <div key={bullet} className="flex gap-4 rounded-[20px] border border-slate-100 bg-white p-4">
                          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-medium text-white" style={{ background: index === 0 ? brand.lightBlue : index === 1 ? brand.blueSoft : brand.blue }}>
                            {index + 1}
                          </div>
                          <div className="text-sm leading-7 text-slate-600">{bullet}</div>
                        </div>
                      ))}
                    </div>

                    {activeCapability === "hardware" && (
                      <div className="space-y-3">
                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open>
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>产品矩阵</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-2">
                            {hardwareProducts.map((item) => (
                              <div key={item.title} className="rounded-[18px] bg-white p-4">
                                <div className="text-sm text-slate-500">{item.subtitle}</div>
                                <div className="mt-1 text-lg font-semibold text-slate-950">{item.title}</div>
                                <div className="mt-3 rounded-[14px] bg-slate-50 px-3 py-2 text-sm text-slate-700">{item.note}</div>
                              </div>
                            ))}
                          </div>
                        </details>

                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>HomeCare 产品群</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-3">
                            {hardwareMatrixGroups.map((group) => (
                              <div key={group.title} className="rounded-[18px] bg-white p-4">
                                <div className="text-sm font-semibold text-slate-950">{group.title}</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {group.items.map((item) => (
                                    <Badge key={item} variant="outline">{item}</Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </details>

                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>SaaS 分层</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-3">
                            {saasPlans.map((plan, index) => (
                              <div key={plan.title} className="rounded-[18px] p-4" style={{ background: index === 1 ? "rgba(100,181,246,0.10)" : "white" }}>
                                <div className="text-base font-semibold text-slate-950">{plan.title}</div>
                                <div className="mt-1 text-sm text-slate-500">{plan.users}</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {plan.features.map((feature) => (
                                    <Badge key={feature} variant="outline">{feature}</Badge>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </details>
                      </div>
                    )}

                    {activeCapability === "model" && (
                      <div className="space-y-3">
                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open>
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>MedTech Living vs 外部模型</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 overflow-x-auto">
                            <table className="w-full min-w-[520px] border-separate border-spacing-y-2 text-sm">
                              <thead>
                                <tr>
                                  <th className="px-3 py-2 text-left text-slate-500">维度</th>
                                  <th className="px-3 py-2 text-left text-slate-500">MedTech Living</th>
                                  <th className="px-3 py-2 text-left text-slate-500">外部模型</th>
                                </tr>
                              </thead>
                              <tbody>
                                {modelComparisonRows.map((row) => (
                                  <tr key={row.label}>
                                    <td className="rounded-l-[16px] bg-white px-3 py-3 font-medium text-slate-950">{row.label}</td>
                                    <td className="bg-white px-3 py-3 text-slate-600">{row.MedTech Living}</td>
                                    <td className="rounded-r-[16px] bg-white px-3 py-3 text-slate-600">{row.external}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </details>

                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>三大杠杆</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-3">
                            {modelLevers.map((item) => (
                              <div key={item.title} className="rounded-[18px] bg-white p-4">
                                <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </details>

                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>三步走战略</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-3">
                            {modelRoadmap.map((item, index) => (
                              <div key={item.title} className="rounded-[18px] bg-white p-4">
                                <div className="text-xs uppercase tracking-[0.16em] text-slate-500">0{index + 1} · {item.stage}</div>
                                <div className="mt-2 text-base font-semibold text-slate-950">{item.title}</div>
                                <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                              </div>
                            ))}
                          </div>
                        </details>
                      </div>
                    )}

                    {activeCapability === "service" && (
                      <div className="space-y-3">
                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open>
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>服务结构</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 grid gap-3 lg:grid-cols-3">
                            {servicePillars.map((item, index) => (
                              <div key={item.title} className="rounded-[18px] p-4" style={{ background: index === 1 ? "rgba(100,181,246,0.10)" : "white" }}>
                                <div className="text-sm text-slate-500">{item.subtitle}</div>
                                <div className="mt-1 text-lg font-semibold text-slate-950">{item.title}</div>
                                <div className="mt-3 rounded-[14px] bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">{item.metric}</div>
                              </div>
                            ))}
                          </div>
                        </details>

                        <details className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3">
                          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-slate-950">
                            <span>计费模式</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {servicePricingModes.map((item) => (
                              <Badge key={item} variant="outline">{item}</Badge>
                            ))}
                          </div>
                        </details>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="market">
            <div className="space-y-8">
              <SectionTitle eyebrow="PART 03" title="市场机会" description="围绕 RPM 市场切入与印尼主权医疗 AI 两条主线展开。" />

              <div className="inline-flex flex-wrap gap-2 rounded-full border border-slate-200 bg-white/80 p-1.5 shadow-sm">
                {marketTabs.map((tab) => {
                  const isActive = activeMarketTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setActiveMarketTab(tab.key)}
                      className="rounded-full px-4 py-2 text-sm font-medium transition"
                      style={{
                        color: isActive ? brand.white : brand.blue,
                        background: isActive ? "linear-gradient(135deg, #1A3D5F 0%, #0E2841 100%)" : "transparent",
                        boxShadow: isActive ? "0 14px 28px -18px rgba(14,40,65,0.48)" : "none",
                      }}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {activeMarketTab === "overview" && (
                <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
                  <Card className="bg-white/92">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">RPM 市场概览</CardTitle>
                      <CardDescription className="text-sm leading-7 text-slate-500">RPM 通过居家设备持续采集生命体征，医生远程获取数据进行慢病管理，并由医保体系按服务付费。</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 px-6 pb-6">
                      <div className="grid gap-4 sm:grid-cols-2">
                        {heroStats.map((item) => (
                          <StatCard key={item.label} {...item} />
                        ))}
                      </div>
                      <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-950">核心特征</div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["政府 / 医保体系直接付费", "慢性病管理", "持续居家监测", "高质量数据集是价值核心"].map((item) => (
                            <Badge key={item} variant="outline">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-4">
                    <Card className="bg-white/92">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-950">市场驱动力</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-3">
                        {rpmDrivers.map((item, index) => (
                          <div key={item.title} className="rounded-[22px] border p-4" style={{ borderColor: "rgba(26,61,95,0.10)", background: index === 0 ? "rgba(100,181,246,0.10)" : "rgba(248,250,252,0.96)" }}>
                            <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-white/92">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-950">MedTech Living 的切入点</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-3">
                        {rpmCutinPoints.map((item) => (
                          <div key={item.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                            <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeMarketTab === "logic" && (
                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                  <Card className="bg-white/92">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">RPM + Home Healthcare + AI 协同逻辑</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-6 pb-6">
                      {logicBlocks.map((item, index) => (
                        <details key={item.title} className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-950">
                            <span>{item.title}</span>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </summary>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                        </details>
                      ))}
                    </CardContent>
                  </Card>

                  <div className="space-y-5">
                    <Card className="bg-white/92">
                      <CardHeader>
                        <CardTitle className="text-xl text-slate-950">两条战略路径</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-3 px-6 pb-6">
                        {logicPaths.map((item, index) => (
                          <div key={item.title} className="rounded-[22px] border p-4" style={{ borderColor: "rgba(26,61,95,0.10)", background: index === 0 ? "rgba(100,181,246,0.10)" : "rgba(248,250,252,0.96)" }}>
                            <div className="text-base font-semibold text-slate-950">{item.title}</div>
                            <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-white/92">
                      <CardContent className="p-6">
                        <div className="text-sm font-semibold text-slate-950">核心命题</div>
                        <p className="mt-3 text-sm leading-7 text-slate-600">RPM 需要高质量数据，居家设备是入口，AI 提升 Token 价值，政府体系打通后才能完成规模化变现。</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeMarketTab === "us" && (
                <div className="space-y-5">
                  <div className="grid gap-4 lg:grid-cols-3">
                    {usWindows.map((item) => (
                      <Card key={item.title} className="bg-white/92 h-full">
                        <CardHeader className="space-y-3">
                          <Badge variant="outline">{item.tag}</Badge>
                          <CardTitle className="text-xl text-slate-950">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                          <p className="text-sm leading-7 text-slate-600">{item.body}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-white/92">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">CMS RPM 报销体系（2026 更新）</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-5">
                      {usReimbursement.map((item) => (
                        <div key={item.code} className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 text-center">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.code}</div>
                          <div className="mt-2 text-lg font-semibold text-slate-950">{item.value}</div>
                          <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeMarketTab === "indonesia" && (
                <div className="space-y-5">
                  <div className="grid gap-4 lg:grid-cols-2">
                    {indonesiaWhyCards.map((item) => (
                      <Card key={item.title} className="bg-white/92 h-full">
                        <CardContent className="p-5">
                          <div className="text-sm font-semibold text-slate-950">{item.title}</div>
                          <div className="mt-3 text-2xl font-semibold text-slate-950">{item.metric}</div>
                          <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                    <Card className="bg-white/92">
                      <CardHeader>
                        <CardTitle className="text-2xl text-slate-950">MedTech Living 三步走战略</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 px-6 pb-6">
                        {indonesiaRoadmap.map((item, index) => (
                          <details key={item.stage} className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                              <div>
                                <div className="text-sm font-semibold text-slate-950">{item.stage}</div>
                                <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.time}</div>
                              </div>
                              <span className="text-slate-400 transition group-open:rotate-90">›</span>
                            </summary>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                          </details>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-white/92">
                      <CardHeader>
                        <CardTitle className="text-2xl text-slate-950">构建目标</CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-6">
                        <div className="flex flex-wrap gap-2">
                          {indonesiaOutcomes.map((item) => (
                            <Badge key={item} variant="outline">{item}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeMarketTab === "partners" && (
                <div className="space-y-5">
                  <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
                    {partnerCards.map((card) => (
                      <Card key={card.title} className="bg-white/92 h-full">
                        <CardHeader>
                          <div className="flex items-center justify-between gap-3">
                            <CardTitle className="text-lg text-slate-950">{card.title}</CardTitle>
                            <Badge variant="outline" className="text-[11px]">{card.tag}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                          <p className="text-sm leading-7 text-slate-600">{card.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card className="bg-white/92">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-slate-950">合作生态总结</div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">政府授权、市场渗透、算法研发与平台能力四方协同，构建完整的印尼医疗 AI 生态。</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </SectionShell>

          <SectionShell id="geo" dark>
            <div className="space-y-8 text-white">
              <SectionTitle eyebrow="PART 04" title="三地协同架构" description="围绕香港、深圳、新加坡三地的分工、预算规划、供应链套利以及两大关键主体展开。" dark />

              <div className="grid gap-5 lg:grid-cols-3">
                {geoCards.map((item) => (
                  <Card key={item.city} className="h-full bg-white/90 text-slate-950">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">{item.city}</CardTitle>
                      <CardDescription className="text-sm leading-7 text-slate-600">{item.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 px-6 pb-6">
                      {item.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-3 text-sm leading-7 text-slate-700">
                          <div className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                          <div>{bullet}</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-white/90 text-slate-950">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-950">三地协同价值网络</CardTitle>
                  <CardDescription className="text-sm leading-7 text-slate-600">三地形成“资本—制造—市场”黄金三角，充分发挥各区域比较优势。</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
                  {geoSynergy.map((item) => (
                    <div key={item.title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <div className="text-lg font-semibold text-slate-950">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.body}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                <Card className="bg-white/90 text-slate-950">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-950">预算规划</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-600">按香港、新加坡、深圳三地分别配置战略资源。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {entityBudgets.map((entity, index) => (
                      <details key={entity.city} className="group rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                          <div>
                            <div className="text-lg font-semibold text-slate-950">{entity.city}</div>
                            <div className="text-sm text-slate-500">{entity.role} · {entity.people}</div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant="outline">{entity.total}</Badge>
                            <span className="text-slate-400 transition group-open:rotate-90">›</span>
                          </div>
                        </summary>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {entity.items.map(([label, value]) => (
                            <div key={label} className="rounded-[18px] border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700">
                              <div className="text-slate-500">{label}</div>
                              <div className="mt-1 text-base font-semibold text-slate-950">{value}</div>
                            </div>
                          ))}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-slate-600">{entity.note}</p>
                      </details>
                    ))}
                  </CardContent>
                </Card>

                <div className="space-y-5">
                  <Card className="bg-white/90 text-slate-950">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">投入框架</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-3 px-6 pb-6 sm:grid-cols-3">
                      {budgetHighlights.map((item) => (
                        <div key={item.label} className="rounded-[20px] border border-slate-200 bg-slate-50 p-4 text-center">
                          <div className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                          <div className="mt-2 text-xl font-semibold text-slate-950">{item.value}</div>
                          <div className="mt-1 text-sm text-slate-600">{item.note}</div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="bg-white/90 text-slate-950">
                    <CardHeader>
                      <CardTitle className="text-2xl text-slate-950">目标产出</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 px-6 pb-6">
                      {outputTargets.map((item) => (
                        <div key={item} className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                          {item}
                        </div>
                      ))}
                      <div className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                        AI 投资更像一份战略期权：放弃意味着永久错过牌桌，投入则锁定未来参与行业变革的可能性。
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-white/90 text-slate-950">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-950">供应链套利逻辑：HomeCare 板块核心优势</CardTitle>
                  <CardDescription className="text-sm leading-7 text-slate-600">构建“低成本采购 → 高附加值组装 → 品牌溢价销售”的供应链套利闭环。</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
                  {supplyChainFlow.map((item) => (
                    <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.subtitle}</div>
                      <div className="mt-2 text-xl font-medium text-slate-950">{item.title}</div>
                      <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
                <Card className="bg-white/90 text-slate-950">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-950">更新：深圳子公司设立</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-600">战略定位：MedTech Living 的核心供应链与工程枢纽</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {shenzhenReasons.map((item, index) => (
                      <details key={item.title} className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-950">
                          <span>{item.title}</span>
                          <span className="text-slate-400 transition group-open:rotate-90">›</span>
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </details>
                    ))}
                    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-950">Basic Information</div>
                      <div className="mt-3 grid gap-2">
                        {shenzhenUpdate.map(([label, value]) => (
                          <div key={label} className="grid gap-1 rounded-[16px] bg-white px-3 py-2 text-sm sm:grid-cols-[120px_1fr] sm:items-center">
                            <div className="text-slate-500">{label}</div>
                            <div className="text-slate-700">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/90 text-slate-950">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-950">新加坡主体的战略意义</CardTitle>
                    <CardDescription className="text-sm leading-7 text-slate-600">高优先级议题：该主体是所有东南亚业务的法律前提，也是 2026 年业务开展的关键步骤。</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 px-6 pb-6">
                    {singaporeImportance.map((item, index) => (
                      <details key={item.title} className="group rounded-[20px] border border-slate-200 bg-slate-50 px-4 py-3" open={index === 0}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-950">
                          <span>{item.title}</span>
                          <span className="text-slate-400 transition group-open:rotate-90">›</span>
                        </summary>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
                      </details>
                    ))}
                    <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                      <div className="text-sm font-semibold text-slate-950">关键时间节点</div>
                      <div className="mt-3 grid gap-2 sm:grid-cols-4">
                        {singaporeTimeline.map((item) => (
                          <div key={item} className="rounded-[16px] bg-white px-3 py-3 text-center text-sm text-slate-700">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </SectionShell>

          <SectionShell id="execution">
            <div className="space-y-6">
              <SectionTitle eyebrow="PART 05" title="2026 执行计划" description="按季度查看全年推进节奏，并同步展示 2027 Q1 展望。" />

              <div className="grid gap-3 sm:grid-cols-4">
                {executionPhases.map((phase) => {
                  const isActive = activeExecutionQuarter === phase.quarter;
                  return (
                    <button
                      key={phase.quarter}
                      type="button"
                      onClick={() => setActiveExecutionQuarter(phase.quarter)}
                      className="rounded-[22px] border px-4 py-4 text-left transition"
                      style={{
                        borderColor: isActive ? "rgba(26,61,95,0.18)" : "rgba(26,61,95,0.10)",
                        background: isActive ? "linear-gradient(135deg, rgba(9,26,43,0.98) 0%, rgba(14,40,65,0.96) 100%)" : "rgba(255,255,255,0.92)",
                        boxShadow: isActive ? "0 20px 40px -26px rgba(11,31,51,0.42)" : "0 18px 36px -28px rgba(11,31,51,0.14)",
                      }}
                    >
                      <div className={cn("text-xs uppercase tracking-[0.16em]", isActive ? "text-slate-300" : "text-slate-500")}>{phase.range}</div>
                      <div className={cn("mt-2 text-xl font-semibold", isActive ? "text-white" : "text-slate-950")}>{phase.quarter}</div>
                      <div className={cn("mt-1 text-sm", isActive ? "text-sky-100" : "text-slate-600")}>{phase.focus}</div>
                    </button>
                  );
                })}
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <Card className="bg-white/92 overflow-hidden">
                  <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #64B5F6 0%, #1A3D5F 50%, #0E2841 100%)" }} />
                  <CardHeader>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className="text-2xl text-slate-950">{activePhase.quarter} · {activePhase.focus}</CardTitle>
                        <CardDescription className="mt-2 text-sm leading-7 text-slate-500">按三条线并行推进。</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">AI 大模型</Badge>
                        <Badge variant="outline">AI 硬件</Badge>
                        <Badge variant="outline">公司层面</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="grid gap-4 px-6 pb-6 lg:grid-cols-3">
                    {[
                      ["AI 大模型", activePhase.model],
                      ["AI 硬件", activePhase.hardware],
                      ["公司层面", activePhase.company],
                    ].map(([title, items]) => (
                      <div key={title} className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                        <div className="text-sm font-semibold text-slate-950">{title}</div>
                        <div className="mt-4 space-y-2">
                          {items.map((item) => (
                            <div key={item} className="rounded-[16px] bg-white px-3 py-3 text-sm leading-7 text-slate-600">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="space-y-5">
                  <Card className="bg-white/92 overflow-hidden">
                    <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, rgba(123,224,209,0.95) 0%, rgba(100,181,246,0.92) 56%, rgba(26,61,95,0.96) 100%)" }} />
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-950">2027 Q1 展望</CardTitle>
                      <CardDescription className="text-sm leading-7 text-slate-500">从产品启动切换到平台与服务变现。</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-3 px-6 pb-6">
                      {[
                        ["AI 大模型", executionOutlook.model],
                        ["AI 硬件", executionOutlook.hardware],
                        ["公司层面", executionOutlook.company],
                      ].map(([title, body], index) => (
                        <div
                          key={title}
                          className="rounded-[20px] border p-4"
                          style={{
                            borderColor: "rgba(26,61,95,0.10)",
                            background:
                              index === 0
                                ? "linear-gradient(180deg, rgba(123,224,209,0.14) 0%, rgba(100,181,246,0.08) 100%)"
                                : "rgba(248,250,252,0.96)",
                          }}
                        >
                          <div className="text-sm font-semibold text-slate-950">{title}</div>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </SectionShell>
        </main>
      </div>
    </div>
  );
}
