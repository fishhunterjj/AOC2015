import run from "aocrunner";

const parseInput = (rawInput: string) => {
  let instructions: string[] = [];

  for (let idx = 0; idx < rawInput.length; idx++) {
    instructions.push(rawInput[idx]);
  }

  return instructions;
};

const part1 = (rawInput: string) => {
  const instructions = parseInput(rawInput);

  let floor = 0;

  const floors = instructions.map<number>((i) => (i == "(" ? 1 : -1));
  floor = floors.reduce((p, c) => (p = p + c));

  return floor;
};

const part2 = (rawInput: string) => {
  const instructions = parseInput(rawInput);

  const floors = instructions.map<number>((i) => (i == "(" ? 1 : -1));

  let floor = 0;
  let idx = 0;
  do {
    floor += floors[idx++];
  } while (floor != -1);

  return idx;
};

run({
  part1: {
    tests: [
      {
        input: `(())`,
        expected: 0,
      },
      {
        input: `()())`,
        expected: 0,
      },
      {
        input: `(((`,
        expected: 3,
      },
      {
        input: `(((`,
        expected: 3,
      },
      {
        input: `())`,
        expected: -1,
      },
      {
        input: `)())())`,
        expected: -3,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `)`,
        expected: 1,
      },
      {
        input: `()())`,
        expected: 5,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
