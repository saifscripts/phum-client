import {
  Button,
  Dropdown,
  MenuProps,
  notification,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { SemesterStatus } from '../../../constants';
import {
  IErrorResponse,
  IQueryParam,
  ISemesterStatus,
} from '../../../interfaces';
import {
  useGetAllRegisteredSemestersQuery,
  useUpdateSemesterRegistrationMutation,
} from '../../../redux/features/admin/courseManagementApi';
import flattenErrorMessages from '../../../utils/flattenErrorMessages';

type ITableData = {
  name: string;
  status: ISemesterStatus;
  startDate: string;
  endDate: string;
};

const RegisteredSemesterData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const [page, setPage] = useState(1);
  const [updateSemesterRegistration] = useUpdateSemesterRegistrationMutation();
  const [toast, contextHolder] = notification.useNotification();

  const { data, isFetching } = useGetAllRegisteredSemestersQuery([
    { key: 'limit', value: 5 },
    { key: 'page', value: page },
    { key: 'sort', value: 'status' },
    ...params,
  ]);

  const semesterRegistrationData = data?.registeredSemesters?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      status,
      startDate: moment(new Date(startDate)).format('MMMM'),
      endDate: moment(new Date(endDate)).format('MMMM'),
    })
  );

  const metaData = data?.meta;

  const handleDropdownClick = async (id: string, status: ISemesterStatus) => {
    const result = await updateSemesterRegistration({
      id,
      data: { status },
    });

    if (result?.data) {
      toast.success({
        message: 'Status updated Successfully!',
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

  const items: MenuProps['items'] = [
    {
      label: SemesterStatus.UPCOMING,
      key: SemesterStatus.UPCOMING,
    },
    {
      label: SemesterStatus.ONGOING,
      key: SemesterStatus.ONGOING,
    },
    {
      label: SemesterStatus.ENDED,
      key: SemesterStatus.ENDED,
    },
  ];

  const columns: TableColumnsType<ITableData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'grey';

        if (status === SemesterStatus.UPCOMING) color = 'blue';
        if (status === SemesterStatus.ONGOING) color = 'green';
        if (status === SemesterStatus.ENDED) color = 'red';

        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
    { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
    {
      title: 'Action',
      key: 'action',
      width: '1%',
      render: (item) => (
        <Dropdown
          menu={{
            items,
            onClick: ({ key }) =>
              handleDropdownClick(item?.key, key as ISemesterStatus),
          }}
        >
          <Button>Update</Button>
        </Dropdown>
      ),
    },
  ];

  const onChange: TableProps<ITableData>['onChange'] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === 'filter') {
      const queryParams: IQueryParam[] = [];

      for (const key in filters) {
        filters[key]?.forEach((value) =>
          queryParams.push({ key, value: value as string })
        );
      }

      setParams(queryParams);
    }
  };

  return (
    <>
      {contextHolder}
      <Table
        loading={isFetching}
        dataSource={semesterRegistrationData}
        columns={columns}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        pageSize={metaData?.limit}
        total={metaData?.total}
        onChange={(value) => setPage(value)}
      />
    </>
  );
};

export default RegisteredSemesterData;
