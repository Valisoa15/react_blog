import React from 'react';
import './../styles/Page.css';
import Sary2 from "./../assets/mer.jpg";
import Sary1 from "./../assets/sary0.jpg";
import Sary3 from "./../assets/soleil.jpg";
import Sary4 from "./../assets/foret.jpg";

const Page = () => {
    return (
        <div>
            <div> 
                <img src={Sary1} alt="sary " width="1600 " height=" 500"/>
                <label className="sisiny"></label>
            </div>
            <h1><center><label id="blog"> AMPEFY</label> </center></h1>
            <div>
            <br/><br/>
                <div className="gauche"> 
                        <img src={Sary2} alt=" Voiture" width="800" height="610"  id=""/>
                    <p>
                        <h2 id="titre2">Chute de la Lily</h2>
                        <label>La chute de la Lily est un paysage splendide à ne pas manquer à Madagascar.Ses paysages volcaniques, 
            son sol fertile et ses habitants si attachants distinguent Ampefy des autres régions. Mais cette ville dispose également d’un atout considérable, car elle comprend l’une des sites touristiques le plus visités sur l’île, la chute de la Lily.Plusieurs activités sont proposées à Ampefy: randonnées VTT, canoë-kayak ou encore randonnées pédestres. À découvrir en famille ou en amoureux le temps d’un week-end ou d’un séjour</label>
                    </p>
                    <br></br><br></br>
                    <p> 
                    


                    </p>
                </div>
            </div>

            <div className="io">
                
                 <br/><br/>
                <p className="id1">
                    <p className="forms">
                    <img src={Sary4} alt=" Voiture" width="500" height="220"  className="image"/>
                            <p className="form1">
                                <p>
                                 
                                </p>
                                 <h2 className="titre1"> Geyser </h2>
                                 <label> Près de la petite Ville d' Ampefy : on peut y voir les seuls Geyser de Madagascar
                                     .Le séjour à Ampefy permet aussi de profiter du spectale offert âr le Geyser Analavory .Il faut avouer que les Geyser sont suremnet les plus beaux d'Ampefy
                                 </label>
                             </p>
                     </p>
                     <br></br>
                    <p className="forms">
                    <img src={Sary3} alt=" Voiture" width="500" height="220"  className="image"/>
                            <p className="form1">
                                 <h2 className="titre1"> Ilot de la Vierge</h2>
                                    <label>
                                        L'Ilot de la Vierge se situe dans la Région d'Ampefy sur l'un des sommets les plus hauts de Madagascar .C'est certainement l'endroit le plus agréable d'Ampefy
                                    </label>
                            </p>
                    </p>
                 </p>

            </div>

            
  
        
        </div>


    );
};

export default Page;