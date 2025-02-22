import React from 'react'
import Dropzone from '../components/dropzone/Dropzone'

function Addcategory() {
    return (
        <>
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Add Category</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Add Category</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-12">
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Add new category here</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <form>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="categoryname">Category Name</label>
                                            <input type="text" className="form-control" id="categoryname" placeholder="Enter Category Name" />
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor="categorydescription">Category Description</label>
                                            <textarea id="categorydescription" className="form-control" placeholder='Write Category Description'></textarea>
                                        </div> */}
                                        <div className="form-group">
                                            <label htmlFor="uploadimage">Upload Category Icon</label> <br />
                                            <input type="file" />
                                            {/* <Dropzone /> */}
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Add Category</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Addcategory
