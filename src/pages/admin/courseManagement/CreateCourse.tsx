import { Col, Flex, notification } from 'antd';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import Submit from '../../../components/form/Submit';
import { IErrorResponse } from '../../../interfaces';
import {
  useCreateCourseMutation,
  useGetAllCoursesQuery,
} from '../../../redux/features/admin/courseManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const CreateCourse = () => {
  const [createCourse] = useCreateCourseMutation();
  const [toast, contextHolder] = notification.useNotification();

  const { data, isLoading: isCourseLoading } = useGetAllCoursesQuery([]);

  const courseOptions = data?.courses?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const onSubmit = async (data: FieldValues) => {
    const courseData = {
      ...data,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses: data?.preRequisiteCourses?.map((item: string) => ({
        course: item,
      })),
    };

    const result = await createCourse(courseData);

    if (result?.data) {
      toast.success({
        message: 'Course created Successfully!',
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
            <PHInput type="text" name="title" label="Title" />
            <PHInput type="text" name="prefix" label="Prefix" />
            <PHInput type="number" name="code" label="Code" />
            <PHInput type="number" name="credits" label="Credits" />
            <PHSelect
              mode="multiple"
              disabled={isCourseLoading}
              name="preRequisiteCourses"
              label="Pre-requisite Courses"
              placeholder="Select Course"
              options={courseOptions}
            />
            <Submit />
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateCourse;
