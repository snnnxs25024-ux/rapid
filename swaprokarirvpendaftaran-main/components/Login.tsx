
import React, { useState } from 'react';
import { ArrowLeft, Network, Cpu, Users, Hexagon } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onBack: () => void;
}

// Komponen ilustrasi minimalis dan profesional
const LoginIllustration = () => (
  <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
    {/* Subtle background glow */}
    <div className="absolute inset-0 bg-brand-50 rounded-full blur-3xl"></div>
    
    {/* Central Elements - Clean and Professional */}
    <div className="relative z-10 bg-white p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 shadow-sm">
            <Users size={24} strokeWidth={2} />
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
            <Network size={24} strokeWidth={2} />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm">
            <Cpu size={24} strokeWidth={2} />
          </div>
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 shadow-sm">
            <Hexagon size={24} strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-100 rounded-full opacity-50 blur-xl"></div>
    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
  </div>
);


export const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // HARDCODED CREDENTIALS
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      setError('ID Pengguna atau Kata Sandi salah!');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative flex flex-col md:flex-row w-full max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Sisi Kiri - Ilustrasi */}
        <div className="w-full md:w-1/2 bg-white p-8 sm:p-12 flex flex-col justify-center items-center text-slate-800 relative border-r border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white opacity-80"></div>
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>

            <div className="relative z-10 text-center w-full">
                <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="inline-block mb-12 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <img 
                        src="https://i.imgur.com/ASLIsER.png" 
                        alt="Logo Rapid Technology" 
                        className="w-48 h-auto object-contain" 
                    />
                </a>
                <div className="w-full max-w-xs mx-auto mb-10">
                    <LoginIllustration />
                </div>
                <h1 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">
                    Rapid Tech Portal
                </h1>
                <p className="text-slate-500 max-w-xs mx-auto mb-6">
                    Sistem Manajemen SDM & IT Terpadu.
                </p>
                <div className="text-xs text-slate-400 border-t border-gray-200 pt-6 mt-6">
                    Dipercaya oleh 100+ perusahaan di Indonesia
                </div>
            </div>
        </div>

        {/* Sisi Kanan - Formulir */}
        <div className="w-full md:w-1/2 p-8 sm:p-16 flex flex-col justify-center bg-white">
            <div className="w-full max-w-sm mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Selamat Datang Kembali</h2>
                <p className="text-slate-500 mb-8">Silakan masuk untuk melanjutkan.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">ID Pengguna</label>
                        <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Masukkan ID"
                        autoFocus
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Kata Sandi</label>
                        <input 
                        type="password" 
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm text-center bg-red-50 p-3 rounded-lg border border-red-200 animate-shake">
                        {error}
                        </div>
                    )}

                    <button 
                        type="submit"
                        className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 hover:-translate-y-0.5"
                    >
                        Masuk
                    </button>
                </form>

                <div className="text-center mt-8">
                    <button 
                        onClick={onBack}
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft size={16} /> Kembali ke Beranda
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
