import type { ChurchId } from "@/content/churches";

export type ChurchCommendation = {
  commendation: string;
  rebuke: string;
};

export const churchCommendations: Record<ChurchId, ChurchCommendation> = {
  ephesus: {
    commendation:
      "To him that overcometh will I give to eat of the tree of life, which is in the midst of the paradise of God.",
    rebuke:
      "Nevertheless I have somewhat against thee, because thou hast left thy first love. Remember therefore from whence thou art fallen, and repent, and do the first works; or else I will come unto thee quickly, and will remove thy candlestick out of his place, except thou repent.",
  },
  smyrna: {
    commendation:
      "Do not be afraid of what you are about to suffer. I tell you, the devil will put some of you in prison to test you, and you will suffer persecution for ten days. Be faithful, even to the point of death, and I will give you life as your victor’s crown. Whoever has ears, let them hear what the Spirit says to the churches. The one who is victorious will not be hurt at all by the second death.",
    rebuke: "",
  },
  pergamos: {
    commendation:
      "Whoever has ears, let them hear what the Spirit says to the churches. To the one who is victorious, I will give some of the hidden manna. I will also give that person a white stone with a new name written on it, known only to the one who receives it.",
    rebuke:
      "There are some among you who hold to the teaching of Balaam, who taught Balak to entice the Israelites to sin so that they ate food sacrificed to idols and committed sexual immorality. Likewise, you also have those who hold to the teaching of the Nicolaitans. Repent therefore! Otherwise, I will soon come to you and will fight against them with the sword of my mouth.",
  },
  thyatira: {
    commendation:
      "Now I say to the rest of you in Thyatira, to you who do not hold to her teaching and have not learned Satan’s so-called deep secrets, ‘I will not impose any other burden on you, except to hold on to what you have until I come.’ To the one who is victorious and does my will to the end, I will give authority over the nations— that one ‘will rule them with an iron scepter and will dash them to pieces like pottery’ — just as I have received authority from my Father. I will also give that one the morning star. Whoever has ears, let them hear what the Spirit says to the churches.",
    rebuke:
      "I have given her time to repent of her immorality, but she is unwilling. So I will cast her on a bed of suffering, and I will make those who commit adultery with her suffer intensely, unless they repent of her ways. I will strike her children dead. Then all the churches will know that I am he who searches hearts and minds, and I will repay each of you according to your deeds.",
  },
  sardis: {
    commendation:
      "Yet you have a few people in Sardis who have not soiled their clothes. They will walk with me, dressed in white, for they are worthy. The one who is victorious will, like them, be dressed in white. I will never blot out the name of that person from the book of life, but will acknowledge that name before my Father and his angels. Whoever has ears, let them hear what the Spirit says to the churches.",
    rebuke:
      "Remember, therefore, what you have received and heard; hold it fast, and repent. But if you do not wake up, I will come like a thief, and you will not know at what time I will come to you.",
  },
  philadelphia: {
    commendation:
      "I am coming soon. Hold on to what you have, so that no one will take your crown. The one who is victorious I will make a pillar in the temple of my God. Never again will they leave it. I will write on them the name of my God and the name of the city of my God, the new Jerusalem, which is coming down out of heaven from my God; and I will also write on them my new name. Whoever has ears, let them hear what the Spirit says to the churches.",
    rebuke: "",
  },
  laodicea: {
    commendation:
      "To the one who is victorious, I will give the right to sit with me on my throne, just as I was victorious and sat down with my Father on his throne. Whoever has ears, let them hear what the Spirit says to the churches.",
    rebuke:
      "I know your deeds, that you are neither cold nor hot. I wish you were either one or the other! So, because you are lukewarm—neither hot nor cold—I am about to spit you out of my mouth. You say, ‘I am rich; I have acquired wealth and do not need a thing.’ But you do not realize that you are wretched, pitiful, poor, blind and naked. I counsel you to buy from me gold refined in the fire, so you can become rich; and white clothes to wear, so you can cover your shameful nakedness; and salve to put on your eyes, so you can see.",
  },
};
