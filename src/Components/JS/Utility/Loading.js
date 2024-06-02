import Spinner from 'react-bootstrap/Spinner';
import '../../Styles/Utility/Loding.css'

const Loding=()=>{
return (
    <div className='lodingContainer'>
        <Spinner animation="grow" size='sm'/>
        <Spinner animation="grow" size='sm'/>
        <Spinner animation="grow" size='sm'/>
        <Spinner animation="grow" size='sm'/>
    </div>
)
}
export default Loding;