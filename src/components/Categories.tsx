import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Heart,
  Building,
  Utensils,
  Plane,
  Palette,
  Home,
  Wrench,
  Users,
  ShoppingBag,
  ArrowRight,
  ExternalLink,
  Car,
  Coffee,
  Scissors,
  Shirt,
  Gift,
  Smartphone,
  Dumbbell,
  Sparkles,
  Crown,
  Diamond,
  Zap,
  Star,
  Gem,
  Layers,
  Eye,
  Wand2
} from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// Componente de imagen ultra premium con sistema anti-flash mejorado
const UltraPremiumImage = ({ src, alt, className, placeholderClassName, onLoad, priority = false }) => {
  const [imageStatus, setImageStatus] = useState('loading');
  const [imageSrc, setImageSrc] = useState(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const imgRef = useRef(null);
  const intersectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(priority);

  // Sistema de intersección ultra inteligente
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        rootMargin: '150px', 
        threshold: 0.05 
      }
    );

    if (intersectionRef.current) {
      observer.observe(intersectionRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Sistema de precarga con tracking de progreso mejorado
  useEffect(() => {
    if (!isVisible || !src) return;

    const img = new Image();
    img.decoding = 'async';
    img.loading = priority ? 'eager' : 'lazy';
    
    let progressInterval;
    let progressValue = 0;
    
    const simulateProgress = () => {
      progressInterval = setInterval(() => {
        progressValue += Math.random() * 20 + 5;
        if (progressValue > 85) {
          clearInterval(progressInterval);
          progressValue = 85;
        }
        setLoadProgress(progressValue);
      }, 80);
    };

    const handleLoad = () => {
      if (progressInterval) clearInterval(progressInterval);
      setLoadProgress(100);
      
      // Transición elegante sin flash
      setTimeout(() => {
        setImageStatus('loaded');
        setImageSrc(src);
        if (onLoad) onLoad();
      }, 250);
    };

    const handleError = () => {
      if (progressInterval) clearInterval(progressInterval);
      setImageStatus('error');
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    
    simulateProgress();
    img.src = src;

    if (img.complete) {
      handleLoad();
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
      img.onload = null;
      img.onerror = null;
    };
  }, [isVisible, src, priority, onLoad]);

  return (
    <div ref={intersectionRef} className={`relative overflow-hidden ${className}`}>
      {/* Ultra Premium Skeleton System */}
      <div 
        className={`absolute inset-0 transition-all duration-1500 ${
          imageStatus === 'loaded' ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
        }`}
      >
        {/* Multi-layer base gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/60 to-purple-50/40">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-cyan-50/30 via-transparent to-rose-50/30"></div>
        </div>
        
        {/* Advanced shimmer system */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer-ultra transform -skew-x-12"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/15 via-purple-200/15 to-amber-200/15 animate-pulse-ultra"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-100/20 via-transparent to-violet-100/20 animate-breathe"></div>
        </div>
        
        {/* Sophisticated loading indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Orbital loading system */}
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 border-2 border-blue-200/60 rounded-full animate-spin-luxury"></div>
              <div className="absolute inset-2 border border-purple-200/50 rounded-full animate-spin-luxury-reverse"></div>
              <div className="absolute inset-4 border border-amber-200/40 rounded-full animate-spin-luxury" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Center crystal */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-400 via-purple-400 to-amber-400 rounded-full shadow-xl animate-pulse-glow">
                  <div className="absolute inset-0 bg-white/40 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-3 -right-3">
              <Sparkles className="h-3 w-3 text-blue-400 animate-float-micro" />
            </div>
            <div className="absolute -bottom-3 -left-3">
              <Star className="h-2 w-2 text-purple-400 animate-float-micro" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute top-0 left-0">
              <Diamond className="h-2 w-2 text-amber-400 animate-float-micro" style={{ animationDelay: '2s' }} />
            </div>
          </div>
        </div>
        
        {/* Ultra Premium Progress System */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full transition-all duration-500 relative"
              style={{ width: `${loadProgress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-shimmer-wave"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-slide-shine"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-slate-500 font-medium">Cargando...</span>
            <span className="text-xs text-blue-600 font-bold">{Math.round(loadProgress)}%</span>
          </div>
        </div>
      </div>
      
      {/* Imagen real con sistema anti-flash */}
      {imageSrc && (
        <div className="relative">
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-1500 ${
              imageStatus === 'loaded' 
                ? 'opacity-100 scale-100 blur-0 saturate-110 brightness-105 contrast-105' 
                : 'opacity-0 scale-95 blur-md saturate-50'
            }`}
            onLoad={() => setImageStatus('loaded')}
          />
          
          {/* Enhancement overlay system */}
          <div className={`absolute inset-0 transition-opacity duration-1500 ${
            imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-purple-500/5"></div>
          </div>
        </div>
      )}
      
      {/* Enhanced Error State */}
      {imageStatus === 'error' && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="relative mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-300 via-blue-300 to-purple-300 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Palette className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-red-100 to-rose-200 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-sm font-bold text-slate-600">Imagen Premium No Disponible</span>
            <div className="text-xs text-slate-500 mt-1">Contenido en preparación</div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sistema de búsqueda ultra premium mejorado
const UltraPremiumSearch = ({ value, onChange, onClear, placeholder, className, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchAnimation, setSearchAnimation] = useState(false);
  
  useEffect(() => {
    if (value) {
      setSearchAnimation(true);
      const timer = setTimeout(() => setSearchAnimation(false), 300);
      return () => clearTimeout(timer);
    }
  }, [value]);
  
  return (
    <div className="relative z-30">
      <div className={`relative transition-all duration-700 ${isFocused ? 'scale-102' : ''}`}>
        {/* Multi-layer background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-amber-500/10 rounded-3xl blur-xl"></div>
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/25 to-purple-500/25 rounded-3xl blur-lg transition-all duration-500 ${isFocused ? 'opacity-100 scale-105' : 'opacity-0'}`}></div>
        <div className={`absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-60'}`}></div>
        
        {/* Enhanced search icon */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20">
          <div className="relative">
            <div className={`absolute inset-0 bg-blue-500/30 rounded-full blur-md transition-all duration-500 ${isFocused ? 'scale-200 opacity-100' : 'scale-100 opacity-0'}`}></div>
            <div className={`absolute inset-0 bg-purple-500/20 rounded-full blur-sm transition-all duration-300 ${searchAnimation ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`}></div>
            <Search className={`relative h-7 w-7 transition-all duration-500 ${isFocused ? 'text-blue-600 scale-110' : 'text-slate-400'}`} />
            
            {/* Search pulse effect */}
            {isFocused && (
              <div className="absolute inset-0 border-2 border-blue-400/50 rounded-full animate-ping"></div>
            )}
          </div>
        </div>
        
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${className} relative transition-all duration-500 backdrop-blur-3xl z-10`}
          onFocus={() => {
            setIsOpen(true);
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => setIsOpen(false), 200);
            setIsFocused(false);
          }}
        />
        
        {/* Enhanced clear button */}
        {value && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 p-0 rounded-full hover:bg-red-50 hover:text-red-600 transition-all duration-500 group z-20"
            onClick={onClear}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
              <div className="absolute inset-0 border border-red-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-xl font-black group-hover:rotate-90 transition-transform duration-300">×</span>
            </div>
          </Button>
        )}
        
        {/* Advanced border glow system */}
        <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
          isFocused 
            ? 'border-blue-400/60 shadow-2xl shadow-blue-500/25' 
            : 'border-transparent'
        }`}></div>
        
        {/* Shimmer effect on focus */}
        {isFocused && (
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer-wave"></div>
          </div>
        )}
      </div>
      
      {/* Ultra Premium Dropdown */}
      {isOpen && children && (
        <div className="absolute top-full left-0 right-0 mt-6 z-50">
          <div className="relative">
            {/* Multi-layer dropdown background */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-3xl rounded-3xl border border-white/60 shadow-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/60 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-50/40 via-transparent to-rose-50/40 rounded-3xl"></div>
            
            <div className="relative max-h-[500px] overflow-y-auto rounded-3xl custom-scrollbar">
              {children}
            </div>
            
            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/90 to-transparent rounded-b-3xl pointer-events-none"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const UltraPremiumSearchSuggestion = ({ icon, label, description, onClick, isPremium = false }) => (
  <button
    className="w-full flex items-center gap-5 px-8 py-5 hover:bg-gradient-to-r hover:from-blue-50/90 hover:to-purple-50/90 text-left transition-all duration-500 group relative overflow-hidden"
    onClick={onClick}
  >
    {/* Advanced hover background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 to-purple-500/8 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div className="relative z-10 flex items-center gap-5 w-full">
      <div className="relative">
        <div className="p-3 bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
          {icon}
        </div>
        {isPremium && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
            <Crown className="h-2 w-2 text-white" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-300">{label}</div>
        {description && <div className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">{description}</div>}
      </div>
      <div className="relative">
        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all duration-500" />
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  </button>
);

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [popularSearches] = useState([
    'hoteles boutique premium',
    'restaurantes gourmet exclusivos', 
    'turismo de lujo y aventura',
    'servicios empresariales elite',
    'experiencias premium únicas'
  ]);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Efecto de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking mejorado
  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  }, []);

  useEffect(() => {
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
  }, [handleMouseMove]);

  // Imágenes con rutas actualizadas
  const categoryImages = {
    hoteles: "/assets/categories/hoteles.jpg",
    arte: "/assets/categories/arte.jpg", 
    servicios: "/assets/categories/servicios.jpg",
    inmobiliaria: "/assets/categories/inmobiliaria.jpg",
    automotriz: "/assets/categories/automotriz.jpg",
    belleza: "/assets/categories/belleza.jpg",
    deportes: "/assets/categories/deportes.jpg",
    entretenimiento: "/assets/categories/entretenimiento.jpg",
    restaurantes: "/assets/categories/restaurantes.jpg",
    salud: "/assets/categories/salud.jpg",
    turismo: "/assets/categories/turismo.jpg"
  };

  const businessData = {
    hoteles: [
      { 
        name: "Casa Hotel Venecia", 
        url: "https://casahotelvenecia.tuguiadeturismo.com/", 
        description: "Hotel boutique con encanto colonial y servicios de lujo",
        image: "/assets/businesses/casa-hotel-venecia.jpg",
        premium: true
      }
    ],
    arte: [
      { 
        name: "Cámara Lúcida", 
        url: "https://camaralucida.tuguiadeturismo.com/", 
        description: "Estudio de fotografía profesional y servicios creativos",
        image: "/assets/businesses/camara-lucida.jpg",
        premium: true
      }
    ],
    servicios: [
      { 
        name: "CV Alfonso López", 
        url: "https://cvalfonsolopez.tuguiadeturismo.com/", 
        description: "Servicios profesionales especializados y consultoría",
        image: "/assets/businesses/cv-alfonso-lopez.jpg"
      },
      { 
        name: "Tecno Móvil Tech", 
        url: "https://tecnomoviltech.tuguiadeturismo.com/", 
        description: "Reparación de dispositivos móviles y tecnología",
        image: "/assets/businesses/tecno-movil-tech.jpg"
      },
      { 
        name: "Los Pits Barber", 
        url: "https://lospitsbarber.tuguiadeturismo.com/", 
        description: "Barbería profesional y servicios de estilismo masculino",
        image: "/assets/businesses/los-pits-barber.jpg",
        premium: true
      }
    ],
    inmobiliaria: [
      { 
        name: "La Casona", 
        url: "https://lacasona.tuguiadeturismo.com/", 
        description: "Propiedades exclusivas y bienes raíces premium",
        image: "/assets/businesses/la-casona.jpg",
        premium: true
      }
    ],
    automotriz: [
      { 
        name: "Rentas AMG", 
        url: "https://rentasamg.tuguiadeturismo.com/", 
        description: "Alquiler de vehículos de lujo y servicios VIP",
        image: "/assets/businesses/rentas-amg.jpg",
        premium: true
      },
      { 
        name: "Car Dealer Imports", 
        url: "https://cardealerimports.tuguiadeturismo.com/", 
        description: "Importación y venta de vehículos premium",
        image: "/assets/businesses/car-dealer-imports.jpg"
      }
    ],
    belleza: [
      { 
        name: "Imperium Essence", 
        url: "https://imperiumessence.tuguiadeturismo.com/", 
        description: "Productos de belleza de lujo y cuidado personal premium",
        image: "/assets/businesses/imperium-essence.jpg",
        premium: true
      }
    ],
    deportes: [
      { 
        name: "Soccer Star", 
        url: "https://soccerstar.tuguiadeturismo.com/", 
        description: "Equipamiento deportivo profesional y de alta gama",
        image: "/assets/businesses/soccer-star.jpg"
      },
      { 
        name: "Anit Swimwear", 
        url: "https://anitswimwear.tuguiadeturismo.com/", 
        description: "Trajes de baño de diseñador y ropa deportiva premium",
        image: "/assets/businesses/anit-swimwear.jpg",
        premium: true
      }
    ],
    entretenimiento: [
      { 
        name: "Mundo Sorpresa", 
        url: "https://mundosorpresa.tuguiadeturismo.com/", 
        description: "Entretenimiento exclusivo y eventos especiales",
        image: "/assets/businesses/mundo-sorpresa.jpg"
      },
      { 
        name: "Palm Beach", 
        url: "https://palmbeach.tuguiadeturismo.com/", 
        description: "Club nocturno premium y entretenimiento VIP",
        image: "/assets/businesses/palm-beach.jpg",
        premium: true
      }
    ],
    restaurantes: [
      { 
        name: "Buenos Aires Coffee", 
        url: "https://buenosairescoffe.tuguiadeturismo.com/", 
        description: "Café gourmet y experiencias gastronómicas exclusivas",
        image: "/assets/businesses/buenos-aires-coffee.jpg",
        premium: true
      }
    ],
    salud: [
      { 
        name: "CEDBOS", 
        url: "https://cedbos.tuguiadeturismo.com/", 
        description: "Centro de bienestar integral y salud premium",
        image: "/assets/businesses/cedbos.jpg",
        premium: true
      }
    ],
    turismo: [
      { 
        name: "Venturs", 
        url: "https://venturs.tuguiadeturismo.com/", 
        description: "Aventuras exclusivas y experiencias turísticas de lujo",
        image: "/assets/businesses/venturs.jpg",
        premium: true
      }
    ]
  };

  const categories = [
    {
      title: "Ruta Hoteles Premium",
      icon: Building,
      description: "Alojamiento de lujo y hospedaje exclusivo",
      color: "from-blue-500 via-blue-600 to-cyan-500",
      accentColor: "from-blue-400 to-cyan-400",
      businesses: 33,
      key: "hoteles",
      premium: true,
      featured: true
    },
    {
      title: "Ruta Arte & Fotografía",
      icon: Palette,
      description: "Cultura, arte y servicios creativos de vanguardia",
      color: "from-purple-500 via-purple-600 to-violet-500",
      accentColor: "from-purple-400 to-violet-400",
      businesses: 24,
      key: "arte",
      premium: true
    },
    {
      title: "Ruta Servicios Elite",
      icon: Wrench,
      description: "Servicios profesionales especializados premium",
      color: "from-slate-500 via-gray-600 to-slate-500",
      accentColor: "from-slate-400 to-gray-400",
      businesses: 70,
      key: "servicios"
    },
    {
      title: "Ruta Inmobiliaria Luxury",
      icon: Home,
      description: "Propiedades exclusivas y bienes raíces de lujo",
      color: "from-indigo-500 via-indigo-600 to-blue-500",
      accentColor: "from-indigo-400 to-blue-400",
      businesses: 35,
      key: "inmobiliaria",
      premium: true
    },
    {
      title: "Ruta Automotriz Premium",
      icon: Car,
      description: "Vehículos de lujo, alquiler VIP y servicios automotrices",
      color: "from-red-500 via-red-600 to-orange-500",
      accentColor: "from-red-400 to-orange-400",
      businesses: 28,
      key: "automotriz",
      featured: true
    },
    {
      title: "Ruta Belleza & Wellness",
      icon: Heart,
      description: "Productos de belleza premium y cuidado personal de lujo",
      color: "from-pink-500 via-rose-600 to-rose-500",
      accentColor: "from-pink-400 to-rose-400",
      businesses: 42,
      key: "belleza",
      premium: true
    },
    {
      title: "Ruta Deportes & Fitness",
      icon: Dumbbell,
      description: "Equipamiento deportivo premium y actividades exclusivas",
      color: "from-green-500 via-emerald-600 to-emerald-500",
      accentColor: "from-green-400 to-emerald-400",
      businesses: 35,
      key: "deportes"
    },
    {
      title: "Ruta Entretenimiento VIP",
      icon: Users,
      description: "Diversión exclusiva, eventos premium y entretenimiento",
      color: "from-yellow-500 via-amber-600 to-amber-500",
      accentColor: "from-yellow-400 to-amber-400",
      businesses: 67,
      key: "entretenimiento"
    },
    {
      title: "Ruta Restaurantes Gourmet",
      icon: Utensils,
      description: "Gastronomía de alta cocina y experiencias culinarias",
      color: "from-orange-500 via-red-600 to-red-500",
      accentColor: "from-orange-400 to-red-400",
      businesses: 79,
      key: "restaurantes",
      premium: true,
      featured: true
    },
    {
      title: "Ruta Salud Integral",
      icon: Heart,
      description: "Servicios médicos premium y bienestar integral",
      color: "from-teal-500 via-cyan-600 to-blue-500",
      accentColor: "from-teal-400 to-cyan-400",
      businesses: 46,
      key: "salud"
    },
    {
      title: "Ruta Turismo Exclusivo",
      icon: Plane,
      description: "Destinos de lujo y experiencias turísticas premium",
      color: "from-emerald-500 via-teal-600 to-cyan-500",
      accentColor: "from-emerald-400 to-teal-400",
      businesses: 57,
      key: "turismo",
      premium: true
    }
  ];

  // Funciones mejoradas
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term && !recentSearches.includes(term)) {
      setRecentSearches(prev => [term, ...prev.filter(s => s !== term)].slice(0, 8));
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  const handleImageLoad = (categoryKey) => {
    setImageLoadStates(prev => ({
      ...prev,
      [categoryKey]: 'loaded'
    }));
  };

  const filteredCategories = categories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(selectedCategory === categoryKey ? null : categoryKey);
  };

  const handleBusinessClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 md:py-32 overflow-hidden"
      style={{ zIndex: 10 }} // Fixed z-index to prevent overlap
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes shimmer-ultra {
            0% { transform: translateX(-150%) rotate(-45deg); }
            100% { transform: translateX(350%) rotate(-45deg); }
          }
          @keyframes pulse-ultra {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.9; }
          }
          @keyframes spin-luxury {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes spin-luxury-reverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
          @keyframes float-micro {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-4px) rotate(3deg); }
          }
          @keyframes breathe {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.7; }
          }
          @keyframes shimmer-wave {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
          }
          @keyframes slide-shine {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
          }
          @keyframes cosmic-rotate {
            0% { transform: rotate(0deg) scale(1); }
            25% { transform: rotate(90deg) scale(1.1); }
            50% { transform: rotate(180deg) scale(1); }
            75% { transform: rotate(270deg) scale(1.1); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes quantum-pulse {
            0%, 100% { 
              box-shadow: 
                0 0 20px rgba(59, 130, 246, 0.3),
                0 0 40px rgba(147, 51, 234, 0.2),
                0 0 60px rgba(245, 158, 11, 0.1);
            }
            50% { 
              box-shadow: 
                0 0 40px rgba(59, 130, 246, 0.6),
                0 0 80px rgba(147, 51, 234, 0.4),
                0 0 120px rgba(245, 158, 11, 0.3);
            }
          }
          .animate-shimmer-ultra { animation: shimmer-ultra 4s infinite; }
          .animate-pulse-ultra { animation: pulse-ultra 5s ease-in-out infinite; }
          .animate-spin-luxury { animation: spin-luxury 3s linear infinite; }
          .animate-spin-luxury-reverse { animation: spin-luxury-reverse 4s linear infinite; }
          .animate-float-micro { animation: float-micro 4s ease-in-out infinite; }
          .animate-breathe { animation: breathe 6s ease-in-out infinite; }
          .animate-shimmer-wave { animation: shimmer-wave 2s linear infinite; }
          .animate-slide-shine { animation: slide-shine 3s linear infinite; }
          .animate-cosmic-rotate { animation: cosmic-rotate 15s linear infinite; }
          .animate-quantum-pulse { animation: quantum-pulse 5s ease-in-out infinite; }
          .scale-102 { transform: scale(1.02); }
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #2563eb, #7c3aed);
          }
        `
      }} />

      {/* Ultra Premium Dynamic Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multi-layer cosmic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/40"></div>
        
        {/* Dynamic mouse-responsive gradients */}
        <div 
          className="absolute inset-0 opacity-40 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
              radial-gradient(ellipse 600px 400px at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(147, 51, 234, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse 400px 300px at 50% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 80%)
            `
          }}
        ></div>
        
        {/* Enhanced mesh gradients */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 animate-breathe" style={{
            background: `
              radial-gradient(circle at 30% 30%, hsl(220 85% 50% / 0.25) 0%, transparent 50%), 
              radial-gradient(circle at 70% 70%, hsl(280 85% 60% / 0.2) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, hsl(35 65% 70% / 0.15) 0%, transparent 70%)
            `
          }}></div>
        </div>

        {/* Advanced particle system */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large cosmic orbs */}
          <div className="absolute top-24 left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-breathe shadow-2xl"></div>
          <div className="absolute bottom-24 right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-breathe shadow-2xl" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-amber-400/8 rounded-full blur-3xl animate-breathe shadow-2xl" style={{ animationDelay: '4s' }}></div>
          
          {/* Medium energy particles */}
          <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-2xl animate-cosmic-rotate shadow-xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-rose-400/12 rounded-full blur-2xl animate-cosmic-rotate shadow-xl" style={{ animationDelay: '3s' }}></div>
          
          {/* Small accent particles */}
          <div className="absolute top-20 right-20 w-48 h-48 bg-violet-300/15 rounded-full blur-xl animate-float-micro"></div>
          <div className="absolute bottom-20 left-20 w-52 h-52 bg-emerald-300/15 rounded-full blur-xl animate-float-micro" style={{ animationDelay: '5s' }}></div>
        </div>

        {/* Quantum grid system */}
        <div className="absolute inset-0 overflow-hidden opacity-12">
          <div className="absolute top-0 left-1/5 w-px h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent animate-pulse-ultra"></div>
          <div className="absolute top-0 right-1/5 w-px h-full bg-gradient-to-b from-transparent via-purple-400/60 to-transparent animate-pulse-ultra" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-0 left-3/5 w-px h-full bg-gradient-to-b from-transparent via-amber-400/50 to-transparent animate-pulse-ultra" style={{ animationDelay: '2s' }}></div>
          <div className="absolute left-0 top-1/5 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse-ultra" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute left-0 bottom-1/5 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent animate-pulse-ultra" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-8">
        {/* Ultra Premium Header Enhanced - VERSIÓN CORREGIDA */}
        <div className={`text-center mb-16 md:mb-20 lg:mb-24 transition-all duration-2000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-8 md:mb-10 lg:mb-12">
            {/* Enhanced title system - TAMAÑOS ARMÓNICOS */}
            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 tracking-tight leading-tight mb-1 md:mb-2">
                Categorías Premium
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-amber-500 tracking-tight leading-tight">
                Explora Nuestros Servicios Exclusivos
              </h2>
              
              {/* Advanced decorative constellation - TAMAÑOS PROPORCIONADOS */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8">
                <div className="relative">
                  <Crown className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-amber-500 animate-cosmic-rotate" />
                  <div className="absolute inset-0 bg-amber-400/30 blur-lg rounded-full animate-quantum-pulse"></div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4">
                <Diamond className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 text-cyan-400 animate-float-micro" />
              </div>
              <div className="absolute top-1/4 -right-6 md:-right-8 lg:-right-10 transform -translate-y-1/2">
                <Sparkles className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 text-purple-500 animate-spin-luxury" />
              </div>
              <div className="absolute bottom-1/4 -left-4 md:-left-6 lg:-left-8">
                <Star className="h-4 w-4 md:h-6 md:w-6 text-rose-400 animate-breathe" />
              </div>
              <div className="absolute top-0 left-1/4">
                <Star className="h-3 w-3 md:h-4 md:w-4 text-blue-400 animate-pulse-ultra" />
              </div>
            </div>
            
            {/* Ultra premium underline system - PROPORCIONADO */}
            <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-5 left-1/2 transform -translate-x-1/2">
              <div className="w-24 md:w-32 lg:w-40 xl:w-48 h-1.5 md:h-2 lg:h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-full shadow-xl animate-quantum-pulse"></div>
              <div className="w-16 md:w-24 lg:w-32 xl:w-36 h-0.5 md:h-1 lg:h-1.5 bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 rounded-full shadow-lg mt-1 mx-auto animate-shimmer-wave"></div>
            </div>
          </div>
          
          {/* Enhanced Premium Description Card - ESPACIADO MEJORADO */}
          <div className="relative max-w-4xl mx-auto mt-6 md:mt-8 lg:mt-10">
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-blue-50/90 to-purple-50/70 backdrop-blur-3xl rounded-2xl md:rounded-3xl border border-white/60 shadow-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-purple-500/8 rounded-2xl md:rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/5 via-transparent to-rose-400/5 rounded-2xl md:rounded-3xl"></div>
            
            <div className="relative py-6 md:py-8 lg:py-10 px-6 md:px-10 lg:px-12">
              <div className="text-base md:text-lg lg:text-xl xl:text-2xl text-slate-700 leading-relaxed font-light">
                Descubre una amplia gama de categorías premium diseñadas para satisfacer todas tus necesidades empresariales y personales.
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Premium Search Bar Enhanced - ESPACIADO Y ALINEACIÓN AJUSTADOS */}
        <div className={`max-w-4xl mx-auto mb-20 md:mb-24 lg:mb-28 transition-all duration-2000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex justify-center`}>
          <div className="relative group w-full">
            <UltraPremiumSearch
              value={searchTerm}
              onChange={handleSearch}
              onClear={() => setSearchTerm('')}
              placeholder="Buscar categorías premium..."
              className="pl-20 pr-16 py-6 md:py-8 text-xl md:text-2xl bg-white/95 backdrop-blur-3xl border-0 focus:ring-0 placeholder:text-slate-400 text-slate-700 font-semibold shadow-2xl rounded-3xl w-full"
            >
              {/* Enhanced Search Suggestions */}
              {searchTerm && categories
                .filter(category => 
                  category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  category.description.toLowerCase().includes(searchTerm.toLowerCase()))
                .slice(0, 6)
                .map((category, index) => (
                  <UltraPremiumSearchSuggestion 
                    key={`category-${index}`}
                    icon={<category.icon className="h-6 w-6 text-blue-600" />}
                    label={category.title}
                    description={`${category.businesses} negocios ${category.premium ? `• PREMIUM` : '• Estándar'}`}
                    isPremium={category.premium}
                    onClick={() => {
                      handleSearch(category.title);
                      handleCategoryClick(category.key);
                    }}
                  />
                ))}
              
              {/* Enhanced Recent Searches */}
              {!searchTerm && recentSearches.length > 0 && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-black text-slate-700 flex items-center gap-3">
                      <Eye className="h-5 w-5 text-blue-600" />
                      Búsquedas Recientes
                    </span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-auto p-3 text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-500 font-bold"
                      onClick={clearRecentSearches}
                    >
                      Limpiar Todo
                    </Button>
                  </div>
                  {recentSearches.slice(0, 6).map((term, index) => (
                    <UltraPremiumSearchSuggestion
                      key={`recent-${index}`}
                      icon={<Search className="h-5 w-5 text-slate-500" />}
                      label={term}
                      onClick={() => handleSearch(term)}
                    />
                  ))}
                </div>
              )}
              
              {/* Enhanced Popular Searches */}
              {!searchTerm && popularSearches.length > 0 && (
                <div className="p-6 border-t border-slate-100">
                  <div className="mb-6">
                    <span className="text-lg font-black text-slate-700 flex items-center gap-3">
                      <Zap className="h-5 w-5 text-amber-500" />
                      Búsquedas Populares
                    </span>
                  </div>
                  {popularSearches.map((term, index) => (
                    <UltraPremiumSearchSuggestion
                      key={`popular-${index}`}
                      icon={<Sparkles className="h-5 w-5 text-amber-500" />}
                      label={term}
                      isPremium={true}
                      onClick={() => handleSearch(term)}
                    />
                  ))}
                </div>
              )}
            </UltraPremiumSearch>
          </div>
        </div>

        {/* Ultra Premium Categories Grid Enhanced - ALINEACIÓN MEJORADA */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory === category.key;
            const categoryBusinesses = businessData[category.key] || [];
            const isPriority = index < 6;
            
            return (
              <div key={index} className="space-y-10 flex flex-col items-center">
                <div className="relative group w-full max-w-md">
                  {/* Ultra Premium Glow Matrix */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.accentColor} opacity-25 rounded-3xl blur-3xl group-hover:blur-4xl transition-all duration-1000 ${isSelected ? 'opacity-50 scale-115' : 'group-hover:scale-110'}`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-15 rounded-3xl blur-2xl group-hover:opacity-25 transition-all duration-700`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-tl from-white/20 to-white/5 rounded-3xl transition-opacity duration-500 ${isSelected ? 'opacity-100' : 'group-hover:opacity-100'}`}></div>
                  
                  <Card 
                    className={`relative bg-white/98 backdrop-blur-3xl border border-white/70 overflow-hidden group hover:scale-105 transition-all duration-1000 cursor-pointer shadow-2xl hover:shadow-4xl ${isSelected ? 'ring-4 ring-blue-400/60 shadow-5xl scale-105' : ''} ${category.premium ? 'ring-2 ring-amber-300/40' : ''}`}
                    onClick={() => handleCategoryClick(category.key)}
                  >
                    <CardContent className="p-0">
                      {/* Ultra Premium Header Enhanced */}
                      <div className="relative h-64 overflow-hidden">
                        {/* Premium & Featured Badges System */}
                        <div className="absolute top-4 left-4 z-30 flex gap-2">
                          {category.premium && (
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-2xl blur-sm"></div>
                              <Badge className="relative bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 font-black px-5 py-2 text-sm backdrop-blur-sm flex items-center gap-2">
                                <Crown className="h-4 w-4" />
                                PREMIUM
                              </Badge>
                            </div>
                          )}
                          {category.featured && (
                            <div className="relative">
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl blur-sm"></div>
                              <Badge className="relative bg-gradient-to-r from-purple-500 to-violet-500 text-white border-0 font-black px-5 py-2 text-sm backdrop-blur-sm flex items-center gap-2">
                                <Star className="h-4 w-4" />
                                DESTACADO
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        {/* Dynamic background gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color}`}></div>
                        
                        {/* Ultra Premium Image System */}
                        {categoryImages[category.key] && (
                          <UltraPremiumImage
                            src={categoryImages[category.key]}
                            alt={category.title}
                            className="absolute inset-0"
                            priority={isPriority}
                            onLoad={() => handleImageLoad(category.key)}
                          />
                        )}
                        
                        {/* Enhanced overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Advanced decorative patterns */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute top-8 right-8 w-32 h-32 border-2 border-white/50 rounded-full animate-spin-luxury"></div>
                          <div className="absolute bottom-8 left-8 w-28 h-28 border border-white/40 rounded-full animate-breathe"></div>
                          <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-cosmic-rotate"></div>
                        </div>
                        
                        {/* Enhanced business count badge */}
                        <div className="absolute top-6 right-6 z-20">
                          <div className="relative group/badge">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-blue-200/40 rounded-3xl blur-lg group-hover/badge:blur-xl transition-all duration-500"></div>
                            <div className="relative bg-white/25 backdrop-blur-3xl rounded-3xl border border-white/50 px-6 py-4 shadow-xl">
                              <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg">
                                  <div className="absolute inset-0 bg-white/40 rounded-full animate-ping"></div>
                                </div>
                                <span className="text-white font-black text-lg">{category.businesses}</span>
                                <span className="text-white/90 text-sm font-bold">negocios</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Enhanced premium icon */}
                        <div className="absolute bottom-10 left-10 z-20">
                          <div className="relative group/icon">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/25 rounded-3xl blur-xl group-hover/icon:blur-2xl transition-all duration-500"></div>
                            <div className="relative w-24 h-24 bg-white/30 backdrop-blur-3xl rounded-3xl flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-all duration-700 shadow-2xl">
                              <IconComponent className="h-12 w-12 text-white drop-shadow-2xl" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Ultra Premium Content Enhanced */}
                      <div className="p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <h3 className="text-3xl font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-500 flex-1">
                            {category.title}
                          </h3>
                          <div className="flex gap-2">
                            {category.premium && (
                              <Diamond className="h-7 w-7 text-amber-500 animate-float-micro" />
                            )}
                            {category.featured && (
                              <Gem className="h-6 w-6 text-purple-500 animate-breathe" />
                            )}
                          </div>
                        </div>
                        
                        <p className="text-slate-600 text-xl leading-relaxed mb-10 font-semibold">
                          {category.description}
                        </p>
                        
                        {/* Ultra Premium Action Button Enhanced */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                          <Button className="relative w-full justify-between bg-gradient-to-r from-white via-blue-50/60 to-purple-50/60 hover:from-blue-50 hover:via-purple-50 hover:to-white text-slate-700 hover:text-slate-800 border-2 border-slate-200/60 hover:border-blue-400/60 transition-all duration-700 py-6 px-10 rounded-3xl font-black shadow-xl hover:shadow-2xl text-xl group/button">
                            <span className="flex items-center gap-3">
                              {isSelected ? 'Ocultar Negocios Premium' : 'Explorar Categoría Elite'}
                              {category.premium && <Wand2 className="h-5 w-5 text-amber-500" />}
                            </span>
                            <ArrowRight className={`h-7 w-7 transition-transform duration-700 ${isSelected ? 'rotate-90' : 'group-hover/button:translate-x-2'}`} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Ultra Premium Business List Enhanced */}
                {isSelected && categoryBusinesses.length > 0 && (
                  <div className="space-y-8 ml-12">
                    {categoryBusinesses.map((business, businessIndex) => (
                      <div key={businessIndex} className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                        
                        <Card 
                          className="relative bg-white/95 backdrop-blur-3xl border border-blue-200/70 hover:border-purple-400/70 transition-all duration-700 cursor-pointer shadow-xl hover:shadow-3xl group-hover:scale-102 overflow-hidden"
                          onClick={() => handleBusinessClick(business.url)}
                        >
                          <CardContent className="p-0">
                            {/* Enhanced Business Image */}
                            {business.image && (
                              <div className="relative h-48 overflow-hidden">
                                <UltraPremiumImage
                                  src={business.image}
                                  alt={business.name}
                                  className="w-full h-full"
                                  onLoad={() => handleImageLoad(`business-${businessIndex}`)}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                
                                {/* Premium badge for business */}
                                {business.premium && (
                                  <div className="absolute top-4 right-4">
                                    <div className="relative">
                                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur-sm"></div>
                                      <Badge className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 font-bold px-4 py-2 text-xs flex items-center gap-1">
                                        <Crown className="h-3 w-3" />
                                        VIP
                                      </Badge>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            <div className="p-10">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-4">
                                    <h4 className="font-black text-2xl text-blue-700 group-hover:text-purple-700 transition-colors duration-500">
                                      {business.name}
                                    </h4>
                                    {business.premium && (
                                      <Sparkles className="h-5 w-5 text-amber-500 animate-float-micro" />
                                    )}
                                  </div>
                                  <p className="text-slate-600 text-lg leading-relaxed font-semibold">
                                    {business.description}
                                  </p>
                                </div>
                                <div className="ml-8">
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-xl">
                                      <ExternalLink className="h-7 w-7 text-blue-600 group-hover:text-purple-600 transition-colors duration-500" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ultra Premium No Results Enhanced */}
        {filteredCategories.length === 0 && (
          <div className={`text-center py-40 transition-all duration-2000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-4xl mx-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-purple-50/80 to-amber-50/90 backdrop-blur-3xl rounded-3xl border border-white/70 shadow-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/8 via-purple-500/8 to-amber-500/8 rounded-3xl"></div>
              
              <div className="relative py-20 px-16">
                <div className="relative mb-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-1000"></div>
                  <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-quantum-pulse">
                    <Search className="w-16 h-16 text-white" />
                  </div>
                </div>
                
                <h3 className="text-5xl font-black text-slate-800 mb-8">No se encontraron resultados premium</h3>
                <p className="text-slate-600 text-2xl font-semibold mb-12 leading-relaxed">
                  No se encontraron categorías que coincidan con "{searchTerm}". Explora nuestras sugerencias exclusivas o prueba con otros términos premium.
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center max-w-4xl mx-auto mb-12">
                  {popularSearches.slice(0, 3).map((term, index) => (
                    <Button 
                      key={`suggestion-${index}`} 
                      variant="outline" 
                      className="bg-white/95 border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-500 px-8 py-4 rounded-2xl font-black shadow-xl hover:shadow-2xl text-lg"
                      onClick={() => handleSearch(term)}
                    >
                      <Sparkles className="h-5 w-5 mr-3 text-amber-500" />
                      {term}
                    </Button>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 hover:border-purple-400 hover:from-blue-100 hover:to-purple-100 transition-all duration-700 px-12 py-6 rounded-3xl font-black text-xl shadow-xl hover:shadow-3xl"
                  onClick={() => setSearchTerm('')}
                >
                  <Crown className="h-6 w-6 mr-3 text-amber-500" />
                  Ver Todas las Categorías Premium
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;