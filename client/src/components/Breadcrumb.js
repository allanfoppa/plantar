import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { LinkContainer } from 'react-router-bootstrap'
import PropTypes from 'prop-types'


export default function BreadcrumbPath({
  activePath
}) {
  return (
    <Breadcrumb className='mt-2 mb-4'>
      <LinkContainer to="/">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item active>{activePath}</Breadcrumb.Item>
    </Breadcrumb>
  )
}



/*==========================================================================
  PROPTYPES
  ========================================================================== */

BreadcrumbPath.propTypes = {
  activePath: PropTypes.string.isRequired
}
