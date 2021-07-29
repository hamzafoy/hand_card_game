import TwoC from './2_c.png'
import TwoD from './2_d.png'
import TwoH from './2_h.png'
import TwoS from './2_s.png'
import ThreeC from './3_c.png'
import ThreeD from './3_d.png'
import ThreeH from './3_h.png'
import ThreeS from './3_s.png'
import FourC from './4_c.png'
import FourD from './4_d.png'
import FourH from './4_h.png'
import FourS from './4_s.png'
import FiveC from './5_c.png'
import FiveD from './5_d.png'
import FiveH from './5_h.png'
import FiveS from './5_s.png'
import SixC from './6_c.png'
import SixD from './6_d.png'
import SixH from './6_h.png'
import SixS from './6_s.png'
import SevenC from './7_c.png'
import SevenD from './7_d.png'
import SevenH from './7_h.png'
import SevenS from './7_s.png'
import EightC from './8_c.png'
import EightD from './8_d.png'
import EightH from './8_h.png'
import EightS from './8_s.png'
import NineC from './9_c.png'
import NineD from './9_d.png'
import NineH from './9_h.png'
import NineS from './9_s.png'
import TenC from './10_c.png'
import TenD from './10_d.png'
import TenH from './10_h.png'
import TenS from './10_s.png'
import JC from './J_c.png'
import JD from './J_d.png'
import JH from './J_h.png'
import JS from './J_s.png'
import QC from './Q_c.png'
import QD from './Q_d.png'
import QH from './Q_h.png'
import QS from './Q_s.png'
import KC from './K_c.png'
import KD from './K_d.png'
import KH from './K_h.png'
import KS from './K_s.png'
import AC from './A_c.png'
import AD from './A_d.png'
import AH from './A_h.png'
import AS from './A_s.png'

export {
    TwoC,
    TwoD,
    TwoH,
    TwoS,
    ThreeC,
    ThreeD,
    ThreeH,
    ThreeS,
    FourC,
    FourD,
    FourH,
    FourS,
    FiveC,
    FiveD,
    FiveH,
    FiveS,
    SixC,
    SixD,
    SixH,
    SixS,
    SevenC,
    SevenD,
    SevenH,
    SevenS,
    EightC,
    EightD,
    EightH,
    EightS,
    NineC,
    NineD,
    NineH,
    NineS,
    TenC,
    TenD,
    TenH,
    TenS,
    JC,
    JD,
    JH,
    JS,
    QC,
    QD,
    QH,
    QS,
    KC,
    KD,
    KH,
    KS,
    AC,
    AD,
    AH,
    AS
}

export function switchStatementForCards(param) {
    switch(param) {
        case '2_c':
        return TwoC;
        case '2_d':
        return TwoD;
        case '2_h':
        return TwoH;
        case '2_s':
        return TwoS;
        case '3_c':
        return ThreeC;
        case '3_d':
        return ThreeD;
        case '3_h':
        return ThreeH;
        case '3_s':
        return ThreeS;
        case '4_c':
        return FourC;
        case '4_d':
        return FourD;
        case '4_h':
        return FourH;
        case '4_s':
        return FourS;
        case '5_c':
        return FiveC;
        case '5_d':
        return FiveD;
        case '5_h':
        return FiveH;
        case '5_s':
        return FiveS;
        case '6_c':
        return SixC;
        case '6_d':
        return SixD;
        case '6_h':
        return SixH;
        case '6_s':
        return SixS;
        case '7_c':
        return SevenC;
        case '7_d':
        return SevenD;
        case '7_h':
        return SevenH;
        case '7_s':
        return SevenS;
        case '8_c':
        return EightC;
        case '8_d':
        return EightD;
        case '8_h':
        return EightH;
        case '8_s':
        return EightS;
        case '9_c':
        return NineC;
        case '9_d':
        return NineD;
        case '9_h':
        return NineH;
        case '9_s':
        return NineS;
        case '10_c':
        return TenC;
        case '10_d':
        return TenD;
        case '10_h':
        return TenH;
        case '10_s':
        return TenS;
        case 'A_c':
        return AC;
        case 'A_d':
        return AD;
        case 'A_h':
        return AH;
        case 'A_s':
        return AS;
        case 'J_c':
        return JC;
        case 'J_d':
        return JD;
        case 'J_h':
        return JH;
        case 'J_s':
        return JS;
        case 'K_c':
        return KC;
        case 'K_d':
        return KD;
        case 'K_h':
        return KH;
        case 'K_s':
        return KS;
        case 'Q_c':
        return QC;
        case 'Q_d':
        return QD;
        case 'Q_h':
        return QH;
        case 'Q_s':
        return QS;
        default:
        return FourC;
    }
}