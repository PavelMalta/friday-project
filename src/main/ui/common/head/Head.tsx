import s from "./Head.module.scss";
import { Tab } from "./tab/Tab";
import { Logo } from "../logo/Logo";


export const Head = () => {
    return (
        <div className={s.head}>
            <div className={s.container}>
                <Logo style= {{justifyContent: "start", padding: "10px 0", marginRight: "168px"}}/>
                <Tab/>
            </div>
        </div>
    )
}