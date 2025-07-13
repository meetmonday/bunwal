export default function demoOutput(res) {
  for (let i = 0; i < 8; i++) {
    console.log(
      Bun.color(res[i], 'ansi'), "████", i, res[i],
      Bun.color(res[i + 8], 'ansi'), "████", i + 8, res[i + 8]
    )
  }
}