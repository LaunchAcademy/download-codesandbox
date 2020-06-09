import Client from "./Client";

(async () => {
  const client = new Client();
  console.log(await client.getSandbox("download-client-integration-e1qu9"));
})();
