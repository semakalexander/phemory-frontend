const omit: (o: { [key: string]: any }, fields: string[]) => object = (
  o,
  keys
) =>
  Object.keys(o).reduce(
    (res, key) => (keys.includes(key) ? res : { ...res, [key]: o[key] }),
    {}
  );

export { omit };
