import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Школа несет благо Миру. Благо это ценность, во имя которой совершаются поступки. Тот, кто делает благо другому, делает больше всего блага самому себе`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Школа предлагает обучение не имеющим мирового аналога информационными технологиям. Навыки, которые Вы приобретаете в Школе остаются с Вами навсегда`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `Методики школы находят практическое применение во всех областях жизни человечества. Применяя технологии Галины Шмерлинг, вы меняете полностью свое сознание и сознание окружающих людей`,
  },
]

export default services
