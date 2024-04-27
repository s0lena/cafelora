import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Menu } from '../components/Menu';
import { Gallery } from '../components/Gallery';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
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