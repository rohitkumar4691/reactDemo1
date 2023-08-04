import React from 'react'
import "../styles/Home.scss"
import { Fragment } from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <Fragment>
    <div className='home' id='home'>
        <main>
        <h1>React Solutions</h1>
        <p>Concept demo for future react projects</p>
        </main>
    </div>
    <div className='home2'>
        <img src={vg} alt = "Graphics" />
        <div>
            <p>
            Random R&D :

            Elleptic Curve Cryptography : https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/

            Bitcoin from Scratch (Python) : https://karpathy.github.io/2021/06/21/blockchain/

            The Unreasonable Effectiveness of Recurrent Neural Networks : https://karpathy.github.io/2015/05/21/rnn-effectiveness/

            Hello Deep Learning : https://berthub.eu/articles/posts/hello-deep-learning-chapter1/
            </p>
        </div>
 </div>

    <div className='home3' id='about'>
    <div>
        <h1>Who we are?</h1>
        
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
        quis officiis fugit sunt dolores nostrum tenetur iusto est odio
        mollitia. Dolor placeat repellendus officia aspernatur dolorum
        harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
        quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
        voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
        ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
        aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
        nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
        similique maxime praesentium sunt unde necessitatibus voluptates
        ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
        qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
        sed cumque corporis voluptate quibusdam nostrum quod saepe
        </p>
        </div>
    </div>
    <div className="home4" id='brands'>

        <div><h1>Brands</h1>
        <article>
            <div style={{animationDelay : "0.3s",}}>
            <AiFillGoogleCircle />
            <p>Google</p>
            </div>
            <div style={{animationDelay : "0.5s",}}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </div>
            <div style={{animationDelay : "0.7s",}}>
            <AiFillYoutube />
            <p>Youtube </p>
            </div>
            <div style={{animationDelay : "1s",}}>
            <AiFillInstagram />
            <p>Instagram </p>
            </div>
        </article>
        </div>
    </div>
    </Fragment>
  )
}

export default Home