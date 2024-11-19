import Point from '../../Interface/Point';

/**
 * @export
 * @param {string[][]} graph
 * @param {Point} point
 * @param {(string | any[])} directions
 * @return true if the neighbors of the point are
 * inaccessible (either out of range or represented by 'o' in the graph)
 */
export default function checkNeighouringPoint(
  graph: string[][],
  point: Point,
  directions: string | any[],
) {
  for (let i = 0; i < directions.length; i += 1) {
    const neighboringPoint: Point = {
      x: point.x + directions[i].x,
      y: point.y + directions[i].y,
    };

    if ((neighboringPoint.x >= 0
      && neighboringPoint.x < graph[neighboringPoint.y]?.length
      && neighboringPoint.y >= 0
      && neighboringPoint.y < graph.length)
    ) {
      if (graph[neighboringPoint.y][neighboringPoint.x] !== 'o') {
        return false;
      }
    }
  }
  return true;
}
