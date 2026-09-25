export { studio } from "@/lib/studio";

const s3ImagesUrl = process.env.NEXT_PUBLIC_S3_IMAGES_URL;

export const ceremonies = [
  {
    slug: "engagement",
    title: "Engagement",
    tagline: "The beginning of something beautiful",
    quote: "The smiles are different when it finally becomes official.",
    description:
      "The rings, the blessings, the nervous smiles and everyone coming together for the first time. We capture the little moments that make an engagement feel like the beginning of your wedding story.",
    image: `${s3ImagesUrl}/ceremonies/engagement/image6.webp`,
    gallery: Array.from(
      { length: 21 },
      (_, index) =>
        `${s3ImagesUrl}/ceremonies/engagement/image${index + 1}.webp`,
    ),
    ideology:
      "An engagement is more than exchanging rings. It is the first time the excitement of the wedding becomes real for everyone around you. Families meet, blessings are shared, photographs are taken, and somewhere in between all of it, the couple gets a few quiet moments together.",
    tradition: [
      "Families come together to celebrate the couple and share their blessings.",
      "Rings are exchanged, followed by smiles, hugs and plenty of photographs.",
      "Elders bless the couple and friends and family join in the celebrations.",
      "The day is often filled with small conversations and moments that become special memories later.",
    ],
    howWeShoot:
      "We focus on the moments between the formal photographs — the way you look at each other, your parents' reactions, the laughter between friends and those little moments that happen naturally when everyone is together.",
  },

  {
    slug: "haldi",
    title: "Haldi",
    tagline: "A little yellow. A lot of happiness.",
    quote: "The best Haldi photographs are the ones where nobody stays clean.",
    description:
      "Haldi is laughter, colour, family and complete chaos in the best possible way. We get close to the action and capture every splash, smile, hug and mischievous moment along the way.",
    image: `/ceremonies/haldi.webp`,
    gallery: Array.from(
      { length: 22 },
      (_, index) => `${s3ImagesUrl}/ceremonies/haldi/image${index + 1}.webp`,
    ),
    ideology:
      "Haldi is one of those wedding moments where everyone lets go. Parents, cousins, siblings and friends all become part of the celebration. The ceremony may be simple, but the laughter and emotions around it make every wedding completely different.",
    tradition: [
      "Family members apply haldi to the bride and groom as a gesture of love and blessings.",
      "Parents, siblings and cousins usually make sure the ceremony gets a little more fun than planned.",
      "Yellow outfits, flowers and turmeric naturally bring plenty of colour into the photographs.",
      "What starts as a simple ritual often turns into one of the most memorable mornings of the wedding.",
    ],
    howWeShoot:
      "We stay close to the action without getting in the way. The hands covered in haldi, the unexpected splash, the laughter after someone gets completely covered — these are the moments we look for.",
  },

  {
    slug: "mehendi",
    title: "Mehendi",
    tagline: "A little time before everything begins",
    quote: "She sits still. Everyone else keeps the story moving.",
    description:
      "Mehendi is a slower part of the wedding — filled with conversations, music, laughter and anticipation. We photograph the details, but more importantly, the people and moments around them.",
    image: `/ceremonies/mehendi.webp`,
    gallery: Array.from(
      { length: 10 },
      (_, index) => `${s3ImagesUrl}/ceremonies/mehendi/image${index + 1}.webp`,
    ),
    ideology:
      "There is something special about the hours before the wedding celebrations really begin. The bride is getting her mehendi done, friends are around her, family members are talking, and everyone is slowly getting ready for what is coming next.",
    tradition: [
      "The bride spends hours getting her mehendi designed and applied.",
      "Friends and family gather around, making the long process feel like a celebration.",
      "Songs, conversations, teasing and laughter become part of the evening.",
      "The finished mehendi becomes one of the beautiful details of the wedding story.",
    ],
    howWeShoot:
      "We photograph more than the finished mehendi. We capture the conversations around her, the hands being decorated, the laughter with friends and those quiet moments when she gets a chance to take it all in.",
  },

  {
    slug: "sangeet",
    title: "Sangeet",
    tagline: "Music. Dance. And everyone joining in.",
    quote: "There is always one performance nobody was ready for.",
    description:
      "Sangeet is where the families let loose. Performances, dancing, laughter and a little friendly competition make it one of the most energetic parts of the wedding.",
    image: "/images/DSC_1344 copy.webp",
    gallery: Array.from(
      { length: 16 },
      (_, index) => `${s3ImagesUrl}/ceremonies/sangeet/image${index + 1}.webp`,
    ),
    ideology:
      "The best part of a Sangeet is rarely just what happens on stage. It is the family rehearsing together, friends cheering from the crowd, parents surprising everyone with a performance and people dancing long after their planned performance is over.",
    tradition: [
      "Families and friends come together for performances prepared especially for the couple.",
      "Songs and dances often tell parts of the couple's story.",
      "Parents, siblings, cousins and friends all get their moment on the dance floor.",
      "The planned performances usually end with everyone dancing together.",
    ],
    howWeShoot:
      "We photograph the performance, but we also watch the crowd. The reactions, the cheering, the parents dancing in their seats and the friends losing themselves on the dance floor often become our favourite photographs of the night.",
  },

  {
    slug: "wedding",
    title: "Wedding",
    tagline: "The day everything becomes real",
    quote: "A thousand emotions, one moment you will remember forever.",
    description:
      "The pheras, the varmala, the blessings, the tears and the smiles. We document the wedding as it naturally unfolds, preserving both the important rituals and the emotions around them.",
    image: `/ceremonies/wedding.webp`,
    gallery: Array.from(
      { length: 22 },
      (_, index) => `${s3ImagesUrl}/ceremonies/wedding/image${index + 1}.webp`,
    ),
    ideology:
      "The wedding day brings everything together. Families, traditions, emotions and years of memories all meet in one place. There are moments everyone is waiting for, and countless smaller moments happening around them. We believe both deserve to be remembered.",
    tradition: [
      "The couple exchanges garlands before the wedding rituals begin.",
      "Family and friends gather around the mandap to witness the ceremony.",
      "The pheras and other rituals mark the beginning of their life together.",
      "Blessings from parents, grandparents and loved ones become some of the most emotional moments of the day.",
    ],
    howWeShoot:
      "We never want the camera to become another part of the ceremony. We stay attentive to the rituals while looking for the reactions around them — a parent's tears, a nervous smile, a hand being held and the quiet moments between the bigger ones.",
  },

  {
    slug: "reception",
    title: "Reception",
    tagline: "One more night to celebrate",
    quote: "The wedding is over. The celebrations are just getting started.",
    description:
      "The reception brings everyone together once again. There are greetings, photographs, laughter, dinner, music and finally a little time for the couple to enjoy the evening.",
    image: `/ceremonies/reception.webp`,
    gallery: Array.from(
      { length: 14 },
      (_, index) =>
        `${s3ImagesUrl}/ceremonies/reception/image${index + 1}.webp`,
    ),
    ideology:
      "After the emotions and rituals of the wedding day, the reception feels different. The couple can finally breathe, meet their guests, enjoy the celebrations and spend time with the people who came to celebrate with them.",
    tradition: [
      "The couple makes their entrance and meets friends and family.",
      "Guests gather for blessings, photographs and conversations with the newly married couple.",
      "Speeches, performances, music and dinner keep the celebrations going.",
      "As the evening gets quieter, the couple finally gets a few moments to themselves.",
    ],
    howWeShoot:
      "We capture the energy of the reception as well as the quieter moments. The entrance, family photographs, friends laughing together and those few minutes when the couple gets away from the crowd — all of them become part of the story.",
  },
];

