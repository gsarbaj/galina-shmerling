import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

const Enneagramms = ({data:{allContentfulArticle: {nodes: posts}}}) => {
  return (
    <>
      <Seo title={'Cила Эннеаграммы'}/>
      <main>
        <section className={'projects-page'}>
          <Projects title={'Cила Эннеаграммы'} articles={posts}/>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulArticle(filter: {type: {url: {eq: "enneagramms"}}}) {
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

export default Enneagramms
