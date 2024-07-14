import { z } from 'zod';
import { Months, SemesterCode } from '../constants';

export const academicSemesterSchema = z.object({
  name: z.enum(SemesterCode, {
    required_error: 'Name is required!',
  }),
  year: z.string({
    required_error: 'Year is required!',
  }),
  startMonth: z.enum(Months, {
    required_error: 'Start month is required!',
  }),
  endMonth: z.enum(Months, {
    required_error: 'End month is required!',
  }),
});
