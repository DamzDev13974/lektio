export default function ProgressBar({progression}){
    //Composant permettant de suivre le pourcentage de lecture sur le contenu du livre. Change de couleur selon la couleur d’accentuation choisie par l’utilisateur. 

    return(
        <div className="progress-bar">
            <p className="progress">{progression}%</p>
            <div className="progress-track">
                <div className="percent" style={{width : progression + "%"}}></div>
            </div>
        </div>
    )
}