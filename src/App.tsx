import React, { useState } from 'react';
import { 
  Clock, 
  Zap, 
  Smartphone, 
  X, 
  Instagram,
  Youtube,
  Send
} from 'lucide-react';

// VK icon
const VKIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.579 6.855c.14-.465 0-.805-.66-.805h-2.185c-.555 0-.81.295-.95.62 0 0-1.115 2.725-2.695 4.495-.51.51-.74.675-1.02.675-.14 0-.34-.165-.34-.63V6.855c0-.555-.16-.805-.62-.805h-3.43c-.345 0-.555.255-.555.495 0 .52.785.64.865 2.105v3.175c0 .695-.125.82-.4.82-.74 0-2.54-2.72-3.61-5.83-.21-.6-.42-.83-.98-.83H4.23c-.62 0-.74.295-.74.62 0 .58.735 3.46 3.42 7.27 1.79 2.6 4.32 4.01 6.62 4.01 1.38 0 1.55-.31 1.55-.845v-1.95c0-.62.13-.75.55-.75.31 0 .85.16 2.1 1.3 1.43 1.43 1.67 1.85 2.47 1.85h2.185c.62 0 .93-.31.75-.92-.2-.62-.91-1.52-1.86-2.58-.51-.6-1.27-1.25-1.5-1.57-.32-.38-.23-.55 0-.89.01 0 2.66-3.75 2.93-5.03z"/>
  </svg>
);

// TikTok icon
const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.58a6.34 6.34 0 0 0 10.86 4.7 6.34 6.34 0 0 0 1.68-4.29V9.89a7.44 7.44 0 0 0 4.42 1.43V8.34a4.84 4.84 0 0 1-2.37-1.65z"/>
  </svg>
);

// MAX icon
const MaxIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 1000 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g transform="matrix(0.1, 0, 0, -0.1, 3.722084, 1002.481353)" fill="currentColor" stroke="none">
      <path d="M4752 6905 c-760 -116 -1332 -675 -1531 -1497 -66 -273 -86 -488 -78 -861 10 -517 96 -969 234 -1239 52 -101 98 -148 146 -148 72 0 234 102 406 254 56 50 81 66 104 66 17 0 66 -21 117 -51 396 -228 803 -296 1245 -208 357 72 726 276 985 545 318 331 496 737 525 1199 12 191 -24 452 -92 655 -213 640 -760 1125 -1428 1266 -101 22 -153 26 -330 29 -148 3 -237 0 -303 -10z"/>
    </g>
  </svg>
);

// Android Icon
const AndroidIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
  </svg>
);

