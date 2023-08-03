export function getCustomPlaceholder(filterType: any) {
  if (filterType === "manufacturer") {
    return "Manufacturer";
  }
  if (filterType === "state") {
    return "Province";
  }
  if (filterType === "city") {
    return "City";
  }
  return "Select option";
}
