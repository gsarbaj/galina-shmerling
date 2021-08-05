import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({ title, articles, showLink }) => {
  return <section className={'section projects'}>
    <Title title={title}/>
    <div className="section-center projects-center">
      {articles.map((article, index ) => {
        return <Project key={index} index={index } {...article}/>
      })}

    </div>
    {showLink && <Link to={'/enneagramms'} className={'btn center-btn'}>Все статьи</Link> }
  </section>
}

export default Projects
