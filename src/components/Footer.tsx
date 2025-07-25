import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Globe, Instagram, Facebook, Linkedin, Twitter, Youtube, ChevronRight, Send, ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer');
      if (footer) {
        const position = footer.getBoundingClientRect();
        if (position.top < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "#", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500" },
    { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
    { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
    { icon: Twitter, href: "#", color: "hover:bg-blue-400" },
    { icon: Youtube, href: "#", color: "hover:bg-red-600" },
  ];

  const services = [
    "Tarjetas NFC Inteligentes",
    "Herramientas Digitales Avanzadas",
    "Transformación Digital Empresarial",
    "Alianzas Estratégicas Tecnológicas",
    "Soporte Premium 24/7"
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
      
      // Reset después de 3 segundos
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  return (
    <footer 
      id="footer" 
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-primary text-white border-t border-white/10"
    >
      {/* Elementos decorativos premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Partículas animadas */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-40 left-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-amber-500/10 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }}></div>
        
        {/* Anillos decorativos */}
        <div className="absolute -top-20 -right-20 w-80 h-80 border border-blue-500/20 rounded-full"></div>
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] border border-amber-500/10 rounded-full"></div>
        
        {/* Brillos */}
        <div className="absolute top-10 left-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-40 h-1 bg-gradient-to-r from-transparent via-amber-400/40 to-transparent blur-sm"></div>
      </div>
      
      {/* Línea decorativa superior mejorada */}
      <div className="relative">
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Brand - Ultra Premium */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-amber-500/30 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-amber-500/10 rounded-full animate-pulse opacity-70"></div>
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full border-2 border-white/30 p-0.5 shadow-lg shadow-blue-500/20">
                  <img 
                    src="/logo.png" 
                    alt="AQI Logo" 
                    className="w-full h-full object-cover rounded-full" 
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-amber-200 animate-shimmer">
                  Advanced Quality Intelligence
                </h3>
                <p className="text-amber-300 text-sm sm:text-base font-medium tracking-wide">Tech Services</p>
              </div>
            </div>
            <div className="relative mb-6 sm:mb-8 max-w-lg backdrop-blur-md py-4 px-5 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-900/5">
              <div className="absolute -top-1 -bottom-1 left-0 w-1 bg-gradient-to-b from-blue-500 to-amber-500 rounded-full"></div>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Impulsamos la innovación y la transformación digital en Colombia con soluciones tecnológicas 
                de vanguardia, tarjetas NFC y herramientas digitales de última generación. Nuestro compromiso 
                es la excelencia y la calidad en cada proyecto.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm ${social.color} text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/10`}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Síguenos en ${social.icon.name}`}>
                    <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Servicios - Ultra Premium */}
          <div className="lg:col-span-3">
            <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-amber-200">Nuestros Servicios</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/30 blur-sm rounded-full"></span>
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {services.map((item, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm sm:text-base group-hover:translate-x-1 transform transition-transform duration-300"
                  >
                    <div className="relative">
                      <ChevronRight className="h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transition-transform" />
                      <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto - Ultra Premium */}
          <div className="lg:col-span-3">
            <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-amber-200">Contacto</span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></span>
              <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/30 blur-sm rounded-full"></span>
            </h4>
            <div className="space-y-4 sm:space-y-5">
              <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 backdrop-blur-sm hover:backdrop-blur-md">
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/20 flex items-center justify-center group-hover:from-blue-600/40 group-hover:to-blue-800/30 transition-colors">
                  <MapPin className="h-5 w-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <p className="font-medium text-white group-hover:text-blue-100 transition-colors">Ubicación</p>
                  <span className="text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors">Colombia</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 backdrop-blur-sm hover:backdrop-blur-md">
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/20 flex items-center justify-center group-hover:from-blue-600/40 group-hover:to-blue-800/30 transition-colors">
                  <Mail className="h-5 w-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <p className="font-medium text-white group-hover:text-blue-100 transition-colors">Email</p>
                  <span className="text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors">info@aqi.com</span>
                </div>
              </div>
              
              <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 border border-transparent hover:border-white/10 backdrop-blur-sm hover:backdrop-blur-md">
                <div className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-800/20 flex items-center justify-center group-hover:from-blue-600/40 group-hover:to-blue-800/30 transition-colors">
                  <Phone className="h-5 w-5 text-amber-300 group-hover:text-amber-200 transition-colors" />
                  <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <p className="font-medium text-white group-hover:text-blue-100 transition-colors">Teléfono</p>
                  <a 
                    href="https://wa.me/573001234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm sm:text-base group-hover:text-white/90 transition-colors hover:text-amber-300"
                  >
                    +57 (300) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 sm:mb-10" />
        
        {/* Newsletter - Ultra Premium */}
        <div className="lg:col-span-2">
          <h4 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-amber-200">Newsletter</span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full"></span>
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white/30 blur-sm rounded-full"></span>
          </h4>
          
          <div className="backdrop-blur-md p-4 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-lg shadow-blue-900/5">
            <p className="text-white/80 text-sm mb-4">
              Suscríbete para recibir noticias y actualizaciones sobre nuestros servicios y tecnologías.
            </p>
            
            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSubscribed}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-12 focus-visible:ring-blue-500"
                  required
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isSubmitting || isSubscribed}
                  className={cn(
                    "absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 hover:from-blue-500 hover:to-amber-400 transition-all duration-300",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : isSubscribed ? (
                    <div className="text-white animate-bounce">✓</div>
                  ) : (
                    <Send className="h-4 w-4 text-white" />
                  )}
                </Button>
              </div>
              
              {isSubscribed && (
                <p className="text-green-400 text-xs mt-2 animate-pulse">¡Gracias por suscribirte!</p>
              )}
            </form>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 sm:mb-10" />
        
        <div className={`flex flex-col sm:flex-row justify-between items-center gap-6 text-sm sm:text-base transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/70 text-center sm:text-left">
            © 2025 <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">AQI</span> - Advanced Quality Intelligence Tech Services. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-amber-400 underline-offset-4">
              Política de Privacidad
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-amber-400 underline-offset-4">
              Términos de Servicio
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors hover:underline decoration-amber-400 underline-offset-4">
              Mapa del Sitio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;