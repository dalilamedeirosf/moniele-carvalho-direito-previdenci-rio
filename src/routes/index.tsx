import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronDown,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/nauanny-hero.png.asset.json";
import officeAsset from "@/assets/nauanny-office.png.asset.json";
import logoAsset from "@/assets/nauanny-logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Nauanny Marçal Advocacia | Família, Cível e Previdenciário" },
      {
        name: "description",
        content:
          "Advocacia em Direito de Família, Cível e Previdenciário em Campo Grande, Rio de Janeiro. Atendimento próximo, estratégico e responsável.",
      },
      { property: "og:title", content: "Nauanny Marçal Advocacia" },
      {
        property: "og:description",
        content: "Soluções jurídicas personalizadas em Direito de Família, Cível e Previdenciário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const PHONE = "(21) 99079-3139";
const WHATSAPP =
  "https://wa.me/5521990793139?text=Ol%C3%A1%2C%20Dra.%20Nauanny%2C%20gostaria%20de%20agendar%20uma%20consulta.";
const INSTAGRAM = "https://www.instagram.com/nauannymarcal.adv/";
const EMAIL = "mailto:nauannymarcal.adv@gmail.com";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

const practices = [
  {
    icon: Users,
    title: "Direito de Família",
    description:
      "Orientação sensível e segura em divórcio, guarda, alimentos, união estável e inventário.",
    topics: ["Divórcio e partilha", "Guarda e pensão alimentícia", "Inventário e sucessões"],
  },
  {
    icon: Scale,
    title: "Direito Cível",
    description:
      "Estratégia jurídica para proteger interesses, solucionar conflitos e resguardar patrimônio.",
    topics: ["Contratos e obrigações", "Responsabilidade civil", "Cobranças e indenizações"],
  },
  {
    icon: ShieldCheck,
    title: "Direito Previdenciário",
    description:
      "Análise individual para benefícios, aposentadorias e demandas junto ao INSS.",
    topics: ["Aposentadorias e pensões", "BPC/LOAS", "Benefícios por incapacidade"],
  },
];

const steps = [
  { number: "01", title: "Primeiro contato", text: "Conte brevemente a sua situação e escolha a melhor forma de atendimento." },
  { number: "02", title: "Análise jurídica", text: "O caso e os documentos são avaliados com atenção, clareza e confidencialidade." },
  { number: "03", title: "Estratégia", text: "Você conhece os caminhos possíveis antes da definição da medida adequada." },
  { number: "04", title: "Acompanhamento", text: "Atuação próxima e comunicação transparente durante cada etapa do caso." },
];

const faqs = [
  {
    q: "O atendimento pode ser feito online?",
    a: "Sim. O escritório realiza atendimentos presenciais em Campo Grande, Rio de Janeiro, e também online.",
  },
  {
    q: "Quais documentos devo separar?",
    a: "Os documentos dependem da área e da situação. No primeiro contato, você recebe uma orientação objetiva sobre o que será necessário.",
  },
  {
    q: "Como é feita a análise do caso?",
    a: "Cada situação é avaliada individualmente, considerando documentos, contexto e alternativas jurídicas possíveis.",
  },
];

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`flex items-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.32em] ${light ? "text-gold-soft" : "text-gold-deep"}`}>
      <span className="h-px w-12 bg-gold" />
      {children}
    </div>
  );
}

