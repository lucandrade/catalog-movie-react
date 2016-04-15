export function transformDate(date) {
  let realMonth = date.getMonth() + 1;
  let month = (realMonth + "").length > 1 ? realMonth : "0" + realMonth;
  return [
    date.getFullYear(),
    month,
    date.getDate()
  ].join('-');
}