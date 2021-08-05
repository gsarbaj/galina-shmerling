import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// const query = graphql`
//   {
//     allContentfulArticle(sort: {fields: type___order}) {
//       nodes {
//         title
//         type {
//           name
//           order
//           url
//         }
//       }
//     }
//   }
// `
const NavData = [
  {title: 'О Нас', link: '/about', subMenu:[
      {title: 'Отзывы', link: '/review'},
      {title: 'Расписание занятий', link: '/about/raspisanie'},
      {title: 'Лечение позвоночника', link: '/about/lechenie-pozvanochnika/'},
      {title: 'Обучение методу Сферические матрицы состоит из трех ступеней', link: '/about/obushenie-matrix/'},
      {title: 'Метод Сферические матрицы', link: '/about/metod-opisanie/'},
    ]},
  {title: 'Эннеаграммы', link: '/enneagramms', subMenu:[
      {title: 'Чжоуская Книга Перемен. Перевод Ю.К. Щуцкого.', link: '/enneagramms/kniga-peremen-perevod/'},
      {title: 'Разгадана загадка порядка Вэнь-вана', link: '/enneagramms/ven-van/'},
      {title: '© Проект Волшебная Сила Эннеаграммы', link: '/enneagramms/project/'},

    ]},
  {title: 'Новое время', link: '/new-age', subMenu:[
      {title: 'Мы защитим вас от COVID-19', link: '/new-age/covid/'},
      {title: 'Мы можем вам помочь', link: '/new-age/help/'},
    ]},
  {title: 'Самоисцеление', link: '/healing', subMenu:[
      {title: 'Число и цвет', link: '/healing/cvet/'},
      {title: 'Овладение силой букв АЛЕФ-БЕТ', link: '/healing/alef-bet/'},
      {title: 'Самоисцеление числом. Таблица Менделеева.', link: '/healing/mendeleev/'},
      {title: 'Самоисцеление. Слушаем 1 главу Книги Бытия', link: '/healing/biblija/'},
      {title: 'Самоисцеление покаянием', link: '/healing/pokajanije/'},
      {title: 'Самоисцеление молитвой', link: '/healing/molitva/'},
      {title: '© Амулет на здоровье, удачу, благой путь.', link: '/healing/amulet/'},

    ]},
  {title: 'Контакты', link: '/contact'},

]


const Navbar = ({toggleSidebar}) => {

  // const [activeMenu, setActiveMenu] = useState(false);

  // const clickHandler = () => {
  //   setActiveMenu(!activeMenu)
  // }



  const buttonsNames = NavData.map((name, index) =>
    <li key={index} className={"header__item"}><Link to={`${name.link}`} >{name.title}</Link>

      {name.subMenu ?
        <div className={"header__subnav"}>
          <ul className={"subnav"}>
            {name.subMenu.map((item,index) =>
              <li key={index+"sub"} className={"subnav__item"}><Link to={`${item.link}`} className={"subnav__link"}>{item.title}</Link></li>
            )}
          </ul>
        </div>: null}

    </li>
  )


  // const {allContentfulArticle:{nodes:arr}} = useStaticQuery(query)
  // const obj = {}
  // const mainMenu = []
  // const menu ={}
  // const new_arr = arr.map((item) => {
  //   obj[item.type.name] = item.type.name
  // })
  //
  // console.log(arr)
  //
  //
  // const menuItems = Object.keys(obj)

  // menuItems.forEach(item => {
  //   const subMenu = []
  //   arr.map(it => {
  //     if (item === it.type.name ) {
  //       subMenu.push(it.title)
  //       menu[item] = subMenu
  //     }
  //   })
  //
  // })
  // mainMenu.push(menu)
  //
  // const mainMenuArr = []
  //
  //
  // const menuArr = Object.keys(mainMenu[0]).forEach(item => {
  //   let a ={}
  //   a[item] = mainMenu[0][item]
  //   mainMenuArr.push(a)
  // })

  // console.log(mainMenuArr)


  // const menuRender = mainMenuArr.map((el, index) =>
  //
  //     <div key={index}>{Object.keys(el)[0]}
  //
  //     </div>
  //
  //
  // )


  return <nav className={'navbar'}>
    <div className="nav-center">
      <div className="nav-header">
        <Link to={'/'}>
          <StaticImage
            src={'../assets/images/matritsa.png'}
            alt="Нумерология"
            height={75}
            width={75}
            placeholder={'tracedSVG'}
            layout={'constrained'}
          />
        </Link>

        <button type={'button'} className={'toggle-btn'} onClick={toggleSidebar}> <FaAlignRight/> </button>
      </div>
      <div className="nav-links">
        {buttonsNames}
        {/*{pageLinks.map((link) => {*/}
        {/*  return <Link key={link.id} to={link.url}>*/}
        {/*    {link.text}*/}
        {/*  </Link>*/}
        {/*})}*/}
      </div>
    </div>
  </nav>
}

export default Navbar
