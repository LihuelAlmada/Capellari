"use client"
import { useState, ChangeEvent, FormEvent } from "react"
import { useAuthContext } from "@/app/context/AuthContext"

interface FormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { createUser, loginUser, googleLogin } : any = useAuthContext()


  const [values, setValues] = useState<FormValues>({
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
      <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
        <h2>Login</h2>
        <input
          type="email"
          value={values.email}
          required
          placeholder="Tu email"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={values.password}
          required
          placeholder="Tu password"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="password"
          onChange={handleChange}
        />
        <button onClick={() => loginUser(values)} className="mr-4">Login</button>
        <button onClick={() => createUser(values)}>Register</button>
        <button onClick={googleLogin} className="mt-2 block"> Login with google</button>
      </form>
    </div>
  )
}

export default LoginForm