import { Button, Modal, notification } from 'antd';
import { useState } from 'react';
import {
  IAdmin,
  IErrorResponse,
  IFaculty,
  IStudent,
} from '../../../interfaces';
import { useChangeUserStatusMutation } from '../../../redux/features/admin/userManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

const BlockUser = ({
  userData,
}: {
  userData: IStudent | IFaculty | IAdmin;
}) => {
  const [open, setOpen] = useState(false);
  const [changeStatus, { isLoading }] = useChangeUserStatusMutation();
  const [toast, contextHolder] = notification.useNotification();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    const status =
      userData?.user?.status === 'blocked' ? 'in-progress' : 'blocked';

    const action =
      userData?.user?.status === 'blocked' ? 'unblocked' : 'blocked';

    const result = await changeStatus({
      id: userData?.user?._id,
      data: { status },
    });
    if (result?.data) {
      toast.success({
        message: `User ${action} Successfully!`,
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
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={showModal}>
        {userData?.user?.status === 'blocked' ? 'Unblock' : 'Block'}
      </Button>
      <Modal
        open={open}
        title="Do you want to block this student?"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleOk}
          >
            {isLoading ? 'Blocking...' : 'Block'}
          </Button>,
        ]}
      >
        <h3>{userData?.fullName}</h3>
      </Modal>
    </>
  );
};

export default BlockUser;
