import my from "./img/myimg.webp"
const Main = () => {
    return (
        <main>
            <div className="container">
                <h1 className="bigmytext">Hello my name is<br />  Rahmadjon. <br /> My Nickname <br /> Ronan</h1>
                <img className="myimg" src={my} alt="" />
                
            </div>
        </main>
    );
}

export default Main;