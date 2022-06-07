import React from 'react';
import Ms from "./mainStyle.module.css";
import {useSelector} from "react-redux";


const Main = () => {
    const data = useSelector((state) => state.resumeInfoReducer.inforesume)

    return (

        <div className={Ms.mainBlock}>

            <div className={Ms.Resume}>
                <h3>Резюме</h3>
            </div>

            <div className={Ms.nameAndSurname}>
                <h2>{data.name}</h2>
                <h2>{data.surname}</h2>
            </div>

            <div className={Ms.birthday}>
                <p>День народження:</p>
                <p>{data.dateofbirth}</p>
            </div>

            <div>
                <h4 style={{textAlign:'center'}}>Освіта та комерційний досвід</h4>
                {data.education.map(e => <p>{e.data}</p>)}
                <p>{data.experiance}</p>
            </div>


            <div>
                <h4 style={{textAlign:'center'}}>Навички</h4>
                {data.hardAndSoftSkills.map(e => <p className={Ms.skills}>{e.data}</p>)}
            </div>

            <h4 style={{textAlign:'center'}}>Контакти</h4>
            {data.contacts.map(e => <p>{e.main} {e.info}</p>)}

                <button className={Ms.button}>Sign in</button>
        </div>
    );
};

export default Main;