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

  const match = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);
  if (match) {
    const num1 = parseInt(match[1], 10);
    const num2 = parseInt(match[2], 10);
    return (num1 + num2).toString();
  }

  return "";
}