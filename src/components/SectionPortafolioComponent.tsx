import { CardProyect } from './CardProyect';

export const SectionPortafolioComponent = () => {
  return (
    <section
      id='section3'
      className='min-h-screen p-6 pb-[100px] bg-custom-white justify-center'
    >
      <h2 className='text-center text-3xl md:text-6xl text-custom-black m-20 font-bold'>
        Nuestros Proyectos
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4'>
        <CardProyect></CardProyect>
        <CardProyect></CardProyect>
        <CardProyect></CardProyect>
        <CardProyect></CardProyect>
        <CardProyect></CardProyect>
        <CardProyect></CardProyect>
      </div>
    </section>
  );
};
