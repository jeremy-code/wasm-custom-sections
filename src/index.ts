console.time("getWebAssemblyData");
await import("./getWebAssemblyData.ts").then((mod) => mod.getWebAssemblyData());
console.timeEnd("getWebAssemblyData");

console.time("getBase64Data");
await import("./getBase64Data.ts").then((mod) => mod.getBase64Data());
console.timeEnd("getBase64Data");
