import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ExternalLink,
  LayoutGrid,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import ChatWidget from './components/ChatWidget';

const GilbyteMark = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M50 15C31.2 15 15 31.2 15 50C15 68.8 31.2 85 50 85C65.3 85 78.2 74.8 82.5 61H50V41H85V50C85 75.8 69.3 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0C68.9 0 85.5 10.6 93.9 26.2L79.6 34.5C74 23 62.8 15 50 15Z"
      fill="#1B1340"
    />
    <rect x="54" y="24" width="16" height="16" rx="4" fill="#6D4AFF" />
  </svg>
);

const BookGridMark = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect x="3" y="3" width="11.5" height="11.5" rx="3" fill="#1B1340" />
    <rect x="17.5" y="3" width="11.5" height="11.5" rx="3" fill="#1B1340" />
    <rect x="3" y="17.5" width="11.5" height="11.5" rx="3" fill="#1B1340" />
    <rect x="17.5" y="17.5" width="11.5" height="11.5" rx="3" fill="#6D4AFF" />
  </svg>
);

const SmartBizChatMark = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path d="M4 5.5H28V22.5H13.5L7.5 27.5V22.5H4V5.5Z" stroke="#1B1340" strokeWidth="2.6" strokeLinejoin="round" />
    <path d="M21 5.5H28V12.5" stroke="#6D4AFF" strokeWidth="2.8" strokeLinecap="square" />
    <rect x="9.5" y="10.5" width="13" height="2.4" rx="1" fill="#6D4AFF" />
    <rect x="9.5" y="15.5" width="9.5" height="2.4" rx="1" fill="#1B1340" />
  </svg>
);

const IntakeDockMark = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <rect width="32" height="32" rx="8" fill="#1B1340" />
    <path d="M9 10.5C9 9.67 9.67 9 10.5 9H17.5L23 14.5V21.5C23 22.33 22.33 23 21.5 23H10.5C9.67 23 9 22.33 9 21.5V10.5Z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
    <path d="M17 9V15H23" stroke="#A78BFA" strokeWidth="2" strokeLinejoin="round" />
    <path d="M13 18L15 20L19.5 15.5" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SUITE_APPS = [
  {
    name: 'BookGrid',
    desc: 'Agenda & lista de espera',
    href: 'https://bookgrid-iota.vercel.app',
    price: '$29 / €25',
    Mark: BookGridMark,
  },
  {
    name: 'IntakeDock',
    desc: 'Recolha segura de documentos',
    href: 'https://intakedock-liart.vercel.app',
    price: '$29 / €25',
    Mark: IntakeDockMark,
  },
  {
    name: 'SmartBizChat',
    desc: 'Assistente IA documental 24/7',
    href: 'https://smart-biz-chat.vercel.app',
    price: '$29 / €25',
    Mark: SmartBizChatMark,
  },
];

