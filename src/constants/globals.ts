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

export const Genders = ['male', 'female', 'other'] as const;

export const BloodGroups = [
  'A+',
  'B+',
  'AB+',
  'O+',
  'A+',
  'B+',
  'AB+',
  'O+',
] as const;

export const monthOptions = Months.map((item) => ({
  value: item,
  label: item,
}));

export const genderOptions = Genders.map((item) => ({
  value: item,
  label: item[0].toUpperCase() + item.slice(1),
}));

export const bloodGroupOptions = BloodGroups.map((item) => ({
  value: item,
  label: item,
}));
