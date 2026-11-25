import React from 'react'
import DoctorCard from './DoctorCard'

function ClinicDoctors() {
  const doctors = [
    { code: "DOC 001", name: "Dr. Uwase Aline", specialization: "General Medicine", fee: 120 },
    { code: "DOC 002", name: "Dr. Mugisha Eric", specialization: "Pediatrics", fee: 100 },
    { code: "DOC 003", name: "Dr. Ingabire Grace", specialization: "Cardiology", fee: 130 }
  ];
  const totalDoctors = doctors.length;
  const totalFees = doctors.reduce((total, doctor) => total + doctor.fee, 0);

  return (
    <div>
      <h2>List of Doctors</h2>
      <ul>
        {doctors.map(doctor => <DoctorCard key={doctor.code} doctorInfo={doctor} />)}
      </ul>
      <p>The total number of doctors: {totalDoctors} | Total consultation fees: {totalFees}</p>
    </div>
  )
}

export default ClinicDoctors
