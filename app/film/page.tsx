"use client"
import Lobby from "../components/lobby"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh]">
            <Lobby imageSrc="noodle.jpg" title="the live art of film" text="a picture is worth 1000 words, a video is worth 24000 a second"></Lobby>
        </main>

    )
}