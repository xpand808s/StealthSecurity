import Link from "next/link";
import Image from "next/image";

// SVG icon components — clean, scalable, red-tinted
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="3" x2="12" y2="7" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="3" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="17" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconOfficer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
);

const IconK9 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

const IconCCTV = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>
);

const IconBodyguard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const IconAlarm = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);

const IconRadar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
  </svg>
);

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);

const services = [
  { Icon: IconTarget,   title: "Tactical Armed Teams",        hook: "Rapid-response units trained for high-risk situations" },
  { Icon: IconOfficer,  title: "Security Officers",           hook: "Licensed guards for sites, retail, and events" },
  { Icon: IconK9,       title: "K‑9 Units & Handlers",        hook: "Certified dog teams for patrol and detection" },
  { Icon: IconCCTV,     title: "CCTV & Alarm Installation",   hook: "Custom-designed surveillance and alarm systems" },
  { Icon: IconBodyguard,title: "Bodyguards & Armed Escorts",  hook: "Close-protection for executives and VIPs" },
  { Icon: IconSearch,   title: "Investigations",              hook: "Discreet, licensed investigative services" },
];

const whyUs = [
  { Icon: IconShield,  label: "Licensed & Background-Checked Officers" },
  { Icon: IconK9,      label: "Certified K‑9 Handlers" },
  { Icon: IconRadar,   label: "24/7 Live Alarm Monitoring" },
  { Icon: IconBolt,    label: "Rapid Armed Response" },
];

export default function Home() {
  return (
    <div className="bg-stealth-black text-stealth-white">

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-20 pb-32">
        {/* Full-bleed hero photo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/team-formation.jpg"
            alt="Stealth Security officers in formation on deployment"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient — left side stays readable, right side shows the team */}
          <div className="absolute inset-0 bg-gradient-to-r from-stealth-black via-stealth-black/80 to-stealth-black/40 z-10" />
          <div className="absolute inset-0 bg-stealth-black/30 z-10" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
              Armed. Trained. <span className="text-stealth-red">Ready.</span>
            </h1>
            <p className="text-lg md:text-xl text-stealth-muted mb-10 leading-relaxed max-w-2xl">
              Stealth Security has protected homes, businesses, and events for{" "}
              <strong className="text-stealth-white">over 16 years</strong> — with tactical armed teams,
              K‑9 units, and 24/7 monitoring on call whenever you need us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="#contact" className="w-full sm:w-auto bg-stealth-red hover:bg-stealth-bright text-white px-8 py-4 rounded font-bold text-center transition-colors text-lg">
                Request Free Security Assessment
              </Link>
              <a href="https://wa.me/76906800" className="w-full sm:w-auto px-8 py-4 rounded font-bold text-center border border-stealth-charcoal hover:border-stealth-muted transition-colors flex items-center justify-center gap-2">
                WhatsApp us directly &rarr; <span className="text-stealth-white">76906800</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-stealth-charcoal border-y border-stealth-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-sm md:text-base font-bold text-stealth-muted text-center uppercase tracking-wider">
            <span>16+ Years Protecting Clients</span>
            <span className="hidden md:inline text-stealth-red">|</span>
            <span>24/7 Armed Response</span>
            <span className="hidden md:inline text-stealth-red">|</span>
            <span>Licensed &amp; Insured Officers</span>
            <span className="hidden md:inline text-stealth-red">|</span>
            <span>Trained K‑9 Units</span>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 border-l-4 border-stealth-red pl-4">
              For over 16 years, we lead — others follow.
            </h2>
            <p className="text-stealth-muted leading-relaxed text-lg">
              Stealth Security was built on one principle: real protection means being trained, armed,
              and present before trouble starts. From tactical patrols to alarm monitoring, our officers
              and K‑9 teams are certified, background-checked, and on call around the clock.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-stealth-red/30">
            <Image
              src="/team-camo.jpg"
              alt="Stealth Security tactical officers in camouflage uniform"
              fill
              className="object-cover object-top"
            />
            {/* Subtle bottom fade to black */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stealth-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-stealth-charcoal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-black mb-4">Our Core Services</h2>
            <p className="text-stealth-muted text-lg">Comprehensive protection tailored to your risk level.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, hook }, i) => (
              <Link
                key={i}
                href={`#${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="group bg-stealth-charcoal border border-stealth-charcoal hover:border-stealth-bright p-8 transition-all hover:-translate-y-1 flex flex-col h-full rounded-sm"
              >
                <div className="mb-6 text-stealth-red">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-stealth-bright transition-colors">{title}</h3>
                <p className="text-stealth-muted text-sm flex-grow">{hook}</p>
                <div className="mt-6 text-sm font-bold text-stealth-red flex items-center gap-2">
                  Learn more <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>

          {/* 7th Tile — Alarm Monitoring */}
          <Link
            href="#alarm-monitoring"
            className="mt-6 group bg-stealth-charcoal border border-stealth-charcoal hover:border-stealth-bright p-8 transition-all hover:-translate-y-1 flex flex-col md:flex-row items-start md:items-center justify-between rounded-sm"
          >
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="text-stealth-red">
                <IconAlarm />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1 group-hover:text-stealth-bright transition-colors">Alarm Monitoring</h3>
                <p className="text-stealth-muted">24/7 live response — the always-on service that secures your peace of mind.</p>
              </div>
            </div>
            <div className="text-sm font-bold text-stealth-white bg-stealth-red px-6 py-3 rounded-sm flex items-center gap-2 shrink-0">
              View Monitoring Options <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </div>
          </Link>
        </div>
      </section>

      {/* WHY STEALTH STRIP */}
      <section id="why-us" className="py-16 border-y border-stealth-charcoal bg-stealth-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map(({ Icon, label }, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-stealth-red shrink-0">
                  <Icon />
                </span>
                <span className="font-bold text-sm lg:text-base">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 bg-stealth-charcoal/20 flex items-center justify-center border-b border-stealth-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-stealth-red text-6xl mb-6 font-serif leading-none">&ldquo;</div>
          <p className="text-2xl md:text-4xl font-bold mb-8 italic leading-snug">
            Regular contract, always strong, never a weak point in coverage.
          </p>
          <div className="text-stealth-muted font-bold tracking-widest uppercase text-sm">
            — Client, [Company Name]
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-24 bg-stealth-red text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-6">Ready to Secure What Matters?</h2>
          <p className="text-xl mb-10 opacity-90">Get a free, no-obligation security assessment today.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="mailto:info@stealthsecurity.com"
              className="w-full sm:w-auto bg-white text-stealth-red px-8 py-4 rounded font-bold hover:bg-gray-100 transition-colors text-lg"
            >
              Contact Stealth Security &rarr;
            </Link>
            <a
              href="https://wa.me/76906800"
              className="w-full sm:w-auto border-2 border-white px-8 py-4 rounded font-bold hover:bg-white hover:text-stealth-red transition-colors text-lg flex items-center justify-center gap-2"
            >
              WhatsApp: 76906800
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
