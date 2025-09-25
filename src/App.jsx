
import './App.css'

function App() {


  return (
    <div className='bg-yellow-100 dark:bg-black'>


      <section className='border-2 flex gap-2 p-4 w-3/4 mx-auto h-120 mt-20'>
        {/* light */}
        <div className='border-2 w-1/2'>
          <div className='h-1/5 w-full  bg-[#F9F6F1]'></div>
          <div className='h-1/5 w-full  bg-[#2E2E2E]'></div>
          <div className='h-1/5 w-full  bg-[#CDAA7D]'></div>
          <div className='h-1/5 w-full  bg-[#5A8F7B]'></div>
          <div className='h-1/5 w-full  bg-[#E4DCCF]'></div>

        </div>
        {/* dark  */}
        <div className='border-2 w-1/2 '>
          <div className='h-1/5 w-full bg-[#1C1C1C]'></div>
          <div className='h-1/5 w-full bg-[#F5E8D8]'></div>
          <div className='h-1/5 w-full bg-[#822659]'></div>
          <div className='h-1/5 w-full bg-[#3E5641]'></div>
          <div className='h-1/5 w-full bg-[#DAA520]'></div>

        </div>

      </section>
    </div>
  )
}

export default App




