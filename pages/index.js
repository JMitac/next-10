import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            A practical example of <a href="https://nextjs.org">Next-Image!</a>
        </h1>

        <h3>Without Next Image</h3>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          {/*<img src="./image-4k.png" width="300px" height="158px" alt=""/>
          <img src="./image-8k.png" width="300px" height="158px" alt=""/>*/}
        </div>
        

        <h3>With Next Image</h3>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          
          <h5>Layout - fill</h5>
          {/*<Image
            src="/image-4k.png"
            alt="image 4k"
            width={300}
            height={158}
          />
          <Image
            src="/image-8k.png"
            alt="image 8k"
            width={300}
            height={158}
          />*/}
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          
          <h5>Layout - fixed</h5>
          <Image
            src="/image-4k.png"
            alt="image 4k"
            layout="fixed"
            width={300}
            height={158}
          />
          <Image
            src="/image-8k.png"
            alt="image 8k"
            layout="fixed"
            width={300}
            height={158}
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          
          <h5>Layout - intrinsic</h5>
          <Image
            src="/image-4k.png"
            alt="image 4k"
            layout="intrinsic"
            width={300}
            height={158}
          />
          <Image
            src="/image-8k.png"
            alt="image 8k"
            layout="intrinsic"
            width={300}
            height={158}
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit neque porro, ratione autem esse iste, praesentium veritatis qui quos eligendi assumenda, aliquid dolorem! Ullam error dolor accusamus facere aut obcaecati!</p>
          
          <h5>Layout - responsive</h5>
          <Image
            src="/image-4k.png"
            alt="image 4k"
            layout="responsive"
            width={300}
            height={158}
          />
          <Image
            src="/image-8k.png"
            alt="image 8k"
            layout="responsive"
            width={300}
            height={158}
          />
        </div>
        

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
