import $ from "jquery";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import testJSON from "../test.json";

$(document).ready(function () {
  $("#datatablesSimple").DataTable({
    data: testJSON,
    columns: [
      {
        title: "MOM Node",
        className: "all",
      },
      {
        title: "CPU",
        className: "all",
      },
      {
        title: "Memory",
        className: "all",
      },
    ],
    columnDefs: [
      {
        targets: 0,
        data: "vm_name",
        render: function (data, type, full, meta) {
          return data;
        },
      },
      {
        targets: 1,
        data: "cpu",
        render: function (data, type, full, meta) {
          return data;
        },
      },
      {
        targets: 2,
        data: "mem",
        render: function (data, type, full, meta) {
          return data;
        },
      },
    ],
  });
});

const MomNodes = () => {
  console.log(testJSON);
  return (
    <main>
      <div className="container-fluid px-4">
        <h5 className="mt-4">Execute Node Details</h5>
        <ol className="breadcrumb mb-4"></ol>

        <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Execute Node Details
          </div>
          <div className="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>MOM Node</th>
                  <th>CPU</th>
                  <th>Memory</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>MOM Node</th>
                  <th>CPU</th>
                  <th>Memory</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MomNodes;
