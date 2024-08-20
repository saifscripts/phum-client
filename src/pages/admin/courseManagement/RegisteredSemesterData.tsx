import {
  Button,
  Pagination,
  Space,
  Table,
  TableColumnsType,
  TableProps,
} from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IQueryParam } from '../../../interfaces';
import { useGetAllRegisteredSemestersQuery } from '../../../redux/features/admin/courseManagementApi';

type ITableData = {
  name: string;
  status: 'UPCOMING' | 'ONGOING' | 'ENDED';
  startDate: Date;
  endDate: Date;
};

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
  },
  { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
  { title: 'End Date', dataIndex: 'endDate', key: 'endDate' },
  {
    title: 'Action',
    key: 'action',
    width: '1%',
    render: (item) => (
      <Space>
        <Link to={`/admin/registered-semester/edit/${item.key}`}>
          <Button>Update</Button>
        </Link>
      </Space>
    ),
  },
];

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
      startDate,
      endDate,
    })
  );

  const metaData = data?.meta;

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
