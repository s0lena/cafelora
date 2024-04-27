import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';


const response = await fetch(
  'http://localhost:4000/api/drinks'
);
const data = await response.json();
const drinks = data.data;
console.log(drinks);

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
    </main>

    <Footer />
  </div>
);


document.querySelector('.nav-btn').addEventListener('click', ()=> {
  document.querySelector('.rollout-nav').classList.toggle('nav-closed');
  })

/*document.querySelector('.rollout-nav').addEventListener('click', ()=> {*/
 const menuItems=document.querySelectorAll('.rollout-nav a');
 menuItems.forEach ((element) => {
 element.addEventListener('click', () => {
  document.querySelector('.rollout-nav').classList.add('nav-closed');
 }) })
/*})*/