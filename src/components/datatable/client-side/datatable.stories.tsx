import * as React from 'react';
import Datatable from './Datatable';
import { DatatableColumn } from './DatatableColumn';

export default { title: 'Datatable' };

interface IContactStory {
  id: number;
  name: string;
  email: string;
  dateOfBirth: string;
}

export const DatatableWithoutAction = () => {
  const datas: IContactStory[] = [
    {
      id: 1,
      name: 'Coumarane COUPPANE',
      email: 'c.coumarane@gmail.com',
      dateOfBirth: '24/07/1975'
    },
    {
      id: 2,
      name: 'Helios',
      email: 'helios@gmail.com',
      dateOfBirth: '01/01/1980'
    },
    {
      id: 3,
      name: 'Stanley',
      email: 'stanley@outlook.com',
      dateOfBirth: '09/07/1980'
    },
    { id: 4, name: 'Coco', email: 'coco@gmail.com', dateOfBirth: '15/06/2000' }
  ];
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Datatable
            dataSource={datas}
            sizePerPage={2}
            pagination={true}
            // sizePerPageList={[2, 5, 10]}
            // paginationSize={5}
            // actions={[
            //   { link: '/contact/:id/edit', icon: 'edit' },
            //   { link: '/contact/:id', icon: 'pageview' }
            // ]}
          >
            <DatatableColumn headerTitle="#" dataField="id" isKey={true} />
            <DatatableColumn headerTitle="Name" dataField="name" />
            <DatatableColumn headerTitle="Email" dataField="email" />
            <DatatableColumn headerTitle="Date of birth" dataField="dateOfBirth" />
          </Datatable>
        </div>
      </div>
    </>
  );
};
