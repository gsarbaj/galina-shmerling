import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"


const IndexPage = ({data}) => {
    const {allContentfulArticle:{nodes: articles}} = data
  console.log(articles)
  return (
    <>
      <Seo title={'Главная'}/>
      <main>
        <Hero/>
        <Services/>
        <Jobs/>
        <Projects title={'Статьи'} showLink={true} articles={articles}/>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allContentfulArticle(filter: {mainpage: {eq: true}}) {
      nodes {
        title
        description
        type {
          name
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
    }
  }
`


export default IndexPage
