/**
 * @file utils.ts
 * @description Funções utilitárias gerais para a aplicação
 * @author Temperamentum
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @function cn
 * @description Utilitário para combinar classes CSS com suporte a condicionais
 * @param {...ClassValue[]} inputs - Classes CSS a serem combinadas
 * @returns {string} String de classes CSS combinadas e otimizadas
 * @example
 * // Uso básico
 * <div className={cn("base-class", isActive && "active-class")}>
 * 
 * // Uso com condicionais múltiplas
 * <button className={cn(
 *   "base-button",
 *   variant === "primary" ? "bg-blue-500" : "bg-gray-200",
 *   size === "large" && "text-lg px-6 py-3",
 *   disabled && "opacity-50 cursor-not-allowed"
 * )}>
 *   Click me
 * </button>
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}