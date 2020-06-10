import { Directory } from "../Directory";
import DirectorySet from "../DirectorySet";

describe("DirectorySet", () => {
  let directories: Directory[];
  let directorySet: DirectorySet;
  beforeEach(() => {
    directories = [
      {
        directory_shortid: null,
        id: "e59f5cd8-84d7-409f-a60e-7876aa0e71c4",
        inserted_at: "2020-06-09T02:08:43",
        shortid: "GXOoy",
        source_id: "c9f471e9-7389-4624-a86d-01325610968a",
        title: "src",
        updated_at: "2018-02-28T16:00:15",
      },
      {
        directory_shortid: null,
        id: "e59f5cd8-84d7-409f-a60e-7876aa0e71c5",
        inserted_at: "2020-05-09T02:08:43",
        shortid: "GXOpy",
        source_id: "c9f471e9-7389-4634-a86d-013256109685",
        title: "lib",
        updated_at: "2018-05-28T16:00:15",
      },
    ];

    directorySet = new DirectorySet(directories);
  });

  it("has two entries", () => {
    expect(directorySet.size).toEqual(2);
  });

  it("gets on the basis of shortid", () => {
    expect(directorySet.get("GXOpy")).toBeDefined();
  });

  it("returns undefined for a nonexistent shortid", () => {
    expect(directorySet.get("234213")).toBeUndefined();
  });
});
