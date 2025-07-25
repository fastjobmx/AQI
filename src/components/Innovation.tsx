import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Smartphone, CreditCard, Users, Building, Handshake, Sparkles } from "lucide-react";

const Innovation = () => {
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
                <Zap className="h-5 w-5 text-white drop-shadow-md" />
              </div>
              <span className="text-premium-gradient font-bold text-lg">Innovación</span>
            </div>
          </div>
          
          {/* Título con efectos premium */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-amber-500 animate-shimmer-slow" style={{backgroundSize: '200% auto'}}>Nuestros Servicios</span>
            <div className="w-40 h-1 bg-gradient-to-r from-blue-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </h2>
          
          {/* Descripción mejorada */}
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl -z-10"></div>
            <p className="text-xl text-slate-700 leading-relaxed p-6 font-medium">
              Soluciones tecnológicas de élite diseñadas para impulsar el crecimiento empresarial
            </p>
          </div>
        </div>

        {/* Services Grid - Mejorado con glassmorfismo */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {[
            {
              icon: CreditCard,
              title: "Tarjetas NFC",
              description: "Tarjetas NFC personalizadas para empresas y profesionales, facilitando el networking y la conexión digital instantánea.",
              gradientFrom: "from-blue-500",
              gradientTo: "to-blue-700"
            },
            {
              icon: Smartphone,
              title: "Herramientas Digitales",
              description: "Desarrollo de herramientas digitales de última generación adaptadas a las necesidades específicas de cada cliente.",
              gradientFrom: "from-amber-400",
              gradientTo: "to-amber-600"
            },
            {
              icon: Building,
              title: "Transformación Digital",
              description: "Acompañamos a empresas en su proceso de transformación digital con soluciones integrales y estratégicas.",
              gradientFrom: "from-purple-500",
              gradientTo: "to-purple-700"
            },
            {
              icon: Handshake,
              title: "Alianzas Estratégicas",
              description: "Creamos alianzas estratégicas para generar un ecosistema digital colaborativo y de alto impacto.",
              gradientFrom: "from-green-500",
              gradientTo: "to-green-700"
            }
          ].map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-2xl shadow-3xl border border-white/50 transition-all duration-300 group-hover:shadow-2xl -z-10"></div>
              <div className="p-10">
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-${service.gradientFrom.split('-')[1]}-500/20 rounded-full blur-md group-hover:blur-xl transition-all duration-300`}></div>
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${service.gradientFrom} ${service.gradientTo} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Platform Technology Highlight - Mejorado */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-blue-500/5 to-blue-600/10 rounded-3xl -z-10"></div>
          <div className="p-10 rounded-3xl border border-white/50 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <Zap className="h-6 w-6 text-white drop-shadow-md" />
                  </div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Tecnología de Vanguardia</h3>
                </div>
                
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Utilizamos tecnología de última generación para crear soluciones digitales innovadoras. 
                    Nuestras tarjetas NFC y herramientas digitales están diseñadas para potenciar el crecimiento 
                    de empresas, marcas y profesionales en todo Colombia.
                  </p>
                  <p>
                    Facilitamos conexiones auténticas y generamos alianzas estratégicas que transforman 
                    comunidades y promueven la innovación en el ecosistema digital colombiano.
                  </p>
                </div>

                <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Conoce Nuestras Soluciones
                    <Sparkles className="h-4 w-4" />
                  </span>
                </button>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 text-white relative overflow-hidden rounded-2xl shadow-xl">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-6">Resultados que Hablan</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                      <div className="text-sm opacity-90">Proyectos Exitosos</div>
                    </div>
                    <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                      <div className="text-sm opacity-90">Satisfacción Cliente</div>
                    </div>
                    <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
                      <div className="text-sm opacity-90">Empresas Transformadas</div>
                    </div>
                    <div className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm opacity-90">Soporte Premium</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;