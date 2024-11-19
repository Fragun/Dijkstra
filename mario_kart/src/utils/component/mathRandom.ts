/**
 * Generates a random integer between 1 and n (inclusive).
 *
 * @export
 * @param {number} n The upper limit for the random number generation.
 * @return {number} A random integer between 1 and n, inclusive.
 */
export default function mathRandom(n: number) {
  return Math.floor(Math.random() * n + 1);
}
