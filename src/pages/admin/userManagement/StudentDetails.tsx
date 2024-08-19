import { Button, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { IStudent } from '../../../interfaces';
import { useGetSingleStudentQuery } from '../../../redux/features/admin/userManagementApi';
import BlockUser from './BlockUser';

const StudentDetails = () => {
  const { studentId } = useParams();

  const { data, isLoading } = useGetSingleStudentQuery(studentId as string);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const {
    id,
    fullName,
    gender,
    email,
    contactNo,
    emergencyContactNo,
    bloogGroup,
    presentAddress,
    permanentAddress,
    guardian,
    localGuardian,
    profileImg,
  } = data as IStudent;

  const {
    fatherName,
    fatherOccupation,
    fatherContactNo,
    motherName,
    motherOccupation,
    motherContactNo,
  } = guardian;

  return (
    <div>
      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Profile picture
      </h2>
      <div
        style={{ width: '100px', height: '100px', border: '1px solid grey' }}
      >
        <img src={profileImg} alt="DP" className="w-full" />
      </div>

      <Space>
        <Link to={`/admin/student-data/edit/${studentId}`}>
          <Button>Update</Button>
        </Link>
        <BlockUser userData={data as IStudent} />
      </Space>

      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Personal Info
      </h2>
      <p>ID: {id}</p>
      <p>Name: {fullName}</p>
      <p>Gender: {gender}</p>
      <p>Blood Group: {bloogGroup}</p>

      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Contact Info
      </h2>
      <p>Email: {email}</p>
      <p>Contact No.: {contactNo}</p>
      <p>Emergency Contact No.: {emergencyContactNo}</p>
      <p>Present Address: {presentAddress}</p>
      <p>Permanent Address: {permanentAddress}</p>

      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Guardian Info
      </h2>
      <p>Father Name: {fatherName}</p>
      <p>Father Occupation: {fatherOccupation}</p>
      <p>Father Contact No.: {fatherContactNo}</p>
      <p>Mother Name: {motherName}</p>
      <p>Mother Occupation: {motherOccupation}</p>
      <p>Mother Contact No.: {motherContactNo}</p>

      <h2
        style={{
          fontWeight: 'bold',
        }}
      >
        Local Guardian Info
      </h2>
      <p>Name: {localGuardian?.name}</p>
      <p>Occupation: {localGuardian?.occupation}</p>
      <p>Contact No.: {localGuardian?.contactNo}</p>
      <p>Address: {localGuardian?.address}</p>
    </div>
  );
};

export default StudentDetails;
