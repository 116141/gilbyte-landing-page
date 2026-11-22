import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Globe,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Plus,
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
    descPt: 'Agenda multi-serviços e lista de espera',
    descEn: 'Multi-service booking & smart waitlist',
    href: 'https://bookgrid-iota.vercel.app',
    demoHref: 'https://bookgrid-iota.vercel.app/atlantic-barber-studio',
    price: '$29 / €25',
    Mark: BookGridMark,
  },
  {
    name: 'IntakeDock',
    descPt: 'Recolha encriptada de documentos',
    descEn: 'Passwordless encrypted document intake',
    href: 'https://intakedock-liart.vercel.app',
    demoHref: 'https://intakedock-liart.vercel.app/pricing',
    price: '$29 / €25',
    Mark: IntakeDockMark,
  },
  {
    name: 'SmartBizChat',
    descPt: 'Assistente IA documental 24/7',
    descEn: '24/7 AI knowledge-base assistant',
    href: 'https://smart-biz-chat.vercel.app',
    demoHref: 'https://smart-biz-chat.vercel.app/#precos',
    price: '$29 / €25',
    Mark: SmartBizChatMark,
  },
];

const FAQ_ITEMS_PT = [
  {
    q: 'O que é a suíte GilByte Solutions?',
    a: 'É um ecossistema de 3 plataformas SaaS em produção (BookGrid, IntakeDock e SmartBizChat) desenhadas para equipas de serviços, escritórios e empresas que querem automação real sem pagar taxas por cada utilizador.',
  },
  {
    q: 'Os meus clientes precisam de criar conta?',
    a: 'Não. Tanto a vitrine pública do BookGrid (bookgrid.app/[slug]) como os links encriptados do IntakeDock (/p/...) e o chat do SmartBizChat funcionam imediatamente sem exigir registo ao cliente final.',
  },
  {
    q: 'Existe período de teste gratuito?',
    a: 'Sim. Todos os 3 produtos incluem 14 dias de teste grátis sem exigir cartão de crédito no arranque.',
  },
  {
    q: 'Como funcionam os pagamentos e moedas?',
    a: 'Preços transparentes em Dólar (USD) e Euro (EUR), com plano base de $29 USD / €25 EUR por mês e faturação global segura.',
  },
  {
    q: 'Os dados de cada empresa ficam isolados?',
    a: 'Sim. Utilizamos isolamento multi-tenant rigoroso na base de dados (Row-Level Security) e cofres privados para ficheiros, garantindo que nenhuma empresa acede aos dados de outra.',
  },
  {
    q: 'Posso falar diretamente com o suporte?',
    a: 'Sim. O atendimento é direto com a equipa de engenharia por E-mail, WhatsApp (+238 917 2385) ou Telegram.',
  },
];

const FAQ_ITEMS_EN = [
  {
    q: 'What is the GilByte Solutions suite?',
    a: 'An ecosystem of 3 production SaaS apps (BookGrid, IntakeDock, and SmartBizChat) built for service teams and businesses that want practical automation without per-seat pricing.',
  },
  {
    q: 'Do my end clients need to create an account?',
    a: 'No. BookGrid booking pages, IntakeDock encrypted magic-link portals, and SmartBizChat widgets work immediately with zero client login required.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes. All 3 products include a 14-day free trial with no credit card required upfront.',
  },
  {
    q: 'Which currencies are supported?',
    a: 'Transparent flat-rate billing in USD ($) and EUR (€), starting at $29 USD / €25 EUR per month.',
  },
  {
    q: 'Is business data isolated per tenant?',
    a: 'Yes. Every organization is isolated with database Row-Level Security and private encrypted storage buckets.',
  },
  {
    q: 'How can I reach support?',
    a: 'Direct engineering support via Email, WhatsApp (+238 917 2385), or Telegram.',
  },
];

