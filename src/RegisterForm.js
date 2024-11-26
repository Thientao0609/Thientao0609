import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
      email: Yup.string()
        .required('Vui lòng nhập email')
        .email('Email không hợp lệ')
    }),
    onSubmit: values => {
      alert('Đăng ký thành công');
      console.log('Thông tin đăng ký:', values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Tên đăng nhập</label>
      <input
        type="text"
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      />
      {formik.touched.username && formik.errors.username ? (
        <div className="error">{formik.errors.username}</div>
      ) : null}

      <label htmlFor="password">Mật khẩu</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="error">{formik.errors.password}</div>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="error">{formik.errors.email}</div>
      ) : null}

      <button type="submit" className='submit-button'>Đăng Ký</button>
    </form>
  );
}

export default RegisterForm;