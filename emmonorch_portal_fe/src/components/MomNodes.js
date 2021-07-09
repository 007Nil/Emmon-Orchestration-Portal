import $ from "jquery";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import testJSON from "../test.json";
import React, { Component } from 'react'
import axios from 'axios'

// $(document).ready(function () {
function initDataTable(response) {
  $("#datatablesSimple").DataTable({
    data: response,
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
      {
        title: "Job",
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
      {
        targets: 3,
        data: "jobs",
        render: function (data, type, full, meta) {
          return data;
        },
      }
    ],
  });
}
// });

// const MomNodes = () => {
//   console.log(testJSON);
//   return (

//   );
// };

class MomNodes extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mom_details: []

    }
  }

  componentDidMount() {
    axios.get('http://10.8.40.50:8080/get_active_mom_data')
      .then(response => {
        console.log(response)
        initDataTable(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
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
                    <th>Job</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>MOM Node</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Job</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
  }

}

export default MomNodes;
