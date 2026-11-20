import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', text: 'Olá! Sou o assistente da Gilbyte Solutions. Como posso ajudar com o seu projeto de IA hoje?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    const BACKEND_URL = 'https://smartbizchat-api.onrender.com';

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setIsLoading(true);

        try {
            const response = await axios.post(`${BACKEND_URL}/chat`, {
                message: userMsg
            }, {
                headers: {
                    'X-Company-Slug': 'gilbyte'
                }
            });
            setMessages(prev => [...prev, { role: 'assistant', text: response.data.reply }]);
        } catch (error) {
            console.error('Erro no SmartBizChat:', error);
            setMessages(prev => [...prev, { role: 'assistant', text: 'Desculpe, tive um problema de conexão. Por favor, tente novamente em instantes.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[550px] glass-panel border border-white/10 shadow-glow flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl rounded-3xl"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/10 bg-brand/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="bg-brand/20 p-2 rounded-lg">
                                    <Bot className="w-5 h-5 text-brand-light" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">SmartBiz Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-5 space-y-4 custom-scrollbar"
                        >
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-brand' : 'bg-white/5 border border-white/10'}`}>
                                            {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-brand-light" />}
                                        </div>
                                        <div className={`p-4 rounded-2xl text-sm leading-relaxed overflow-hidden ${msg.role === 'user'
                                            ? 'bg-brand text-white rounded-tr-none whitespace-pre-wrap'
                                            : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                                            }`}>
                                            {msg.role === 'user' ? (
                                                msg.text
                                            ) : (
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        h1: ({ children }) => <h3 className="text-sm font-bold text-white mt-2 mb-1 first:mt-0">{children}</h3>,
                                                        h2: ({ children }) => <h3 className="text-sm font-bold text-white mt-2 mb-1 first:mt-0">{children}</h3>,
                                                        h3: ({ children }) => <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-light mt-2 mb-1 first:mt-0">{children}</h4>,
                                                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                        ul: ({ children }) => <ul className="list-disc pl-4 mb-2 space-y-1 last:mb-0">{children}</ul>,
                                                        ol: ({ children }) => <ol className="list-decimal pl-4 mb-2 space-y-1 last:mb-0">{children}</ol>,
                                                        li: ({ children }) => <li>{children}</li>,
                                                        strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                                                        a: ({ href, children }) => (
                                                            <a
                                                                href={href}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-brand-light underline hover:text-white break-all"
                                                            >
                                                                {children}
                                                            </a>
                                                        ),
                                                        table: ({ children }) => (
                                                            <div className="overflow-x-auto my-2">
                                                                <table className="w-full text-xs border-collapse border border-white/15">{children}</table>
                                                            </div>
                                                        ),
                                                        th: ({ children }) => <th className="border border-white/15 px-2 py-1 text-left bg-white/10 text-white font-semibold">{children}</th>,
                                                        td: ({ children }) => <td className="border border-white/15 px-2 py-1">{children}</td>,
                                                        blockquote: ({ children }) => <blockquote className="border-l-2 border-brand-light pl-3 my-2 text-gray-300 italic">{children}</blockquote>,
                                                    }}
                                                >
                                                    {msg.text}
                                                </ReactMarkdown>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex gap-3 max-w-[85%]">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10">
                                            <Bot className="w-4 h-4 text-brand-light" />
                                        </div>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 rounded-tl-none">
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-5 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Como podemos ajudar?"
                                    className="w-full bg-background/50 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand/50 transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand hover:bg-brand-hover disabled:opacity-50 disabled:hover:bg-brand text-white rounded-lg transition-all"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-[10px] text-gray-500 mt-3 text-center">
                                Desenvolvido por <span className="text-brand-light">Gilbyte Solutions</span>
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-brand rounded-full shadow-glow flex items-center justify-center text-white relative group border border-white/20"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageSquare className="w-6 h-6" />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-bounce"></span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
