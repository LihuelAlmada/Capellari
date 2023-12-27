import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json("Hello world")
}

export const POST = async (request : Request) => {
    try {
        const data = await request.json()
    // TODO: create register in database

    return NextResponse.json("OK")
    } catch (error) {
        console.log(error)
        return NextResponse.json("Error")
    }
}