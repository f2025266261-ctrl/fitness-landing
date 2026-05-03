"use client";

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  Check,
  Globe2,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
  TimerReset,
  Zap,
} from 'lucide-react'

const trainingSteps = [
  {
    title: 'Assess and calibrate',
    description:
      'Every onboarding starts with performance goals, movement constraints, and a clean weekly rhythm. You do not get a copy-paste template.',
    icon: Shield,
  },
  {
    title: 'Track the execution',
    description:
      'Training, nutrition, sleep, and readiness are logged in one disciplined loop so adjustments happen before momentum breaks.',
    icon: BarChart3,
  },
  {
    title: 'Refine in real time',
    description:
      'Virtual feedback keeps form, intensity, and recovery aligned with the target outcome instead of waiting until the next check-in.',
    icon: TimerReset,
  },
]

const pricingTiers = [
  {
    name: 'Base',
    price: '$95',
    cadence: 'per month',
    summary: 'Specialized program',
    features: [
      'Personalized training split',
      'Weekly plan refresh',
      'Exercise library access',
      'Performance notes and targets',
    ],
  },
  {
    name: 'Pro',
    price: '$165',
    cadence: 'per month',
    summary: 'Virtual coaching + nutrition',
    featured: true,
    features: [
      'All Base features',
      'Nutrition targets and adjustments',
      'Weekly form review',
      'Direct chat support window',
    ],
  },
  {
    name: 'Elite',
    price: '$245',
    cadence: 'per month',
    summary: '1-on-1 virtual sessions + 24/7 support',
    features: [
      'All Pro features',
      'Weekly 1-on-1 video session',
      'Priority messaging anytime',
      'Competition prep and peaking support',
    ],
  },
]

const proofPoints = [
  '24/7 accountability',
  'Digital form review',
  'Remote coaching system',
  'Competitive athlete focus',
]

const resultsStats = [
  { label: 'Clients transformed', value: 847, suffix: '+' },
  { label: 'Success rate', value: 97, suffix: '%' },
  { label: 'Years experience', value: 12, suffix: '+' },
]

const activityLevels = [
  { label: 'Low activity (1-2 sessions/week)', value: 1.25 },
  { label: 'Moderate training (3-4 sessions/week)', value: 1.45 },
  { label: 'High performance (5-6 sessions/week)', value: 1.65 },
  { label: 'Elite athlete (daily sessions)', value: 1.85 },
]

function SectionLabel({ children }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 backdrop-blur">
      <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
      {children}
    </p>
  )
}

function StatCard({ label, value, suffix }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-6 py-6 text-white/80 backdrop-blur">
      <p className="text-4xl font-semibold text-white">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/45">{label}</p>
    </div>
  )
}

