'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FilterTabs } from '@/components/ui/filter-tabs';
import { ContentCard } from '@/components/ui/content-card';
import { ActiveFiltersBar } from '@/components/ui/active-filter-tag';
import { NoResultsIllustration } from '@/components/ui/no-results-illustration';
import { supabase, type Project } from '@/lib/supabase';

const FILTER_TABS = [
  { id: 'recents', label: 'Recents' },
  { id: 'research', label: 'Research' },
  { id: 'case-study', label: 'Case study' },
  { id: 'images', label: 'Images' },
  { id: 'videos', label: 'Videos' },
  { id: 'projects', label: 'Projects' },
];

const FILTER_CATEGORIES = [
  'Real Estate', 'Urban Planning', 'Finance', 'Construction',
  'Technology', 'Sustainability', 'Housing', 'Commercial',
];

const STRIPE_POSITIONS = [
  -171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632,
  705, 778, 851, 924, 997, 1070, 1143, 1216, 1289, 1362, 1435, 1508
];

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('recents');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
  }, [searchParams]);

  useEffect(() => {
    async function fetchProjects() {
      const { data } = await supabase
        .from('projects')
        .select('*')
        .order('published_at', { ascending: false });
      if (data) setProjects(data);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const filteredCards = useMemo(() => {
    let cards = projects;

    if (activeTab !== 'recents') {
      cards = cards.filter(p => p.type === activeTab);
    }

    if (activeFilters.length > 0) {
      cards = cards.filter(p =>
        activeFilters.some(f =>
          p.tags.some(t => t.toLowerCase().replace(/-/g, ' ') === f.toLowerCase())
        )
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return cards;
  }, [projects, activeTab, activeFilters, searchQuery]);

  const handleRemoveFilter = (filter: string) => setActiveFilters(prev => prev.filter(f => f !== filter));
  const handleClearAllFilters = () => setActiveFilters([]);
  const handleClearAll = () => { setActiveFilters([]); setSearchQuery(''); setActiveTab('recents'); };
  const handleAddFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) setActiveFilters(prev => [...prev, filter]);
    setShowFilterDropdown(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden" style={{ background: 'rgba(82, 77, 246, 0.1)' }}>
        <div className="absolute inset-0 hidden xl:block pointer-events-none">
          {STRIPE_POSITIONS.map((left, i) => (
            <div key={i} className="absolute w-[73px] top-0 bottom-0" style={{ left: `${left + 172}px`, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.2) 77.404%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(57.4px)', WebkitBackdropFilter: 'blur(57.4px)', mixBlendMode: 'overlay' }} />
          ))}
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-8 sm:pt-12 md:pt-16 lg:pt-[74px] pb-10 lg:pb-[75px]">
          <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-black leading-[36px] sm:leading-[40px] mb-6 sm:mb-8 lg:mb-10" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>All Projects</h1>

          <div className="max-w-[928px] mb-4 sm:mb-6 relative">
            <div className="w-full h-[52px] sm:h-[58px] md:h-[66px] rounded-[62px] overflow-hidden" style={{ background: 'rgba(0, 0, 0, 0)', boxShadow: '0px 0px 0px 1px rgba(96, 101, 242, 0.13)' }}>
              <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-[33px] py-[10px] rounded-[42px]" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="flex items-center gap-2 sm:gap-3 flex-1">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#4a4a4a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <input type="text" placeholder="Search anything..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={`bg-transparent border-none outline-none text-[13px] sm:text-[14px] md:text-[15px] font-normal leading-[20px] flex-1 min-w-0 ${searchQuery ? 'text-black' : 'text-[#4a4a4a]'} placeholder:text-[#4a4a4a]`} style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }} />
                </div>
                <button onClick={() => setShowFilterDropdown(!showFilterDropdown)} className="flex items-center justify-center w-[55px] sm:w-[65px] md:w-[75px] h-[36px] sm:h-[40px] md:h-[46px] rounded-[42px] border-2 border-white overflow-hidden cursor-pointer hover:opacity-90 transition-opacity flex-shrink-0" style={{ backgroundImage: 'linear-gradient(107.28deg, rgb(255, 255, 255) 12.4%, rgb(241, 241, 241) 95.3%)', boxShadow: '0px 0px 5px -1px rgba(46, 40, 80, 0.56)' }} aria-label="Open filters">
                  <svg width="19" height="13" viewBox="0 0 19 13" fill="none"><path d="M0 1H19M3 6.5H16M6 12H13" stroke="black" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>

            {showFilterDropdown && (
              <div className="absolute right-0 top-full mt-2 w-[220px] bg-white rounded-[10px] shadow-[0px_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 py-2 z-50">
                <div className="px-4 py-2 text-[12px] text-gray-400 font-medium uppercase tracking-wider" style={{ fontFamily: "'Roboto', sans-serif" }}>Filter by</div>
                <div className="h-px bg-gray-100 mx-2 mb-1" />
                {FILTER_CATEGORIES.map((category) => {
                  const isActive = activeFilters.includes(category);
                  return (
                    <button key={category} onClick={() => handleAddFilter(category)} className={`w-full px-4 py-[10px] text-left text-[14px] flex items-center justify-between transition-colors hover:bg-gray-50 ${isActive ? 'text-[#524DF6]' : 'text-[#1C1C1C]'}`} style={{ fontFamily: "'Roboto', sans-serif" }}>
                      <span>{category}</span>
                      {isActive && <svg width="12" height="9" viewBox="0 0 12 9" fill="none"><path d="M1 4L4.5 7.5L11 1" stroke="#524DF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <ActiveFiltersBar filters={activeFilters} onRemoveFilter={handleRemoveFilter} onClearAll={handleClearAllFilters} className="mb-4" />
        </div>
      </section>

      {showFilterDropdown && <div className="fixed inset-0 z-40" onClick={() => setShowFilterDropdown(false)} />}

      <section className="px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-8 sm:pt-10 lg:pt-[37px] pb-12 sm:pb-16 lg:pb-[69px]">
        <div className="max-w-[1378px] mx-auto">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#222] leading-[32px] sm:leading-[36px] lg:leading-[40px] mb-6 sm:mb-8 lg:mb-[37px]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Browse by</h2>

          <div className="mb-8 sm:mb-12 lg:mb-[70px] overflow-x-auto scrollbar-hide">
            <FilterTabs tabs={FILTER_TABS} activeId={activeTab} onChange={setActiveTab} />
          </div>

          {(activeFilters.length > 0 || searchQuery.trim()) && !loading && (
            <p className="text-[14px] text-gray-500 mb-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Showing {filteredCards.length} of {projects.length} projects
            </p>
          )}

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[23px] gap-y-[30px] justify-items-center">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-full max-w-[327px] h-[424px] bg-gray-100 rounded-[10px] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[23px] gap-y-[30px] justify-items-center">
              {filteredCards.map((project, index) => (
                <Link key={project.id} href={`/projects/${project.slug}`} className="block w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] xl:max-w-[327px] animate-fade-in-up" style={{ animationDelay: `${Math.min(index * 30, 360)}ms`, animationFillMode: 'both' }}>
                  <ContentCard title={project.title} subtitle={project.subtitle ?? undefined} imageUrl={project.image_url ?? ''} size="default" className="cursor-pointer" onBookmark={(e) => e?.preventDefault()} onMoreOptions={(e) => e?.preventDefault()} onReadMore={(e) => e?.preventDefault()} />
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredCards.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 sm:py-24 lg:py-32 animate-fade-in">
              <NoResultsIllustration className="w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] lg:w-[218px] lg:h-[218px] mb-6 sm:mb-8 opacity-80" />
              <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-medium text-[#222] leading-[40px] text-center mb-2 sm:mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>No results found</h3>
              <p className="text-[15px] sm:text-[16px] lg:text-[17px] font-normal text-black/60 text-center mb-6" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Try refining your search</p>
              <button onClick={handleClearAll} className="text-[15px] font-medium text-[#524DF6] hover:opacity-75 transition-opacity px-6 py-2 rounded-full border border-[#524DF6]/20 hover:bg-[#524DF6]/5" style={{ fontFamily: "'Roboto', sans-serif" }}>
                {searchQuery.trim() && activeFilters.length === 0 ? 'Clear search' : 'Clear all filters'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
