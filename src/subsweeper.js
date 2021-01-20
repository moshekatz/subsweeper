import {
  getMonthlyOutgoings,
  getAnnualOutgoings,
  getMonthlyTotalSpentPerMonth,
  getAnnualTotalSpentPerYear,
} from "./outgoing-api.js";

const stats = document.getElementById("stats");
const monthlyList = document.getElementById("monthly-list");
const annualList = document.getElementById("annual-list");

const createStatCard = (total, period) =>
  `<div>~${total} ILS Paid ${period}</div>`;
const paidMonthly = createStatCard(getMonthlyTotalSpentPerMonth(), "Monthly");
const paidAnnualy = createStatCard(getAnnualTotalSpentPerYear(), "Annualy");
stats.innerHTML = `${paidMonthly}${paidAnnualy}`;

const createOutgoingCard = ({ title, price, due }) =>
  `<li>
  <div class="outgoing-card">
    <span class="outgoing-card-title">${title}</span>
    <span class="outgoing-card-price">${price}</span>
    <span class="outgoing-card-due">${due}</span>
  </div>
</li>`;

const monthlyListLIs = getMonthlyOutgoings()
  .map(createOutgoingCard)
  .reduce((acc, curr) => acc.concat(curr));
monthlyList.innerHTML = monthlyListLIs;

const annualListLIs = getAnnualOutgoings()
  .map(createOutgoingCard)
  .reduce((acc, curr) => acc.concat(curr));
annualList.innerHTML = annualListLIs;
