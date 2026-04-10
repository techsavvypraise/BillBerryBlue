 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CategoryPageParams } from '@/types/interfaces';

// Static data for each collection (you can move this to a separate file later)
const collectionData = {
  'living-rooms': {
    title: 'Living Rooms',
    description: 'Inviting spaces engineered for connection, comfort, and effortless everyday living.',
    images: [
      '/assets/images/bill8.jpg',
      '/assets/images/bill5.jpg',
      '/assets/images/bill7.jpg',
      '/assets/images/bill4.jpg',
    ],
  },
  'bedrooms': {
    title: 'Bedrooms',
    description: 'Serene sanctuaries designed for deep rest, personal expression, and lasting tranquility.',
    images: [
      '/assets/images/bill1.jpg',
      '/assets/images/bill2.jpg',
      '/assets/images/bill6.jpg',
    ],
  },
  'outdoor': {
    title: 'Outdoor Furniture',
    description: 'Durable, elegant outdoor pieces built to extend luxury living beyond the indoors.',
    images: [
      '/assets/images/bill2.jpg',
      '/assets/images/bill9.jpg',
      '/assets/images/bill1.jpg',
    ],
  },
  'office': {
    title: 'Office Furniture',
    description: 'Productive, prestigious workspaces that balance focus, comfort, and professional presence.',
    images: [
      '/assets/images/bill9.jpg',
      '/assets/images/bill6.jpg',
    ],
  },
  'wardrobes': {
    title: 'Wardrobes & Storage',
    description: 'Intelligent storage solutions that maximize space while maintaining effortless elegance and order.',
    images: [
      '/assets/images/bill6.jpg',
      '/assets/images/bill8.jpg',
      '/assets/images/bill3.jpg',
    ],
  },
  'home-office': {
    title: 'Home Office & Study',
    description: 'Focused, inspiring environments engineered for productivity, creativity, and professional distinction.',
    images: [
      '/assets/images/bill7.jpg',
      '/assets/images/bill9.jpg',
    ],
  },
  // Add more categories here as needed
};

// export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
//   const { category } = await params;
export default async function CategoryPage({ params }: CategoryPageParams) {
  const { category } = await params;

  const data = collectionData[category as keyof typeof collectionData];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-black">
        <Image
          src={data.images[0] || '/assets/images/placeholder.jpg'}
          alt={`${data.title} collection`}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            {data.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {data.images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {data.images.map((src, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group"
                >
                  <Image
                    src={src}
                    alt={`${data.title} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-gray-600">
              More beautiful examples coming soon...
            </p>
          )}

          {/* CTA */}
          <div className="text-center mt-12 md:mt-16">
            <Link
              href="/contact"
              className="inline-block bg-accent text-primary px-10 py-5 rounded-full font-bold uppercase tracking-wider text-lg hover:bg-accent/90 transition shadow-xl"
            >
              Start Your {data.title} Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}