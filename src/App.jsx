import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  Check,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShieldCheck,
  X,
} from 'lucide-react';
import ChatWidget from './components/ChatWidget';

const GilbyteMark = ({ className = 'w-8 h-8' }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M50 15C31.2 15 15 31.2 15 50C15 68.8 31.2 85 50 85C65.3 85 78.2 74.8 82.5 61H50V41H85V50C85 75.8 69.3 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0C68.9 0 85.5 10.6 93.9 26.2L79.6 34.5C74 23 62.8 15 50 15Z"
      fill="#0F172A"
    />
    <rect x="54" y="24" width="16" height="16" rx="3" fill="#0D9488" />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2.5"
        >
          <GilbyteMark className="w-8 h-8" />
          <span className="text-lg font-bold tracking-tight text-[#0F172A]">
            GilByte Solutions
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#products" className="hover:text-[#0F172A] transition-colors">
            Produtos
          </a>
          <a href="#about" className="hover:text-[#0F172A] transition-colors">
            Sobre
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
          >
            BookGrid <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Contactar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
          <a href="#products" onClick={() => setMobileOpen(false)} className="py-1">
            Produtos
          </a>
          <a href="#about" onClick={() => setMobileOpen(false)} className="py-1">
            Sobre
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1 text-teal-700 font-semibold"
          >
            BookGrid
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="px-4 py-2.5 rounded-lg bg-[#0F172A] text-white text-center text-xs font-semibold"
          >
            Contactar
          </a>
        </div>
      )}
    </header>
  );
};

const Hero = () => (
  <section className="bg-white border-b border-slate-200 py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
          GilByte Solutions • Software &amp; Micro-SaaS
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
          Software prático para negócios de serviços.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
          Desenvolvemos plataformas SaaS enxutas e confiáveis que automatizam agendamentos,
          listas de espera e atendimento ao cliente para empresas na Europa, América do Norte e Cabo Verde.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
          >
            Conhecer o BookGrid
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-200 bg-white text-sm font-semibold text-[#0F172A] hover:bg-slate-50 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            WhatsApp: +238 917 2385
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Ecossistema em Produção
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Operacional
            </span>
          </div>

          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white border border-slate-200 p-4 hover:border-slate-300 transition"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-[#0F172A]">
                  <CalendarCheck className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">BookGrid</div>
                  <div className="text-xs text-slate-500">Agenda multi-serviços para equipas</div>
                </div>
              </div>
              <span className="text-xs font-bold text-teal-700">$29 USD / €25</span>
            </div>
          </a>

          <a
            href="https://smart-biz-chat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-white border border-slate-200 p-4 hover:border-slate-300 transition"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-100 text-[#0F172A]">
                  <Bot className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">SmartBizChat</div>
                  <div className="text-xs text-slate-500">Assistente de IA com base documental</div>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-600">24/7</span>
            </div>
          </a>

          <div className="pt-1 flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              Pagamentos globais USD &amp; EUR
            </span>
            <span>Suporte direto</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section id="products" className="bg-[#F8FAFC] py-20 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
          Portfólio Oficial
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#0F172A]">
          Produtos construídos para gerar resultado
        </h2>
        <p className="text-sm sm:text-base text-slate-600">
          Sem complexidade desnecessária nem cobranças ocultas por utilizador.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                Em Produção
              </span>
              <span className="text-sm font-bold text-[#0F172A]">$29 USD / 25 € mês</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 text-[#0F172A]">
                <CalendarCheck className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">BookGrid</h3>
                <p className="text-xs text-slate-500">Barbearias, salões, clínicas e estúdios</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Sistema de agendamentos com preço fixo para até 5 profissionais incluídos, carrinho
              multi-serviços, proteção contra horários duplicados e lista de espera automática.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                Zero taxa extra por membro da equipa (até 5 incluídos)
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                Página pública de marcação sem login para o cliente final
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                14 dias de teste grátis sem cartão de crédito
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://bookgrid-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Abrir BookGrid
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://bookgrid-iota.vercel.app/atlantic-barber-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#0F172A] hover:bg-slate-50 transition"
            >
              Ver Vitrine Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between space-y-6 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase bg-slate-100 text-slate-700 border border-slate-200">
                Assistente IA
              </span>
              <span className="text-xs font-semibold text-slate-500">Resposta em segundos</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-100 text-[#0F172A]">
                <Bot className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F172A]">SmartBizChat</h3>
                <p className="text-xs text-slate-500">Imobiliárias, turismo, comércio e suporte</p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Assistente virtual multi-empresa treinado nos documentos, catálogos e procedimentos
              internos da sua organização para atender clientes 24 horas por dia.
            </p>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                Respostas baseadas exclusivamente nos seus PDFs e FAQs
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                Widget leve incorporável em qualquer website
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 shrink-0" />
                Painel de gestão isolado por empresa
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://smart-biz-chat.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition"
            >
              Abrir SmartBizChat
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:gilbytesolutions@hotmail.com?subject=Demonstra%C3%A7%C3%A3o%20SmartBizChat"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#0F172A] hover:bg-slate-50 transition"
            >
              Pedir Demonstração
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="bg-white py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-8 md:p-12 max-w-4xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Sobre a Empresa
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
          Engenharia de software direta ao ponto.
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          A <strong className="text-[#0F172A]">GilByte Solutions</strong> desenvolve aplicações web
          multi-tenant com foco em segurança, simplicidade operacional e pagamentos internacionais
          transparentes em Dólar e Euro. Nosso objetivo é entregar ferramentas que funcionam no dia
          a dia sem exigir equipas técnicas dedicadas.
        </p>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white py-14">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="text-xl font-bold text-[#0F172A]">Fale com a GilByte Solutions</h2>
          <p className="text-sm text-slate-600">
            Atendimento direto por E-mail, WhatsApp ou Telegram.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:gilbytesolutions@hotmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition"
          >
            <Mail className="w-4 h-4" />
            gilbytesolutions@hotmail.com
          </a>
          <a
            href="https://wa.me/2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#0F172A] hover:bg-slate-50 transition"
          >
            <MessageCircle className="w-4 h-4 text-teal-600" />
            WhatsApp
          </a>
          <a
            href="https://t.me/+2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-[#0F172A] hover:bg-slate-50 transition"
          >
            <Send className="w-4 h-4 text-slate-600" />
            Telegram
          </a>
        </div>
      </div>

      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <GilbyteMark className="w-5 h-5" />
          <span className="font-semibold text-[#0F172A]">GilByte Solutions</span>
          <span>• © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://bookgrid-iota.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F172A]">
            BookGrid
          </a>
          <a href="https://smart-biz-chat.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F172A]">
            SmartBizChat
          </a>
          <a href="https://linkedin.com/company/gilbyte-solutions" target="_blank" rel="noopener noreferrer" className="hover:text-[#0F172A]">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
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
