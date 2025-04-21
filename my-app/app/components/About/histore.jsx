const histore = () => {

  const steps = [
    { number: "1", title: "2007", description: "AMJILT.COM" },
    { number: "2", title: "2015", description: "Сургалтын систем 'LMS'" },
    { number: "3", title: "2017", description: "AMJILT SMS VERSION 1 " },
    { number: "4", title: "2019", description: "AMJILT SMS/LMS VERSION 2" },
    { number: "5", title: "2024", description: "AMJILT SMS/LMS VERSION 3" }
  ];
  return (
    <section id="works" className="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto w-max_width">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">Түүхэн замнал</h2>
        <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
        Алсын хараа нь хүн төрөлхтний боловсролыг дэмжин хөгжүүлэхэд оршино.
        </p>
      </div>
      <div className="relative mt-12 lg:mt-20">
        <div className="absolute inset-x-0 hidden xl:px-38 top-2 md:block md:px-20 lg:px-24">
          <img 
            alt="Dotted line" 
            loading="lazy" 
            width="1300" 
            height="500" 
            decoding="async" 
            className="w-full" 
            style={{ color: 'transparent' }} 
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" 
          />
        </div>
        <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-12">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="text-xl font-semibold text-gray-700">{step.number}</span>
              </div>
              <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">{step.title}</h3>
              <p className="mt-4 text-base text-gray-400 md:text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div 
      className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" 
      style={{ background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)' }}
    ></div>
  </section>
  )
}

export default histore