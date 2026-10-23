import source mod from "../dist/output.wasm";

const getWebAssemblyData = () => {
  const datSections = WebAssembly.Module.customSections(mod, "dat");

  if (datSections.length === 0) {
    throw new Error("No WebAssembly dat section found!");
  }

  return new Uint8Array(datSections[0]!);
};

export { getWebAssemblyData };
