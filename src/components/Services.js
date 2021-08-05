import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return <section className={'section bg-grey'}>
    <Title
      title={'наша школа'}
    />
    <div className="section-center services-center">
      {services.map((service) => {
        const {id, icon, text} = service
        return <article key={id} className={'service'}>
          {icon}
          <div className="underline"> </div>
          <p>{text}</p>
        </article>
      })}
    </div>
  </section>
}

export default Services
