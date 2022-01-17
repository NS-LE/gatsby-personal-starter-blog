import React from 'react'
import { Button, Header, Form, Input } from 'semantic-ui-react'
import { Formik} from 'formik';

const options = [
  { key: 'o', text: 'Choose| ఎంచుకోండి', value: '' },
    { key: 'm', text: 'Male | మగ', value: 'male' },
  { key: 'f', text: 'Female| ఆడ', value: 'female' },
]


const RegisterForm = () => (
  
  <div className="ui grid">
  <div className="ui form six wide column centered">
  <Header as='h1'>Registration Form | రిజిస్ట్రేషన్ ఫారమ్</Header>
  <Formik
      initialValues={{
        fullName: '',
        age: '',
        phone: '',
        aadhar: '',
        gender: ''
      }}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
  <Form noValidate>
    <Form.Field id="fullName">
      <label>Full Name  | పూర్తి పేరు</label>
      <input/>
    </Form.Field>
    <Form.Field
      id='age'
      control={Input}
      label='Age | వయస్సు'
      
    />
  
    <Form.Select id="gender" fluid label='Gender | లింగం' options={options} />
          <Form.Field id="phone">
      <label>Phone Number</label>
      <input/>
    </Form.Field>
  <Form.Field
      id='aadhar'
      control={Input}
      label='Aadhar Number  | ఆధార్ నంబర్'
    />
    <Button type='submit'>Register</Button>
  </Form>
  </Formik>
  </div>
  </div>
)

export default RegisterForm