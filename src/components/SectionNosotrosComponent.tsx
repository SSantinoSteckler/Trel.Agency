import { useTemps } from '../hooks/useTemps';

export const SectionNosotrosComponent = () => {
  const { ref, numeros } = useTemps();

  return (
    <section
      id='section2'
      className='flex p-4 md:p-8 items-center justify-between flex-col md:flex-row min-h-svh'
      ref={ref}
    >
      <div className='p-5'>
        <div className='flex flex-col max-w-5xl gap-6'>
          <h2 className='text-custom-white text-2xl md:text-4xl font-semibold'>
            ¿Porque Confiar en nosotros? En Trel, entendemos la importancia de
            una presencia web sólida y efectiva
          </h2>
          <p className='text-custom-white max-w-4xl text-sm md:text-xl'>
            Contamos con un equipo de desarrolladores web altamente
            experimentados y capacitados, que están actualizados con las últimas
            tendencias y tecnologías del mundo digital.nos esforzamos por
            mantener los más altos estándares de calidad y excelencia en todo lo
            que hacemos.
          </p>
          <p className='text-custom-white max-w-4xl text-sm md:text-xl'>
            Nos tomamos el tiempo para entender las necesidades y objetivos
            específicos de su empresa. Trabajamos en estrecha colaboración con
            usted para desarrollar soluciones web personalizadas que se alineen
            perfectamente con su visión empresarial y sus requisitos.
          </p>
          <span className='text-custom-green  flex flex-row gap-2 items-center text-lg md:text-2xl cursor-pointer '>
            <a href='https://www.instagram.com/trel.agency/' target='_blank'>
              {' '}
              Sigue a Trel y su comunidad
            </a>

            <img src='./flecha.png' alt='arrow' className='max-w-6' />
          </span>
          <hr className='text-custom-green max-w-lg' />
        </div>
        <div className='bg-custom-white p-6 md:max-w-[550px] mt-5 flex flex-col gap-9 shadow-custom-black'>
          <div className='flex flex-col gap-3'>
            <span className='text-7xl h-6'>"</span>
            <p>
              Hay pintores que transforman el sol en una mancha amarilla, pero
              hay otros que con la ayuda de su arte y su inteligencia,
              transforman una mancha amarilla en el sol.
            </p>
            <p>
              La inspiracion existe, pero tiene que encontrarte trabajando.{' '}
            </p>
          </div>
          <div className='flex gap-3'>
            <img
              src='./picasso.jpg'
              alt='picasso-imagen'
              className='max-w-12 rounded-full object-cover border-2'
            />
            <div className='flex flex-col '>
              <strong>Pablo Picasso</strong>
              <span className='text-sm'>Pintor y escultor</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-custom-white flex flex-col gap-16 text-center max-w-3xl w-full p-5'>
        <hr />
        <div className='flex flex-col'>
          <span className='text-8xl  md:text-9xl relative right-6 text-custom-green flex justify-center items-center font-bold '>
            <span className='text-8xl text-custom-white'>+</span>
            {numeros.number1}
          </span>
          <p className='text-2xl md:text-3xl'>PROYECTOS </p>
        </div>

        <div>
          <span className='text-8xl md:text-9xl relative right-6 text-custom-green flex justify-center items-center font-bold'>
            <span className='text-8xl  text-custom-white'>+</span>{' '}
            {numeros.number2}
          </span>
          <p className='text-2xl md:text-3xl'>PLANTILLAS</p>
        </div>

        <div>
          <span className='text-8xl md:text-9xl relative right-8 text-custom-green flex justify-center items-center font-bold'>
            <span className='text-8xl  text-custom-white'>+</span>{' '}
            {numeros.number3}
          </span>
          <p className='text-2xl md:text-3xl'>PAISES</p>
        </div>
        <hr />
      </div>
    </section>
  );
};
