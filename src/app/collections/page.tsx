import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Collections | Billberry Blue',
  description: 'Explore our Project Categories.',
};

const categories = [
  { slug: 'living-rooms', title: 'Living Rooms', image: '/assets/images/living-1.jpg' },
  { slug: 'bedrooms', title: 'Bedrooms', image: '/assets/images/bedroom-1.jpg' },
  { slug: 'outdoor', title: 'Outdoor Furniture', image: '/assets/images/outdoor-1.jpg' },
  { slug: 'office', title: 'Office Furniture', image: '/assets/images/office-1.jpg' },
  { slug: 'wardrobes', title: 'Wardrobes & Storage', image: '/assets/images/wardrobe-1.jpg' },
  { slug: 'home-office', title: 'Home Office & Study', image: '/assets/images/home-office-1.jpg' },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4">Our Collections</h1>
          <p className="text-xl text-gray-600">Discover our carefully curated furniture collections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-semibold">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}