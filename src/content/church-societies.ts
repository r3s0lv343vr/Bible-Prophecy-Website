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
};
