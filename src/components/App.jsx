import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className='flex justify-center laptop:max-w-[1200px] tablet:max-w-[810px] mx-auto h-screen'>
      <div className='flex gap-x-4 h-full mt-8'>
        <div className='flex gap-x-4 flex-col tablet:flex-row'>
          <div className=''>
            <About />
          </div>
          <div className=''>
            <Header />
          </div>
        </div>
        <div className=''>
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default App;
