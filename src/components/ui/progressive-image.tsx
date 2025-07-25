import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

// Constantes para optimización
const RENDER_DELAY = 5; // ms
const LOAD_DELAY = 20; // ms
const TRANSITION_DELAY = 100; // ms

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholderSrc?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  wrapperClassName?: string;
  placeholderClassName?: string;
  transitionDuration?: number;
  transitionTimingFunction?: string;
  blur?: number;
  aspectRatio?: string;
  onLoad?: () => void;
  loadingComponent?: React.ReactNode;
  priority?: boolean; // Propiedad para cargar imágenes prioritarias sin lazy loading
  fadeInDuration?: number; // Nueva propiedad para controlar la duración del fade-in
  preload?: boolean; // Nueva propiedad para forzar la precarga de la imagen
}

const ProgressiveImage = ({
  src,
  placeholderSrc = '/placeholder.svg',
  alt,
  className,
  imgClassName,
  wrapperClassName,
  placeholderClassName,
  transitionDuration = 500,
  transitionTimingFunction = 'ease',
  blur = 10,
  aspectRatio = '16/9',
  onLoad,
  loadingComponent,
  priority = false, // Por defecto, no es prioritaria
  fadeInDuration = 300, // Duración del fade-in en ms
  preload = false, // Por defecto, no se precarga
  ...props
}: ProgressiveImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(priority); // Si es prioritaria, se considera visible desde el inicio
  const [isRendered, setIsRendered] = useState<boolean>(false); // Estado para controlar si el componente ya se ha renderizado

  // Efecto para marcar que el componente se ha renderizado (ayuda a evitar flasheo)
  useEffect(() => {
    // Usar requestAnimationFrame para sincronizar con el ciclo de renderizado
    const renderFrame = requestAnimationFrame(() => {
      // Pequeño retraso para asegurar que el DOM se ha actualizado
      const renderTimer = setTimeout(() => {
        setIsRendered(true);
      }, RENDER_DELAY);
      
      return () => clearTimeout(renderTimer);
    });
    
    return () => cancelAnimationFrame(renderFrame);
  }, []);

  useEffect(() => {
    // Si la imagen es prioritaria o debe precargarse, no usamos IntersectionObserver
    if (priority || preload) {
      setIsVisible(true);
      return;
    }
    
    // Configurar IntersectionObserver para cargar la imagen solo cuando sea visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01, // Reducir el umbral para detectar más rápido
        rootMargin: '300px' // Aumentar el margen para precargar imágenes con más anticipación
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, preload]);

  useEffect(() => {
    // Solo cargar la imagen cuando el componente sea visible y esté renderizado
    if (!isVisible || !isRendered) return;

    // Reset states when src changes
    setImgSrc(placeholderSrc);
    setIsLoaded(false);
    setError(false);

    // Función para cargar la imagen con optimizaciones avanzadas
    const loadImage = async () => {
      try {
        // Crear una nueva imagen para precargarla
        const img = new Image();
        
        // Optimizaciones de rendimiento
        img.decoding = 'async'; // Usar decodificación asíncrona
        img.fetchPriority = priority ? 'high' : 'auto'; // Prioridad alta para imágenes importantes
        
        // Crear una promesa para manejar la carga de la imagen
        const loadPromise = new Promise<void>((resolve, reject) => {
          // Configurar eventos antes de asignar src
          img.onload = async () => {
            try {
              // Intentar decodificar la imagen de forma asíncrona para mejorar el rendimiento
              if ('decode' in img) {
                await img.decode().catch(() => {});
              }
              
              // Usar requestAnimationFrame para sincronizar con el ciclo de renderizado
              requestAnimationFrame(() => {
                setImgSrc(src);
                setIsLoaded(true);
                if (onLoad) onLoad();
                resolve();
              });
            } catch (err) {
              // Si hay un error en la decodificación, seguimos mostrando la imagen
              requestAnimationFrame(() => {
                setImgSrc(src);
                setIsLoaded(true);
                if (onLoad) onLoad();
                resolve();
              });
            }
          };

          img.onerror = () => {
            setError(true);
            console.error(`Error loading image: ${src}`);
            reject(new Error(`Failed to load image: ${src}`));
          };
          
          // Finalmente asignar src para iniciar la carga
          img.src = src;
          
          // Si el navegador ya tiene la imagen en caché, puede que onload no se dispare
          if (img.complete) {
            if ('decode' in img) {
              img.decode()
                .then(() => {
                  setImgSrc(src);
                  setIsLoaded(true);
                  if (onLoad) onLoad();
                  resolve();
                })
                .catch(() => {
                  // Incluso si la decodificación falla, intentamos mostrar la imagen
                  setImgSrc(src);
                  setIsLoaded(true);
                  if (onLoad) onLoad();
                  resolve();
                });
            } else {
              setImgSrc(src);
              setIsLoaded(true);
              if (onLoad) onLoad();
              resolve();
            }
          }
        });
        
        // Esperar a que la imagen se cargue con un timeout
        await Promise.race([
          loadPromise,
          new Promise<void>(resolve => setTimeout(resolve, 10000)) // 10 segundos de timeout
        ]);
      } catch (error) {
        console.error('Error en la carga de imagen:', error);
      }
    };

    // Pequeño retraso para evitar flasheo durante la transición
    const loadTimeout = setTimeout(loadImage, LOAD_DELAY);

    return () => {
      clearTimeout(loadTimeout);
    };
  }, [src, placeholderSrc, onLoad, isVisible, isRendered, priority]);

  // Determinar si debemos mostrar el placeholder o el componente de carga
  const showPlaceholder = (!isLoaded || !isVisible) && !loadingComponent;
  const showLoadingComponent = (!isLoaded || !isVisible) && loadingComponent;
  
  // Determinar la visibilidad de la imagen
  const imageVisible = isLoaded && isVisible && !error;
  
  return (
    <div
      className={cn(
        'overflow-hidden relative',
        wrapperClassName
      )}
      style={{ aspectRatio }}
      ref={imgRef}
    >
      {/* Placeholder shimmer effect - Siempre presente pero con opacidad controlada */}
      {showPlaceholder && (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer",
            placeholderClassName
          )}
          style={{
            backgroundSize: '200% 100%',
            zIndex: 1,
            opacity: isRendered ? 1 : 0, // Evitar flasheo inicial
            transition: `opacity ${fadeInDuration}ms ease-in`,
            willChange: 'opacity',
            transform: 'translateZ(0)', // Forzar aceleración por hardware
          }}
        />
      )}
      
      {/* Custom loading component - Siempre presente pero con opacidad controlada */}
      {showLoadingComponent && (
        <div 
          className="absolute inset-0" 
          style={{ 
            zIndex: 1,
            opacity: isRendered ? 1 : 0, // Evitar flasheo inicial
            transition: `opacity ${fadeInDuration}ms ease-in`,
            willChange: 'opacity',
            transform: 'translateZ(0)', // Forzar aceleración por hardware
          }}
        >
          {loadingComponent}
        </div>
      )}
      
      {/* Imagen principal con técnica de crossfade */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: imageVisible ? 1 : 0,
          transition: `opacity ${transitionDuration}ms ${transitionTimingFunction} ${TRANSITION_DELAY}ms`,
          willChange: 'opacity',
          zIndex: imageVisible ? 2 : 0,
        }}
      >
        <img
          src={isVisible ? imgSrc : placeholderSrc}
          alt={alt}
          className={cn(
            'w-full h-full object-cover',
            imgClassName
          )}
          style={{
            filter: imageVisible ? 'none' : `blur(${blur}px)`,
            transform: imageVisible ? 'scale(1)' : 'scale(1.02)', // Reducir la escala para una transición más sutil
            backfaceVisibility: 'hidden', // Mejora el rendimiento de las transformaciones
            WebkitBackfaceVisibility: 'hidden',
            imageRendering: 'auto', // Optimizar la calidad de renderizado
          }}
          loading={priority ? "eager" : "lazy"} // Usar eager loading para imágenes prioritarias
          fetchpriority={priority ? "high" : "auto"} // Atributo HTML para prioridad de carga
          {...props}
        />
      </div>

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center p-4">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p className="mt-2 text-sm text-gray-500">No se pudo cargar la imagen</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { ProgressiveImage };