import Nodes from '../Interface/Nodes';

export default class MinHeap {
  public heap: Nodes[] = [];

  public getMin = () => this.heap[0];

  public insert = (node: Nodes) => {
    this.heap.push(node);
    if (this.heap.length > 1) {
      let currentIndex: number = this.heap.length - 1;

      while (
        currentIndex > 0
        && this.heap[
          Math.floor((currentIndex - 1) / 2)].distance > this.heap[currentIndex].distance) {
        this.swapIndex(Math.floor((currentIndex - 1) / 2), currentIndex);
        currentIndex = Math.floor((currentIndex - 1) / 2);
      }
    }
  };

  public remove = () => {
    const smallNode: Nodes = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    let parentIndex: number = 0;

    while (this.heap.length > 1) {
      const leftChildrenIndex = 2 * parentIndex + 1;
      const rightChildrenIndex = 2 * parentIndex + 2;
      let smallestIndex = parentIndex;
      const limit = this.heap.length;
      if (leftChildrenIndex < limit
        && this.heap[parentIndex].distance > this.heap[leftChildrenIndex].distance) {
        smallestIndex = leftChildrenIndex;
      }
      if (rightChildrenIndex < limit
        && this.heap[parentIndex].distance > this.heap[rightChildrenIndex].distance) {
        smallestIndex = rightChildrenIndex;
      }
      if (smallestIndex === parentIndex) {
        break;
      }
      this.swapIndex(parentIndex, smallestIndex);
      parentIndex = smallestIndex;
    }
    return smallNode;
  };

  private swapIndex = (a: number, b: number) => {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  };
}
