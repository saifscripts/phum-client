import { Col, Flex, notification } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHDatePicker from '../../../components/form/PHDatePicker';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import Submit from '../../../components/form/Submit';
import { semesterStatusOptions } from '../../../constants';
import { IErrorResponse } from '../../../interfaces';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagementApi';
import { useCreateSemesterRegistrationMutation } from '../../../redux/features/admin/courseManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const CreateSemesterRegistration = () => {
  const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();
  const [toast, contextHolder] = notification.useNotification();

  const { data: semesters, isLoading: isSemesterLoading } =
    useGetAllSemestersQuery([{ key: 'sort', value: 'year' }]);

  const semesterOptions = semesters?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const onSubmit = async (data: FieldValues) => {
    const semesterRegistrationData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    const result = await createSemesterRegistration(semesterRegistrationData);
    console.log(result);
    if (result?.data) {
      toast.success({
        message: 'Semester registered Successfully!',
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
      <Flex justify="center" align="center">
        <Col span={8}>
          <PHForm onSubmit={onSubmit}>
            <PHSelect
              disabled={isSemesterLoading}
              name="academicSemester"
              label="Academic Semester"
              placeholder="Select Semester"
              options={semesterOptions}
            />
            <PHSelect
              name="status"
              label="Status"
              placeholder="Select Status"
              options={semesterStatusOptions}
            />
            <PHDatePicker
              name="startDate"
              label="Start Date"
              placeholder="Select Start Date"
            />
            <PHDatePicker
              name="endDate"
              label="End Date"
              placeholder="Select End Date"
            />
            <PHInput type="number" name="minCredit" label="Minimum Credit" />
            <PHInput type="number" name="maxCredit" label="Maximum Credit" />
            <Submit />
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateSemesterRegistration;
