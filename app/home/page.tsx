"use client"
import Lobby from "../components/lobby"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh]">
            <Lobby imageSrc="shanghai.jpg" title="on the human experience" text="Matthew Guo | Adair 10 English Class"></Lobby>
        </main>

    )
}