function seededRandom(seed: string) {
  let seedValue = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return function () {
    const x = Math.sin(seedValue++) * 10000;
    return x - Math.floor(x);
  };
}

function shuffleArray(array: string[], seedString: string) {
  const random = seededRandom(seedString);
  const arrayCopy = [...array];
  for (let i = arrayCopy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
}

const colors = [
  '#7ec0dc', '#93dfdf', '#8299e1', '#e5cfae', '#c5e1aa',
  '#abfbbf', '#af9ff0', '#99dc74', '#7bf1ce', '#c0ace6',
  '#8f89ef', '#da99c9', '#fd9ac7', '#f1ae91', '#ef7789',
  '#c49eea', '#e58cdc', '#88e4ad', '#fd8fd1', '#c7d982',
  '#99f294', '#fadb7f', '#8ddab8', '#90d997', '#f9a9fe',
  '#e7eba2', '#e694fa', '#e18676', '#9da6f9', '#b4fba3',
  '#b773db', '#9bb4d9', '#f1e684', '#7cb4e2', '#a1e2ed',
  '#ade6de', '#daeeb4', '#e386a2', '#f5c9a4', '#fbaaaa'
];

export const songsColors = shuffleArray(colors, 'songs');

export const artistsColors = shuffleArray(colors, 'artists');

export const eventsColors = shuffleArray(colors, 'events');
