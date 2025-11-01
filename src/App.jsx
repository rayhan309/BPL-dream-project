import './App.css';
import Playars from './components/Players/Playars';
import Navber from './components/Players/Navber';
import { Suspense, useState } from 'react';
import Spinner from './components/Spinner';
import Selected_Players from './components/Players/Selected_Players';



const playersDataPromiss = fetch('/plyars.json')
  .then(res => res.json())


function App() {

  const [toggle, setToggle] = useState(true)

  const [isSelected, setIsSelected] = useState(100000)

  const [selectedCard, setSelectedCard] = useState([])
   
  const selectedCardHanler = (ply) => {
    const newCard = [...selectedCard, ply]
    setSelectedCard(newCard)   
  }

  return (
    <>


      <Navber isSelected={isSelected}></Navber>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto mt-14">
        <h2 className="text-2xl font-bold text-[#131313]">{toggle ? 'Available Players' : `Seleted Players(${selectedCard.length}/6)`}</h2>
        <div>
          <button onClick={() => setToggle(true)} className={`${toggle && 'bg-[#E7FE29]'} py-2 px-4 border-t border-b border-l  border-gray-300 rounded-l-xl font-medium`}>Available</button>
          <button onClick={() => setToggle(false)} className={`${toggle || 'bg-[#E7FE29]'} py-2 px-4 border-t border-b border-r   border-gray-300 rounded-r-xl font-medium`}>Selected (<span>{selectedCard.length}</span>)</button>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto mt-[25px] '>
        {
          toggle ?
            <Suspense fallback={<Spinner></Spinner>}>
              <Playars
              playersDataPromiss={playersDataPromiss}
              setIsSelected={setIsSelected}
              isSelected={isSelected}
              selectedCardHanler={selectedCardHanler}></Playars>
            </Suspense> :
            <Suspense fallback={<Spinner></Spinner>}>
              <Selected_Players isSelected={isSelected} setIsSelected={setIsSelected} selectedCard={selectedCard} setSelectedCard={setSelectedCard}></Selected_Players>
            </Suspense>
        }
      </div>

    </>
  )
}

export default App
