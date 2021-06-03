import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Words } from "./components/Words";
import { Distance } from "./components/Distance";
import { Letters } from "./components/Letters";
import { DistanceIncrease } from "./components/DistanceIncrease";
import { Speed } from "./components/Speed";
import { Start } from "./components/Start";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Training } from "./components/Training/Training";
import { css } from "@emotion/css";

export default function Home() {
  const [data, setData] = useState({
    words: "5",
    distance: "30",
    letters: "5",
    increaseDistance: "20",
    speed: "1",
  });

  const [starter, setStarter] = useState(false);
  const [randomWords, setRandomWords] = useState([]);
  const [notEnough, setNotEnough] = useState(false);

  useEffect(() => {
    if (!starter) {
      document.getElementById("speed").addEventListener("click", rewriteData);
      document.getElementById("speed3").addEventListener("click", rewriteData);
      document.getElementById("speed4").addEventListener("click", rewriteData);
      document.getElementById("speed5").addEventListener("click", rewriteData);
      document.getElementById("speed6").addEventListener("click", rewriteData);
    }
  });
  useEffect(() => {
    document.getElementById("words").addEventListener("change", rewriteData);
    document.getElementById("distance").addEventListener("change", rewriteData);
    document.getElementById("letters").addEventListener("change", rewriteData);
    document
      .getElementById("increaseDistance")
      .addEventListener("change", rewriteData);
  }, []);

  const rewriteData = () => {
    setData({
      words: document.getElementById("words").value,
      distance: document.getElementById("distance").value,
      letters: document.getElementById("letters").value,
      increaseDistance: document.getElementById("increaseDistance").value,
      speed: document.getElementById("speedText").innerHTML,
    });
    document.getElementById("speed").removeEventListener("click", saveData);
    document.getElementById("speed3").removeEventListener("click", saveData);
    document.getElementById("speed4").removeEventListener("click", saveData);
    document.getElementById("speed5").removeEventListener("click", saveData);
    document.getElementById("speed6").removeEventListener("click", saveData);
  };

  const saveData = () => {
    console.log(data);
    setData({
      words: document.getElementById("words").value,
      distance: document.getElementById("distance").value,
      letters: document.getElementById("letters").value,
      increaseDistance: document.getElementById("increaseDistance").value,
      speed: document.getElementById("speedText").innerHTML,
    });
    document.getElementById("speed").removeEventListener("click", saveData);
    document.getElementById("speed3").removeEventListener("click", saveData);
    document.getElementById("speed4").removeEventListener("click", saveData);
    document.getElementById("speed5").removeEventListener("click", saveData);
    document.getElementById("speed6").removeEventListener("click", saveData);

    let count = 0;
    let filteredArray = [];
    let a;
    let x;
    let po = [];

    for (let j = 0; j < poolOfWords.length; j++) {
      console.log(poolOfWords[j].length);
      if (poolOfWords[j].length.toString() === data.letters) {
        count += 1;
      }
    }
    console.log(count);
    for (let i = 0; i < data.words; i++) {
      console.log(count);
      //   if(data)
      if (data.words <= count) {
        x = Math.floor(Math.random() * poolOfWords.length);
        a = poolOfWords[x];
        console.log(a.length.toString(), data.letters);
        if (a.length.toString() === data.letters) {
          filteredArray[i] = a;
          po.push(poolOfWords[i]);
          poolOfWords.splice(x, 1);
        } else {
          i = i - 1;
        }
      } else {
        setNotEnough(true);
      }
    }
    console.log(filteredArray);
    setRandomWords(filteredArray);
    setStarter(true);
  };

  const poolOfWords = [
    "человек",
    "год",
    "время",
    "дело",
    "жизнь",
    "день",
    "рука",
    "раз",
    "работа",
    "слово",
    "место",
    "лицо",
    "друг",
    "глаз",
    "вопрос",
    "дом",
    "сторона",
    "страна",
    "мир",
    "случай",
    "голова",
    "ребенок",
    "сила",
    "конец",
    "вид",
    "система",
    "часть",
    "город",
    "отношение",
    "женщина",
    "деньги",
    "земля",
    "машина",
    "вода",
    "отец",
    "проблема",
    "час",
    "право",
    "нога",
    "решение",
    "дверь",
    "образ",
    "история",
    "власть",
    "закон",
    "война",
    "бог",
    "голос",
    "тысяча",
    "книга",
    "возможность",
    "результат",
    "ночь",
    "стол",
    "имя",
    "область",
    "статья",
    "число",
    "компания",
    "народ",
    "жена",
    "группа",
    "развитие",
    "процесс",
    "суд",
    "условие",
    "средство",
    "начало",
    "свет",
    "пора",
    "путь",
    "душа",
    "уровень",
    "форма",
    "связь",
    "минута",
    "улица",
    "вечер",
    "качество",
    "мысль",
    "дорога",
    "мать",
    "действие",
    "месяц",
    "государство",
    "язык",
    "любовь",
    "взгляд",
    "мама",
    "век",
    "школа",
    "цель",
    "общество",
    "деятельность",
    "организация",
    "президент",
    "комната",
  ];

  if (notEnough) {
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          margin: 0;
          padding: 0;
          height: 75px;
        `}
      >
        <div
          className={css`
            width: 1000px;

            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 75px;
            color: #2b3172;
            display: flex;
            justify-content: center;
          `}
        >
          Недостаточно слов в базе , что поделать
        </div>
      </div>
    );
  }

  if (!starter) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Тренажер «Поле Зрения»</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.header}>
            <h1 className={styles.title}>Тренажер Поле Зрения</h1>
            <div className={styles.imageWrapper}>
              <Image
                src="/Sirius.png"
                alt="Sirius"
                width={338}
                height={135}
                className={styles.sirius}
              />
            </div>
          </div>
          <div className={styles.grid}>
            <Words inputvalue={data.words} className={styles.card} />

            <Distance className={styles.card} />

            <Letters className={styles.card} />

            <DistanceIncrease className={styles.card} />
            <Speed className={styles.card} />
            <div onClick={saveData}>
              <Start className={styles.card} />
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    );
  }
  return <Training randomWords={randomWords} data={data} />;
}
