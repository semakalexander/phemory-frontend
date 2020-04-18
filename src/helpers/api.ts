const stringifyQuery = (
  api: string,
  queryConfig: { [key: string]: string | undefined }
) =>
  Object.keys(queryConfig).reduce(
    (url, key) =>
      queryConfig[key] === undefined
        ? url
        : `${url}&${key}=${queryConfig[key]}`,
    `${api}?`
  );

export { stringifyQuery };
