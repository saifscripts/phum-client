import { Button, Col, Divider, notification, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import PHFileInput from '../../../components/form/PHFileInput';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants';
import { IErrorResponse } from '../../../interfaces';
import {
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
} from '../../../redux/features/admin/userManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const UpdateAdmin = () => {
  const { adminId } = useParams();
  const [updateAdmin] = useUpdateAdminMutation();
  const [toast, contextHolder] = notification.useNotification();

  const {
    data: adminDefaultValues,
    isLoading: isAdminLoading,
    refetch,
  } = useGetSingleAdminQuery(adminId as string);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const adminData = {
      admin: data,
    };

    const result = await updateAdmin({
      id: adminId as string,
      data: adminData,
    });

    if (result?.data) {
      refetch();
      toast.success({
        message: 'Admin data updated successfully!',
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

  if (isAdminLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {contextHolder}
      <PHForm onSubmit={onSubmit} defaultValues={adminDefaultValues}>
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

        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </>
  );
};

export default UpdateAdmin;
