import { houseG, houseS, houseR, houseH, san, mes, hij, squi,
 est, sta, otras, orderharryAz, orderharryZa } from '../src/data';
import harryData from '../src/data/potter/potter'

describe("houseS", () => {
  test("is a filter function", () => {
    expect(typeof houseS).toBe("function");
  });
});

describe("houseG", () => {
  test("returns characters from Gryffindor", () => {
    const input = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' },
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    const output = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' }
    ];

    expect(houseG(input, harryData)).toEqual(output);

  });
});

describe("houseS", () => {
  test("returns characters from Slytherin", () => {
    const input = [
      { name: 'Harry Potter', house: 'Gryffindor' },
      { name: 'Hermione Granger', house: 'Gryffindor' },
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    const output = [
      { name: 'Draco Malfoy', house: 'Slytherin' }
    ];

    expect(houseS(input, harryData)).toEqual(output);

  });
});

describe("houseR", () => {
  test("returns characters from Ravenclaw", () => {
    const input = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Luna Lovegood', house: 'Ravenclaw' },
      { name: 'Neville Longbottom', house: 'Gryffindor' }
    ];

    const output = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Luna Lovegood', house: 'Ravenclaw' }
    ];

    expect(houseR(input, harryData)).toEqual(output);

  });
});

describe("houseH", () => {
  test("returns characters from Hufflepuff", () => {
    const input = [
      { name: 'Cho Chang', house: 'Ravenclaw' },
      { name: 'Cedric Diggory', house: 'Hufflepuff' },
      { name: 'Argus Filch', house: '' }
    ];

    const output = [
      { name: 'Cedric Diggory', house: 'Hufflepuff' },
    ];

    expect(houseH(input, harryData)).toEqual(output);

  });
});

describe("san", () => {
  test("filter that returns characters that have sangre-pura ancestry", () => {
    const input = [
      { name: 'Harry Potter', ancestry: 'mestizo' },
      { name: 'Hermione Granger', ancestry: 'muggles' },
      { name: 'Draco Malfoy', ancestry: 'sangre-pura' }
    ];

    const output = [
      { name: 'Draco Malfoy', ancestry: 'sangre-pura' }
    ];

    expect(san(input, harryData)).toEqual(output);

  });
});

describe("mes", () => {
  test("filter that returns characters that have mestizo ancestry", () => {
    const input = [
      { name: 'Harry Potter', ancestry: 'mestizo' },
      { name: 'Gregory Goyle', ancestry: 'sangre-pura' },
      { name: 'Draco Malfoy', ancestry: 'sangre-pura' }
    ];

    const output = [
      { name: 'Harry Potter', ancestry: 'mestizo' }
    ];

    expect(mes(input, harryData)).toEqual(output);

  });
});

describe("hij", () => {
  test("filter that returns characters that are muggles as Hermione", () => {
    const input = [
      { name: 'Cho Chang', ancestry: '' },
      { name: 'Gregory Goyle', ancestry: 'sangre-pura' },
      { name: 'Hermione Granger', ancestry: 'muggles' }
    ];

    const output = [
      { name: 'Hermione Granger', ancestry: 'muggles' }
    ];

    expect(hij(input, harryData)).toEqual(output);

  });
});

describe("squi", () => {
  test("filter that returns characters that are squibs as Filch", () => {
    const input = [
      { name: 'Argus Filch', ancestry: 'squib' },
      { name: 'Lucius Malfoy', ancestry: 'sangre-pura' },
      { name: 'Arthur Weasley', ancestry: 'sangre-pura' }
    ];

    const output = [
      { name: 'Argus Filch', ancestry: 'squib' }
    ];

    expect(squi(input, harryData)).toEqual(output);

  });
});

describe("est", () => {
  test("returns characters that are students at Hogwarts", () => {
    const input = [
      { name: 'Argus Filch', hogwartsStudent: false },
      { name: 'Luna Lovegood', hogwartsStudent: true },
      { name: 'Neville Longbottom', hogwartsStudent: true }
    ];

    const output = [
      { name: 'Luna Lovegood', hogwartsStudent: true },
      { name: 'Neville Longbottom', hogwartsStudent: true }
    ];

    expect(est(input, harryData)).toEqual(output);

  });
});

describe("sta", () => {
  test("returns characters that works as Hogwarts staff", () => {
    const input = [
      { name: 'Argus Filch', hogwartsStaff: true },
      { name: 'Kingsley Shacklebolt', hogwartsStaff: false },
      { name: 'Mrs Norris', hogwartsStaff: true }
    ];

    const output = [
      { name: 'Argus Filch', hogwartsStaff: true },
      { name: 'Mrs Norris', hogwartsStaff: true }
    ];

    expect(sta(input, harryData)).toEqual(output);

  });
});

describe("otras", () => {
  test("returns non-human characters", () => {
    const input = [
      { name: 'Rubeus Hagrid', species: 'gigante' },
      { name: 'Minerva McGonagall', species: 'humano' },
      { name: 'Remus Lupin', species: 'hombre-lobo' },
      { name: 'Mrs Norris', species: 'gata' },
      { name: 'Bellatrix Lestrange', species: 'humano' }
    ];

    const output = [
      { name: 'Rubeus Hagrid', species: 'gigante' },
      { name: 'Remus Lupin', species: 'hombre-lobo' },
      {name: 'Mrs Norris', species: 'gata' }
    ];

    expect(otras(input, harryData)).toEqual(output);

  });
});
const arrayOriginal = [
  { name: "Harry Potter" },
  { name: "Draco Malfoy" },
  { name: "Ron Weasley" },
  { name: "Draco Malfoy" },
];

const arrayAz = [
  { name: "Draco Malfoy" },
  { name: "Draco Malfoy" },
  { name: "Harry Potter" },
  { name: "Ron Weasley" },
];

const arrayZa = [
  { name: "Ron Weasley" },
  { name: "Harry Potter" },
  { name: "Draco Malfoy" },
  { name: "Draco Malfoy" },
];
describe("orderharryAz", () => {
  test("is a function", () => {
    expect(typeof orderharryAz).toBe("function");
  });

  test("alphabetically order names from A to Z", () => {
    expect(orderharryAz(arrayOriginal)).toStrictEqual(arrayAz);
  });
});

describe("orderharryZa", () => {
  test("is a function", () => {
    expect(typeof orderharryZa).toBe("function");
  });

  test("alphabetically reverse order names from Z to A", () => {
    expect(orderharryZa(arrayOriginal)).toStrictEqual(arrayZa);
  });
});
