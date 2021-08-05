import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

const NewAge = ({data:{allContentfulArticle: {nodes: posts}}}) => {
  return (
    <>
      <Seo title={'Новое Время'}/>
      <main>
        <section className={'projects-page'}>
          <Projects title={'Новое Время'} articles={posts}/>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulArticle(filter: {type: {url: {eq: "new-age"}}}) {
      nodes {
        title
        description
        type {
          name
          url
        }
        picture {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
        text {
          text
        }
        pretext {
          pretext
        }
        url
      }
      totalCount
    }
  }
`

export default NewAge
