import { ExceptionFactory } from "@/config/errors";

const base = "http://localhost:8080";
const routes = {
  login: `${base}/auth/login`,
  getListDepartments: `${base}/constant/list/departments`,
  getListApproverGroups: `${base}/constant/list/approver-groups`,
};

async function post(
  url: string,
  payload?: Record<string, string>,
  cookieHeader?: string | null
) {
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

    const json = await response.json();
    if (json.error) {
      throw ExceptionFactory.create(json.error, json.message);
    }
    return json;
  } catch (error) {
    throw error;
  }
}

async function get(
  url: string,
  payload?: Record<string, string>,
  cookieHeader?: string | null
) {
  try {
    const params = payload ? new URLSearchParams(payload) : null;
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
    return response.json();
  } catch (error) {
    throw new Error(String(error));
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

export { routes, post, get, postForm };