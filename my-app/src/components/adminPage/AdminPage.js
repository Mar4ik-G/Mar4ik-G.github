import React from 'react';
import LoginForm from "./loginForm";
import As from "./AdminPage.module.css"


const AdminPage = () => {

        return (
            <div className={As.mainblock}>
                <LoginForm/>
            </div>
            )

}
export default AdminPage;