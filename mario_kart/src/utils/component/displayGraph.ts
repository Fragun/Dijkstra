export default function displayGraph(graph: string[][]) {
  graph.forEach((element) => {
    console.log(element.join(' '));
  });
}
