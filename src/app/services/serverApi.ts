import { cookies } from "next/headers";
import { get, post } from "./api";

async function postServer(url: string, payload?: Record<string, string>) {
  return post(url, payload, cookies().toString());
}

async function getServer(url: string, payload?: Record<string, string>) {
  return get(url, payload, cookies().toString());
}

export { postServer, getServer };
