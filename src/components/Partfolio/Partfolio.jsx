import danisnovik from "./imgpart/danisnovik.png";
import burningman from "./imgpart/burningman.png";
import dizynvorska from "./imgpart/dazynveorska.png";
import farmgame from "./imgpart/farmgame.png";
import kiyamotars from "./imgpart/kiyamotars.png"
const Partfolio = () => {
    return (
        <div className="containe">
            <div className="bigtext">Partfolio</div>https://raxmadjon.github.io/
            <a href="https://raxmadjon.github.io/danisnovik/"><img src={danisnovik} alt="" className=" img img1" /></a>
            <a href="https://raxmadjon.github.io/burningman/"><img src={burningman} alt="" className=" img img2" /></a>
            <a href="https://raxmadjon.github.io/dizaynveorstka/"><img src={dizynvorska} alt="" className=" img img3" /></a>
            <a href="https://raxmadjon.github.io/farmgame/"><img src={farmgame} alt="" className=" img img4" /></a>
            <img src={kiyamotars} alt="" className=" img img5" />

        </div>
    );
}

export default Partfolio;