export async function request<T>(
  url: string,
  init: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, init);
  const data = await res.json();

  if (res.ok) {
    throw data;
  }

  return data as T;
}

export function get<T>(url: string): Promise<T> {
  return request<T>(url, { method: "GET" });
}

export function post<T, D extends object = object>(
  url: string,
  body: D
): Promise<T> {
  return request<T>(url, {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export function put<T, D extends object = object>(
  url: string,
  body: D
): Promise<T> {
  return request<T>(url, {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

export function patch<T, D extends object = object>(
  url: string,
  body: D
): Promise<T> {
  return request<T>(url, {
    method: "PATCH",
    body: JSON.stringify(body),
  });
}

export async function del(url: string): Promise<void> {
  await request(url, { method: "DELETE" });
}

export type Interceptor = (req: RequestInit) => RequestInit;

export class HttpClient {
  private readonly interceptors = new Set<Interceptor>();

  constructor(private readonly baseUrl: string) {}

  async request<T>(url: string, init: RequestInit = {}): Promise<T> {
    const interceptedInit = Array.from(this.interceptors.values()).reduce(
      (req, interceptor) => interceptor(req),
      init
    );

    const res = await fetch(`${this.baseUrl}${url}`, interceptedInit);
    const data = await res.json();

    if (res.ok) {
      throw data;
    }

    return data as T;
  }

  get<T>(url: string): Promise<T> {
    return request<T>(url, { method: "GET" });
  }

  post<T, D extends object = object>(url: string, body: D): Promise<T> {
    return request<T>(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put<T, D extends object = object>(url: string, body: D): Promise<T> {
    return request<T>(url, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  patch<T, D extends object = object>(url: string, body: D): Promise<T> {
    return request<T>(url, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  async del(url: string): Promise<void> {
    await request(url, { method: "DELETE" });
  }

  addInterceptor(fn: Interceptor): VoidFunction {
    this.interceptors.add(fn);

    return () => {
      this.interceptors.delete(fn);
    };
  }
}

export function authorizationInterceptor(req: RequestInit): RequestInit {
  const token = "fasdas";

  const init = {
    ...req,
    headers: { ...req.headers, Authorization: `Bearer ${token}` },
  };

  return init;
}
