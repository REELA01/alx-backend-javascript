export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }
  const nBuffer = new ArrayBuffer(length);
  const intx8 = new Int8Array(nBuffer, 0, length);
  intx8.set([value], position);
  return new DataView(nBuffer);
}
