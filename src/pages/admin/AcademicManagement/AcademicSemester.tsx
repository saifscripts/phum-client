import { Table, TableColumnsType, TableProps } from 'antd';
import { useState } from 'react';
import { IAcademicSemester, IQueryParam } from '../../../interfaces';
import { useGetAllSemestersQuery } from '../../../redux/features/admin/academicManagementApi';

type ISemesterData = Pick<
  IAcademicSemester,
  '_id' | 'name' | 'year' | 'startMonth' | 'endMonth'
>;

const columns: TableColumnsType<ISemesterData> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    filters: [
      {
        text: 'Autumn',
        value: 'Autumn',
      },
      {
        text: 'Summer',
        value: 'Summer',
      },
      {
        text: 'Fall',
        value: 'Fall',
      },
    ],
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
    filters: [
      {
        text: '2024',
        value: '2024',
      },
      {
        text: '2025',
        value: '2025',
      },
      {
        text: '2026',
        value: '2026',
      },
    ],
  },
  {
    title: 'Start Month',
    dataIndex: 'startMonth',
    key: 'startMonth',
  },
  {
    title: 'End Month',
    dataIndex: 'endMonth',
    key: 'endMonth',
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<IQueryParam[]>([]);
  const { data: semesters, isFetching } = useGetAllSemestersQuery(params);

  const semesterData = semesters?.map(
    ({ _id, name, year, startMonth, endMonth }) => ({
      key: _id,
      name,
      year,
      startMonth,
      endMonth,
    })
  );

  const onChange: TableProps<ISemesterData>['onChange'] = (
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
      dataSource={semesterData}
      columns={columns}
      onChange={onChange}
    />
  );
};

export default AcademicSemester;
