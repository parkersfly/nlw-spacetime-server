import { Container } from "./styles";

import dunlop from '../../assets/marcas/dunlop.svg'
import hifly from '../../assets/marcas/hifly.svg'
import michelin from '../../assets/marcas/michelin.svg'
import aderenza from '../../assets/marcas/aderenza.svg'
import bridgestone from '../../assets/marcas/bridgestone.svg'
import goodyear from '../../assets/marcas/goodyear.svg'
import mobil from '../../assets/marcas/mobil.svg'
import havoline from '../../assets/marcas/havoline.svg'
import fuchs from '../../assets/marcas/fuchs.svg'
import castrol from '../../assets/marcas/castrol.svg'
import motorcraft from '../../assets/marcas/motorcraft.svg'
import lubrax from '../../assets/marcas/lubrax.svg'

export function LogoSlider() {
  return (
    <Container className="flex">
      <div className="logos">
        <div className="logos-slide">
          <img src={dunlop} alt="" />
          <img src={hifly} alt="" />
          <img src={michelin} alt="" />
          <img src={aderenza} alt="" />
          <img src={bridgestone} alt="" />
          <img src={goodyear} alt="" />
          <img src={mobil} alt="" />
          <img src={havoline} alt="" />
          <img src={fuchs} alt="" />
          <img src={castrol} alt="" />
          <img src={motorcraft} alt="" />
          <img src={lubrax} alt="" />
        </div>

        <div className="logos-slide">
          <img src={dunlop} alt="" />
          <img src={hifly} alt="" />
          <img src={michelin} alt="" />
          <img src={aderenza} alt="" />
          <img src={bridgestone} alt="" />
          <img src={goodyear} alt="" />
          <img src={mobil} alt="" />
          <img src={havoline} alt="" />
          <img src={fuchs} alt="" />
          <img src={castrol} alt="" />
          <img src={motorcraft} alt="" />
          <img src={lubrax} alt="" />
        </div>
      </div>
    </Container>
  );
}