function ResultsSection() {
  return (
    <section id="results" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Results</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
              Numbers that back the AApex standard.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/64">
              Scroll-triggered results that highlight what high-accountability
              coaching can deliver, without the noise of generic marketing.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {resultsStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CalculatorSection() {
  const [hasMounted, setHasMounted] = useState(false)
  const [gender, setGender] = useState('male')
  const [weight, setWeight] = useState(80)
  const [weightUnit, setWeightUnit] = useState('kg')
  const [height, setHeight] = useState(175)
  const [heightUnit, setHeightUnit] = useState('cm')
  const [activity, setActivity] = useState(activityLevels[1].value)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  const metrics = useMemo(() => {
    const weightKg = weightUnit === 'kg' ? weight : weight * 0.453592
    const heightCm = heightUnit === 'cm' ? height : height * 30.48
    const heightM = heightCm / 100

    if (!weightKg || !heightM) {
      return { bmi: null, calories: null }
    }

    const bmi = weightKg / (heightM * heightM)
    const age = 30
    const base = 10 * weightKg + 6.25 * heightCm - 5 * age
    const bmr = gender === 'male' ? base + 5 : base - 161
    const calories = bmr * activity

    return { bmi, calories }
  }, [weight, weightUnit, height, heightUnit, gender, activity])

  return (
    <section id="calculator" className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionLabel>Performance Lab</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
              BMI + Calorie intelligence, tuned for AApex athletes.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/64">
              This calculator delivers a disciplined baseline for body
              composition and daily energy output. Use it as a starting point
              for your AApex journey.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Premium Lab</p>
              <span className="rounded-full border border-[color:var(--gold-border)] bg-[rgba(212,175,55,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold)]">
                Live
              </span>
            </div>

            <div className="mt-6 grid gap-5">
              <div className="flex gap-3 rounded-full border border-white/10 bg-black/30 p-1">
                {hasMounted ? (
                  ['male', 'female'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setGender(option)}
                      className={`flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${gender === option ? 'bg-[linear-gradient(135deg,var(--gold),#f7e6b0)] text-black' : 'text-white/60 hover:text-white'}`}
                    >
                      {option}
                    </button>
                  ))
                ) : (
                  <>
                    <span className="flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      male
                    </span>
                    <span className="flex-1 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      female
                    </span>
                  </>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/72">
                  Weight
                  <div className="flex gap-3">
                    <input
                      type="number"
                      min="0"
                      value={weight}
                      onChange={(event) => setWeight(Number(event.target.value))}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)] focus:ring-1 focus:ring-[color:var(--gold-border)]"
                    />
                    <select
                      value={weightUnit}
                      onChange={(event) => setWeightUnit(event.target.value)}
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)] focus:ring-1 focus:ring-[color:var(--gold-border)]"
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  </div>
                </label>
                <label className="grid gap-2 text-sm text-white/72">
                  Height
                  <div className="flex gap-3">
                    <input
                      type="number"
                      min="0"
                      value={height}
                      onChange={(event) => setHeight(Number(event.target.value))}
                      className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)] focus:ring-1 focus:ring-[color:var(--gold-border)]"
                    />
                    <select
                      value={heightUnit}
                      onChange={(event) => setHeightUnit(event.target.value)}
                      className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)] focus:ring-1 focus:ring-[color:var(--gold-border)]"
                    >
                      <option value="cm">cm</option>
                      <option value="ft">ft</option>
                    </select>
                  </div>
                </label>
              </div>

              <label className="grid gap-2 text-sm text-white/72">
                Activity level
                <select
                  value={activity}
                  onChange={(event) => setActivity(Number(event.target.value))}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)] focus:ring-1 focus:ring-[color:var(--gold-border)]"
                >
                  {activityLevels.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Body mass index</p>
                <p className="text-xl font-semibold text-white">
                  {metrics.bmi ? metrics.bmi.toFixed(1) : '--'}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Daily calories</p>
                <p className="text-xl font-semibold text-white">
                  {metrics.calories ? Math.round(metrics.calories).toLocaleString('en-US') : '--'}
                </p>
              </div>
              <p className="text-xs leading-6 text-white/55">
                Uses the Mifflin-St Jeor formula with a baseline age of 30 to
                provide a starting estimate for your AApex journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="text-sm font-semibold uppercase tracking-[0.26em] text-white">
          AApex Training
        </a>
        <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
          <a className="transition-colors hover:text-[var(--gold)]" href="#services">
            Services
          </a>
          <a className="transition-colors hover:text-[var(--gold)]" href="#system">
            System
          </a>
          <a className="transition-colors hover:text-[var(--gold)]" href="#pricing">
            Pricing
          </a>
          <a className="transition-colors hover:text-[var(--gold)]" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black">
      <div className="flex min-h-screen w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-center justify-center bg-black px-8 py-16 text-center md:w-1/2 md:px-16 lg:px-20">
          <div className="flex max-w-xl flex-col items-center">
            <div className="flex items-center gap-3 rounded-full border border-[color:var(--gold)]/40 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white">
              <Shield className="h-4 w-4 text-[color:var(--gold)]" />
              AApex Training
            </div>
            <h1 className="mt-8 text-5xl font-semibold uppercase leading-[1.05] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              <span className="block">ELITE COACHING</span>
              <span className="block text-2xl font-normal tracking-[0.3em] text-white/70 sm:text-3xl lg:text-4xl">
                for
              </span>
              <span className="block">ATHLETES WHO EXPECT OUTPUT</span>
            </h1>
            <p className="mt-6 text-base leading-8 text-white sm:text-lg">
              AApex Training is built like a performance lab: remote precision,
              real accountability, and athlete-first programming with the edge of a
              premium personal portfolio.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[color:var(--gold)] bg-[color:var(--gold)] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              >
                Explore pricing
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#system"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white bg-[#111111] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)] hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
              >
                See the system
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full min-h-[55vh] md:w-1/2 md:min-h-screen">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
            alt="Athlete training in a dark, moody gym"
            className="h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.92)_14%,rgba(0,0,0,0)_55%)]" />
        </div>
      </div>
    </section>
  )
}

