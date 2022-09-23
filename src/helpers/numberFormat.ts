/**
 * Format currency pattern de-DE
 * @param value
 * @param maximumFractionDigits
 * @returns {string}
 */
function moneyFormat(
  value: string | number | null | undefined,
  maximumFractionDigits = 2
): string {
  if (typeof value === "string" && value !== "") value = parseFloat(value);

  value = !value ? 0 : value;

  return value.toLocaleString("de-DE", {
    maximumFractionDigits: maximumFractionDigits,
    minimumFractionDigits: maximumFractionDigits,
    style: "currency",
    currency: "EUR",
  });
}

export { moneyFormat };
