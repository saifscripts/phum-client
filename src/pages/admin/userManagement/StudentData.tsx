import { Button, Space, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { IQueryParam, IStudent } from '../../../interfaces';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagementApi';

type ITableData = Pick<IStudent, 'fullName' | 'id'>;

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
  {
    title: 'Action',
    key: 'action',
    width: '1%',
    render: () => (
      <Space>
        <Button>Update</Button>
        <Button>Delete</Button>
        <Button>Block</Button>
      </Space>
    ),
  },
];

const StudentData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const { data: students, isFetching } = useGetAllStudentsQuery(params);

  const studentData = students?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

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
    <Table
      loading={isFetching}
      dataSource={studentData}
      columns={columns}
      onChange={onChange}
    />
  );
};

export default StudentData;
