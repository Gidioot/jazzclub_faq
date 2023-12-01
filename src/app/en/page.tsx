'use client'

import Accordion from 'react-bootstrap/Accordion'
import Link from 'next/link';
import Image from 'next/image';
import { saveAs } from 'file-saver';

export default function Home() {
    const saveFile = () => {
        saveAs(
            "/Jazzclub I Poster.png",
            "Jazzclub I Jazztronomical Poster.png"
        )
    }

    return (
        <main>
            <h1 className={"tw-text-jazz-gold tw-text-center tw-pt-8 tw-pb-4 tw-px-4 tw-font-bold"}>The Great Epic Jazzclub I: Jazztronomical FAQ</h1>
            <p className={"tw-text-jazz-white tw-text-center tw-pb-8 tw-px-4"}>Je kan het ook in het <Link href={"/"}>Nederlands</Link> lezen.</p>

            <Accordion className={"tw-max-w-3xl tw-mx-auto tw-bg-jazz-blue tw-p-4"}>
            {/*<Accordion alwaysOpen className={"tw-max-w-3xl tw-mx-auto"}>*/}
                <Accordion.Item eventKey={"0"}>
                    <Accordion.Header>What&apos;s a Jazzclub?</Accordion.Header>
                    <Accordion.Body>
                        An event with much jazz, much club, much party and much gezelligheid!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"1"}>
                    <Accordion.Header>When and where is Jazzclub I: Jazztronomical?</Accordion.Header>
                    <Accordion.Body>
                        The Jazzclub is on December 6 from 20:30 until around 01:00 at the <Link href={"https://maps.app.goo.gl/YNRqWJHQLsXVCjRr8"} target={"_blank"}>Bierfabriek</Link>.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"2"}>
                    <Accordion.Header>Shit, I have a mandatory college on December 6 at exactly 20:30. What now?</Accordion.Header>
                    <Accordion.Body>
                        Don&apos;t worry, you can walk in at every moment!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"3"}>
                    <Accordion.Header>Free?</Accordion.Header>
                    <Accordion.Body>
                        Yes, the Jazzclub is completely free!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"4"}>
                    <Accordion.Header>Who are actually performing?</Accordion.Header>
                    <Accordion.Body>
                        3 fantastic Groover combo&apos;s: Once More, Magatama en Carabinieri!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"5"}>
                    <Accordion.Header>For whom is Jazzclub I: Jazztronomical?</Accordion.Header>
                    <Accordion.Body>
                        For Groover members, non Groover members, family, friends, friends of friends and other acquaintences. Actually, for everyone you can invite to come to the Jazzclub.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"6"}>
                    <Accordion.Header>Is there a cool poster I can send to all my friends?</Accordion.Header>
                    <Accordion.Body>
                        <Image src={'/Jazzclub I Poster.png'} width={500} height={500} alt={"Poster van Jazzclub I: Jazztronomical"} className={"tw-object-contain tw-max-w-md tw-h-full tw-w-full"}></Image>
                        <br />Download it <Link href={""} onClick={saveFile}>here</Link>!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"7"}>
                    <Accordion.Header>Is Bart Kroese on the poster?</Accordion.Header>
                    <Accordion.Body>
                        Yes, but he has a hat.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"8"}>
                    <Accordion.Header>What are all these people doing with their hands/arms, like those weird movements in the direction of the stage?</Accordion.Header>
                    <Accordion.Body>
                        That&apos;s fun. We encourage you to join in if you see other people doing it. Or start it on your own if you feel the vibe.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"9"}>
                    <Accordion.Header>What&apos;s the jazz:club ratio?</Accordion.Header>
                    <Accordion.Body>
                        4:1.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"10"}>
                    <Accordion.Header>Are you looking forward to it?</Accordion.Header>
                    <Accordion.Body>
                        Yes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"11"}>
                    <Accordion.Header>I&apos;m sorry, I didn&apos;t hear that very well...</Accordion.Header>
                    <Accordion.Body>
                        YES!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"12"}>
                    <Accordion.Header>So if I understand everything correctly, there is a very fun Jazzclub going on on December 6 at 20:30 at the Bierfabriek where Once More, Magatama and Carabinieri are all performing?</Accordion.Header>
                    <Accordion.Body>
                        Exactly!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"13"}>
                    <Accordion.Header>Is Saint Nicholas going to be there?</Accordion.Header>
                    <Accordion.Body>
                        No crazy, he&apos;s already back to Spain. Are you crazy or something? Act normal.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </main>
    )
}
