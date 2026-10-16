import binaryen from "binaryen";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const module = new binaryen.Module();
module.addCustomSection("dat", await readFile("./input.jpg"));
await mkdir("dist", { recursive: true });
await writeFile("./dist/output.wasm", module.emitBinary());
