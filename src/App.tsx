/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Flame, 
  Beef, 
  Pizza, 
  Salad, 
  PieChart, 
  IceCream, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu as MenuIcon, 
  X,
  MessageCircle,
  Instagram,
  Facebook
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_CATEGORIES, MenuCategory } from "./types";

const IconMap: Record<string, any> = {
  Flame,
  Beef,
  Pizza,
  Salad,
  PieChart,
  IceCream,
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<MenuCategory | null>(MENU_CATEGORIES[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/551155481987";

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#2C3E50] font-sans selection:bg-red-100 selection:text-red-600">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              MC
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter leading-none text-red-600">MESTRE CÍCERO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-70">Rotisserie</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Início", "Menu", "História", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-sm font-semibold uppercase tracking-wider hover:text-red-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Pedir Agora
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-red-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {["Início", "Menu", "História", "Contato"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-2xl font-bold uppercase tracking-widest text-red-600"
              >
                {item}
              </button>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wider"
            >
              Pedir Agora
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000" 
            alt="Churrasco" 
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] mb-4">O prazer de comer bem</h2>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter">
              SABOR QUE VEM DA <span className="text-red-600">BRASA.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed font-light">
              Há mais de 35 anos servindo o melhor churrasco e massas artesanais da região. Agora no nosso salão ou no conforto da sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection("menu")}
                className="bg-red-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-red-700 transition-all flex items-center justify-center gap-2 group"
              >
                Ver Cardápio <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all flex items-center justify-center gap-2"
              >
                Fazer Pedido
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-white/20"></div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-2">Nosso Cardápio</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">ESCOLHA SEU FAVORITO</h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((category) => {
              const Icon = IconMap[category.icon];
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                    activeCategory?.title === category.title 
                      ? "bg-red-600 text-white shadow-lg scale-105" 
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  {category.title}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {activeCategory?.items.map((item, idx) => (
                <motion.div
                  key={`${activeCategory.title}-${item.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 border-b border-gray-100 hover:bg-red-50/30 transition-colors group rounded-xl"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold group-hover:text-red-600 transition-colors">{item.name}</h4>
                    {item.price && <span className="font-mono text-red-600 font-bold">{item.price}</span>}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description || "Preparado com ingredientes selecionados e o toque especial do Mestre."}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 italic mb-6">Consulte disponibilidade e taxas de entrega para sua região.</p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <MessageCircle size={24} />
              Pedir pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-24 bg-[#F9F9F9]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" 
                alt="Churrasqueiro" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <span className="block text-4xl font-black text-red-600">35+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-400">Anos de Tradição</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4">Nossa História</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8">O MESTRE POR TRÁS DA BRASA</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Há 35 anos teve início a história do seu fundador, churrasqueiro desde a época em que a carteirinha de churrasqueiro era imprescindível para ser considerado um profissional.
              </p>
              <p>
                A experiência adquirida após 18 anos de serviços prestados à churrascarias tradicionais da época, como Pilão e Costela de Ouro, o motivou a seguir sua carreira solo como churrasqueiro.
              </p>
              <p className="font-bold text-[#2C3E50]">
                Fundou, então, em 1988 o MESTRE CÍCERO ROTISSERIE, com o compromisso de levar o prazer de comer bem para todas as famílias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-red-600 font-bold uppercase tracking-[0.2em] mb-4">Contato</h2>
              <h3 className="text-4xl font-black tracking-tight mb-8">ESTAMOS PERTO DE VOCÊ</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Endereço</h4>
                    <p className="text-gray-500">Av. Sargento Geraldo Santana, 558<br />JD. Marajoara - São Paulo SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefones</h4>
                    <p className="text-gray-500">5548-1987 / 5681-8155</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-500">Terça a Domingo: 11h às 16h<br />Feriados: Consulte-nos</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[400px] md:h-auto shadow-xl border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.4348618536!2d-46.6896!3d-23.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce506060606061%3A0x6060606060606060!2sAv.%20Sargento%20Geraldo%20Santana%2C%20558%20-%20Jardim%20Marajoara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004674-000!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151619] text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              MC
            </div>
            <span className="text-lg font-black tracking-tighter text-white">MESTRE CÍCERO</span>
          </div>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Desde 1988 levando o melhor da gastronomia artesanal para sua mesa. Qualidade, tradição e o prazer de comer bem.
          </p>
          <div className="w-full h-px bg-white/10 mb-8"></div>
          <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
            © 2026 Mestre Cícero Rotisserie. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors group"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Falar com o Mestre
        </span>
      </motion.a>
    </div>
  );
}
