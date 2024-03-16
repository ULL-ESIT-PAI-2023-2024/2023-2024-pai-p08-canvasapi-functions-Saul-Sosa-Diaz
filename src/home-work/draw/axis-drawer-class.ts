/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain a class to draw a axis the canva.
 */

import {CanvasBase, EntityDrawable} from './canvas-base-class.js';

export class AxisDrawer extends CanvasBase implements EntityDrawable {
  constructor(
    canvasId: string,
    private numberOfRows: number,
    private numberOfColumns: number
  ) {
    super(canvasId);
  }
  /**
   * Draws a grid on a canvas.
   * @param numberOfRows - The number of rows to draw in the grid.
   * @param numberOfColumns - The number of columns to draw in the grid.
   * @throws {Error} If the canvas could not be found.
   */
  draw(): void {
    if (this.context === null) throw new Error('Canva could not be found'!);
    this.context.save();
    this.context.lineWidth = 4;
    this.drawXAxis();
    this.drawYAxis();
    this.context.restore();
  }
  /**
   * Draws the X axis on the canvas.
   */
  private drawXAxis(): void {
    const ROW_LENGTH: number = this.canvas.height / this.numberOfRows;
    const MIDDLE_ROW: number = Math.floor(this.numberOfRows / 2);
    const COORDINATE_X_AXIS: number = ROW_LENGTH * MIDDLE_ROW;
    this.context?.beginPath();
    // X axis
    this.context?.moveTo(0, COORDINATE_X_AXIS);
    this.context?.lineTo(this.context.canvas.width, COORDINATE_X_AXIS);
    this.context?.stroke();
    this.context?.closePath();
  }
  /**
   * Draws the Y axis on the canvas.
   */
  private drawYAxis(): void {
    const COLUMN_LENGTH: number = this.canvas.width / this.numberOfColumns;
    const MIDDLE_COLUMN: number = Math.floor(this.numberOfColumns / 2);
    const COORDINATE_Y_AXIS: number = COLUMN_LENGTH * MIDDLE_COLUMN;
    this.context?.beginPath();
    // Y axis
    this.context?.moveTo(COORDINATE_Y_AXIS, 0);
    this.context?.lineTo(COORDINATE_Y_AXIS, this.context.canvas.height);
    this.context?.stroke();
    this.context?.closePath();
  }
}
