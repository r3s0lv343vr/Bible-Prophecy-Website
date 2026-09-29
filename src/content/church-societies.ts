import type { ChurchId } from "@/content/churches";

export type SocietySection = {
  title: string;
  paragraphs: string[];
};

export type SocietyPicture = {
  src: string;
  kind: "society" | "artefact";
};

export const churchSocietyPictures: Partial<Record<ChurchId, SocietyPicture[]>> = {
  ephesus: [
    { src: "/images/churches/ephesus/01-columns-ruin.jpg", kind: "society" },
    { src: "/images/churches/ephesus/02-artemis-statue.webp", kind: "artefact" },
    { src: "/images/churches/ephesus/03-agora.jpg", kind: "society" },
    { src: "/images/churches/ephesus/04-vaulted-arcade.jpg", kind: "society" },
    { src: "/images/churches/ephesus/05-artemis-statue.jpg", kind: "artefact" },
    { src: "/images/churches/ephesus/06-artemis-huntress.jpg", kind: "artefact" },
    { src: "/images/churches/ephesus/07-arcade-fountain.jpg", kind: "society" },
    { src: "/images/churches/ephesus/08-city-harbour.webp", kind: "society" },
    { src: "/images/churches/ephesus/09-temple-model.jpg", kind: "society" },
  ],
};

