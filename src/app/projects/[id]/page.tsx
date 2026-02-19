'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ContentCard } from '@/components/ui/content-card';
import { ExploreButton } from '@/components/ui/explore-button';
import { supabase, type Project, type ProjectSection, type ProjectStat } from '@/lib/supabase';

const SIDEBAR_NAV = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'research', label: 'Research' },
  { id: 'solution', label: 'Solution' },
];

const TOTAL_SLIDES = 2;

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.id as string;

  const [activeSection, setActiveSection] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [sections, setSections] = useState<ProjectSection[]>([]);
  const [stats, setStats] = useState<ProjectStat[]>([]);
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: projectData } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

      if (projectData) {
        setProject(projectData);

        const [{ data: sectionsData }, { data: statsData }, { data: relatedData }] = await Promise.all([
          supabase.from('project_sections').select('*').eq('project_id', projectData.id).order('sort_order'),
          supabase.from('project_stats').select('*').eq('project_id', projectData.id).order('sort_order'),
          supabase.from('projects').select('*').neq('id', projectData.id).limit(4),
        ]);

        if (sectionsData) setSections(sectionsData);
        if (statsData) setStats(statsData);
        if (relatedData) setRelatedProjects(relatedData);
      }

      setLoading(false);
    }
    fetchData();
  }, [slug]);

  useEffect(() => {
    if (loading || !project) return;
    const sectionIds = ['overview', 'problem', 'research', 'solution'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-10% 0px -70% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [loading, project]);

  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => setCurrentSlide(prev => prev > 0 ? prev - 1 : TOTAL_SLIDES - 1);
  const handleNextSlide = () => setCurrentSlide(prev => prev < TOTAL_SLIDES - 1 ? prev + 1 : 0);

  const getSection = (key: string) => sections.find(s => s.section_key === key);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="h-[535px] bg-gray-100 animate-pulse" />
        <div className="px-4 lg:px-[175px] pt-10 space-y-4">
          <div className="h-6 w-32 bg-gray-100 rounded animate-pulse" />
          <div className="h-16 w-2/3 bg-gray-100 rounded animate-pulse" />
          <div className="h-24 w-full max-w-[570px] bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[32px] font-medium text-[#222] mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>Project not found</h1>
          <Link href="/projects" className="text-[#524DF6] underline" style={{ fontFamily: "'Roboto', sans-serif" }}>Back to all projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[400px] sm:h-[450px] lg:h-[535px] w-full overflow-hidden bg-black">
        {project.image_url && (
          <Image src={project.image_url} alt={project.title} width={1920} height={535} className="absolute inset-0 h-full w-full object-cover opacity-75" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
      </section>

      <div className="flex">
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block flex-shrink-0 w-[175px]">
          <div className="sticky top-[80px] pt-[40px]">
            <nav className="pl-[58px]">
              {SIDEBAR_NAV.map((item, index) => (
                <button key={item.id} onClick={() => handleSectionClick(item.id)} className={`block w-[117px] text-left text-[17px] font-medium transition-all duration-200 relative ${activeSection === item.id ? 'text-[#524df6]' : 'text-black/60 hover:text-[#524df6]'}`} style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100", marginBottom: index < SIDEBAR_NAV.length - 1 ? '36px' : '0' }}>
                  {activeSection === item.id && <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#524df6] rounded-full" />}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <div className="flex-1 min-w-0">
          {/* Mobile Nav */}
          <div className="lg:hidden sticky top-[60px] sm:top-[70px] z-20 bg-white border-b border-gray-100 overflow-x-auto">
            <nav className="flex px-4 py-3 gap-6">
              {SIDEBAR_NAV.map(item => (
                <button key={item.id} onClick={() => handleSectionClick(item.id)} className={`text-[15px] font-medium whitespace-nowrap transition-colors ${activeSection === item.id ? 'text-[#524df6]' : 'text-black hover:text-[#524df6]'}`} style={{ fontFamily: "'Roboto', sans-serif" }}>{item.label}</button>
              ))}
            </nav>
          </div>

          {/* Overview */}
          <section id="overview" className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pt-8 lg:pt-[40px]">
            <div className="max-w-[936px]">
              <p className="text-[17px] font-medium text-black mb-2" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{project.category}</p>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-medium text-black leading-[1.1] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{project.title}</h1>
              <p className="text-[15px] sm:text-[17px] font-medium text-black leading-relaxed mb-6 max-w-[570px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{project.description}</p>
              <div className="flex items-center gap-3">
                <div className="w-[60px] h-[60px] rounded-full bg-[#524DF6]/10 flex-shrink-0 flex items-center justify-center">
                  <span className="text-[22px] font-semibold text-[#524DF6]" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {project.author_name ? project.author_name.charAt(0).toUpperCase() : 'A'}
                  </span>
                </div>
                <div>
                  <p className="text-[20px] sm:text-[24px] font-medium text-black" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{project.author_name}</p>
                  <p className="text-[15px] sm:text-[17px] font-medium text-black/60" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{project.author_role}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Image */}
          <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] py-12 lg:py-[80px]">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[535px] rounded-lg overflow-hidden bg-[#1a1a1a]">
              {project.image_url && (
                <Image
                  src={project.image_url}
                  alt={project.title}
                  fill
                  className="object-cover opacity-90"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>
          </section>

          {/* Problem Section */}
          {getSection('problem') && (
            <section id="problem" className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
              <div className="max-w-[874px]">
                <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-medium text-black leading-[1.1] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('problem')!.heading}</h2>
                <p className="text-[15px] sm:text-[17px] font-medium text-black leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('problem')!.content}</p>
              </div>
            </section>
          )}

          {/* Stats */}
          {stats.length > 0 && (
            <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
              <div className="w-full h-auto min-h-[300px] sm:min-h-[350px] lg:h-[412px] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(82,77,246,0.08) 0%, rgba(82,77,246,0.04) 50%, rgba(82,77,246,0.1) 100%)' }}>
                <div className="relative w-full h-full flex items-center justify-center border border-[rgba(82,77,246,0.1)]">
                  <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-0 px-8 py-12">
                    {stats.map((stat, index) => (
                      <div key={stat.id} className={`text-center group sm:px-8 lg:px-[60px] xl:px-[100px] ${index < stats.length - 1 ? 'sm:border-r border-black/10' : ''}`}>
                        <p className={`font-normal leading-none transition-colors duration-200 ${index === 1 ? 'text-[48px] sm:text-[56px] lg:text-[64px] text-[#524DF6]' : 'text-[48px] sm:text-[60px] lg:text-[72.576px] text-black'}`} style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{stat.value}</p>
                        <p className={`font-medium text-black/60 mt-2 ${index === 1 ? 'text-[24px] sm:text-[28px] lg:text-[32px]' : 'text-[24px] sm:text-[30px] lg:text-[34.272px]'}`} style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Research Section */}
          {getSection('research') && (
            <section id="research" className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
              <div className="max-w-[874px]">
                <h2 className="text-[32px] sm:text-[48px] lg:text-[64px] font-medium text-black leading-[1.1] mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('research')!.heading}</h2>
                <p className="text-[15px] sm:text-[17px] font-medium text-black leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('research')!.content}</p>
              </div>
            </section>
          )}

          {/* Solution Section */}
          {getSection('solution') && (
            <section id="solution" className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
              <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[744px] rounded-lg overflow-hidden bg-[#1a1a1a]">
                {project.image_url && (
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
                <div className="absolute left-[20px] sm:left-[49px] bottom-[20px] sm:bottom-[50px] w-[calc(100%-40px)] sm:w-[536px] max-h-[calc(100%-40px)] sm:max-h-[calc(100%-70px)] overflow-y-auto bg-white rounded-[28px] p-6 sm:px-[47px] sm:py-[37px]">
                  <h3 className="text-[18px] sm:text-[22.403px] font-medium text-black mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('solution')!.heading}</h3>
                  <p className="text-[14px] sm:text-[17px] font-normal text-black leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{getSection('solution')!.content}</p>
                </div>
              </div>
            </section>
          )}

          {/* Carousel */}
          <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
            <div className="relative">
              <div className="flex gap-4 sm:gap-6 lg:gap-[63px] overflow-hidden">
                {/* Main slide */}
                <div className="relative flex-shrink-0 w-full sm:w-[60%] lg:w-[811px] h-[300px] sm:h-[400px] lg:h-[491px] rounded-lg overflow-hidden bg-[#1a1a1a]">
                  {project.image_url && (
                    <Image src={project.image_url} alt={project.title} fill className="object-cover opacity-80" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                </div>
                {/* Peek slide */}
                <div className="relative hidden sm:block flex-shrink-0 sm:w-[35%] lg:w-[504px] h-[300px] sm:h-[400px] lg:h-[491px] rounded-lg overflow-hidden bg-[#1a1a1a]">
                  {project.image_url && (
                    <Image src={project.image_url} alt={project.title} fill className="object-cover opacity-60 scale-105" style={{ objectPosition: '70% center' }} />
                  )}
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              </div>
              <div className="flex items-center justify-center gap-[6px] mt-4">
                {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`w-[6px] h-[6px] rounded-full transition-all ${currentSlide === i ? 'bg-black scale-125' : 'bg-black/30'}`} aria-label={`Go to slide ${i + 1}`} />
                ))}
              </div>
              <button onClick={handlePrevSlide} className="absolute left-0 top-[calc(50%-16px)] -translate-y-1/2 w-[40px] h-[40px] sm:w-[43.615px] sm:h-[43.615px] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Previous slide">
                <ChevronLeft className="w-[24px] h-[24px] sm:w-[29px] sm:h-[29px] text-black" strokeWidth={2} />
              </button>
              <button onClick={handleNextSlide} className="absolute right-0 top-[calc(50%-16px)] -translate-y-1/2 w-[40px] h-[40px] sm:w-[43.615px] sm:h-[43.615px] flex items-center justify-center hover:opacity-80 transition-opacity" aria-label="Next slide">
                <ChevronRight className="w-[24px] h-[24px] sm:w-[29px] sm:h-[29px] text-black" strokeWidth={2} />
              </button>
            </div>
          </section>

          {/* Up Next */}
          {relatedProjects.length > 0 && (
            <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[0px] pb-12 lg:pb-[80px]">
              <div className="flex items-center justify-between mb-8 lg:mb-[49px]">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#222] leading-[40px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Up Next</h2>
                <Link href="/projects"><ExploreButton variant="default">explore all</ExploreButton></Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[23px] gap-y-[30px] justify-items-center">
                {relatedProjects.map((p, index) => (
                  <Link key={p.id} href={`/projects/${p.slug}`} className="block w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] xl:max-w-[327px] animate-fade-in-up" style={{ animationDelay: `${index * 60}ms`, animationFillMode: 'both' }}>
                    <ContentCard title={p.title} imageUrl={p.image_url ?? ''} size="default" className="cursor-pointer" onBookmark={(e) => e?.preventDefault()} onMoreOptions={(e) => e?.preventDefault()} onReadMore={(e) => e?.preventDefault()} />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
