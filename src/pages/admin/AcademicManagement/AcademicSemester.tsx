import { useGetAllSemestersQuery } from '../../../redux/features/academicSemeter/academicSemesterApi';

const AcademicSemester = () => {
  const { data: semesters } = useGetAllSemestersQuery('');
  return <div>Total Semesters: {semesters?.length}</div>;
};

export default AcademicSemester;
