import DirectorySet from "./DirectorySet";
import Module from "./Module";
import { Directory } from "./Directory";

class Sandbox {
  directorySet: DirectorySet;
  modules: Module[];
  constructor(data: { modules: Module[]; directories: Directory[] }) {
    this.modules = data.modules;
    this.directorySet = new DirectorySet(data.directories);
  }
}

export default Sandbox;
