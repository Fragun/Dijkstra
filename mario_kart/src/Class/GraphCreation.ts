import mathRandom from '../utils/component/mathRandom';

const readline = require('readline-sync');

export default class GraphCreation {
  /**
   * method with user input to collect the length and width of the table
   * then create the two-dimensional array "arrayNew"
   *
   * @protected
   * @static
   * @return arrayNew
   * @memberof GraphCreation
   */
  protected static arrayCreation() {
    const answerNumberCol: number = readline.questionInt('Road width :', 100);
    const answerNumberRow: number = readline.questionInt('Road length :', 100);

    const arrayNew: string[][] = [];
    for (let x = 0; x < answerNumberRow; x += 1) {
      const row = [];
      for (let y = 0; y < answerNumberCol; y += 1) {
        row.push('.');
      }
      arrayNew.push(row);
    }
    return arrayNew;
  }

  /**
   *
   * method allowing you to place a letter randomly on the graph
   * @protected
   * @static
   * @param {string[][]} arrayNew
   * @param {string} letter
   * @memberof GraphCreation
   */
  protected static randomPoint(arrayNew: string[][], letter: string) {
    const lengthGraph: number = arrayNew.length;

    const widthGraph: number = arrayNew[0].length;

    let bool: boolean = false;
    while (!bool) {
      const randomStartPointY: number = mathRandom(lengthGraph);
      const randomStartPointX: number = mathRandom(widthGraph);
      if (arrayNew[randomStartPointY - 1][randomStartPointX - 1] === '.') {
        arrayNew[randomStartPointY - 1][randomStartPointX - 1] = letter;
        bool = !bool;
      }
    }
    return arrayNew;
  }

  /**
   * Method for to create a graph with one 'S', one 'E' and 60% of 'o'
   *
   * @static
   * @return
   * @memberof GraphCreation
   */
  public static finalGraph() {
    const newGraph = this.arrayCreation();
    this.randomPoint(newGraph, 'S');
    this.randomPoint(newGraph, 'E');
    const newGraphLenght: number = newGraph.length;
    const newGraphWidth: number = newGraph[0].length;
    const numberPointOMax: number = (newGraphLenght * newGraphWidth) * 0.6;
    const randomPointOMax: number = mathRandom(numberPointOMax);
    for (let i = 1; i < randomPointOMax; i += 1) {
      this.randomPoint(newGraph, 'o');
    }
    return newGraph;
  }
}
