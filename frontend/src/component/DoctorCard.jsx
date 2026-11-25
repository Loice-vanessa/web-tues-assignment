import React from 'react'

function DoctorCard({ doctorInfo }) {
  return (
    <div style={{ border: "3px solid teal", marginTop: "3px" }}>
      <div>{doctorInfo.code}</div>
      <div>{doctorInfo.name}</div>
      <div>{doctorInfo.specialization}</div>
      <div>Consultation fee: {doctorInfo.fee}</div>
    </div>
  )
}

export default DoctorCard