export default function App() {
  const [reelsMinutes, setReelsMinutes] = useState(45);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const potentialLessonsPerDay = Math.floor(reelsMinutes / 3.5);
  const potentialLessonsPerMonth = potentialLessonsPerDay * 30;

  // ========== ДЛЯ САЙТА спринтум.рф ==========
  const APK_URL = '/sprintum.apk';
  // ============================================

  // Скачивание Android APK
  const handleAndroidDownload = () => {
    setIsDownloading(true);
    
    try {
      window.location.href = APK_URL;
      
      setTimeout(() => {
        setIsDownloading(false);
      }, 1000);
    } catch (error) {
      console.error('Download error:', error);
      alert('❌ Ошибка при скачивании. Попробуйте позже.');
      setIsDownloading(false);
    }
  };

  // iPhone (заглушка)
  const handleIosDownload = () => {
    alert('📱 Версия для iPhone будет доступна скоро! Следите за обновлениями в наших соцсетях.');
  };

  // Social links
  const socialLinks = [
    { name: 'VK', url: 'https://vk.com/sptintum', icon: <VKIcon className="w-5 h-5" />, color: 'hover:text-blue-400' },
    { name: 'YouTube', url: 'https://youtube.com/channel/UCPkOjh9o_wU_Mid-4BVPCRg?si=0s3QmGgDLwAVXM_q', icon: <Youtube className="w-5 h-5" />, color: 'hover:text-red-500' },
    { name: 'Telegram', url: 'https://t.me/SptintUm', icon: <Send className="w-5 h-5" />, color: 'hover:text-sky-400' },
    { name: 'Instagram', url: 'https://www.instagram.com/sprintum1?igsh=cGY1bzY1ejdjaDF6', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-pink-500' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@sprinayun5p?_r=1&_t=ZN-978sB95JcoA', icon: <TikTokIcon className="w-5 h-5" />, color: 'hover:text-white' },
    { name: 'MAX', url: 'https://max.ru/join/MiFNuzMZ7zsj1LZWzce9PzHDO8NhjuQ6Fg-PuJKODoM', icon: <MaxIcon className="w-7 h-7" />, color: 'hover:text-violet-400' },
  ];

  return (
    <div className="min-h-screen bg-[#070D0F] text-[#ECEFF1] font-sans antialiased relative overflow-hidden flex flex-col justify-between">
      
      {/* Background auroras */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0 select-none">
        <div className="absolute top-[-250px] left-[-150px] w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-[-100px] right-[-150px] w-[550px] h-[550px] rounded-full bg-cyan-400/15 blur-[160px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-[#070D0F]/90 backdrop-blur-md border-b border-teal-950/40 relative">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="СпринтУм" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl font-black tracking-tight text-white leading-none mb-1">
                СпринтУм
              </span>
              <span className="text-[10px] text-[#10B981] font-bold uppercase tracking-widest leading-none">
                короткие видеокурсы
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsDownloadModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-[#070D0F] font-black text-xs px-5 py-2.5 rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-teal-500/10"
          >
            Скачать
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-4xl mx-auto px-6 pt-12 pb-24 relative z-10 flex-1 flex flex-col justify-center">
        
        {/* HERO */}
        <div className="text-center flex flex-col items-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Курсы для ума в формате <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              коротких видеоуроков
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
            Смотри концентрированные научно-познавательные ролики от одаренных школьников и сверстников, отвечай на быстрые интерактивные квизы и прокачивай интеллект на ходу.
          </p>

          {/* App buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md">
            <button 
              onClick={handleIosDownload}
              className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-[#0B1518] border border-[#16333A] text-white px-5 py-3.5 rounded-2xl transition-all font-semibold text-left cursor-pointer opacity-60 hover:opacity-80"
            >
              <svg className="w-6 h-6 text-white fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.16-.52 2.81-1.33z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-[#80A4AD] uppercase tracking-wider font-bold leading-none mb-1">Скоро</span>
                <span className="text-sm font-black text-white leading-none">iPhone</span>
              </div>
              <span className="ml-auto text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                Скоро
              </span>
            </button>

            <button 
              onClick={handleAndroidDownload}
              disabled={isDownloading}
              className="w-full sm:w-1/2 flex items-center justify-center gap-3 bg-[#0B1518] hover:bg-[#122429] border border-[#16333A] text-white px-5 py-3.5 rounded-2xl transition-all font-semibold hover:border-teal-500/40 text-left cursor-pointer active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AndroidIcon className="w-6 h-6 text-emerald-400 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="text-[9px] text-[#80A4AD] uppercase tracking-wider font-bold leading-none mb-1">Доступно для</span>
                <span className="text-sm font-black text-white leading-none">
                  {isDownloading ? 'Загрузка...' : 'Android'}
                </span>
              </div>
            </button>
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-6 pt-10 mt-6 border-t border-teal-950/40 w-full max-w-md justify-center">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <div className="text-left">
                <span className="block text-sm font-black text-white leading-none">3.5 минуты</span>
                <span className="text-[10px] text-slate-400">Средняя длина урока</span>
              </div>
            </div>
            <div className="w-px h-8 bg-teal-950" />
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <div className="text-left">
                <span className="block text-sm font-black text-white leading-none">Без оффтопа и воды</span>
                <span className="text-[10px] text-slate-400">Только факты и суть</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why short format works */}
        <section className="bg-[#050B0D] py-12 px-6 sm:px-8 border border-teal-950/40 rounded-3xl mb-16 text-left">
          <div className="max-w-2xl mx-auto mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
              Почему короткий формат действительно работает?
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Мы отказались от длинных лекций в пользу 3.5-минутных роликов с пиковой концентрацией пользы. И вот почему это намного эффективнее для обучения:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-emerald-500/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 font-bold text-sm">01</div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                Легкий старт
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Открыть 3-минутный ролик психологически намного проще, чем заставить себя сидеть над часовой лекцией. Мозг не испытывает страха перед сложным делом.
              </p>
            </div>

            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 font-bold text-sm">02</div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                Пик внимания
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Человеческий мозг удерживает максимальную фокусировку первые 3–4 минуты. Мы убрали вводные паузы и воду — оставили только плотные формулы и образы.
              </p>
            </div>

            <div className="bg-[#081114] p-5 rounded-2xl border border-teal-950/45 transition-all duration-300 hover:border-teal-500/30 hover:bg-[#0b161a]">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 font-bold text-sm">03</div>
              <h3 className="text-sm font-black text-white mb-2 uppercase tracking-wide flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-teal-400" />
                Обучение на ходу
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Формат легко встраивается в любое расписание: на перемене в школе, в автобусе или за завтраком. Короткие яркие сессии формируют сильную ежедневную привычку.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="bg-gradient-to-b from-[#0A181C] to-[#050D0F] border border-teal-900/30 rounded-3xl p-6 sm:p-8 text-left">
          <div className="max-w-xl mb-8">
            <span className="text-[10px] uppercase font-black tracking-widest text-[#10B981] bg-teal-500/10 px-3 py-1 rounded-full inline-block mb-3">
              Интерактивный счётчик пользы
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Оцени выгоду от «СпринтУм»
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Сколько минут в день ты тратишь на бессмысленное залипание в социальных сетях? Узнай, сколько реальных знаний ты мог бы получить вместо этого.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 bg-slate-950/40 p-5 rounded-2xl border border-teal-950/50">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-300">Минуты в Shorts/Reels ежедневно:</label>
                  <span className="text-sm font-black text-cyan-400">{reelsMinutes} мин</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="180" 
                  step="5"
                  value={reelsMinutes}
                  onChange={(e) => setReelsMinutes(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#122A2F] rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 минут</span>
                  <span>1.5 часа</span>
                  <span>3 часа</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0B1E22] border border-teal-500/10 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider block mb-4">Твой потенциал в СпринтУм</span>
                <div className="space-y-4">
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                      {potentialLessonsPerDay} {potentialLessonsPerDay === 1 ? 'урок' : potentialLessonsPerDay < 5 ? 'урока' : 'уроков'}
                    </span>
                    <span className="text-xs text-slate-400">Ты можешь изучить за один день</span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent block">
                      {potentialLessonsPerMonth} {potentialLessonsPerMonth % 10 === 1 ? 'тема' : 'тем'}
                    </span>
                    <span className="text-xs text-slate-400">Усвоенных важных научных концепций за месяц</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-teal-900/30 flex items-center gap-2 justify-start">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-300">Вместо глупой прокрастинации</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#040809] border-t border-teal-950/60 py-8 text-xs text-slate-400 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="СпринтУм" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-tight">СпринтУм</span>
                <span className="text-[9px] uppercase tracking-widest text-[#10B981] font-bold">короткие видеокурсы</span>
              </div>
            </div>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-400 transition-all duration-300 ${social.color} transform hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-slate-500 text-[10px] leading-relaxed text-center max-w-2xl mx-auto mt-2">
              Сайт разработан в рамках конкурса Техностартап-2026 командой Восход (Бойко Виталий, Гетманенко Евгений, Воронова Мария. Наставник: Красильников Алексей Петрович)
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#060D0F] border border-teal-900/40 rounded-3xl max-w-sm w-full p-6 text-center shadow-2xl relative">
            <button onClick={() => setIsDownloadModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
            
            <img 
              src="/logo.png" 
              alt="СпринтУм" 
              className="h-16 w-auto mx-auto mb-4"
            />
            
            <h3 className="text-xl font-black text-white mb-6">Бесплатная установка СпринтУм</h3>

            <div className="space-y-2.5">
              <button 
                onClick={handleIosDownload}
                className="w-full bg-[#0E2024] border border-teal-500/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer opacity-60 hover:opacity-80"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.84-.98 2.94 1.07.08 2.16-.52 2.81-1.33z" />
                </svg>
                Скачать для iPhone
                <span className="ml-auto text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  Скоро
                </span>
              </button>
              <button 
                onClick={handleAndroidDownload}
                disabled={isDownloading}
                className="w-full bg-[#0E2024] hover:bg-[#163036] border border-teal-500/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <AndroidIcon className="w-5 h-5 text-emerald-400" />
                {isDownloading ? 'Загрузка...' : 'Скачать для Android'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}