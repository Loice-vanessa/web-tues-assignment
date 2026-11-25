import './App.css'
import ClinicFooter from './component/ClinicFooter'
import ClinicDoctors from './component/ClinicDoctors'
import ClinicLogin from './component/ClinicLogin'
import Office from './component/Office'
import OfficeList from './component/OfficeList'

function App() {
  const clinicHeader = "CLINIC Management System"

  return (
    <div>
      <header>
        <h1>{clinicHeader}</h1>
        <p>This is a clinic system that helps manage doctors, patients, offices and appointments</p>
      </header>
      <main>
        {/* <ClinicDoctors />
        <ClinicLogin /> */}
        <Office />
        <OfficeList />
      </main>
      <ClinicFooter />
    </div>
  );
}

export default App