export const churchSocieties: Partial<Record<ChurchId, SocietySection[]>> = {
  ephesus: [
    {
      title: "Society of Ephesus",
      paragraphs: [
        "Ephesus was the most important city in western Asia Minor (modern Turkey) in New Testament times. In fact, it was called “the mother city” of Asia. It had an estimated population of around 200,000–250,000.",
        "Its wealth and importance came from its location. It was situated on an inland harbour linked by a canal to the River Cayster which flowed into the Aegean Sea; and it was at the crossroads of major trade routes. So it was an extremely important commercial centre — in fact, the largest trading centre in Asia Minor.",
        "The city had gymnasiums, theatres (one of them seating 25,000), a triumphal arch and a fabulous library (though this was only built after New Testament times). It had won the right to house the temple of the divine Julius (Caesar) and the Goddess Roma, and had a huge temple to the emperor Domitian (AD 81–96).",
        "The city’s greatest claim to fame didn’t lie in the realm of business or economics, but religion.",
        "The most important structure in Ephesus was a major temple to the Greek goddess Artemis (known in Rome as Diana), which was one of the 7 wonders of the ancient world and which people came from far and wide to see. It was 425 feet (130m) long and 220 feet (67m) wide, with white marble columns 62 feet (19m) high and just 4 feet (1.2m) apart. The temple was founded when her image — probably a meteorite — “fell from heaven” (Acts 19:35).",
        "Ephesus became known as “the guardian of the temple of the great Artemis and her image which fell from heaven.” It was a sacred site for over 1200 years.",
      ],
    },
    {
      title: "Artemis",
      paragraphs: [
        "In Greek and Roman mythology Artemis was the daughter of Zeus and the twin sister of Apollo. She was the goddess of the hunt and wild animals, as well as the goddess of women. She protected women in childbirth, protected young girls, especially their virginity, and brought relief to women in need.",
        "A eunuch priest served Artemis, assisted by virgin priestesses. This heavily-women-dominated religion may be part of the reason why Paul insists so much on women keeping their proper place in the church, and on men rising up to play their proper role in worship (1 Timothy 2:8–15). (Remember that, by the time Paul wrote to Timothy, Timothy was leading the church in Ephesus).",
        "As a fertility goddess, ritual prostitution played an important part in the worship of Artemis. So, from a Christian point of view, the temple was an exceedingly immoral. Worship also included many secret rituals or “mysteries”, portraying birth and death — hence Paul’s repeated use of the word “mystery” in his letter (Ephesians 1:9; 3:3, 4, 6, 9; 5:32; 6:19). The difference was that whereas their “mystery” was hidden and secret, revealed only to the special few, Paul says that God’s “mystery” has now been made fully known in Jesus — to everyone!",
        "But the temple wasn’t just about religion; it was also about business — big business! There was a guild of silversmiths who made little silver shrines and copies of the stone that fell from heaven.",
        "Her temple served as the city’s main bank, and thousands of temple servants were entrusted with looking after the fortunes that people entrusted to them. Artemis’ image was also on their coins, and festivals and games held in her honour. So to challenge Artemis, like Paul did, was to challenge the whole social and economic order. But that is what the gospel is meant to do!",
      ],
    },
  ],
  smyrna: [
    {
      title: "Society of Smyrna",
      paragraphs: [
        "Smyrna was an ancient city on a small peninsula jutting out from Asia Minor into the Aegean Sea. It was originally established around 1000 BC by Aeolian Greek settlers in “Old Smyrna.” The famous Greek poet Homer, author of the epics the Iliad and the Odyssey, was probably born around 850 BC, and a shrine to Homer stood in the Roman period.",
        "After the time of Alexander the Great in the late 4th century BC, a “new” Smyrna was built by the Seleucids along the coast and up the slopes of Mount Pagos. This region eventually became part of Asia Province during the Roman period, and Smyrna, between Ephesus and Pergamum, developed into a wealthy port city and one of the most important cities of the province, with a population of nearly 100,000 residents.",
        "During the Roman period, Smyrna was apparently a city of great beauty and impressive architecture that circled Mount Pagus like a “crown.” Walking through the city, one would see the Ephesian gate, a gymnasium near the harbor, a stadium on the west side, and a theater holding 20,000 on the northwest mountain slope. There were temples to Zeus (including a large altar), Cybele the Mother Goddess near the harbor, Aphrodite, Dionysius, and the Emperors — probably Tiberius in AD 26 and Domitian before AD 96 — as well as the harbor, a library, and a massive agora with a bema on the west and a basilica on the north.",
        "Smyrna was severely damaged by an earthquake in AD 178. The Roman-period city was repaired or rebuilt in the 2nd century AD. This wealthy city was also known for its exceptionally good wine, used for both enjoyment and medicinal purposes.",
        "Like Ephesus, Smyrna competed for the title of “first of Asia” as well as for the right to build a temple for Tiberius. Because of its history with Rome, Smyrna was awarded the right, and later was awarded it again by Hadrian. Not only was it a city beloved by Rome for its patriotism, but it was also beloved by the people for its beauty. The design of the city itself was lauded, but of particular beauty was the “crown of Smyrna,” a street that encircled the top of Mt. Pagos.",
        "Smyrna chose for itself the patron goddess Cybele, and depicted her on its currency as seated on a throne wearing a crown. Also lauded in Smyrna were its wines, its wealth, and its love of science and medicine.",
        "While Smyrna was a jewel among the cities of Rome, there is a stark contrast between the love of itself and its rejection of Christians. Perhaps not at first, but over time the Roman empire came to despise and persecute the church there. The Smyrna we find in the first and second centuries AD was one where Christians were less and less welcome. They were excluded from jobs they needed and they suffered economically for it. Eventually Christians in Smyrna were even imprisoned or put to death, as was the case with Polycarp (AD 155–165).",
      ],
    },
  ],
  pergamos: [
    {
      title: "Society of Pergamos",
      paragraphs: [
        "Pergamon came into its own after Alexander the Great died in 323 B.C. and his brief empire was carved among his generals. Lysimachus inherited the settlement and its treasure. Set on land and sea routes, and enriched by the Attalid kings who ruled from 282 to 133 B.C., the city prospered for centuries. In 133 B.C. it passed peacefully into Rome’s hands. From that hour Pergamon’s fortune rose and fell with the empire itself.",
        "The acropolis still stands in triumph above the wreck of the city, which spills down the steep slopes into the valley. On that same face the nearly intact theater hangs toward the sea — one of the steepest in the ancient world, and among the most spectacular. Ten thousand spectators once picked their way down eighty rows of seating, dizzy against the drop.",
        "Scholars identify the most dramatic ruin on the southern slope as the Temple of Zeus. Only its massive foundations remain. The altar that belonged to it, known now as the Great Altar of Pergamon, once occupied a sacred precinct on the acropolis: a monumental Π-shaped hall of columns, reached by a grand staircase. Around its whole exterior ran a marble frieze 113 meters long and 2.3 meters high — the gigantomachy, the war of the Olympian gods against the Giants. Myth said the giants could be defeated only with the help of a mortal. Zeus, with Athena at his side, called Herakles, whose arrows struck the decisive blow. Later art crowded the scene with other Greek heroes. In the nineteenth century German archaeologists carried the altar to Berlin. The Ottoman authorities, indifferent, gave them little trouble.",
        "North of Zeus and the altar stand the remains of the Temple of Athena, raised at the end of the fourth century or the opening of the third, and dedicated to the city’s patron goddess. Northwest of it stood the famous library. The figure of 200,000 papyrus and parchment volumes is probably too high — Seneca put some 40,000 in the greater library at Alexandria — yet Pergamon’s collection was still among the largest in the ancient world, and its name traveled the Mediterranean.",
        "Below, at a sacred spring, the Asklepion served the god Asklepius “Soter” — savior. Founded in the fourth century B.C. and modeled on the shrine at Epidaurus, it was at once a temple of healing and a kind of magical hospital. The ruins visible now belong chiefly to the second-century A.D. rebuild after an earthquake, but the first-century complex was essentially the same. In the Roman world medicine, magic, and the gods were rarely kept apart. Galen, the celebrated physician of second-century Pergamum, worked with this Asklepion. A physician need not bow to pagan religion: Luke, the Christian, is the counter-example (Colossians 4:14).",
        "Those who came for healing entered, were ritually cleansed, offered sacrifice, drank a potion, and descended into the “abaton” — the “inaccessible place,” thought to touch the underworld. There, in a room of snakes, they slept and waited for a dream from Asklepius. This was incubation, dream therapy. On waking they told the dream to a priest, who interpreted it and prescribed a cure. The healed left an offering in the shape of the body part restored. Myth even claimed that Asklepius could raise the dead.",
        "The serpent was his sign, and not his alone. Ancient stories said Alexander the Great and Caesar Augustus were conceived by a god in snake form. Dionysus, who had a temple on the acropolis, was likewise bound to a sacred snake. First-century B.C. coins of Pergamum show the “cista mystica,” the box borne in his processions, a serpent inside it as the god himself.",
        "Serapis, housed in the lower city, seldom wore serpent imagery, yet he too belonged to the underworld — an Egyptian-Hellenistic blending of Osiris, Hades, and Pluto. In the fourth century a Byzantine church rose on the Red Court over his temple. Its dedication is unknown. It may have honored Antipas, bishop of Pergamum, murdered for his faith in Christ in the late first century (Revelation 2:13). No other early source tells how or where he died. The later legends may be conjecture.",
        "Pergamum was also a seat of the imperial cult. Caesar Augustus made it “neokoros,” temple warden — the first city in all Asia Minor to build an imperial temple and host the worship of the emperor. Trajan’s temple still marks the acropolis; Augustus’s appears on the city’s coins. Trajan may have taken that earlier house for himself.",
        "When Revelation speaks of Pergamum as the place of “Satan’s throne” and “where Satan dwells,” the phrases have been read in several ways, all of them pagan (Revelation 2:13). Most often the throne is the Great Altar itself, throne-shaped, and bound to Zeus, who overthrew the Titans — a myth that shadows Satan’s bid to unseat God (Isaiah 14:12–14; Ezekiel 28:14–16; Revelation 12:7–9). Others point to emperor worship, and to the city as the imperial cult’s heart in Asia Minor. The Asklepion has been proposed, and the temple of Dionysus. But those gods had temples in many first-century cities. The “throne” and the dwelling may name the whole of Pergamum: a center of satanic worship, written in the density of its paganism.",
        "Some in the church were rebuked for the teaching of Balaam, for sacrifices to idols, and for immorality — all of it bound to that pagan world (Revelation 2:14). The verb usually rendered “to eat things sacrificed to idols” may mean “memorial meals for the dead,” a common Hellenistic and Roman rite. The “immorality” may be spiritual harlotry: the worship of false gods beside, or instead of, Jesus Christ. In either reading, some Christians at Pergamum had entered pagan ritual. The Nicolaitans taught such things. To those who overcome, the letter promises a new name written on a white stone — a lasting mark, set against the parchment for which the city was so famous, and which does not last (Revelation 2:17).",
        "In the third century A.D. an earthquake tore the city, and Gauls sacked what remained. After that, little of consequence was built. The Hellenistic and Roman ruins survived because the later city did not cover them.",
      ],
    },
  ],
};
