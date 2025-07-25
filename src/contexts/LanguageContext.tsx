import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definir los tipos para las traducciones
interface Translations {
  [key: string]: string;
}

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

// Traducciones básicas
const translations: Record<string, Translations> = {
  es: {
    // Hero section
    'hero.title': 'INTELIGENCIA ARTIFICIAL AVANZADA',
    'hero.subtitle': 'INNOVACIÓN DIGITAL',
    'hero.description': 'Transformamos tu negocio con soluciones de IA de vanguardia',
    'hero.cta': 'Comenzar Ahora',
    'hero.services.web': 'Desarrollo Web',
    'hero.services.ai': 'Inteligencia Artificial',
    'hero.services.mobile': 'Apps Móviles',
    'hero.services.design': 'Diseño UX/UI',
    'hero.metrics.projects': 'Proyectos Completados',
    'hero.metrics.clients': 'Clientes Satisfechos',
    'hero.metrics.experience': 'Años de Experiencia',
    'hero.metrics.success': 'Tasa de Éxito',
  },
  en: {
    // Hero section
    'hero.title': 'ADVANCED ARTIFICIAL INTELLIGENCE',
    'hero.subtitle': 'DIGITAL INNOVATION',
    'hero.description': 'We transform your business with cutting-edge AI solutions',
    'hero.cta': 'Get Started',
    'hero.services.web': 'Web Development',
    'hero.services.ai': 'Artificial Intelligence',
    'hero.services.mobile': 'Mobile Apps',
    'hero.services.design': 'UX/UI Design',
    'hero.metrics.projects': 'Completed Projects',
    'hero.metrics.clients': 'Satisfied Clients',
    'hero.metrics.experience': 'Years of Experience',
    'hero.metrics.success': 'Success Rate',
  }
};

// Crear el contexto
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Proveedor del contexto
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>('es'); // Español por defecto

  // Función de traducción
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;