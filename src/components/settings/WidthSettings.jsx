import { usePreferences } from "../../contexts/PreferencesContext";

export default function WidthSettings(){
    //Composant permettant de gérer la largeur du contenu

    const {traductions,langue,largeurContenu,setLargeurContenu} = usePreferences();

    return(
        <div className="width-settings">
            <p>{traductions.settings.typography.contentWidth.label[langue]}</p>
            <label htmlFor="width-narrow">
                <input type="radio" name="width" id="width-narrow" value="narrow" checked={largeurContenu==="narrow"}onChange={(e)=> setLargeurContenu(e.target.value)}/>
                {traductions.settings.typography.contentWidth.narrow[langue]}
            </label>
            <label htmlFor="width-normal">
                <input type="radio" name="width" id="width-normal" value="normal" checked={largeurContenu==="normal"}onChange={(e)=> setLargeurContenu(e.target.value)}/>
                {traductions.settings.typography.contentWidth.normal[langue]}
            </label>
            <label htmlFor="width-wide">
                <input type="radio" name="width" id="width-wide" value="wide" checked={largeurContenu==="wide"}onChange={(e)=> setLargeurContenu(e.target.value)}/>
                {traductions.settings.typography.contentWidth.wide[langue]}
            </label>
        </div>
    )
}