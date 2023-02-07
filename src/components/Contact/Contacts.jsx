import image1 from "../Contact/image 1.png"
import image2 from "../Contact/image 2.png"
import image3 from "../Contact/image 3.png"
export function Contacts()  {
    return (
        <div className="contai">
            <main className="mains">
                <div className="contact">
                        <a href="" className="input contact1"> <img src={image2} alt="" className="telegram" /> Telegram  Raxmadjon</a>
                        <a href="https://www.instagram.com/" className="input contact2"> <img className="imginst" src={image1} alt="" /> instagram ro.nan9720</a>
                        <a href="" className="input contact3"> <img src={image3} alt="" className="watsapp" /> Whatsapp Ronan</a>
                </div>
            </main>
        </div>
    );
}