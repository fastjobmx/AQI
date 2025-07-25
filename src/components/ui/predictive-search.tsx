import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SearchSuggestion {
  text: string;
  type: 'correction' | 'suggestion' | 'recent' | 'popular';
  category?: string;
}

interface PredictiveSearchProps {
  placeholder?: string;
  value: string;
  onChange: (term: string) => void;
  onClear?: () => void;
  className?: string;
  suggestions?: SearchSuggestion[];
  minChars?: number;
  maxSuggestions?: number;
  recentSearches?: string[];
  popularSearches?: string[];
  onSuggestionSelected?: (suggestion: SearchSuggestion) => void;
  onRecentSearchClear?: () => void;
  children?: React.ReactNode;
}

const PredictiveSearch = ({
  placeholder = 'Buscar...',
  value,
  onChange,
  onClear,
  className,
  suggestions: externalSuggestions,
  minChars = 2,
  maxSuggestions = 6,
  recentSearches = [],
  popularSearches = [],
  onSuggestionSelected,
  onRecentSearchClear,
  children
}: PredictiveSearchProps) => {
  const [searchTerm, setSearchTerm] = useState(value || '');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Actualizar el término de búsqueda cuando cambia el valor externo
  useEffect(() => {
    setSearchTerm(value || '');
  }, [value]);

  // Simulated correction algorithm (in a real app, this would be more sophisticated)
  const getSpellingCorrections = (term: string): SearchSuggestion[] => {
    // Common misspellings in Spanish
    const corrections: Record<string, string> = {
      'hoteles': 'hoteles',
      'oteles': 'hoteles',
      'joteles': 'hoteles',
      'restaurantes': 'restaurantes',
      'restaurante': 'restaurantes',
      'restorantes': 'restaurantes',
      'turismo': 'turismo',
      'turísmo': 'turismo',
      'turimo': 'turismo',
      'servicio': 'servicios',
      'servicios': 'servicios',
      'servicos': 'servicios',
      'bellesa': 'belleza',
      'belleza': 'belleza',
      'beleza': 'belleza',
      'deportes': 'deportes',
      'deporte': 'deportes',
      'deportivos': 'deportes',
      'arte': 'arte',
      'artes': 'arte',
      'artistica': 'arte',
      'inmobiliaria': 'inmobiliaria',
      'inmobiliarias': 'inmobiliaria',
      'inmuebles': 'inmobiliaria',
      'automotriz': 'automotriz',
      'autos': 'automotriz',
      'carros': 'automotriz',
      'entretenimiento': 'entretenimiento',
      'diversion': 'entretenimiento',
      'diversión': 'entretenimiento',
      'salud': 'salud',
      'salud': 'salud',
      'medico': 'salud',
      'médico': 'salud',
    };

    const words = term.toLowerCase().split(' ');
    const correctedWords = words.map(word => corrections[word] || word);
    const corrected = correctedWords.join(' ');

    if (corrected !== term.toLowerCase() && corrected.includes(term.toLowerCase())) {
      return [{ text: corrected, type: 'correction' }];
    }
    return [];
  };

  // Generate suggestions based on the search term
  const generateSuggestions = (term: string): SearchSuggestion[] => {
    if (!term || term.length < minChars) return [];

    // If external suggestions are provided, use them
    if (externalSuggestions) {
      return externalSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(term.toLowerCase())
      ).slice(0, maxSuggestions);
    }

    // Otherwise generate suggestions based on categories and common terms
    const categories = [
      { name: 'hoteles', terms: ['hoteles', 'alojamiento', 'hospedaje', 'hotel boutique'] },
      { name: 'restaurantes', terms: ['restaurantes', 'comida', 'gastronomía', 'café', 'cafetería'] },
      { name: 'turismo', terms: ['turismo', 'viajes', 'excursiones', 'aventuras', 'tours'] },
      { name: 'servicios', terms: ['servicios', 'profesionales', 'técnicos', 'especializados'] },
      { name: 'belleza', terms: ['belleza', 'estética', 'spa', 'peluquería', 'barbería'] },
      { name: 'deportes', terms: ['deportes', 'fitness', 'gimnasio', 'entrenamiento'] },
      { name: 'arte', terms: ['arte', 'fotografía', 'galería', 'cultura', 'creatividad'] },
      { name: 'inmobiliaria', terms: ['inmobiliaria', 'propiedades', 'bienes raíces', 'apartamentos'] },
      { name: 'automotriz', terms: ['automotriz', 'autos', 'vehículos', 'talleres', 'repuestos'] },
      { name: 'entretenimiento', terms: ['entretenimiento', 'eventos', 'fiestas', 'diversión'] },
      { name: 'salud', terms: ['salud', 'médicos', 'clínicas', 'bienestar', 'terapias'] },
    ];

    let results: SearchSuggestion[] = [];

    // Add spelling corrections
    results = [...results, ...getSpellingCorrections(term)];

    // Add category-based suggestions
    categories.forEach(category => {
      const matchingTerms = category.terms.filter(t => 
        t.toLowerCase().includes(term.toLowerCase()) && 
        !results.some(r => r.text.toLowerCase() === t.toLowerCase())
      );
      
      if (matchingTerms.length > 0) {
        results.push({
          text: matchingTerms[0],
          type: 'suggestion',
          category: category.name
        });
      }
    });

    // Add recent searches that match
    const matchingRecent = recentSearches
      .filter(recent => 
        recent.toLowerCase().includes(term.toLowerCase()) && 
        !results.some(r => r.text.toLowerCase() === recent.toLowerCase())
      )
      .map(text => ({ text, type: 'recent' as const }));
    
    results = [...results, ...matchingRecent];

    // Add popular searches that match
    const matchingPopular = popularSearches
      .filter(popular => 
        popular.toLowerCase().includes(term.toLowerCase()) && 
        !results.some(r => r.text.toLowerCase() === popular.toLowerCase())
      )
      .map(text => ({ text, type: 'popular' as const }));
    
    results = [...results, ...matchingPopular];

    return results.slice(0, maxSuggestions);
  };

  useEffect(() => {
    if (searchTerm.length >= minChars) {
      const newSuggestions = generateSuggestions(searchTerm);
      setSuggestions(newSuggestions);
      setShowSuggestions(newSuggestions.length > 0 && isFocused);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setActiveSuggestionIndex(-1);
  }, [searchTerm, isFocused]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onChange(value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    if (searchTerm.length >= minChars && suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      setIsFocused(false);
      setShowSuggestions(false);
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter') {
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        handleSuggestionClick(suggestions[activeSuggestionIndex]);
      } else {
        onChange(searchTerm);
        setShowSuggestions(false);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setSearchTerm(suggestion.text);
    onChange(suggestion.text);
    setShowSuggestions(false);
    if (onSuggestionSelected) {
      onSuggestionSelected(suggestion);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onChange('');
    if (onClear) {
      onClear();
    }
    inputRef.current?.focus();
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    onChange(searchTerm);
    setShowSuggestions(false);
  };

  return (
    <div className={cn('relative w-full', className)}>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-2xl blur-lg group-focus-within:blur-xl transition-all duration-300"></div>
        <div className="relative flex items-center bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl overflow-hidden">
          <Search className="absolute left-6 text-slate-400 h-5 w-5" />
          <Input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyDown}
            className="pl-14 pr-14 py-4 text-lg bg-transparent border-0 focus:ring-0 placeholder:text-slate-400 text-slate-700 font-medium"
          />
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute right-16 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          <Button
            onClick={handleSearch}
            className="absolute right-2 h-10 w-10 p-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md"
            aria-label="Buscar"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {children}

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div
          ref={suggestionsRef}
          className="absolute z-50 w-full mt-2 bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-white/60 overflow-hidden"
        >
          <div className="max-h-80 overflow-y-auto py-2">
            {suggestions.map((suggestion, index) => {
              const isActive = index === activeSuggestionIndex;
              
              return (
                <div
                  key={`${suggestion.type}-${suggestion.text}`}
                  className={cn(
                    'px-6 py-3 cursor-pointer flex items-center gap-3 transition-colors',
                    isActive ? 'bg-blue-50' : 'hover:bg-blue-50/50'
                  )}
                  onClick={() => handleSuggestionClick(suggestion)}
                  onMouseEnter={() => setActiveSuggestionIndex(index)}
                >
                  {suggestion.type === 'correction' && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                        <Search className="h-4 w-4 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-slate-800 font-medium">¿Quisiste decir: <span className="text-blue-600">{suggestion.text}</span>?</p>
                      </div>
                    </div>
                  )}

                  {suggestion.type === 'suggestion' && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Search className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-slate-800 font-medium">{suggestion.text}</p>
                        {suggestion.category && (
                          <p className="text-xs text-slate-500">en {suggestion.category}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {suggestion.type === 'recent' && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-800 font-medium">{suggestion.text}</p>
                    </div>
                  )}

                  {suggestion.type === 'popular' && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <p className="text-slate-800 font-medium">{suggestion.text}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Recent searches section */}
          {searchTerm.length < minChars && recentSearches.length > 0 && (
            <div className="border-t border-slate-200">
              <div className="px-6 py-3 flex justify-between items-center">
                <h3 className="text-sm font-semibold text-slate-500">Búsquedas recientes</h3>
                {onRecentSearchClear && (
                  <button
                    onClick={onRecentSearchClear}
                    className="text-xs text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Limpiar
                  </button>
                )}
              </div>
              <div className="max-h-40 overflow-y-auto pb-2">
                {recentSearches.slice(0, 5).map((search, index) => (
                  <div
                    key={`recent-${index}`}
                    className="px-6 py-2 cursor-pointer hover:bg-blue-50/50 transition-colors flex items-center gap-3"
                    onClick={() => {
                      setSearchTerm(search);
                      onChange(search);
                    }}
                  >
                    <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600">{search}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Componente SearchSuggestion para mostrar sugerencias individuales
interface SearchSuggestionComponentProps {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  onClick?: () => void;
}

const SearchSuggestionComponent = ({
  icon,
  label,
  description,
  onClick
}: SearchSuggestionComponentProps) => {
  return (
    <div
      className="flex items-center px-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors"
      onClick={onClick}
    >
      {icon && (
        <div className="mr-3 flex-shrink-0">
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-800 truncate">{label}</p>
        {description && (
          <p className="text-xs text-slate-500 truncate">{description}</p>
        )}
      </div>
    </div>
  );
};

export { PredictiveSearch, SearchSuggestionComponent };
export type { SearchSuggestion };