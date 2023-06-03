import React from "react";
import { useTable, useSortBy, useGlobalFilter, usePagination } from "react-table";
import { Breadcrumb, Col, Row, Card, Button, ProgressBar } from "react-bootstrap";
import { COLUMNS, GlobalFilter, Data } from "./data";
import TabsComponent from "../SignalTradeType/TabsComponent";
import ServiceListSignal from "../SignalTradeType/ServiceListSignal";
import { ContextAuth } from "../Context/App";
import { ucfirst } from "../../Helper/helps";

export default function IndexDasboard() {

  const authContext = React.useContext(ContextAuth) as any;
  const [data, setData] = React.useState(Array);
  console.log(authContext?.data?.history_subscription)
  React.useEffect(() =>{
    var CONTENT = new Array;
    authContext?.data?.history_subscription.forEach((values: any, idx: number) =>{
      CONTENT.push({
        IdRef: values?.id_ref,
        Status: values?.status === 'active' ? <span className="text-success">{ucfirst(values?.status)}</span> : <span className="text-danger">{ucfirst(values?.status)}</span>,
        Duration: values?.duration,
        PaymentMethod: ucfirst(values?.payment_method),
        PaymentStatus: <span className="text-success">{ucfirst(values?.payment_status)}</span>,
        StartDate: values?.start_date,
        EndDate: values?.end_date
      })
    });
    setData(CONTENT);
  }, [])
  
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: data as any
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, 
    headerGroups,
    getTableBodyProps, 
    prepareRow, 
    state,
    setGlobalFilter,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  }: any = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <React.Fragment>
      <div className="breadcrumb-header justify-CONTENT-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">Signal Trade</span>
        </div>
      </div>
      <ServiceListSignal/>
      <Row><TabsComponent/></Row>
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Card.Header>
              <h4 className="card-title">Product Summary</h4>
            </Card.Header>
            <Card.Body className="pt-0 example1-table">
              <div className="table-responsive">
                <>
                  <div className="d-flex">
                    <select
                      className=" mb-4 selectpage border me-1"
                      value={pageSize}
                      onChange={(e) => setPageSize(Number(e.target.value))}>
                      {[10, 25, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                  </div>
                  <table
                    {...getTableProps()}
                    className="table table-bordered text-nowrap mb-0">
                    <thead>
                      {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column: any) => (
                            <th
                              {...column.getHeaderProps(column.getSortByToggleProps())}
                              className={column.className}>
                              <span className="tabletitle">{column.render("Header")}</span>
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <i className="fa fa-angle-down"></i>
                                  ) : (
                                    <i className="fa fa-angle-up"></i>
                                  )
                                ) : (
                                  ""
                                )}
                              </span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row: any) => {
                        prepareRow(row);
                        return (
                          <tr className="text-center" {...row.getRowProps()}>
                            {row.cells.map((cell: any) => {
                              return (
                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-block d-sm-flex mt-4 ">
                    <span className="">
                      Page{" "}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{" "}
                    </span>
                    <span className="ms-sm-auto ">
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>
                        {" Previous "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => { previousPage() }}
                        disabled={!canPreviousPage}>
                        {" << "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => { previousPage() }}
                        disabled={!canPreviousPage}>
                        {" < "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => { nextPage() }}
                        disabled={!canNextPage}>{" > "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-1"
                        onClick={() => { nextPage() }}
                        disabled={!canNextPage}>{" >> "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>{" Next "}
                      </Button>
                    </span>
                  </div>
                </>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}
