/**
 * Created by qiqf on 2021/10/12
 */

/**
 * @param v
 * @param c
 * @param i
 * @returns {*[]|*}
 */
export const transformHook = (v, c, i = 0) => {
  if (!c || c.length <= 0) return v.slice(i);
  const data = find(c, (_) => _.name === v[i]);
  return data ? [data.number, ...transformHook(v, data.children, ++i)] : [];
};

function find(list, f) {
  return list.filter(f)[0];
}
