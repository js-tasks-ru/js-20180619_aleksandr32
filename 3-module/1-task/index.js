/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = [];
  data.forEach(function (user) {
    if (user.age <= age) {
      result.push(`${user.name}, ${user.balance}`);
    }
  });

  return result.join('\n');
}