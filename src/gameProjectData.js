import IMG1 from "../src/assets/betakkuma.png";
import IMG2 from "../src/assets/FireFireFire.png";
import IMG3 from "../src/assets/Koi.png";
import IMG4 from "../src/assets/LetsBBQ.png";
import IMG5 from "../src/assets/Rhythm.png";

const masterlink = "https://minhnduit.github.io/game-portfolio/";

const getGameLink = (data) => {
  return masterlink + data;
};

const gameProjectData = [
  {
    id: 1,
    image: IMG1,
    title: "Betakkuma",
    demo: "https://kantan.game/lightgame/game/483?fbclid=IwAR2zrPQBo4kvNSLIy6V_8V5bx738r97XbUKdoAx9izR3L30jUtUnV6ZQUqs"
  },
  {
    id: 2,
    image: IMG2,
    title: "FireFireFire",
    demo: "https://kantan.game/lightgame/game/489?fbclid=IwAR3PgfCElJqoUdXNhEcFT3rgReR1oYqSW1xUhaX0NszgUtke0mPCXlS0_Rw",
  },
  {
    id: 3,
    image: IMG3,
    title: "Koi",
    demo: getGameLink("Koi"),
  },
  {
    id: 4,
    image: IMG4,
    title: "LetsBBQ",
    demo: getGameLink("LetsBBQ"),
  },
  {
    id: 5,
    image: IMG5,
    title: "Rhythm",
    demo: getGameLink("Rhythm"),
  },
];

export default gameProjectData;
