export function getEnergy(year, month) {
  return fetch(
    `http://localhost:4003/energy/${year}/${month}`
  ).then((res) => res.json());
}
