import { queryOptions } from "@tanstack/react-query";
import { get } from "./api";
import { routes } from "../config/routes";
import { ListItem } from "../config/types";

function triggerSuspense() {
  return queryOptions({
    queryKey: ["suspense", Math.random()],
    queryFn: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve("Suspense resolved!");
      }, 5000);
    }),
    staleTime: 60 * 1000,
  });
}
export { triggerSuspense };
