import React from 'react'
import styles from './SignInPage.css'

const Signinpage = () => {
    return(
        <div className="container">
            <div className="signin-chart">
                <img className="logo" src="/logoRes.png "/>
                <div className="signin-text">
                    <h1>Giriş Yap</h1>
                </div>
                 <hr className="hr-signin" />
                <div className="user-information">

                    <div className="user-id">
                                 <h2 className="id-text">Kullanıcı Adınız :</h2>
                                   <input className="text-input" type={"text"} placeholder={"kullanıcı adınız"} />
                    </div>
                    <div className="user-password'">
                                 <h2 className="password-text">Şifreniz :</h2>
                                  <input className="text-input" type={"password"} placeholder={"şifreniz"}/>
                    </div>
                </div>
                <div className="button">
                    <button className="signin-button">Giriş Yap</button>
                </div>
            </div>
        </div>
    )
}

export default Signinpage