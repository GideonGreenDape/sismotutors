import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupAndSignIn = ({redirectLink,color}) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").email("Invalid email address")
    .required("Please enter your email address"),
    password: Yup.string()
    .min(6, "Password length must be more than five characters")
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, "Password must contain alphanumeric characters")
    .matches(/^(?=.*[!@#$%^&*])/, "Password must contain at least one special character")
    .required("Enter a password to login"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    window.location.href=redirectLink;
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting,touched,errors,values }) => ( 
        <Form className="flex-col flex gap-[45px] items-center">
          <div className="flex-col flex gap-[35px] ">
            <div>
            <Field  placeholder="Email"
            className="border-[1px] font-ubuntu text-[14px]
             font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor min-[300px]:w-[310px] min-[1000px]:w-[290px] h-[45px] "
            type="email" name="email" />
             {touched.email && errors.email && (
              <p className="ml-[5px] mt-[12px] font-ubuntu text-[12px] text-formcolor font-medium ">{errors.email}</p>
            )}
            </div>
            <div>
            <Field placeholder="Password" 
            className="border-[1px] font-ubuntu text-[14px] 
            font-light text-formblack  rounded-[5px] 
            px-[15px] border-formcolor min-[300px]:w-[310px] min-[1000px]:w-[290px] h-[45px] "
            type="password" name="password" />
            {touched.password && (
                  <ul className="ml-[5px] mt-[12px] flex-col flex gap-[2px] font-ubuntu text-[12px] w-[300px] ">
                  <li className={values.password.length >= 6 ? "text-green-600 font-medium" : "text-formcolor font-medium "}>
                      Password must be more than five characters
                    </li>
                    <li className={/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(values.password) ? "text-green-600 font-medium " : "text-formcolor font-medium "}>
                      Password must contain alphanumeric characters
                    </li>
                    <li className={/^(?=.*[!@#$%^&*])/.test(values.password) ? "text-green-600 font-medium " : "text-formcolor font-medium "}>
                      Password must contain at least one special character
                    </li>
                  </ul>
                
              )}
            </div>
          </div>
          <button type="submit" className={` min-[100px]:w-[236px] 
          min-[1000px]:w-[290px] h-[53px] rounded-[3px]
           text-white font-ubuntu 
           font-medium bg-${color} `}  disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};


export default SignupAndSignIn;