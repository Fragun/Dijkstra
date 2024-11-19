import MinHeap from '../Class/Minheap';
import Nodes from '../Interface/Nodes';
import Point from '../Interface/Point';
import checkNeighouringPoint from './component/checkNeighbouringPoint';

/**
 *
 * Dijstra's algo to find the lastest path between the starting point and the end point
 * @export
 * @param {string[][]} graph
 * @param {Point} start
 * @param {Point} end
 * @return the complete marked path or null if impossible
 */

// il existerait un possibilité de rendre le code plus rapide avec un min-heap ???
// min heap afin d'augmetner la rapidité de la file d'attente
//  dans un Min Heap, le nœud parent est plus petit que ses enfants.
// Min Heap est utilisé pour trier les éléments par ordre décroissant.
// essayer de prendre en compte l'heuristique(Manhattan)
// inserion de min-heap à la place de queue
export default function dijkstra(graph: string[][], start: Point, end: Point) {
  const directions: Point[] = [
    { x: 0, y: -1 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 0 },
  ];

  const checkPointStart: boolean = checkNeighouringPoint(graph, start, directions);
  const checkPointEnd: boolean = checkNeighouringPoint(graph, end, directions);

  if (checkPointStart || checkPointEnd) {
    return null;
  }
  const visited: boolean[][] = [];
  for (let row = 0; row < graph.length; row += 1) {
    const visitedRow: boolean[] = [];
    for (let i = 0; i < graph[row].length; i += 1) {
      visitedRow[i] = false;
    }
    visited.push(visitedRow);
  }
  /// ////////////////////////////////////////////////////////////////////////////////////////////
  const queue = new MinHeap();
  queue.insert({ point: start, distance: 0, routage: [start] });
  while (queue.heap.length > 0) {
    const currentPoint: Nodes = queue.remove()!; // ! non-null assertion operator
    if (!visited[currentPoint.point.y][currentPoint.point.x]) { // si déja visité on reboucle
      visited[currentPoint.point.y][currentPoint.point.x] = true;

      if (currentPoint.point.x === end.x && currentPoint.point.y === end.y) {
        return currentPoint.routage; // validation ok on a trouvé le end
      }
      for (const direction of directions) { // début de la boucle sur les voisins du currentPoint
        const neighboringPoint: Point = {
          x: currentPoint.point.x + direction.x,
          y: currentPoint.point.y + direction.y,
        };
        if (neighboringPoint.x >= 0 // filtre hors limite
            && neighboringPoint.x <= graph[neighboringPoint.y]?.length // dans la limite abcisse
            && neighboringPoint.y >= 0 // et ordonnee
            && neighboringPoint.y <= graph.length
            && (graph[neighboringPoint.y][neighboringPoint.x] === '.'
            || graph[neighboringPoint.y][neighboringPoint.x] === 'E') // on inclut le point d'arrivée
        ) {
          queue.insert({
            point: neighboringPoint,
            distance: currentPoint.distance + 1,
            routage: [...currentPoint.routage, neighboringPoint], // routage
          });
        }
      }
    }
  }
  return null;
}
