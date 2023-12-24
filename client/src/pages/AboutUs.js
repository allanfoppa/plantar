import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BreadcrumbPath from '../components/Breadcrumb'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import githubUserService from '../services/github-user'

import bannerImage from '../assets/images/about-us-banner.png'

import { usersInfo } from '../constants/users';

export default function AboutUs() {

  const [ users, setUsers ] = useState([])

  useEffect(() => {

    let userNames = ['allanfoppa', 'chrystianariel']

    const fetchData = async ({name}) => {
      const data = await githubUserService({
        userName: name
      })

      return data
    }

    const promises = userNames.map(name => fetchData({name}))
    const allPromisesResolved = Promise.all(promises)

    allPromisesResolved.then(data => {
      const usersReturn = data.map(user => user.data)
      setUsers(usersReturn)
    })

  }, [])

  return(
    <Container
      fluid
      style={{
        padding: 0
      }}
    >
      <Image src={bannerImage} fluid />
      <Container>
        <BreadcrumbPath
          activePath="Quem somos"
        />
        <Row>
          {users.map((user, index) =>
            <Col lg={3} key={index}>
              <Card style={{ border: "none" }}>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>
                    {user.bio}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href={user.html_url}>GitHub</Card.Link>
                  {user.login === "allanfoppa" &&
                    <Card.Link href={usersInfo.allanfoppa.Kaggle}>
                      Kaggle
                    </Card.Link>
                  }
                  {user.login === "chrystianariel" &&
                    <Card.Link href={usersInfo.chrystianariel.Behance}>
                      Behance
                    </Card.Link>
                  }
                </Card.Body>
              </Card>
            </Col>
          )}

        </Row>
      </Container>

    </Container>
  )
}