function SpotlightSection() {
  return (
    <section id="system" className="scroll-mt-24 border-b border-white/10">
      <div id="services" className="scroll-mt-24" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-xl">
            <SectionLabel>Virtual Training Spotlight</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
              Remote coaching, but run with athlete-grade discipline.
            </h2>
            <p className="mt-6 text-base leading-8 text-white/66 sm:text-lg">
              Every client enters a digital coaching loop designed to keep the
              plan honest. You get a structured workflow, not random check-ins:
              training is tracked, adjustments are fast, and accountability is
              visible.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-6 transition-all duration-300 hover:scale-105 hover:border-[color:var(--gold-border)] hover:shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <div className="group flex items-center gap-3 text-white">
                <div className="rounded-2xl border border-[color:var(--gold-border)] bg-[rgba(212,175,55,0.1)] p-3 text-[var(--gold)] transition-all duration-300 group-hover:text-white group-hover:shadow-[0_0_16px_rgba(212,175,55,0.45)]">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-white/45">Digital accountability</p>
                  <p className="mt-1 text-lg font-semibold">Everything lives in one controlled feedback system.</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-white/60">
                Weekly plan delivery, progress reviews, nutrition guidance, and
                form feedback all stay connected. The result is a remote model
                that feels personal, immediate, and high-touch.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {trainingSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <article
                  key={step.title}
                  className="group rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--gold-border)] hover:bg-[linear-gradient(180deg,rgba(212,175,55,0.12),rgba(212,175,55,0.06))] hover:shadow-[0_0_24px_rgba(212,175,55,0.15)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl border border-white/10 bg-black/35 p-3 text-[var(--gold)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-xs uppercase tracking-[0.28em] text-white/45">0{index + 1}</p>
                        <Lock className="h-4 w-4 text-white/28" />
                      </div>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">{step.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:border-[color:var(--gold-border)] hover:shadow-[0_0_26px_rgba(212,175,55,0.2)]">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Support cadence</p>
                <p className="mt-3 text-2xl font-semibold text-white">Structured, direct, responsive.</p>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Messaging windows, training adjustments, and session reviews
                  are built to feel premium without becoming noisy.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-105 hover:border-[color:var(--gold-border)] hover:shadow-[0_0_26px_rgba(212,175,55,0.2)]">
                <p className="text-xs uppercase tracking-[0.24em] text-white/45">Workflow</p>
                <p className="mt-3 text-2xl font-semibold text-white">Digital-first, performance-led.</p>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  Train, log, review, refine. The process is simple; the output is
                  what separates AApex from a standard online coach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-24 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
            THREE TIERS. ONE STANDARD: ELITE EXECUTION.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/64 sm:text-lg">
            Pricing stays accessible while still signaling premium value. Every
            tier is under $250 and maps cleanly to how much coaching access you
            want.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative overflow-hidden rounded-[2rem] border p-7 transition-all duration-300 ${tier.featured ? 'border-[color:var(--gold-border)] bg-[linear-gradient(180deg,rgba(212,175,55,0.14),rgba(255,255,255,0.05))] shadow-[0_24px_90px_rgba(212,175,55,0.12)] hover:shadow-[0_32px_120px_rgba(212,175,55,0.25)]' : 'border-white/10 bg-white/5 hover:border-[color:var(--gold-border)] hover:bg-[linear-gradient(180deg,rgba(212,175,55,0.1),rgba(255,255,255,0.06))] hover:shadow-[0_20px_80px_rgba(212,175,55,0.12)]'}`}
            >
              {tier.featured ? (
                <span className="mb-6 inline-flex rounded-full border border-[color:var(--gold-border)] bg-[rgba(212,175,55,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Most chosen
                </span>
              ) : null}
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">{tier.name}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-normal text-white">{tier.price}</span>
                <span className="pb-2 text-sm text-white/50">{tier.cadence}</span>
              </div>
              <p className="mt-4 text-lg font-semibold text-white">{tier.summary}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-white/68">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${tier.featured ? 'bg-[linear-gradient(135deg,var(--gold),#f7e6b0)] text-black' : 'border border-white/12 bg-white/5 text-white'}`}
              >
                Start with {tier.name}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-6 text-4xl font-bold uppercase leading-[0.95] tracking-normal text-white sm:text-5xl">
              Step into a coaching system built to perform.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/64">
              Reach out for program fit, availability, or questions about the
              virtual coaching process. You can also call the AApex line below.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+15550123456"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm font-medium text-white/82"
              >
                <Phone className="h-4 w-4 text-[var(--gold)]" />
                <span aria-hidden="true">🇺🇸</span>
                +1 (555) 012-3456
              </a>
              <a
                href="mailto:hello@aapextraining.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-sm font-medium text-white/82"
              >
                <Mail className="h-4 w-4 text-[var(--gold)]" />
                hello@aapextraining.com
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/72">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[color:var(--gold-border)]"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/72">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[color:var(--gold-border)]"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm text-white/72">
              Goal
              <select className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-[color:var(--gold-border)]">
                <option>Strength and size</option>
                <option>Fat loss</option>
                <option>Competition prep</option>
                <option>General performance</option>
              </select>
            </label>
            <label className="mt-4 grid gap-2 text-sm text-white/72">
              Message
              <textarea
                rows="5"
                placeholder="Tell us what you want to build."
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[color:var(--gold-border)]"
              />
            </label>
            <button
              type="submit"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,var(--gold),#f7e6b0)] px-6 py-3.5 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
            >
              Send inquiry
              <Zap className="h-4 w-4" />
            </button>
          </form>
        </div>

        <footer className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>AApex Training. Built for serious athletes.</p>
          <p>Premium virtual coaching with measurable accountability.</p>
        </footer>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Header />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_22%)]" />
        <HeroSection />
        <ResultsSection />
        <CalculatorSection />
        <SpotlightSection />
        <PricingSection />
        <ContactSection />
      </main>
      <a
        href="https://wa.me/15550123456?text=I'm%20ready%20to%20start%20my%20AApex%20transformation.%20Tell%20me%20more%20about%20the%20Elite%20Tier."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_24px_rgba(212,175,55,0.4)]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
