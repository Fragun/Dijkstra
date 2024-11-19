import Point from '../Interface/Point';

const fs = require('fs');

export default class MapParser {
  static parseData(path: any) {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split(' ').map((line: string) => line.split(''));
    return lines;
  }

  static startAndEndPoint(arrayData: String[][], letter: string) {
    let point: Point = { x: 0, y: 0 };
    for (let y = 0; y < arrayData.length; y += 1) {
      for (let x = 0; x < arrayData[y].length; x += 1) {
        if (arrayData[y][x] === letter) {
          point = { x, y };
        }
      }
    }
    return point;
  }
}
