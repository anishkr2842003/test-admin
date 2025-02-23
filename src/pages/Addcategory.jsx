import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from '../components/dropzone/Dropzone';

function Addcategory() {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        email: '',
        contact_nu: '',
        dob: '',
        address: '',
    });

    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://testapi.rasanonline.com/api/store-data', formData);
            console.log('Data sent successfully:', response.data);
            // Optionally, you can reset the form or show a success message
        } catch (error) {
            console.error('Error sending data:', error);
            // Optionally, you can show an error message
        }
    };

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
                                <form onSubmit={handleSubmit}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Category Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        minLength={3}
                                                        maxLength={10}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="position">Position</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="position"
                                                        name="position"
                                                        placeholder="Enter Position"
                                                        value={formData.position}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="contact_no">Contact No</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="contact_no"
                                                        name="contact_nu"
                                                        placeholder="Enter Contact No"
                                                        value={formData.contact_nu}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="dob">DOB</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="dob"
                                                        name="dob"
                                                        placeholder="Enter DOB"
                                                        value={formData.dob}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label htmlFor="address">Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="address"
                                                        name="address"
                                                        placeholder="Enter Address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-group">
                                            <label htmlFor="uploadimage">Upload Category Icon</label> <br />
                                            <input type="file" />
                                            <Dropzone />
                                        </div> */}
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
    );
}

export default Addcategory;
