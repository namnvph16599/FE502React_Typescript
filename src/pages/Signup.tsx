import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type formInput = {
    email: string;
    password: string;
}
type Props = {
    onSignup: (data: formInput) => void
}

const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
    const onSubmit: SubmitHandler<formInput> = (data) => {
        props.onSignup(data)
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('email')} placeholder="Email..." />
                <input type="text" {...register('password')} placeholder="Password..." />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup