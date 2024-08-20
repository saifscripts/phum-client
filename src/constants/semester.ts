import { ISemesterNameCodeMapper } from '../interfaces';

export const semesterOptions = [
  { value: '01', label: 'Autumn' },
  { value: '02', label: 'Summer' },
  { value: '03', label: 'Fall' },
];

export const semesterStatusOptions = [
  { value: 'UPCOMING', label: 'Upcoming' },
  { value: 'ONGOING', label: 'Ongoing' },
  { value: 'ENDED', label: 'Ended' },
];

export const SemesterName = ['Autumn', 'Summer', 'Fall'] as const;
export const SemesterCode = ['01', '02', '03'] as const;

export const SemesterNameCodeMapper: ISemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
