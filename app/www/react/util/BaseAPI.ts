const DEFAULT_OPTIONS = {
  headers: {},
  query: {},
};

// Wrapper around the Fetch API that produces JSON automatically
const safeFetch = (input, ...args) => {
  return fetch(input, ...args).then(async (resp) => {
    let ret;
    if (!resp.ok) {
      let throwable;
      try {
        ret = await resp.json();
      } catch (err) {
        throwable = { ...err, status: resp.status };
        throw throwable;
      }
      throwable = { status: resp.status, response: ret };
      throw throwable;
    }

    return resp.json().catch(() => ({}));
  });
};

class BaseAPI {
  static mergeWithQueryParams(url, { query = {} } = {}) {
    // Remove undefined values so they don't get misinterpreted by the backend
    const queryNames = Object.keys(query).filter((k) => query[k] !== undefined);

    if (query && queryNames.length > 0) {
      return queryNames
        .slice(1)
        .reduce(
          (acc, k) => `${acc}&${k}=${query[k]}`,
          `${url}?${queryNames[0]}=${query[queryNames[0]]}`
        );
    }

    return url;
  }

  static getDefaultHeaders({ requestType }) {
    if (requestType === 'POST') {
      return { 'Content-Type': 'application/json' };
    }

    return {};
  }

  static get(url, options = DEFAULT_OPTIONS) {
    const { headers: __headers, ...optionsNoHeaders } = options;
    return safeFetch(`${BaseAPI.mergeWithQueryParams(url, optionsNoHeaders)}`, {
      method: 'GET',
      headers: {
        ...BaseAPI.getDefaultHeaders({ requestType: 'GET' }),
        ...options.headers,
      },
      ...optionsNoHeaders,
    });
  }

  static post(url, options = DEFAULT_OPTIONS) {
    const { headers: __headers, ...optionsNoHeaders } = options;
    return safeFetch(`${BaseAPI.mergeWithQueryParams(url, optionsNoHeaders)}`, {
      method: 'POST',
      headers: {
        ...BaseAPI.getDefaultHeaders({ requestType: 'POST' }),
        ...options.headers,
      },
      ...optionsNoHeaders,
    });
  }
}

export default BaseAPI;
