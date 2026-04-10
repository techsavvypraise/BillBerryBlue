 import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const allProjects = [
  {
    id: 1,
    title: 'Wuse II Residence',
    category: 'Residential',
    image: '/assets/images/bill9.jpg',
    description: 'A modern family home transformed for efficiency and timeless elegance.',
    problem: 'Underutilized open-plan layout with poor flow and limited storage.',
    solution: 'Strategic zoning, custom joinery, warm neutral palette with premium textures.',
    result: 'Increased usable space by 30%, enhanced daily comfort, and raised property appeal.',
  },
  {
    id: 2,
    title: 'Victoria Island Penthouse',
    category: 'Residential',
    image: '/assets/images/bill8.jpg',
    description: 'Luxury penthouse with panoramic views and bespoke furniture.',
    problem: 'Cold, trend-heavy finishes that felt impersonal.',
    solution: 'Layered materials, custom statement pieces, integrated smart lighting.',
    result: 'Warm, sophisticated retreat that reflects the owner’s lifestyle.',
  },
  {
    id: 3,
    title: 'Aminu Kano Corporate Office',
    category: 'Commercial',
    image: '/assets/images/bill7.jpg',
    description: 'Brand-aligned workspace designed for productivity and prestige.',
    problem: 'Generic office layout with low energy and poor acoustics.',
    solution: 'Acoustic panels, ergonomic zoning, premium materials with brand colors.',
    result: 'Improved team focus, elevated client perception, better workplace culture.',
  },
  {
    id: 4,
    title: 'Port Harcourt Villa',
    category: 'Residential',
    image: '/assets/images/bill6.jpg',
    description: 'Tropical-modern villa blending indoor-outdoor living.',
    problem: 'Disconnected spaces with limited natural light flow.',
    solution: 'Large sliding glass doors, natural materials, strategic landscaping integration.',
    result: 'Seamless indoor-outdoor experience, higher perceived value.',
  },
  {
    id: 5,
    title: 'Lekki Hospitality Lounge',
    category: 'Commercial',
    image: '/assets/images/bill5.jpg',
    description: 'Boutique lounge with refined ambiance and custom furniture.',
    problem: 'Outdated, cluttered space lacking identity.',
    solution: 'Curated palette, bespoke seating, mood lighting and art curation.',
    result: 'Elevated guest experience and increased repeat visits.',
  },
  {
    id: 6,
    title: 'Asokoro Family Retreat',
    category: 'Residential',
    image: '/assets/images/bill2.jpg',
    description: 'Multi-generational home focused on comfort and functionality.',
    problem: 'Fragmented layout unsuitable for extended family living.',
    solution: 'Open-plan living zones, private retreats, durable yet luxurious finishes.',
    result: 'Harmonious family living with lasting elegance.',
  },
];

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;                    // ← Fixed: await the Promise
  const projectId = parseInt(id);

  const project = allProjects.find((p) => p.id === projectId);

  if (!project) {
    notFound();                                   // Shows Next.js 404 page
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20  overflow-hidden">
      {/* Back Button */}
      <div className="mt-8 pt-8 pb-6 px-6 max-w-5xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
        >
          ← Back to All Projects
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
        <Image
          src={project.image}           // Now safe (project is guaranteed to exist)
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-12 py-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {project.title}
          </h1>

          <p className="text-xl text-secondary leading-relaxed mb-12">
            {project.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold text-accent mb-3">
                The Challenge
              </h3>
              <p className="text-secondary">{project.problem}</p>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold text-accent mb-3">
                Our Solution
              </h3>
              <p className="text-secondary">{project.solution}</p>
            </div>

            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold text-accent mb-3">
                The Result
              </h3>
              <p className="text-secondary">{project.result}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}