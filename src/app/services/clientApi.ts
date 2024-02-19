import { get, post } from "./api";

async function postClient(url: string, payload?: Record<string, string>) {
  return post(url, payload, null);
}

async function getClient(url: string, payload?: Record<string, string>) {
  return get(url, payload, null);
}

export { postClient, getClient };