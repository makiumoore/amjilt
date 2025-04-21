"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname(); // `router.pathname`-ийн оронд
  const router = useRouter();

  const navigation = [
    { name: 'Бүгд', href: '/category/all' },
    { name: 'Програм хангамж', href: '/category/software' },
    { name: 'Компьютерийн хэрэглээ', href: '/category/computer-use' },
    { name: 'Интерьер дизайн', href: '/category/interior-design' },
    { name: 'Гадаад хэл', href: '/category/language' },
    { name: '3D анимейшн', href: '/category/3d-animation' },
    { name: 'График дизайн', href: '/category/graphic-design' },
    { name: 'Бизнес, менежмент', href: '/category/business-management' },
    { name: 'Бусад ур чадвар', href: '/category/other-skills' },
    { name: 'Хувь хүний хөгжил', href: '/category/personal-development' },
    { name: 'Үнэгүй хичээлүүд', href: '/category/free-courses' },
    { name: 'Санхүү', href: '/category/finance' },
    { name: 'СӨБ', href: '/category/early-education' },
    { name: 'ЭЕШ', href: '/category/eesh' },
    { name: 'танин мэдэхүй', href: '/category/general-knowledge' }
  ];


  return (
    <div className="flex flex-col h-full bg-white border-r w-64 py-4">
      <div className="px-6 pb-6">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white">
            {/* BookBase logo placeholder */}
          </div>
          <span className="ml-2 text-xl font-bold text-gray-800">Сургалт</span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center py-2 px-4 rounded-md ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
