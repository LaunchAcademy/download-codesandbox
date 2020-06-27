import Client from "./codesandbox/Client";
import MemFsAdapter from "./adapters/MemFsAdapter";
import Sandbox from "./codesandbox/Sandbox";
import extractIdFromUrl from "./codesandbox/extractIdFromUrl";

class DownloadedSandbox {
  static getByUrl(url: string) {
    const id = extractIdFromUrl(url);
    if (id) {
      return this.getById(id);
    } else {
      return Promise.resolve(undefined);
    }
  }

  static getById(id: string) {
    const client = new Client();
    return client.getSandbox(id).then((sandboxJson) => {
      const sandbox = new Sandbox(sandboxJson.data);
      return new MemFsAdapter(sandbox).buildFiles();
    });
  }
}

export default DownloadedSandbox;
