const info = <T>(...params: T[]): void => {
  console.log(...params);
};

const error = <T>(...params: T[]): void => {
  console.log(...params);
};

const logger = { info, error };

export default logger;
