/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain a a interface to represnt mathematical functions.
 */

/**
 * Defines an interface for mathematical functions that can be evaluated.
 */
export interface MathematicalFunction {
  /**
   * Evaluates the function at the specified point.
   *
   * @param pointToEvaulate - The numeric value at which the function will be evaluated.
   * @returns The result of evaluating the function at `value`.
   */
  evaluate(pointToEvaulate: number): number;
}

/**
 * Defines an interface for not complete mathematical functions.
 */
export interface IncompleteDomain {
  /**
   * Determines whether the function is defined at the specified point.
   *
   * @param pointToEvaulate - The numeric value to check.
   * @returns `true` if the function is defined at `pointToEvaulate`, otherwise `false`.
   */
  isDefinedOnThisPoint(pointToEvaulate: number): boolean;
}
