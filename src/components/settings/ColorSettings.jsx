import { usePreferences } from "../../contexts/PreferencesContext";


export default function ColorSettings(){
    //Composant permettant à l'user de sélectionner la couleur d'accentuation voulue

    //Recup des traductions et des couleurs
    const {traductions,langue,couleur,setCouleur} = usePreferences();
    return(
          <div className="color-wrapper">
                <p>{traductions.settings.appearance.accentColor[langue]}</p>
                <label htmlFor="color-default">
                    <input type="radio" name="color" id="color-default" checked={couleur === "default"} value={"default"} onChange={(e)=>setCouleur(e.target.value)} aria-label="Couleur par defaut : violet" />
                </label>
                <label htmlFor="color-blue">
                    <input type="radio" name="color" id="color-blue" checked={couleur === "blue"} value={"blue"} onChange={(e)=>setCouleur(e.target.value)} aria-label="Bleu" />
                </label>
                <label htmlFor="color-blue-light">
                    <input type="radio" name="color" id="color-blue-light" checked={couleur === "blue-light"} value={"blue-light"} onChange={(e)=>setCouleur(e.target.value)} aria-label="Bleu clair" />
                </label>
                <label htmlFor="color-green">
                    <input type="radio" name="color" id="color-green" checked={couleur === "green"} value={"green"} onChange={(e)=>setCouleur(e.target.value)}  aria-label="Vert"/>
                </label>
                <label htmlFor="color-orange">
                    <input type="radio" name="color" id="color-orange" checked={couleur === "orange"} value={"orange"} onChange={(e)=>setCouleur(e.target.value)} aria-label="Orange"/>
                </label>
                <label htmlFor="color-red">
                    <input type="radio" name="color" id="color-red" checked={couleur === "red"} value={"red"} onChange={(e)=>setCouleur(e.target.value)} aria-label="Rouge" />
                </label>
            </div>
    )
}