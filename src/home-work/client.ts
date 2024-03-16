/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Saul Sosa
 * @date Mar 15 2024
 *
 * @description Client file of this homework
 */

import {GridDrawer} from './draw/grid-drawer-class.js';
import {AxisDrawer} from './draw/axis-drawer-class.js';

function main() {
  try {
    const CANVAS_ID = 'myCanva';
    const NUMBER_OF_ROWS = 20;
    const NUMBER_OF_COLUMS = 37;
    const GRID_DRAWER = new GridDrawer(CANVAS_ID, NUMBER_OF_ROWS, NUMBER_OF_COLUMS);
    const AXIS_DRAWER = new AxisDrawer(CANVAS_ID, NUMBER_OF_ROWS, NUMBER_OF_COLUMS);
    GRID_DRAWER.draw();
    AXIS_DRAWER.draw();
  } catch (exception: unknown) {
    if (exception instanceof Error) {
      console.log('A error has been ocurred: ', exception.message);
    }
  }
}

main();
