const currentYear = new Date().getFullYear();

export const yearOptions = Array(10)
  .fill(null)
  .map((_item, index) => ({
    value: String(currentYear + index),
    label: String(currentYear + index),
  }));

export const Months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const monthOptions = Months.map((item) => ({
  value: item,
  label: item,
}));
