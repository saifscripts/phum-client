import { Pagination, Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { IQueryParam } from '../../../interfaces';
import { ICourse } from '../../../interfaces/course.interface';
import { useGetAllCoursesQuery } from '../../../redux/features/admin/courseManagementApi';
import AssignFaculties from './AssignFaculties';

type ITableData = Pick<ICourse, 'title' | 'prefix' | 'code' | 'credits'>;

const columns: TableColumnsType<ITableData> = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Prefix',
    dataIndex: 'prefix',
    key: 'prefix',
  },
  { title: 'Code', dataIndex: 'code', key: 'code' },
  { title: 'Credits', dataIndex: 'credits', key: 'credits' },
  {
    title: 'Action',
    key: 'action',
    width: '1%',
    render: (item) => <AssignFaculties id={item?.key} />,
  },
];

const CourseData = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const [page, setPage] = useState(1);

  const { data, isFetching } = useGetAllCoursesQuery([
    { key: 'limit', value: 5 },
    { key: 'page', value: page },
    //   { key: 'sort', value: 'status' },
    ...params,
  ]);

  const courseData = data?.courses?.map(
    ({ _id, title, prefix, code, credits }) => ({
      key: _id,
      title,
      prefix,
      code,
      credits,
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
        dataSource={courseData}
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

export default CourseData;
