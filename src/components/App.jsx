import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className=''>
      <div className='grid grid-cols-3 gap-x-4 pt-6'>
        <div className='grid grid-cols-2 gap-x-4 col-span-2'>
          <About />
          <Header />
        </div>
        <Feature />
      </div>
    </div>
  );
}

export default App;
