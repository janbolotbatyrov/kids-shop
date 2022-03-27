const AdBlock = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-rows-2 grid-flow-col gap-8 text-white text-3xl">
      <div className="h-72 flex  justify-center items-center cursor-pointer bg-slate-600">
        Акция
      </div>
      <div className="h-72 flex  justify-center items-center cursor-pointer bg-slate-600">
        Распродажа
      </div>
      <div className="h-72 flex  justify-center items-center cursor-pointer bg-slate-600">
        Новинка
      </div>
      <div className="h-72 flex  justify-center items-center cursor-pointer bg-slate-600">
        Хит продаж
      </div>
    </div>
  );
};

export default AdBlock;
