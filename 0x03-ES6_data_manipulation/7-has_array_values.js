const hasValuesFromArray = (xset, xarray) => {
  for (const item of xarray) {
    if (!xset.has(item)) {
      return false;
    }
  }
  return true;
};

export default hasValuesFromArray;
