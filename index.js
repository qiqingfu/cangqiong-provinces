/**
 * Created by qiqf on 2021/10/12
 */

import { transformHook } from "./hook";
import { checkType } from "./util";
import { PREFECTURE } from "./constant";

class Adaptor {
  /**
   * @param {Object} options
   * @param {string[]?} options.data
   * @param {function?} options.transform
   */
  constructor(options = {}) {
    if (options.data) {
      checkType("constructor", options.data);
    }
    this.data = options.data || [];
    this.transformHook = options.transform || transformHook;
  }

  /**
   * @param s1
   * @param s2
   * @param s3
   * @returns {*[]}
   * @private
   */
  _isMunicipality([s1, s2, s3]) {
    return s2 === PREFECTURE ? [s1, s3] : s1 === s2 ? [s2, s3] : [s1, s2, s3];
  }

  /**
   * @param {string[]} data
   */
  init(data) {
    checkType("init", data);
    this.data = data;
  }

  /**
   *
   * @param {string[]} values
   * @returns {*|[]}
   */
  transform(values) {
    checkType("transform", values);
    return this.transformHook.call(
      this,
      this._isMunicipality(values),
      this.data
    );
  }
}

export default Adaptor;
