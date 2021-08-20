/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-console */
export interface RequestInitWithRetry extends RequestInit {
  retries?: number;
  retryDelay?: number;
  retryOn?: number[];
  timeout?: number;
  raw?: boolean;
  skipNoticeErrors?: boolean;
}

interface FetchJSONOptions extends RequestInitWithRetry {
  forceJSONContent?: boolean;
  skipNoticeErrors?: boolean;
}

const defaultOptions: FetchJSONOptions = {
  timeout: 3000,
  retries: 0,
  raw: false,
  forceJSONContent: false,
  skipNoticeErrors: false,
};

const fetchJSON = async <T>(
  url: string,
  options?: FetchJSONOptions
): Promise<T> => {
  console.debug(`Begin fetching (${url})`);
  const finalOptions = { ...defaultOptions, ...options };
  try {
    const response = await fetch(url, finalOptions);
    if (!response.ok) {
      console.error(
        `Failed Fetching (${url}): ${response.statusText}`
      );
      throw new Error(
        `Failed fetching URL: ${url}\n${response.statusText}`
      );
    }

    const data = await response.json();

    console.debug(`Success Feching (${url})`);

    return data;
  } catch (err) {
    console.error(`Failed Fetching (${url}): ${err as string}`);
    throw err;
  }
};

export default fetchJSON;
