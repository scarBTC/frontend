function header () {
    return (
        <header className='h-20 bg-my-yellow flex justify-around'>
        <div className=' text-5xl pt-3'>Instalatér</div>
        <nav className="leading-10 text-center pt-5">
            <ul >
              <li className="list-none inline-block leading-10 w-auto text-xl  hover:text-red-500"><a className="block pr-5" href="#">Služby</a></li>
              <li className="list-none inline-block leading-10 w-auto text-xl hover:text-red-500"><a className="block pr-5" href="#">Ceny</a></li>
              <li className="list-none inline-block leading-10 w-auto text-xl hover:text-red-500"><a className="block pr-5" href="#">Refernce</a></li>
              <li className="list-none inline-block leading-10 w-aut text-xl hover:text-red-500"><a className="block pr-5" href="#">Formulář</a></li>
            </ul>
          </nav>
      </header>
    );
  }
  
  export default header;