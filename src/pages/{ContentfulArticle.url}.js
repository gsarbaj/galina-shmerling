import React from 'react'
import {graphql} from "gatsby"
import Title from "../components/Title"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Seo from "../components/Seo"

const ArticleTemplate = ({data}) => {
  const {
    title,
    description,
    picture,
    text:{text}
  } = data.contentfulArticle

  const pathToImage = getImage(picture)

  return (
   <>
     <Seo title={title}/>
     <section className={'about-page'}>
       <div className="section-center about-center">
         <GatsbyImage alt={description} image={pathToImage} className={'about-img-svg'}/>
         <article className={'about-text'}>
           <Title title={title}/>
           <p>{text}</p>
         </article>
       </div>
     </section>
   </>
  )
}

export const query =  graphql`
query getSingleArticle($url: String) {
  contentfulArticle(url: {eq: $url}) {
    title
    url
    description
    picture {
      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
    type {
      name
      description
    }
    text {
      text
    }
  }
}
`
// <main className={'project-template-page'}>
//
//      <h2>{title}</h2>
//     <p>{description}</p>
//
// </main>



export default ArticleTemplate