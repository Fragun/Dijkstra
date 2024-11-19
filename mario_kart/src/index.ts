import marioKart from './app';
import GraphCreation from './Class/GraphCreation';

const newGraph: string[][] = GraphCreation.finalGraph();
marioKart(newGraph);
