export const FooterComponent = () => {
  return (
    <footer className='p-10 py-20 flex flex-row justify-around items-center flex-wrap gap-7'>
      <div className='text-custom-blue flex flex-col gap-3 font-semibold justify-center items-center'>
        <img src='./Trel.jpg' alt='trel' className='max-w-[200px]' />
        <span>📞Phone: +5491161023731</span>
        <span>📧Gmail: tler@gmail.com</span>
      </div>

      <div className='flex flex-col gap-3 cursor-pointer text-[20px] font-semibold'>
        <span>Privacy</span>
        <span>Cookies</span>
        <span>Terms</span>
        <span>Agency</span>
      </div>

      <div>
        <hr />
        <p className='font-bold text-1xl text-center'>
          &copy; {new Date().getFullYear()} Trel. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
