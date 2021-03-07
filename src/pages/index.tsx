import React from 'react';

import Head from 'next/head';

import { GetServerSideProps } from 'next';

import { CompletedChalenges } from '../components/CompletedChalenges';
import { ChallengBox } from '../components/ChallengeBox';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';

import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';
import styles from '../styles/pages/Home.module.css'


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}


export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}

    >
      <div className={styles.container}>
        <Head>
          <title> Pomodoro | VBianchi </title>
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
    </ChallengesProvider>  
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
  let hasLevel = level !== null ? level : 0;
  let hasCurrentExperience = currentExperience !== null ? currentExperience : 0;
  let hasChalengesCompleted = challengesCompleted !== null ? challengesCompleted : 0;

  return {
    props: {
      level: Number(hasLevel),
      currentExperience: Number(hasCurrentExperience),
      challengesCompleted: Number(hasChalengesCompleted),
    }
  }
}
