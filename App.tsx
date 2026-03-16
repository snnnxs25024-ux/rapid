import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiAssistant } from './components/AiAssistant';
import { JOB_DATA, EDUCATION_OPTIONS } from './constants';
import { JobPosition, AppState, CandidateForm } from './types';
import { 
  ArrowRight, 
  MapPin, 
  Building2, 
  Clock, 
  CheckCircle2, 
  Briefcase, 
  ChevronRight,
  User,
  Phone,
  Mail,
  GraduationCap,
  Linkedin,
  Send,
  ArrowLeft,
  Check
} from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LANDING);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  
  // Form State
  const [formData, setFormData] = useState<CandidateForm>({
    fullName: '',
    email: '',
    phone: '',
    lastEducation: 'SMA/SMK',
    domicile: '',
    linkedinUrl: '',
    motivation: ''
  });

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appState]);

  // Handlers
  const handleJobClick = (job: JobPosition) => {
    setSelectedJob(job);
    setAppState(AppState.JOB_DETAIL);
  };

  const handleApplyClick = () => {
    if (selectedJob) {
      setAppState(AppState.APPLY_CONFIRM);
    }
  };

  const handleConfirmApply = () => {
    setAppState(AppState.APPLY_FORM);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppState(AppState.SUCCESS);
  };

  const handleWhatsAppRedirect = () => {
    if (!selectedJob) return;

    const message = `Halo, perkenalkan saya ${formData.fullName}. 
Saya ingin melamar posisi: *${selectedJob.title}* 
Untuk Client: *${selectedJob.client}*
Penempatan: *${selectedJob.location}*

Berikut data singkat saya:
Pendidikan: ${formData.lastEducation}
Domisili: ${formData.domicile}
Email: ${formData.email}
LinkedIn: ${formData.linkedinUrl || '-'}

Mohon arahan selanjutnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${selectedJob.picPhone}?text=${encodedMessage}`;
    window.open(waUrl, '_blank');
  };

  // --- Render Sections ---

  const renderLanding = () => (
    <div className="flex flex-col min-h-screen animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-block bg-blue-500/20 px-4 py-1.5 rounded-full text-blue-200 font-semibold text-sm mb-6 border border-blue-500/30 backdrop-blur-sm">
              #1 Portal Karir Terpercaya
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Temukan Karir <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Impianmu Bersama Swapro
              </span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Kami menghubungkan talenta terbaik dengan perusahaan klien kami. 
              Proses cepat, transparan, dan langsung terhubung dengan rekruter.
            </p>
            <button 
              onClick={() => setAppState(AppState.JOB_LIST)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1 hover:shadow-blue-600/30 flex items-center gap-2 group"
            >
              Mulai Temukan Karirmu <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center perspective-1000">
             <div className="relative transform rotate-y-12 transition-transform hover:rotate-y-0 duration-700">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-30"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional Woman" 
                  className="relative rounded-3xl shadow-2xl border-4 border-slate-800/50 w-80 md:w-96 aspect-square object-cover"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Feature Stats */}
      <div className="bg-slate-900 border-b border-slate-800">
         <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
               <h4 className="text-3xl font-bold text-white">50+</h4>
               <p className="text-slate-400 text-sm">Klien Perusahaan</p>
            </div>
            <div>
               <h4 className="text-3xl font-bold text-white">1000+</h4>
               <p className="text-slate-400 text-sm">Lowongan Aktif</p>
            </div>
            <div>
               <h4 className="text-3xl font-bold text-white">24 Jam</h4>
               <p className="text-slate-400 text-sm">Respon Cepat</p>
            </div>
            <div>
               <h4 className="text-3xl font-bold text-white">10k+</h4>
               <p className="text-slate-400 text-sm">Kandidat Diterima</p>
            </div>
         </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mengapa Memilih Swapro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 shadow-sm">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Klien Terpercaya</h3>
              <p className="text-slate-600 leading-relaxed">Akses eksklusif ke lowongan di perusahaan multinasional dan BUMN ternama di Indonesia.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Proses Cepat</h3>
              <p className="text-slate-600 leading-relaxed">Lamaran Anda langsung diteruskan ke PIC terkait tanpa birokrasi yang berbelit-belit.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 shadow-sm">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Jenjang Karir</h3>
              <p className="text-slate-600 leading-relaxed">Berbagai posisi tersedia mulai dari entry level hingga profesional berpengalaman.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderJobList = () => (
    <div className="min-h-screen bg-slate-50 py-12 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-900">Lowongan Tersedia</h2>
          <p className="text-slate-600 mt-2 text-lg">Temukan peluang yang sesuai dengan potensi Anda.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {JOB_DATA.map((job) => (
            <div 
              key={job.id} 
              onClick={() => handleJobClick(job)}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-200 p-6 cursor-pointer transition-all hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Briefcase className="w-24 h-24" />
              </div>
              
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className="bg-white border border-slate-100 p-2 rounded-lg shadow-sm h-14 w-14 flex items-center justify-center">
                  <img src={job.clientLogoUrl} alt={job.client} className="max-h-full max-w-full" />
                </div>
                <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100">
                  {job.type}
                </span>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 mb-4">{job.client}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <MapPin className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                    <span className="truncate">{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <Building2 className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                    <span className="truncate">{job.salaryRange || 'Gaji Kompetitif'}</span>
                  </div>
                </div>

                <div className="flex items-center text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                  Lihat Detail <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderJobDetail = () => {
    if (!selectedJob) return null;
    return (
      <div className="min-h-screen bg-slate-50 py-8 md:py-12 animate-in slide-in-from-right-8 duration-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setAppState(AppState.JOB_LIST)}
            className="mb-6 text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center transition-colors group"
          >
            <div className="bg-white p-2 rounded-full shadow-sm mr-2 group-hover:shadow-md transition-shadow">
               <ArrowLeft className="w-4 h-4" />
            </div>
            Kembali ke Daftar Lowongan
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            {/* Header Job Detail */}
            <div className="bg-slate-900 text-white relative p-8 md:p-10">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                     <div className="bg-white p-4 rounded-2xl h-24 w-24 flex items-center justify-center shrink-0">
                        <img src={selectedJob.clientLogoUrl} alt={selectedJob.client} className="max-h-full max-w-full" />
                     </div>
                     <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedJob.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
                           <span className="flex items-center"><Building2 className="w-4 h-4 mr-1.5" /> {selectedJob.client}</span>
                           <span className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> {selectedJob.location}</span>
                           <span className="bg-blue-600/30 text-blue-200 px-3 py-0.5 rounded-full border border-blue-500/50 text-xs font-semibold">{selectedJob.type}</span>
                        </div>
                     </div>
                  </div>
                  <button 
                     onClick={handleApplyClick}
                     className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                  >
                     Lamar Sekarang
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-slate-100">
               {/* Main Content */}
               <div className="lg:col-span-2 p-8 md:p-10 space-y-8">
                  <section>
                     <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">
                           <Briefcase className="w-4 h-4" />
                        </div>
                        Deskripsi Pekerjaan
                     </h3>
                     <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {selectedJob.description}
                     </p>
                  </section>

                  <section>
                     <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">
                           <CheckCircle2 className="w-4 h-4" />
                        </div>
                        Kualifikasi
                     </h3>
                     <ul className="space-y-3">
                        {selectedJob.requirements.map((req, idx) => (
                           <li key={idx} className="flex items-start text-slate-600 text-sm md:text-base">
                              <div className="min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-2 mr-3"></div>
                              {req}
                           </li>
                        ))}
                     </ul>
                  </section>
               </div>

               {/* Sidebar */}
               <div className="bg-slate-50 p-8 md:p-10 space-y-8">
                  <section>
                     <h3 className="text-lg font-bold text-slate-900 mb-4">Benefit</h3>
                     <ul className="space-y-3">
                        {selectedJob.benefits.map((benefit, idx) => (
                           <li key={idx} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                              <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                              <span className="text-slate-700 text-sm font-medium">{benefit}</span>
                           </li>
                        ))}
                     </ul>
                  </section>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                     <h4 className="font-bold text-blue-900 mb-2">Tertarik posisi ini?</h4>
                     <p className="text-blue-700/80 text-sm mb-4">Segera kirimkan lamaran Anda sebelum kuota terpenuhi.</p>
                     <button 
                        onClick={handleApplyClick}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors shadow-sm"
                     >
                        Lamar Posisi Ini
                     </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderApplyConfirm = () => {
    // Flow: "ketika klik lanjut langsung ke client, dan setelah client baru posisi yang ada"
    if (!selectedJob) return null;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 animate-in fade-in duration-300">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          
          <div className="p-8 md:p-12 text-center">
             <button 
                onClick={() => setAppState(AppState.JOB_DETAIL)}
                className="absolute top-6 left-6 text-slate-400 hover:text-slate-600"
             >
                <ArrowLeft className="w-6 h-6" />
             </button>

             {/* Client Section - Appears first visually */}
             <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                <div>
                   <span className="inline-block px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-bold tracking-wider uppercase mb-4">
                      Tujuan Lamaran
                   </span>
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="h-32 w-32 bg-white shadow-xl rounded-full flex items-center justify-center border-4 border-slate-50 p-4">
                     <img src={selectedJob.clientLogoUrl} alt={selectedJob.client} className="max-h-full max-w-full object-contain" />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-1">{selectedJob.client}</h2>
                  <p className="text-slate-500 text-sm">Mitra Klien Swapro</p>
                </div>
             </div>

             <div className="w-full h-px bg-slate-100 my-8"></div>

             {/* Position Section - Appears next */}
             <div className="space-y-6 animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
                <div>
                   <span className="text-slate-400 text-sm font-medium">Untuk Posisi:</span>
                   <h3 className="text-2xl font-bold text-blue-600 mt-1">{selectedJob.title}</h3>
                </div>
                
                <div className="inline-flex items-center justify-center gap-2 bg-slate-50 px-4 py-2 rounded-lg text-slate-600 text-sm">
                  <MapPin className="w-4 h-4" /> {selectedJob.location}
                </div>
             </div>

             <div className="pt-10 animate-in fade-in duration-700 delay-500 fill-mode-backwards">
               <button
                 onClick={handleConfirmApply}
                 className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
               >
                 Lanjut Isi Data Diri <ArrowRight className="w-5 h-5" />
               </button>
             </div>
          </div>
        </div>
      </div>
    );
  };

  const renderApplyForm = () => {
    if (!selectedJob) return null;
    return (
      <div className="min-h-screen bg-slate-50 py-12 animate-in slide-in-from-right-8 duration-500">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
           <button 
            onClick={() => setAppState(AppState.APPLY_CONFIRM)}
            className="mb-6 text-slate-500 hover:text-blue-600 text-sm font-medium flex items-center transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Kembali
          </button>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="bg-slate-900 px-8 py-6 text-white flex items-center justify-between">
               <div>
                  <h2 className="text-xl font-bold">Lengkapi Data Diri</h2>
                  <p className="text-slate-400 text-sm mt-1">Langkah terakhir sebelum terhubung ke WhatsApp PIC.</p>
               </div>
               <div className="bg-slate-800 p-2 rounded-lg">
                  <User className="w-6 h-6 text-blue-400" />
               </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
                  <div className="relative">
                     <User className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                     <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="Contoh: Budi Santoso"
                     />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                     <div className="relative">
                        <Mail className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                        <input
                           type="email"
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleInputChange}
                           className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                           placeholder="email@anda.com"
                        />
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
                     <div className="relative">
                        <Phone className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                        <input
                           type="tel"
                           name="phone"
                           required
                           value={formData.phone}
                           onChange={handleInputChange}
                           className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                           placeholder="08123456789"
                        />
                     </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Pendidikan Terakhir</label>
                     <div className="relative">
                        <GraduationCap className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                        <select
                           name="lastEducation"
                           value={formData.lastEducation}
                           onChange={handleInputChange}
                           className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                        >
                           {EDUCATION_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                     </div>
                   </div>
                   <div>
                     <label className="block text-sm font-medium text-slate-700 mb-1">Domisili Saat Ini</label>
                     <div className="relative">
                        <MapPin className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                        <input
                           type="text"
                           name="domicile"
                           required
                           value={formData.domicile}
                           onChange={handleInputChange}
                           className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                           placeholder="Kota tempat tinggal"
                        />
                     </div>
                   </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Link LinkedIn (Opsional)</label>
                  <div className="relative">
                     <Linkedin className="w-5 h-5 absolute left-3 top-3 text-slate-400" />
                     <input
                        type="url"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="https://linkedin.com/in/username"
                     />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Kirim Data & Lanjut ke WhatsApp
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Dengan mengirim data, Anda menyetujui kebijakan privasi Swapro Karir.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const renderSuccess = () => (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in zoom-in duration-300">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden text-center p-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Data Berhasil Disimpan!</h2>
        <p className="text-slate-600 mb-8">
          Langkah terakhir: Klik tombol di bawah ini untuk mengirim format lamaran langsung ke WhatsApp PIC.
        </p>
        
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" /> Buka WhatsApp Sekarang
        </button>
        
        <button 
           onClick={() => setAppState(AppState.JOB_LIST)}
           className="mt-4 text-slate-400 hover:text-slate-600 text-sm font-medium"
        >
           Kembali ke Beranda
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen flex flex-col">
      {appState !== AppState.SUCCESS && (
         <Navbar 
            onNavigateHome={() => setAppState(AppState.LANDING)}
            onNavigateJobs={() => setAppState(AppState.JOB_LIST)}
         />
      )}
      
      <main className="flex-grow">
        {appState === AppState.LANDING && renderLanding()}
        {appState === AppState.JOB_LIST && renderJobList()}
        {appState === AppState.JOB_DETAIL && renderJobDetail()}
        {appState === AppState.APPLY_CONFIRM && renderApplyConfirm()}
        {appState === AppState.APPLY_FORM && renderApplyForm()}
        {appState === AppState.SUCCESS && renderSuccess()}
      </main>
      
      {appState === AppState.LANDING && <Footer />}
      
      {/* AI Assistant is always available except in success screen */}
      {appState !== AppState.SUCCESS && (
        <AiAssistant currentContext={selectedJob ? `User sedang melihat posisi ${selectedJob.title} di ${selectedJob.client}` : undefined} />
      )}
    </div>
  );
};

export default App;