import React, {useEffect, useState} from 'react';
import Ms from "./mainStyle.module.css";
import {useSelector} from "react-redux";
import {getInfo} from "../../firebase/firebaseAction";
import ButtonSignUp from "./button/Button"


const Main = () => {
    const data = useSelector((state) => state.resumeInfoReducer.inforesume)

    const [store, setStore] = useState();

    useEffect(() => {
        getInfo(setStore, "profileInfo");
    }, []);


    return (

        <div className={Ms.mainBlock}>

            <div className={Ms.Resume}>
                <h3>Резюме</h3>
            </div>

            <div className={Ms.nameAndSurname}>
                <h2 style={{fontSize: '22px'}}>{store?.name}</h2>
                <h2 style={{fontSize: '22px'}}>{store?.surname}</h2>
            </div>

            <div className={Ms.birthday}>
                <p>День народження:</p>
                <p style={{margin: '0px'}}>{store?.dateofbirth}</p>
            </div>

            <div>
                <h4 style={{textAlign: 'center'}}>Освіта та комерційний досвід</h4>
                {store?.education.map(e => <p>{e.data}</p>)}
                <p>{store?.experiance}</p>
            </div>


            <div>
                <h4 style={{textAlign: 'center'}}>Навички</h4>
                {data.hardAndSoftSkills.map(e => <p className={Ms.skills}>{e.data}</p>)}
            </div>

            <h4 style={{textAlign: 'center'}}>Контакти</h4>
            {store?.contacts.map(e => <p>{e.main} {e.data}</p>)}

            <ButtonSignUp text={"Sign in"}  path={"/login"} />

        </div>
    );
};

export default Main;