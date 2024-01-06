"use client"
import Lobby from "../components/lobby"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh]">
            <Lobby imageSrc="painting.webp" title="the art of the written word" text="analysis, reactions to the works read in class"></Lobby>
        </main>

    )
}