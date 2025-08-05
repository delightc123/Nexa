import AddRounded from '../assets/icons/AddRounded';
import ArrowBack from '../assets/icons/ArrowBack';
import ArrowLeft from '../assets/icons/ArrowLeft';
import ArrowRight from '../assets/icons/ArrowRight';
import Call from '../assets/icons/Call';
import Cart from '../assets/icons/Cart';
import Chat from '../assets/icons/Chat';
import Discover from '../assets/icons/Discover';
import Heart from '../assets/icons/Heart';
import Home from '../assets/icons/Home';
import Lock from '../assets/icons/Lock';
import Mail from '../assets/icons/Mail';
import Menu from '../assets/icons/Menu';
import Message from '../assets/icons/Message';
import Messenger from '../assets/icons/Messenger';
import Notification from '../assets/icons/Notification';
import PencilEdit from '../assets/icons/PencilEdit';
import Profile from '../assets/icons/Profile';
import SearchIcon from '../assets/icons/Search';
import Send from '../assets/icons/Send';
import Send2 from '../assets/icons/Send2';
import Share from '../assets/icons/Share';
import Shop from '../assets/icons/Shop';
import ThreeDotsHorizontal from '../assets/icons/ThreeDotsHorizontal';
import { theme } from './theme';

const icons = {
    arrowLeft: ArrowLeft,
    arrowBack: ArrowBack, 
    menu: Menu,
    home: Home,
    discover: Discover,
    shop: Shop,
    profile: Profile,
    notification: Notification,
    send: Send ,
    send2: Send2 ,
    addRounded: AddRounded,
    heart: Heart,   
    message: Message,
    cart: Cart,
    search: SearchIcon,
    profile: Profile,
    lock: Lock,
    mail: Mail,
    call: Call,
    chat: Chat,
    threeDotsHorizontal: ThreeDotsHorizontal,
    pencilEdit: PencilEdit,
    messenger: Messenger,
    share: Share,
    arrowRight: ArrowRight

}

const Icon = ({name, ...props}) => {
    const IconComponent = icons[name];
  return (
    <IconComponent
        height={props.size || 24}
        width={props.size || 24}
        strokeWidth={props.strokeWidth || 1.9}
        color={theme.colors.textLight}
        {...props}
    />
  )
}

export default Icon;
