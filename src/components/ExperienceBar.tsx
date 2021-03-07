import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {

  
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

  const percenteToNextLevel = Math.round((currentExperience * 100)/experienceToNextLevel);

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      
        { percenteToNextLevel > 0 ? 
          (
            <div>
              <div style={{ width: `${percenteToNextLevel}%` }} />
              <span 
                className={styles.currentExperience}
                style={{ left: `${percenteToNextLevel}%` }}>
                {console.log(experienceToNextLevel)}
                {currentExperience} xp
              </span>
            </div>
          ) : (
            <div>
              <div style={{ width: '0%' }} />
              <span 
                className={styles.currentExperience}
                style={{ left: '0%' }}>
                
                {currentExperience} xp
              </span>
            </div>
          )
        }

        
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}