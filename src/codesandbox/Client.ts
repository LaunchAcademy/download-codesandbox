import got, { CancelableRequest } from "got";
import ApiResponse from "./ApiResponse";
class Client {
  private apiHost = "https://codesandbox.io";
  private apiPath = "/api/v1";

  constructor() {}

  public getSandbox(id: string): CancelableRequest<ApiResponse> {
    return this.client().get(`sandboxes/${id}`).json();
  }

  protected client() {
    return got.extend({
      prefixUrl: `${this.apiHost}${this.apiPath}`,
    });
  }
}

export default Client;
