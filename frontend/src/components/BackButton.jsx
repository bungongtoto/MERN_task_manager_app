import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PropTypes from 'prop-types'

const BackButton = ({destination}) => {
  return (
    <div className="flex">
        <Link to={destination} className="bg-sky-800 text-white px-4 py-1 rounded-1g w-fit">
            <BsArrowLeft className="text-2x1" />
        </Link>
    </div>
  )
}

BackButton.propTypes = {
  destination: PropTypes.string.isRequired
}


export default BackButton