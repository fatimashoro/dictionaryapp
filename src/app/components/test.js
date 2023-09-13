import { useState } from "react";

export default function App() {
  const [lang , setLang] = useState('en')

  function changeLanguage(event){
    // i18n.changeLanguage(event.target.value)
    setLang(event.target.value)
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{lang}</p>
      <select value={lang} onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}