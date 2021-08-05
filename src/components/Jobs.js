import React from "react"
import Title from "./Title"
import {  FaTelegram } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allContentfulStaff {
      nodes {
        name
        phone
        picture {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          title
       
        }
        surl
        title
      }
    }
  }
`

const Jobs = () => {

  const data = useStaticQuery(query)
  const {allContentfulStaff:{nodes: person}} = data
  const [value, setValue] = React.useState(0)
  const {name, phone, picture, surl, title } = person[value]

  return <section className={'section jobs'}>
    <Title title={'Кто мы'}/>
    <div className={'jobs-center'}>
      <div className="btn-container">
        {person.map((item, index) => {
          return <button key={index} className={index === value ? 'job-btn active-btn': 'job-btn'} onClick={() => setValue(index)}>
            {item.name}
          </button>
        })}
      </div>
      <article className="job-info">
        <h3>{name}</h3>
        <h4>{phone}</h4>
        <p className={'job-date'}>{title}</p>
        <Link to={surl}>
            <FaTelegram className={'social-link'}/>
        </Link>
        <GatsbyImage alt={name} image={picture.gatsbyImageData}/>
      </article>
    </div>
    <Link to={'/about'} className={'btn center-btn'}>
      Читать далее
    </Link>
  </section>
}

export default Jobs
