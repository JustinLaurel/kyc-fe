const base = "http://localhost:8080";
const routes = {
  login: `${base}/auth/login`,
}

async function post(url: string, payload?: Record<string, string>) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: payload ? JSON.stringify(payload) : null,
    });

    const json = await response.json();
    console.log(`json`, json);
    if (json.error) {
      throw new Error(json.error);
    }
    return json;
  } catch (error) {
    console.log(`error`, error);
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

async function get(url: string, payload?: Record<string, string>) {
  try {
    const params = payload ? new URLSearchParams(payload) : null;
    const withParams = params ? `${url}?${params.toString()}` : url;
    const response = await fetch(withParams, {
      method: "GET",
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    throw new Error(String(error));
  }
}

export { routes, post, postForm, get };
