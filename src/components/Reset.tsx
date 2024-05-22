import { Link } from "react-router-dom";
import '@styles/Auth.sass'
import { useForm, SubmitHandler } from "react-hook-form"
import classnames from "classnames";

interface ILoginInputs {
    email: string
    password: string
}

export function Reset() {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<ILoginInputs>({ mode: 'onBlur' })
    const onSubmit: SubmitHandler<ILoginInputs> = (data) => console.log(data)
    return (
        <div className="auth">
            <main className="form-base">
                <div className="form-header">
                    <h1>Создать профиль</h1>
                </div>
                <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                    <button className="form-btn form-btn__submit" type="submit" disabled={!isDirty || !isValid}>
                        Войти
                    </button>
                </form>
                <Link to="/auth/login" className="form-btn form-btn-register">
                    Вход в профиль
                </Link>
            </main>

        </div>
    );
}