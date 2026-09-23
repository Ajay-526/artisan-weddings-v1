export { studio } from "@/lib/studio";

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

export const ceremonies = [
  {
    slug: "roka",
    title: "Roka",
    tagline: "A promise begins",
    quote: "Two families meet. Two hearts already know.",
    description:
      "Roka is the quiet yes before the world is told. We photograph the first exchange of blessings, the shy glances, the weight of rings still new on the finger.",
    image: "/ceremonies/roka.webp",
    gallery: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=80",
    ],
    ideology:
      "Roka comes from the word rokna — to stop, to stay. It is the moment two families agree that the search is over. In North Indian tradition it is less a spectacle than a seal: a tilak on the forehead, sweets exchanged, a ring that is still learning the shape of a hand. The ideology is simple and old — marriage begins with consent of the house, not only of the heart.",
    tradition: [
      "The boy’s family visits the girl’s home (or the two houses meet on neutral ground) with sweets, dry fruit and a token of gold or a ring.",
      "A tilak or chandan mark is placed on the forehead; blessings travel from elders to the couple before any mandap is built.",
      "Gifts are modest on purpose. Roka is a promise, not a performance — the feast comes later.",
      "In many homes a small havan or a recitation of family names follows, so the ancestors are told first.",
    ],
    howWeShoot:
      "We keep the room small in the frame: hands, eyes, the plate of ladoos that nobody remembers eating. No wide spectacle. Roka should feel like a letter you can still fold.",
  },
  {
    slug: "haldi",
    title: "Haldi",
    tagline: "Laughter in yellow",
    quote: "Joy looks best when it stains your skin gold.",
    description:
      "Turmeric, water, cousins, chaos. Haldi is colour in motion — we stay close enough to catch the splash, far enough to honour the ritual.",
    image: `/ceremonies/haldi.webp`,
    gallery: Array.from(
      { length: 11 },
      (_, index) => `${s3ImagesUrl}/ceremonies/haldi/image${index + 1}.webp`,
    ),
    ideology:
      "Haldi is purification dressed as play. Turmeric is antiseptic, auspicious and solar — it is meant to brighten the skin and the spirit before the vows. The paste is applied by married women whose own marriages are considered fortunate, so blessing is transferred through touch. Underneath the yellow mess is a theology of protection: what is marked with haldi is harder for envy to touch.",
    tradition: [
      "A paste of turmeric, sandalwood, rose water and oil is prepared the same morning — never the night before, so the spice is still alive.",
      "The bride and groom are seated on low stools; sisters, cousins and aunts take turns, singing folk verses that tease as much as they bless.",
      "In many regions a little paste is sent to the other household so both skins carry the same colour on the same day.",
      "Clothes are meant to be ruined. White and yellow fabrics become the archive of the morning.",
    ],
    howWeShoot:
      "We shoot through splash and steam. Slow shutter for the falling paste, tight portraits when someone forgets the camera. Yellow is the story — we let it stain the edges of the frame.",
  },
  {
    slug: "mehendi",
    title: "Mehendi",
    tagline: "Stories in ink",
    quote: "Every vine on her hand is a secret she is about to keep.",
    description:
      "Hours of patience, songs in the courtyard, hidden initials in the design. Mehendi is slow art — we photograph the waiting as much as the finished pattern.",
    image: "/ceremonies/mehendi.webp",
    gallery: [
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    ],
    ideology:
      "Mehendi is patience made visible. The darker the stain, the stronger the love — that is the folklore, and families still watch the colour come up as if it were a weather report of the marriage. Designs hide the groom’s initials; finding them is his first task as a husband. The ideology is intimacy delayed: beauty that cannot be rushed, a night that asks the bride to sit still while the house sings around her.",
    tradition: [
      "Henna paste is ground from leaves, tea and lemon; applied in fine cones by artists who work for hours without looking at a clock.",
      "Songs — mehendi geet — narrate the leaving of a daughter and the arrival of a bride. They are half blessing, half farewell.",
      "The paste stays overnight. Sleeping with stained hands is part of the rite; washing too early is considered impatient with fate.",
      "Friends and sisters receive smaller patterns so the colour of the house matches the colour of the bride.",
    ],
    howWeShoot:
      "We photograph process, not only product: the artist’s breath, the cone’s tip, the first line on a bare palm. Later, when the paste cracks, we make still-lifes of hands that look like maps.",
  },
  {
    slug: "sangeet",
    title: "Sangeet",
    tagline: "Music. Madness. Family.",
    quote: "The night the family remembers how to dance like children.",
    description:
      "Stage lights, mismatched choreography, uncles who steal the show. Sangeet is cinema without a script — we film the pulse of the room.",
    image: "/images/DSC_1344 copy.webp",
    gallery: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    ],
    ideology:
      "Sangeet once meant women gathering to sing the bride into her new life. It has grown into a night of choreography and theatre, but the ideology has not changed: joy must be loud enough that sorrow cannot sit down. Two families rehearse as one troupe. The stage is an excuse; the real ritual is that strangers become cousins before the pheras.",
    tradition: [
      "Historically a women’s gathering with dholak and folk songs; today it often includes both families and a professional troupe.",
      "Performances tell the couple’s story — how they met, how they fight, how they make tea — so the wedding has a prologue.",
      "The dhol and the DJ share the floor. Elders still claim one folk song; the rest of the night belongs to whoever dares.",
      "Gifts of clothes and jewellery may be presented on stage, turning private giving into public blessing.",
    ],
    howWeShoot:
      "We light like a concert and edit like a memory. Spotlights, crowd frames, the uncle who knows only one step. Audio matters — we record the room, not only the playlist.",
  },
  {
    slug: "wedding",
    title: "Wedding",
    tagline: "And then, forever.",
    quote: "Seven steps. One breath held by two hundred people.",
    description:
      "The pheras, the vows, the moment the veil lifts. We work like guests who happen to see everything — never louder than the sacred fire.",
    image: `/ceremonies/wedding.webp`,
    gallery: Array.from(
      { length: 15 },
      (_, index) => `${s3ImagesUrl}/ceremonies/wedding/image${index + 1}.webp`,
    ),
    ideology:
      "The Hindu wedding is a yajna — a fire offering — in which two people become one household before gods and witnesses. The seven pheras are seven promises: food, strength, prosperity, family, progeny, health, friendship. Kanyadaan is not a transfer of property; in its oldest reading it is the parents’ last act of giving. The ideology is permanence made of ritual steps so the heart has something to walk on when feeling is not enough.",
    tradition: [
      "The mandap is a temporary temple: four pillars, a sacred fire, a sky that is allowed to watch.",
      "Jaimala or varmala — the exchange of garlands — is the first public yes, often playful, always photographed.",
      "Pheras around Agni; sindoor and mangalsutra mark the married state in many communities.",
      "Saptapadi, when practiced, is the legal and spiritual core: seven steps, seven vows, one path.",
    ],
    howWeShoot:
      "We do not choreograph the fire. Two bodies, one lens on the couple, one on the parents. We wait for the unscripted — a hand that shakes, a priest who smiles, smoke that writes in the air.",
  },
  {
    slug: "reception",
    title: "Reception",
    tagline: "Celebrations continue",
    quote: "The first evening of a very long party.",
    description:
      "Entrance, first dance, late-night portraits when the lights go warm. Reception is where formality loosens and the real smiles arrive.",
    image: "/ceremonies/reception.webp",
    gallery: [
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522673607200-16421f1f03c6?auto=format&fit=crop&w=1200&q=80",
    ],
    ideology:
      "The reception is the couple’s first act as hosts. What was sacred in the morning becomes social in the evening — the community is invited to eat in the new household’s name. In many Indian cities it is also the portrait hour: lehengas at their heaviest, sherwanis at their sharpest, a stage that says we have arrived. The ideology is hospitality. Marriage is not complete until it has fed the people who walked it there.",
    tradition: [
      "A grand entrance — sometimes with fire, dhol or a reveal — announces the married pair to guests who missed the pheras.",
      "A receiving line or stage greetings replace the intimacy of the mandap with the width of a banquet.",
      "Cake, first dance and speeches are newer layers; the older layer is simply sitting together and being seen.",
      "Late portraits after guests thin out are, for us, the true reception pictures — clothes still ceremonial, faces finally unguarded.",
    ],
    howWeShoot:
      "Wide for the entrance, close for the toast, then we steal the couple into a quieter corridor. Reception light is warm on purpose. We let it gold the edges of the night.",
  },
];

