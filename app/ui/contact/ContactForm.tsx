"use client"

import { useState } from "react"
import Button from "../Button"

const ContactForm = () => {
    const [values, setValues] = useState({
        name: '',
        email: ''
    })
    //TODO: add types
    const handleInputChange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    //TODO: add types
    const handleSubmit = async (e: any) => {
      e.preventDefault()

      await fetch("http://localhost:3000/api/contact", {
        method: 'POST',
        body: JSON.stringify(values)
      })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={values.name}
                placeholder="Your name"
                name="name"
                className="p-2 border mx-2"
                onChange={handleInputChange}
            />

            <input
                type="email"
                value={values.email}
                placeholder="Your email"
                name="email"
                className="p-2 border mx-2"
                onChange={handleInputChange}
            />

            <Button type="submit" className="my-4">Send</Button>
        </form>
    )
}

export default ContactForm