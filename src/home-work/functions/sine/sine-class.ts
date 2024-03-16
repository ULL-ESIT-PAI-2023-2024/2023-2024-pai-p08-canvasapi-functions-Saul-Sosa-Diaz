/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 08 2024
 *
 * @description This file contain a class to implement the sine class.
 * @see https://es.wikipedia.org/wiki/Seno_(trigonometr%C3%ADa)
 */

import {MathematicalFunction} from '../function-interface';

export class Sine implements MathematicalFunction {
  /**
   * Evaluates the sine at the specified point.
   *
   * @param pointToEvaulate - The numeric value at which the function will be evaluated.
   * @returns The result of evaluating the sine function at pointToEvaulate`.
   */
  evaluate(pointToEvaulate: number): number {
    const RESULT = Math.sin(pointToEvaulate);
    // Avoid -0 problem
    if (RESULT === 0) {
      return 0;
    }
    return RESULT;
  }
}
