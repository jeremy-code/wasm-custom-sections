# wasm-custom-sections

Original file is [File:Meteosat-12-fci-march-equinox-2025-noon.jpg](https://commons.wikimedia.org/wiki/File:Meteosat-12-fci-march-equinox-2025-noon.jpg) after being shrunk in [squoosh.app](https://squoosh.app/).

## Performance

First ten runs on MacBook M1, Node.js 26.11.1.

| Index | WebAsssembly (ms) | Base64 (ms) |
| :---: | :---------------: | :---------: |
|   1   |       4.491       |    10.97    |
|   2   |       4.314       |   10.793    |
|   3   |       3.373       |    5.774    |
|   4   |       3.494       |    5.011    |
|   5   |       3.515       |    5.352    |
|   6   |       4.024       |    5.368    |
|   7   |       3.258       |    6.344    |
|   8   |       3.307       |    4.954    |
|   9   |       3.42        |    6.167    |
|  10   |       4.45        |   10.869    |

Benchmark with Vitest and tiny-bench settings after 2738ms with default settings.

| name               |        hz |   min |    max |   mean |    p75 |    p99 |   p995 |   p999 |    rme | samples |
| ------------------ | --------: | ----: | -----: | -----: | -----: | -----: | -----: | -----: | -----: | ------: |
| getWebAssemblyData | 35,597.29 | 0.017 | 5.9981 | 0.0467 | 0.0514 | 0.2596 | 0.3795 | 2.0695 | ±3.22% |   21365 |
| getBase64Data      | 15,460.90 | 0.048 | 9.4943 | 0.0946 | 0.0905 | 0.4512 | 0.7307 |   2.73 | ±4.06% |   10560 |
