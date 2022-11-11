import spinner from '../../assets/spinner.gif';
import './spinner.css'

const Spinner = () => {
  return (
    <div className="loading-spinner-container">
        {/* <img
            src={spinner}
            alt="Loading..."
            style={{ width: '200px', margin: ' 40px auto', display: 'block' }}
        /> */}
        <div className="loading-spinner"></div>
    </div>
  )
}

export default Spinner;