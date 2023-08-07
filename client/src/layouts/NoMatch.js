import { LinkContainer } from 'react-router-bootstrap'

export default function NoMatch() {
  return(
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <LinkContainer to="/">
          Go to the home page
        </LinkContainer>
      </p>
    </div>
  )
}