export default function App() {
  const [lang, setLang] = useState('pt');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const pt = lang === 'pt';
  const faqs = pt ? FAQ_ITEMS_PT : FAQ_ITEMS_EN;

  return (
    <div className="min-h-screen bg-[#F7F5FF] text-[#0C0C14]">
      {/* PROTON-STYLE HEADER WITH MEGA MENU + LANGUAGE SWITCHER */}
      <header
        className="sticky top-0 z-40 border-b border-[#EAE6F5] bg-white/95 backdrop-blur-md"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 shrink-0"
            >
              <GilbyteMark className="w-7 h-7" />
              <span className="text-[17px] font-bold tracking-tight text-[#1B1340]">
                GilByte
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-[#372580]">
              <button
                type="button"
                onMouseEnter={() => setActiveMenu('products')}
                onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
                className={`px-3.5 py-1.5 rounded-full transition-colors ${
                  activeMenu === 'products'
                    ? 'bg-[#EFEAFF] text-[#6D4AFF]'
                    : 'hover:bg-[#F7F5FF] hover:text-[#6D4AFF]'
                }`}
              >
                {pt ? 'Produtos' : 'Products'}
              </button>
              <button
                type="button"
                onMouseEnter={() => setActiveMenu('business')}
                onClick={() => setActiveMenu(activeMenu === 'business' ? null : 'business')}
                className={`px-3.5 py-1.5 rounded-full transition-colors ${
                  activeMenu === 'business'
                    ? 'bg-[#EFEAFF] text-[#6D4AFF]'
                    : 'hover:bg-[#F7F5FF] hover:text-[#6D4AFF]'
                }`}
              >
                {pt ? 'Empresas' : 'Business'}
              </button>
              <a
                href="#features"
                className="px-3.5 py-1.5 rounded-full hover:bg-[#F7F5FF] hover:text-[#6D4AFF] transition-colors"
              >
                {pt ? 'Funcionalidades' : 'Features'}
              </a>
              <a
                href="#faq"
                className="px-3.5 py-1.5 rounded-full hover:bg-[#F7F5FF] hover:text-[#6D4AFF] transition-colors"
              >
                FAQ
              </a>
              <a
                href="#products"
                className="px-3.5 py-1.5 rounded-full hover:bg-[#F7F5FF] hover:text-[#6D4AFF] transition-colors"
              >
                {pt ? 'Preços' : 'Pricing'}
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-3 relative">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#372580] hover:bg-[#F7F5FF] transition"
              >
                <Globe className="w-3.5 h-3.5 text-[#6D4AFF]" />
                <span>{pt ? 'PT' : 'EN'}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-10 w-44 rounded-2xl bg-white border border-[#EAE6F5] shadow-xl p-1.5 z-50">
                  <button
                    type="button"
                    onClick={() => {
                      setLang('pt');
                      setLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#1B1340] hover:bg-[#F7F5FF]"
                  >
                    <span>Português</span>
                    {pt && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLang('en');
                      setLangOpen(false);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[#1B1340] hover:bg-[#F7F5FF]"
                  >
                    <span>English</span>
                    {!pt && <Check className="w-3.5 h-3.5 text-[#6D4AFF]" />}
                  </button>
                </div>
              )}
            </div>

            <a
              href="https://bookgrid-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn px-4 py-2 rounded-full bg-[#6D4AFF] text-white text-xs font-semibold hover:bg-[#4A2DC5] shadow-sm"
            >
              {pt ? 'Testar BookGrid' : 'Get BookGrid'}
            </a>
            <a
              href="https://bookgrid-iota.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#6D4AFF] hover:text-[#4A2DC5] px-2 py-1.5"
            >
              {pt ? 'Entrar' : 'Sign in'}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#EAE6F5] text-[#1B1340]"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MEGA-MENU DROPDOWN (PROTON STYLE) */}
        {activeMenu && (
          <div className="hidden lg:block border-t border-[#EAE6F5] bg-white shadow-xl">
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
              <div className="col-span-8 space-y-5">
                <a
                  href="#products"
                  onClick={() => setActiveMenu(null)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6D4AFF] hover:text-[#4A2DC5]"
                >
                  {activeMenu === 'products'
                    ? pt
                      ? 'Descubra a Suíte GilByte'
                      : 'Discover GilByte Suite'
                    : pt
                    ? 'Soluções GilByte para Empresas'
                    : 'GilByte for Business'}
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#372580]">
                      {pt ? 'Plataformas' : 'Platforms'}
                    </div>
                    {SUITE_APPS.map(({ name, href }) => (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]"
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#372580]">
                      {pt ? 'Segurança' : 'Security'}
                    </div>
                    <a href="#business" onClick={() => setActiveMenu(null)} className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]">
                      {pt ? 'Isolamento Multi-Tenant' : 'Multi-Tenant RLS'}
                    </a>
                    <a href="#features" onClick={() => setActiveMenu(null)} className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]">
                      {pt ? 'Magic Links Encriptados' : 'Encrypted Magic Links'}
                    </a>
                    <a href="#faq" onClick={() => setActiveMenu(null)} className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]">
                      {pt ? 'Perguntas Frequentes' : 'FAQ'}
                    </a>
                  </div>
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#372580]">
                      {pt ? 'Planos & Suporte' : 'Pricing & Support'}
                    </div>
                    <a href="#products" onClick={() => setActiveMenu(null)} className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]">
                      $29 USD / €25 EUR
                    </a>
                    <a href="#contact" onClick={() => setActiveMenu(null)} className="block text-sm text-[#4A4660] hover:text-[#6D4AFF]">
                      WhatsApp &amp; Telegram
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-span-4 rounded-2xl bg-gradient-to-br from-[#261C54] to-[#1B1340] text-white p-6 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C4B5FD]">
                    GilByte Suite
                  </span>
                  <h3 className="font-proton-serif text-2xl leading-snug text-white">
                    {pt
                      ? 'Software que protege os seus dados e o seu tempo.'
                      : 'Software that protects your data and your time.'}
                  </h3>
                </div>
                <a
                  href="#products"
                  onClick={() => setActiveMenu(null)}
                  className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#372580] text-xs font-semibold hover:bg-[#F7F5FF] transition"
                >
                  {pt ? 'Começar 14 dias grátis' : 'Start 14-day free trial'}
                </a>
              </div>
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="lg:hidden border-t border-[#EAE6F5] bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-[#1B1340]">
            <a href="#products" onClick={() => setMobileOpen(false)} className="py-1">
              {pt ? 'Produtos' : 'Products'}
            </a>
            <a href="#features" onClick={() => setMobileOpen(false)} className="py-1">
              {pt ? 'Funcionalidades' : 'Features'}
            </a>
            <a href="#faq" onClick={() => setMobileOpen(false)} className="py-1">
              FAQ
            </a>
            <button
              type="button"
              onClick={() => setLang(pt ? 'en' : 'pt')}
              className="text-left py-1 text-[#6D4AFF] font-semibold"
            >
              {pt ? 'Switch to English' : 'Mudar para Português'}
            </button>
            <a
              href="https://bookgrid-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#6D4AFF] text-white text-center text-xs font-semibold"
            >
              {pt ? 'Testar BookGrid' : 'Get BookGrid'}
            </a>
          </div>
        )}
      </header>

      <main>
        {/* 1. CENTERED PROTON HERO + DARK SUITE SHOWCASE CARD */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F5FF] via-[#F7F5FF] to-white pt-14 pb-16 md:pt-20 md:pb-24">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[820px] h-[360px] rounded-full opacity-25 blur-3xl"
            style={{ background: 'radial-gradient(circle, #6D4AFF 0%, transparent 70%)' }}
          />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 enter-subtle">
            <h1 className="font-proton-serif text-[40px] sm:text-[54px] md:text-[60px] text-[#372580] leading-[1.06]">
              {pt
                ? 'Software prático que protege o seu tempo e os seus clientes'
                : 'Practical software that protects your time and your clients'}
            </h1>

            <p className="text-base sm:text-lg text-[#4A4660] max-w-2xl mx-auto leading-relaxed">
              {pt
                ? 'Agendamentos sem comissões, recolha encriptada de documentos e assistente de IA nos seus PDFs — tudo numa suíte enxuta em USD e EUR.'
                : 'Commission-free scheduling, encrypted document intake, and AI trained on your PDFs — one lean suite priced in USD and EUR.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <a
                href="#products"
                className="tactile-btn inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#6D4AFF] text-white text-sm sm:text-base font-semibold hover:bg-[#4A2DC5] shadow-sm"
              >
                {pt ? 'Ver os 3 Produtos' : 'Explore all 3 products'}
              </a>
              <a
                href="https://wa.me/2389172385"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold text-[#1B1340] hover:text-[#6D4AFF] transition"
              >
                {pt ? 'Falar para Empresas' : 'GilByte for Business'}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-[#5C5873]">
              {pt ? 'Teste grátis de 14 dias — ' : '14-day free trial — '}
              <strong className="text-[#1B1340]">$29 USD / €25 EUR</strong>
              {pt ? ' por mês, preço fixo sem taxa por utilizador' : ' flat monthly rate'}
            </p>
          </div>

          {/* DARK PROTON-STYLE SUITE BANNER BELOW HERO */}
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 mt-12 enter-subtle-delay">
            <div className="rounded-3xl bg-gradient-to-br from-[#130C2E] via-[#1B1340] to-[#2E1E6B] text-white p-6 sm:p-10 shadow-2xl border border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#6D4AFF] text-[11px] font-bold uppercase tracking-wider">
                    GilByte Suite
                  </span>
                  <span className="text-xs text-white/75">
                    {pt ? '3 Plataformas Operacionais em Produção' : '3 Production Platforms Live'}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-300 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  {pt ? 'Privado por concepção' : 'Privacy by default'}
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4 pt-6">
                {SUITE_APPS.map(({ name, descPt, descEn, href, price, Mark }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-card rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 p-5 flex flex-col justify-between gap-4 transition"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="p-2 rounded-xl bg-white">
                        <Mark className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#C4B5FD]">{price}/mês</span>
                    </div>
                    <div>
                      <div className="text-base font-bold text-white flex items-center gap-1.5">
                        {name} <ExternalLink className="w-3.5 h-3.5 text-white/60" />
                      </div>
                      <p className="text-xs text-white/75 mt-1">{pt ? descPt : descEn}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROTON-STYLE 2-COLUMN VALUE SECTION */}
        <section className="bg-white py-20 border-t border-[#EAE6F5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#EDE8FF] to-[#D8CEFF] p-6 pt-8">
                <div className="rounded-2xl bg-white border border-[#EAE6F5] shadow-lg p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1B1340]">Atlantic Barber Studio</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                      #BG-C856B5
                    </span>
                  </div>
                  <div className="text-xs text-[#5C5873]">
                    Skin Fade + Beard Trim • 60 min • <strong className="text-[#1B1340]">$55.00 USD</strong>
                  </div>
                  <div className="pt-2 border-t border-[#EAE6F5] flex items-center justify-between text-[11px] text-[#6D4AFF] font-semibold">
                    <span>WhatsApp Ticket Ready</span>
                    <span>.ICS Calendar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <h2 className="font-proton-serif text-3xl sm:text-4xl text-[#372580] leading-tight">
                {pt
                  ? 'Porque a agenda e os documentos dos seus clientes são negócio seu'
                  : 'Because your client schedule and files are your business'}
              </h2>
              <p className="text-sm sm:text-base text-[#4A4660] leading-relaxed">
                {pt
                  ? 'Outras ferramentas cobram taxas por cada barbeiro, obrigam o seu cliente a criar conta ou deixam passaportes perdidos no WhatsApp. Na GilByte, cada empresa tem o seu espaço isolado, preço fixo transparente e zero fricção para o cliente final.'
                  : 'Other tools charge per seat, force your clients to create accounts, or leave sensitive PDFs scattered in chats. With GilByte, every business gets isolated infrastructure, flat pricing, and zero client friction.'}
              </p>
              <a
                href="https://bookgrid-iota.vercel.app/atlantic-barber-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6D4AFF] text-white text-sm font-semibold hover:bg-[#4A2DC5]"
              >
                {pt ? 'Ver demonstração ao vivo' : 'Try live demo'}
              </a>
            </div>
          </div>
        </section>

        {/* 3. "YOUR FAVORITE FEATURES, PLUS PRIVACY" — 3 FEATURE CARDS */}
        <section id="features" className="bg-white pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <h2 className="font-proton-serif text-3xl sm:text-4xl text-[#372580]">
              {pt
                ? 'As funcionalidades certas, com privacidade de base'
                : 'Your favorite features, plus privacy'}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-3xl bg-[#F7F5FF] border border-[#EAE6F5] p-6 space-y-5">
                <div className="rounded-2xl bg-white border border-[#EAE6F5] p-4 shadow-sm space-y-2.5">
                  <div className="flex gap-1.5 text-[11px] font-semibold">
                    <span className="px-2.5 py-1 rounded-full bg-[#6D4AFF] text-white">Hoje</span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F7F5FF] text-[#5C5873]">Lista de Espera</span>
                  </div>
                  <div className="rounded-xl bg-[#F7F5FF] p-3 text-xs text-[#1B1340] flex justify-between">
                    <span className="font-semibold">Corte + Barba (60m)</span>
                    <span className="text-[#6D4AFF] font-bold">11:00</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#372580]">
                    {pt ? 'Agenda sem conflitos' : 'Conflict-free scheduling'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4660] leading-relaxed">
                    {pt
                      ? 'Carrinho multi-serviços com cálculo contínuo e lista de espera automática quando há cancelamentos.'
                      : 'Multi-service cart with continuous duration math and automatic waitlist recovery.'}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#F7F5FF] border border-[#EAE6F5] p-6 space-y-5">
                <div className="rounded-2xl bg-white border border-[#EAE6F5] p-4 shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1B1340]">Passaporte / BI</span>
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-semibold text-[11px]">
                      AI Verified
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#F7F5FF] p-3 text-xs text-[#5C5873] flex justify-between items-center">
                    <span>ZIP Dossier + PDF</span>
                    <span className="text-[#6D4AFF] font-bold">1-Click</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#372580]">
                    {pt ? 'Cofre de documentos com IA' : 'AI-verified document vault'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4660] leading-relaxed">
                    {pt
                      ? 'O cliente envia pelo Magic Link sem senha, a IA valida nitidez na hora e exporta tudo em ZIP.'
                      : 'Clients upload via passwordless Magic Link, AI checks legibility, and you export ZIP in 1 click.'}
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#F7F5FF] border border-[#EAE6F5] p-6 space-y-5">
                <div className="rounded-2xl bg-white border border-[#EAE6F5] p-4 shadow-sm space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#1B1340]">SmartBizChat 24/7</span>
                    <span className="px-2 py-0.5 rounded-md bg-[#EFEAFF] text-[#6D4AFF] font-semibold text-[11px]">
                      PT / EN
                    </span>
                  </div>
                  <div className="rounded-xl bg-[#F7F5FF] p-3 text-xs text-[#1B1340]">
                    &ldquo;{pt ? 'Quais os preços em USD e EUR?' : 'What are your USD & EUR plans?'}&rdquo;
                  </div>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#372580]">
                    {pt ? 'Atendimento 24/7 nos seus PDFs' : '24/7 AI on your own PDFs'}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4660] leading-relaxed">
                    {pt
                      ? 'Widget leve treinado exclusivamente nos seus catálogos e regras, sem inventar preços.'
                      : 'Lightweight widget trained strictly on your catalogs and rules, never hallucinating prices.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FULL 3-PRODUCT PRICING & LAUNCH CARDS */}
        <section id="products" className="bg-[#F7F5FF] py-20 border-y border-[#EAE6F5]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6D4AFF]">
                {pt ? 'Portfólio Oficial' : 'Official Suite'}
              </span>
              <h2 className="font-proton-serif text-3xl sm:text-4xl text-[#372580]">
                {pt ? 'Escolha o produto ideal para o seu negócio' : 'Choose the right tool for your business'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {/* BookGrid (Highlighted Proton Recommended Card) */}
              <div className="rounded-2xl bg-white border-2 border-[#6D4AFF] overflow-hidden flex flex-col justify-between shadow-sm">
                <div className="bg-[#6D4AFF] px-4 py-2 text-center text-white text-xs font-bold uppercase tracking-widest">
                  {pt ? 'Mais Popular' : 'Recommended'}
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-[#F7F5FF] border border-[#EAE6F5]">
                          <BookGridMark className="w-6 h-6" />
                        </div>
                        <h3 className="font-proton-serif text-2xl text-[#372580]">BookGrid</h3>
                      </div>
                      <span className="rounded-md bg-[#E2DBFF] text-[#6D4AFF] px-2.5 py-1 text-[11px] font-bold uppercase">
                        14d Free
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-[#1B1340]">
                      $29 USD <span className="text-sm font-normal text-[#5C5873]">/ 25 € mês</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#4A4660]">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        Até 5 profissionais incluídos no preço fixo
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        Vitrine pública sem login + carrinho multi-serviços
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        Lista de espera e importador de agenda IA
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <a
                      href="https://bookgrid-iota.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-3 rounded-full bg-[#6D4AFF] text-white text-sm font-semibold hover:bg-[#4A2DC5] transition"
                    >
                      Abrir BookGrid
                    </a>
                    <a
                      href="https://bookgrid-iota.vercel.app/atlantic-barber-studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full py-2.5 rounded-full text-xs font-semibold text-[#6D4AFF] hover:underline"
                    >
                      Ver Vitrine Demo →
                    </a>
                  </div>
                </div>
              </div>

              {/* IntakeDock */}
              <div className="rounded-2xl bg-white border border-[#EAE6F5] p-7 flex flex-col justify-between space-y-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#F7F5FF] border border-[#EAE6F5]">
                        <IntakeDockMark className="w-6 h-6" />
                      </div>
                      <h3 className="font-proton-serif text-2xl text-[#372580]">IntakeDock</h3>
                    </div>
                    <span className="rounded-md bg-[#E2DBFF] text-[#6D4AFF] px-2.5 py-1 text-[11px] font-bold uppercase">
                      14d Free
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-[#1B1340]">
                    $29 USD <span className="text-sm font-normal text-[#5C5873]">/ 25 € mês</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A4660]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Magic links encriptados sem palavra-passe
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Pré-validação de nitidez e validade por IA
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Cofre privado e exportação ZIP/PDF em 1 clique
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://intakedock-liart.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-full bg-transparent text-[#6D4AFF] text-sm font-semibold shadow-[inset_0_0_0_2px_#6D4AFF] hover:bg-[#4A2DC5] hover:text-white transition"
                  >
                    Abrir IntakeDock
                  </a>
                  <a
                    href="https://intakedock-liart.vercel.app/pricing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 rounded-full text-xs font-semibold text-[#6D4AFF] hover:underline"
                  >
                    Ver Planos ($29 / $59) →
                  </a>
                </div>
              </div>

              {/* SmartBizChat */}
              <div className="rounded-2xl bg-white border border-[#EAE6F5] p-7 flex flex-col justify-between space-y-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#F7F5FF] border border-[#EAE6F5]">
                        <SmartBizChatMark className="w-6 h-6" />
                      </div>
                      <h3 className="font-proton-serif text-2xl text-[#372580]">SmartBizChat</h3>
                    </div>
                    <span className="rounded-md bg-[#E2DBFF] text-[#6D4AFF] px-2.5 py-1 text-[11px] font-bold uppercase">
                      14d Free
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-[#1B1340]">
                    $29 USD <span className="text-sm font-normal text-[#5C5873]">/ 25 € mês</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#4A4660]">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Respostas baseadas apenas nos seus PDFs e FAQs
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Atendimento bilíngue automático (PT / EN)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      Widget leve incorporável em qualquer site
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <a
                    href="https://smart-biz-chat.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-3 rounded-full bg-transparent text-[#6D4AFF] text-sm font-semibold shadow-[inset_0_0_0_2px_#6D4AFF] hover:bg-[#4A2DC5] hover:text-white transition"
                  >
                    Abrir SmartBizChat
                  </a>
                  <a
                    href="https://smart-biz-chat.vercel.app/#precos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center w-full py-2.5 rounded-full text-xs font-semibold text-[#6D4AFF] hover:underline"
                  >
                    Ver Demo &amp; Planos →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROTON-STYLE DARK "FOR BUSINESS" BLOCK */}
        <section id="business" className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-[#1B1340] text-white p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5">
                <div className="rounded-2xl bg-[#261C54] border border-white/10 p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>GilByte Cloud Security</span>
                    <Lock className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div className="rounded-xl bg-[#1B1340] p-4 border border-white/10 space-y-2">
                    <div className="text-xs font-semibold text-white">Row-Level Security (RLS)</div>
                    <div className="text-[11px] text-white/70">
                      Cada tenant com isolamento criptográfico e pagamentos internacionais em USD/EUR.
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C4B5FD]">
                  <Sparkles className="w-4 h-4" />
                  GilByte for Business
                </span>
                <h2 className="font-proton-serif text-3xl sm:text-4xl text-white">
                  {pt ? 'Proteja e escale o seu negócio' : 'Secure and scale your business'}
                </h2>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                  {pt
                    ? 'Construído para barbearias, clínicas, escritórios de contabilidade, advocacia e empresas de serviços na Europa, América do Norte e Cabo Verde.'
                    : 'Built for barbershops, clinics, accounting firms, law practices, and service teams across Europe, North America, and Cabo Verde.'}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/2389172385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactile-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38BDF8] text-[#1B1340] text-sm font-bold hover:bg-[#7DD3FC] transition"
                  >
                    {pt ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
                  </a>
                  <span className="text-xs text-white/70 inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                    USD ($) &amp; EUR (€)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PROTON-STYLE 2-COLUMN FAQ ACCORDION */}
        <section id="faq" className="bg-white pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
            <h2 className="font-proton-serif text-3xl sm:text-4xl text-[#372580]">
              {pt ? 'Perguntas frequentes' : 'Frequently asked questions'}
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-2">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="border-b border-[#EAE6F5] py-4">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#372580]">
                        {item.q}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full inline-flex items-center justify-center shrink-0 transition ${
                          isOpen
                            ? 'bg-[#6D4AFF] text-white'
                            : 'bg-[#F7F5FF] text-[#6D4AFF]'
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-sm text-[#4A4660] leading-relaxed">{item.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 7. PROTON-STYLE MULTI-COLUMN FOOTER */}
      <footer id="contact" className="bg-[#F7F5FF] border-t border-[#EAE6F5] pt-16 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1 space-y-3">
              <div className="flex items-center gap-2">
                <GilbyteMark className="w-6 h-6" />
                <span className="text-base font-bold text-[#372580]">GilByte</span>
              </div>
              <p className="text-xs text-[#5C5873]">
                {pt ? 'Privado por concepção' : 'Privacy by default'}
              </p>
              <p className="text-xs text-[#5C5873]">GilByte Solutions</p>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="font-bold text-[#372580]">{pt ? 'Produtos' : 'Products'}</div>
              <a href="https://bookgrid-iota.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                BookGrid
              </a>
              <a href="https://intakedock-liart.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                IntakeDock
              </a>
              <a href="https://smart-biz-chat.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                SmartBizChat
              </a>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="font-bold text-[#372580]">{pt ? 'Demonstrações' : 'Demos'}</div>
              <a href="https://bookgrid-iota.vercel.app/atlantic-barber-studio" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                Atlantic Barber Studio
              </a>
              <a href="https://intakedock-liart.vercel.app/pricing" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                IntakeDock Pricing
              </a>
              <a href="https://smart-biz-chat.vercel.app/#precos" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                SmartBizChat Demo
              </a>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="font-bold text-[#372580]">{pt ? 'Empresa' : 'Company'}</div>
              <a href="#features" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                {pt ? 'Funcionalidades' : 'Features'}
              </a>
              <a href="#business" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                {pt ? 'Para Empresas' : 'For Business'}
              </a>
              <a href="https://linkedin.com/company/gilbyte-solutions" target="_blank" rel="noopener noreferrer" className="block text-[#4A4660] hover:text-[#6D4AFF]">
                LinkedIn
              </a>
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="font-bold text-[#372580]">{pt ? 'Contacto' : 'Connect'}</div>
              <a href="mailto:gilbytesolutions@hotmail.com" className="inline-flex items-center gap-1.5 text-[#4A4660] hover:text-[#6D4AFF]">
                <Mail className="w-3.5 h-3.5" />
                gilbytesolutions@hotmail.com
              </a>
              <a href="https://wa.me/2389172385" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#4A4660] hover:text-[#6D4AFF]">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: +238 917 2385
              </a>
              <a href="https://t.me/+2389172385" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#4A4660] hover:text-[#6D4AFF]">
                <Send className="w-3.5 h-3.5" />
                Telegram
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-[#EAE6F5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C5873]">
            <span>© {new Date().getFullYear()} GilByte Solutions • USD ($) &amp; EUR (€)</span>
            <button
              type="button"
              onClick={() => setLang(pt ? 'en' : 'pt')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#6D4AFF]/40 text-[#372580] font-semibold hover:bg-white transition"
            >
              <Globe className="w-3.5 h-3.5 text-[#6D4AFF]" />
              {pt ? 'Português' : 'English'}
            </button>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
}
