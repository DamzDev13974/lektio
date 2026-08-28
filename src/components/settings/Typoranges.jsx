import { usePreferences } from "../../contexts/PreferencesContext";
import RangeSettings from "./RangeSettings";

export default function TypoRanges(){
    //Composant qui regroupe les différents réglages de typographie utilisant des sliders.
    
    //Recup du hook Préférences
    const {traductions,langue,tailleTexte, setTailleTexte,interligne, setInterligne, espacementCaracteres, setEspacementCaracteres} = usePreferences();

    return(
        <div className="typo-ranges">
            <RangeSettings id= "taille-texte" label={traductions.settings.typography.fontSize[langue]} value={tailleTexte} setValue={setTailleTexte} min={12} max={24} step={1} unite="px"/>
            <RangeSettings id= "interligne" label={traductions.settings.typography.lineHeight[langue]} value={interligne} setValue={setInterligne} min={1} max={2} step={0.1} />
            <RangeSettings id= "espacement-caractères" label={traductions.settings.typography.letterSpacing[langue]} value={espacementCaracteres} setValue={setEspacementCaracteres} min={0} max={3} step={0.1} />
        </div>
    )
}