function Landing() {
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-50 border-b border-hero-line bg-navy/30 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#inicio" aria-label="Nauanny Marçal Advocacia — início">
            <img src={logoAsset.url} alt="Nauanny Marçal Advocacia" className="h-14 w-auto object-contain" />
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-hero-muted transition-colors hover:text-gold-soft">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="h-11 rounded-none bg-gold px-5 text-xs font-semibold uppercase tracking-[0.12em] text-navy hover:bg-gold-soft">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle />
              <span className="hidden sm:inline">Agendar consulta</span>
            </a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[100svh] items-center overflow-hidden">
          <img
            src={heroAsset.url}
            alt="Dra. Nauanny Marçal em seu escritório"
            className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-10">
            <div className="max-w-2xl">
              <SectionLabel light>Excelência e compromisso</SectionLabel>
              <h1 className="mt-7 text-5xl leading-[1.04] text-hero sm:text-6xl lg:text-8xl">
                Nauanny Marçal
                <span className="mt-2 block font-normal italic text-gold-soft">Advocacia</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-hero-muted sm:text-lg">
                Soluções jurídicas personalizadas em Direito de Família, Cível e Previdenciário. Ética, escuta e estratégia para cuidar do que importa.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="h-14 rounded-none bg-gold px-8 text-xs font-semibold uppercase tracking-[0.14em] text-navy hover:bg-gold-soft">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    Agendar consulta <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-hero-line bg-hero-glass px-8 text-xs font-semibold uppercase tracking-[0.14em] text-hero hover:bg-hero-soft hover:text-hero">
                  <a href="#atuacao">Conhecer atuação</a>
                </Button>
              </div>
              <div className="mt-14 border-l-2 border-gold/60 pl-5">
                <p className="font-serif text-lg italic text-hero">“Justiça é o que nos move.”</p>
                <p className="mt-1 text-[0.65rem] uppercase tracking-[0.24em] text-hero-muted">Atendimento presencial e online</p>
              </div>
            </div>
          </div>
          <a href="#atuacao" aria-label="Ir para áreas de atuação" className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-gold-soft">
            <ChevronDown className="h-7 w-7 animate-bounce motion-reduce:animate-none" />
          </a>
        </section>

        <section id="atuacao" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <SectionLabel>Áreas de atuação</SectionLabel>
                <h2 className="mt-5 text-4xl leading-tight text-navy sm:text-5xl">Orientação segura para momentos importantes.</h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">
                Atendimento jurídico próximo e responsável, com análise cuidadosa das particularidades de cada caso e comunicação clara em todas as etapas.
              </p>
            </div>
            <div className="mt-14 grid border-y border-border lg:grid-cols-3 lg:divide-x lg:divide-border">
              {practices.map((practice) => (
                <article key={practice.title} className="border-b border-border px-2 py-10 last:border-b-0 lg:border-b-0 lg:px-8">
                  <practice.icon className="h-8 w-8 text-gold-deep" strokeWidth={1.5} />
                  <h3 className="mt-6 text-2xl text-navy">{practice.title}</h3>
                  <p className="mt-4 min-h-20 text-sm leading-7 text-muted-foreground">{practice.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-navy-soft">
                    {practice.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-3">
                        <span className="h-px w-5 bg-gold" /> {topic}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-navy py-20 text-hero md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -bottom-5 -left-5 h-full w-full border border-gold/55" />
              <img src={officeAsset.url} alt="Dra. Nauanny Marçal em atendimento" loading="lazy" className="relative z-10 aspect-[4/5] w-full object-cover object-top" />
            </div>
            <div className="lg:pl-10">
              <SectionLabel light>Sobre a advogada</SectionLabel>
              <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">Uma advocacia feita com presença, clareza e propósito.</h2>
              <p className="mt-7 text-base leading-8 text-hero-muted">
                Nauanny Marçal Theotonio atua nas áreas de Família, Cível e Previdenciário, oferecendo acompanhamento personalizado e soluções construídas a partir da realidade de cada cliente.
              </p>
              <p className="mt-5 text-base leading-8 text-hero-muted">
                Cada atendimento começa com uma escuta atenta. A partir dela, o caminho jurídico é apresentado de forma objetiva, responsável e transparente.
              </p>
              <div className="mt-9 grid gap-5 border-t border-hero-line pt-8 sm:grid-cols-3">
                {["Atendimento próximo", "Análise individual", "Comunicação clara"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-hero">
                    <span className="h-2 w-2 bg-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="atendimento" className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="text-center">
              <SectionLabel>Como funciona</SectionLabel>
              <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-tight text-navy sm:text-5xl">Um atendimento organizado do primeiro contato ao acompanhamento.</h2>
            </div>
            <ol className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <li key={step.number} className="min-h-72 bg-background p-8">
                  <span className="font-serif text-4xl text-gold">{step.number}</span>
                  <h3 className="mt-8 text-xl text-navy">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div>
              <SectionLabel>Dúvidas frequentes</SectionLabel>
              <h2 className="mt-5 text-4xl leading-tight text-navy sm:text-5xl">Informação clara desde o início.</h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Se a sua dúvida não estiver aqui, entre em contato para uma orientação inicial.</p>
            </div>
            <div className="border-t border-border">
              {faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium text-navy">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="max-w-2xl pt-4 text-sm leading-7 text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-navy py-20 text-hero md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-10">
            <div>
              <SectionLabel light>Endereço e contato</SectionLabel>
              <h2 className="mt-5 max-w-xl text-4xl leading-tight sm:text-5xl">Vamos conversar sobre o seu caso?</h2>
              <p className="mt-6 max-w-lg leading-8 text-hero-muted">Entre em contato para solicitar informações e agendar seu atendimento.</p>
              <div className="mt-9 space-y-6">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-start gap-4 text-hero transition-colors hover:text-gold-soft">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span><small className="block uppercase tracking-[0.18em] text-hero-muted">Telefone e WhatsApp</small>{PHONE}</span>
                </a>
                <a href={EMAIL} className="flex items-start gap-4 text-hero transition-colors hover:text-gold-soft">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="break-all"><small className="block uppercase tracking-[0.18em] text-hero-muted">E-mail</small>nauannymarcal.adv@gmail.com</span>
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-start gap-4 text-hero transition-colors hover:text-gold-soft">
                  <Instagram className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span><small className="block uppercase tracking-[0.18em] text-hero-muted">Instagram</small>@nauannymarcal.adv</span>
                </a>
                <div className="flex items-start gap-4 text-hero">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span><small className="block uppercase tracking-[0.18em] text-hero-muted">Escritório</small>Estrada do Mendanha, 2766 — Loja D<br />Campo Grande, Rio de Janeiro — RJ<br />CEP 23092-002</span>
                </div>
              </div>
              <Button asChild size="lg" className="mt-10 h-14 rounded-none bg-gold px-8 text-xs font-semibold uppercase tracking-[0.14em] text-navy hover:bg-gold-soft">
                <a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle /> Falar pelo WhatsApp</a>
              </Button>
            </div>
            <div className="min-h-[440px] overflow-hidden border border-hero-line">
              <iframe
                title="Localização — Nauanny Marçal Advocacia"
                src="https://www.google.com/maps?q=Estrada+do+Mendanha+2766+Campo+Grande+Rio+de+Janeiro+23092-002&output=embed"
                className="h-full min-h-[440px] w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-hero-line bg-navy text-hero-muted">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between lg:px-10">
          <div>
            <img src={logoAsset.url} alt="Nauanny Marçal Advocacia" className="h-16 w-auto" />
            <p className="mt-4 max-w-md text-sm leading-6">Direito de Família, Cível e Previdenciário em Campo Grande, Rio de Janeiro.</p>
          </div>
          <div className="flex gap-5">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gold-soft hover:text-gold"><Instagram /></a>
            <a href={EMAIL} aria-label="E-mail" className="text-gold-soft hover:text-gold"><Mail /></a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="text-gold-soft hover:text-gold"><MessageCircle /></a>
          </div>
        </div>
        <div className="border-t border-hero-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs md:flex-row md:justify-between lg:px-10">
            <span>© {new Date().getFullYear()} Nauanny Marçal Advocacia. Todos os direitos reservados.</span>
            <span>Atendimento presencial e online</span>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-xl transition-transform hover:scale-105">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}