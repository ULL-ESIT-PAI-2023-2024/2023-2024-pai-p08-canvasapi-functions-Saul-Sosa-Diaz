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
 * Represents a set of coordinates with x and y components.
 * @typedef Coordinate
 * @property xComponent - The x component of the coordinates.
 * @property yComponent - The y component of the coordinates.
 */
export type Coordinate = {
  xComponent: number;
  yComponent: number;
};

export class DrawGrid {
  /**
   * The HTML canvas element used for drawing figures.
   */
  private static canvas: HTMLCanvasElement = document.getElementById('myCanva') as HTMLCanvasElement;
  /**
   * The 2D rendering context of the canvas.
   */
  private static context: CanvasRenderingContext2D | null = DrawGrid.canvas.getContext('2d');
  /**
   * Draws a grid on a canvas.
   * @param numberOfRows - The number of rows to draw in the grid.
   * @param numberOfColumns - The number of columns to draw in the grid.
   * @throws {Error} If the canvas could not be found.
   */
  drawGrid(numberOfRows: number, numberOfColumns: number): void {
    if (DrawGrid.context === null) throw new Error('Canva could not be found'!);
    DrawGrid.context.save();
    DrawGrid.context.setLineDash([10, 2]);
    DrawGrid.context.strokeStyle = 'grey';
    this.drawColumns(numberOfColumns);
    this.drawRows(numberOfRows);
    DrawGrid.context.restore();
    DrawGrid.context.lineWidth = 3;
    this.drawAxis(numberOfRows, numberOfColumns);
    this.drawNumbers(numberOfRows, numberOfColumns);
  }
  /**
   * Draws columns on the canvas.
   * @param numberOfColumns - The number of columns to draw.
   */
  private drawColumns(numberOfColumns: number): void {
    const COLUMN_LENGTH = DrawGrid.canvas.width / numberOfColumns;
    let coordinateXOfColumn = COLUMN_LENGTH;
    DrawGrid.context?.beginPath();
    for (let i = 0; i < numberOfColumns - 1; i++) {
      DrawGrid.context?.moveTo(coordinateXOfColumn, 0);
      DrawGrid.context?.lineTo(coordinateXOfColumn, DrawGrid.context.canvas.height);
      DrawGrid.context?.stroke();
      coordinateXOfColumn += COLUMN_LENGTH;
    }
    DrawGrid.context?.closePath();
  }
  /**
   * Draws rows on the canvas.
   * @param numberOfRows - The number of rows to draw.
   */
  private drawRows(numberOfRows: number): void {
    const ROW_LENGTH = DrawGrid.canvas.height / numberOfRows;
    let coordinateYOfRow = ROW_LENGTH;
    DrawGrid.context?.beginPath();
    for (let i = 0; i < numberOfRows - 1; i++) {
      DrawGrid.context?.moveTo(0, coordinateYOfRow);
      DrawGrid.context?.lineTo(DrawGrid.context.canvas.width, coordinateYOfRow);
      DrawGrid.context?.stroke();
      coordinateYOfRow += ROW_LENGTH;
    }
    DrawGrid.context?.closePath();
  }
  /**
   * Draws axis on the canvas.
   * @param numberOfRows - The number of rows in the draw.
   * @param numberOfColums - The number of columns in the draw.
   */
  private drawAxis(numberOfRows: number, numberOfColumns: number): void {
    const COLUMN_LENGTH = DrawGrid.canvas.width / numberOfColumns;
    const ROW_LENGTH = DrawGrid.canvas.height / numberOfRows;
    const MIDDLE_COLUMN = Math.floor(numberOfColumns / 2);
    const MIDDLE_ROW = Math.floor(numberOfRows / 2);
    const COORDINATE_X_AXIS = ROW_LENGTH * MIDDLE_ROW;
    const COORDINATE_Y_AXIS = COLUMN_LENGTH * MIDDLE_COLUMN;
    DrawGrid.context?.beginPath();
    // X axis
    DrawGrid.context?.moveTo(0, COORDINATE_X_AXIS);
    DrawGrid.context?.lineTo(DrawGrid.context.canvas.width, COORDINATE_X_AXIS);
    // Y axis
    DrawGrid.context?.moveTo(COORDINATE_Y_AXIS, 0);
    DrawGrid.context?.lineTo(COORDINATE_Y_AXIS, DrawGrid.context.canvas.height);
    DrawGrid.context?.stroke();
    DrawGrid.context?.closePath();
  }
  private drawNumbers(numberOfRows: number, numberOfColumns: number): void {
    if (DrawGrid.context === null) throw new Error('Canva could not be found'!);
    const COLUMN_LENGTH = DrawGrid.canvas.width / numberOfColumns;
    const ROW_LENGTH = DrawGrid.canvas.height / numberOfRows;
    let coordinateXOfColumn = 0;
    const MIDDLE_ROW = Math.floor(numberOfRows / 2);
    const OFFSET_X_AXIS = 20;
    const COORDINATE_Y_AXIS = ROW_LENGTH * MIDDLE_ROW + OFFSET_X_AXIS;
    DrawGrid.context.font = '20px serif';
    for (let i = 0, actualNumber = -Math.floor(numberOfColumns / 2); i < numberOfColumns - 1; i++, actualNumber += 2) {
      DrawGrid.context?.fillText(actualNumber.toString(), coordinateXOfColumn, COORDINATE_Y_AXIS);
      coordinateXOfColumn += COLUMN_LENGTH * 2;
    }
  }
}
