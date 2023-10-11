export default function parceAddress(address) {
  if (!address) {
    return;
  }
  const [, city, country] = address.split(',');
  return { city, country };
}
