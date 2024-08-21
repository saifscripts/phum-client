import { Col, Flex, notification } from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHInput from '../../../components/form/PHInput';
import PHSelect from '../../../components/form/PHSelect';
import PHSelectWithWatch from '../../../components/form/PHSelectWithWatch';
import PHTimePicker from '../../../components/form/PHTimePicker';
import Submit from '../../../components/form/Submit';
import { dayOptions } from '../../../constants';
import { IErrorResponse } from '../../../interfaces';
import {
  useGetAllAcademicDepartmentsQuery,
  useGetAllAcademicFacultiesQuery,
} from '../../../redux/features/admin/academicManagementApi';
import {
  useCreateOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllRegisteredSemestersQuery,
  useGetCourseFacultiesQuery,
} from '../../../redux/features/admin/courseManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const CreateOfferedCourse = () => {
  const [createOfferedCourse] = useCreateOfferedCourseMutation();
  const [toast, contextHolder] = notification.useNotification();
  const [academicFacultyId, setAcademicFacultyId] = useState('');
  const [courseId, setCourseId] = useState('');

  const {
    data: registeredSemesters,
    isLoading: isSemesterRegistrationLoading,
  } = useGetAllRegisteredSemestersQuery([]);

  const registeredSemesterOptions =
    registeredSemesters?.registeredSemesters?.map((item) => ({
      value: item._id,
      label: `${item?.academicSemester?.name} ${item?.academicSemester?.year}`,
    }));

  const { data: academicFaculties, isLoading: isAcademicFacultyLoading } =
    useGetAllAcademicFacultiesQuery([]);

  const academicFacultyOptions = academicFaculties?.academicFaculties?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const { data: academicDepartments, isLoading: isAcademicDepartmentLoading } =
    useGetAllAcademicDepartmentsQuery(
      [{ key: 'academicFaculty', value: academicFacultyId }],
      { skip: !academicFacultyId }
    );

  const academicDepartmentOptions = academicDepartments?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const { data: courses, isLoading: isCourseLoading } = useGetAllCoursesQuery(
    []
  );

  const courseOptions = courses?.courses?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const { data: courseFaculties, isLoading: isFacultyLoading } =
    useGetCourseFacultiesQuery(courseId, {
      skip: !courseId,
    });

  const facultyOptions = courseFaculties?.faculties?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const onSubmit = async (data: FieldValues) => {
    const offeredCourseData = {
      ...data,
      startTime: moment(new Date(data.startTime)).format('HH:mm'),
      endTime: moment(new Date(data.endTime)).format('HH:mm'),
      maxCapacity: Number(data.maxCapacity),
      section: Number(data.section),
    };

    const result = await createOfferedCourse(offeredCourseData);

    if (result?.data) {
      toast.success({
        message: 'Offered course created Successfully!',
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
              disabled={isSemesterRegistrationLoading}
              name="semesterRegistration"
              label="Semester Registration"
              placeholder="Select Registered Semester"
              options={registeredSemesterOptions}
            />
            <PHSelectWithWatch
              onValueChange={setAcademicFacultyId}
              disabled={isAcademicFacultyLoading}
              name="academicFaculty"
              label="Academic Faculty"
              placeholder="Select Academic Faculty"
              options={academicFacultyOptions}
            />
            <PHSelect
              disabled={isAcademicDepartmentLoading}
              name="academicDepartment"
              label="Academic Department"
              placeholder="Select Academic Department"
              options={academicDepartmentOptions}
            />
            <PHSelectWithWatch
              onValueChange={setCourseId}
              disabled={isCourseLoading}
              name="course"
              label="Course"
              placeholder="Select Course"
              options={courseOptions}
            />
            <PHSelect
              disabled={isFacultyLoading}
              name="faculty"
              label="Faculty"
              placeholder="Select Faculty"
              options={facultyOptions}
            />
            <PHSelect
              mode="multiple"
              name="days"
              label="Days"
              placeholder="Select Days"
              options={dayOptions}
            />
            <PHTimePicker
              name="startTime"
              label="Start Time"
              placeholder="Start Time"
              minuteStep={15}
            />
            <PHTimePicker
              name="endTime"
              label="End Time"
              placeholder="End Time"
              minuteStep={15}
            />

            <PHInput
              type="number"
              name="maxCapacity"
              label="Maximum Capacity"
            />
            <PHInput type="number" name="section" label="Section" />
            <Submit />
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default CreateOfferedCourse;
