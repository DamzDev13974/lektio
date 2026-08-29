import { usePreferences } from "../../contexts/PreferencesContext";
import { TextAaIcon } from "@phosphor-icons/react";
import FontSettings from "./FontSettings";
import WidthSettings from "./WidthSettings";
import TypoRanges from "./Typoranges";

export default function TypoSettings(){
    //Composant du 2eme volet de réglages : police, taille du texte, espacement des caractères et interlignage. Largeur du contenu (celui de l’overlay disponible sur la page lecture)

    //Recup des traductions
    const {traductions,langue} = usePreferences();

    return(
        <section className="typo-settings">
            <div className="typography">
                <h2 className="secondary-title"><TextAaIcon size={24}/>{traductions.settings.typography.label[langue]}</h2>
                    <FontSettings/>
                    <TypoRanges/>
                    <WidthSettings/>
            </div>
        </section>
    )
}