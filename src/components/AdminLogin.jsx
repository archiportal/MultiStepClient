import React from 'react'
import {useNavigate} from 'react-router-dom'

function AdminLogin() {
const navigate = useNavigate();

const goToRecords = () => {
    navigate('/records');
}

  return (
    <div>
        <button onClick={goToRecords}>records</button>
    </div>
  )
}

export default AdminLogin