import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
type formInput = {
  email: string, password: string
}

type Props = {
  onSignin: (data: formInput) => void
}

const Login = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<formInput>();
  const onHandlerSubmit: SubmitHandler<formInput> = (data) => {
   props.onSignin(data)

  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandlerSubmit)}>
        <input type="text" {...register('email')} placeholder="Email..." />
        <input type="text" {...register('password')} placeholder="Password..." />
        <button>Signin</button>
      </form>
    </div>
  )
}

export default Login