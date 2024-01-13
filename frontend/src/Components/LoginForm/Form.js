import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form'>
        <div className='form-content'>
        <label for='#votersid' >VOTER'S ID</label>
        <div className='field'>
            <input id='votersid' className='input-field' type='text' placeholder="Enter Voter's ID" />
            <button className='primary-btn'>Verify ID</button>
        </div>
        <label for='#aadhar' >AADHAR NUMBER</label>
        <div className='field'>
            <input id='aadhar' className='input-field' type='text' placeholder="Enter Aadhar Number" />
            <button className='primary-btn'>Send OTP</button>
        </div>
        <label for='#otp' >ENTER OTP</label>
        <div className='field '>
            <input id='otp' className='input-field' type='text' placeholder="Enter OTP" />
            <button className='primary-btn'>Verify OTP</button>
        </div>
        </div>
        
    </div>
  )
}

export default Form