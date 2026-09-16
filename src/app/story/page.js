export const metadata = {
  title: "Our Story",
  description:
    "Why Artisan Weddings photographs Indian weddings as they are felt — quiet work, true frames, films that remember.",
  alternates: { canonical: "/story" },
};

export default function StoryPage() {
  return (
    <article className="lg:pt-10 pt-22">
      <header className="relative h-[46vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="section-label">OUR STORY</p>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl">
            Why we lift the camera
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-6 py-16 text-[#3f342c] leading-8">
        <p className="script text-2xl text-[#9a6b2f]">
          “A wedding is not an event we cover. It is a day we are invited to
          remember for you.”
        </p>
        <p className="mt-8">
          Artisan Weddings began with a simple dissatisfaction: albums full of
          poses and empty of feeling. We wanted the glance before the pheras.
          The grandmother wiping her eyes in the third row. The friend who
          danced badly and meant it.
        </p>
        <p className="mt-6">
          Today we travel across India — palaces in Udaipur, courtyards in
          Hyderabad, beaches in Goa — working as a small team of photographers
          and filmmakers. We stay quiet. We stay close. We treat every ritual as
          if it has never happened before, because for you, it hasn’t.
        </p>
        <p className="mt-6">
          Our promise is not more pictures. It is truer ones.
        </p>
      </div>
    </article>
  );
}
