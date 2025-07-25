import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Users, Zap, Sparkles, Building, Clock, BarChart } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Header mejorado */}
        <div className="text-center mb-20 relative">
          {/* Badge premium */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-full blur-md"></div>
            <div className="relative inline-flex items-center gap-3 bg-white/80 backdrop-blur-md px-8 py-3 rounded-full border border-blue-200/50 shadow-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white drop-shadow-md" />
              </div>
              <span className="text-premium-gradient font-bold text-lg">Nuestra Misión</span>
            </div>
          </div>
          
          {/* Título con efectos premium */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 animate-shimmer-slow" style={{backgroundSize: '200% auto'}}>¿Quiénes Somos?</span>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </h2>
          
          {/* Descripción mejorada */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -z-10"></div>
            <p className="text-xl text-slate-700 leading-relaxed p-6 font-medium">
              En AQI – Advanced Quality Intelligence Tech Services, impulsamos la innovación y la transformación digital en Colombia.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Mejorado con glassmorfismo */}
          <div className="space-y-8">
            <Card className="luxury-card border-0 p-8 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                      <Target className="h-6 w-6 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2">Innovación y Calidad</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Creamos soluciones disruptivas y de alta calidad, con un enfoque en la excelencia y la mejora continua. 
                      Más de 500 proyectos exitosos nos respaldan con un 98% de satisfacción del cliente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-card border-0 p-8 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 mb-2">Conectamos Oportunidades</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Generamos alianzas y redes de valor para potenciar el crecimiento de nuestros clientes y aliados. 
                      Hemos transformado más de 150 empresas y conectado a más de 10,000 usuarios.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="luxury-card border-0 p-8 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md"></div>
                    <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white drop-shadow-md" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 mb-2">Transformación Digital</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Acompañamos a empresas en su proceso de transformación digital con soluciones integrales y estratégicas. 
                      Ofrecemos soporte premium 24/7 para garantizar el éxito de cada proyecto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats - Mejorados con efectos premium */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 luxury-card border-0 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <BarChart className="h-4 w-4 text-blue-600" />
                <span>Proyectos Exitosos</span>
              </div>
            </div>
            <div className="text-center p-6 luxury-card border-0 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <Users className="h-4 w-4 text-amber-600" />
                <span>Satisfacción Cliente</span>
              </div>
            </div>
            <div className="text-center p-6 luxury-card border-0 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <Building className="h-4 w-4 text-purple-600" />
                <span>Empresas Transformadas</span>
              </div>
            </div>
            <div className="text-center p-6 luxury-card border-0 bg-white/70 backdrop-blur-xl shadow-3xl hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-600 flex items-center justify-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>Soporte Premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;