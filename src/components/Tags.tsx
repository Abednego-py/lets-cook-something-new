import { Badge } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/card.css'

export default function Tags() {
  return (
    <div style={{'width': '70px'}}>
    
    <div
    className='tag'
    style={{'width': 'fit-content', 'padding': '8px'}}>

     <i className="fa-solid fa-tag"></i>
        <p>Badge </p>
    </div>
    </div>
  )
}
