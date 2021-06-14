import { Dropdown } from "../../../common/dropdown/Dropdown";
import PaginationRounded from "../../../common/pagination/Pagination";
import RangeSlider from "../../../common/rangeSlider/RangeSlider";
import { Search } from "../../../common/search/Search";
import { TitleH2 } from "../../../common/titleh2/TitleH2";
import { StringTablePL } from "../../../content/components/packs/packsList/stringTablePL/StringTablePL";
import s from "./ProfileIvan.module.scss";
import profileIvan from "./../../../assets/images/profile/profileIvan.png";

export const ProfileIvan = () => {
    return (
            <div className={s.profileIvan}>
                <aside className={s.aside}>
                    <div className={s.profile}>
                        <img className={s.photo} src={profileIvan} alt="photo"/>
                        <p className={s.name}>Ivan Ivanov</p>
                        <span className={s.span}>Front-end developer</span>
                        <button className={s.btn}>Edit profile</button>
                    </div>
                    <h3 className={s.titleH3}>Number of cards</h3>
                    <div className={s.rangeSlider}>
                        <RangeSlider/>
                    </div>               
                </aside>
                <div className={s.content}>
                    <TitleH2 value="Packs list"
                        style={{ textAlign: "start", padding: "24px 0 15px 0"}} />
                    <div className={s.form}>
                        <Search
                            style={{ width: "100%" }} 
                        />
                    </div>
                    
                    <div className={s.wrap}>
                        <table>
                            <tr>
                                <th className={s.item1}>Name</th>
                                <th className={s.item2}>Cards</th>
                                <th className={s.item3}>Last Updated</th>
                                <th className={s.item4}>Created by</th>
                                <th className={s.item5}>Actions</th>
                            </tr>
                                <StringTablePL
                                    value1="Pack Name"
                                    value2="4"
                                    value3="18.03.2021"
                                    value4="18.03.2021"
                                />
                        </table>
                    </div>
                    <div className={s.pagination}>
                        <PaginationRounded/>
                        <Dropdown/>
                    </div>
                    
                </div>
            </div>
                        
    )
}