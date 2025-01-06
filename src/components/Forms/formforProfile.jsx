import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormforProfile = ({redirectLink}) => {
  const initialValues = {
    firstname: '',
    middlename: '',
    lastname: '',
    dateOfBirth: '',
    gender: '',
    mobileNumber: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    address: '',
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required('First name is required'),
    middlename: Yup.string(),
    lastname: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.date().required('DOB is required'),
    gender: Yup.string().required('required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Mobile number must be digits only')
      .min(10, 'Mobile number must be at least 10 digits')
      .required('Mobile number is required'),
    country: Yup.string().required('Country is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zip: Yup.string()
      .matches(/^[0-9]+$/, 'ZIP code must be digits only')
      .required('ZIP code is required'),
    address: Yup.string().required('Address is required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
    // Handle form submission
    window.location.href=redirectLink;
  };

  return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form className="flex-col flex gap-[30px] min-[600px]:gap-[38px] items-center ">
            <div className='min-[600px]:flex gap-[25px]'>
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="firstname" className="font-ubuntu font-medium text-formblack text-[14px] " >First Name <span className='text-red-400'>*</span> </label>
              <Field type="text" name="firstname" className="input min-[600px]:w-[210px] border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.firstname && errors.firstname && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium ">
                  {errors.firstname}
                </p>
              )}
            </div>
  
            <div className='flex-col flex gap-[11px] mt-[15px] min-[600px]:mt-[0px] '>
              <label htmlFor="middlename" className="font-ubuntu font-medium text-formblack text-[14px] " >Middle Name</label>
              <Field type="text" name="middlename" className="input min-[600px]:w-[210px] border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.middlename && errors.middlename && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.middlename}
                </p>
              )}
            </div>
  
            </div>
            <div className='min-[600px]:flex gap-[15px]' >
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="lastname" className="font-ubuntu font-medium text-formblack text-[14px] " >Last Name <span className='text-red-400'>*</span> </label>
              <Field type="text" name="lastname" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[180px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.lastname && errors.lastname && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.lastname}
                </p>
              )}
            </div>
  
            <div className='flex  gap-[25px] min-[600px]:gap-[10px] '>
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="dateOfBirth" className="font-ubuntu font-medium text-formblack text-[14px] " >Date of Birth <span className='text-red-400'>*</span> </label>
              <Field type="date" name="dateOfBirth" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor w-[150px] h-[40px]" />
              {touched.dateOfBirth && errors.dateOfBirth && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.dateOfBirth}
                </p>
              )}
            </div>
  
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="gender" className="font-ubuntu font-medium text-formblack text-[14px] " >Gender <span className='text-red-400'>*</span> </label>
              <Field as="select" name="gender" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor w-[90px] h-[40px] appearance-none ">
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Non-binary</option>
                <option value="other">Prefer not to say</option>
              </Field>
              {touched.gender && errors.gender && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.gender}
                </p>
              )}
            </div>
            </div>
            </div>
  
            <div className='min-[600px]:flex gap-[25px]' >
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="mobileNumber" className="font-ubuntu font-medium text-formblack text-[14px] " >Mobile Number <span className='text-red-400'>*</span> </label>
              <Field type="text" name="mobileNumber" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.mobileNumber && errors.mobileNumber && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
  
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="country" className="font-ubuntu font-medium text-formblack text-[14px] " >Country <span className='text-red-400'>*</span> </label>
              <Field type="text" name="country" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.country && errors.country && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.country}
                </p>
              )}
            </div>
            </div>
  
            <div className='min-[600px]:flex gap-[25px]' >
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="state" className="font-ubuntu font-medium text-formblack text-[14px] " >State <span className='text-red-400'>*</span> </label>
              <Field type="text" name="state" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.state && errors.state && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.state}
                </p>
              )}
            </div>
  
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="city" className="font-ubuntu font-medium text-formblack text-[14px] " >City <span className='text-red-400'>*</span> </label>
              <Field type="text" name="city" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.city && errors.city && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.city}
                </p>
              )}
            </div>
            </div>
  
           <div className='min-[600px]:flex gap-[25px]' >
           <div className='flex-col flex gap-[11px] '>
              <label htmlFor="zip" className="font-ubuntu font-medium text-formblack text-[14px] " >ZIP Code <span className='text-red-400'>*</span> </label>
              <Field type="text" name="zip" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.zip && errors.zip && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.zip}
                </p>
              )}
            </div>
  
            <div className='flex-col flex gap-[11px] '>
              <label htmlFor="address" className="font-ubuntu font-medium text-formblack text-[14px] " >Address <span className='text-red-400'>*</span> </label>
              <Field type="text" name="address" className="input border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] min-[600px]:w-[210px]
            px-[15px] border-formcolor w-[270px] h-[40px] " />
              {touched.address && errors.address && (
                <p className="ml-[5px] mt-[-6px] font-ubuntu text-[12px] text-formcolor font-medium">
                  {errors.address}
                </p>
              )}
            </div>
           </div>
  
            <button type="submit" disabled={isSubmitting} className=" mt-[20px] w-[286px] h-[53px] rounded-[3px] text-white font-ubuntu font-medium bg-logogreen ">
              Submit
            </button>
          </Form>
        )}
      </Formik>
  );
};

export default FormforProfile;