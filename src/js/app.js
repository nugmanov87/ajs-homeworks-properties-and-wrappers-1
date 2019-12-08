const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function sort(hero, sortValue) {
  const arrObj = [];
  for (const key in hero) {
    if (Object.prototype.hasOwnProperty.call(hero, key)) {
      arrObj.push({
        key,
        value: hero[key],
      });
    }
  }

  for (let i = sortValue.length - 1; i > -1; i -= 1) {
    arrObj.sort((a) => {
      if (a.key === sortValue[i]) return -1;
      return 1;
    });
  }

  const arrTemp = arrObj.splice(sortValue.length);
  arrTemp.sort((a, b) => {
    if (a.key > b.key) return 1;
    return -1;
  });
  const arrReturn = arrObj.concat(arrTemp);
  return arrReturn;
}
sort(obj, ['name', 'level']);
