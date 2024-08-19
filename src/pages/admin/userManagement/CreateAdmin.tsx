import { Button, Col, Divider, notification, Row } from 'antd';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHFileInput from '../../../components/form/PHFileInput';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import { bloodGroupOptions, genderOptions } from '../../../constants';
import { IErrorResponse } from '../../../interfaces';
import { useCreateAdminMutation } from '../../../redux/features/admin/userManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const CreateAdmin = () => {
  const [createAdmin] = useCreateAdminMutation();
  const [toast, contextHolder] = notification.useNotification();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const adminData = {
      password: import.meta.env.VITE_DEFAULT_PASSWORD,
      admin: data,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(adminData));
    formData.append('file', data.image);

    const result = await createAdmin(formData);

    if (result?.data) {
      toast.success({
        message: 'Admin added Successfully!',
      });

      return true; // this will reset the form
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

  return (
    <>
      {contextHolder}
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
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHDatePicker
              name="dateOfBirth"
              label="Date of Birth"
              placeholder="Select Date of Birth"
            />
          </Col>
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

export default CreateAdmin;
