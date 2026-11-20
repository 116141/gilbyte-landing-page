import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkles,
  Users,
  X,
  Zap,
} from 'lucide-react';
import ChatWidget from './components/ChatWidget';

const GilbyteLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M50 15C31.2 15 15 31.2 15 50C15 68.8 31.2 85 50 85C65.3 85 78.2 74.8 82.5 61H50V41H85V50C85 75.8 69.3 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0C68.9 0 85.5 10.6 93.9 26.2L79.6 34.5C74 23 62.8 15 50 15Z"
      fill="currentColor"
    />
    <rect x="54" y="24" width="16" height="16" rx="2" className="fill-brand-light" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 bg-background/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <GilbyteLogo className="text-white w-9 h-9 group-hover:scale-105 transition-transform" />
          <span className="text-xl md:text-2xl font-heading font-bold text-white tracking-tight">
            GilByte<span className="text-brand-light">Solutions</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Produtos
          </a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sobre Nós
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-light hover:text-white transition-colors inline-flex items-center gap-1"
          >
            BookGrid <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a href="#contact" className="btn-primary text-sm bg-brand hover:bg-brand-hover">
            Contactar
          </a>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 glass-panel border-t border-white/10 flex flex-col gap-4">
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white py-1">
            Produtos
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white py-1">
            Sobre Nós
          </a>
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-brand-light py-1"
          >
            BookGrid
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-sm bg-brand hover:bg-brand-hover text-center py-3 mt-1"
          >
            Contactar
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[760px] bg-brand/20 rounded-full blur-[120px] opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-start gap-7"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-brand/30 text-brand-light text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Global SaaS &amp; AI Engineering
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-white">
            Byte a byte, <br />
            <span className="text-gradient">construindo o futuro.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Criamos produtos SaaS e soluções de Inteligência Artificial que automatizam agendamentos,
            atendimento e vendas para empresas na Europa, América do Norte e Cabo Verde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://bookgrid-iota.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex justify-center items-center gap-2 group"
            >
              Testar BookGrid Grátis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/2389172385"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex justify-center items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Direto
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative"
        >
          <div className="glass-card rounded-3xl border border-white/10 p-6 bg-background/90 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-light">
                  Ecossistema GilByte
                </span>
                <h2 className="text-lg font-bold text-white">Produtos em Produção</h2>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Online 24/7
              </span>
            </div>

            <div className="space-y-3">
              <a
                href="https://bookgrid-iota.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-brand/20 text-brand-light">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">BookGrid</div>
                      <div className="text-xs text-gray-400">
                        Agendamento multi-serviços &amp; Lista de Espera
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-brand-light">$29 USD / €25</span>
                </div>
              </a>

              <a
                href="https://smart-biz-chat.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] p-4 transition"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-accent/20 text-accent-light">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">SmartBizChat</div>
                      <div className="text-xs text-gray-400">
                        Assistente de IA treinado nos seus documentos
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300">&lt; 3s resposta</span>
                </div>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-light" />
                Pagamentos Globais USD &amp; EUR
              </span>
              <span>14 dias grátis no BookGrid</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/25 text-brand-light text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Portfólio Oficial
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Nossas Plataformas SaaS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Ferramentas simples, seguras e desenhadas para resolver gargalos reais de pequenas e médias empresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* BookGrid Card */}
          <div className="glass-card rounded-3xl border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  Novo Lançamento • Produção
                </span>
                <span className="text-sm font-bold text-white">$29 USD / €25 EUR</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand/20 text-brand-light">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BookGrid</h3>
                  <p className="text-xs text-gray-400">Para barbearias, salões, clínicas e estúdios</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Agenda online com preço fixo para até 5 profissionais — zero taxa por cadeira. Carrinho multi-serviços,
                proteção contra agendamento duplo, lista de espera automática e importador de agenda por IA.
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  Até 5 membros na equipa incluídos sem taxa extra
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  Vitrine pública instantânea (sem o cliente precisar criar conta)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  14 dias de teste grátis sem cartão de crédito
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://bookgrid-iota.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-flex items-center gap-2"
              >
                Criar Conta Grátis
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://bookgrid-iota.vercel.app/atlantic-barber-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm inline-flex items-center gap-2"
              >
                Ver Vitrine Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* SmartBizChat Card */}
          <div className="glass-card rounded-3xl border border-white/10 p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent-light border border-accent/30">
                  Atendimento com IA
                </span>
                <span className="text-sm font-semibold text-gray-300">24/7 Automático</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-accent/20 text-accent-light">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SmartBizChat</h3>
                  <p className="text-xs text-gray-400">Para imobiliárias, e-commerce e serviços</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                Mais do que um chatbot: um assistente treinado exclusivamente nos documentos, catálogos e regras do
                seu negócio para responder clientes em menos de 3 segundos e qualificar leads.
              </p>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-light shrink-0" />
                  Respostas baseadas nos seus PDFs, catálogos e FAQs
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-light shrink-0" />
                  Painel multi-empresa isolado com widget incorporável
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-light shrink-0" />
                  Disponível 24 horas por dia no seu site
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://smart-biz-chat.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-flex items-center gap-2"
              >
                Abrir SmartBizChat
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="mailto:gilbytesolutions@hotmail.com?subject=Demonstra%C3%A7%C3%A3o%20SmartBizChat"
                className="btn-secondary text-sm inline-flex items-center gap-2"
              >
                Solicitar Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-10 lg:p-16 relative overflow-hidden">
          <div className="max-w-3xl space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Sobre a <span className="text-brand-light">GilByte Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Na <span className="text-white font-medium">GilByte Solutions</span>, desenvolvemos software
              enxuto e seguro com foco em retorno imediato para empresas. Combinamos engenharia moderna,
              pagamentos globais e Inteligência Artificial prática para que negócios locais e internacionais
              automatizem sua operação sem complexidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="border-t border-white/10 bg-background/60 pt-16 pb-10 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pronto para automatizar o seu negócio?</h2>
        <p className="text-gray-400 max-w-xl mb-8 text-base md:text-lg">
          Fale diretamente com a equipa da GilByte Solutions por E-mail, WhatsApp ou Telegram.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:gilbytesolutions@hotmail.com"
            className="btn-primary inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <Mail className="w-4 h-4" />
            gilbytesolutions@hotmail.com
          </a>
          <a
            href="https://wa.me/2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp: +238 917 2385
          </a>
          <a
            href="https://t.me/+2389172385"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 text-sm px-6 py-3"
          >
            <Send className="w-4 h-4" />
            Telegram
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <GilbyteLogo className="w-6 h-6 text-brand" />
          <span className="font-heading font-bold text-base text-white">
            GilByte<span className="text-gray-400">Solutions</span>
          </span>
        </div>

        <p>© {new Date().getFullYear()} GilByte Solutions. Todos os direitos reservados.</p>

        <div className="flex items-center gap-4">
          <a
            href="https://bookgrid-iota.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            BookGrid
          </a>
          <a
            href="https://smart-biz-chat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SmartBizChat
          </a>
          <a
            href="https://linkedin.com/company/gilbyte-solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductsSection />
        <About />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
