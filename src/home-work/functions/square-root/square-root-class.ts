/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain a class to implement the square root class.
 */

import {MathematicalFunction, IncompleteDomain} from '../function-interface';

export class SquareRoot implements MathematicalFunction, IncompleteDomain {
  /**
   * Evaluates the square root at the specified point.
   *
   * @param pointToEvaulate - The numeric value at which the square root will be evaluated.
   * @returns The result of evaluating the square root function at pointToEvaulate`.
   */
  evaluate(pointToEvaulate: number): number {
    return Math.sqrt(pointToEvaulate);
  }

  /**
   * Determines if the square root is defined at the specified point.
   *
   * @param pointToEvaulate - The numeric value to check.
   * @returns `true` if the function is defined at `pointToEvaulate`, otherwise `false`.
   */
  isDefinedOnThisPoint(pointToEvaulate: number): boolean {
    return pointToEvaulate < 0 ? false : true;
  }
}
