import './App.css'
import About from '../About/About';
import Menu from '../Menu/Menu';
import Dish from '../Dish/Dish';

export default function App() {
  return (
    <div>
      <About name='Alice' table={15} />
      <About name='Denis' table={7} />
      <Menu username='Lisa' maincorses={['risotto', 'pasta', 'ravioli', 'lasagne', 'zuppa']} />
      <Dish />
      <Dish type='success' />
      <Dish type='error'/>
    </div>
  );
};


