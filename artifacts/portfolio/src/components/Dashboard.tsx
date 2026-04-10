import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  RadialBarChart, RadialBar, ResponsiveContainer,
  AreaChart, Area, XAxis, YAxis, Tooltip,
  BarChart, Bar, Cell
} from "recharts";
import { Trophy, Clock, Award, BookOpen, Code2, Star } from "lucide-react";
import { FadeIn } from "./FadeIn";

function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
  }, [spring, decimals]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const skillsData = [
  { name: "SwiftUI", value: 90 },
  { name: "UI/UX", value: 88 },
  { name: "Figma", value: 85 },
  { name: "Power BI", value: 80 },
  { name: "Flutter", value: 75 },
  { name: "AI/ML", value: 70 },
];

const activityData = [
  { month: "Aug", hours: 20 },
  { month: "Sep", hours: 35 },
  { month: "Oct", hours: 28 },
  { month: "Nov", hours: 45 },
  { month: "Dec", hours: 52 },
  { month: "Jan", hours: 38 },
  { month: "Feb", hours: 60 },
  { month: "Mar", hours: 42 },
  { month: "Apr", hours: 55 },
];

const bigStats = [
  { icon: Clock, label: "Volunteer Hours", value: 260, suffix: "+", decimals: 0, sub: "certified hours", color: "text-amber-500" },
  { icon: Award, label: "Certifications", value: 4, suffix: "", decimals: 0, sub: "earned badges", color: "text-violet-500" },
  { icon: Trophy, label: "Hackathon Place", value: 1, suffix: "st", decimals: 0, sub: "University Hackathon", color: "text-emerald-500" },
  { icon: Code2, label: "Projects Shipped", value: 2, suffix: "", decimals: 0, sub: "live products", color: "text-primary" },
];

const COLORS = ["hsl(24 80% 58%)", "hsl(24 60% 65%)", "hsl(38 70% 60%)", "hsl(160 35% 50%)", "hsl(200 50% 55%)", "hsl(280 40% 60%)"];

export function Dashboard() {
  return (
    <section id="dashboard" className="py-32 px-6 md:px-12 lg:px-24 bg-foreground text-background overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-4">
            <span className="inline-block w-8 h-px bg-primary" />
            <span className="text-xs font-mono tracking-widest uppercase text-background/50">By the Numbers</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-background mb-16">
            A snapshot of my<br />
            <span className="italic text-primary">journey so far.</span>
          </h2>
        </FadeIn>

        {/* Big stat counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {bigStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.08}>
              <div className="group relative p-6 rounded-2xl bg-background/[0.05] border border-background/10 hover:bg-background/[0.08] hover:border-background/20 transition-all duration-300 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle at 50% 0%, hsl(24 80% 58% / 0.08) 0%, transparent 70%)" }} />

                <div className={`mb-4 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>

                <div className={`text-3xl md:text-4xl font-serif font-normal mb-1 text-background`}>
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={1.8}
                  />
                </div>

                <p className="text-xs font-semibold text-background/70 mb-0.5">{stat.label}</p>
                <p className="text-xs font-mono text-background/35">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Certifications Radial */}
          <FadeIn delay={0.1} className="md:col-span-3">
            <div className="h-full p-6 rounded-2xl bg-background/[0.05] border border-background/10">
              <p className="text-xs font-mono tracking-widest uppercase text-background/40 mb-1">Credentials</p>
              <p className="text-sm font-semibold text-background mb-4">Certifications</p>
              <div className="relative h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="65%"
                    outerRadius="90%"
                    startAngle={220}
                    endAngle={-40}
                    data={[{ name: "Certs", value: 80, fill: "hsl(24 80% 58%)" }]}
                  >
                    <RadialBar
                      dataKey="value"
                      cornerRadius={8}
                      background={{ fill: "hsl(0 0% 100% / 0.05)" }}
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-2xl font-serif text-background">4</span>
                  <span className="text-xs font-mono text-background/40">earned</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-background/10">
                <span className="text-xs text-background/40 font-mono">IBM · Apple · KSU</span>
                <span className="text-xs font-semibold text-primary">Verified</span>
              </div>
            </div>
          </FadeIn>

          {/* Skills Bar Chart */}
          <FadeIn delay={0.15} className="md:col-span-5">
            <div className="h-full p-6 rounded-2xl bg-background/[0.05] border border-background/10">
              <p className="text-xs font-mono tracking-widest uppercase text-background/40 mb-1">Proficiency</p>
              <p className="text-sm font-semibold text-background mb-4">Technical Skills</p>
              <div className="h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={skillsData} layout="vertical" margin={{ left: 0, right: 10, top: 0, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis
                      type="category"
                      dataKey="name"
                      width={52}
                      tick={{ fontSize: 11, fill: "hsl(0 0% 100% / 0.45)", fontFamily: "DM Mono, monospace" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      cursor={{ fill: "hsl(0 0% 100% / 0.04)" }}
                      contentStyle={{
                        background: "hsl(22 12% 9%)",
                        border: "1px solid hsl(0 0% 100% / 0.1)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                      formatter={(v: number) => [`${v}%`, "Proficiency"]}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={14}>
                      {skillsData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </FadeIn>

          {/* Volunteer Activity Area Chart */}
          <FadeIn delay={0.2} className="md:col-span-4">
            <div className="h-full p-6 rounded-2xl bg-background/[0.05] border border-background/10">
              <p className="text-xs font-mono tracking-widest uppercase text-background/40 mb-1">Activity</p>
              <p className="text-sm font-semibold text-background mb-1">Volunteer Hours</p>
              <p className="text-xs font-mono text-background/35 mb-4">Aug 2024 — Apr 2025</p>
              <div className="h-[160px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={activityData} margin={{ left: -20, right: 0, top: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="volGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(24 80% 58%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(24 80% 58%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 10, fill: "hsl(0 0% 100% / 0.35)", fontFamily: "DM Mono, monospace" }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: "hsl(22 12% 9%)",
                        border: "1px solid hsl(0 0% 100% / 0.1)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                      formatter={(v: number) => [`${v} hrs`, "Hours"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="hours"
                      stroke="hsl(24 80% 58%)"
                      strokeWidth={2}
                      fill="url(#volGrad)"
                      dot={false}
                      activeDot={{ r: 4, fill: "hsl(24 80% 58%)" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-background/10 mt-1">
                <span className="text-xs text-background/40 font-mono">Total</span>
                <span className="text-sm font-serif text-primary">260+ hrs</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom mini stat row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {[
            { label: "Projects Shipped", value: "2", icon: Code2, note: "Jasmine · Naadek" },
            { label: "Years of Study", value: "3+", icon: BookOpen, note: "IMAMU CIS 2022–2026" },
            { label: "Apple Dev Academy", value: "1st", icon: Star, note: "Year Enrolled" },
            { label: "Hackathon Win", value: "#1", icon: Trophy, note: "University Solutions" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={0.25 + i * 0.06}>
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-background/[0.05] border border-background/10 hover:bg-background/[0.08] transition-colors">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xl font-serif text-background leading-none mb-1">{item.value}</p>
                  <p className="text-[10px] font-mono text-background/35 leading-tight">{item.note}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
