import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Tab from "./Tab";
import {addInfo, deleteInfo, getInfo} from "../../firebase/firebaseAction";
import ButtonSignUp from "../mainPage/button/Button";
import As from "./AdminStyle.module.css"

const AdminPage = () => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        getInfo(setInfo, "profileInfo");
        // addInfo( {
        //     name: "Марк",
        //         surname: "Горбайчук",
        //         dateofbirth: "01.06.2002",
        //         placeOfResidence: "city.Lviv",
        //         contacts: [
        //         {main: "Номер телефону: ", info: "+380971195151"},
        //         {main: "Електронна пошта: ", info: "brainocswell@gmail.com"},
        //     ],
        //         hardAndSoftSkills: [
        //         {data: "вміння працювати в команді, критичне мислення, лідерство, креативність," +
        //                 " вміння дотримуватися дедлайни, відповідальність та дисциплінованість"},
        //         {data: "TypeScript, JS, HTML5, CSS3, bootstrap, React, Redux ect."}
        //     ],
        //         experiance: "Немає комерційного досвіду",
        //         education: [
        //         {data: "унівеситет: вища незакінчена освіта. Спеціальність:Компютерні науки"},
        //         {data: "Lgoos IT Academy"},
        //     ],
        // },"profileInfo")
    }, []);

    const contactInfo =
        info?.contacts &&
        info.contacts.map((e, index) => {
            return (
                <Tab text={e.main} data={e.data} onChange={(data) => {
                         let contactInfo = [...info.contacts];
                    contactInfo.splice(index, 1, { main: e.main, data })
                        setInfo({...info, contacts: [...contactInfo],});}
                }
                />
            );
        });



    return (
        <div>

            <div className={As.mainBlock}>
                <h3>Редегувати данні рез'юме</h3>
                <div>
                    <Tab data={info.name} text={"Ім'я"} onChange={(e) => {
                        setInfo({...info, name:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.surname} text={"Прізвище"} onChange={(e) => {
                        setInfo({...info, surname:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.dateofbirth} text={"Дата народження"} onChange={(e) => {
                        setInfo({...info, dateofbirth:e});
                    }}/>
                </div>

                <div>
                    <Tab data={info.experiance} text={"Дата народження"} onChange={(e) => {
                        setInfo({...info, experiance:e});
                    }}/>
                </div>

                {contactInfo}

                <ButtonSignUp
                    func={() => {
                        const addInfo1 = addInfo(info, "profileInfo");
                        const deleteInfo1 = deleteInfo("profileInfo", info.id);
                    }}
                    text="Save Changes"
                    path="/"
                />
            </div>


        </div>
    );
};

export default AdminPage;