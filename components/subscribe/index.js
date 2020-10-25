import { Formik, Form } from "formik";

const Index = () => {
  return (
    <div className="py-4 mt-12">
      <Formik
        initialValues={{ email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) errors.email = "Required";
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form className="flex">
            <input
              className="py-3 px-6 w-full rounded  text-lg  outline-none"
              type="email"
              name="email"
              placeholder="Enter your Email ID"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            {/* {errors.email && touched.email && errors.email} */}

            <a
              className="py-3 px-6  bg-primary text-white ml-4 rounded text-base  outline-none cursor-pointer  flex justify-center items-center"
              type="submit"
              style={{ minWidth: 120 }}
              disabled={isSubmitting}
            >
              Notify Me
            </a>
          </Form>
        )}
      </Formik>
      <p className="py-3 text-sm text-gray-600 ">
        * Notify me with the latest update
      </p>
    </div>
  );
};

export default Index;
