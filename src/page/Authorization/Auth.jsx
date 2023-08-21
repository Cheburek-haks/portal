import styles from "./Auth.module.css";
import LogoImage from "../../assets/iconLogo.svg";
import EmailIcon from "../../assets/at-sign.svg";
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg";
import axios from "axios";
import { useState } from "react";

export const AuthPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = async () => {
        try {
            const { data } = await axios.post(
                "https://school.kod06.ru/api/v1/auth/login",
                { email: email, password: password }
            );
            localStorage.setItem("authToken", data.access_token);
        } catch (error) {
            alert("Проверьте свои данные");
        }
    };

    // const authToken = localStorage.getItem("authToken");

    // if (authToken) {
    //     alert("Вы в системе");
    // } else {
    //     alert("Пожалуйста войдите в систему");
    // }

    // let email = "islam";
    // const setEmail = (value) => {
    //     email = value;
    // };

    // setEmail("rahman");

    const handleChange = (event, setValue) => {
        setValue(event.target.value);
    };

    return (
        <div className={styles.page}>
            <form className={styles.form}>
                <img className={styles.logo} src={LogoImage} alt="" />
                <div className={styles.content}>
                    <h2 className={styles.title}>Вход в аккаунт</h2>
                    <div className={styles.field}>
                        <img
                            className={styles.icon_start}
                            src={EmailIcon}
                            alt=""
                        />
                        <input
                            className={styles.text_field}
                            type="text"
                            placeholder="Электронный адрес"
                            onChange={(event) => handleChange(event, setEmail)}
                        />
                    </div>
                    <div className={styles.field}>
                        <img
                            className={styles.icon_start}
                            src={LockIcon}
                            alt=""
                        />
                        <input
                            className={styles.text_field}
                            type="text"
                            placeholder="Пароль"
                            onChange={(event) =>
                                handleChange(event, setPassword)
                            }
                        />
                        <img className={styles.icon_end} src={EyeIcon} alt="" />
                    </div>
                    <button
                        type="button"
                        onClick={handleClick}
                        className={styles.button}
                    >
                        войти
                    </button>
                </div>
            </form>
        </div>
    );
};
