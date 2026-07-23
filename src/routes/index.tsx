import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, MapPin, Phone, ChevronDown, Scale, ShieldCheck, HeartHandshake, Clock, CheckCircle2 } from "lucide-react";
import heroAsset from "@/assets/hero-moniele.png.asset.json";
import logoAsset from "@/assets/logo-mc.png.asset.json";
import workerImg from "@/assets/worker.jpg";
import retireeImg from "@/assets/retiree.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Moniele Carvalho — Advogada Previdenciária | Rio de Janeiro" },
      {
        name: "description",
        content:
          "Advocacia previdenciária humanizada no Rio de Janeiro. Aposentadorias, auxílio-doença, pensão por morte, BPC-LOAS e auxílio-maternidade. Nota 5.0 no Google.",
      },
      { property: "og:title", content: "Moniele Carvalho — Advogada Previdenciária" },
      { property: "og:description", content: "Direitos previdenciários com atendimento humanizado. Consulta gratuita." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP = "https://wa.me/5521980532366?text=Ol%C3%A1%2C%20Dra.%20Moniele%2C%20gostaria%20de%20uma%20consulta.";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas", href: "#areas" },
  { label: "Como funciona", href: "#processo" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const areas = [
  { title: "Aposentadorias", desc: "Por idade, tempo de contribuição, especial, professor, PCD e revisões." },
  { title: "Auxílio-Doença", desc: "Concessão, prorrogação e restabelecimento de benefício por incapacidade." },
  { title: "Pensão por Morte", desc: "Reconhecimento de dependentes e cálculo correto do benefício." },
  { title: "BPC-LOAS", desc: "Benefício assistencial para idosos e pessoas com deficiência de baixa renda." },
  { title: "Auxílio-Maternidade", desc: "Salário-maternidade para trabalhadoras urbanas, rurais e MEI." },
  { title: "Revisões e Recursos", desc: "Análise de valores pagos a menor e recursos administrativos e judiciais." },
];

const steps = [
  { n: "01", title: "Consulta gratuita", desc: "Conversamos sobre o seu caso sem compromisso, pelo WhatsApp ou presencialmente." },
  { n: "02", title: "Análise do direito", desc: "Estudamos documentos e o CNIS para identificar o melhor caminho." },
  { n: "03", title: "Estratégia e ação", desc: "Iniciamos o processo administrativo ou judicial com você acompanhando cada etapa." },
  { n: "04", title: "Benefício concedido", desc: "Você recebe seu direito com todo o suporte durante e depois do processo." },
];

const testimonials = [
  {
    name: "Renata Lemos",
    role: "Cliente • Google",
    text: "A Dra. Moniele é sensacional! Resolveu meu caso no INSS com agilidade e muita competência. Atendimento humanizado e eficiente, melhor advogada que já conheci.",
  },
  {
    name: "Tania Bartholomeu",
    role: "Cliente • Google",
    text: "Conhecer a Dra. Moniele foi um presente de Deus! Íntegra, educada, simpática e trabalha com muita responsabilidade e segurança em tudo o que faz!",
  },
  {
    name: "Junior Coelho",
    role: "Cliente • Google",
    text: "Desde a primeira consulta, me senti acolhido e ouvido. A Dra. explicou cada etapa do processo com paciência e clareza. Me tratou como pessoa, não como número.",
  },
  {
    name: "Aline Sobral",
    role: "Cliente • Google",
    text: "Já tinha entrado pelos meios normais e não tive êxito. A Dra. Moniele resolveu minha aposentadoria e ainda entrou com os retroativos que eu tinha direito.",
  },
  {
    name: "Eliete Feio",
    role: "Cliente • Google",
    text: "Dei entrada na minha aposentadoria e a Dra. Moniele resolveu de imediato. Uma advogada muito competente que dá o maior suporte durante o processo.",
  },
  {
    name: "Carlos Júnior",
    role: "Cliente • Google",
    text: "Excelente profissional! Muito competente, atenciosa e dedicada. Conduziu meu caso com clareza e eficiência. Recomendo fortemente!",
  },
];

const faqs = [
  {
    q: "A primeira consulta é realmente gratuita?",
    a: "Sim. A análise inicial do seu caso é gratuita e sem compromisso. Você recebe uma orientação clara sobre seu direito antes de qualquer contratação.",
  },
  {
    q: "Preciso ir até o escritório?",
    a: "Não é obrigatório. Atendemos presencialmente em Campo Grande, RJ e também 100% online por WhatsApp e videochamada, com a mesma qualidade.",
  },
  {
    q: "Como funcionam os honorários?",
    a: "Trabalhamos com honorários transparentes e, na maioria dos benefícios, apenas em caso de êxito — você só paga quando conquistar o direito.",
  },
  {
    q: "Quanto tempo demora para conseguir o benefício?",
    a: "Depende do tipo de benefício e da via (administrativa ou judicial). Na primeira consulta apresentamos uma estimativa realista para o seu caso.",
  },
];

function Landing() {
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <nav className="flex items-center justify-between rounded-full border border-white/15 bg-black/35 px-5 py-3 backdrop-blur-md">
            <a href="#inicio" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-[oklch(0.25_0.04_45)] font-serif text-lg font-semibold">M</div>
              <div className="leading-tight">
                <div className="font-serif text-base tracking-wide text-white">Moniele Carvalho</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Advogada</div>
              </div>
            </a>
            <ul className="hidden lg:flex items-center gap-7 text-sm text-white/85">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-[color:var(--gold-soft)] transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-sm font-medium text-[oklch(0.25_0.04_45)] shadow-lg shadow-[oklch(0.72_0.13_78)]/25 hover:brightness-105 transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Entrar em contato</span>
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Dra. Moniele Carvalho em seu escritório"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-40 pb-28 md:pt-48 md:pb-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-black/30 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-gold-soft backdrop-blur">
              <Scale className="h-3.5 w-3.5" />
              Advocacia Previdenciária
            </div>

            <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white text-shadow-hero">
              Seu direito ao <em className="text-gold not-italic">INSS</em> merece uma advogada que <span className="italic text-gold-soft">luta por você.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 text-shadow-hero">
              Aposentadorias, auxílio-doença, pensão por morte, BPC-LOAS e maternidade.
              Atendimento humanizado, transparente e com resultados concretos no Rio de Janeiro.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-medium text-[oklch(0.22_0.04_40)] shadow-xl shadow-black/40 hover:brightness-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Quero minha consulta gratuita
              </a>
              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition"
              >
                Ver áreas de atuação
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                  ))}
                </div>
                <span className="text-sm text-white/85">
                  <span className="font-semibold text-white">5.0</span> no Google
                </span>
              </div>
              <div className="h-4 w-px bg-white/25" />
              <div className="text-sm text-white/85">
                <span className="font-semibold text-white">+500</span> famílias atendidas
              </div>
              <div className="h-4 w-px bg-white/25" />
              <div className="text-sm text-white/85">Atendimento presencial e online</div>
            </div>
          </div>
        </div>
      </section>

      {/* SITUATIONS */}
      <section id="areas" className="relative bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--brown)]">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Reconhece essa situação?
              <span className="h-px w-8 bg-[color:var(--gold)]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--brown)]">
              Você está passando por <br className="hidden md:block" />
              alguma dessas situações?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {/* Card 1 */}
            <article className="relative overflow-hidden rounded-2xl bg-[color:var(--cream)] p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(120,80,30,0.35)] border border-[color:var(--gold)]/20">
              <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gold-gradient opacity-30 blur-2xl" />
              <div className="relative grid grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--brown)]">Trabalhador</h3>
                  <ul className="mt-6 space-y-4 text-[color:var(--brown)]/90 text-[15px]">
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gold-gradient grid place-items-center text-xs font-semibold text-[oklch(0.25_0.04_45)]">1</span>
                      Trabalhou anos a fio e não sabe se já tem direito à aposentadoria?
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gold-gradient grid place-items-center text-xs font-semibold text-[oklch(0.25_0.04_45)]">2</span>
                      Teve o benefício negado ou cortado pelo INSS mesmo estando doente?
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-gold-gradient grid place-items-center text-xs font-semibold text-[oklch(0.25_0.04_45)]">3</span>
                      Recebeu um valor menor do que deveria e desconfia de erro no cálculo?
                    </li>
                  </ul>
                </div>
                <img
                  src={workerImg}
                  alt="Trabalhador da construção civil"
                  width={640}
                  height={800}
                  loading="lazy"
                  className="h-40 w-32 md:h-56 md:w-44 rounded-xl object-cover shadow-lg"
                />
              </div>
            </article>

            {/* Card 2 */}
            <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--brown-light)]/40 to-[color:var(--gold-soft)] p-8 md:p-10 shadow-[0_20px_60px_-30px_rgba(120,80,30,0.4)] border border-[color:var(--gold)]/30">
              <div className="absolute -left-6 -bottom-6 h-40 w-40 rounded-full bg-white opacity-40 blur-2xl" />
              <div className="relative grid grid-cols-[1fr_auto] gap-6 items-start">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-[color:var(--brown)]">Aposentadoria</h3>
                  <ul className="mt-6 space-y-4 text-[color:var(--brown)]/90 text-[15px]">
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[color:var(--brown)] grid place-items-center text-xs font-semibold text-white">1</span>
                      Já entrou no INSS e teve o pedido de aposentadoria negado sem explicação?
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[color:var(--brown)] grid place-items-center text-xs font-semibold text-white">2</span>
                      Perdeu um ente querido e não sabe como pedir a pensão por morte?
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[color:var(--brown)] grid place-items-center text-xs font-semibold text-white">3</span>
                      É idoso ou tem deficiência e precisa entender o BPC-LOAS?
                    </li>
                  </ul>
                </div>
                <img
                  src={retireeImg}
                  alt="Cliente aposentada"
                  width={640}
                  height={800}
                  loading="lazy"
                  className="h-40 w-32 md:h-56 md:w-44 rounded-xl object-cover shadow-lg"
                />
              </div>
            </article>
          </div>

          <p className="mt-10 text-center text-sm text-muted-foreground">
            Se você se identificou com alguma dessas situações, a Dra. Moniele pode te ajudar.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-[oklch(0.22_0.04_40)] shadow-lg hover:brightness-105 transition"
            >
              <MessageCircle className="h-4 w-4" />
              Falar com a Dra. Moniele
            </a>
          </div>
        </div>
      </section>

      {/* AREAS OF PRACTICE */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--brown)]">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Áreas de atuação
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--brown)]">
              Direito Previdenciário com <span className="italic text-[color:var(--gold)]">excelência</span>.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Atuação exclusiva junto ao INSS: análise técnica do seu CNIS, planejamento previdenciário e
              acompanhamento personalizado do início ao fim do processo.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a.title} className="group rounded-xl bg-white p-6 border border-[color:var(--gold)]/15 hover:border-[color:var(--gold)]/50 transition shadow-sm hover:shadow-md">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-gold-gradient text-[oklch(0.25_0.04_45)]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif text-xl text-[color:var(--brown)]">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="processo" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--brown)]">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Como funciona
              <span className="h-px w-8 bg-[color:var(--gold)]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--brown)]">
              Um caminho claro para conquistar seu direito.
            </h2>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl bg-[color:var(--cream)] p-6 border border-[color:var(--gold)]/20">
                <div className="font-serif text-4xl text-[color:var(--gold)]">{s.n}</div>
                <h3 className="mt-3 font-serif text-xl text-[color:var(--brown)]">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre" className="relative bg-[color:var(--brown)] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[color:var(--gold)] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-soft">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Sobre a Dra. Moniele
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl">
              Atendimento humanizado, técnica e resultado.
            </h2>
            <p className="mt-5 text-white/80">
              Dra. Moniele Carvalho é advogada previdenciária, dedicada a orientar trabalhadores e famílias
              a conquistarem os benefícios a que têm direito junto ao INSS. Cada caso é tratado com escuta atenta,
              transparência e estratégia jurídica de excelência.
            </p>

            <ul className="mt-8 space-y-3 text-white/90 text-sm">
              {[
                "Atuação exclusiva em Direito Previdenciário",
                "Atendimento personalizado, sem intermediários",
                "Estratégia administrativa e judicial",
                "Nota 5.0 no Google com dezenas de clientes",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[color:var(--gold)]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-[oklch(0.22_0.04_40)] hover:brightness-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar consulta
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: HeartHandshake, label: "Escuta e acolhimento", value: "100%" },
              { icon: Clock, label: "Retorno em até", value: "24h" },
              { icon: Star, label: "Nota Google", value: "5.0" },
              { icon: ShieldCheck, label: "Casos previdenciários", value: "+500" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <s.icon className="h-6 w-6 text-[color:var(--gold)]" />
                <div className="mt-4 font-serif text-3xl">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/70 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--brown)]">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Depoimentos
              <span className="h-px w-8 bg-[color:var(--gold)]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--brown)]">
              Histórias de quem conquistou seu direito.
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 no Google</span>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-[color:var(--cream)] p-6 border border-[color:var(--gold)]/20 flex flex-col">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm text-[color:var(--brown)]/90 leading-relaxed flex-1">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 pt-4 border-t border-[color:var(--gold)]/20">
                  <div className="font-serif text-[color:var(--brown)]">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[color:var(--brown)]">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              Dúvidas frequentes
              <span className="h-px w-8 bg-[color:var(--gold)]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--brown)]">
              Perguntas frequentes
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl bg-white border border-[color:var(--gold)]/20 p-5 open:shadow-md transition-shadow"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="font-serif text-lg text-[color:var(--brown)]">{f.q}</span>
                  <ChevronDown className="h-5 w-5 text-[color:var(--gold)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="relative bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-stretch">
          <div className="rounded-2xl bg-[color:var(--brown)] text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[color:var(--gold)] opacity-20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-soft">
                <span className="h-px w-8 bg-[color:var(--gold)]" />
                Vamos conversar
              </div>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                Consulta gratuita e sem compromisso.
              </h2>
              <p className="mt-4 text-white/80">
                Envie uma mensagem e receba uma análise inicial do seu caso pela Dra. Moniele.
              </p>

              <div className="mt-8 space-y-5 text-sm">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-[oklch(0.22_0.04_40)]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">WhatsApp</div>
                    <div className="text-white group-hover:text-[color:var(--gold-soft)] transition-colors">(21) 98053-2366</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-[oklch(0.22_0.04_40)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Telefone</div>
                    <div className="text-white">(21) 98053-2366</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-[oklch(0.22_0.04_40)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-xs uppercase tracking-widest">Endereço</div>
                    <div className="text-white">
                      Rua Olinda Ellis, 1510 — loja D<br />
                      Campo Grande, Rio de Janeiro — RJ<br />
                      CEP 23017-120
                    </div>
                  </div>
                </div>
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-[oklch(0.22_0.04_40)] hover:brightness-105 transition"
              >
                <MessageCircle className="h-4 w-4" />
                Falar agora no WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[color:var(--gold)]/25 min-h-[420px]">
            <iframe
              title="Localização — Rua Olinda Ellis, 1510"
              src="https://www.google.com/maps?q=Rua+Olinda+Ellis+1510+Campo+Grande+Rio+de+Janeiro&output=embed"
              className="h-full w-full min-h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[color:var(--brown)] text-white/80">
        <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gold-gradient text-[oklch(0.25_0.04_45)] font-serif text-xl">M</div>
              <div>
                <div className="font-serif text-white text-lg">Moniele Carvalho</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-soft">Advogada Previdenciária</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/70 max-w-xs">
              Direitos previdenciários com escuta, técnica e resultado. Atendimento humanizado no Rio de Janeiro.
            </p>
            <img src={logoAsset.url} alt="Logo MC" className="mt-6 h-10 w-auto opacity-70" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft">Áreas</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Aposentadorias</li>
              <li>Auxílio-doença</li>
              <li>Pensão por morte</li>
              <li>BPC-LOAS</li>
              <li>Auxílio-maternidade</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-gold-soft">Contato</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>WhatsApp: (21) 98053-2366</li>
              <li>Rua Olinda Ellis, 1510 — loja D</li>
              <li>Campo Grande, Rio de Janeiro — RJ</li>
              <li>CEP 23017-120</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Moniele Carvalho — Advogada. Todos os direitos reservados.</div>
            <div>OAB • Direito Previdenciário</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/30 hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
