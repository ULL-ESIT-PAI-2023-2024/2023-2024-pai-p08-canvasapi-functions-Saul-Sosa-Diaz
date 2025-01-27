/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description This file contain a class to draw  a grid int the canva.
 */

import {CanvasBase, EntityDrawable} from './canvas-base-class.js';

export class GridDrawer extends CanvasBase implements EntityDrawable {
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
    this.context.setLineDash([10, 2]);
    this.context.strokeStyle = 'grey';
    this.drawColumns();
    this.drawRows();
    this.context.restore();
  }
  /**
   * Draws columns on the canvas.
   * @param numberOfColumns - The number of columns to draw.
   */
  private drawColumns(): void {
    const COLUMN_LENGTH: number = this.canvas.width / this.numberOfColumns;
    let coordinateXOfColumn: number = COLUMN_LENGTH;
    this.context?.beginPath();
    for (let i = 0; i < this.numberOfColumns - 1; i++) {
      this.context?.moveTo(coordinateXOfColumn, 0);
      this.context?.lineTo(coordinateXOfColumn, this.context.canvas.height);
      this.context?.stroke();
      coordinateXOfColumn += COLUMN_LENGTH;
    }
    this.context?.closePath();
  }
  /**
   * Draws rows on the canvas.
   * @param numberOfRows - The number of rows to draw.
   */
  private drawRows(): void {
    const ROW_LENGTH: number = this.canvas.height / this.numberOfRows;
    let coordinateYOfRow: number = ROW_LENGTH;
    this.context?.beginPath();
    for (let i = 0; i < this.numberOfRows - 1; i++) {
      this.context?.moveTo(0, coordinateYOfRow);
      this.context?.lineTo(this.context.canvas.width, coordinateYOfRow);
      this.context?.stroke();
      coordinateYOfRow += ROW_LENGTH;
    }
    this.context?.closePath();
  }
}
