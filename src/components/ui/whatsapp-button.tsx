import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";


interface WhatsAppButtonProps {
  phoneNumber: string; // Formato: 573001234567 (sin el +)
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showOnMobile?: boolean;
}

export function WhatsAppButton({
  phoneNumber,
  message,
  position = "bottom-right",
  showOnMobile = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Mensaje predeterminado basado en el idioma usando el sistema de traducciones
  const defaultMessage = 'Hola, me gustaría obtener más información sobre AQI Tech Services';
  
  const finalMessage = message || defaultMessage;

  // Posiciones CSS basadas en la prop position
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-24 right-6",
    "top-left": "top-24 left-6",
  };

  useEffect(() => {
    // Mostrar el botón después de 2 segundos con animación elegante
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Construir la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;

  if (!isVisible) return null;

  return (
    <div className={`fixed ${positionClasses[position]} z-50 ${!showOnMobile ? "hidden md:flex" : "flex"}`}>
      {/* Efectos de fondo con múltiples capas */}
      <div className="absolute inset-0 w-16 h-16 rounded-full">
        {/* Capa de brillo exterior */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-700 ${
            isHovered ? 'bg-gradient-to-r from-green-300/30 to-emerald-300/30 blur-xl scale-150' : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-lg scale-125'
          }`}
        />
        
        {/* Anillo de pulso */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 opacity-30 animate-ping" />
        
        {/* Anillo secundario */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovered ? 'bg-gradient-to-r from-green-300/40 to-emerald-300/40 scale-110' : 'bg-gradient-to-r from-green-400/30 to-emerald-400/30 scale-105'
          }`}
          style={{ animationDelay: '0.5s' }}
        />
      </div>

      {/* Botón principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-16 h-16 rounded-full transition-all duration-500 transform ${
          isPressed ? 'scale-95' : isHovered ? 'scale-110' : 'scale-100'
        } ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
          boxShadow: isHovered 
            ? '0 25px 50px -12px rgba(16, 185, 129, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            : '0 20px 25px -5px rgba(16, 185, 129, 0.4), 0 10px 10px -5px rgba(16, 185, 129, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        aria-label="Contactar por WhatsApp"
      >
        {/* Overlay de cristal (glassmorphism) */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovered ? 'bg-white/20' : 'bg-white/10'
          }`}
          style={{
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        />

        {/* Brillo interior */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-60'
          }`}
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)',
          }}
        />

        {/* Icono con animaciones */}
        <div className="absolute inset-0 flex items-center justify-center">
          <BsWhatsapp 
            className={`w-7 h-7 text-white transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
            }`}
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))',
            }}
          />
        </div>

        {/* Partículas flotantes */}
        {isHovered && (
          <>
            <div 
              className="absolute w-1 h-1 bg-white rounded-full opacity-80 animate-bounce"
              style={{
                top: '20%',
                left: '15%',
                animationDelay: '0s',
                animationDuration: '2s',
              }}
            />
            <div 
              className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-bounce"
              style={{
                top: '30%',
                right: '20%',
                animationDelay: '0.5s',
                animationDuration: '2.5s',
              }}
            />
            <div 
              className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-70 animate-bounce"
              style={{
                bottom: '25%',
                left: '25%',
                animationDelay: '1s',
                animationDuration: '3s',
              }}
            />
          </>
        )}
      </a>
      
      {/* Tooltip ultra premium */}
      <div 
        className={`absolute right-full mr-4 transition-all duration-500 transform ${
          isHovered ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-2 opacity-0 scale-95'
        } pointer-events-none`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        <div 
          className="relative px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.05)',
            color: '#1f2937',
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" />
            <span>Contactar por WhatsApp</span>
          </div>
        
          {/* Flecha del tooltip con efecto 3D */}
          <div 
            className="absolute top-1/2 left-full transform -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '8px solid rgba(255, 255, 255, 0.95)',
              filter: 'drop-shadow(2px 0 4px rgba(0, 0, 0, 0.1))',
            }}
          />
        </div>
      </div>
    </div>
  );
}