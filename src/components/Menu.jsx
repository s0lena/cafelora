import '../components/Menu.css'
import { Drink } from './Drink/index.jsx';

export const Menu = ({drinks})=> {
   console.log(drinks)
    return <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
          {drinks.map((d) => (
            <Drink key={d.id} name={d.name} image={`http://localhost:4000${d.image}`} layers={d.layers} />
          ))}
          </div> 
          

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>}