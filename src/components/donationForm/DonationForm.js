import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from 'yup';

import './donationForm.css'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field}/>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
}

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...props} {...field}/>
        {children}
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )

}

const DonationForm = () => {
  return (
    <Formik
      initialValues={
        {
          name: '',
          email: '',
          amount: 0,
          currency: '',
          text: '',
          terms: false
        }
      }
      validationSchema={
        Yup.object({
          name: Yup.string().min(2).required(),
          email: Yup.string().email().required(),
          amount: Yup.number().min(5).required(),
          currency: Yup.string().required(),
          text: Yup.string().min(10),
          terms: Yup.boolean().required().oneOf([true])
        })
      }
      onSubmit={
        (values) => {
          console.log(JSON.stringify(values));
        }
      }
    >
      <Form className="form">
        <h2>Send Donation</h2>
        <MyTextInput
          label="Your Name"
          id="name"
          name="name"
          type="text"
        />

        <MyTextInput
          label="Your Email"
          id="email"
          name="email"
          type="email"
        />

        <MyTextInput
          label="Amount"
          id="amount"
          name="amount"
          type="number"
        />

        <label htmlFor="currency">Currency</label>
        <Field
          id="currency"
          name="currency"
          as="select"
        >
          <option value="">Select currency</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">EUR</option>
        </Field>
        <ErrorMessage className="error" name="currency" component="div"></ErrorMessage>

        <label htmlFor="text">Your message</label>
        <Field
          id="text"
          name="text"
          as="textarea"
        />
        <ErrorMessage className="error" name="text" component="div"></ErrorMessage>

        <MyCheckbox name="terms">
          Do you accept terms and conditions?
        </MyCheckbox>

        <button type="submit">Send</button>
      </Form>

    </Formik>
  )
}

export default DonationForm;
