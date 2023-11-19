import { NextResponse } from "next/server"

export const GET = async () => {
    return NextResponse.json("Hello world")
}

export const POST = async (request : Request) => {
    const data = await request.json()
    console.log(data)
    // TODO: create register in database

    return NextResponse.json("OK")
}