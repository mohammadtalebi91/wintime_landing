import { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpLeft,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  MapPin,
  Menu,
  PanelTop,
  Plus,
  Send,
  Sparkles,
  TrendingUp,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';

const faqs = [
  { question: 'آیا وین‌تایم برای آرایشگران مستقل هم مناسب است؟', answer: 'بله. وین‌تایم برای آرایشگران مستقل، متخصصان زیبایی و سالن‌های چندنفره طراحی شده است.' },
  { question: 'آیا برای استفاده نیاز به نصب نرم‌افزار دارم؟', answer: 'خیر. وین‌تایم تحت وب است و از هر موبایل یا کامپیوتری در دسترس شماست.' },
  { question: 'آیا می‌توانم اطلاعات مشتریانم را ثبت کنم؟', answer: 'بله. پروفایل مشتری، سابقه خدمات و یادداشت‌های مهم همیشه در یک نگاه در دسترس شماست.' },
  { question: 'آیا امکان ارسال پیامک یادآوری وجود دارد؟', answer: 'بله. یادآوری نوبت‌ها را به وین‌تایم بسپارید تا مشتریان باخبر بمانند.' },
];

const features = [
  { icon: CalendarDays, number: '۰۱', title: 'نوبت‌ها را منظم کنید', text: 'تقویم روزانه و هفتگی برای مدیریت سریع نوبت‌ها.' },
  { icon: UsersRound, number: '۰۲', title: 'مشتری‌ها را بهتر بشناسید', text: 'پروفایل و سابقه خدمات مشتریان همیشه در دسترس شماست.' },
  { icon: Bell, number: '۰۳', title: 'یادآوری را بسپارید به وین‌تایم', text: 'با یادآوری به‌موقع، نوبت‌های فراموش‌شده را کمتر کنید.' },
  { icon: BarChart3, number: '۰۴', title: 'عملکردتان را ببینید', text: 'گزارش‌های کاربردی برای شناخت بهتر درآمد و عملکرد.' },
];

const marketingFeatures = [
  { icon: Send, title: 'پیامک انبوه', text: 'به تمام مشتریانتان با یک کلیک پیام ارسال کنید.' },
  { icon: MapPin, title: 'هدف‌گیری منطقه‌ای', text: 'فقط مشتریان یک منطقه یا محله را هدف بگیرید.' },
  { icon: Zap, title: 'ارسال خودکار', text: 'کمپین‌های ارسال شده در زمان‌های مناسب، بدون دخالت شما.' },
  { icon: TrendingUp, title: 'تبلیغ و اطلاع‌رسانی', text: 'تخفیف، خدمت جدید یا تعطیلات را اطلاع دهید.' },
];

function ProductMockup({ large = false }: { large?: boolean }) {
  return (
    <div className={`product-window ${large ? 'product-window-large' : ''}`} dir="rtl">
      <div className="window-topbar">
        <div className="window-brand"><span className="brand-mark small">W</span><strong>وین‌تایم</strong></div>
        <div className="window-actions"><span /><span /><span /></div>
      </div>
      <div className="window-body">
        <aside className="mock-sidebar">
          <div className="mock-avatar">م</div>
          <div className="side-line active"><PanelTop size={15} /> <span>داشبورد</span></div>
          <div className="side-line"><CalendarDays size={15} /> <span>تقویم</span></div>
          <div className="side-line"><UsersRound size={15} /> <span>مشتریان</span></div>
          <div className="side-line"><BarChart3 size={15} /> <span>گزارش‌ها</span></div>
        </aside>
        <main className="mock-content">
          <div className="mock-heading">
            <div><span className="eyebrow">شنبه، ۲۱ مهر ۱۴۰۳</span><h3>صبح بخیر، مریم</h3></div>
            <button className="mock-add"><Plus size={14} /> نوبت جدید</button>
          </div>
          <div className="mock-stats">
            <div><span>نوبت‌های امروز</span><strong>۱۲</strong><small className="positive">+۱۲٪</small></div>
            <div><span>مشتریان جدید</span><strong>۰۸</strong><small className="neutral">این ماه</small></div>
            <div><span>درآمد امروز</span><strong>۸.۴<span>م</span></strong><small className="positive">+۱۸٪</small></div>
          </div>
          <div className="mock-section-head"><strong>نوبت‌های امروز</strong><span>مشاهده تقویم <ChevronLeft size={12} /></span></div>
          <div className="appointment-list">
            <div className="appointment"><div className="time">۱۰:۰۰</div><div className="client-avatar rose">س</div><div className="client"><strong>سارا محمدی</strong><span>رنگ و براشینگ</span></div><span className="status confirmed">تأیید شده</span></div>
            <div className="appointment"><div className="time">۱۲:۳۰</div><div className="client-avatar sand">ن</div><div className="client"><strong>نگار احمدی</strong><span>کوتاهی مو</span></div><span className="status pending">در انتظار</span></div>
            <div className="appointment"><div className="time">۱۵:۰۰</div><div className="client-avatar blue">ف</div><div className="client"><strong>فاطمه رضایی</strong><span>خدمات ناخن</span></div><span className="status confirmed">تأیید شده</span></div>
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="site-shell" dir="rtl">
      <header className="site-header">
        <nav className="nav container" aria-label="ناوبری اصلی">
          <a className="logo" href="#top" aria-label="وین‌تایم"><span className="brand-mark">W</span><span>وین‌تایم</span></a>
          <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#features" onClick={() => setMenuOpen(false)}>امکانات</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>نحوه کار</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>سوالات متداول</a>
            <div className="mobile-actions"><a href="#login">ورود</a><a className="button button-primary" href="#start">شروع رایگان <ArrowLeft size={16} /></a></div>
          </div>
          <div className="nav-actions"><a className="login-link" href="#login">ورود</a><a className="button button-primary button-small" href="#start">شروع رایگان <ArrowLeft size={15} /></a></div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero container">
          <div className="hero-copy">
            <div className="pill"><span className="pill-dot" /> مدیریت ساده، برای روزهای شلوغ</div>
            <h1>مدیریت سالن،<br /><em>ساده‌تر از همیشه</em></h1>
            <p>وین‌تایم ابزار ساده و مدرن مدیریت نوبت‌ها، مشتریان و درآمد برای سالن‌های زیبایی و آرایشگران است.</p>
            <div className="hero-actions"><a className="button button-primary button-large" href="#start">شروع رایگان <ArrowLeft size={18} /></a><a className="text-link" href="#features">مشاهده امکانات <ArrowUpLeft size={16} /></a></div>
            <div className="trust-line"><Check size={14} /> بدون نیاز به نصب <span /> <Check size={14} /> شروع سریع <span /> <Check size={14} /> مناسب موبایل</div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="floating-note note-top"><CalendarDays size={16} /><span>نوبت جدید ثبت شد</span><b>+۱</b></div>
            <div className="app-screenshot-wrap">
              <img
                src="/images/Screenshot_2026-10-06_at_11.20.44.png"
                alt="داشبورد وین‌تایم"
                className="app-screenshot"
              />
            </div>
            <div className="floating-note note-bottom"><div className="mini-bars"><i /><i /><i /><i /></div><span>رشد این ماه</span><b>+۲۴٪</b></div>
          </div>
        </section>

        {/* LOGO STRIP — GRAPHIC VERSION */}
        <section className="logo-strip">
          <div className="container strip-grid">
            <div className="strip-item">
              <div className="strip-icon-wrap strip-calendar">
                <CalendarDays size={22} strokeWidth={1.8} />
              </div>
              <div>
                <strong>نوبت‌ها</strong>
                <span>مدیریت روزانه و هفتگی</span>
              </div>
            </div>
            <div className="strip-div" />
            <div className="strip-item">
              <div className="strip-icon-wrap strip-users">
                <UsersRound size={22} strokeWidth={1.8} />
              </div>
              <div>
                <strong>مشتریان</strong>
                <span>پروفایل و سابقه خدمات</span>
              </div>
            </div>
            <div className="strip-div" />
            <div className="strip-item">
              <div className="strip-icon-wrap strip-income">
                <BarChart3 size={22} strokeWidth={1.8} />
              </div>
              <div>
                <strong>درآمد</strong>
                <span>گزارش و عملکرد مالی</span>
              </div>
            </div>
            <div className="strip-div" />
            <div className="strip-item">
              <div className="strip-icon-wrap strip-growth">
                <TrendingUp size={22} strokeWidth={1.8} />
              </div>
              <div>
                <strong>رشد</strong>
                <span>جذب مشتری و ارتباط مستمر</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section container" id="features">
          <div className="section-intro"><span className="section-kicker">همه‌چیز در یک نگاه</span><h2>همه چیز برای مدیریت روزمره،<br /><em>در یک جا</em></h2><p>ابزارهایی که هر روز به آن‌ها نیاز دارید؛ بدون پیچیدگی اضافه.</p></div>
          <div className="features-grid">
            {features.map(({ icon: Icon, number, title, text }) => (
              <article className="feature-item" key={number}>
                <div className="feature-top"><span className="feature-number">{number}</span><Icon size={21} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#showcase" aria-label={title}><ArrowUpLeft size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="showcase-section" id="showcase">
          <div className="container showcase-grid">
            <div className="showcase-copy">
              <span className="section-kicker">یک میز کار خلوت</span>
              <h2>کمتر مدیریت کنید،<br /><em>بیشتر روی مشتری تمرکز کنید.</em></h2>
              <p>کارهای تکراری مدیریت سالن را ساده کنید تا زمان بیشتری برای مشتری‌ها و رشد کسب‌وکارتان داشته باشید.</p>
              <div className="showcase-points">
                <div><span><Check size={14} /></span><strong>تقویم همیشه مرتب</strong></div>
                <div><span><Check size={14} /></span><strong>اطلاعات مشتری در یک نگاه</strong></div>
                <div><span><Check size={14} /></span><strong>گزارش‌های قابل فهم</strong></div>
              </div>
            </div>
            <div className="showcase-visual">
              <div className="showcase-backdrop" />
              <ProductMockup large />
            </div>
          </div>
        </section>

        {/* MARKETING SECTION */}
        <section className="marketing-section container" id="marketing">
          <div className="marketing-header">
            <div>
              <span className="section-kicker">ابزارهای مارکتینگ</span>
              <h2>مشتری جذب کنید،<br /><em>نه فقط مدیریت.</em></h2>
              <p>با ارسال پیامک هدفمند، مشتریان قدیمی را برگردانید و مخاطبان جدید را از محله‌های اطرافتان پیدا کنید.</p>
            </div>
            <a className="button button-primary button-large" href="#start">شروع رایگان <ArrowLeft size={18} /></a>
          </div>
          <div className="marketing-grid">
            {marketingFeatures.map(({ icon: Icon, title, text }) => (
              <div className="marketing-card" key={title}>
                <div className="marketing-icon"><Icon size={20} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="marketing-visual">
            <div className="sms-preview">
              <div className="sms-topbar"><div className="sms-avatar">W</div><div><strong>وین‌تایم</strong><span>ارسال پیامک</span></div></div>
              <div className="sms-bubble-wrap">
                <div className="sms-bubble outgoing">سلام، هفته‌ای ۱۵٪ تخفیف روی رنگ مو داریم. نوبت بگیرید!</div>
                <div className="sms-meta outgoing-meta">ارسال به ۱۴۸ مشتری</div>
                <div className="sms-bubble incoming">مرسی! همین الان نوبت میگیرم.</div>
                <div className="sms-bubble outgoing">خدمت جدید: لیفت ابرو اضافه شد. برای آشنایان تخفیف ویژه داریم!</div>
                <div className="sms-meta outgoing-meta">ارسال منطقه‌ای — محله نارمک</div>
              </div>
              <div className="sms-stats">
                <div><strong>۱۴۸</strong><span>پیام ارسالی</span></div>
                <div><strong>۳۲</strong><span>نوبت جدید</span></div>
                <div><strong>۲۱٪</strong><span>نرخ بازگشت</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="steps-section container" id="how-it-works">
          <div className="steps-heading"><span className="section-kicker">شروع ساده است</span><h2>شروع کار فقط چند دقیقه زمان می‌برد</h2></div>
          <div className="steps-grid">
            <div className="step"><span>۰۱</span><div><h3>ثبت‌نام کنید</h3><p>حساب خود را سریع ایجاد کنید.</p></div></div>
            <div className="step"><span>۰۲</span><div><h3>خدمات و نوبت‌ها را اضافه کنید</h3><p>اطلاعات اولیه کسب‌وکارتان را وارد کنید.</p></div></div>
            <div className="step"><span>۰۳</span><div><h3>مدیریت را شروع کنید</h3><p>همه‌چیز را از یکجا مدیریت کنید.</p></div></div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section container" id="start">
          <div className="cta-shape shape-one" /><div className="cta-shape shape-two" />
          <div className="cta-content"><Sparkles size={19} /><h2>سالن‌تان را ساده‌تر مدیریت کنید.</h2><p>همین امروز با وین‌تایم شروع کنید.</p><a className="button button-dark button-large" href="#login">شروع رایگان <ArrowLeft size={18} /></a></div>
        </section>

        {/* FAQ */}
        <section className="faq-section container" id="faq">
          <div className="faq-heading"><span className="section-kicker">پاسخ‌های کوتاه</span><h2>سوالات متداول</h2><p>هر سوالی دارید، احتمالاً اینجا جوابش هست.</p></div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={faq.question}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={18} /></button>
                {openFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-top">
          <div><a className="logo" href="#top"><span className="brand-mark">W</span><span>وین‌تایم</span></a><p>مدیریت ساده‌تر، برای کسب‌وکارهای زیبایی</p></div>
          <div className="footer-links"><a href="#features">امکانات</a><a href="#faq">سوالات متداول</a><a href="#login">ورود</a><a href="#start">شروع رایگان</a></div>
          <div className="instagram"><span>ما را دنبال کنید</span><strong>@wintime.ir</strong></div>
        </div>
        <div className="container footer-bottom"><span>© ۱۴۰۳ وین‌تایم. همه حقوق محفوظ است.</span><span>ساخته شده برای روزهای بهتر</span></div>
      </footer>
    </div>
  );
}

export default App;
