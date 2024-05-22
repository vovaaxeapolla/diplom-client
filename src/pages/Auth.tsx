import { Routes, Route, Link } from "react-router-dom";
import '@styles/Auth.sass'
import { useForm, SubmitHandler } from "react-hook-form"

interface ILoginInputs {
    email: string
    password: string
}

export function Auth() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isDirty, isValid },
    } = useForm<ILoginInputs>({ mode: 'onBlur' })
    const onSubmit: SubmitHandler<ILoginInputs> = (data) => console.log(data)
    console.log(errors)
    return (
        <div className="auth">
            <main className="form-base">
                <div className="form-header">
                    <h1>Вход в профиль</h1>
                </div>
                <form className="form" noValidate onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-input__label">
                        <input
                            id="email"
                            className="form-input"
                            {...register("email", {
                                required: "required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format",
                                },
                            })}
                            placeholder="email"
                            type="email"
                        />
                        <span className="form-input__placeholder">Электронная почта</span>
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
                    <Link to="reset" className="form form-link__reset">Забыли пароль?</Link>
                    <button className="form-btn form-btn__submit" type="submit" disabled={!isDirty || !isValid}>
                        Войти
                    </button>
                </form>
                <Link to="register" className="form-btn form-btn-register">
                    Создать профиль
                </Link>
            </main>

        </div>
    );
}