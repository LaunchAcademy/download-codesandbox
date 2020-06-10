import Sandbox from "../codesandbox/Sandbox";
import { Volume, DirectoryJSON } from "memfs";
import { join, dirname } from "path";
import Module from "../codesandbox/Module";
import Directory from "../codesandbox/Directory";

class MemFsAdapter {
  sandbox: Sandbox;
  constructor(sandbox: Sandbox) {
    this.sandbox = sandbox;
  }

  buildFiles(): DirectoryJSON {
    const volume = new Volume();
    this.sandbox.modules.forEach((mod) => {
      if (!mod.is_binary) {
        volume.mkdirpSync(dirname(join("/", this.getPath(mod))));
        volume.writeFileSync(join("/", this.getPath(mod)), mod.code, { flag: "w+" });
      }
    });
    return volume.toJSON();
  }

  private getPath(mod: Module | Directory): string {
    const parentDir = this.sandbox.directorySet.get(mod.directory_shortid);
    if (parentDir) {
      return this.getPath(parentDir) + "/" + mod.title;
    } else {
      return mod.title;
    }
  }
}

export default MemFsAdapter;
