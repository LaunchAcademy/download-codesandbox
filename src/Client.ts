import got from "got";
class Client {
  private apiHost = "https://codesandbox.io";
  private apiPath = "/api/v1";

  constructor() {}

  public getSandbox(id: string) {
    return this.client().get(`sandboxes/${id}`).json();
  }

  protected client() {
    return got.extend({
      prefixUrl: `${this.apiHost}${this.apiPath}`,
    });
  }
}

export default Client;
