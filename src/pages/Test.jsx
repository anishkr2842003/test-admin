import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import apiClient from '../utils/apiClient';
import Dropzone from '../components/dropzone/Dropzone';
import { toast, ToastContainer } from 'react-toastify';
import Datatable from '../components/datatable/Datatable2';

// Define styled components
const FormContainer = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'error',
})`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  &:focus {
    border-color: ${(props) => (props.error ? 'red' : '#007bff')};
    box-shadow: ${(props) => (props.error ? '0 0 5px rgba(255, 0, 0, 0.5)' : '0 0 5px rgba(0, 123, 255, 0.5)')};
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;

function Test() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const [refreshData, setRefreshData] = useState(false);

  const onSubmit = async (data) => {
    toast.loading('Submitting data...');
    console.time('Data Submission');
    try {
      const response = await apiClient.post('/store-data', data);
      console.timeEnd('Data Submission');
      var statusCode = response.data.status;
      var message = response.data.msg;
      if (statusCode == 201) {
        toast.dismiss();
        toast.success(message);
        setRefreshData((prev) => !prev);
        reset();
      } else {
        toast.dismiss();
        toast.error(message);
      }
    } catch (error) {
      // console.error('Error sending data:', error);
      toast.dismiss();
      toast.error('Error submitting data');
    }
  };

  return (
    <>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-6">
            {/* Content Header (Page header) */}
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Add Data</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item active">Add Data</li>
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
                        <h3 className="card-title">Add new data here</h3>
                      </div>
                      {/* /.card-header */}
                      {/* form start */}
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Input
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Enter Category Name"
                                  {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" }, maxLength: { value: 10, message: "Name must be at most 10 characters" } })}
                                  error={errors.name}
                                />
                                {errors.name && (
                                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                                )}
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="position">Position</label>
                                <Input
                                  type="text"
                                  id="position"
                                  name="position"
                                  placeholder="Enter Position"
                                  {...register("position", { required: "Position is required" })}
                                  error={errors.position}
                                />
                                {errors.position && (
                                  <ErrorMessage>{errors.position.message}</ErrorMessage>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                  type="email"
                                  id="email"
                                  name="email"
                                  placeholder="Enter Email"
                                  {...register("email", { required: "Email is required", pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address" } })}
                                  error={errors.email}
                                />
                                {errors.email && (
                                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                                )}
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="contact_no">Contact No</label>
                                <Input
                                  type="number"
                                  id="contact_no"
                                  name="contact_nu"
                                  placeholder="Enter Contact No"
                                  {...register("contact_nu", { required: "Contact number is required" })}
                                  error={errors.contact_nu}
                                />
                                {errors.contact_nu && (
                                  <ErrorMessage>{errors.contact_nu.message}</ErrorMessage>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="dob">DOB</label>
                                <Input
                                  type="date"
                                  id="dob"
                                  name="dob"
                                  placeholder="Enter DOB"
                                  {...register("dob", { required: "Date of birth is required" })}
                                  error={errors.dob}
                                />
                                {errors.dob && (
                                  <ErrorMessage>{errors.dob.message}</ErrorMessage>
                                )}
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <Input
                                  type="text"
                                  id="address"
                                  name="address"
                                  placeholder="Enter Address"
                                  {...register("address", { required: "Address is required" })}
                                  error={errors.address}
                                />
                                {errors.address && (
                                  <ErrorMessage>{errors.address.message}</ErrorMessage>
                                )}
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
                          <button type="submit" className="btn btn-primary">Add Data</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className='col-6'>
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
                <div className="row mb-2 justify-content-end">
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
                </div>
              </div>
            </section>

            <section className="content">
              <div className="container-fluid">
                <Datatable refreshData={refreshData} />
              </div>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Test;
