import Image from 'react-bootstrap/Image'



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
