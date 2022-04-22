import Image from 'next/image'

const About = () => {
  return (
    <div className='flex flex-col w-1/2 items-center justify-center space-y-4 m-auto'>
      <h1 className='font-bold text-3xl'>Sobre o Projeto</h1>
      <p className='text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <Image src="/images/charizard.png" width="300" height="300" alt='Charizard'/>
    </div>
  );
}
 
export default About;