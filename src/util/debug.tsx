import { use } from "react";

async function triggerSuspenseServer(duration = 2000) {
  return await new Promise((resolve) =>
    setTimeout(() => resolve("Data loaded"), duration)
  );
}

function triggerSuspenseClient(duration: number) {
  return use(triggerSuspenseServer(duration));
}

export { triggerSuspenseServer, triggerSuspenseClient };
