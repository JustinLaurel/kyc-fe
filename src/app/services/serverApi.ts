import { cookies } from "next/headers";
import { get, post } from "./api";

async function postServer(url: string, payload?: Record<string, string | number>) {
  return post(url, payload, cookies().toString());
}

async function getServer(url: string, payload?: Record<string, string | number>) {
  return get(url, payload, cookies().toString());
}

export { postServer, getServer };
