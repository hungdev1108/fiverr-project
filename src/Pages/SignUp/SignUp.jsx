import { logoSvg } from "assets/images/svgImage";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./SignUp.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { SignUpAction } from "store/actions/UserManagerAction";
import { SignUpSuccess } from "components/Notifications/Notifications";

const phoneRegExp = /(84|0)+([0-9]{9})\b/;

const schema = yup.object().shape({
  email: yup.string().required("*This field is required!"),
  password: yup.string().required("*This field is required!"),
  name: yup
    .string()
    .required("*This field is required!")
    .matches(
      /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/g,
      "Invalid name!"
    ),
  phone: yup.string().required("*This field is required!").matches(phoneRegExp, "Invalid phone number!"),
  confirmPassword: yup
    .string()
    .required("*This field is required!")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function SignUp() {
  const history = useHistory();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    onSubmit: (values) => {
      dispatch(SignUpAction(values, SignUpSuccess, history));
      console.log(values);
    },
    validationSchema: schema,
  });
  return (
    <section id="signUp" className="gradient-form">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-4 mx-md-4">
                    <div className="text-center">
                      <NavLink to="/" className="signIn__logo mb-4">
                        {logoSvg}
                      </NavLink>
                      <h5 className="mt-3 mb-3">Sign up your account</h5>
                    </div>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        formik.handleSubmit(event);
                      }}
                    >
                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email@gmail.com"
                          required
                        />
                        {formik.touched.email && formik.errors.email && (
                          <p className="text-danger message__error">{formik.errors.email}</p>
                        )}
                      </div>

                      {/* Password */}
                      <div className="form-row">
                        <div className="col-md-6 form-outline mb-3">
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                          />
                          {formik.touched.password && formik.errors.password && (
                            <p className="text-danger message__error">{formik.errors.password}</p>
                          )}
                        </div>
                        <div className="col-md-6 form-outline mb-3">
                          <label className="form-label" htmlFor="confirmPassword">
                            Confirm Password
                          </label>
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className="form-control"
                            placeholder="Confirm Password"
                            required
                          />
                          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p className="text-danger message__error">{formik.errors.confirmPassword}</p>
                          )}
                        </div>
                      </div>

                      {/* Name */}
                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="name">
                          Name
                        </label>
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="text"
                          name="name"
                          id="name"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                        {formik.touched.name && formik.errors.name && (
                          <p className="text-danger message__error">{formik.errors.name}</p>
                        )}
                      </div>
                      <div className="form-outline mb-3">
                        <label className="form-label" htmlFor="phone">
                          Phone
                        </label>
                        <input
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="text"
                          name="phone"
                          id="phone"
                          className="form-control"
                          placeholder="Enter your phone number"
                          required
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <p className="text-danger message__error">{formik.errors.phone}</p>
                        )}
                      </div>
                      <div className="text-center pt-1 mb-2 pb-1">
                        <button
                          className="btn font-weight-bold text-white btn-block fa-lg gradient-custom-2 mb-3 btnSignin"
                          type="submit"
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2 mr-2">You have an account?</p>
                        <button
                          onClick={() => {
                            history.push(`/signin`);
                          }}
                          type="button"
                          className="btn btn-dark"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2 text-center">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h1 className="mb-3 font-weight-bold text-white signIn__title">Fiverr</h1>
                    <h3 className="mb-0 text-white">Find the perfect freelance services for your business !</h3>
                    <p className="mt-2 text-justify" style={{ opacity: 0.95 }}>
                      Fiverr is an intermediary online platform that creates a connection between buyers and sellers.
                      Fiverr is currently a Network Freelancer, also known as a marketplace for freelancers around the
                      world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
