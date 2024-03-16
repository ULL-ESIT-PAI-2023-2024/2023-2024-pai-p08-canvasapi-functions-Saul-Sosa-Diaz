/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 08 2024
 *
 * @description This file contain the test for the Sine class.
 */

const {Sine} = require('./sine-class');

describe('Sine', () => {
  test('initializes Sine', () => {
    const SINE = new Sine();
    expect(SINE).toBeDefined();
  });
  test('evaluate', () => {
    const SINE = new Sine();
    expect(SINE.evaluate(0)).toEqual(0);
    expect(SINE.evaluate(1)).toBeCloseTo(0.8414709848, 5);
    expect(SINE.evaluate(0.23)).toBeCloseTo(0.22797752353, 5);
  });
  test('negative', () => {
    const SINE = new Sine();
    expect(SINE.evaluate(-0)).toEqual(0);
    expect(SINE.evaluate(-1)).toBeCloseTo(-0.8414709848, 5);
    expect(SINE.evaluate(-0.23)).toBeCloseTo(-0.22797752353, 5);
  });
});
