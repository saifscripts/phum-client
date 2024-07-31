import { Button, Col, Divider, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagement/academicManagementApi';

// {
//     "password": "456125",
//     "student": {
//         "name": {
//             "firstName": "John",
//             "lastName": "Doe"
//         },
//         "gender": "male",
//         "dateOfBirth": "2000-05-15",
//         "email": "john.doe44@example.com",
//         "contactNo": "+1234567890",
//         "emergencyContactNo": "+0987654321",
//         "presentAddress": "123 Main St, Springfield, USA",
//         "permanentAddress": "456 Elm St, Springfield, USA",
//         "guardian": {
//             "fatherName": "Jane Doe",
//             "fatherOccupation": "Doctor",
//             "fatherContactNo": "8801859229595",
//             "motherName": "Janny Doe",
//             "motherOccupation": "Teacher",
//             "motherContactNo": "8801859229595"
//         },
//         "localGuardian": {
//             "name": "Jim Beam",
//             "occupation": "Doctor",
//             "contactNo": "+10987654321",
//             "address": "221-B "
//         },
//         "profileImage": "https://url.com/john_doe_profile.jpg",
//         "semester": "665b3a5bb9c595faa365e31b",
//         "academicDepartment": "665b39e5b9c595faa365e30f"
//     }
// }

const CreateStudent = () => {
  const { data, isLoading: isSemesterLoading } = useGetAllSemestersQuery([]);

  const semesterOptions = data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    formData.append('data', JSON.stringify(data));
    console.log(Object.fromEntries(formData));
  };

  return (
    <PHForm onSubmit={onSubmit}>
      <Divider>Personal Info</Divider>
      <Row gutter={24}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="name.firstName" label="First Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="name.middleName" label="Middle Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="name.lastName" label="Last Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="gender" label="Gender" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHDatePicker
            name="dateOfBirth"
            label="Date of Birth"
            placeholder="Select Date of Birth"
          />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="bloodGroup" label="Blood Group" />
        </Col>
      </Row>

      <Divider>Contact Info</Divider>
      <Row gutter={24}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="email" label="Email" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="contactNo" label="Contact No" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="emergencyContactNo" label="Emergency Contact No" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="presentAddress" label="Present Address" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="permanentAddress" label="Permanent Address" />
        </Col>
      </Row>

      <Divider>Guardian Info</Divider>
      <Row gutter={24}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.fatherName" label="Father Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.fatherOccupation" label="Father Occupation" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.fatherContactNo" label="Father Contact No" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.motherName" label="Mother Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.motherOccupation" label="Mother Occupation" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="guardian.motherContactNo" label="Mother Contact No" />
        </Col>
      </Row>

      <Divider>Local Guardian Info</Divider>
      <Row gutter={24}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="localGuardian.name" label="Name" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="localGuardian.occupation" label="Occupation" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="localGuardian.contactNo" label="Contact No" />
        </Col>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHInput name="localGuardian.address" label="Address" />
        </Col>
      </Row>

      <Divider>Academic Info</Divider>
      <Row gutter={24}>
        <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <PHSelect
            disabled={isSemesterLoading}
            name="semester"
            label="Academic Semester"
            placeholder="Select Semester"
            options={semesterOptions || []}
          />
        </Col>
      </Row>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
