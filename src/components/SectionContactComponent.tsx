import { useState } from 'react';

export const SectionContactComponent = () => {
  const [state, setValue] = useState({
    name: '',
    email: '',
    text: '',
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setValue({
      ...state,
      [name]: value,
    });
  };

  console.log(state);

  return (
    <section
      id='section4'
      className='p-5 py-10 md:p-10 bg-port-map bg-contain  '
    >
      <div
        className='flex justify-center items-center w-full flex-col gap-6
      '
      >
        <h2 className='text-4xl md:text-6xl font-bold text-custom-white text-center'>
          Contactanos
        </h2>
        <form className='flex flex-col  gap-7 max-w-[550px] p-7 w-full max-h-[580px]'>
          <div className='flex flex-col gap-3'>
            <label className='text-custom-white text-xl ' htmlFor='name'>
              Nombre📁
            </label>
            <input
              name='name'
              type='text'
              className=' p-3 rounded-lg bg-custom-grey'
              placeholder='Ingresa tu nombre'
              value={state.name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label className='text-custom-white text-xl' htmlFor='email'>
              Email📧
            </label>
            <input
              name='email'
              type='text'
              className=' p-3 rounded-lg bg-custom-grey'
              placeholder='Ingresa tu email '
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='text-custom-white text-xl ' htmlFor='textarea'>
              Mensaje📩
            </label>
            <textarea
              name='text'
              className='p-3 h-40 rounded-lg bg-custom-grey'
              placeholder='Escribe tu propuesta'
              style={{ resize: 'none' }}
              value={state.text}
              onChange={handleChange}
            >
              {' '}
            </textarea>
          </div>
          <a
            href={`mailto:tler@gmail.com?subject=Consulta desde formulario de contacto trel&body=${
              state.name
            }${' '}
             ${state.text}`}
            className='cursor-pointer bg-custom-green text-custom-blue p-5 rounded-3xl border-2 border-custom-blue font-bold shadow-custom-black text-center hover:bg-custom-green-sweet transition-all'
          >
            ENVIAR🚀
          </a>
        </form>

        <div className=' text-custom-white max-w-40 flex flex-row justify-center gap-3'>
          <a
            href='https://www.linkedin.com/company/trel-agency/about/'
            target='_blanck'
          >
            {' '}
            <img
              src='./linkedin.png'
              alt='linkedin'
              className='max-w-14  md:max-w-20'
            />
          </a>
          <a href='https://www.instagram.com/trel.agency/' target='_blanck'>
            <img
              src='./instagram.png'
              alt='instagram'
              className='max-w-14  md:max-w-20'
            />
          </a>

          <a href='https://web.whatsapp.com/' target='_blanck'>
            <img
              src='./whatcontact.png'
              alt='whatsapp'
              className='max-w-14  md:max-w-20'
            />
          </a>
        </div>
      </div>
    </section>
  );
};
