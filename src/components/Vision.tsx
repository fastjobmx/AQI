import { Card, CardContent } from "@/components/ui/card";
import { Compass, Globe, Shield, Leaf, Calendar, Users2, LayoutGrid, BarChart, Sparkles } from "lucide-react";

const Vision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-blue-50/30 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      
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
              <span className="text-premium-gradient font-bold text-lg">Nuestra Visión</span>
            </div>
          </div>
          
          {/* Título con efectos premium */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 animate-shimmer-slow" style={{backgroundSize: '200% auto'}}>Nuestra Visión 2030</span>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </h2>
          
          {/* Descripción mejorada */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -z-10"></div>
            <p className="text-xl text-slate-700 leading-relaxed p-6 font-medium">
              Ser la plataforma integral líder en Colombia que conecta el mundo con nuestras riquezas turísticas y servicios profesionales de excelencia
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {[
            {
              icon: Globe,
              title: "Alcance Global",
              description: "Conectando Colombia con usuarios globales",
              gradientFrom: "from-blue-500",
              gradientTo: "to-blue-700"
            },
            {
              icon: Shield,
              title: "Servicios Confiables",
              description: "Experiencias y servicios verificados y seguros",
              gradientFrom: "from-amber-400",
              gradientTo: "to-amber-600"
            },
            {
              icon: Compass,
              title: "Tecnología Avanzada",
              description: "Impulsado por las últimas innovaciones tecnológicas",
              gradientFrom: "from-purple-500",
              gradientTo: "to-purple-700"
            },
            {
              icon: Leaf,
              title: "Sostenibilidad",
              description: "Turismo responsable y desarrollo sostenible",
              gradientFrom: "from-green-500",
              gradientTo: "to-green-700"
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-3xl border border-white/50 transition-all duration-300 group-hover:shadow-2xl -z-10"></div>
              <div className="p-10">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-${item.gradientFrom.split('-')[1]}-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Vision Content */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10 rounded-3xl -z-10"></div>
          <div className="grid lg:grid-cols-3 gap-8 p-10 rounded-3xl border border-white/50 backdrop-blur-sm">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Colombia 2030: Plataforma Integral</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Para el año 2030, seremos la plataforma integral líder que conecta a Colombia con el mundo, 
                  ofreciendo tanto experiencias turísticas excepcionales como servicios profesionales de 
                  la más alta calidad.
                </p>
                <p>
                  Facilitamos conexiones auténticas entre viajeros y destinos, así como entre clientes y 
                  profesionales especializados, todo respaldado por tecnología de vanguardia y estándares de calidad excepcionales.
                </p>
                <p>
                  Nuestro compromiso con la sostenibilidad y la excelencia garantiza que tanto las experiencias 
                  turísticas como los servicios profesionales contribuyan al desarrollo positivo del país.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl -z-10"></div>
                <div className="p-8 text-center rounded-2xl border border-white/50 backdrop-blur-sm">
                  <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-100 mb-3 group-hover:scale-110 transition-transform duration-300">2030</div>
                  <div className="text-white font-medium">Año objetivo</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 -z-10"></div>
                <div className="p-8 rounded-2xl">
                  <h4 className="font-semibold text-primary mb-5 flex items-center gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>Impacto Esperado</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 flex items-center gap-2">
                        <Users2 className="h-4 w-4" />
                        <span>Usuarios activos</span>
                      </span>
                      <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">1M+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 flex items-center gap-2">
                        <LayoutGrid className="h-4 w-4" />
                        <span>Servicios disponibles</span>
                      </span>
                      <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">500+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600 flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span>Satisfacción cliente</span>
                      </span>
                      <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-amber-700">98%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;