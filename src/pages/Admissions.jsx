
import AdmissionRequirements from '../components/AdmissionRequirements'
import AdmissionForm from '../components/AdmissionForm'
// import FeeStructure from '../components/FeeStructure'
import AdmissionOverview from '../components/AdmissionOverview'

const Admissions = () => {
  return (
    <div>
      <AdmissionOverview />
      <AdmissionRequirements />
      {/* <FeeStructure /> */}
      <AdmissionForm />
    </div>
  )
}

export default Admissions