import Client from "./codesandbox/Client";
import { writeFileSync } from "fs";
import { join } from "path";
import ApiResponse from "./codesandbox/ApiResponse";

(async () => {
  const client = new Client();
  const resp: ApiResponse = await client.getSandbox("download-client-integration-e1qu9");
  const fixturePath = join(__dirname, "../validSandbox.json");
  writeFileSync(fixturePath, JSON.stringify(resp.data));
})();
