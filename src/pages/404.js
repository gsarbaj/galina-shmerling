import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title={'Ошибка 404'}/>
      <main className={'error-page'}>
        <div className={'error-container'}>
            <h1>Этой страницы не существует</h1>
            <Link to={'/'} className={'btn'}>Вернуться на главную страницу</Link>
        </div>
      </main>
    </>
  )
}

export default Error
