import React from 'react';
import Datatable from '../components/datatable/Datatable';

function CategoryList() {
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>All Data</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="dashboard.php">Home</a></li>
                <li className="breadcrumb-item active">All Data</li>
              </ol>
            </div>
          </div>
          {/* <div className="row mb-2 justify-content-end">
            <div className="col-12 d-flex justify-content-end">
              <form action="" id='searchData'>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <Datatable />
        </div>
      </section>
    </>
  );
}

export default CategoryList;
