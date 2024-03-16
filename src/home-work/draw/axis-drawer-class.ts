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

/**
 * This class draw axis on a canvas, implementing `EntityDrawable`.
 * This class is responsible for drawing a grid defined by rows and columns, along with their numerical labels.
 */
export class AxisDrawer extends CanvasBase implements EntityDrawable {
  /**
   * The pixel length of each column.
   */
  private columnLength: number;
  /**
   * The pixel length of each row.
   */
  private rowLength: number;
  /**
   * Initializes a new instance of the `AxisDrawer` class.
   * @param canvasId The ID of the canvas element to draw on.
   * @param numberOfRows The number of rows in the grid.
   * @param numberOfColumns The number of columns in the grid.
   */
  constructor(
    canvasId: string,
    private numberOfRows: number,
    private numberOfColumns: number
  ) {
    super(canvasId);
    this.columnLength = this.canvas.width / this.numberOfColumns;
    this.rowLength = this.canvas.height / this.numberOfRows;
  }
  /**
   * Draws theaxis axes and the numbers on the canvas.
   * @throws {Error} If the canvas could not be found.
   */
  draw(): void {
    if (this.context === null) throw new Error('Canva could not be found'!);
    this.context.save();
    this.context.lineWidth = 4;
    this.drawAxis();
    this.drawNumbersInAxis();
    this.context.restore();
  }
  /**
   * Draws the the axis on the canvas.
   */
  private drawAxis(): void {
    const COORDINATE_Y_OF_HORIZONTAL_AXIS: number = this.calculateCoordinateYOfHorizontalAxis();
    const COORDINATE_X_OF_VERTICAL_AXIS: number = this.calculateCoordinateXOfVerticalAxis();
    this.context?.beginPath();
    // X axis
    this.context?.moveTo(0, COORDINATE_Y_OF_HORIZONTAL_AXIS);
    this.context?.lineTo(this.context.canvas.width, COORDINATE_Y_OF_HORIZONTAL_AXIS);
    // Y axis
    this.context?.moveTo(COORDINATE_X_OF_VERTICAL_AXIS, 0);
    this.context?.lineTo(COORDINATE_X_OF_VERTICAL_AXIS, this.context.canvas.height);
    this.context?.stroke();
    this.context?.closePath();
  }
  /**
   * Draws numerical labels on both the horizontal and vertical axes.
   */
  private drawNumbersInAxis(): void {
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.font = '20px serif';
    this.drawHorizontalAxisNumbers();
    this.drawVerticalAxisNumbers();
  }
  /**
   * Calculates the Y-coordinate for the horizontal axis, which is determined
   * by the midpoint of the total row length.
   * @returns The Y-coordinate for the horizontal axis.
   * @private
   */
  private calculateCoordinateYOfHorizontalAxis(): number {
    return this.rowLength * Math.floor(this.numberOfRows / 2);
  }
  /**
   * Calculates the X-coordinate for the vertical axis, which is determined
   * by the midpoint of the total column length.
   * @returns The X-coordinate for the vertical axis.
   * @private
   */
  private calculateCoordinateXOfVerticalAxis(): number {
    return this.columnLength * Math.floor(this.numberOfColumns / 2);
  }
  /**
   * Draws numerical labels along the horizontal axi.
   * @private
   */
  private drawHorizontalAxisNumbers(): void {
    const OFFSET_X_AXIS = 10;
    const OFFSET_Y_AXIS = 15;
    const START_NUMBER = -Math.floor(this.numberOfColumns / 2);
    const Y_COORDINATE_OF_HORIZONTAL_AXIS = this.calculateCoordinateYOfHorizontalAxis() + OFFSET_Y_AXIS;
    for (let i = 0, actualNumber = START_NUMBER; i < this.numberOfColumns; i++, actualNumber++) {
      if (actualNumber % 2 === 0 && actualNumber !== 0) {
        const X_COORDINATE = i * this.columnLength + OFFSET_X_AXIS;
        this.context.fillText(actualNumber.toString(), X_COORDINATE, Y_COORDINATE_OF_HORIZONTAL_AXIS);
      }
    }
  }
  /**
   * Draws numerical labels along the vertical axi.
   * @private
   */
  private drawVerticalAxisNumbers(): void {
    const OFFSET_X_AXIS = 15;
    const OFFSET_Y_AXIS = 10;
    const START_NUMBER = -Math.floor(this.numberOfRows / 2);
    const X_COORDINATE_OF_VERTICAL_AXIS = this.calculateCoordinateXOfVerticalAxis() + OFFSET_X_AXIS;
    for (let i = 0, actualNumber = START_NUMBER; i < this.numberOfColumns; i++, actualNumber++) {
      if (actualNumber % 2 === 0 && actualNumber !== 0) {
        const Y_COORDINATE = i * this.rowLength + OFFSET_Y_AXIS;
        this.context.fillText((-actualNumber).toString(), X_COORDINATE_OF_VERTICAL_AXIS, Y_COORDINATE);
      }
    }
  }
}
