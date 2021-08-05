import React from "react"
import Seo from "../components/Seo"
const contact = () => {
  return (
    <>
      <Seo title={'Свяжитесь с Нами'}/>
      <section className={'contact-page'}>
        <article className={'contact-form'}>
          <h3>Напишите нам</h3>
          <form action="">
            <div className={'form-group'}>
              <input type="text" name={'name'} placeholder={'Имя'} className={'form-control'} />
              <input type="email" name={'email'} placeholder={'Эл. почта'} className={'form-control'} />
              <textarea name="Сообщение" rows="5" placeholder={'Сообщение'} className={'form-control'}/>
            </div>
            <button type={'submit'} className={'submit-btn btn'}>Отправить Сообщение</button>
          </form>
        </article>
      </section>
    </>
  )
}

export default contact
