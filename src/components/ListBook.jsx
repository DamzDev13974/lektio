import { useLivres } from "../contexts/LivresContext";
import CardBook from "../components/CardBook";

export default function ListBook(){
    //Composant chargé d’afficher les livres de la bibliotheques ou ceux filtrés par la recherche

    //Recup des livres via le hook perso
    const {livres, recherche, rechercherLivres} =  useLivres();
    //Const pour le resultat la recherche filtrée
    const resultats = rechercherLivres(recherche);


    
    //Si la recherche existe, j'affiche le resultat de la recherche
    if(recherche.length > 0){
        return(
            <div className="list-book">
                {resultats.length === 0 &&(
                    <p>Aucun livre trouvé pour : {recherche}</p>
                    )}

                {resultats.map((livre)=>{
                    return(
                        <CardBook key={livre.id} livre={livre}/>
                    )
                
            })}
            </div>
        )
    }

    //sinon la liste des livres présents dans la bibliotheque
    return(
        <div className="list-book">
            {livres.map((livre)=>{
                return(
                    <CardBook key={livre.id} livre={livre}/>
                )
            })};
        </div>
    )
    
}