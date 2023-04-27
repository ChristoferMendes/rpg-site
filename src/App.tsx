import { AnimatedPage } from './components/AnimatedPage';
import { HomeBackground } from './components/Home/HomeBackground';
import { HomeCharacters } from './components/Home/HomeCharacters';
import { HomeLogout } from './components/Home/HomeLogout';
import { HomeUserImage } from './components/Home/HomeUserImage';
import { HomeWelcomeText } from './components/Home/HomeWelcomeText';
import { DiceSeparator } from './components/DiceSeparator';
import { useLogoutQuestionMarkStore } from './store/logoutQuestionMark';

function App() {
  const { logoutQuestionMark, loggedOut, actions: { hideLogoutQuestionMark } } = useLogoutQuestionMarkStore()

  const handleClickOutsiteOfLogoutQuestionMark = () => {
    if (!logoutQuestionMark || loggedOut) return

    hideLogoutQuestionMark()
  }

  return (
    <AnimatedPage>
      <div className='overflow-hidden' onClick={handleClickOutsiteOfLogoutQuestionMark}>
        <div className='relative h-72'>
          <HomeBackground />
          <HomeUserImage />
        </div>
        <HomeWelcomeText />
        <DiceSeparator />
        <HomeCharacters />
        <HomeLogout />
      </div>
    </AnimatedPage>
  )
}

export default App
