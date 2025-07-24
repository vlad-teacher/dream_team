import React, { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import "./App.css";

const categories = {
  cars: [
    "Lada", "Mercedes", "Toyota", "Nissan", "BMW", "Audi", "Volkswagen",
    "Hyundai", "Kia", "Skoda", "Renault", "Ford", "Chevrolet", "Mazda",
    "Mitsubishi", "Subaru", "Honda", "Volvo", "Opel", "Peugeot", "Fiat",
    "Citroen", "Suzuki", "Lexus", "Infiniti", "Land Rover", "Porsche",
    "Jaguar", "Maserati", "Alfa Romeo", "Aston Martin", "Bentley", "Bugatti",
    "Ferrari", "Lamborghini", "Mini", "Smart", "SsangYong", "Dodge",
    "Chrysler", "Jeep", "Cadillac", "Buick", "GMC", "Lincoln", "Acura",
    "Genesis", "MG", "Haval", "Chery", "Geely", "Changan", "BYD", "FAW",
    "Zotye", "Lifan", "Brilliance", "Dongfeng", "Jac"
  ],
  animals: ["Dog", "Cat", "Elephant", "Tiger", "Lion", "Fox", "Horse"],
  fruits: ["Apple", "Banana", "Mango", "Orange", "Grape", "Peach"],
  countries: ["Poland", "Germany", "Japan", "Brazil", "Canada", "Spain"],
  sports: ["Football", "Basketball", "Tennis", "Hockey", "Golf", "Boxing"],
  colors: ["Red", "Green", "Blue", "Yellow", "Black", "White", "Orange"],
  movies: ["Titanic", "Inception", "Avatar", "Gladiator", "Joker", "Interstellar"],
  instruments: ["Guitar", "Piano", "Violin", "Drums", "Flute", "Saxophone"]
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("cars");
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [input, setInput] = useState("");
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);

  const correctAudio = useRef(null);
  const wrongAudio = useRef(null);
  const winAudio = useRef(null);
  const loseAudio = useRef(null);
  const music = useRef(null);

  useEffect(() => {
    correctAudio.current = new Audio("/sounds/correct.mp3");
    wrongAudio.current = new Audio("/sounds/wrong.mp3");
    winAudio.current = new Audio("/sounds/win.mp3");
    loseAudio.current = new Audio("/sounds/lose.mp3");
    music.current = new Audio("/sounds/bg-music.mp3");

    music.current.loop = true;
    music.current.volume = 0.3;

    const playMusic = () => {
      if (!musicStarted) {
        music.current.play()
          .then(() => {
            setMusicStarted(true);
            setMusicPlaying(true);
          })
          .catch((err) => {
            console.log("Не удалось запустить музыку:", err);
          });
      }
    };

    window.addEventListener("click", playMusic, { once: true });
    startGame();

    return () => {
      window.removeEventListener("click", playMusic);
      music.current?.pause();
    };
  }, []);

  useEffect(() => {
    if (!gameOver && word) {
      const allGuessed = word.split("").every((l) => guessedLetters.includes(l));
      if (allGuessed) {
        setWin(true);
        setGameOver(true);
        winAudio.current.play();
      }
      if (mistakes >= 3) {
        setGameOver(true);
        loseAudio.current.play();
      }
    }
  }, [guessedLetters, mistakes, word, gameOver]);

  const startGame = () => {
    const currentWords = categories[selectedCategory];
    const randomWord = currentWords[Math.floor(Math.random() * currentWords.length)];
    setWord(randomWord.toUpperCase());
    setGuessedLetters([]);
    setInput("");
    setMistakes(0);
    setGameOver(false);
    setWin(false);

    if (music.current && music.current.paused && musicStarted) {
      music.current.play().catch(() => {
        console.log("Повторный запуск музыки не удался");
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const letter = input.toUpperCase();
      if (letter && /^[A-ZА-Я]$/.test(letter) && !gameOver) {
        if (word.includes(letter)) {
          if (!guessedLetters.includes(letter)) {
            setGuessedLetters((prev) => [...prev, letter]);
            correctAudio.current.play();
          }
        } else {
          setMistakes((prev) => prev + 1);
          wrongAudio.current.play();
        }
      }
      setInput("");
    }
  };

  const toggleMusic = () => {
    if (music.current) {
      if (music.current.paused) {
        music.current.play();
        setMusicPlaying(true);
      } else {
        music.current.pause();
        setMusicPlaying(false);
      }
    }
  };

  const renderWord = () => {
    return word.split("").map((letter, index) => (
      <span key={index} className="letterSpan">
        {guessedLetters.includes(letter) ? letter : "_"}
      </span>
    ));
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h3>Choose Category</h3>
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`category-button ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => {
              setSelectedCategory(cat);
              setTimeout(startGame, 100);
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <button className="sound-toggle" onClick={toggleMusic}>
        {musicPlaying ? "🔊" : "🔇"}
      </button>

      <Header word={word} guessedLetters={guessedLetters} wrongCount={mistakes} />

      <img
        src={`/img/image(${mistakes + 1}).png`}
        alt="Hangman"
        className="hangman-img"
      />

      <div className="word">{renderWord()}</div>

      {!gameOver && (
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          disabled={gameOver}
        />
      )}

      {gameOver && (
        <div className="end-screen">
          <h2>{win ? "You Win!" : "Game Over!"}</h2>
          <p>The word was: {word}</p>
          <button onClick={startGame} className="restart-button">
            Start a New Game
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
