import ContactForm from './contactForm.js';

function body () {
    return (
        <div Name='body' className='flex justify-center bg-my-gray'>
        <div className='m-8'>
          <h1 className='text-2xl text-my-yellow mb-5 font-bold'>Služby</h1>
            <h2 className='p-4 pr-44 bg-my-lightGray rounded-md text-2xl font-bold'>Opravy</h2>
            <h2 className='p-4 pr-20 bg-my-lightGray rounded-md text-2xl font-bold mt-6'>Instalace boileru</h2>
            <h2 className='p-4 pr-20 bg-my-lightGray rounded-md text-2xl font-bold mt-6'>Pokládání trubek</h2>
            <h2 className='p-4 pr-20 bg-my-lightGray rounded-md text-2xl font-bold mt-6'>Další po domluvě</h2>
        </div>
        <div className='m-8'>
          <h1 className='text-2xl text-my-yellow text-center mb-5 font-bold'>Formulář</h1>
          <ContactForm/>
        </div>
    </div>
    );
}

export default body;