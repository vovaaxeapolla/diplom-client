import { Link } from "react-router-dom";
import '@styles/Auth.sass'
import { useForm, SubmitHandler } from "react-hook-form"
import classnames from "classnames";

interface ILoginInputs {
    name: string
    lastname: string
    email: string
    password: string
    passwordConfirm: string
}

export function Register() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isDirty, isValid },
    } = useForm<ILoginInputs>({ mode: 'onBlur', reValidateMode: 'onBlur' })
    const onSubmit: SubmitHandler<ILoginInputs> = (data) => console.log(data)
    console.log(errors);
    return (
        <div className="auth">
            <main className="form-base">
                <div className="form-header">
                    <h1>Создать профиль</h1>
                </div>
                <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-input__label">
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Имя"
                            {...register("name", { required: "Обязательное поле" })}
                        />
                        <span className="form-input__placeholder">Имя</span>
                    </label>
                    <label className="form-input__label">
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Фамилия"
                            {...register("lastname", { required: "Обязательное поле" })}
                        />
                        <span className="form-input__placeholder">Фамилия</span>
                    </label>
                    <label className="form-input__label">
                        <input
                            id="email"
                            className={classnames("form-input", { "form-input-error": errors.email })}
                            {...register("email", {
                                required: "Обязательное поле",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Неверная электронная почта",
                                },
                            })}
                            placeholder="email"
                            type="email"
                        />
                        <span className="form-input__placeholder">Электронная почта</span>
                        {errors.email && <span className="form-input__error">{errors.email.message}</span>}
                    </label>
                    <label className="form-input__label">
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Пароль"
                            {...register("password", { required: "Обязательное поле", minLength: 8, maxLength: 32 })}
                        />
                        <span className="form-input__placeholder">Пароль</span>
                    </label>
                    <label className="form-input__label">
                        <input
                            type="password"
                            className={classnames("form-input", { "form-input-error": errors.passwordConfirm })}
                            placeholder="Пароль"
                            {...register("passwordConfirm", {
                                required: "Обязательное поле",
                                validate: (val: string) => {
                                    if (watch('password') != val) {
                                        return "Пароли не совпадают";
                                    }
                                }
                            })}
                        />
                        <span className="form-input__placeholder">Повторите пароль</span>
                        {errors.passwordConfirm && <span className="form-input__error">{errors.passwordConfirm.message}</span>}
                    </label>
                    <button className="form-btn form-btn__submit" type="submit" disabled={!isDirty || !isValid}>
                        Войти
                    </button>
                </form>
                <Link to="/auth/login" className="form-btn">
                    Вход в профиль
                </Link>
            </main>

        </div>
    );
}