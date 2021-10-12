/**
 * Created by qiqf on 2021/10/12
 */

/**
 * @param method
 * @param value
 */
export const checkType = (method, value) => {
  if (!Array.isArray(value))
    throw new Error(`
      ${method} Error: 
        Incorrect pass parameter type, expected array, result ${typeof value}
    `);
};
