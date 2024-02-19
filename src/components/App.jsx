import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className=' pt-6 mx-6 w-full'>
      <div className='lg:grid lg:grid-cols-3 gap-x-6'>
        <div className='grid md:grid-cols-1-2 lg:grid-cols-2-1 gap-x-6 lg:col-span-2'>
          <div className=''>
            <About />
          </div>
          <div className=''>
            <Header />
          </div>
        </div>
        <div className='hidden lg:block'>
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default App;
