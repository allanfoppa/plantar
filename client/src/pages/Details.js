import BreadcrumbPath from "../components/Breadcrumb"
import Container from 'react-bootstrap/esm/Container'
import Banner from "../components/Banner"
import Post from "../components/Post"
// temp
import tempImage from '../temp/banner-detail-example.png'

export default function Details() {

  const mock = {
    "id": 1,
    "is_updated": true,
    "banner": "url",
    "updated_time": "01/01/2023 16h00",
    "title": "Como fazer o plantio da bananeira?",
    "content": "<p>A banana é uma fruta rica em potássio e traz muitos benefícios aos sistemas digestivo e cardiovascular, colaborando até com as funções cerebrais. As bananeiras são angiospermas pertencentes ao Gênero Musa. De origem asiática, atualmente são cultivadas em diversas regiões do planeta, especialmente em climas tropicais; sendo a banana um dos principais produtos de exportação de nosso país. Sobre isso, vale ressaltar que o Brasil, além de ser o país que mais exporta esse alimento, é também o que mais o consome.</p><p>Existem aproximadamente cem variedades de bananas cultivadas em todo o mundo. Algumas dela são: banana-nanica, banana-prata, banana-ouro, banana-maçã e banana-da-terra.</p>"
  }

  return(
    <Container
      fluid
      style={{
        padding: 0
      }}
    >
      <Banner
        image={tempImage}
      />
      <Container>
        <BreadcrumbPath
          activePath={mock.title}
        />
        <Post
          postBody={mock}
        />
      </Container>
    </Container>
  )
}
