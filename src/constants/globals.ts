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
  'A-',
  'B-',
  'AB-',
  'O-',
] as const;

export const monthOptions = Months.map((item) => ({
  value: item,
  label: item,
}));

export const dayOptions = [
  { value: 'Sat', label: 'Saturday' },
  { value: 'Sun', label: 'Sunday' },
  { value: 'Mon', label: 'Monday' },
  { value: 'Tue', label: 'Tuesday' },
  { value: 'Wed', label: 'Wednesday' },
  { value: 'Thu', label: 'Thursday' },
  { value: 'Fri', label: 'Friday' },
];

export const genderOptions = Genders.map((item) => ({
  value: item,
  label: item[0].toUpperCase() + item.slice(1),
}));

export const bloodGroupOptions = BloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const arrayOfOneToFiftyEight = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58,
] as const;
