'use client';

import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { supabase } from '@/lib/supabase';

const STRIPE_POSITIONS = [
  -171, -98, -25, 48, 121, 194, 267, 340, 413, 486, 559, 632,
  705, 778, 851, 924, 997, 1070, 1143, 1216, 1289, 1362, 1435, 1508
];

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="83" height="73" viewBox="0 0 83 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="20" width="71" height="50" rx="6" stroke="#222222" strokeWidth="2.5" fill="none" />
      <path d="M41.5 50V10" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M30 22L41.5 8L53 22" stroke="#222222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="23" stroke="#524df6" strokeWidth="2" />
      <path d="M14 24L21 31L34 17" stroke="#524df6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PublishPage() {
  const [email, setEmail] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ files?: string; email?: string }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    setUploadedFiles(prev => [...prev, ...Array.from(e.dataTransfer.files)]);
    setErrors(prev => ({ ...prev, files: undefined }));
  };
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(prev => [...prev, ...Array.from(e.target.files!)]);
      setErrors(prev => ({ ...prev, files: undefined }));
    }
  };
  const handleBrowseClick = () => fileInputRef.current?.click();
  const handleRemoveFile = (index: number) => setUploadedFiles(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = async () => {
    const newErrors: { files?: string; email?: string } = {};
    if (uploadedFiles.length === 0) newErrors.files = 'Please select at least one file to upload';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    setErrors({});
    setIsSubmitting(true);

    try {
      const fileUrls: string[] = [];
      const fileNames = uploadedFiles.map(f => f.name);

      // Upload each file to Supabase Storage
      for (const file of uploadedFiles) {
        const path = `submissions/${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
        const { data, error } = await supabase.storage.from('workroom-files').upload(path, file, { upsert: true });
        if (!error && data) {
          const { data: urlData } = supabase.storage.from('workroom-files').getPublicUrl(data.path);
          fileUrls.push(urlData.publicUrl);
        }
      }

      // Save submission record
      await supabase.from('submissions').insert({
        email: email.trim(),
        file_names: fileNames,
        file_urls: fileUrls,
      });

      setIsSubmitting(false);
      setIsSuccess(true);
      setUploadedFiles([]);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 4000);
    } catch {
      setIsSubmitting(false);
      setErrors({ files: 'Upload failed. Please try again.' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: 'rgba(82, 77, 246, 0.1)' }}>
      <div className="absolute inset-0 hidden xl:block pointer-events-none">
        {STRIPE_POSITIONS.map((left, i) => (
          <div key={`page-${i}`} className="absolute w-[73px] top-0 bottom-0" style={{ left: `${left + 172}px`, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 0%, rgba(0,0,0,0.2) 77.404%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(57.4px)', WebkitBackdropFilter: 'blur(57.4px)', mixBlendMode: 'overlay' }} />
        ))}
      </div>

      <div className="relative z-10 flex items-start justify-center px-4 sm:px-6 md:px-12 lg:px-[80px] xl:px-[175px] pt-6 sm:pt-10 lg:pt-[87px] pb-12 sm:pb-16 lg:pb-[69px]">
        <div className="relative w-full max-w-[1409px] rounded-[32px] sm:rounded-[42px] lg:rounded-[52px] border border-white/40 overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', boxShadow: '0px 0px 14.4px -4px rgba(0, 0, 0, 0.05)' }}>
          <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-[100px] py-8 sm:py-12 lg:py-[60px]">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16 gap-4 animate-fade-in-scale">
                <CheckIcon />
                <p className="text-[22px] sm:text-[28px] font-medium text-[#222] text-center" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Published successfully!</p>
                <p className="text-[14px] sm:text-[16px] text-[#6b6b6b] text-center" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Your files are now available in the archive.</p>
              </div>
            ) : (
              <>
                <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-[#222] leading-[1.0] text-center mb-2 sm:mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Share your work</h1>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] font-normal text-[#222] leading-[1.67] text-center mb-6 sm:mb-8 lg:mb-12" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Publish research, documents, presentations, working material and more</p>

                <div className={`relative w-full max-w-[650px] mx-auto mb-1.5 transition-colors ${isDragging ? 'opacity-90' : ''}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                  <div className={`relative w-full h-[300px] sm:h-[340px] lg:h-[387px] border border-dashed rounded-[10px] transition-colors ${isDragging ? 'border-[#524df6] bg-[#524df6]/5' : 'border-[#7e7e7e]'}`}>
                    <div className="absolute inset-[10px] sm:inset-[12px] bg-white rounded-[10px] flex flex-col items-center justify-center px-4">
                      {uploadedFiles.length === 0 ? (
                        <>
                          <div className="mb-3 sm:mb-4"><UploadIcon className="w-[60px] h-[52px] sm:w-[70px] sm:h-[62px] lg:w-[83px] lg:h-[73px]" /></div>
                          <p className="text-[20px] sm:text-[26px] lg:text-[32px] font-normal text-[#222] leading-[1.25] text-center mb-1" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Drag & Drop files here</p>
                          <p className="text-[12px] sm:text-[13px] lg:text-[15px] font-normal text-[#222] leading-[2.67] text-center mb-2 sm:mb-3" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>PDF, PPT, DOC, XLS, IMG, ZIP files.</p>
                          <p className="text-[16px] sm:text-[20px] lg:text-[24px] font-normal text-[#222] leading-[1.67] text-center mb-3 sm:mb-4" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>or</p>
                          <button onClick={handleBrowseClick} className="px-[20px] sm:px-[26px] lg:px-[30px] py-[8px] sm:py-[10px] border border-[#005ff9] rounded-[4px] text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-[#005ff9] leading-[20px] hover:bg-[#005ff9]/5 transition-colors" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }}>Browse files</button>
                        </>
                      ) : (
                        <div className="w-full h-full overflow-auto p-4">
                          <div className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center gap-3 overflow-hidden">
                                  <div className="w-8 h-8 bg-[#524df6]/10 rounded flex items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] font-medium text-[#524df6] uppercase">{file.name.split('.').pop()}</span>
                                  </div>
                                  <span className="text-[14px] text-[#222] truncate" style={{ fontFamily: "'Roboto', sans-serif" }}>{file.name}</span>
                                </div>
                                <button onClick={() => handleRemoveFile(index)} className="text-red-500 hover:text-red-700 text-[12px] flex-shrink-0 ml-2 transition-colors">Remove</button>
                              </div>
                            ))}
                          </div>
                          <button onClick={handleBrowseClick} className="mt-4 w-full py-2 border border-dashed border-[#005ff9] rounded text-[14px] text-[#005ff9] hover:bg-[#005ff9]/5 transition-colors" style={{ fontFamily: "'Roboto', sans-serif" }}>+ Add more files</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <input ref={fileInputRef} type="file" multiple accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.gif,.zip" onChange={handleFileSelect} className="hidden" />
                </div>

                {errors.files && <p className="w-full max-w-[650px] mx-auto text-[13px] text-red-500 mb-4 sm:mb-5" style={{ fontFamily: "'Roboto', sans-serif" }}>{errors.files}</p>}
                {!errors.files && <div className="mb-6 sm:mb-8 lg:mb-10" />}

                <div className="w-full max-w-[527px] mx-auto mb-1.5">
                  <div className={`h-[44px] sm:h-[48px] lg:h-[52px] rounded-[87px] overflow-hidden bg-white transition-shadow ${errors.email ? 'shadow-[0px_0px_0px_2px_rgba(239,68,68,0.4)]' : 'shadow-[0px_0px_0px_2px_rgba(96,101,242,0.13)]'}`}>
                    <input type="email" placeholder="Write your mail ID...." value={email} onChange={(e) => { setEmail(e.target.value); setErrors(prev => ({ ...prev, email: undefined })); }} className="w-full h-full px-[20px] sm:px-[23px] bg-transparent border-none outline-none text-[13px] sm:text-[14px] lg:text-[15px] font-normal text-black placeholder:text-[#6b6b6b]" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100" }} />
                  </div>
                </div>

                {errors.email && <p className="w-full max-w-[527px] mx-auto text-[13px] text-red-500 mb-4 sm:mb-5" style={{ fontFamily: "'Roboto', sans-serif" }}>{errors.email}</p>}
                {!errors.email && <div className="mb-5 sm:mb-6" />}

                <div className="flex justify-center">
                  <button onClick={handleSubmit} disabled={isSubmitting} className="px-[20px] sm:px-[26px] lg:px-[30px] py-[9px] sm:py-[10px] rounded-[4px] border-2 border-[#524df6] text-[14px] sm:text-[15px] lg:text-[16px] font-normal text-white leading-[20px] transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed" style={{ fontFamily: "'Roboto', sans-serif", fontVariationSettings: "'wdth' 100", backgroundImage: 'linear-gradient(101.56deg, rgb(82, 77, 246) 0%, rgb(62, 57, 210) 103.82%)', boxShadow: '0 2px 12px rgba(82, 77, 246, 0.3)' }}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Publishing...
                      </span>
                    ) : 'Publish to Archive'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
