import type { ChurchId } from "@/content/churches";

export type ChurchCommendation = {
  commendation: string;
  rebuke: string;
};

export const chiasticCommendations: Partial<Record<ChurchId, string[]>> = {
  ephesus: [
    "To him who overcomes will have the opportunity to eat again of the tree of life. Adam and Eve were forbidden by God to participate in this diet when they sinned. This was their rejection on their failure, now a point of acceptance on the victory of the overcomer in Christ. This is a strong indication of the full restoration to the relationship of God with humanity, the final fulfillment of redemption in such a sense, where the human family finally has face to face communion with God which could not occur due to the disruption on point of sin.",
  ],
  smyrna: [
    "Pain and death are a potential and real encounter for the Christian who serves God in this life. Riches are not promised to the followers of the cross nor should the comfort of this world be made the pursuit of any Christian. This is the heritage of those of faith. Loyalty to Christ in the face of loss of material items, and or even death is the Christian’s greatest value on this side of life. The promise is very clear: they will not be touched in the second death and will be granted to wear the victor’s crown. The latter denotes a shift in identity before all heaven and God: no longer is the individual a sinner. On the contrary, like Jacob, they have overcome with God and are now recognized by God and His kingdom. To mark this they bear an emblem of their faith, a crown given by Christ.",
  ],
  thyatira: [
    "The idea of ‘learning’ here is twofold: acquisition as part of knowledge and practicing it, often intentionally or because of passive acquisition due to the environment an individual is a part of. The opening of this promise points to preservation in the purity of God’s knowledge, the culture and behaviour that is derived by being in His presence often through the study of His word, worship and daily communion with Him. Anything less risks being shaped, even in the smallest way by Satan and practising his deception.",
    "Ruling over the nations with an iron rod is a nod to authority, power, but also without compromise in regards to God’s law and governance. The idea emerges from kings that ruled in this way were strict, uncompromising and harsh to dissuade anyone from contesting that order. It is rather along those final lines rather than a harsh God that the idea of this scripture emerges. Authority is granted to those who have remained committed to God because they are seen the results of sin and recognize and understand that to not allow this curse to occur again strict enforcement of God’s law, and preservation and ethos of the culture of His kingdom must occur if sin must never happen again. Those who do so must rule with God in an uncompromising way over their lives and the space He grants them if the curse of sin is to remain absent from this environment. In a very real sense they have experienced this uncompromising rule in their lives, but have also encountered the compromising rounds of sin and seen its destructiveness in relation to the rule of God in their lives. They therefore are ready to not only accept His rule, as this would have been done before, but understand clearly from their experience the stakes of not allowing His uncompromised rule to occur again.",
  ],
  sardis: [
    "To soil the clothes is to become stained. Bible writers often spoke about being clothed in the righteousness of God. This came through a personal and intentional relationship with God which through faith the receiver accepted God’s righteousness on their behalf: that is the righteousness of Jesus. Thus they were clothed in the righteousness of God. The idea that one’s clothes is now soiled speaks to purity being now corrupted. This occurs in several ways and often follows a waterfall process: truth is corrupted leads to faith becoming compromised; this eventually leads to sin and a falling away from God.",
    "The victory that the sinner experiences is the victory derived only in Christ. Isaiah 1 indicates that although our sins are scarlet only through God can they be made white as snow. This purging and purifying effect that is alone possible through God’s intervention provides clarity to the victory over sin. The thief on the cross is one short life story that gives insight to this, where Christ promises that he would reign with Him in His kingdom.",
    "The result of this is that the sinner will be clothed in the righteousness of God. Part of the significance of this is that this promise directly ties into the ending of Revelation: sin rises no more. This results in the permanent clothing in the righteousness of God is guaranteed, in part, in the ending of Revelation.",
  ],
  philadelphia: [
    "The metaphor of the pillar reflects the idea of permanence as one remains as an integral part of the ‘structure of the temple’. In other words, the relationship between the sinner and God will never be dissolved due to them gaining victory through Jesus.",
    "Further, the issue of writing the name of God, the city, Jerusalem and being given the name of Jesus is not to be interpreted as a literal writing on the person. Rather it is a new identity and orientation of both God and the individual. From the perspective of God, this is an issue of ownership and adoption. From that of the individual this is an issue of belonging and absolute identification to a citizenry. Identity marks both sides: for God and the individual.",
    "This ties back to the first statement of the pillar. Both God and the individual are tied in an eternal relationship together. Both function in reinforcing ties of citizenship: governor and lord; citizen and servant.",
  ],
  laodicea: [
    "Those who have been victorious with God now have the right to exercise authority with Him. The idea of Christ overcoming in His humanity was one of total reliance on God through prayer, the Father’s power and study and submission to the word of God. In this sense those who are to overcome with God are expected to follow Christ’s approach to temptation and sin: absolute reliance on God, prayer and submission to Him through His study of His word.",
    "This permission to sit on the throne of Christ differs from the throne of the Father. While the throne of the Father can be interpreted as the ruling with absolute and shared sovereignty, the throne of Christ seems to depict something different: that those who have gained victory are permitted to exercise administrative capacities. This finds support from the emerging interpretation of Thyatira’s promise regarding those who rule with God. They do so from an administrative capacity that enables enforcement of His law and governance, so that it is not compromised.",
  ],
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
