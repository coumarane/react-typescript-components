import * as React from 'react';
import { FormGroup, Label, Input, Col } from 'reactstrap';

interface IDatatableFiltersProps {
  sizePerPageList?: number[];
  search?: string;
  dataSource?: any;
  handleFilterSearch: (
    e: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>
  ) => void;
}

export const DatatableFilters: React.SFC<IDatatableFiltersProps> = props => {
  const { search, handleFilterSearch } = props;
  return (
    <>
      {/* {sizePerPageList && sizePerPageList.length  > 0 &&
        <Col md={6}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="nbEntryToShow" className="mr-sm-2">
              Show
            </Label>
            <Input type="select" name="nbEntryToShow">
              {sizePerPageList &&
                sizePerPageList.map((item, index) => (
                  <React.Fragment key={index}>
                    <option value={item}>{item}</option>
                  </React.Fragment>
                ))}
            </Input>
          </FormGroup>
        </Col>
        } */}

          <FormGroup row>
            <Label for="search" sm={2}>
              Search
            </Label>
            <Col sm={6}>
            <Input
              type="text"
              name="search"
              value={search}
              onChange={handleFilterSearch}
            />
            </Col>
          </FormGroup>
   
    </>
  );
};
