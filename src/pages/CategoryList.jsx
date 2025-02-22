import React from 'react'
import Datatable from '../components/datatable/Datatable'

function CategoryList() {
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>All Products</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="dashboard.php">Home</a></li>
                <li className="breadcrumb-item active">All Products</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>

      <section className='content'>
        <div className="container-fluid">
          <Datatable />
        </div>
      </section>
      
    </>
  )
}

export default CategoryList
