function hasValueFromArray(set, array) {
  return array.every((element) => set.has(element));
}

export default hasValueFromArray;
