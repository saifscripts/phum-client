import { Button, Space } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { IAdmin } from '../../../interfaces';
import { useGetSingleAdminQuery } from '../../../redux/features/admin/userManagementApi';
import BlockUser from './BlockUser';

const AdminDetails = () => {
  const { adminId } = useParams();

  const { data, isLoading } = useGetSingleAdminQuery(adminId as string);

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
    profileImg,
  } = data as IAdmin;

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
        <Link to={`/admin/admin-data/edit/${adminId}`}>
          <Button>Update</Button>
        </Link>
        <BlockUser userData={data as IAdmin} />
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
    </div>
  );
};

export default AdminDetails;
