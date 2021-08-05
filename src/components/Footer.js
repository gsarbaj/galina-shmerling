import React from "react"
const Footer = () => {
  return <footer className={'footer'}>
    <div>
      <div className={'footer-links'}>

      </div>
      <h4>
        Все права защищены &copy; {new Date().getFullYear()}
        <span> Школа Галины Шмерлинг</span>
      </h4>
    </div>
  </footer>
}

export default Footer
