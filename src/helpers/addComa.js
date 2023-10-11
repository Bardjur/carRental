export default function addComa(number) {
  let data = number.toString().split('');

  if (data.length > 3) {
    data.splice(-3, 0, ',');
  }

  return data.join('');
}
