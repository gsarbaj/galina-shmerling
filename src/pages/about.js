import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Projects from "../components/Projects"

const About = ({data:{allContentfulArticle: {nodes: posts}}}) => {
  return (
    <>
      <Seo title={'О школе'}/>
      <main>
        <section className={'projects-page'}>
          <Projects title={'О школе'} articles={posts}/>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulArticle(filter: {type: {url: {eq: "about"}}}) {
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

export default About
