import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChalenges.module.css'

export function CompletedChalenges(){

  const { challengesCompleted } = useContext(ChallengesContext);

  return(
    <div className={styles.completedChalengesContainer}>
      <span>Desafios dsadasdasd completos</span>
      <span>{challengesCompleted ?? '0'}</span>
    </div>
  );
}