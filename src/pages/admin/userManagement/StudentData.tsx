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
import { IQueryParam, IStudent } from '../../../interfaces';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagementApi';

type ITableData = Pick<IStudent, 'fullName' | 'id' | 'email' | 'contactNo'>;

const columns: TableColumnsType<ITableData> = [
  {
    title: 'Name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Contact No.', dataIndex: 'contactNo', key: 'contactNo' },
  {
    title: 'Action',
    key: 'action',
    width: '1%',
    render: ({ key }) => (
      <Space>
        <Link to={`/admin/student-data/${key}`}>
          <Button>Details</Button>
        </Link>
        <Button>Update</Button>
        <Button>Block</Button>
      </Space>
    ),
  },
];

const StudentData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const { data, isFetching } = useGetAllStudentsQuery([
    { key: 'limit', value: 5 },
    { key: 'page', value: page },
    { key: 'sort', value: 'id' },
    ...params,
  ]);

  const studentData = data?.students?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
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
        dataSource={studentData}
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

export default StudentData;
