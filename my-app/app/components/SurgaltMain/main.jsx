import Image from 'next/image'

const books = [
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    image: '/images/psychology-of-money.jpg',
  },
  {
    title: 'How Innovation Works',
    author: 'Matt Ridley',
    image: '/images/how-innovation-works.jpg',
  },
  {
    title: 'Company of One',
    author: 'Paul Jarvis',
    image: '/images/company-of-one.jpg',
  },
  {
    title: 'Stupore E Tremori',
    author: 'Amelie Nothomb',
    image: '/images/stupore-e-tremori.jpg',
  },
  // Хэрвээ илүү олон ном нэмэх бол энд нэмж болно
]

export default function SurgaltMain() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recommended</h2>

      <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
        {books.map((book, index) => (
          <div
            key={index}
            className="min-w-[160px] bg-white rounded-lg shadow p-3 flex-shrink-0"
          >
            <div className="relative w-full h-56 mb-3">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="text-sm font-medium text-gray-900 truncate">{book.title}</h3>
            <p className="text-xs text-gray-600">{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
