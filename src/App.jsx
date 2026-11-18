import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import styles from './App.module.css';
function App() {
  return (
    <>
  <div className={styles.appContainer}>
      <Header />
      <main className={styles.cardsContainer}>
        <ProfileCard 
          name="ישראל ישראלי" 
          description="מפתח תוכנה וסטודנט למדעי המחשב" 
          avatar="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" 
          type="Student" 
        />
        <ProfileCard 
          name="שרה כהן" 
          description="מרצה בכירה לפיתוח ותכנות" 
          avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" 
          type="Teacher" 
        />
        <ProfileCard 
          name="דוד לוי" 
          description="חבר טוב ושותף לפרויקטים" 
          avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150" 
          type="Friend" 
        />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
