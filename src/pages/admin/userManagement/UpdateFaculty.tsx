import { Button, Col, Divider, notification, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PHFileInput from '../../../components/form/PHFileInput';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants';
import { IErrorResponse } from '../../../interfaces';
import { useGetAllAcademicDepartmentsQuery } from '../../../redux/features/admin/academicManagementApi';
import {
  useGetSingleFacultyQuery,
  useUpdateFacultyMutation,
} from '../../../redux/features/admin/userManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const UpdateFaculty = () => {
  const { facultyId } = useParams();
  const [updateFaculty] = useUpdateFacultyMutation();
  const [toast, contextHolder] = notification.useNotification();

  const {
    data: facultyData,
    isLoading: isFacultyLoading,
    refetch,
  } = useGetSingleFacultyQuery(facultyId as string);

  const facultyDefaultValues = {
    ...facultyData,
    academicDepartment: facultyData?.academicDepartment?._id,
  };

  const { data: academicDepartments, isLoading: isAcademicDepartmentLoading } =
    useGetAllAcademicDepartmentsQuery([]);

  const academicDepartmentOptions = academicDepartments?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const facultyData = {
      faculty: data,
    };

    const result = await updateFaculty({
      id: facultyId as string,
      data: facultyData,
    });

    if (result?.data) {
      refetch();
      toast.success({
        message: 'Faculty data updated successfully!',
      });
    } else {
      const description = flattenErrorMessages(
        (result as IErrorResponse)?.error?.data?.errorSources
      );
      toast.error({
        message: (result as IErrorResponse)?.error?.data?.message,
        description,
      });
    }
  };

  if (isFacultyLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {contextHolder}
      <PHForm onSubmit={onSubmit} defaultValues={facultyDefaultValues}>
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
            <PHInput name="designation" label="Designation" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              name="gender"
              label="Gender"
              placeholder="Select Gender"
              options={genderOptions}
            />
          </Col>
          {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHDatePicker
              name="dateOfBirth"
              label="Date of Birth"
              placeholder="Select Date of Birth"
            />
          </Col> */}
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              name="bloogGroup"
              label="Blood Group"
              placeholder="Select Blood Group"
              options={bloodGroupOptions}
            />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHFileInput label="Profile Image" />
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

        <Divider>Academic Info</Divider>
        <Row gutter={24}>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect
              disabled={isAcademicDepartmentLoading}
              name="academicDepartment"
              label="Academic Department"
              placeholder="Select Academic Department"
              options={academicDepartmentOptions}
            />
          </Col>
        </Row>
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </>
  );
};

export default UpdateFaculty;
