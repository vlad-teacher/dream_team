import React from "react";

const Header = ({ word, guessedLetters, wrongCount }) => {
  return (
    <header>
      <div className="blockGallows">

         <img className="logoGallows" src="/img/logo.png" alt="#" width={120} height={120} />
  </div>
   

    
      <h1 className="tittle">
        {"GALLOWS".split("").map((char, index) => (
          <span
            key={index}
            className="jump"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {char}
          </span>
        ))}
      </h1>
    </header>
  );
};

export default Header;
