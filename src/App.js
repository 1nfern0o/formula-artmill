import Input from "./Components/input";
import {useState} from "react";

const App = () => {
    const [length, setLength] = useState(0);
    const [height, setHeight] = useState(0);
    const [depth, setDepth] = useState(0);
    const [formulaValue, setFormulaValue] = useState({
        OverallLength: 0,
        OverallHeight: 0,
        OverallDepth: 0,
        InteriorLength: 0,
        InteriorHeight: 0,
        FootprintLength: 0,
        FootprintDepth: 0,
        InteriorDepth: 0,
        price: 0
    })

    const onClick = () => {
        const OverallLength = +length + 3;
        const OverallHeight = +height + 2;
        const OverallDepth = +depth + 0.5;
        const InteriorHeight = OverallHeight - 4;
        const InteriorLength = OverallLength - 0.75;
        const FootprintLength = OverallLength - 1.5;
        const FootprintDepth = OverallDepth - 2;
        const InteriorDepth = OverallDepth - 2.75;
        const _price = +length * +height;
        const priceSecond = _price / 120;
        const price = Math.ceil(priceSecond * 65);
        setFormulaValue({
            OverallLength,
            OverallHeight,
            OverallDepth,
            InteriorHeight,
            InteriorLength,
            FootprintLength,
            FootprintDepth,
            InteriorDepth,
            price
        });
    }

  return (
    <div>
      <div className="container">
          <div className="demo-calculate section">
              <div className="demo-calculate__wrapper">
                  <div className="demo-calculate__item">
                      <div className="demo-calculate__img">
                          <img
                              src="https://media.discordapp.net/attachments/707569698031665223/934466987185274941/Extra.png"
                              alt="Demo image 1"
                          />
                      </div>
                  </div>
                  <div className="demo-calculate__item">
                      <div className="demo-calculate__img">
                          <img
                              src="https://media.discordapp.net/attachments/707569698031665223/934466987621503006/Extra1.png"
                              alt="Demo image 1"
                          />
                      </div>
                  </div>
              </div>
          </div>
          <div className="top section">
            <div className="top__wrapper">
                <div className="top__item">
                    <div className="top__img">
                        <img src="https://media.discordapp.net/attachments/707569698031665223/934466520254394468/Walnut___Expresso_copy_7.png" alt="Top image"/>
                    </div>
                </div>
                <div className="top__item">
                    <div className="top__title">Form Artmillworkdesign</div>
                    <div className="top__desc">Введите параметры батареи</div>
                    <div className="parameter-form">
                        <form className="form">
                            <Input id="length" placeholder="Length" label="Length" value={length} setValue={setLength} />
                            <Input id="height" placeholder="Height" label="Height" value={height} setValue={setHeight} />
                            <Input id="depth" placeholder="Depth" label="Depth" value={depth} setValue={setDepth} />
                            <button type="button" onClick={onClick} className="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
          </div>
          <div>
              <div className="calculation">
                  <div className="calculation__images">
                      <div className="calculation__item calculation__item_first">
                          <div className="calculation__image">
                              <img src="https://media.discordapp.net/attachments/707569698031665223/935662036053028864/Blue_print_1_pro_Front.png" alt="demo 1"/>
                          </div>
                          <div className="calculation__numbers">
                              <div className="calculation__number calculation__overall-length">{formulaValue.OverallLength}</div>
                              <div className="calculation__number calculation__overall-height">{formulaValue.OverallHeight}</div>
                              <div className="calculation__number calculation__interior-length">{formulaValue.InteriorLength}</div>
                              <div className="calculation__number calculation__footprint-length">{formulaValue.FootprintLength}</div>
                              <div className="calculation__number calculation__interior-height">{formulaValue.InteriorHeight}</div>
                          </div>
                      </div>
                      <div className="calculation__item calculation__item_second">
                          <div className="calculation__image">
                              <img src="https://media.discordapp.net/attachments/707569698031665223/935662036526981211/Blue_print_pro_1_leftrigth.png" alt="demo 2"/>
                          </div>
                          <div className="calculation__numbers">
                              <div className="calculation__number calculation__interior-depth calculation__overall-depth_left">{formulaValue.OverallDepth}</div>
                              <div className="calculation__number calculation__interior-depth calculation__overall-depth_right">{formulaValue.OverallDepth}</div>
                              <div className="calculation__number calculation__interior-depth calculation__interior-depth_left">{formulaValue.InteriorDepth}</div>
                              <div className="calculation__number calculation__footprint-depth">{formulaValue.FootprintDepth}</div>
                          </div>
                      </div>
                      <div className="calculation__item calculation__item_third">
                          <div className="calculation__image">
                              <img src="https://media.discordapp.net/attachments/707569698031665223/935662037009322034/Blue_print_pro_1_topview.png" alt="demo 3"/>
                          </div>
                          <div className="calculation__numbers">
                              <div className="calculation__number calculation__overall-length">{formulaValue.OverallLength}</div>
                              <div className="calculation__number calculation__overall-depth">{formulaValue.OverallDepth}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
