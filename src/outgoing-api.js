const USDtoILSRate = 3.27;

const outgoings = [
  { title: "Pelephone", price: 49.9, due: "21/MM" },
  { title: "Va'ad Bait", price: 140, due: "01/MM", splitable: "1/3" },
  { title: "Deliveries", price: 3.9, due: "07/MM" },
  { title: "Tami4", price: 89.9, due: "10/MM", splitable: "1/3" },
  { title: "iCloud", price: 11.9, due: "11/MM" },
  { title: "Blend - Goladstar", price: 132, due: "13/MM", splitable: "1/2" },
  { title: "Spotify", price: 19.9, due: "14/MM" },
  { title: "Netflix", price: 59.9, due: "15/MM" },
  { title: "Egghead", price: 150 * USDtoILSRate, due: "12/05/YYYY" },
  { title: "LevelUpTuts", price: 180 * USDtoILSRate, due: "02/08/YYYY" },
  { title: "The Athletic", price: 171.9, due: "23/10/YYYY" },
  { title: "Seven", price: 199.9, due: "27/11/YYYY" },
  { title: "HEY", price: 99 * USDtoILSRate, due: "13/12/YYYY" },
  { title: "GoDaddy", price: 294, due: "31/12/YYYY" },
];

const filterOutgoingByType = (type) => ({ due }) => due.includes(type);
const ANNUAL_TYPE = "YYYY";
const MONTHLY_TYPE = "MM";
const filterMonthlyOutgoings = filterOutgoingByType(MONTHLY_TYPE);
const filterAnnualOutgoings = filterOutgoingByType(ANNUAL_TYPE);
const getTotalSpentPerPeriod = (outgoings) =>
  Math.round(
    outgoings.map(({ price }) => price).reduce((acc, curr) => acc + curr, 0)
  );

export const getAllOutgoings = () => outgoings;
export const getMonthlyOutgoings = () =>
  getAllOutgoings()
    .filter(filterMonthlyOutgoings)
    .sort((a, b) => (a.price > b.price ? -1 : 1));
export const getAnnualOutgoings = () =>
  getAllOutgoings()
    .filter(filterAnnualOutgoings)
    .sort((a, b) => (a.price > b.price ? -1 : 1));
export const getAnnualTotalSpentPerYear = () =>
  getTotalSpentPerPeriod(getAnnualOutgoings());
export const getMonthlyTotalSpentPerMonth = () =>
  getTotalSpentPerPeriod(getMonthlyOutgoings());
