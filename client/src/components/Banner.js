import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types'



export default function Banner({
  image
}) {
  return(
    <Image
      src={image}
      fluid={true}
    />
  )
}



/*==========================================================================
  PROPTYPES
  ========================================================================== */

Banner.prototype = {
  iamge: PropTypes.string.isRequired
}
