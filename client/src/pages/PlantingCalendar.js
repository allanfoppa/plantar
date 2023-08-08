
import { useEffect, useState } from "react"
import Container from 'react-bootstrap/esm/Container'
import BreadcrumbPath from '../components/Breadcrumb'
import Image from 'react-bootstrap/Image'
import Table from 'react-bootstrap/Table';
import '../assets/styles/planting-calendar.css'

import bannerImage from '../assets/images/planting-calendar-banner.png'
import { fetchPlantingCalendar } from "../services/fetchPlantingCalendar";

export default function PlantingCalendar() {

  const [ data, setData ] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetchPlantingCalendar()
      setData(response.data)
    }

    fetchData()
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
          activePath="Teste"
        />
        <PageTitle text="Calendário de plantio" />
        <PostUpdated
          is_to_show={true}
          text="01/01/2023 16h00"
        />
        <PageSubtitle text="Época de plantio para cada região do país" />
        <IntroductionPage />
        <PlatingTable data={data} />
      </Container>

    </Container>
  )
}


const PageTitle = ({
  text
}) => {
  return <h1>{text}</h1>
}

const PostUpdated = ({
  is_to_show,
  text
}) => {
  return(
    <>
      {is_to_show &&
        <p className='post-updated'>Atualizado em: {text}</p>
      }
    </>
  )
}

const PageSubtitle = ({
  text
}) => {
  return <h4>{text}</h4>
}

const IntroductionPage = () => {
  return(
    <>
      <p>
        O calendário agrícola dá ao agricultor a possibilidade de planejamento, já que disponibiliza ao homem do campo informações relevantes para a melhor aplicação de seus esforços, com base no tripé produto, clima e região do plantio.
      </p>
      <p>
        Claro, o sucesso da colheita e lucratividade do plantio também tange fatores como:
      </p>
      <ul>
        <li>Área de cultivo;</li>
        <li>Distância entre plantação e lugar de distribuição e/ou comercialização;</li>
        <li>Adaptação da espécie ao solo.</li>
      </ul>
      <p>
        Isso tudo, porém, quando somado às informações que o calendário agrícola oferece, o produtor agrícola fica munido do conhecimento necessário para um plantio mais consciente, certo das condições ideais para cada tipo de plantio.
      </p>
    </>
  )
}

const PlatingTable = ({
  data
}) => {

  const titleFormat = ({
    title
  }) => {

    let splitted = title[0].split('-')
    let joinThen = splitted.join(' ')
    let upThenAndReturn = joinThen.toUpperCase()

    return upThenAndReturn
  }

  const monthformat = ({
    month
  }) => month[0].charAt(0).toUpperCase() + month[0].slice(1)

  const cultureformat = ({
    arr
  }) => {

    const formatter = new Intl.ListFormat(
      'pt-br',
      {
        style: 'long',
        type: 'conjunction'
      }
    )

    return formatter.format(arr[0])
  }

  return (
    <>
      {data.map((iterator, index) =>
        <div key={index}>
          <h5 className="my-2">
            {titleFormat({
              title: Object.keys(iterator)
            })}
          </h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Mês de Plantio</th>
                <th>Cultura</th>
              </tr>
            </thead>
            <tbody>
              {iterator[Object.keys(iterator)].map((i, index) =>
                <tr key={index}>
                  <td>
                    {monthformat({
                      month: Object.keys(i)
                    })}</td>
                  <td>
                    {cultureformat({
                      arr: Object.values(i)
                    })}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </>
  )
}