export const loveStories = [
  {
    slug: "rachana-sai-krishna",
    names: "Rachana & Sai Krishna",
    city: "Hyderabad",
    date: "December 2024",
    quote: "They asked us to photograph a wedding. We found a language.",
    image: `${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image13.webp`,
    collage: Array.from(
      { length: 17 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image${index + 1}.webp`,
    ),
    story:
      "A courtyard in old Hyderabad, a December that forgot to be cold, and two families who cook the same biryani with different pride. Aarav and Priya wanted less production, more porch-light. We followed them from roka sweets to a reception that ended on the terrace.",
    testimonial:
      "Artisan Weddings did not pose us into a catalogue. They waited until we forgot they were there — and that is when we look most like ourselves. The album feels like the week we actually lived.",
  },
  {
    slug: "neeshal-sindhu",
    names: "Neeshal & Sindhu",
    city: "Bangalore",
    date: "February 2025",
    quote: "A sunset that waited for them.",
    image: `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image5.webp`,
    collage: Array.from(
      { length: 26 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image${index + 1}.webp`,
    ),
    story:
      "They chose a farmhouse on the city’s edge so the sky could do half the work. Ananya’s mehendi ran past midnight; Siddharth’s brothers wrote a sangeet that was mostly roasting. The pheras happened under rain that arrived exactly on time.",
    testimonial:
      "Every time we open the film we hear the rain on the mandap again. That is not documentation. That is time travel. Thank you for treating our chaos as sacred.",
  },
  {
    slug: "sai-srinivas-sushma",
    names: "Sai Srinivas & Sushma",
    city: "Goa",
    date: "November 2024",
    quote: "Salt on their skin. Forever in their eyes.",
    image: `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image13.webp`,
    collage: Array.from(
      { length: 17 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image${index + 1}.webp`,
    ),
    story:
      "A Portuguese villa, a beach that kept changing colour, and a guest list small enough to know everyone’s drink. Meera walked barefoot to the mandap. Rohit cried before she did. We shot until the tide erased the footprints.",
    testimonial:
      "We still send friends the portrait from the last light. Salt in our hair, no posing left in us. That picture is why we hired them — even before it existed.",
  },
  {
    slug: "akarshith-sreeja",
    names: "Akarshith & Sreeja",
    city: "Udaipur",
    date: "January 2025",
    quote: "A palace, a lake, and two people who forgot the camera was there.",
    image: `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image5.webp`,
    collage: Array.from(
      { length: 22 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image${index + 1}.webp`,
    ),
    story:
      "Marble, lake wind, and a baraat that took the long way around the city. Nisha’s lehenga held the whole of evening. We used the palace as a corridor, not a set — corners, windows, the quiet after fireworks.",
    testimonial:
      "They understood that a palace can bully a photograph. They made us larger than the architecture. Our parents cried at the film. That is the only review that matters.",
  },
  {
    slug: "vedanth-tejashwini",
    names: "Vedanth Reddy & Tejashwini",
    city: "Jaipur",
    date: "March 2025",
    quote: "Pink city. Quiet vows.",
    image: `${s3ImagesUrl}/love+stories/tejashwini%2Bvedanthreddy/image3.webp`,
    collage: Array.from(
      { length: 21 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/tejashwini%2Bvedanthreddy/image${index + 1}.webp`,
    ),
    story:
      "Haveli courtyards and a haldi so yellow the walls looked new. Isha wanted the city in the pictures without the city taking over. We walked them through lanes at dawn, then returned them to the ritual.",
    testimonial:
      "The dawn walk is our favourite sequence. Jaipur looks like it was built for us that morning. We did not know we could look that calm on our own wedding day.",
  },
  {
    slug: "vrushank-mounika",
    names: "Vrushank & Mounika",
    city: "Mumbai",
    date: "April 2025",
    quote: "The city paused. They did not.",
    image: `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image3.webp`,
    collage: Array.from(
      { length: 34 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image${index + 1}.webp`,
    ),
    story:
      "A sea-facing club, a baraat on a rain-slick road, and a reception that ran until the staff started stacking chairs. Mumbai gave us neon and monsoon. They gave us a stillness in the middle of it.",
    testimonial:
      "We live in a loud city. The photographs are quiet. That contrast is the gift. Friends who were at the wedding say the pictures feel more true than their own memory.",
  },
];

export const testimonials = [
  {
    quote:
      "Artisan Weddings didn’t just take photos, they captured our emotions. Every time we look at our album, we relive the magic.",
    names: "Shivani & Karthik",
    city: "Chennai",
  },
  {
    quote:
      "They vanished into the celebration and came back with a film that felt like our memory, not a performance of it.",
    names: "Meher & Kabir",
    city: "Delhi",
  },
  {
    quote:
      "From Haldi chaos to the last song at reception — they treated every hour as if it were the only one that mattered.",
    names: "Anjali & Dev",
    city: "Pune",
  },
  {
    quote:
      "We hired photographers. We received storytellers. The difference lives in every frame.",
    names: "Riya & Aditya",
    city: "Ahmedabad",
  },
];

export const films = [
  {
    title: "A Journey of Love",
    couple: "Artisan Weddings | Wedding Film",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "Ew2yk8SEzIM",
  },
  {
    title: "Monsoon Vows",
    couple: "Aarav & Priya | Hyderabad",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "s6zR2T9vn2c",
  },
  {
    title: "The Palace Evening",
    couple: "Karan & Nisha | Udaipur",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "C0DPdy98e4c",
  },
  {
    title: "The Palace Evening",
    couple: "Karan & Nisha | Udaipur",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "C0DPdy98e4c",
  },
];
