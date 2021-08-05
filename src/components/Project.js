import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({ title, pretext, picture, index, url }) => {
  console.log(title)
  console.log(pretext.pretext)
  return <article className={'project'}>
    <GatsbyImage alt={title} image={getImage(picture)} className={'project-img'}/>
    <div className="project-info">
      <span className={'project-number'}>0{index+1}.</span>
      <Link to={`/${url}`} className={'project-slug'}>
        <h3>{title}</h3>
      </Link>
      <p className={'project-desc'}>{pretext.pretext}</p>
    </div>
  </article>
}

export default Project
