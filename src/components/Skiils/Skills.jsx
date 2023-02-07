import Html from "../Skiils/imgskills/html.png"
import Css from "../Skiils/imgskills/css.png"
import Js from "../Skiils/imgskills/js.png"
import Sass from "../Skiils/imgskills/sass.png"
import React from "../Skiils/imgskills/react.png"
import Jquery from "../Skiils/imgskills/jquery.png"
import Router from "../Skiils/imgskills/reactrouter.png"
import Redux from "../Skiils/imgskills/redux.png"
const Skiils = () => {
    return (
        <div className="Skills">
            <div className="text"><h1></h1></div>
            <div className="one bolm">
                <div className=" skills"><img src={Html} alt="" className="skill html" /></div>
                <div className=" skills"><img src={Css} alt="" className="skill css" /></div>
                <div className=" skills"><img src={Sass} alt="" className="skill sass" /></div>
                <div className=" skills"><img src={Js} alt="" className="skill js" /></div>
            </div>
            <div className="two bolm">
                <div className=" skills"><img src={React} alt="" className="skill react" /></div>
                <div className=" skills"><img src={Jquery} alt="" className="skill jquery" /></div>
                <div className=" skills"><img src={Router} alt="" className="skill reactrouter" /></div>
                <div className=" skills"><img src={Redux} alt="" className="skill redux" /></div>
            </div>
        </div>
    );
}

export default Skiils;