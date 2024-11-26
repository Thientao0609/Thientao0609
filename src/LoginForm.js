import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './App.css';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự')
        .max(20, 'Tên đăng nhập không quá dài'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .max(20, 'Mật khẩu không quá dài')
    }),
    onSubmit: values => {
      alert('Đăng nhập thành công');
      console.log(values);
    }
  });

  return (
    <div className="login-container">
      <form onSubmit={formik.handleSubmit} className="form-container">
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Nhập tên đăng nhập"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="error-message">{formik.errors.username}</div>
        )}

        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Nhập mật khẩu"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}

        <button type="submit" className="submit-button">
          Đăng Nhập
        </button>
      </form>
    </div>
  );
}

export default LoginForm;