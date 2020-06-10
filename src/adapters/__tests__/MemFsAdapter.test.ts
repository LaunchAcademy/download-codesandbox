import Sandbox from "../../codesandbox/Sandbox";
import { readFileSync } from "fs";
import { join } from "path";
import Adapter from "../MemFsAdapter";

describe("memfs adater", () => {
  let sandbox: Sandbox;
  let adapter: Adapter;

  beforeEach(() => {
    const sandboxJson = JSON.parse(
      readFileSync(join(__dirname, "../../../test/fixtures/validSandbox.json")).toString(),
    );
    sandbox = new Sandbox(sandboxJson);
    adapter = new Adapter(sandbox);
  });
  it("returns an array of paths", () => {
    expect(Object.keys(adapter.buildFiles()).length).toBeGreaterThan(0);
  });

  it("includes root paths", () => {
    const files = Object.keys(adapter.buildFiles());
    expect(files).toContain("/package.json");
    expect(files).toContain("/index.html");
  });

  it("includes nested paths", () => {
    const files = Object.keys(adapter.buildFiles());
    expect(files).toContain("/src/styles.css");
  });
});
