import { readFileSync } from "fs";
import { join } from "path";
import Sandbox from "../Sandbox";
describe("Sandbox", () => {
  let sandbox: Sandbox;

  beforeEach(() => {
    const sandboxJson = JSON.parse(
      readFileSync(join(__dirname, "../../../test/fixtures/validSandbox.json")).toString(),
    );
    sandbox = new Sandbox(sandboxJson);
  });
  it("has a DirectorySet", () => {
    expect(sandbox.directorySet).toBeDefined();
    expect(sandbox.directorySet.size).not.toEqual(0);
  });

  it("has a list of modules", () => {
    expect(sandbox.modules).toBeDefined();
    expect(sandbox.modules.length).not.toEqual(0);
  });
});
