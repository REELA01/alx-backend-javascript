const cleanSet = (xset, xstartString) => {
  if (xstartString === undefined || xstartString.length === 0) {
    return '';
  }
  return [...xset]
    .filter((parametro) => (parametro !== undefined ? parametro.startsWith(xstartString) : ''))
    .map((parametro) => (parametro !== undefined ? parametro.slice(xstartString.length) : ''))
    .join('-');
};

export default cleanSet;
