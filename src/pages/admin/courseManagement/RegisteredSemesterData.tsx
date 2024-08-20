import {
  Button,
  Dropdown,
  MenuProps,
  Pagination,
  Table,
  TableColumnsType,
  TableProps,
  Tag,
} from 'antd';
import moment from 'moment';
import { useState } from 'react';
import { IQueryParam } from '../../../interfaces';
import { useGetAllRegisteredSemestersQuery } from '../../../redux/features/admin/courseManagementApi';

type ITableData = {
  name: string;
  status: 'UPCOMING' | 'ONGOING' | 'ENDED';
  startDate: string;
  endDate: string;
};

const RegisteredSemesterData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const [page, setPage] = useState(1);

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

  const handleDropdownClick: MenuProps['onClick'] = ({ key }) => {
    alert(key);
  };

  const items: MenuProps['items'] = [
    {
      label: 'UPCOMING',
      key: 'UPCOMING',
    },
    {
      label: 'ONGOING',
      key: 'ONGOING',
    },
    {
      label: 'ENDED',
      key: 'ENDED',
    },
  ];

  const menuProps = { items, onClick: handleDropdownClick };

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

        if (status === 'UPCOMING') color = 'blue';
        if (status === 'ONGOING') color = 'green';
        if (status === 'ENDED') color = 'red';

        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
    { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
    {
      title: 'Action',
      key: 'action',
      width: '1%',
      render: () => (
        <Dropdown menu={menuProps}>
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
