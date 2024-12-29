import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import logo from "../assets/logo.png"

export default function Signup() {
    return (
        <>
            <div className='container'>
                <div className='text-center'>
                                    <img src={logo} alt='Logo' className='img-fluid mb-5' />
                                    </div>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <h2 className='text-black text-center fw-bold'>Register</h2>
                    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' />
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4 mb-3' type='email' id='form3Example3' label='Email address' /><br />
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' />
       <br />
    

      <MDBBtn type='submit' className='mb-4 btn-rounded btn-lg' block>
        REGISTER
      </MDBBtn>

      <div className='text-center'>
        <p>
          Already have an account ? <a href='/login'>Login</a>
        </p>
        <p>or register up with:</p>

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