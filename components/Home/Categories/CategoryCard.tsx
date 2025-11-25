import { CategoryType } from "@/types";
import Link from "next/link";
export default function CategoryCard({ category }: { category: CategoryType }) {
    const Icon = category.icon;
    return (
        <Link
            href={`/events?cat=${category.id}`}
            className="group relative"
        >
            {/* Background linear Orb (يتحرك مع الماوس قليلاً - تأثير عصري جداً) */}
            <div className="absolute -inset-1 bg-linear-to-r from-rose-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition duration-700"></div>
            {/* البطاقة الرئيسية */}
            <div className="
        relative h-full p-1
        bg-linear-to-br from-neutral-900 via-neutral-900/95 to-neutral-800/90
        rounded-3xl overflow-hidden
        border border-neutral-800
        backdrop-blur-xl
        shadow-2xl
        transition-all duration-500
        group-hover:border-rose-500/30
        group-hover:shadow-rose-500/10
      ">
                {/* خلفية داخلية متحركة قليلاً */}
                <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative bg-neutral-900/70 backdrop-blur-2xl rounded-3xl p-8 h-full flex flex-col items-center text-center">
                    {/* Icon Container مع تأثير 3D وتوهج قوي */}
                    <div className="
            relative mb-6 p-5
            rounded-2xl
            bg-linear-to-br from-neutral-800/80 to-neutral-900
            border border-neutral-700/50
            shadow-2xl 
            shadow-rose-500/20
            transition-all duration-500
            transform-gpu
            group-hover:rotate-3 group-hover:scale-110
          ">
                        {/* التوهج الخارجي للأيقونة */}
                        <div className="absolute inset-0 rounded-2xl bg-rose-500/20 blur-2xl scale-0 group-hover:scale-150 transition-transform duration-700"></div>

                        <Icon className="relative z-10 text-4xl text-rose-400 drop-shadow-lg 
              bg-linear-to-br from-rose-400 to-pink-400 bg-clip-text 
              group-hover:from-rose-300 group-hover:to-pink-300
              transition-all duration-500"
                        />
                    </div>

                    {/* العنوان */}
                    <h3 className="
            text-xl font-bold text-white mb-2
            bg-linear-to-r from-white to-neutral-300 bg-clip-text 
            group-hover:from-rose-300 group-hover:to-pink-300
            transition-all duration-500
          ">
                        {category.name}
                    </h3>

                    {/* العدد مع تأثير خفيف */}
                    <p className="
            text-rose-300 text-sm font-medium tracking-wider
            opacity-80 group-hover:opacity-100
            transition-all duration-500
          ">
                        {category.count.toLocaleString()} Events
                    </p>

                    {/* خط سفلي متحرك عند الهوفر */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-rose-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
            </div>
        </Link>
    );
}