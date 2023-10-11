export default function filteredCars(cars, filter) {
  const brand = filter.brand.trim() !== '' ? filter.brand.trim() : null;
  const price = Number(filter.price) ? Number(filter.price) : null;
  const from = Number(filter.from) ? Number(filter.from) : null;
  const to = Number(filter.to) ? Number(filter.to) : null;

  return cars.filter(car => {
    const carPrice = Number(car.rentalPrice.replace('$', ''));

    const isBrand = !brand || brand === 'All' || brand === car.make;
    const isPrice = !price || carPrice <= price;
    const isFrom = !from || car.mileage >= from;
    const isTo = !to || car.mileage <= to;

    return isBrand && isPrice && isFrom && isTo;
  });
}
