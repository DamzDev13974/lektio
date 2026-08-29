import { Route, Routes } from 'react-router'
import Bibliotheque from './pages/Bibliotheque'
import Lecture from './pages/Lecture'
import Preferences from './pages/Preferences'
import { usePreferences } from './contexts/PreferencesContext'

function App() {
  
//Recup du hook Preference 
const {traductions, couleur, theme,police,tailleTexte,interligne,espacementCaracteres} = usePreferences();

//Je fais un affichage temporaire, le temps que le json recup toutes les infos
  if (!traductions.nav) {
          return (
              <div className={"loading-page theme-" + theme}>
                  <h1>Chargement en cours...</h1>
              </div>
          );
      }
  return (
    <div className={"app theme-" + theme + " font-" + police + " accent-" + couleur } style={{"--font-size": tailleTexte + "px", "--line-height":interligne,"--letter-spacing": espacementCaracteres + "px"} }  >{/* Classe dynamique pour le css */}
      <Routes>
        <Route path="/" element={<Bibliotheque/>}/>
        <Route path="/librairie" element={<Bibliotheque/>}/>{/* Creation pour le isActive de React différent de "/" */}
        <Route path="/lecture/:id" element={<Lecture/>}/>
        <Route path="/preference" element={<Preferences/>}/>
      </Routes>
    </div>
  )
}

export default App
