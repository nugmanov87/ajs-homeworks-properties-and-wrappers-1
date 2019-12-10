/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable-next-line array-callback-return */
/* eslint-disable guard-for-in */
export default function orderByProps(obj, order) {
  const newOrderArray = [];

  order.forEach((item) => {
    if (item in obj) {
      newOrderArray.push({
        key: item,
        value: `${obj[item]}`,
      });

      const deleteditem = item;
      delete obj[deleteditem];
    }
  });

  const newArray = [];

  for (const object in obj) {
    newArray.push({
      key: `${object}`,
      value: `${obj[object]}`,
    });
  }

  newArray.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  const resultArray = [...newOrderArray, ...newArray];

  return resultArray;
}
