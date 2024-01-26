"use client"
import Lobby from "../components/lobby"
import Image from "next/image"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh] mb-96">
            <Lobby imageSrc="shanghai.jpg" title="on the human experience" text="Matthew Guo | Adair 10 English Class"></Lobby>
            <section className="flex flex-col w-1/2 mx-auto  mt-48 space-y-4">
<h1 className="text-6xl font-bold mb-4" id="">The search for Truth and Justice</h1>
<div className="flex flex-row w-full space-y-8">
<div className="flex flex-col space-x-4 w-1/2 p-6">
    <h2 className="text-4xl font-bold mb-12">The story</h2>
<p>In 1995, Lamar Johnson was sentenced to the rest of his life behind bars for a murder he did not commit,</p>
<p>Only 28 years later was he released after new evidence proving his innocence was uncovered.</p>
<p>28 years is an uncountable cost of human life, and the compensation Mr. Johnson received is extremely limited, and he may not even qualify for monetary restitution.</p>

</div>
<div className="relative w-1/2 h-96 "><Image src='/Lamar-Johnson.webp' alt='lamar' fill className="object-cover rounded-xl drop-shadow-xl"></Image></div>

</div>

<h2 className="text-4xl font-bold mb-12">How can this happen?</h2>
<p>In almost any modern society, there exists a system dedicated solely to punish, keep away and lock up people believed to be evil, dangerous or “unjust”. In the USA this is colloquially referred to as the “justice system”. However, the penalizing nature of how justice is served to victims of targeted crimes does anything but perpetuate justice.</p>
<p>In countries such as Norway, emphasis is placed on remediation, and prisons are built with the express goal of rehabilitation, not to stash human souls away to rot in poor conditions for decades.</p>
<p>A murder case is emotionally charged. After holding onto a suspect those related to the victim of the crime often only set their hearts on punishing the offender, no matter is there is surmountable proof or not.</p>
<p>A related yet different case of this is the persecution of the police officer in <em>The Hate U Give</em>.  The portrayal of masses of people uniting in protest against a man’s freedom was nothing short of glorious and grandiose in the book and film. However, no one seemed to consider the real situation. A man acted in self-defense - (elaborate further) biologically and physically he had no other choice at the moment but to eliminate a perceived grave threat, how would it be an act of justice to take him away from his family, stash him away in the same place as rapists and “real murderers”?</p>
</section>
        </main>



    )
}