import { MagnifyingGlassPlus } from 'phosphor-react'
import { CreateAdBanner } from './components/CreateAdBanner';
import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';
import { GameBanner } from './components/GameBanner';

function App() {

  return (

    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} />
      <h1 className='text-6xl text-white font-black'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>

        <GameBanner bannerUrl='/game-1.png' title='League of Legends' adsCount={4} />

        <GameBanner bannerUrl='/game-2.png' title='Dota 2' adsCount={2} />

        <GameBanner bannerUrl='/game-3.png' title='Counter Strike CS:GO' adsCount={1} />

        <GameBanner bannerUrl='/game-4.png' title='Apex Legends' adsCount={0} />

        <GameBanner bannerUrl='/game-5.png' title='Fortnite' adsCount={1} />

        <GameBanner bannerUrl='/game-6.png' title='World of Warcraft' adsCount={1} />

      </div>

      <CreateAdBanner />

    </div>
  )
}

export default App
