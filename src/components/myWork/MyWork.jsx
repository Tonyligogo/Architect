import "./MyWork.css"
import House1 from "../../images/r1.png"
import House2 from "../../images/r2.png"
import House3 from "../../images/r3.png"

function MyWork({type}) {
    let data;
switch(type){
  case "house1":
    data={
      image:House1,
      price: "820,000" ,
      location: 'Lavington',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati itaque quas."
    };
    break;
    case "house2":
    data={
      image:House2,
      price: "790,000" ,
      location: 'Karen',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati itaque quas."
    };
    break;
    case "house3":
    data={
      image:House3,
      price: "900,000" ,
      location: 'Kileleshwa',
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati itaque quas."
    };
    break;
    default:
      break;
}
  return (
    <section className="container" id="myWork">
        <div className="myWorkContainer">
        <div className="wrapper">
            <div className="card">
                <div className="imgContainer">
                    <img src={data.image} alt="" />
                </div>
                <div className="cardContent">
                    <span className="price"> <span className="currency">Ksh</span> {data.price}</span>
                    <h2 className="location">{data.location}</h2>
                    <p className="description">{data.description}</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default MyWork