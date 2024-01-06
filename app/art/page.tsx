"use client"
import Lobby from "../components/lobby"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh]">
            <Lobby imageSrc="steinway.jpg" title="art and music" text="to indulge in the bars of the score is to escape the poverty of language"></Lobby>
        </main>

    )
}