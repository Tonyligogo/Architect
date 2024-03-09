import "./MyValues.css"
import ValueImg from "../../images/contact.jpg"
import { Icon } from '@iconify/react';
import { useState } from "react";

function MyValues() {

  const [selected, setSeleceted] = useState(null)

  function toggle(i){
    if(selected === i){
      return setSeleceted(null)
    }
    setSeleceted(i)
  }

  return (
    <div className="myValues" id="myValues">
        <div className="leftSideValues">
            <img src={ValueImg} alt="" />
        </div>
        <div className="rightSideValues">
            <h2>My Value</h2>
            <p className="text">Why Choose Me</p>
            <span className="description">I am always ready to help by providing the best services for you.<br />I believe a good place to live can make your life better.</span>
            <div className="values">
              {data.map((item, i)=>(
                <div className="value" key={i}>
                  <div className="overview" onClick={()=>toggle(i)}>
                    <span> {item.icon1} </span>
                    <p>{item.title}</p>
                    {selected === i  ? <span>{item.upArrow}</span>  : <span>{item.downArrow}</span>}
                  </div>
                  {selected === i && <p className="description"> {item.description} </p>}
              </div>
              ))}
            </div>
        </div>
    </div>
  )
}
const data = [
  {icon1:<Icon icon="fluent:shield-task-16-filled" color="blue" width="18" />,
  title:"Best interest rates on the market",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut quae eum aspernatur voluptatem porro ipsa nulla nihil cupiditate ipsam.",
  downArrow:<Icon icon="mdi:menu-down" color="blue" width="16" />,
  upArrow:<Icon icon="mdi:menu-up" color="blue" width="16" />
  },
  {icon1:<Icon icon="ph:x-circle-fill" color="blue" width="16" />,
  title:"Prevent unstable prices",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut quae eum aspernatur voluptatem porro ipsa nulla nihil cupiditate ipsam.",
  downArrow:<Icon icon="mdi:menu-down" color="blue" width="16" />,
  upArrow:<Icon icon="mdi:menu-up" color="blue" width="16" />
  },
  {icon1:<Icon icon="healthicons:high-bars-negative" color="blue" width="14" />,
  title:"Best price on the market",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis aut quae eum aspernatur voluptatem porro ipsa nulla nihil cupiditate ipsam.",
  downArrow:<Icon icon="mdi:menu-down" color="blue" width="16" />,
  upArrow:<Icon icon="mdi:menu-up" color="blue" width="16" />
  }
]

export default MyValues