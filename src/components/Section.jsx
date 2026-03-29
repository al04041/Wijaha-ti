function Section({ children, title, para, id }) {
  return (
    <section
      id={id}
      dir="rtl"
      className="w-[95%] md:w-[90%] mx-auto font-Playpen bg-gray-500/20 p-6 md:p-10 my-6 rounded-3xl md:rounded-4xl overflow-hidden"
    >
      {title && (
        <div className="text-center mb-6 text-black/70">
          <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        </div>
      )}

      <div className="flex flex-wrap justify-center items-stretch gap-4">
        {children ? (
          children
        ) : (
          <p className="text-lg md:text-xl text-center text-black/80 leading-relaxed max-w-3xl">
            {para}
          </p>
        )}
      </div>
    </section>
  );
}

export default Section;
