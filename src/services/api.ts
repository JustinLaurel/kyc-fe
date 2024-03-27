import { ExceptionFactory } from "@/config/errors";

async function post<T = any>(
  url: string,
  payload?: Record<string, string | number | null>,
  cookieHeader?: string | null
): Promise<T> {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: payload ? JSON.stringify(payload) : null,
    } as any;
    if (cookieHeader) {
      options.headers.Cookie = cookieHeader;
    }

    const response = await fetch(url, options);
    let json;
    try {
      json = await response.json();
    } catch (error) {
      throw error;
    }

    if (json.error) {
      throw ExceptionFactory.create(json.error, json.message);
    }
    return json;
  } catch (error) {
    throw error;
  }
}

async function get<T = any>(
  url: string,
  payload?: Record<string, string | number | null>,
  cookieHeader?: string | null
): Promise<T> {
  try {
    const params = payload ? new URLSearchParams(payload as any) : null;
    const withParams = params ? `${url}?${params.toString()}` : url;
    const options = {
      method: "GET",
      credentials: "include",
    } as any;
    if (cookieHeader) {
      options.headers = {
        Cookie: cookieHeader,
      };
    }
    const response = await fetch(withParams, options);
    let json;
    try {
      json = await response.json();
    } catch (error) {
      throw error;
    }

    if (json.error) {
      throw ExceptionFactory.create(json.error, json.message);
    }
    return json;
    // return new Promise((resolve) => { setTimeout(() => resolve(json), 2000)});
  } catch (error) {
    throw error;
  }
}

async function postForm(url: string, formData: FormData) {
  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    return response.json();
  } catch (error) {
    throw new Error(String(error));
  }
}

export { post, get, postForm };