const TopBar = () => (
  <div className="bg-[#1B1340] text-white text-xs py-2 px-4 border-b border-white/10">
    <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center sm:justify-between gap-2">
      <div className="inline-flex items-center gap-2 font-medium text-white/90">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#6D4AFF] text-[10px] font-bold uppercase tracking-wide text-white">
          14 Dias Grátis
        </span>
        <span>Suíte SaaS com preço fixo em USD ($) e EUR (€) — sem taxas ocultas por utilizador.</span>
      </div>
      <a
        href="#products"
        className="font-semibold text-[#C4B5FD] hover:text-white transition-colors inline-flex items-center gap-1"
      >
        Explorar produtos <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  </div>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [suiteOpen, setSuiteOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#EAE6F5] bg-white/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 relative">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5"
          >
            <GilbyteMark className="w-8 h-8" />
            <span className="text-[17px] font-bold tracking-tight text-[#1B1340]">
              GilByte Solutions
            </span>
          </a>

          <button
            type="button"
            onClick={() => setSuiteOpen(!suiteOpen)}
            aria-label="Abrir seletor de aplicações GilByte"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#EAE6F5] bg-[#F8F7FC] text-[#4A4660] hover:text-[#6D4AFF] hover:border-[#6D4AFF]/40 transition-colors"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {suiteOpen && (
            <div className="absolute left-0 top-12 w-72 rounded-2xl border border-[#EAE6F5] bg-white shadow-xl p-2 z-50">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#5C5873]">
                Suíte GilByte
              </div>
              {SUITE_APPS.map(({ name, desc, href, Mark }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSuiteOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[#F8F7FC] transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-[#F8F7FC] border border-[#EAE6F5]">
                    <Mark className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#1B1340]">{name}</div>
                    <div className="text-xs text-[#5C5873] truncate">{desc}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4660]">
          <a href="#products" className="hover:text-[#1B1340] transition-colors">
            Produtos
          </a>
          <a href="#about" className="hover:text-[#1B1340] transition-colors">
            Segurança &amp; Valores
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#6D4AFF] font-semibold hover:text-[#5B38E8] transition-colors"
          >
            BookGrid <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="tactile-btn px-4 py-2 rounded-lg bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#5B38E8] shadow-sm"
          >
            Contactar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg border border-[#EAE6F5] text-[#1B1340]"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-[#EAE6F5] bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-[#1B1340]">
          <a href="#products" onClick={() => setMobileOpen(false)} className="py-1">
            Produtos
          </a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="py-1">
            Segurança &amp; Valores
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-[#6D4AFF] font-semibold"
          >
            BookGrid
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-lg bg-[#6D4AFF] text-white text-center text-xs font-semibold"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F7FC] via-white to-white border-b border-[#EAE6F5] py-16 md:py-24">
    <div
      className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[340px] rounded-full opacity-20 blur-3xl"
      style={{ background: 'radial-gradient(circle, #6D4AFF 0%, transparent 70%)' }}
    />
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6 enter-subtle">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAFF] border border-[#DDD3FF] text-xs font-semibold text-[#5B38E8]">
          <Lock className="w-3.5 h-3.5" />
          GilByte Suite • Privado por concepção
        </span>

        <h1 className="text-[40px] sm:text-[50px] md:text-[56px] font-bold tracking-[-0.025em] text-[#1B1340] leading-[1.08]">
          Software prático e seguro para equipas modernas.
        </h1>

        <p className="text-base sm:text-lg text-[#4A4660] leading-relaxed max-w-xl">
          Plataformas SaaS enxutas para automatizar agendamentos, recolha encriptada de documentos e
          atendimento inteligente — com preço fixo transparente em Dólar e Euro.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#6D4AFF] text-white text-sm font-semibold hover:bg-[#5B38E8] shadow-sm"
          >
            Começar com o BookGrid
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#EAE6F5] bg-white text-sm font-semibold text-[#1B1340] hover:border-[#6D4AFF]/40 hover:bg-[#F8F7FC]"
          >
            <MessageCircle className="w-4 h-4 text-[#6D4AFF]" />
            WhatsApp: +238 917 2385
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-medium text-[#5C5873]">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#6D4AFF]" />
            Isolamento Multi-Tenant
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Check className="w-4 h-4 text-[#6D4AFF]" />
            14 dias grátis sem cartão
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#6D4AFF]" />
            Suporte direto
          </span>
        </div>
      </div>

      <div className="lg:col-span-5 enter-subtle-delay">
        <div className="rounded-2xl overflow-hidden border border-[#EAE6F5] shadow-lg bg-white">
          <div className="grid grid-cols-12">
            {/* Mini Sidebar estilo Proton */}
            <div className="col-span-4 bg-[#1B1340] text-white p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#6D4AFF]" />
                  <span className="text-[11px] font-bold tracking-wide uppercase text-white/80">
                    GilByte
                  </span>
                </div>
                <div className="px-2.5 py-2 rounded-lg bg-[#6D4AFF] text-[11px] font-semibold text-center">
                  3 Apps Ativos
                </div>
                <div className="space-y-1.5 text-[11px] text-white/75">
                  <div className="px-2 py-1.5 rounded-md bg-white/10 text-white font-medium">
                    Ecossistema
                  </div>
                  <div className="px-2 py-1.5 rounded-md">USD &amp; EUR</div>
                  <div className="px-2 py-1.5 rounded-md">Segurança RLS</div>
                </div>
              </div>
              <div className="pt-6 text-[10px] text-white/50">v2.0 • Cloud</div>
            </div>

            {/* Área Clara */}
            <div className="col-span-8 bg-[#F8F7FC] p-4 space-y-2.5">
              <div className="flex items-center justify-between pb-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C5873]">
                  Suíte em Produção
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#EFEAFF] text-[#5B38E8]">
                  Online
                </span>
              </div>

              {SUITE_APPS.map(({ name, desc, href, price, Mark }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactile-card block rounded-xl bg-white border border-[#EAE6F5] p-3 hover:border-[#6D4AFF]/50 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="p-1.5 rounded-lg bg-[#F8F7FC] border border-[#EAE6F5] shrink-0">
                        <Mark className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#1B1340]">{name}</div>
                        <div className="text-[11px] text-[#5C5873] truncate">{desc}</div>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-[#6D4AFF] shrink-0">{price}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section id="products" className="bg-[#F8F7FC] py-20 border-b border-[#EAE6F5]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#6D4AFF]">
          Portfólio Oficial
        </span>
        <h2 className="text-[30px] sm:text-[36px] font-bold tracking-[-0.02em] text-[#1B1340] leading-tight">
          Produtos construídos para gerar resultado
        </h2>
        <p className="text-sm sm:text-base text-[#4A4660]">
          Um único padrão de qualidade, sem complexidade desnecessária nem cobranças ocultas por utilizador.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* BookGrid */}
        <div className="tactile-card rounded-2xl bg-white border border-[#EAE6F5] hover:border-[#6D4AFF]/40 p-7 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-[#EFEAFF] text-[#5B38E8] border border-[#DDD3FF]">
                Em Produção
              </span>
              <span className="text-sm font-bold text-[#1B1340]">$29 USD / 25 € mês</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F8F7FC] border border-[#EAE6F5]">
                <BookGridMark className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1340]">BookGrid</h3>
                <p className="text-xs text-[#5C5873]">Barbearias, salões, clínicas e estúdios</p>
              </div>
            </div>

            <p className="text-sm text-[#4A4660] leading-relaxed">
              Sistema de agendamentos com preço fixo para até 5 profissionais incluídos, carrinho
              multi-serviços, proteção contra horários duplicados e lista de espera automática.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1B1340]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Zero taxa extra por membro da equipa (até 5 incluídos)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Página pública de marcação sem login para o cliente final
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                14 dias de teste grátis sem cartão de crédito
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <a
              href="https://bookgrid-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#5B38E8]"
            >
              Abrir BookGrid
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://bookgrid-iota.vercel.app/atlantic-barber-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#EAE6F5] bg-white text-xs font-semibold text-[#1B1340] hover:bg-[#F8F7FC]"
            >
              Ver Vitrine Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* IntakeDock */}
        <div className="tactile-card rounded-2xl bg-white border border-[#EAE6F5] hover:border-[#6D4AFF]/40 p-7 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-[#EFEAFF] text-[#5B38E8] border border-[#DDD3FF]">
                Em Produção
              </span>
              <span className="text-sm font-bold text-[#1B1340]">$29 USD / 25 € mês</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F8F7FC] border border-[#EAE6F5]">
                <IntakeDockMark className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1340]">IntakeDock</h3>
                <p className="text-xs text-[#5C5873]">Contabilidade, advocacia, imobiliárias e RH</p>
              </div>
            </div>

            <p className="text-sm text-[#4A4660] leading-relaxed">
              Portal seguro sem senha para recolher documentos de clientes com pré-validação de
              legibilidade por IA, cofre privado e exportação ZIP/PDF num clique.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1B1340]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Magic links criptografados (sem login para o cliente)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Verificação automática de nitidez e validade por IA
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                14 dias de teste grátis (Starter $29 ou Studio $59/mês)
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <a
              href="https://intakedock-liart.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#5B38E8]"
            >
              Abrir IntakeDock
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://intakedock-liart.vercel.app/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#EAE6F5] bg-white text-xs font-semibold text-[#1B1340] hover:bg-[#F8F7FC]"
            >
              Ver Planos
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* SmartBizChat */}
        <div className="tactile-card rounded-2xl bg-white border border-[#EAE6F5] hover:border-[#6D4AFF]/40 p-7 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-[#EFEAFF] text-[#5B38E8] border border-[#DDD3FF]">
                Em Produção
              </span>
              <span className="text-sm font-bold text-[#1B1340]">$29 USD / 25 € mês</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#F8F7FC] border border-[#EAE6F5]">
                <SmartBizChatMark className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B1340]">SmartBizChat</h3>
                <p className="text-xs text-[#5C5873]">Imobiliárias, turismo, comércio e suporte</p>
              </div>
            </div>

            <p className="text-sm text-[#4A4660] leading-relaxed">
              Assistente virtual multi-empresa treinado nos documentos, catálogos e procedimentos
              internos da sua organização para atender clientes 24 horas por dia.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-[#1B1340]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Respostas baseadas exclusivamente nos seus PDFs e FAQs
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                Widget leve incorporável em qualquer website
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#6D4AFF] shrink-0" />
                14 dias de teste grátis (Starter $29 ou Business $59/mês)
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            <a
              href="https://smart-biz-chat.vercel.app/#precos"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#5B38E8]"
            >
              Assinar SmartBizChat
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://smart-biz-chat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#EAE6F5] bg-white text-xs font-semibold text-[#1B1340] hover:bg-[#F8F7FC]"
            >
              Ver Demo &amp; Planos
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="bg-white py-16 border-b border-[#EAE6F5]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="rounded-3xl bg-[#1B1340] text-white p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C4B5FD]">
            <ShieldCheck className="w-4 h-4" />
            Privado por concepção
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Engenharia de software direta ao ponto.
          </h2>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">
            A <strong className="text-white">GilByte Solutions</strong> desenvolve aplicações web
            multi-tenant com isolamento rigoroso por empresa, criptografia de acessos e pagamentos
            internacionais transparentes em Dólar e Euro — prontas para funcionar sem equipas
            técnicas dedicadas.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-2xl bg-[#261C54] border border-white/10 p-4">
            <div className="text-2xl font-bold text-white">14d</div>
            <div className="text-[11px] text-white/70 mt-1">Teste grátis real</div>
          </div>
          <div className="rounded-2xl bg-[#261C54] border border-white/10 p-4">
            <div className="text-2xl font-bold text-[#C4B5FD]">$/€</div>
            <div className="text-[11px] text-white/70 mt-1">Preço fixo global</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white py-14">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      <div className="rounded-2xl border border-[#EAE6F5] bg-[#F8F7FC] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-[#1B1340]">Fale com a GilByte Solutions</h2>
          <p className="text-sm text-[#4A4660]">
            Atendimento direto por E-mail, WhatsApp ou Telegram.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:gilbytesolutions@hotmail.com"
            className="tactile-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#5B38E8]"
          >
            <Mail className="w-4 h-4" />
            gilbytesolutions@hotmail.com
          </a>
          <a
            href="https://wa.me/2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#EAE6F5] bg-white text-xs font-semibold text-[#1B1340] hover:bg-white/80"
          >
            <MessageCircle className="w-4 h-4 text-[#6D4AFF]" />
            WhatsApp
          </a>
          <a
            href="https://t.me/+2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#EAE6F5] bg-white text-xs font-semibold text-[#1B1340] hover:bg-white/80"
          >
            <Send className="w-4 h-4 text-[#6D4AFF]" />
            Telegram
          </a>
        </div>
      </div>

      <div className="pt-6 border-t border-[#EAE6F5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C5873]">
        <div className="flex items-center gap-2">
          <GilbyteMark className="w-5 h-5" />
          <span className="font-semibold text-[#1B1340]">GilByte Solutions</span>
          <span>• © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://bookgrid-iota.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B1340]">
            BookGrid
          </a>
          <a href="https://intakedock-liart.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B1340]">
            IntakeDock
          </a>
          <a href="https://smart-biz-chat.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B1340]">
            SmartBizChat
          </a>
          <a href="https://linkedin.com/company/gilbyte-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B1340]">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0C0C14]">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <AboutSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
