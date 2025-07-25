import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Users, 
  Clock, 
  Star, 
  ArrowRight, 
  Heart,
  Shield,
  Award
} from "lucide-react";

// Import generated images
import coffeeHero from "@/assets/coffee-hero.jpg";
import whaleWatching from "@/assets/whale-watching.jpg";
import ciudadPerdida from "@/assets/ciudad-perdida.jpg";

const FeaturedExperiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Coffee Tour Premium en el Eje Cafetero",
      location: "Quindío, Colombia",
      duration: "8 horas",
      rating: 4.9,
      reviews: 234,
      price: "299.000",
      image: coffeeHero,
      category: "Gastronomía",
      featured: true,
      highlights: ["Hacienda tradicional", "Cata profesional", "Transporte incluido"]
    },
    {
      id: 2,
      title: "Avistamiento de Ballenas en el Pacífico",
      location: "Chocó, Colombia",
      duration: "6 horas",
      rating: 4.8,
      reviews: 167,
      price: "450.000",
      image: whaleWatching,
      category: "Ecoturismo",
      featured: true,
      highlights: ["Temporada de ballenas", "Guía especializado", "Almuerzo incluido"]
    },
    {
      id: 3,
      title: "Trekking Ciudad Perdida",
      location: "Magdalena, Colombia",
      duration: "4 días",
      rating: 4.7,
      reviews: 89,
      price: "890.000",
      image: ciudadPerdida,
      category: "Aventura",
      featured: false,
      highlights: ["Sitio arqueológico", "Guía indígena", "Campamento incluido"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header mejorado con efectos premium */}
        <div className="text-center mb-20 relative">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-amber-500/5 rounded-full blur-3xl"></div>
          
          {/* Badge premium */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-full blur-md"></div>
            <div className="relative inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-blue-200/50 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-amber-500 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-white drop-shadow-md" />
              </div>
              <span className="text-premium-gradient font-bold text-lg">Experiencias Destacadas</span>
            </div>
          </div>
          
          {/* Título con efectos premium */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 animate-shimmer-slow" style={{backgroundSize: '200% auto'}}>Experiencias Premium en Colombia</span>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </h2>
          
          {/* Descripción mejorada */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -z-10"></div>
            <p className="text-xl text-slate-700 leading-relaxed p-6 font-medium">
              Descubre las mejores experiencias turísticas y servicios profesionales seleccionados especialmente para ti
            </p>
          </div>
        </div>

        {/* Experiences Grid - Diseño Premium */}
        <div className="grid lg:grid-cols-3 gap-10 mb-16">
          {experiences.map((experience, index) => (
            <Card 
              key={experience.id}
              className={`luxury-card border-0 overflow-hidden group hover:scale-[1.03] transition-all duration-700 shadow-2xl hover:shadow-3xl ${
                experience.featured ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className={`relative ${experience.featured ? 'h-96' : 'h-80'} overflow-hidden`}>
                  {/* Background Image with enhanced effects */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${experience.image})`
                    }}
                  ></div>
                  
                  {/* Enhanced Gradient Overlay with glassmorphism */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Content with premium styling */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                    {/* Top badges with glassmorphism */}
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        {experience.featured && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 blur-sm rounded-full"></div>
                            <Badge className="relative bg-gradient-to-r from-amber-400 to-amber-600 text-white font-bold px-4 py-1.5 border border-white/20 shadow-lg">
                              <Star className="h-3.5 w-3.5 fill-white mr-1" />
                              Destacado
                            </Badge>
                          </div>
                        )}
                        <Badge variant="secondary" className="bg-white/30 backdrop-blur-md text-white border border-white/30 shadow-lg px-4 py-1.5 font-bold">
                          {experience.category}
                        </Badge>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="w-12 h-12 bg-white/30 backdrop-blur-md hover:bg-white/40 rounded-full border border-white/30 shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* Bottom content with enhanced styling */}
                    <div>
                      {/* Rating and reviews with premium styling */}
                      <div className="flex items-center gap-5 mb-4">
                        <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                          <Star className="h-5 w-5 text-yellow-400 fill-current drop-shadow-md" />
                          <span className="text-sm font-bold">{experience.rating}</span>
                          <span className="text-xs text-white/90">({experience.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                          <Clock className="h-4 w-4" />
                          {experience.duration}
                        </div>
                      </div>

                      {/* Title and location with enhanced typography */}
                      <h3 className="text-2xl font-bold mb-3 line-clamp-2 drop-shadow-md">{experience.title}</h3>
                      <p className="text-white/90 text-sm mb-5 flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                          <Users className="h-3 w-3" />
                        </span>
                        {experience.location}
                      </p>

                      {/* Highlights with glassmorphism */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {experience.highlights.map((highlight, idx) => (
                          <span 
                            key={idx}
                            className="text-xs bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Price and CTA with premium styling */}
                      <div className="flex items-center justify-between mt-2">
                        <div>
                          <span className="text-sm text-white/90 font-medium">Desde</span>
                          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                            ${experience.price}
                            <span className="text-sm text-white/90 ml-1">COP</span>
                          </div>
                        </div>
                        <Button 
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-blue-900/50 hover:scale-105 border border-blue-500/50"
                          size="sm"
                        >
                          Reservar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Enhanced play button overlay for featured */}
                    {experience.featured && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <Button 
                          variant="ghost" 
                          size="lg"
                          className="w-20 h-20 bg-white/30 backdrop-blur-md hover:bg-white/40 rounded-full border border-white/30 shadow-2xl transform transition-transform duration-500 hover:scale-110"
                        >
                          <Play className="h-10 w-10 ml-1 drop-shadow-lg" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators - Diseño Premium */}
        <div className="mt-16 relative">
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
          
          {/* Línea decorativa */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-16 bg-slate-200"></div>
            <div className="px-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="h-px w-16 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Card 1 - Seguridad Garantizada */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/50 rounded-2xl shadow-xl backdrop-blur-md border border-white/50 -z-10 transition-all duration-300 group-hover:shadow-2xl"></div>
              <div className="flex flex-col items-center text-center p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">Seguro y Confiable</h3>
                <p className="text-slate-600 leading-relaxed">Todas nuestras experiencias cumplen con los más altos estándares de seguridad y calidad</p>
              </div>
            </div>
            
            {/* Card 2 - Guías Locales */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/50 rounded-2xl shadow-xl backdrop-blur-md border border-white/50 -z-10 transition-all duration-300 group-hover:shadow-2xl"></div>
              <div className="flex flex-col items-center text-center p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">Guías Locales</h3>
                <p className="text-slate-600 leading-relaxed">Nuestros guías son profesionales con amplia experiencia y conocimiento local especializado</p>
              </div>
            </div>
            
            {/* Card 3 - Calidad Premium */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/50 rounded-2xl shadow-xl backdrop-blur-md border border-white/50 -z-10 transition-all duration-300 group-hover:shadow-2xl"></div>
              <div className="flex flex-col items-center text-center p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">Calidad Premium</h3>
                <p className="text-slate-600 leading-relaxed">Seleccionamos cuidadosamente cada experiencia para garantizar la mejor calidad y satisfacción</p>
              </div>
            </div>
            
            {/* Card 4 - 100% Satisfacción */}
            <div className="group relative">
              <div className="absolute inset-0 bg-white/50 rounded-2xl shadow-xl backdrop-blur-md border border-white/50 -z-10 transition-all duration-300 group-hover:shadow-2xl"></div>
              <div className="flex flex-col items-center text-center p-8">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Heart className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">100% Satisfacción</h3>
                <p className="text-slate-600 leading-relaxed">Estamos disponibles en todo momento para asistirte durante tu experiencia con atención personalizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;