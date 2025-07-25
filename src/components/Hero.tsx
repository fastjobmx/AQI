import { 
  ArrowRight, 
  Zap, 
  Users, 
  Sparkles, 
  Star, 
  Shield,
  Diamond,
  Rocket,
  TrendingUp,
  Heart,
  Layers,
  Gem,
  CheckCircle,
  Trophy,
  MapPin,
  Phone,
  Mail,
  Clock,
  BadgeCheck,
  Cpu,
  Database,
  Cloud,
  Lock,
  Infinity,
  Lightbulb,
  BarChart,
  Settings,
  Wifi,
  Smartphone,
  ShoppingBag,
  Stethoscope,
  Gift,
  Percent,
  Camera,
  Code,
  Monitor,
  Palette,
  Search,
  ThumbsUp
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

// Componente de imagen optimizado para móviles
const HolographicLogo = ({ src, alt, className, onLoad }) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageSrc, setImageSrc] = useState(null);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.decoding = 'async';
    img.loading = 'eager';
    
    let progressInterval;
    const startProgress = () => {
      let progress = 0;
      progressInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 92) {
          clearInterval(progressInterval);
          progress = 92;
        }
        setLoadProgress(progress);
      }, 60);
    };
    
    const handleLoad = () => {
      if (progressInterval) clearInterval(progressInterval);
      setLoadProgress(100);
      setTimeout(() => {
        setImageStatus('loaded');
        setImageSrc(src);
        if (onLoad) onLoad();
      }, 300);
    };

    const handleError = () => {
      if (progressInterval) clearInterval(progressInterval);
      setImageStatus('error');
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    startProgress();
    img.src = src;

    if (img.complete) {
      handleLoad();
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad]);

  return (
    <div className={`relative ${className}`}>
      {/* Estado de carga */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          imageStatus === 'loaded' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-cyan-200/30 to-purple-200/20 rounded-full">
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/30 to-transparent rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28">
              <div className="absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border border-purple-400/40 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
            </div>
            
            <div className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-2xl animate-pulse">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8">
              <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-400 animate-bounce" />
            </div>
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8">
              <Star className="h-3 w-3 sm:h-5 sm:w-5 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 h-2 bg-white/10 rounded-full overflow-hidden border border-white/20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full transition-all duration-400"
            style={{ width: `${loadProgress}%` }}
          >
            <div className="absolute inset-0 bg-white/15 animate-pulse"></div>
          </div>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white/90 text-xs sm:text-sm font-bold bg-black/20 px-2 py-1 rounded-full">
            {Math.round(loadProgress)}%
          </div>
        </div>
      </div>
      
      {/* Imagen cargada */}
      {imageSrc && (
        <div className="relative">
          <img
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-contain transition-all duration-1000 ${
              imageStatus === 'loaded' 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-50 blur-xl'
            }`}
            onLoad={() => setImageStatus('loaded')}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/4 to-purple-500/4 rounded-full transition-opacity duration-1000 ${
            imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
      )}
      
      {/* Estado de error */}
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-cyan-50 to-purple-100 rounded-full flex items-center justify-center shadow-2xl border border-white/40">
          <div className="text-center">
            <div className="relative mb-4 sm:mb-8">
              <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <Rocket className="h-10 w-10 sm:h-14 sm:w-14 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                <Star className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
              </div>
            </div>
            <span className="text-lg sm:text-xl font-black text-slate-800">AQI DIGITAL</span>
            <span className="text-xs sm:text-sm text-slate-600 block font-bold">TECH INNOVATION</span>
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);
  
  // Detectar dispositivos móviles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Efectos de carga
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking optimizado (solo desktop)
  const handleMouseMove = useCallback((e) => {
    if (isMobile) return;
    
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let frameId;
    const throttledMouseMove = (e) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => handleMouseMove(e));
    };

    window.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [handleMouseMove, isMobile]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-dynamic {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-10px) rotate(5deg); }
            50% { transform: translateY(-20px) rotate(0deg); }
            75% { transform: translateY(-10px) rotate(-5deg); }
          }
          @keyframes hologram-glow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(147, 51, 234, 0.3);
            }
            50% { 
              box-shadow: 0 0 40px rgba(6, 182, 212, 0.6), 0 0 80px rgba(147, 51, 234, 0.5);
            }
          }
          @keyframes text-glow {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes wave-motion {
            0%, 100% { opacity: 0.3; transform: translateY(0px) scale(1); }
            50% { opacity: 0.8; transform: translateY(-20px) scale(1.05); }
          }
          
          .animate-float-dynamic { animation: float-dynamic 8s ease-in-out infinite; }
          .animate-hologram-glow { animation: hologram-glow 4s ease-in-out infinite; }
          .animate-text-glow { 
            animation: text-glow 4s linear infinite;
            background-size: 200% auto;
          }
          .animate-wave-motion { animation: wave-motion 10s ease-in-out infinite; }
          
          @media (max-width: 768px) {
            .animate-float-dynamic { animation-duration: 6s; }
            .animate-hologram-glow { animation-duration: 3s; }
            .animate-wave-motion { animation-duration: 8s; }
          }
        `
      }} />

      {/* Sistema de fondo optimizado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/20 via-transparent to-purple-900/20"></div>
        
        {/* Efectos de mouse solo en desktop */}
        {!isMobile && (
          <div 
            className="absolute inset-0 opacity-40 transition-all duration-500"
            style={{
              background: `
                radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.4) 0%, transparent 70%),
                radial-gradient(ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)
              `
            }}
          ></div>
        )}
        
        {/* Ondas energéticas optimizadas */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-400/25 rounded-full blur-2xl sm:blur-3xl animate-wave-motion"></div>
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/25 rounded-full blur-2xl sm:blur-3xl animate-wave-motion" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-52 h-52 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-wave-motion" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Grid cibernético simplificado para móvil */}
        <div className={`absolute inset-0 overflow-hidden ${isMobile ? 'opacity-5' : 'opacity-8'}`}>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/35 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-8 py-10 sm:py-20">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-24">
          
          {/* Logo holográfico */}
          <div className={`relative transition-all duration-2000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/15 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-hologram-glow"></div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-cyan-500/8 to-purple-500/8 rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative p-4 sm:p-8 md:p-12 lg:p-16">
                <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto">
                  <HolographicLogo 
                    src="/logo.png" 
                    alt="AQI Digital Innovation Logo" 
                    className="w-full h-full drop-shadow-2xl"
                  />
                </div>
                
                <div className="mt-4 sm:mt-6 md:mt-8 text-center">
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-white/95 tracking-wider mb-1 sm:mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-text-glow">
                      ADVANCED QUALITY INTELLIGENCE
                    </span>
                  </div>
                  <div className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white/90 tracking-wide mb-2 sm:mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-text-glow" style={{ animationDelay: '1s' }}>
                      DIGITAL INNOVATION
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 mt-2 sm:mt-4 flex-wrap">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-bold text-white/90 tracking-wide">MEDELLÍN DIGITAL</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                      <span className="text-xs sm:text-sm font-bold text-white/90 tracking-wide">FUTURO HOY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Título principal optimizado para móvil */}
          <div className={`space-y-4 sm:space-y-8 md:space-y-12 max-w-6xl transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-tight">
              <span className="relative inline-block mb-2 sm:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 animate-text-glow">
                  Revoluciona
                </span>
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl sm:blur-2xl -z-10 animate-pulse"></div>
              </span>
              {' '}
              <span className="text-white/95 mx-1 sm:mx-4">✦</span>
              {' '}
              <span className="relative inline-block mb-2 sm:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 animate-text-glow" style={{ animationDelay: '1s' }}>
                  Conecta
                </span>
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl sm:blur-2xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </span>
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 animate-text-glow" style={{ animationDelay: '2s' }}>
                  Prospera
                </span>
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-2 sm:h-4 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-full shadow-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </span>
            </h1>
            
            {/* Badges de servicios responsivos */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-16">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="relative flex items-center gap-3 sm:gap-6 bg-white/10 backdrop-blur-2xl px-4 sm:px-8 py-3 sm:py-6 rounded-2xl border border-white/20 shadow-xl group-hover:scale-105 transition-all duration-700">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-xl">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-2xl font-black text-white">Desarrollo Web</div>
                    <div className="text-sm sm:text-lg text-cyan-200 font-bold">Premium & Responsive</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <div className="relative flex items-center gap-3 sm:gap-6 bg-white/10 backdrop-blur-2xl px-4 sm:px-8 py-3 sm:py-6 rounded-2xl border border-white/20 shadow-xl group-hover:scale-105 transition-all duration-700">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl">
                    <Smartphone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-2xl font-black text-white">Apps Móviles</div>
                    <div className="text-sm sm:text-lg text-purple-200 font-bold">iOS & Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descripción optimizada */}
          <div className={`max-w-5xl transition-all duration-2000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/8 via-purple-500/6 to-pink-500/8 rounded-2xl sm:rounded-3xl"></div>
              
              <div className="relative p-6 sm:p-10 md:p-16">
                <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/95 leading-relaxed font-light">
                  Creamos{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-text-glow">
                      experiencias digitales extraordinarias
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                  </span>
                  {' '}que impulsan el crecimiento de tu negocio. Desde{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-text-glow" style={{ animationDelay: '1s' }}>
                      desarrollo web de vanguardia
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </span>
                  {' '}hasta{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 animate-text-glow" style={{ animationDelay: '2s' }}>
                      soluciones móviles innovadoras
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </span>
                  . Tu visión, nuestra tecnología.
                </div>
              </div>
            </div>
          </div>

          {/* Plataformas digitales responsivas */}
          <div className={`max-w-6xl transition-all duration-2000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-8 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white/95 mb-3 sm:mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 animate-text-glow">
                  Plataformas Digitales Premium
                </span>
              </h3>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 font-bold mb-2 sm:mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 animate-text-glow">
                  ¡Descuentos Especiales Disponibles!
                </span>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 font-semibold">Comercio Digital · Salud Online · Experiencias Premium</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-12 justify-center items-center">
              {/* Tu Guía de Turismo */}
              <div className="group relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-500/40 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <a href="https://tuguiadeturismo.com" target="_blank" rel="noopener noreferrer" className="relative bg-white/10 backdrop-blur-2xl p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-700 block">
                  <div className="text-center">
                    <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-black shadow-2xl animate-pulse">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Percent className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>DESCUENTO</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 sm:mb-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                        <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4">tuguiadeturismo.com</div>
                    <div className="text-base sm:text-lg md:text-xl text-green-200 font-bold mb-2 sm:mb-4">Plataforma de Comercio</div>
                    <div className="text-sm sm:text-base text-white/80 font-semibold mb-4 sm:mb-6">Turismo · E-commerce · Marketing</div>
                    
                    <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 backdrop-blur-xl px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-green-400/30">
                      <div className="text-sm sm:text-lg font-black text-green-200 mb-1">¡OFERTA COMERCIO!</div>
                      <div className="text-xs sm:text-sm text-white/90 font-bold">50% OFF en tiendas online</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Profesionales Online */}
              <div className="group relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <a href="https://www.profesionalesonline.com.co" target="_blank" rel="noopener noreferrer" className="relative bg-white/10 backdrop-blur-2xl p-6 sm:p-12 rounded-2xl sm:rounded-3xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-700 block">
                  <div className="text-center">
                    <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-black shadow-2xl animate-pulse">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Percent className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>DESCUENTO</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-6 sm:mb-10">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                        <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-2 sm:mb-4">profesionalesonline.com.co</div>
                    <div className="text-base sm:text-lg md:text-xl text-blue-200 font-bold mb-2 sm:mb-4">Red de Profesionales</div>
                    <div className="text-sm sm:text-base text-white/80 font-semibold mb-4 sm:mb-6">Medicina · Especialistas · Telemedicina</div>
                    
                    <div className="bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-xl px-3 py-2 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-400/30">
                      <div className="text-sm sm:text-lg font-black text-blue-200 mb-1">¡OFERTA SALUD!</div>
                      <div className="text-xs sm:text-sm text-white/90 font-bold">40% OFF en plataformas médicas</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Call to action para descuentos */}
            <div className="text-center mt-8 sm:mt-16">
              <div className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl px-6 sm:px-12 py-3 sm:py-6 rounded-full border border-yellow-400/30 shadow-2xl">
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                <div className="text-left">
                  <div className="text-lg sm:text-2xl font-black text-yellow-300">Ofertas Limitadas</div>
                  <div className="text-sm sm:text-lg text-white/90 font-bold">Válidas hasta fin de mes</div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Métricas responsivas */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 pt-12 sm:pt-24 pb-10 sm:pb-20 w-full max-w-6xl mx-auto transition-all duration-2000 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Code, count: "+500", label: "Proyectos", sublabel: "Completados", color: "from-cyan-600 to-blue-600", accent: "green" },
              { icon: Users, count: "+150", label: "Empresas", sublabel: "Registradas", color: "from-purple-600 to-pink-600", accent: "blue" },
              { icon: ThumbsUp, count: "98%", label: "Satisfacción", sublabel: "Garantizada", color: "from-emerald-600 to-teal-600", accent: "amber" },
              { icon: Rocket, count: "100%", label: "Innovación", sublabel: "Continua", color: "from-orange-600 to-red-600", accent: "purple" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color.replace('600', '500/40')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700`}></div>
                  <div className={`relative w-full bg-gradient-to-br ${stat.color} p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl group-hover:scale-105 transition-all duration-700`}>
                    <div className="text-center">
                      <div className="relative mb-4 sm:mb-6 flex justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/25 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${
                          stat.accent === 'green' ? 'from-green-400 to-emerald-500' :
                          stat.accent === 'blue' ? 'from-blue-400 to-cyan-500' :
                          stat.accent === 'amber' ? 'from-amber-400 to-yellow-500' :
                          'from-purple-400 to-violet-500'
                        } rounded-full flex items-center justify-center`}>
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">{stat.count}</div>
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 font-bold mb-1 sm:mb-2">{stat.label}</div>
                      <div className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">{stat.sublabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA final optimizado */}
          <div className={`pt-12 sm:pt-24 pb-20 sm:pb-40 transition-all duration-2000 delay-1300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex justify-center`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/60 via-purple-600/60 to-pink-600/60 rounded-full blur-2xl sm:blur-3xl group-hover:blur-4xl transition-all duration-1000"></div>
              
              <button className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-700 hover:from-cyan-800 hover:via-purple-800 hover:to-pink-800 text-white font-black py-4 sm:py-8 md:py-12 px-8 sm:px-16 md:px-24 rounded-full shadow-2xl hover:shadow-4xl transition-all duration-1000 hover:scale-105 flex items-center gap-4 sm:gap-8 border-2 border-white/30 backdrop-blur-xl group-hover:border-white/50">
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                
                <div className="relative flex items-center justify-center gap-4 sm:gap-8 text-white z-10">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/25 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                      <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-300 group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-lg sm:text-2xl md:text-3xl font-black">Comenzar Ahora</div>
                    <div className="text-sm sm:text-base md:text-xl text-white/95 font-bold">Tu Futuro Digital Te Espera</div>
                  </div>
                  <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 group-hover:translate-x-2 sm:group-hover:translate-x-4 transition-transform duration-700" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;