import { test } from "vitest";

test("uncompress benchmarks", async ({ bench }) => {
  await bench.compare(
    bench("getWebAssemblyData", async () => {
      return await import(`./getWebAssemblyData.ts`).then((mod) => {
        mod.getWebAssemblyData();
      });
    }),
    bench("getBase64Data", async () => {
      return await import(`./getBase64Data.ts`).then((mod) => {
        mod.getBase64Data();
      });
    }),
    {
      subtractTimerOverhead: true,
    },
  );
});