export const loveStories = [
  {
    slug: "rachana-sai-krishna",
    names: "Rachana & Sai Krishna",
    // city: "Hyderabad",
    date: "December 2024",
    quote:
      "Somewhere between the rituals, they forgot we were photographing them.",
    image: `${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image13.webp`,
    collage: Array.from(
      { length: 17 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/rachana%2Bsaikrishna/image${index + 1}.webp`,
    ),
    story:
      "It was one of those weddings where something was always happening. Family arriving, cousins making plans, little moments between the rituals, and plenty of laughter in between. Rachana and Sai Krishna were happiest when they were simply around their people. We kept the cameras close and let the wedding unfold naturally. We captured the nervous smiles, the quiet glances, the hugs, and everything that happened when nobody was looking.",
    testimonial:
      "We never felt like we were constantly being asked to pose. They gave us space to actually enjoy our wedding and somehow captured all the little moments we didn't even notice. Looking through the photos feels like going back to those days.",
  },
  {
    slug: "nishanth-sindhu",
    names: "Nishanth & Sindhu",
    // city: "Bangalore",
    date: "February 2025",
    quote:
      "A little chaos, a lot of laughter, and two people completely in love.",
    image: `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image5.webp`,
    collage: Array.from(
      { length: 26 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/sindhu%2Bneeshal/image${index + 1}.webp`,
    ),
    story:
      "Sindhu's mehendi had everyone around her, Nishanth's friends were busy making sure the wedding stayed entertaining, and the families brought their own kind of energy to every ritual. There was laughter everywhere, a few emotional moments that nobody was prepared for, and plenty of dancing. We photographed the wedding the way it actually felt — warm, loud, emotional, and full of people they love.",
    testimonial:
      "The best part was that we could actually enjoy our wedding. The photographers were around all the time but never made us feel conscious. We got so many photos of our families and friends that we didn't even know were taken. Those are now some of our favourites.",
  },
  {
    slug: "sai-srinivas-sushma",
    names: "Sai Srinivas & Sushma",
    // city: "Goa",
    date: "November 2024",
    quote: "The kind of wedding where everyone feels like family.",
    image: `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image13.webp`,
    collage: Array.from(
      { length: 25 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/saisrinivas%2Bsushma/image${index + 1}.webp`,
    ),
    story:
      "Sushma and Sai Srinivas wanted their wedding to feel easy and intimate. There were happy tears from the parents, endless conversations with friends, plenty of laughter, and those quiet moments where the two of them finally got a second to themselves. We focused on all of it — not just the big wedding moments, but the people and emotions that made the day theirs.",
    testimonial:
      "We wanted photographs that felt like us, not something overly posed. Artisan Weddings understood that from the beginning. Some of our favourite photographs are the completely unplanned ones. They captured the feeling of the wedding beautifully.",
  },
  {
    slug: "akarshith-sreeja",
    names: "Akarshith & Sreeja",
    // city: "Udaipur",
    date: "January 2025",
    quote: "A beautiful wedding, made even better by the people around them.",
    image: `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image5.webp`,
    collage: Array.from(
      { length: 22 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/sreeja%2Bakarshith/image${index + 1}.webp`,
    ),
    story:
      "There were beautiful details everywhere, but what stood out most was the people. Sreeja getting ready with her family, Akarshith laughing with his friends, parents trying to hold back their tears, and cousins making sure nobody stayed serious for too long. We wanted the photographs to remember all of those moments, not just how the wedding looked.",
    testimonial:
      "When we first saw the photos, we kept saying, 'We didn't even know they captured this.' That is exactly what we wanted. The big moments are there, but so are all the small ones we would have otherwise forgotten.",
  },
  {
    slug: "vedanth-tejashwini",
    names: "Vedanth Reddy & Tejashwini",
    // city: "Jaipur",
    date: "March 2025",
    quote: "Two families, a hundred little moments, one beautiful beginning.",
    image: `${s3ImagesUrl}/love+stories/tejashwini%2Bvedanthreddy/image3.webp`,
    collage: Array.from(
      { length: 21 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/tejashwini%2Bvedanthreddy/image${index + 1}.webp`,
    ),
    story:
      "From the haldi laughter to the quiet moments before the wedding, Tejashwini and Vedanth's celebration was full of the things that make Indian weddings special. Friends dancing without caring who was watching, parents getting emotional during the rituals, and the two of them finding little moments together in between everything. We simply stayed close and documented it as it happened.",
    testimonial:
      "Our favourite thing about the photographs is how natural everything feels. We can remember exactly what was happening in so many of them. Even the expressions of our parents and friends were captured so well. It feels very personal.",
  },
  {
    slug: "vrushank-mounika",
    names: "Vrushank & Mounika",
    // city: "Mumbai",
    date: "April 2025",
    quote:
      "A wedding full of people, laughter, dancing and a little bit of happy chaos.",
    image: `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image3.webp`,
    collage: Array.from(
      { length: 34 },
      (_, index) =>
        `${s3ImagesUrl}/love+stories/vrushank%2Bmounika/image${index + 1}.webp`,
    ),
    story:
      "Vrushank and Mounika's wedding had everything we love about Indian celebrations: a loud baraat, friends who never stopped dancing, emotional parents, endless family photographs, and a couple trying to take it all in. Somewhere between the rituals and the celebrations, there were also quiet moments that belonged only to them. Those moments became some of our favourite photographs from the wedding.",
    testimonial:
      "We honestly don't remember half the things that happened that day, but the photographs brought them all back. Our friends, our parents, the random laughs, the crazy dance floor — everything is there. It feels like someone captured the whole wedding, not just us posing for pictures.",
  },
];

export const testimonials = [
  {
    quote:
      "We never felt like we were constantly posing. They gave us the freedom to enjoy our wedding and somehow captured all the little moments we missed. Looking through the photos brings everything back.",
    names: "Rachana & Sai Krishna",
    // city: "Chennai",
  },

  {
    quote:
      "What we loved most was how natural everything felt. The photographs captured our families, our friends and all the emotions of the day without making anything feel staged. We can actually feel our wedding when we look at them.",
    names: "Sai Srinivas & Sushma",
    // city: "Delhi",
  },

  {
    quote:
      "Our wedding was full of chaos, dancing, laughter and emotions. They were there for all of it without ever getting in the way. Some of our favourite photographs are moments we didn't even know were being captured.",
    names: "Sindhu & Nishanth",
    // city: "Pune",
  },

  {
    quote:
      "We were worried about looking awkward in front of the camera, but they made everything so easy. The photographs feel like us — our families, our friends, the laughter and all the little moments in between.",
    names: "Vedhanth Reddy & Tejashwini",
    // city: "Ahmedabad",
  },

  {
    quote:
      "There are so many moments from the wedding that we completely forgot about until we saw the photographs. Our parents, friends, all the random laughter and even the quiet moments between us — they captured everything so beautifully.",
    names: "Vrushank & Mounika",
    // city: "Ahmedabad",
  },
];

export const films = [
  {
    title: "A Journey of Love",
    couple: "Artisan Weddings | Wedding Teaser",
    image: "https://i.ytimg.com/vi/Ew2yk8SEzIM/maxresdefault.jpg",
    youtubeId: "Ew2yk8SEzIM",
  },
  {
    title: "Wedding Film",
    couple: "Krishna Sai & Harshitha | Vizag",
    image: "https://i.ytimg.com/vi/v0F5VXSr47c/maxresdefault.jpg",
    youtubeId: "v0F5VXSr47c",
  },
  {
    title: "Best Cinematic Pre-Wedding",
    couple: "Krishna Sai & Harshitha | Vizag",
    image: "https://i.ytimg.com/vi/2HoHlbBa0n4/maxresdefault.jpg",
    youtubeId: "2HoHlbBa0n4",
  },
  {
    title: "Sangeet Promo",
    couple: "Krishna Sai & Harshitha",
    image: "https://i.ytimg.com/vi/HsHlL-PTOig/maxresdefault.jpg",
    youtubeId: "HsHlL-PTOig",
  },
  {
    title: "The Most Cinematic Pre-Wedding",
    couple: "Swetha & Chakradher",
    image: "https://i.ytimg.com/vi/uYVl8MiYcL8/maxresdefault.jpg",
    youtubeId: "uYVl8MiYcL8",
  },
  {
    title: "Engagement Teaser",
    couple: "Swetha & Chekri",
    image: "https://i.ytimg.com/vi/ConZqaDrPxY/maxresdefault.jpg",
    youtubeId: "ConZqaDrPxY",
  },
  {
    title: "Two Strangers, One Encounter",
    couple: "Sindhu & Nishanth | Wedding Film",
    image: "https://i.ytimg.com/vi/8RT_2LpuhlA/maxresdefault.jpg",
    youtubeId: "8RT_2LpuhlA",
  },
  {
    title: "Engagement Teaser",
    couple: "Sindhu & Nishanth",
    image: "https://i.ytimg.com/vi/ZyYg5jpbe80/maxresdefault.jpg",
    youtubeId: "ZyYg5jpbe80",
  },
  // {
  //   title: "Wedding Film",
  //   couple: "Sai Krishna & Rachana",
  //   image: "https://i.ytimg.com/vi/WsU_dqA6z_o/maxresdefault.jpg",
  //   youtubeId: "WsU_dqA6z_o",
  // },
  {
    title: "The Most Cinematic Pre-Wedding",
    couple: "Rachana & Sai Krishna",
    image: "https://i.ytimg.com/vi/Wf6qp74434I/maxresdefault.jpg",
    youtubeId: "Wf6qp74434I",
  },
  // {
  //   title: "Engagement Teaser",
  //   couple: "Rachana & Sai Krishna",
  //   image: "https://i.ytimg.com/vi/TmnJ3DKYCJ0/maxresdefault.jpg",
  //   youtubeId: "TmnJ3DKYCJ0",
  // },
  {
    title: "Wedding Film",
    couple: "Sreeja & Akarshith",
    image: "https://i.ytimg.com/vi/S_lgu-bZaAo/maxresdefault.jpg",
    youtubeId: "S_lgu-bZaAo",
  },
  {
    title: "Pre-Wedding Teaser 4K",
    couple: "Sreeja & Akarshith",
    image: "https://i.ytimg.com/vi/q8DDMHpx4Ak/maxresdefault.jpg",
    youtubeId: "q8DDMHpx4Ak",
  },
  {
    title: "A Thousand Memories",
    couple: "Sai Srinivas & Sushama | Wedding Film",
    image: "https://i.ytimg.com/vi/u3wjZsXlUqY/maxresdefault.jpg",
    youtubeId: "u3wjZsXlUqY",
  },
  {
    title: "Pre-Wedding",
    couple: "Sai Sreenivas & Sushama",
    image: "https://i.ytimg.com/vi/ogJ5e5F1p6I/maxresdefault.jpg",
    youtubeId: "ogJ5e5F1p6I",
  },
  {
    title: "A Beautiful Love Story Begins Here",
    couple: "Sai Sreenivas & Sushama | Engagement",
    image: "https://i.ytimg.com/vi/u36NLiK5O40/maxresdefault.jpg",
    youtubeId: "u36NLiK5O40",
  },
  // {
  //   title: "Touched by Grace",
  //   couple: "Rohith & Amani | Pre-Wedding",
  //   image: "https://i.ytimg.com/vi/L9Eu1cJdAP8/maxresdefault.jpg",
  //   youtubeId: "L9Eu1cJdAP8",
  // },
  {
    title: "Pre-Wedding Teaser",
    couple: "Tejaswini & Vedhana",
    image: "https://i.ytimg.com/vi/bSWT53XwrJk/maxresdefault.jpg",
    youtubeId: "bSWT53XwrJk",
  },
  {
    title: "One Love, One Journey, One Forever",
    couple: "Kamalajali & Nikhil | Engagement",
    image: "https://i.ytimg.com/vi/m5VwA5jwLIU/maxresdefault.jpg",
    youtubeId: "m5VwA5jwLIU",
  },
];
