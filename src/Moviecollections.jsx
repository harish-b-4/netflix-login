import Ageofultron from "./assets/Age of ultron.png"
import Civilwar from "./assets/Civil war.png"
import Daredevil from "./assets/DareDevil.png"
import Defenders from "./assets/Defenders.png"
import Endgame from "./assets/Endgame.png"
import Fantasticfour from "./assets/Fantstic four.png"
import Infinitywar from "./assets/Infinity war.png"
import Ironman from "./assets/Iron man.png"

const Moviecollections = () => {
    return (
        <div className="mt-5">

            <h1 className="font-semibold text-3xl text-white ml-5">Marvel Movies</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-36 px-5 mt-5 py-2">
                <img src={Ageofultron} alt="Age Of Ultron" />
                <img src={Civilwar} alt="Civil War" />
                <img src={Endgame} alt="EndGame" />
                <img src={Fantasticfour} alt="Fantastic Four" />
                <img src={Infinitywar} alt="Infinity War" />
                <img src={Ironman} alt="Iron man" />
            </div>

            <h1 className="font-semibold text-3xl text-white ml-5 mt-10">Marvel Tv Shows</h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-36 px-5 mt-5 py-2">
                <img src={Daredevil} alt="DareDevil" />
                <img src={Defenders} alt="Defenders" />
            </div>

        </div>
    )
}


export default Moviecollections