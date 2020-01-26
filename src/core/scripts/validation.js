const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;


/**
 * Класс для валидации значений
 */
export default class Validation {
  /**
   * Значение не пустое
   * @param {string} value
   * @returns {boolean}
   */
  static notEmpty = (value) => {
    return value !== null && value !== undefined && value.toString().trim().length > 0;
  };

  /**
   * Валидация пароля
   * @param value
   */
  static isPassword = (value) => {
    return (
      value.length > 5 && value.match('[0-9]') && value.match('[A-ZА-Я]') && !value.includes(' ')
    );
  };

  static isEmail = (value) => {
    return !this.notEmpty(value) || value.match(emailRegExp) !== null;
  };

  /**
   * Проверка входждения в диапазон
   * @param {any} value
   * @param {number} min
   * @param {number} max
   * @returns {boolean}
   */
  static inRange = (min: number = 0, max: number, value) => {
    if (max === null) {
      max = Number.MAX_SAFE_INTEGER;
    }
    value = +value;

    return value >= min && value <= max;
  };
}
