import Image from 'next/image'
import styles from './page.module.css'
import { AllProdacts } from '@/components'
import TopBar from '@/components/TopBar/TopBar'
import HeroSection from '@/components/HeroSection.tsx/Hero'
import AboutUs from '@/components/Aboutus/AboutUs'
import MoreInfo from '@/components/moreInfo/Moreinfo'
import Collection from '@/components/Collection/Colleection'
import Faq from '@/components/faq/Faq'
import Quality from '@/components/Quality/Quality'


export default function Home() {
  return (
    <div>
      <TopBar/>
      <HeroSection/>
      <AboutUs/>
      <MoreInfo/>
      <Collection/>
      <AllProdacts/>
      <Faq/>
      <Quality/>
      

    </div>

    
  )
}
