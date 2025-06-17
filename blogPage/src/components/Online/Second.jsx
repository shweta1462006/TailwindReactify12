const features = [
  { name: 'Cotton', description: 'Cotton fabric is a soft, breathable, and durable natural fiber derived from the cotton plant' },
  { name: 'Rayon', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Velvet', description: 'Velvet is a type of woven fabric characterized by its dense, short pile of evenly.' },
  { name: 'Silk', description: 'Silk fabric is a natural protein fiber derived from silkworm cocoons,' },
  { name: 'Wool', description: 'a natural fiber textile obtained from the hair of various animals, most commonly sheep' },
  { name: 'Denim', description: 'Denim is a durable cotton fabric woven with a twill pattern.' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore Our Style Stories</h2>
          <p className="mt-4 text-gray-500">
A dress is a one-piece garment for women or girls, typically consisting of a bodice (top) and a skirt. It can be made from various fabrics and come in diverse styles, lengths, and colors, ranging from casual to formal wear. Dresses are a versatile staple in many wardrobes, offering options for both everyday wear and special occasions.           </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src="https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw692fe375/images/Jan%202024/blogs%201.jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw34d4e8bc/and-about/about-the-brand-new.svg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw0bd9f703/images/Jan%202024/blogs%203%20(1).jpg"
            className="rounded-lg bg-gray-100"
          />
          <img
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dwb4c813b3/and-about/about-us-page_gallery2.jpg"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
