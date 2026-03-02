import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Zap, Clock, ShieldCheck, Mail, ChevronRight, Menu } from 'lucide-react';

const GilbyteLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 15C31.2 15 15 31.2 15 50C15 68.8 31.2 85 50 85C65.3 85 78.2 74.8 82.5 61H50V41H85V50C85 75.8 69.3 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0C68.9 0 85.5 10.6 93.9 26.2L79.6 34.5C74 23 62.8 15 50 15Z" fill="currentColor" />
    <rect x="54" y="24" width="16" height="16" rx="2" className="fill-brand-light" />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <GilbyteLogo className="text-white w-10 h-10 group-hover:scale-105 transition-transform" />
          <span className="text-2xl font-heading font-bold text-white tracking-tight group-hover:text-gray-200 transition-colors">
            Gilbyte<span className="text-brand-light">Solutions</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sobre Nós</a>
          <a href="#product" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">SmartBizChat</a>
          <a href="#contact" className="btn-primary text-sm bg-brand hover:bg-brand-hover">Contactar</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 py-4 glass-panel border-t border-white/10 flex flex-col gap-4">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-400 hover:text-white transition-colors py-2">Sobre Nós</a>
          <a href="#product" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-gray-400 hover:text-white transition-colors py-2">SmartBizChat</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-sm bg-brand hover:bg-brand-hover text-center py-3 mt-2">Contactar</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/20 rounded-full blur-[120px] opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-brand/30 text-brand-light text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            Elevando Empresas em Cabo Verde
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-2">
            Byte a byte, <br />
            <span className="text-gradient">construindo o futuro.</span>
          </h1>

          <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
            Soluções de Inteligência Artificial para modernizar, automatizar e acelerar os seus negócios para o próximo nível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <a href="mailto:gilbytesolutions@hotmail.com" className="btn-primary flex justify-center items-center gap-2 group">
              Agendar Demonstração
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn-secondary flex justify-center items-center">
              Saber mais
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <div className="glass-card p-1 rounded-3xl border border-white/10 relative z-10 overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
            <div className="bg-background/90 rounded-[22px] overflow-hidden border border-white/5">
              {/* Mockup Top Bar */}
              <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 text-xs text-gray-500 font-medium">gilbytesolutions.com/demo</div>
              </div>
              {/* Mockup Body */}
              <div className="p-6 h-[400px] flex flex-col justify-end space-y-4 bg-gradient-to-b from-transparent to-brand/5">
                <div className="bg-brand/10 border border-brand/20 text-blue-200 p-4 rounded-xl max-w-[80%] rounded-tl-sm self-start text-sm">
                  Olá! Como posso ajudar a otimizar a sua empresa hoje?
                </div>
                <div className="bg-white/5 border border-white/10 text-gray-300 p-4 rounded-xl max-w-[80%] rounded-tr-sm self-end text-sm">
                  Gostaria de saber como integrar IA no meu serviço de apoio ao cliente.
                </div>
                <div className="bg-brand/10 border border-brand/20 text-blue-200 p-4 rounded-xl max-w-[80%] rounded-tl-sm self-start text-sm">
                  Ótimo! O SmartBizChat reduz o tempo de resposta em 80%. Posso mostrar-lhe uma demonstração com os dados da sua empresa.
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-xl border border-brand/30 z-20 flex items-center gap-4 bg-background/80"
          >
            <div className="bg-brand/20 p-3 rounded-full">
              <Zap className="text-brand-light w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-400">Tempo de Resposta</div>
              <div className="text-xl font-bold text-white">3 Segundos</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10"></div>

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              O Nosso Mundo <span className="text-brand-light">•</span> Sobre Nós
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
              Na <span className="text-white font-medium">Gilbyte Solutions</span>, não criamos apenas linhas de código. Desenvolvemos ferramentas práticas e inovadoras que resolvem problemas reais. O nosso foco é a excelência tecnológica combinada com resultados palpáveis para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const features = [
    { icon: <Zap className="w-5 h-5 text-yellow-400" />, title: "Respostas em 3 segundos", desc: "Velocidade que impressiona e converte." },
    { icon: <Clock className="w-5 h-5 text-blue-400" />, title: "Atendimento Automático 24/7", desc: "O seu negócio nunca fecha as portas." },
    { icon: <ShieldCheck className="w-5 h-5 text-green-400" />, title: "Treinado com os seus dados", desc: "Responde exatamente como a sua equipa." },
  ];

  return (
    <section id="product" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-sm font-medium mb-4">
            Produto Estrela
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SmartBizChat</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            O futuro do apoio ao cliente chegou. Um assistente virtual inteligente integrado diretamente nos seus canais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-brand/30"
              >
                <div className="bg-white/5 p-4 rounded-2xl group-hover:bg-brand/20 transition-colors border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-6">
              <a href="#product" className="text-brand-light hover:text-white flex items-center gap-2 font-medium group transition-colors">
                Ver demonstração completa
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="glass-card border-brand/20 p-2 overflow-hidden bg-gradient-to-br from-brand/5 to-transparent relative group">
              <div className="absolute inset-0 bg-brand/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="SmartBizChat Dashboard"
                className="rounded-xl w-full object-cover aspect-video opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-brand/80 backdrop-blur-md flex items-center justify-center shadow-2xl">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="border-t border-white/10 bg-background/50 pt-20 pb-10 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-brand/5 blur-[120px] -z-10 pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para modernizar?</h2>
        <p className="text-gray-400 max-w-xl mb-10 text-lg">
          Deixe a inteligência artificial trabalhar para si. Fale connosco para saber como a Gilbyte Solutions pode acelerar o seu crescimento.
        </p>
        <a
          href="mailto:gilbytesolutions@hotmail.com"
          className="btn-primary flex items-center gap-3 text-lg px-8 py-4 shadow-glow bg-gradient-to-r from-brand to-accent hover:from-brand-hover hover:to-brand-hover border border-white/10"
        >
          <Mail className="w-5 h-5" />
          Tem um projeto em mente? Fale connosco
        </a>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 pb-4 md:pb-0">
          <GilbyteLogo className="w-6 h-6 text-brand" />
          <span className="font-heading font-bold text-lg text-white">Gilbyte<span className="text-gray-500">Solutions</span></span>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Gilbyte Solutions. Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a href="https://linkedin.com/company/gilbyte-solutions" target="_blank" rel="noopener noreferrer" className="p-2 glass-card hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
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
        <About />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
