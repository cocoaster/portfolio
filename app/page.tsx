import Image from 'next/image' 
import CallToAction from '../components/CallToAction'

export const metadata = {
  title: 'HomeTheo Web Development',
  description: 'Web Site Development',
}
export default function Home() {
  return (
    <>
    <div className="main-home h-auto flex flex-col mx-4 lg:flex-row ">
      <section className='mt-5 md:w-2/5 md:mr-44 md:mx-4 xl:mt-56 xl:pl-6'>
      <sub className="blockquote text-base  mt-5 xl:text-3xl xl:pt-80 ">Élégance, efficacité, professionnalisme</sub>
      <p className='BusinessScript mt-16 xl:text-3xl xl:pr-16 xl:mt-32 xl:mb:48'>Notre agence met ses talents à votre disposition pour relier le monde à vos services avec un design sur mesure pour une communication impactante.</p>
      </section>
      <video className='mt-16 mb-10 bg-[length:200px_100px] bg-gray-950   md:w-2/5 md:ml-4'>
      </video>
      </div>
      <section className='mt-10 flex flex-col md:flex-row md:w-full md:items-start xl:mt-0  xl:items-start'>
        <div className="green-bottom-section flex flex-col xl:flex-col-reverse   ">
          <CallToAction />
          <p className="forWho mx-4 mb-16 px-4 py-6 opacity-60 font-bold w-fit h-auto xl:mx-6 xl:px-10 xl:mt-48 xl:mb-40">
          Avec notre expertise et notre engagement à fournir des services 
  de qualité supérieure, notre agence est l'endroit idéal pour toute 
  entreprise, institution, pour toute compagnie, artiste, artisan ou 
  association à la recherche d'un site web professionnel pour 
  optimiser sa présence en ligne. Contactez-nous dès aujourd'hui, 
  nous serons ravis de discuter avec vous de vos besoins pour vous
  aider  à atteindre vos objectifs en ligne en fonction de votre 
  budget.
          </p>
        </div>
        <div className="white-bottom-section bg-white pb-16 px-8 ">
          <div className="service-offers">
            <h2 className="title-services">CRÉATION DE SITES  
INTERNETS</h2>
            <Image
            src="/ICONbLACKlogo.svg"
            alt="Ometheo Logo"
            width={45}
            height={30}
            className="bullet-logo md:w-12 "
              priority={true}   >
              
            </Image>
            <p className="web-services">Nous vous offrons une expertise dans la création 
de sites web, de boutiques en ligne et d’applications 
avec des designs soignés, dynamiques, performants, 
originaux et modernes, adaptés aux besoins et aux 
goûts de vos clients cibles.<br /> Notre agence crée sur 
mesure des sites web sécurisés, performants,  
responsives,  garantissant une expérience utilisateur 
optimale sur tous les navigateurs et supports.</p>
          </div>
          <div className="service-offers">
            <h2 className="title-services">RÉALISATION DE TEASERS
VIDÉOS  & MOTION DESIGN</h2>
            <Image
            src="/ICONbLACKlogo.svg"
            alt="Ometheo Logo"
            width={45}
            height={30}
            className="bullet-logo md:w-12 "
              priority={true}   >
              
            </Image>
            <p className="web-services">Nous proposons également à nos clients des solutions 
uniques pour  vous aider  à présenter votre entreprise 
sous forme de reportages  publicitaires  vidéos,  ou sous 
forme d’animations pour une présentation plus 
attrayante et professionnelle.<br />
Notre agence a pour but d'offrir une expérience client 
de haute qualité en travaillant en étroite collaboration 
avec chaque client pour s'assurer que votre site web 
reflète parfaitement votre entreprise et réponde à vos 
besoins spécifiques.
</p>
          </div>
          <div className="service-offers">
            <h2 className="title-services">RÉFÉRENCEMENT NATUREL</h2>
            <Image
            src="/ICONbLACKlogo.svg"
            alt="Ometheo Logo"
            width={45}
            height={30}
            className="bullet-logo md:w-12"
              priority={true}   >
              
            </Image>
            <p className="web-services">Nous vous proposons nos  services et nos conseils 
d’optimisation SEO pour vous aider à améliorer la 
visibilité de votre site internet auprès de votre clientèle 
cible sur tous les moteurs de recherche. <br />
Nous procédons à l’analyse approfondie de vos 
services et de votre clientèle afin de définir une 
stratégie adaptée et efficace pour augmenter le trafic 
vers votre site web.</p>
          </div>
          <div className="service-offers">
            <h2 className="title-services">MAINTENANCE</h2>
            <Image
            src="/ICONbLACKlogo.svg"
            alt="Ometheo Logo"
            width={45}
            height={30}
            className="bullet-logo md:w-12 "
              priority={true}   >
              
            </Image>
            <p className="web-services">Nous vous offrons également des forfaits adaptés pour 
assurer la maintenance de votre site afin de  garantir sa
performance au niveau technique, au niveau de son 
référencement et de sa  sécurité dans le temps. Nos 
forfaits de maintenance  comprennent un support 
technique, des mises à jour régulières des composants 
de votre site, la surveillance de sa sécurité, la sauvegarde 
de votre site et de toutes vos données,  l’optimisation de 
sa performance  adaptée à l’évolution du trafic  de votre 
site. <br /> Nous vous proposons différents niveaux de forfaits 
de maintenance, adaptés à vos besoins et à votre budget .</p>
          </div>

        </div>

        </section>
      
    </>
    
    
  )
}
