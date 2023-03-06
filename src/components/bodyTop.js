import undrawEngineer from './undrawEngineer.svg';

function bodyTop () {
    return (
<div Name="bodyTop" className='h-auto bg-my-gray flex justify-evenly pt-36 pb-56'>
<div className='felx w-80'> 
  <h1 className='text-5xl text-my-white text-left'>Profesionalita. Rychlost. Spokojenost.</h1>
  <p className='text-xl mt-4 text-my-white text-left'>Lorem ipsum lorem ipsum dolor ipsum lo as c ver de la ipsum.</p>
  <div className='text-left'>
    <button className='text-3xl p-4 bg-my-yellow rounded-md mt-12'>+420 777 777 777</button>
  </div>
</div>
<div className=''>
  <img src={undrawEngineer} alt="engineer" className='h-80' />
</div>
</div>
    );
}

export default bodyTop;