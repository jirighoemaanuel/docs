import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className='flex justify-center min-h-screen m-8'>
      <div className='laptop:max-w-[1200px] tablet:max-w-[810px]'>
        <div className='flex gap-x-4 h-full'>
          <div className='flex gap-x-4 flex-col tablet:flex-row '>
            <div className=''>
              <About />
            </div>
            <div className=''>
              <Header />
            </div>
          </div>
          <div className='hidden laptop:block'>
            <Feature />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
