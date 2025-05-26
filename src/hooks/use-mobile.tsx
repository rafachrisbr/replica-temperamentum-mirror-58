/**
 * @file use-mobile.tsx
 * @description Hook personalizado para detectar se o dispositivo é móvel
 * @author Temperamentum
 */

import * as React from "react"

/**
 * @constant {number} MOBILE_BREAKPOINT
 * @description Ponto de quebra para considerar um dispositivo como móvel (em pixels)
 */
const MOBILE_BREAKPOINT = 768

/**
 * @function useIsMobile
 * @description Hook que verifica se a largura da tela é menor que o breakpoint móvel
 * @returns {boolean} true se o dispositivo for considerado móvel, false caso contrário
 * @example
 * const isMobile = useIsMobile();
 * 
 * return (
 *   <div>
 *     {isMobile ? (
 *       <MobileNavigation />
 *     ) : (
 *       <DesktopNavigation />
 *     )}
 *   </div>
 * );
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Cria um media query listener para detectar mudanças no tamanho da tela
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Função para atualizar o estado baseado na largura da janela
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Adiciona o listener e define o estado inicial
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup: remove o listener quando o componente é desmontado
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Retorna o estado como boolean (false se undefined)
  return !!isMobile
}