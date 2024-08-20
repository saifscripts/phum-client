import { Button, Modal, notification } from 'antd';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHForm from '../../../components/form/PHForm';
import PHSelect from '../../../components/form/PHSelect';
import Submit from '../../../components/form/Submit';
import { IErrorResponse } from '../../../interfaces';
import { useAssignCourseFacultiesMutation } from '../../../redux/features/admin/courseManagementApi';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const AssignFaculties = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [assignCourseFaculties] = useAssignCourseFacultiesMutation();
  const { data, isLoading: isFacultiesLoading } = useGetAllFacultiesQuery([]);
  const [toast, contextHolder] = notification.useNotification();

  const facultyOptions = data?.faculties?.map((item) => ({
    value: item._id,
    label: item.fullName,
  }));

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = await assignCourseFaculties({
      id,
      data,
    });
    if (result?.data) {
      toast.success({
        message: `Faculties assigned Successfully!`,
      });

      setOpen(false);
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
    setOpen(false);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button onClick={showModal}>Assign Faculties</Button>
      <Modal
        open={open}
        title="Add Course Faculties."
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            mode="multiple"
            disabled={isFacultiesLoading}
            options={facultyOptions}
            name="faculties"
          />
          <Submit />
        </PHForm>
      </Modal>
    </>
  );
};

export default AssignFaculties;
