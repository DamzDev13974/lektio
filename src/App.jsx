import { Route, Routes } from 'react-router'
import Bibliotheque from './pages/Bibliotheque'
import Lecture from './pages/Lecture'
import Preferences from './pages/Preferences'
import { usePreferences } from './contexts/PreferencesContext'

function App() {
  
//Recup du hook Preference 
const {theme,police,tailleTexte,interligne,espacementCaracteres} = usePreferences();
  return (
    <div className={"app theme-" + theme + " font-" + police} style={{fontSize: tailleTexte + "px", lineHeight:interligne,letterSpacing: espacementCaracteres + "px"}} >
      <Routes>
        <Route path="/" element={<Bibliotheque/>}/>
        <Route path="/lecture/:id" element={<Lecture/>}/>
        <Route path="/preference" element={<Preferences/>}/>
      </Routes>
    </div>
  )
}

export default App
