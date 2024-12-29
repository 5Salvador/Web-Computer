import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from "../assets/logo.png"

export default function Login() {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
        <div className='text-center'>
                    <img src={logo} alt='Logo' className='img-fluid mb-5' />
                    </div>
          <h2 className='text-black text-center fw-bold mb-3'>Login</h2>
          <div className='col-md-6'>
          <form>
      <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' /><br></br>
      <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />
         <br></br>
      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-4 btn-rounded btn-lg ' block>
        LOGIN
      </MDBBtn>

      <div className='text-center'>
        <p>
          Not a member? <a href='/signup'>Register</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
          </div>

        </div>

      </div>
    </>
  );
}