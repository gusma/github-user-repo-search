export function limitStringLength(string, limitStringLength) {
  if (string.length > limitStringLength) {
    return string.substring(0, limitStringLength) + '...';
  }
  return string;
}
