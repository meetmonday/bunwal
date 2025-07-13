export default async function run(path, colorCount = 0) {
  let result = []
  let mod = 0

  while (mod < 20 && result.length < colorCount) {
    const magick = Bun.spawn(["magick",
      path,
      "-resize",
      "25%",
      "-colors",
      mod + colorCount,
      "-unique-colors",
      "txt:-",
    ])


    const data = await magick.stdout.text()

    const regex = /#([0-9A-Fa-f]{6})(?:[0-9A-Fa-f]{2})?/g;
    result = Array.from(data.matchAll(regex), match => `#${match[1]}`);
    if(result.length<colorCount) mod++;
  }

  return [
    ...result.slice(0, 1),
    ...result.slice(8, 16),
    ...result.slice(8, 15)
  ];
}