'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FilterTabs } from '@/components/ui/filter-tabs';
import { ContentCard } from '@/components/ui/content-card';
import { ExploreButton } from '@/components/ui/explore-button';
import { supabase, type Project, type Category } from '@/lib/supabase';

const FILTER_TABS = [
  { id: 'recents', label: 'Recents' },
  { id: 'research', label: 'Research' },
  { id: 'case-study', label: 'Case study' },
  { id: 'images', label: 'Images' },
  { id: 'videos', label: 'Videos' },
  { id: 'projects', label: 'Projects' },
];

const STRIPE_POSITIONS = [
  -171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632,
  705, 778, 851, 924, 997, 1070, 1143, 1216, 1289, 1362, 1435, 1508
];

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('recents');
  const [projects, setProjects] = useState<Project[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) router.push(`/projects?q=${encodeURIComponent(searchQuery.trim())}`);
    else router.push('/projects');
  };

  useEffect(() => {
    async function fetchData() {
      const [{ data: projectsData }, { data: categoriesData }] = await Promise.all([
        supabase.from('projects').select('*').order('published_at', { ascending: false }),
        supabase.from('categories').select('*').order('sort_order'),
      ]);
      if (projectsData) setProjects(projectsData);
      if (categoriesData) setCategories(categoriesData);
      setLoading(false);
    }
    fetchData();
  }, []);

  const displayedProjects = useMemo(() => {
    let list = projects;
    if (activeTab !== 'recents') list = list.filter(p => p.type === activeTab);
    if (searchQuery.trim()) list = list.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return list.slice(0, 12);
  }, [projects, activeTab, searchQuery]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[590px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full bg-[rgba(255,255,255,0.44)]">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-50">
            <source src="/workroom-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(220, 200, 255, 0.4) 0%, rgba(255, 255, 255, 0.5) 40%, rgba(200, 210, 255, 0.35) 60%, rgba(180, 200, 255, 0.4) 100%)' }} />
          <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] opacity-50" style={{ background: 'radial-gradient(circle, rgba(160, 120, 255, 0.7) 0%, rgba(140, 100, 255, 0.4) 40%, transparent 70%)', left: '-100px', top: '40%', transform: 'translateY(-50%)' }} />
          <div className="absolute w-[200px] h-[250px] sm:w-[300px] sm:h-[350px] md:w-[400px] md:h-[450px] lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[600px] rounded-full blur-[50px] sm:blur-[70px] md:blur-[80px] lg:blur-[100px] opacity-45" style={{ background: 'radial-gradient(ellipse, rgba(180, 140, 255, 0.6) 0%, rgba(160, 120, 255, 0.3) 50%, transparent 70%)', left: '15%', top: '30%' }} />
          <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] xl:w-[600px] xl:h-[600px] rounded-full blur-[50px] sm:blur-[70px] md:blur-[80px] lg:blur-[100px] opacity-40" style={{ background: 'radial-gradient(circle, rgba(140, 180, 255, 0.6) 0%, rgba(120, 160, 255, 0.3) 50%, transparent 70%)', right: '-50px', top: '20%' }} />
          <div className="absolute w-[200px] h-[180px] sm:w-[300px] sm:h-[250px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[400px] rounded-full blur-[40px] sm:blur-[50px] md:blur-[60px] lg:blur-[80px] opacity-35" style={{ background: 'radial-gradient(ellipse, rgba(180, 200, 255, 0.5) 0%, rgba(160, 190, 255, 0.2) 50%, transparent 70%)', right: '10%', bottom: '-50px' }} />
        </div>

        {/* Glass Card - DESKTOP */}
        <div className="absolute hidden xl:block rounded-[52px] border border-solid border-white h-[425px]" style={{ top: 0, bottom: 0, left: '40px', right: '40px', maxWidth: '1409px', margin: 'auto', background: 'rgba(255, 255, 255, 0.02)', boxShadow: '0px 0px 14.4px -4px rgba(0, 0, 0, 0.05)', overflow: 'hidden' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ left: '-172px', top: '-84px' }}>
            {STRIPE_POSITIONS.map((left, i) => (
              <div key={i} className="absolute" style={{ left: `${left + 172}px`, top: '-83px', width: '73px', height: '535px', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', mixBlendMode: 'overlay', background: 'linear-gradient(to right, rgba(255, 255, 255, 0.01) 0%, rgba(0, 0, 0, 0.2) 77.4%, rgba(255, 255, 255, 0.01) 100%)' }} />
            ))}
          </div>
        </div>

        {/* DESKTOP CONTENT */}
        <div className="hidden xl:block relative z-10">
          <div className="absolute left-0 right-0 mx-auto w-full max-w-[754px] text-center" style={{ top: '199px' }}>
            <p className="text-[48px] font-semibold text-black leading-[40px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Welcome to The Workroom</p>
          </div>
          <div className="absolute left-0 right-0 mx-auto w-full max-w-[754px] text-center opacity-[0.59]" style={{ top: '248px' }}>
            <p className="text-[24px] font-medium text-black leading-[40px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Born at ASBL, for thinking, learning, and more</p>
          </div>
          <div className="absolute left-0 right-0 mx-auto h-[66px] w-full max-w-[928px] overflow-clip rounded-[62px] bg-transparent" style={{ top: '330px', boxShadow: '0px 0px 0px 1px rgba(96, 101, 242, 0.13)' }}>
            <div className="flex items-center justify-between w-full h-full px-[33px] py-[10px] rounded-[42px]" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-[24px] h-[24px] flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <input type="text" placeholder="Search anything..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()} className="bg-transparent border-none outline-none text-[15px] text-[#4a4a4a] font-normal leading-[20px] placeholder:text-[#4a4a4a] flex-1 min-w-0" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }} />
              </div>
              <button onClick={handleSearchSubmit} className="flex items-center justify-center w-[75px] h-[46px] rounded-[42px] border-2 border-solid border-white overflow-clip cursor-pointer shrink-0" style={{ backgroundImage: 'linear-gradient(107.28deg, rgb(255, 255, 255) 12.404%, rgb(241, 241, 241) 95.297%)', boxShadow: '0px 0px 5px -1px rgba(46, 40, 80, 0.56)' }}>
                <svg width="19" height="13" viewBox="0 0 19 13" fill="none"><path d="M0 1H19M3 6.5H16M6 12H13" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>

          {/* Category Chips from DB */}
          <div className="absolute left-0 right-0 mx-auto h-[32px] w-full max-w-[1068px]" style={{ top: '411px' }}>
            <div className="absolute left-0 top-0 h-[32px] w-[calc(100%-50px)] overflow-hidden">
              <div className="flex items-center h-full">
                {categories.map((cat, index) => (
                  <div key={cat.id} className="flex items-center h-full">
                    <button onClick={() => document.getElementById('browse-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center px-[10px] py-[6px] whitespace-nowrap">
                      <span className="text-[17px] font-normal text-black text-center tracking-[0.1px] leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{cat.name}</span>
                    </button>
                    {index < categories.length - 1 && <div className="w-[1px] h-[15px] bg-black/30" />}
                  </div>
                ))}
              </div>
              {/* Gradient fade on right edge — prevents hard mid-word clip */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-[60px]" style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,1))' }} />
            </div>
            <div className="absolute right-[-12px] top-[2px] flex items-center justify-center h-[27px] px-[8px] py-[6px]">
              <span className="text-[15px] font-medium text-[#0061ff] text-center tracking-[0.1px] leading-[20px] underline underline-offset-2" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>more</span>
            </div>
          </div>
        </div>

        {/* RESPONSIVE CONTENT */}
        <div className="xl:hidden relative z-10 flex flex-col items-center h-full justify-center px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold text-black text-center leading-[28px] sm:leading-[36px] md:leading-[40px] lg:leading-[40px] mb-2 sm:mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Welcome to The Workroom</h1>
          <p className="text-[13px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-medium text-black text-center leading-[18px] sm:leading-[24px] md:leading-[32px] lg:leading-[36px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 opacity-[0.59] max-w-[90%] sm:max-w-[80%] md:max-w-[600px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Born at ASBL, for thinking, learning, and more</p>
          <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[800px] h-[48px] sm:h-[54px] md:h-[60px] lg:h-[66px] rounded-[48px] sm:rounded-[54px] md:rounded-[58px] lg:rounded-[62px] overflow-hidden mb-3 sm:mb-4 md:mb-5 lg:mb-6" style={{ background: 'rgba(0, 0, 0, 0)', boxShadow: '0px 0px 0px 1px rgba(96, 101, 242, 0.13)' }}>
            <div className="flex items-center justify-between h-full px-3 sm:px-5 md:px-6 lg:px-[33px] py-2 rounded-[42px]" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
              <div className="flex items-center gap-2 sm:gap-3 flex-1">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none"><path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <input type="text" placeholder="Search anything..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit()} className="bg-transparent border-none outline-none text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#4a4a4a] font-normal leading-[20px] placeholder:text-[#4a4a4a] flex-1 min-w-0" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }} />
              </div>
              <button onClick={handleSearchSubmit} className="flex items-center justify-center w-[44px] sm:w-[55px] md:w-[65px] lg:w-[75px] h-[32px] sm:h-[36px] md:h-[42px] lg:h-[46px] rounded-[32px] sm:rounded-[36px] md:rounded-[40px] lg:rounded-[42px] border-2 border-white overflow-hidden cursor-pointer flex-shrink-0" style={{ backgroundImage: 'linear-gradient(107.28deg, rgb(255, 255, 255) 12.4%, rgb(241, 241, 241) 95.3%)', boxShadow: '0px 0px 5px -1px rgba(46, 40, 80, 0.56)' }}>
                <svg className="w-3 h-2 sm:w-4 sm:h-3 md:w-[18px] md:h-[12px]" viewBox="0 0 19 13" fill="none"><path d="M0 1H19M3 6.5H16M6 12H13" stroke="black" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
          </div>
          <div className="flex items-center h-[28px] sm:h-[30px] md:h-[32px] overflow-x-auto max-w-full scrollbar-hide pb-1">
            <div className="flex items-center h-full">
              {categories.map((cat, index) => (
                <div key={cat.id} className="flex items-center h-full">
                  <button onClick={() => document.getElementById('browse-section')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center justify-center px-[6px] sm:px-2 md:px-[10px] py-1 whitespace-nowrap">
                    <span className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] font-normal text-black text-center tracking-[0.1px] leading-[18px] sm:leading-[20px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>{cat.name}</span>
                  </button>
                  {index < categories.length - 1 && <div className="w-[1px] h-[12px] sm:h-[14px] md:h-[15px] bg-black/30" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse By Section */}
      <section id="browse-section" className="pt-[50px] sm:pt-[60px] lg:pt-[75px] pb-8 sm:pb-10 lg:pb-[69px] px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px]">
        <div className="max-w-[1378px] mx-auto">
          <div className="flex items-center justify-between mb-4 sm:mb-6 lg:mb-[20px]">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#222] leading-[32px] sm:leading-[36px] lg:leading-[40px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Browse by</h2>
            <Link href="/projects"><ExploreButton variant="default">explore all</ExploreButton></Link>
          </div>

          <div className="mb-6 sm:mb-10 lg:mb-[38px] overflow-x-auto scrollbar-hide">
            <FilterTabs tabs={FILTER_TABS} activeId={activeTab} onChange={setActiveTab} />
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[23px] gap-y-[30px] justify-items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-full max-w-[327px] h-[424px] bg-gray-100 rounded-[10px] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[23px] gap-y-[30px] justify-items-center">
              {displayedProjects.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.slug}`} className="block w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] xl:max-w-[327px] animate-fade-in-up" style={{ animationDelay: `${Math.min(index * 40, 400)}ms`, animationFillMode: 'both' }}>
                  <ContentCard title={project.title} subtitle={project.subtitle ?? undefined} imageUrl={project.image_url ?? ''} size="default" className="cursor-pointer" onBookmark={(e) => e?.preventDefault()} onMoreOptions={(e) => e?.preventDefault()} onReadMore={(e) => e?.preventDefault()} />
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-10 sm:mt-14 lg:mt-[69px]">
            <Link href="/projects">
              <button className="px-[30px] py-[10px] rounded-[4px] text-[16px] text-white font-normal leading-[20px] hover:opacity-90 active:scale-[0.98] transition-all duration-150 cursor-pointer" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100", backgroundImage: 'linear-gradient(101.56deg, rgb(82, 77, 246) 0%, rgb(62, 57, 210) 103.82%)', boxShadow: '0 2px 12px rgba(82, 77, 246, 0.3)' }}>Explore All</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
