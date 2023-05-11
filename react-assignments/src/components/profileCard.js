import { Fragment } from 'react'
import styles from './profileCard.module.css'

export default function ProfileCard(){
    return(
        <Fragment>
        <div className={styles.mainContent}>
            <h1>Know your mentors</h1>
            <p>Work with a mentor senior data scientists from top companies who closely looks at your progress, gives you personalized feedback and helps you fill gaps in your knowledge.</p>
        </div>

        <div className={styles.wrapper}>
            
                <div className={styles.card}>
                 <img src="https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fpritesh.3b7c44ee9f2c717c5301037740bb6eb6.jpeg&w=1920&q=75"></img>
                 <h3>Pritesh Kumar , IIT Delhi</h3>
                 <p>CTO @ FunctionUp</p>   
                 </div>
                
                <div className={styles.card}> 
                 <img src="https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanubhav.6a3b4e1b4097967be9b5418ab786f1ce.jpeg&w=1920&q=75"></img>
                 <h3>Anubhav Singh , IIT Kanpur</h3>
                 <p>Co-founder @ Dubdub.ai</p>   
                </div>

                <div className={styles.card}> 
                <img src="https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906235709x512347696206974850%2FMentor-4.jpeg&w=1920&q=75"></img>
                <h3>Aviral Sharma , IIT Delhi</h3>
                <p>Data Scientist Manager @ Optum</p>
                </div>

                <div className={styles.card}> 
                <img src="https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906303309x809592985984049700%2F1517597437249.jpeg&w=1920&q=75"></img>
                <h3>Rahul Garg , IIT Kanpur</h3>
                <p>Co-founder @ Dubdub.ai</p>
                </div>

                <div className={styles.card}> 
                <img src="https://functionup.org/_next/image?url=http%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1672906339831x204777177063368830%2F1669699961094.jpeg&w=1920&q=75"></img>
                <h3>Uddhav Bamba , IIT Dhanbad</h3>
                <p>Applied Scientist @ Amazon</p>
                </div>

                <div className={styles.card}> 
                <img src="https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fanchal.b2ab3290c2c9167be3c3ca3a0487eff9.jpeg&w=1920&q=75"></img>
                <h3>Anchal Jaiswal,IIT Kanpur</h3>
                <p>Senior Data Scientist @ Tredence</p>
                </div>

                <div className={styles.card}> 
                <img src="https://functionup.org/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fmentors%2Fgaurav.72b71c73fd8e8ddd0a5e0ec77acdec55.jpeg&w=1920&q=75"></img>
                <h3>Gaurav Agarwal,IIT Delhi</h3>
                <p>Senior Engineer @ Uber California</p>
                </div>

             
        </div>
        </Fragment>
    )
}