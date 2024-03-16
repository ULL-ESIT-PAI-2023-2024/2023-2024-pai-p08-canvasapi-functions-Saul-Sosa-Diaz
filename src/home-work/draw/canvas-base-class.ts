/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain a class to implement the draw class that is the responsible for painting on canva.
 */

/**
 * Represents the base class for canvas-related operations. Provides
 * foundational setup for drawing on a canvas.
 */
export class CanvasBase {
  /**
   * The HTMLCanvasElement that this class interacts with.
   */
  protected canvas: HTMLCanvasElement;
  /**
   * The 2D rendering context of the canvas. Used for drawing operations.
   */
  protected context: CanvasRenderingContext2D;
  /**
   * Initializes a new instance of the CanvasBase class.
   * @param canvasId The id of the `<canvas>` element in the DOM.
   * @throws {Error} Throws an error if the canvas context cannot be obtained.
   */
  constructor(canvasId: string) {
    const CANVAS = document.getElementById(canvasId) as HTMLCanvasElement;
    const CONTEXT: CanvasRenderingContext2D | null = CANVAS.getContext('2d');
    if (!CONTEXT) {
      throw new Error('Failed to get canvas context');
    }
    this.canvas = CANVAS;
    this.context = CONTEXT;
  }
}

/**
 * Defines the interface for entities that can be drawn on a canvas.
 */
export interface EntityDrawable {
  /**
   * Performs the drawing operation for the entity on a canvas.
   */
  draw(): void;
}
