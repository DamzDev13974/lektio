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
    <div className={"app theme-" + theme + " font-" + police + " accent-" + couleur } style={{fontSize: tailleTexte + "px", lineHeight:interligne,letterSpacing: espacementCaracteres + "px"} }  >
      <Routes>
        <Route path="/" element={<Bibliotheque/>}/>
        <Route path="/lecture/:id" element={<Lecture/>}/>
        <Route path="/preference" element={<Preferences/>}/>
      </Routes>
    </div>
  )
}

export default App
