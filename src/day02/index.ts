import run from "aocrunner";

type Box = {
  length: number;
  width: number;
  height: number;
};

const parseInput = (rawInput: string) => {
  const lines = rawInput.split("\n");

  let boxes: Box[] = [];

  lines.forEach((line) => {
    const toks = line.split("x");
    const box: Box = {
      length: parseInt(toks[0], 10),
      width: parseInt(toks[1], 10),
      height: parseInt(toks[2], 10),
    };
    boxes.push(box);
  });

  return boxes;
};

function computeSurfaceArea(box: Box) {
  return (
    2 * box.length * box.width +
    2 * box.width * box.height +
    2 * box.height * box.length
  );
}

function computeAreas(box: Box) {
  let areas = [
    box.width * box.height,
    box.length * box.width,
    box.length * box.height,
  ];

  return areas;
}

function findSmallestArea(box: Box) {
  const areas = computeAreas(box);
  return areas.reduce((a, b) => Math.min(a, b));
}

function computePerimeters(box: Box) {
  return [
    2 * box.height + 2 * box.length,
    2 * box.length + 2 * box.width,
    2 * box.width + 2 * box.height,
  ];
}

function findSmallestPerimeter(box: Box) {
  const perimeters = computePerimeters(box);
  return perimeters.reduce((a, b) => Math.min(a, b));
}

function computeVolume(box: Box) {
  return box.height * box.length * box.width;
}

const part1 = (rawInput: string) => {
  const boxes = parseInput(rawInput);

  let paperNeeded = 0;

  boxes.forEach((box) => {
    paperNeeded += computeSurfaceArea(box);
    paperNeeded += findSmallestArea(box);
  });

  return paperNeeded;
};

const part2 = (rawInput: string) => {
  const boxes = parseInput(rawInput);

  let ribbonNeeded = 0;

  boxes.forEach((box) => {
    ribbonNeeded += findSmallestPerimeter(box);
    ribbonNeeded += computeVolume(box);
  });

  return ribbonNeeded;
};

run({
  part1: {
    tests: [
      {
        input: `2x3x4`,
        expected: 58,
      },
      {
        input: `1x1x10`,
        expected: 43,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `2x3x4`,
        expected: 34,
      },
      {
        input: `1x1x10`,
        expected: 14,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
