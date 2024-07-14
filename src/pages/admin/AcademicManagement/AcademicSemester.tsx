import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement/academicManagementApi';

const AcademicSemester = () => {
  const { data: semesters } = useGetAllSemestersQuery('');
  return <div>Total Semesters: {semesters?.data?.length}</div>;
};

export default AcademicSemester;
