import extractIdFromUrl from "../extractIdFromUrl";

describe("exractIdFromUrl", () => {
  it("returns null if the url is invalid", () => {
    expect(extractIdFromUrl("https://www.google.com")).toBeUndefined();
  });

  it("returns the id from a codesandbox url", () => {
    expect(extractIdFromUrl("https://codesandbox.io/s/download-client-integration-e1qu9")).toEqual("e1qu9");
  });

  it("returns the id from a codesandbox url", () => {
    expect(extractIdFromUrl("https://codesandbox.io/s/xisgq?file=/tsconfig.json:0-2")).toEqual("xisgq");
  });
});
