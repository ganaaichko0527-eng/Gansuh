import { motion } from "motion/react";
import { 
  Truck, 
  Factory, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  ChevronRight, 
  HardHat,
  Construction,
  CheckCircle2,
  Clock
} from "lucide-react";

const features = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: "Өндөр хүчин чадал",
    description: "Цагт 120М3 бетон зуурмаг үйлдвэрлэх хүчин чадалтай орчин үеийн үйлдвэр."
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Шуурхай хүргэлт",
    description: "Төслийн талбайд цаг алдахгүй, түргэн шуухай хүргэлтийн үйлчилгээ."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Чанартай зуурмаг",
    description: "Технологийн дагуу бэлтгэсэн, лабораторийн хяналттай чанартай бетон."
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    title: "Мэргэжлийн зөвлөгөө",
    description: "Төслийн талбайн онцлогт тохирсон мэргэжлийн зөвлөгөө, тусламж."
  }
];

const concreteGrades = [
  "M100", "M150", "M200", "M250", "M300", "M350", "M400", "M450"
];

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-industrial-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-slate-dark p-1.5 rounded">
                <Construction className="w-6 h-6 text-industrial-orange" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter uppercase">
                Metal <span className="text-industrial-orange">Remicon</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
              <a href="#features" className="hover:text-industrial-orange transition-colors">Давуу тал</a>
              <a href="#grades" className="hover:text-industrial-orange transition-colors">Марк</a>
              <a href="#contact" className="hover:text-industrial-orange transition-colors">Холбоо барих</a>
              <a 
                href="tel:91107777" 
                className="bg-industrial-orange text-white px-5 py-2 rounded-full hover:bg-orange-600 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                9110-7777
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden industrial-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-industrial-orange text-xs font-bold uppercase tracking-widest mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-industrial-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-industrial-orange"></span>
                </span>
                Улаанбаатар хотын зүүн бүс
              </div>
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[0.9] mb-6">
                ЧАНАРТАЙ <br />
                <span className="text-industrial-orange">БЕТОН ЗУУРМАГ</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                Барилга болон амины орон сууц барьж байгаа байгууллага, хувь хүмүүстэй хамтран ажиллана. Технологийн дагуу чанартай зуурмагийг цаг алдалгүй хүргэнэ.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-slate-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all flex items-center gap-2 group"
                >
                  Захиалга өгөх
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 px-6 py-4 border border-gray-200 rounded-lg bg-white">
                  <div className="text-sm">
                    <div className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">Хүчин чадал</div>
                    <div className="font-display font-bold text-xl">120М3 / Цаг</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://picsum.photos/seed/concrete-mixer/1200/900" 
                  alt="Concrete Mixer Truck" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-industrial-orange" />
                      <span className="font-bold">24/7 Хүргэлт</span>
                    </div>
                    <p className="text-sm text-gray-300">Төслийн талбайд цаг алдахгүй түргэн шуухай хүргэлт</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-industrial-orange/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-slate-dark/5 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-4">Яагаад биднийг сонгох вэ?</h2>
            <div className="w-20 h-1.5 bg-industrial-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 bg-[#F8F9FA] hover:bg-white hover:shadow-xl hover:border-industrial-orange/20 transition-all group"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-industrial-orange mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Grades Section */}
      <section id="grades" className="py-24 bg-slate-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-industrial-orange/5 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Бүх төрлийн <br />
                <span className="text-industrial-orange">Бетоны Марк</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Бид олон улсын стандартын дагуу M100-аас M450 хүртэлх бүх төрлийн бетоныг үйлдвэрлэж байна.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {concreteGrades.map((grade, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 border border-white/10 p-4 rounded-xl text-center font-display font-bold text-xl hover:bg-industrial-orange hover:border-industrial-orange transition-all cursor-default"
                  >
                    {grade}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-industrial-orange" />
                Үйлчилгээний нөхцөл
              </h3>
              <ul className="space-y-4">
                {[
                  "20км доторх тээврийн зардал багтсан",
                  "Төслийн талбайн мэргэжлийн зөвлөгөө",
                  "Лабораторийн баталгаажсан чанар",
                  "Уян хатан төлбөрийн нөхцөл",
                  "Тогтмол хамтын ажиллагааны хөнгөлөлт"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-industrial-orange shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-industrial-orange rounded-2xl text-slate-dark">
                <div className="font-bold text-lg mb-1">Тээврийн зардал</div>
                <p className="text-sm font-medium opacity-90">Улаанбаатар хотын зүүн бүсэд 20км доторх хүргэлт үнэгүй.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="lg:col-span-2 bg-slate-dark p-12 text-white">
                <h2 className="text-3xl font-display font-bold mb-8">Холбоо барих</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-industrial-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase font-bold tracking-widest mb-1">Хаяг</div>
                      <p className="font-medium">Улаанбаатар, Амгалан 60/1</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-industrial-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase font-bold tracking-widest mb-1">Утас</div>
                      <p className="font-medium text-xl">9110-7777</p>
                      <p className="font-medium text-xl">9695-7777</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-industrial-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 uppercase font-bold tracking-widest mb-1">Цагийн хуваарь</div>
                      <p className="font-medium">Даваа - Ням: 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-gray-400 text-sm">Бидэнтэй хамтран ажиллаж, бүтээн байгуулалтаа чанартай бетоноор хангаарай.</p>
                </div>
              </div>
              
              <div className="lg:col-span-3 p-12 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none industrial-grid"></div>
                <h3 className="text-2xl font-bold mb-8">Захиалга өгөх / Зөвлөгөө авах</h3>
                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Нэр</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all" placeholder="Таны нэр" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Утас</label>
                      <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all" placeholder="Холбоо барих утас" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Бетоны марк</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all appearance-none bg-white">
                      <option>Марк сонгох</option>
                      {concreteGrades.map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Зурвас</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-industrial-orange focus:ring-2 focus:ring-industrial-orange/20 outline-none transition-all" placeholder="Төслийн дэлгэрэнгүй мэдээлэл..."></textarea>
                  </div>
                  <button className="w-full bg-industrial-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                    Илгээх
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="bg-slate-dark p-1.5 rounded">
                <Construction className="w-5 h-5 text-industrial-orange" />
              </div>
              <span className="font-display font-bold text-lg tracking-tighter uppercase">
                Metal <span className="text-industrial-orange">Remicon</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Метал Ремикон ХХК. Бүх эрх хуулиар хамгаалагдсан.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-industrial-orange transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-industrial-orange transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
