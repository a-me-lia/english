"use client"
import Link from "next/link"
import Lobby from "../components/lobby"
import Image from "next/image"

export default function Page(){

    return(
        <main className="flex flex-col relative min-h-[200vh]">
            <Lobby imageSrc="steinway.jpg" title="art and music" text="to indulge in the bars of the score is to escape the poverty of language"></Lobby>
            <section className="flex flex-col w-1/2 mx-auto  mt-48 space-y-4">
<h1 className="text-6xl font-bold mb-4" id="music">Music</h1>

<div className="relative w-full h-96">
<Image src='/everafter.jpg' alt="The 'Ever-After' from Suzume" className="object-cover rounded-xl drop-shadow-xl" fill></Image>
</div>

<h2  className="text-3xl mb-4" id="my-story">My story</h2>
<p>It’s hard for me to believe that someone truly knows me without them having heard me play the piano. For better or for worse, I conceive of myself as limited by the poverty of language. Through the piano, I can communicate what words fail to.</p>



<p>Though I can remember little from my childhood, the moment I resolved to learn the piano stands out with perfect fidelity. I had recently watched the Studio Ghibli movie, <em>My Neighbor Totoro</em>, and, for some reason beyond my control or understanding, the soundtrack deeply resonated with me. It imbued me with the inextinguishable passion to learn the piano. Since then, playing the piano has maintained itself as one of the few constants in my life. In times of sadness, joy, elation, or melancholy, I’ve always derived pleasure from practicing a new piece or fine-tuning one of my favorites to have even greater expressivity. Aside from my favorite romantic and post-classical era pieces such as Chopin’s First Concerto’s technically daunting finale, I also enjoy performing newer pieces including a moving medley transcription from one of my favorite films, “Suzume no Tojimari.”</p>
<div className="p-2 border-2 flex flex-col">
<Link href="https://youtu.be/bTnZRHPoBgQ?t=2330" className="text-blue-500 hover:underline font-bold">CHO - F. Chopin Concerto No. 1, Op. 11</Link>
<Link href="https://youtu.be/GvKQKnIVy1I?t=2479" className="text-blue-500 hover:underline font-bold">LIM - S. Rachmaninov Concerto No. 3, Op. 30</Link>
</div>


<p>The piano is a string (instrument) that connects my soul and my hands. I can’t describe the simple ecstasy that permeates my mind when I rest my fingers on those black and white keys, appreciating a long exhale before beginning to play. The most recent culmination of my piano trajectory was playing the final movement of Rachmaninov’s third concerto. It reminded me that, while I haven’t delighted in <em>every</em> Second, learning the piano, knowing that the struggle of constant practice enables me to play the pieces I love is enough motivation.</p>
<p>As I’ve progressed through my piano career, I’ve also gained a deeper appreciation for music. I remember hating Mozart as a child, but as my sense of musicality has developed, I’ve begun to acknowledge and admire the subtle melodies interwoven into his scores. I’ve come to deeply enjoy his pieces.</p>
<div className="p-2 border-2 flex flex-col">
<Link href="https://www.youtube.com/watch?v=yQen7Utx1Tw" className="text-blue-500 hover:underline font-bold">W. A. Mozart Sonata K.310</Link>
<Link href="https://www.youtube.com/watch?v=NO-ecxHEPqI" className="text-blue-500 hover:underline font-bold">W. A. Mozart "12 Variations of 'Ah-vous dirais-je Maman!'", K.265</Link>
</div>
<p>The second piece, K.265 is notable as it was written while Mozart himself was facing his mother's death.</p>

<p>I’ve learned that each piece tells the story of its composer. This story doesn’t make itself immediately apparent on a first-time play-through. Instead, learning a piece is like developing a relationship where the more consequential truths are teased out <em>slowly</em>. When I played Chopin’s Ballade No. 1 for the first time, it sounded like a shallow and insincere facsimile, but as my investment in the piece grew, I became more appreciative of Chopin’s original intentions. Chopin takes the listener through his own life, starting with the grandiose yearnings of a young man, culminating in the famous coda that represents his despair over growing senile and losing control over his life.</p>
</section>
<section className="flex flex-col w-1/2 mx-auto mb-48 mt-48 space-y-4" >

<h1  className="text-6xl font-bold  mb-4" id="art">Art</h1>
<h2  className="text-3xl mb-4" id="oath-of-the-horatii"><em>Oath of the Horatii</em></h2>
<div className="relative w-full  h-[40rem]">
<Image src='/horatii.jpg' alt="The Oath of the Horatii" className="object-cover rounded-xl drop-shadow-xl" fill></Image>
</div>
<h3  className="text-lg font-bold" id="romantic">Romantic???</h3>
<p>When asked to conjure an image of a romantic piece or artwork, no one will have the 3x4 METER large <em>Oath of the Horatii</em> in mind. Of course, why would one think of what is considered one of the greatest <strong>classical</strong> works when asked for <strong>romanticism</strong>?</p>
<p>In the analysis of the lines, colors, and proportions, <em>Oath of the Horatii</em> is a strikingly scientific painting, without any of the artistic liberties, frills and acrobatics characteristic of romantic works such as foreshortening or god forbid, the use of differently textured brush strokes. Despite this, <em>Oath of the Horatii</em> is indistinguishable from the pathos conveyed by many romantic works, and does in sometimes an even stronger way. Let me explain.</p>
<h3  className="text-lg font-bold" id="sure">Sure!</h3>
<p>The story behind this acclaimed work is one of tragedy, glory, and loss in one. The work depicts the Brothers of Horatii accepting the truth of their predicament; To accept a bloody battle or face dishonor for the family. Similarly to Romantic works with as <em>Slave Ship</em>, it depicts the conflict intrinsic to human nature.</p>
<p>In the right of the scene, the Brothers’ sisters are shown mourning their eminent loss. However not depicted is the tragic story of one of the sisters, whom was slain by the only brother to survive the fight victorious. The story of personal and interpersonal conflict, as well as the raw existence of human nature draws striking parallels to Romantic works.</p>
<h2  className="text-3xl mb-4" id="the-raft-of-medusa"><em>The Raft of Medusa</em></h2>
<div className="relative w-full h-[40rem]">
<Image src='/raft.jpg' alt="The Raft of Medusa" className="object-cover rounded-xl drop-shadow-xl" fill></Image>
</div>
<p><em>The Raft of Medusa</em> is a paragon of the Romantic art form. You’d be hard pressed to not find a single element widely agreed upon to “define” Romanticism, not in the work, Some of these techniques and elements present include:</p>
<ul>
<li>Foreshortening</li>
<li>Triangles</li>
<li>Manipulation, often unrealistically of light</li>
<li>Grotesque depictions</li>
<li>Nature’s scale</li>
<li>Non-scientific/anatomical proportions</li>
</ul>

</section>

        </main>

    )
}