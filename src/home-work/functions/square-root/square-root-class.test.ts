/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain the test for the SquareRoot class.
 */

const {SquareRoot} = require('./square-root-class');

describe('SquareRoot', () => {
  test('initializes SquareRoot', () => {
    const SQUARE_ROOT = new SquareRoot();
    expect(SQUARE_ROOT).toBeDefined();
  });
  test('evaluate', () => {
    const SQUARE_ROOT = new SquareRoot();
    expect(SQUARE_ROOT.evaluate(64)).toEqual(8);
    expect(SQUARE_ROOT.evaluate(64)).toEqual(8);
    expect(SQUARE_ROOT.evaluate(64)).toEqual(8);
  });
  test('defined', () => {
    const SQUARE_ROOT = new SquareRoot();
    expect(SQUARE_ROOT.isDefinedOnThisPoint(64)).toBeTruthy();
    expect(SQUARE_ROOT.isDefinedOnThisPoint(0)).toBeTruthy();
    expect(SQUARE_ROOT.isDefinedOnThisPoint(-0)).toBeTruthy();
    expect(SQUARE_ROOT.isDefinedOnThisPoint(-69)).toBeFalsy();
  });
});
