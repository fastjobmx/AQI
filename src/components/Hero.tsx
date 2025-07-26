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
  ThumbsUp,
  Play,
  Globe,
  Target
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

// Componente de imagen optimizado más compacto
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
        if (progress > 95) {
          clearInterval(progressInterval);
          progress = 95;
        }
        setLoadProgress(progress);
      }, 40);
    };
    
    const handleLoad = () => {
      if (progressInterval) clearInterval(progressInterval);
      setLoadProgress(100);
      setTimeout(() => {
        setImageStatus('loaded');
        setImageSrc(src);
        if (onLoad) onLoad();
      }, 150);
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
      {/* Estado de carga más compacto */}
      <div 
        className={`absolute inset-0 transition-all duration-800 ${
          imageStatus === 'loaded' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-cyan-200/20 to-purple-200/12 rounded-full backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/15 to-transparent rounded-full"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20">
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border border-purple-400/25 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2.5s' }}></div>
            </div>
            
            <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full shadow-xl animate-pulse">
                <div className="absolute inset-0 bg-white/15 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 animate-bounce" />
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4">
              <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 h-1 bg-white/10 rounded-full overflow-hidden border border-white/20">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${loadProgress}%` }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
          </div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-white/90 text-xs font-bold bg-black/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
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
            className={`w-full h-full object-contain transition-all duration-800 ${
              imageStatus === 'loaded' 
                ? 'opacity-100 scale-100 blur-0' 
                : 'opacity-0 scale-90 blur-sm'
            }`}
            onLoad={() => setImageStatus('loaded')}
          />
          
          <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/2 to-purple-500/2 rounded-full transition-opacity duration-800 ${
            imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
      )}
      
      {/* Estado de error más compacto */}
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-cyan-50 to-purple-50 rounded-full flex items-center justify-center shadow-xl border border-white/50 backdrop-blur-sm">
          <div className="text-center">
            <div className="relative mb-3 sm:mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <Rocket className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full flex items-center justify-center">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </div>
            <span className="text-base sm:text-lg font-black text-slate-800">AQI DIGITAL</span>
            <span className="text-xs text-slate-600 block font-bold">TECH INNOVATION</span>
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
  const [scrollY, setScrollY] = useState(0);
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
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      className="relative min-h-[85vh] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-compact {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(1deg); }
            50% { transform: translateY(-10px) rotate(0deg); }
            75% { transform: translateY(-5px) rotate(-1deg); }
          }
          @keyframes hologram-subtle {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(6, 182, 212, 0.2), 0 0 40px rgba(147, 51, 234, 0.15);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 30px rgba(6, 182, 212, 0.3), 0 0 60px rgba(147, 51, 234, 0.25);
              transform: scale(1.01);
            }
          }
          @keyframes text-glow-compact {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes wave-small {
            0%, 100% { opacity: 0.15; transform: translateY(0px) scale(1); }
            50% { opacity: 0.4; transform: translateY(-10px) scale(1.02); }
          }
          @keyframes particle-mini {
            0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
            50% { transform: translateY(-15px) translateX(5px); opacity: 0.5; }
          }
          
          .animate-float-compact { animation: float-compact 6s ease-in-out infinite; }
          .animate-hologram-subtle { animation: hologram-subtle 3s ease-in-out infinite; }
          .animate-text-glow-compact { 
            animation: text-glow-compact 2.5s linear infinite;
            background-size: 200% auto;
          }
          .animate-wave-small { animation: wave-small 10s ease-in-out infinite; }
          .animate-particle-mini { animation: particle-mini 12s ease-in-out infinite; }
          
          @media (max-width: 768px) {
            .animate-float-compact { animation-duration: 5s; }
            .animate-hologram-subtle { animation-duration: 2.5s; }
            .animate-wave-small { animation-duration: 8s; }
          }
          
          .glass-compact {
            background: rgba(255, 255, 255, 0.06);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .glass-strong-compact {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.12);
          }
        `
      }} />

      {/* Sistema de fondo compacto */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-purple-900/10"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
        
        {/* Efectos de mouse reducidos */}
        {!isMobile && (
          <div 
            className="absolute inset-0 opacity-20 transition-all duration-500"
            style={{
              background: `
                radial-gradient(ellipse at ${mousePosition.x}% ${mousePosition.y}%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
              `
            }}
          ></div>
        )}
        
        {/* Partículas más pequeñas */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1.5 h-1.5 bg-gradient-to-r ${
                i % 3 === 0 ? 'from-cyan-400 to-blue-500' :
                i % 3 === 1 ? 'from-purple-400 to-pink-500' :
                'from-emerald-400 to-teal-500'
              } rounded-full animate-particle-mini`}
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                animationDelay: `${i * 1.5}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Ondas más pequeñas */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-8 left-8 sm:top-12 sm:left-12 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-400/15 rounded-full blur-2xl animate-wave-small"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          ></div>
          <div 
            className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-28 h-28 sm:w-40 sm:h-40 bg-purple-500/15 rounded-full blur-2xl animate-wave-small" 
            style={{ animationDelay: '2s', transform: `translateY(${scrollY * 0.04}px)` }}
          ></div>
          <div 
            className="absolute top-1/2 left-1/2 w-36 h-36 sm:w-52 sm:h-52 bg-pink-500/10 rounded-full blur-2xl animate-wave-small" 
            style={{ animationDelay: '4s', transform: `translateY(${scrollY * 0.035}px)` }}
          ></div>
        </div>

        {/* Grid más sutil */}
        <div className={`absolute inset-0 overflow-hidden ${isMobile ? 'opacity-2' : 'opacity-4'}`}>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute left-0 top-3/4 w-full h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[85vh] text-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-10">
          
          {/* Logo más compacto */}
          <div className={`relative transition-all duration-1500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/8 to-pink-500/10 rounded-full blur-2xl animate-hologram-subtle"></div>
            
            <div className="relative animate-float-compact">
              <div className="absolute inset-0 glass-strong-compact rounded-2xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-cyan-500/3 to-purple-500/3 rounded-2xl"></div>
              
              <div className="relative p-4 sm:p-6 md:p-8">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto">
                  <HolographicLogo 
                    src="/logo.png" 
                    alt="AQI Digital Innovation Logo" 
                    className="w-full h-full drop-shadow-xl"
                  />
                </div>
                
                <div className="mt-3 sm:mt-4 md:mt-5 text-center">
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-black text-white/95 tracking-wider mb-1 sm:mb-2">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-text-glow-compact">
                      ADVANCED QUALITY INTELLIGENCE
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-white/90 tracking-wide mb-2 sm:mb-3">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-text-glow-compact" style={{ animationDelay: '1s' }}>
                      DIGITAL INNOVATION
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-3 flex-wrap">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-white/90 tracking-wide">COLOMBIA DIGITAL</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
                      <span className="text-xs font-bold text-white/90 tracking-wide">FUTURO HOY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Título más compacto */}
          <div className={`space-y-4 sm:space-y-6 md:space-y-8 max-w-5xl transition-all duration-1500 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight">
              <span className="relative inline-block mb-1 sm:mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-200 animate-text-glow-compact">
                  Revoluciona
                </span>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl -z-10 animate-pulse"></div>
              </span>
              {' '}
              <span className="text-white/95 mx-1 sm:mx-2 animate-pulse">✦</span>
              {' '}
              <span className="relative inline-block mb-1 sm:mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-rose-400 animate-text-glow-compact" style={{ animationDelay: '1s' }}>
                  Conecta
                </span>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl -z-10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </span>
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 animate-text-glow-compact" style={{ animationDelay: '2s' }}>
                  Prospera
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </span>
            </h1>
            
            {/* Badges más pequeños */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative flex items-center gap-2 sm:gap-3 glass-strong-compact px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl group-hover:scale-105 transition-all duration-500">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-black text-white">Desarrollo Web</div>
                    <div className="text-xs sm:text-sm text-cyan-200 font-bold">Premium & Responsive</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative flex items-center gap-2 sm:gap-3 glass-strong-compact px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-xl group-hover:scale-105 transition-all duration-500">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg">
                    <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base font-black text-white">Apps Móviles</div>
                    <div className="text-xs sm:text-sm text-purple-200 font-bold">iOS & Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Descripción más compacta */}
          <div className={`max-w-4xl transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="relative">
              <div className="absolute inset-0 glass-strong-compact rounded-2xl shadow-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-purple-500/2 to-pink-500/3 rounded-2xl"></div>
              
              <div className="relative p-4 sm:p-6 md:p-8">
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-light">
                  Creamos{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 animate-text-glow-compact">
                      experiencias digitales extraordinarias
                    </span>
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse"></div>
                  </span>
                  {' '}que impulsan el crecimiento de tu negocio. Desde{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 animate-text-glow-compact" style={{ animationDelay: '1s' }}>
                      desarrollo web de vanguardia
                    </span>
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </span>
                  {' '}hasta{' '}
                  <span className="relative inline-block font-black">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 animate-text-glow-compact" style={{ animationDelay: '2s' }}>
                      soluciones móviles innovadoras
                    </span>
                    <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </span>
                  . Tu visión, nuestra tecnología.
                </div>
              </div>
            </div>
          </div>

          {/* Plataformas digitales más compactas */}
          <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-1500 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white/95 mb-2 sm:mb-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-orange-400 animate-text-glow-compact">
                  Plataformas Digitales Premium
                </span>
              </h3>
              <div className="text-base sm:text-lg md:text-xl text-white/90 font-bold mb-1 sm:mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500 animate-text-glow-compact">
                  ¡Descuentos Especiales Disponibles!
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-white/80 font-semibold">Comercio Digital · Salud Online · Experiencias Premium</p>
            </div>
            
            {/* Primera fila más compacta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 justify-items-center mb-6 sm:mb-8">
              {/* Tu Guía de Turismo */}
              <div className="group relative w-full max-w-xs animate-float-compact">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <a href="https://tuguiadeturismo.com" target="_blank" rel="noopener noreferrer" className="relative glass-strong-compact p-4 sm:p-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 block">
                  <div className="text-center">
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-black shadow-xl animate-pulse">
                      <div className="flex items-center gap-1">
                        <Percent className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>DESCUENTO</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto shadow-xl">
                        <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mb-1 sm:mb-2">tuguiadeturismo.com</div>
                    <div className="text-sm sm:text-base text-green-200 font-bold mb-1 sm:mb-2">Plataforma de Comercio</div>
                    <div className="text-xs sm:text-sm text-white/80 font-semibold mb-3 sm:mb-4">Turismo · E-commerce · Marketing</div>
                    
                    <div className="glass-compact px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-green-400/15">
                      <div className="text-xs sm:text-sm font-black text-green-200 mb-0.5">¡OFERTA COMERCIO!</div>
                      <div className="text-xs text-white/90 font-bold">50% OFF en tiendas online</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Profesionales Online */}
              <div className="group relative w-full max-w-xs animate-float-compact" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <a href="https://www.profesionalesonline.com.co" target="_blank" rel="noopener noreferrer" className="relative glass-strong-compact p-4 sm:p-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 block">
                  <div className="text-center">
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-black shadow-xl animate-pulse">
                      <div className="flex items-center gap-1">
                        <Percent className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>DESCUENTO</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto shadow-xl">
                        <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center">
                        <Heart className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mb-1 sm:mb-2">profesionalesonline.com.co</div>
                    <div className="text-sm sm:text-base text-blue-200 font-bold mb-1 sm:mb-2">Red de Profesionales</div>
                    <div className="text-xs sm:text-sm text-white/80 font-semibold mb-3 sm:mb-4">Medicina · Especialistas · Telemedicina</div>
                    
                    <div className="glass-compact px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-blue-400/15">
                      <div className="text-xs sm:text-sm font-black text-blue-200 mb-0.5">¡OFERTA SALUD!</div>
                      <div className="text-xs text-white/90 font-bold">40% OFF en plataformas médicas</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Segunda fila más compacta */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 justify-items-center mb-6 sm:mb-8">
              {/* Descuentos Especiales */}
              <div className="group relative w-full max-w-xs animate-float-compact" style={{ animationDelay: '1s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <a href="https://paraelviaje.tuguiadeturismo.com/" target="_blank" rel="noopener noreferrer" className="relative glass-strong-compact p-4 sm:p-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 block">
                  <div className="text-center">
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-black shadow-xl animate-pulse">
                      <div className="flex items-center gap-1">
                        <Gift className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>ESPECIAL</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto shadow-xl">
                        <Camera className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mb-1 sm:mb-2">Descuentos Especiales</div>
                    <div className="text-sm sm:text-base text-orange-200 font-bold mb-1 sm:mb-2">Para el Viaje</div>
                    <div className="text-xs sm:text-sm text-white/80 font-semibold mb-3 sm:mb-4">Ofertas exclusivas en turismo, hoteles y experiencias únicas</div>
                    
                    <div className="glass-compact px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-orange-400/15">
                      <div className="text-xs sm:text-sm font-black text-orange-200 mb-0.5">¡OFERTAS ÚNICAS!</div>
                      <div className="text-xs text-white/90 font-bold">Experiencias premium con descuento</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Cursos de Formación */}
              <div className="group relative w-full max-w-xs animate-float-compact" style={{ animationDelay: '1.5s' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <a href="https://app.hugex.co/p/form/bgheRWMHHS4POqApBIqc2iWoIJC-eyt8bXiLrnyDUpVb1KmRWQ0WyshDBzDUo1QjTP0kE4XEDZJYSb05ArFgSQI_-8_2t5zNN7HpR4twY_GX8AOhLwwtqZmpNdACbD_5" target="_blank" rel="noopener noreferrer" className="relative glass-strong-compact p-4 sm:p-5 rounded-2xl shadow-xl hover:scale-105 transition-all duration-500 block">
                  <div className="text-center">
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-black shadow-xl animate-pulse">
                      <div className="flex items-center gap-1">
                        <BadgeCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        <span>CERTIFICA</span>
                      </div>
                    </div>
                    
                    <div className="relative mb-4 sm:mb-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto shadow-xl">
                        <Monitor className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                        <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                      </div>
                    </div>
                    <div className="text-base sm:text-lg font-black text-white mb-1 sm:mb-2">Cursos de Formación</div>
                    <div className="text-sm sm:text-base text-purple-200 font-bold mb-1 sm:mb-2">SENATIC</div>
                    <div className="text-xs sm:text-sm text-white/80 font-semibold mb-3 sm:mb-4">Capacítate con nuestros cursos especializados y certificaciones</div>
                    
                    <div className="glass-compact px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-purple-400/15">
                      <div className="text-xs sm:text-sm font-black text-purple-200 mb-0.5">¡FORMACIÓN DIGITAL!</div>
                      <div className="text-xs text-white/90 font-bold">Certificaciones Google, Meta, Microsoft</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Call to action más compacto */}
            <div className="text-center mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-2 sm:gap-3 glass-strong-compact px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-yellow-400/15 shadow-xl hover:scale-105 transition-all duration-400">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 animate-pulse" />
                <div className="text-left">
                  <div className="text-sm sm:text-base font-black text-yellow-300">Ofertas Limitadas</div>
                  <div className="text-xs sm:text-sm text-white/90 font-bold">Válidas hasta fin de mes</div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Métricas más compactas */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-8 sm:pt-12 pb-8 sm:pb-12 w-full max-w-5xl mx-auto transition-all duration-1500 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {[
              { icon: Code, count: "+500", label: "Proyectos", sublabel: "Completados", color: "from-cyan-600 to-blue-600", accent: "green" },
              { icon: Users, count: "+150", label: "Empresas", sublabel: "Registradas", color: "from-purple-600 to-pink-600", accent: "blue" },
              { icon: ThumbsUp, count: "98%", label: "Satisfacción", sublabel: "Garantizada", color: "from-emerald-600 to-teal-600", accent: "amber" },
              { icon: Rocket, count: "100%", label: "Innovación", sublabel: "Continua", color: "from-orange-600 to-red-600", accent: "purple" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="relative group animate-float-compact" style={{ animationDelay: `${index * 0.3}s` }}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color.replace('600', '500/15')} rounded-xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
                  <div className={`relative w-full bg-gradient-to-br ${stat.color} p-3 sm:p-4 md:p-5 rounded-xl shadow-xl glass-compact border border-white/8 group-hover:scale-105 transition-all duration-500`}>
                    <div className="text-center">
                      <div className="relative mb-3 sm:mb-4 flex justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
                          <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className={`absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${
                          stat.accent === 'green' ? 'from-green-400 to-emerald-500' :
                          stat.accent === 'blue' ? 'from-blue-400 to-cyan-500' :
                          stat.accent === 'amber' ? 'from-amber-400 to-yellow-500' :
                          'from-purple-400 to-violet-500'
                        } rounded-full flex items-center justify-center`}>
                          <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" />
                        </div>
                      </div>
                      <div className="text-lg sm:text-xl md:text-2xl font-black text-white mb-1">{stat.count}</div>
                      <div className="text-xs sm:text-sm md:text-base text-white/95 font-bold mb-0.5">{stat.label}</div>
                      <div className="text-xs text-white/80 font-semibold">{stat.sublabel}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA final más compacto */}
          <div className={`pt-8 sm:pt-12 pb-12 sm:pb-20 transition-all duration-1500 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} flex justify-center`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/25 via-purple-600/25 to-pink-600/25 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-800 animate-hologram-subtle"></div>
              
              <button className="relative overflow-hidden bg-gradient-to-r from-cyan-700 via-purple-700 to-pink-700 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-black py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-800 hover:scale-105 flex items-center gap-3 sm:gap-4 glass-strong-compact group-hover:border-white/20">
                
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                <div className="relative flex items-center justify-center gap-3 sm:gap-4 text-white z-10">
                  <div className="relative">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-400 shadow-lg">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-300 group-hover:rotate-12 transition-transform duration-400" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:-top-1.5 sm:-right-1.5 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white animate-pulse" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm sm:text-base md:text-lg font-black">Comenzar Ahora</div>
                    <div className="text-xs sm:text-sm md:text-base text-white/95 font-bold">Tu Futuro Digital Te Espera</div>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500" />
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