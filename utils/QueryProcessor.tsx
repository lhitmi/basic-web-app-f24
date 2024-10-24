export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return "lhitmi";
  }

  if (query.toLowerCase().includes("what is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return "Latifa";
  }

  const additionMatch = query.toLowerCase().match(/what is (\d+) plus (\d+)( plus (\d+))*\?/);
  if (additionMatch) {
    const numbers = additionMatch.slice(1).filter(Boolean).map(num => parseInt(num, 10));
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
  }

  const largestMatch = query.toLowerCase().match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1], 10);
    const num2 = parseInt(largestMatch[2], 10);
    const num3 = parseInt(largestMatch[3], 10);
    const largest = Math.max(num1, num2, num3);
    return largest.toString();
  }

  const multiplicationMatch = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)\?/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    return (num1 * num2).toString();
  }

  const squareCubeMatch = query.toLowerCase().match(/which of the following numbers is both a square and a cube: ([\d, ]+)\?/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const result = numbers.filter(num => {
      const sqrt = Math.sqrt(num);
      const cbrt = Math.cbrt(num);
      return Number.isInteger(sqrt) && Number.isInteger(cbrt);
    });
    return result.join(', ');
  }

  const primeMatch = query.toLowerCase().match(/which of the following numbers are primes: ([\d, ]+)\?/);
  if (primeMatch) {
    const numbers = primeMatch[1].split(',').map(num => parseInt(num.trim(), 10));
    const isPrime = (num: number) => {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const result = numbers.filter(isPrime);
    return result.join(', ');
  }

  const subtractionMatch = query.toLowerCase().match(/what is (\d+) minus (\d+)\?/);
  if (subtractionMatch) {
    const num1 = parseInt(subtractionMatch[1], 10);
    const num2 = parseInt(subtractionMatch[2], 10);
    return (num1 - num2).toString();
  }

  const multipleAdditionMatch = query.toLowerCase().match(/what is (\d+( plus \d+)+)\?/);
  if (multipleAdditionMatch) {
    const numbers = multipleAdditionMatch[1].match(/\d+/g)?.map(num => parseInt(num, 10)) || [];
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum.toString();
  }

  const powerMatch = query.toLowerCase().match(/what is (\d+) to the power of (\d+)\?/);
  if (powerMatch) {
    const base = parseInt(powerMatch[1], 10);
    const exponent = parseInt(powerMatch[2], 10);
    return Math.pow(base, exponent).toString();
  }

  const complexMatch = query.toLowerCase().match(/what is (\d+) plus (\d+) multiplied by (\d+)\?/);
  if (complexMatch) {
    const num1 = parseInt(complexMatch[1], 10);
    const num2 = parseInt(complexMatch[2], 10);
    const num3 = parseInt(complexMatch[3], 10);
    const result = num1 + (num2 * num3);
    return result.toString();
  }

  const complexMatch2 = query.toLowerCase().match(/what is (\d+) multiplied by (\d+) plus (\d+)\?/);
  if (complexMatch2) {
    const num1 = parseInt(complexMatch2[1], 10);
    const num2 = parseInt(complexMatch2[2], 10);
    const num3 = parseInt(complexMatch2[3], 10);
    const result = (num1 * num2) + num3;
    return result.toString();
  }

  const anagramMatch = query.toLowerCase().match(/which of the following is an anagram of (\w+): ([\w, ]+)\?/);
  if (anagramMatch) {
    const word = anagramMatch[1];
    const candidates = anagramMatch[2].split(',').map(candidate => candidate.trim());
    const sortedWord = word.split('').sort().join('');
    const result = candidates.filter(candidate => candidate.split('').sort().join('') === sortedWord);
    return result.join(', ');
  }

  const scrabbleMatch = query.toLowerCase().match(/what is the scrabble score of (\w+)\?/);
  if (scrabbleMatch) {
    const word = scrabbleMatch[1];
    const scrabbleScores: { [key: string]: number } = {
      a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3,
      n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
    };
    const score = word.split('').reduce((acc, char) => acc + (scrabbleScores[char] || 0), 0);
    return score.toString();
  }

  return "";
}