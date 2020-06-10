import { Directory } from "./Directory";

class DirectorySet {
  map: Map<string, Directory>;

  constructor(directoryList: Directory[]) {
    this.map = new Map();
    directoryList.forEach((directory) => {
      this.map.set(directory.shortid, directory);
    });
  }

  public get(shortid: string | undefined | null): Directory | undefined {
    if (shortid) {
      return this.map.get(shortid);
    } else {
      return undefined;
    }
  }

  public get size() {
    return this.map.size;
  }
}

export default DirectorySet;
