import danisnovik from "./imgpart/danisnovik.png";
import burningman from "./imgpart/burningman.png";
import dizynvorska from "./imgpart/dazynveorska.png";
import farmgame from "./imgpart/farmgame.png";
import kiyamotars from "./imgpart/kiyamotars.png"
const Partfolio = () => {
    return (
        <div className="containe">
            <img src={danisnovik} alt="" className=" img img1" />
            <img src={burningman} alt="" className=" img img2" />
            <img src={dizynvorska} alt="" className=" img img3" />
            <img src={farmgame} alt="" className=" img img4" />
            <img src={kiyamotars} alt="" className=" img img5" />
        </div>
    );
}

export default Partfolio;