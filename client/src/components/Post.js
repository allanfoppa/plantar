import PropTypes from 'prop-types';
import '../assets/styles/post.css'

export default function Post({
  postBody
}){
  return(
    <>
      <PostTitle
        titleText={postBody.title}
      />
      <PostUpdated
        is_to_show={postBody.is_updated}
        text={postBody.updated_time}
      />
      <PostContent
        content={postBody.content}
      />
    </>
  )
}

const PostTitle = ({
  titleText
}) => {
  return(
    <h1>{titleText}</h1>
  )
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

const PostContent = ({
  content
}) => {
  return(
    // ATTENCION: NOT USE FORMS HERE
    <div dangerouslySetInnerHTML={{__html: content}}></div>
  )
}



/*==========================================================================
  PROPTYPES
  ========================================================================== */

Post.prototype = {
  postBody: PropTypes.object.isRequired
}

PostTitle.propTypes = {
  titleText: PropTypes.string.isRequired
}

PostUpdated.propTypes = {
  is_to_show: PropTypes.bool.isRequired,
  text: PropTypes.string
}

PostContent.propTypes = {
  content: PropTypes.string.isRequired,
}
