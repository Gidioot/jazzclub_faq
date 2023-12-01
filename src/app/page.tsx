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
            <h1 className={"tw-text-jazz-gold tw-text-center tw-pt-8 tw-pb-4 tw-px-4 tw-font-bold"}>De Grote Epische Jazzclub I: Jazztronomical FAQ</h1>
            <p className={"tw-text-jazz-white tw-text-center tw-pb-8 tw-px-4"}>You can also read it in <Link href={"/en"}>English</Link>.</p>

            <Accordion className={"tw-max-w-3xl tw-mx-auto tw-bg-jazz-blue tw-p-4"}>
            {/*<Accordion alwaysOpen className={"tw-max-w-3xl tw-mx-auto"}>*/}
                <Accordion.Item eventKey={"0"}>
                    <Accordion.Header>Wat is een Jazzclub?</Accordion.Header>
                    <Accordion.Body>
                        Een evenement met veel jazz, veel club, veel feest en veel gezelligheid!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"1"}>
                    <Accordion.Header>Waar en wanneer is Jazzclub I: Jazztronomical?</Accordion.Header>
                    <Accordion.Body>
                        De Jazzclub is op 6 december van 20:30 tot ongeveer 01:00 bij de <Link href={"https://maps.app.goo.gl/YNRqWJHQLsXVCjRr8"} target={"_blank"}>Bierfabriek</Link>.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"2"}>
                    <Accordion.Header>Shit, ik heb precies op 6 december om 20:30 een verplicht college. Wat nu?</Accordion.Header>
                    <Accordion.Body>
                        Geen zorgen, je kan op elk moment gezellig binnen komen wandelen!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"3"}>
                    <Accordion.Header>Gratis?</Accordion.Header>
                    <Accordion.Body>
                        Ja, de Jazzclub is helemaal gratis!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"4"}>
                    <Accordion.Header>Wie treden er eigenlijk op?</Accordion.Header>
                    <Accordion.Body>
                        3 fantastische Groover combo&apos;s: Once More, Magatama en Carabinieri!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"5"}>
                    <Accordion.Header>Voor wie is Jazzclub I: Jazztronomical?</Accordion.Header>
                    <Accordion.Body>
                        Voor Groover leden, niet Groover leden, familie, vrienden, vrienden van vrienden, vage kennissen en vagere kennissen. Eigenlijk gewoon iedereen die je zou kunnen uitnodigen om naar de Jazzclub te komen.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"6"}>
                    <Accordion.Header>Is er een coole poster die ik naar al mijn vrienden kan doorsturen?</Accordion.Header>
                    <Accordion.Body>
                        <Image src={'/Jazzclub I Poster.png'} width={500} height={500} alt={"Poster van Jazzclub I: Jazztronomical"} className={"tw-object-contain tw-max-w-md tw-h-full tw-w-full"}></Image>
                        <br/>Download hem <Link href={""} onClick={saveFile}>hier</Link>!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"7"}>
                    <Accordion.Header>En als ik die poster in het echt wil aanschouwen?</Accordion.Header>
                    <Accordion.Body>
                        Loop dan gezellig een rondje door Delft, de campus van TU Delft of langs de Bierfabriek!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"8"}>
                    <Accordion.Header>Staat Bart Kroese nou op de poster?</Accordion.Header>
                    <Accordion.Body>
                        Ja, maar met een hoedje op.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"9"}>
                    <Accordion.Header>Wat doen al die mensen soms met hun handen/armen van die vage bewegingen richting het podium?</Accordion.Header>
                    <Accordion.Body>
                        Dat is leuk. Doe vooral mee als je het anderen ziet doen of begin er zelf mee wanneer de vibe aan is.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"10"}>
                    <Accordion.Header>Hoeveel nachtjes slapen is het tot Jazzclub I: Jazztronomical?</Accordion.Header>
                    <Accordion.Body>
                        18!*<br/>
                        <p className={"tw-text-sm"}><br/>*Deze informatie kan wellicht onjuist zijn.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"11"}>
                    <Accordion.Header>Wat is de jazz:club ratio?</Accordion.Header>
                    <Accordion.Body>
                        4:1.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"12"}>
                    <Accordion.Header>Heb je er een beetje zin in?</Accordion.Header>
                    <Accordion.Body>
                        Ja.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"13"}>
                    <Accordion.Header>Sorry, dat hoorde ik niet zo goed...</Accordion.Header>
                    <Accordion.Body>
                        JA!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"14"}>
                    <Accordion.Header>Dus als ik het goed begrijp is er een hele leuke Jazzclub gaande op 6 december om 20:30 bij de Bierfabriek waarbij Once More, Magatama en Carabinieri allemaal optreden?</Accordion.Header>
                    <Accordion.Body>
                        Precies!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"15"}>
                    <Accordion.Header>Gaat Sinterklaas er zijn?</Accordion.Header>
                    <Accordion.Body>
                        Nee mafkees, hij is alweer terug naar Spanje. Doe normaal.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={"16"}>
                    <Accordion.Header>Is Bram gebehanglijmd?</Accordion.Header>
                    <Accordion.Body>
                        <Image src={'/behanglijm.jpg'} width={500} height={500} alt={"Behanglijm in een fietstas"} className={"tw-object-contain tw-max-w-md tw-h-full tw-w-full"}></Image>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </main>
    )
}
