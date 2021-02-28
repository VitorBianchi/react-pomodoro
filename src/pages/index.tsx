import React from 'react'
import { CompletedChalenges } from '../components/CompletedChalenges'
import { ChallengBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import Head from 'next/Head'


import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext'


export default function Home() {
  return (
    <div className={styles.container}>
      
      <Head>
        <title> Start | Move.it </title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChalenges />
            <Countdown />
          </div>
          <div>
            <ChallengBox />
          </div>
        </section>
      </CountdownProvider>

    </div>
  )
}
