// import displayGraph from './utils/component/displayGraph';
import Point from './Interface/Point';
import dijkstra from './utils/dijkstra';
import MapParser from './Class/MapParser';

export default function marioKart(data1: string[][]) {
  // const path = process.argv[2];
  // const data = MapParser.parseData(path);
  const pointStart: Point = MapParser.startAndEndPoint(data1, 'S');
  const pointEnd: Point = MapParser.startAndEndPoint(data1, 'E');
  // displayGraph(data1);
  const result = dijkstra(data1, pointStart, pointEnd)!;

  if (result === null) {
    console.log('====================================');
    console.log('Il n\'y a pas de chemin pour aller au point d\'arrivée');
    console.log('====================================');
  } else {
    let finalResult = '';
    for (const coord of result) {
      finalResult += `${coord.y}:${coord.x} `;
    }
    console.log(finalResult);
  }
}
