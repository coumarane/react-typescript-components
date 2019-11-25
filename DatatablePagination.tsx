import * as React from 'react';
import { Row, Col } from 'reactstrap';

interface IDatatablePaginationProps {
  /**
   * @params {Array} Datas to display
   */
  data?: any[];

  /**
   * @params {number} Current page
   */
  currentPage: number;

  /**
   * @params {number} Number of row per page
   */
  sizePerPage: number;

  /**
   * @params {number} Data total
   */
  total: number;

  /**
   * @params {number}Number of pagination number to display
   */
  paginationSize: number;

  /**
   * @params {function} Function which handle page changes
   */
  handleChangePage: (data: any[], page: number) => void;
}

interface IDatatablePaginationState {
  lastPage: number;
}

class DatatablePagination extends React.Component<
  IDatatablePaginationProps,
  IDatatablePaginationState
> {
  constructor(props: IDatatablePaginationProps) {
    super(props);

    this.state = {
      lastPage: 0
    };
  }

  handleChangePage = (page: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    this.setPaginationData(page);
  };

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.data && this.props.data.length) {
      this.setPaginationData(this.props.currentPage);
    }
  }

  componentDidUpdate(
    prevProps: IDatatablePaginationProps,
    prevState: IDatatablePaginationState
  ) {
    // reset page if items array has changed
    if (this.props.data !== prevProps.data) {
      this.setPaginationData(this.props.currentPage);
    }
  }

  render() {
    const { currentPage, total, sizePerPage } = this.props;

    const pages = this.getPages();
    // const lastPage = pages.length;

    const totalPages = Math.ceil(total / sizePerPage);

    const pageNumbers: any[] = [];
    pages.map((item, index) => {
      if (currentPage === +item) {
        pageNumbers.push(
          <li value={item} className="page-item ml-2 active" key={index}>
            <a className="page-link">
              {item}
            </a>
          </li>
        );
      } else {
        pageNumbers.push(
          <li value={item} onClick={this.handleChangePage(+item)} key={index}>
            <a className="page-link">
              {item}
            </a>
          </li>
        );
      }
    });

    return (
      <>
        <Row>
          <Col md={6}>Total: {total}</Col>
          <Col md={6}>
            <nav aria-label="Page navigation">
              <ul className="pagination">
                {currentPage > 1 ? (
                  <li
                    className="page-item"
                    onClick={this.handleChangePage(currentPage - 1)}
                  >
                    <a className="page-link" href="#">
                      <i className="icon">keyboard_arrow_left</i>
                    </a>
                  </li>
                ) : (
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      <i className="icon">keyboard_arrow_left</i>
                    </a>
                  </li>
                )}

                {pageNumbers}

                {totalPages !== currentPage ? (
                  <li
                    className="page-item ml-2"
                    onClick={this.handleChangePage(currentPage + 1)}
                  >
                    <a className="page-link pl-2" href="#default">
                      <i className="icon">keyboard_arrow_right</i>
                    </a>
                  </li>
                ) : (
                  <li className="page-item ml-2 disabled">
                    <a className="page-link pl-2" href="#default">
                      <i className="icon">keyboard_arrow_right</i>
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </Col>
        </Row>
      </>
    );
  }

  getPages = () => {
    const { sizePerPage, paginationSize, total } = this.props;

    let currentPage = this.props.currentPage;

    const totalPages = Math.ceil(total / sizePerPage);

    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }

    let startPage: any = 0;
    let endPage: any = 0;

    if (totalPages <= paginationSize) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrentPage = Math.floor(paginationSize / 2);
      const maxPagesAfterCurrentPage = Math.ceil(paginationSize / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = paginationSize;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - paginationSize + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    return Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    );
  };

  setPaginationData = (page: number) => {
    const { data } = this.props;

    if (data) {
      const total = data.length;
      const currentPage = page;
      const sizePerPage = this.props.sizePerPage ? this.props.sizePerPage : 5;
      const startIndex = (currentPage - 1) * sizePerPage;
      const endIndex = Math.min(startIndex + sizePerPage - 1, total - 1);

      const _data = this.getPaginationData(data, startIndex, endIndex);

      this.props.handleChangePage(_data, page);
    }
  };

  getPaginationData = (data: any[], start: number, end: number) => {
    const result = data.slice(start, end + 1);
    return result;
  };
}

export default DatatablePagination;
