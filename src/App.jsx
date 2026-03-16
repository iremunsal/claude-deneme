import { useState } from 'react'
import './App.css'

const storyTemplates = [
  (a, b) =>
    `${a} adlı bir kahraman, ${b} ile dolu gizemli bir dünyada kaybolur. Tek çıkış yolu, ${b} hakkındaki tüm sırları çözmektir. Ancak her sır, onu daha derin bir maceraya sürükler...`,
  (a, b) =>
    `Uzak bir gelecekte, ${b} artık insanlığın en büyük sorunu haline gelmiştir. ${a}, bu sorunu çözmek için yola çıkan son umuttur. Yolculuğu sırasında ${b} ile ilgili beklenmedik bir gerçeği keşfeder...`,
  (a, b) =>
    `${a}, sıradan bir gün geçirirken aniden ${b} ile karşılaşır. Bu karşılaşma hayatını sonsuza dek değiştirecektir. Çünkü ${b}, aslında unutulmuş bir kehaneti tetikleyen anahtardır...`,
  (a, b) =>
    `Küçük bir kasabada yaşayan ${a}, bir gece ${b} hakkında tuhaf bir rüya görür. Ertesi sabah, rüyadaki her şeyin gerçek olduğunu fark eder. Şimdi ${b} ile yüzleşmek zorundadır...`,
  (a, b) =>
    `${a} adında bir dedektif, ${b} ile bağlantılı bir dizi gizemli olayı araştırmaktadır. Her ipucu onu daha karanlık bir komploya götürür. ${b}, sandığından çok daha tehlikeli bir sırrı barındırmaktadır...`,
  (a, b) =>
    `Yıl 2150. ${a}, ${b} konusunda uzmanlaşmış son bilim insanıdır. Bir deney sırasında ${b} beklenmedik bir şekilde canlanır ve ${a} ile konuşmaya başlar...`,
  (a, b) =>
    `${a}, çocukluğundan beri ${b} tarafından büyülenmiştir. Yıllar sonra, ${b} ile ilgili eski bir harita bulur. Harita onu dünyanın en uzak köşesine, unutulmuş bir medeniyetin kalıntılarına götürür...`,
  (a, b) =>
    `Bir fırtına gecesi, ${a} kapısının önünde ${b} ile ilgili şifreli bir mektup bulur. Mektubu çözdüğünde, ailesinin ${b} ile olan gizli bağını öğrenir ve tehlikeli bir yolculuğa çıkmak zorunda kalır...`,
]

function generateStory(input1, input2) {
  const index = Math.floor(Math.random() * storyTemplates.length)
  return storyTemplates[index](input1.trim(), input2.trim())
}

function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [story, setStory] = useState('')

  const handleGenerate = () => {
    if (input1.trim() && input2.trim()) {
      setStory(generateStory(input1, input2))
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleGenerate()
    }
  }

  return (
    <div className="app">
      <h1>Hikaye Konusu Üretici</h1>
      <p className="subtitle">İki kelime girin, size bir hikaye konusu üretelim!</p>

      <div className="input-group">
        <label htmlFor="input1">Karakter / İsim</label>
        <input
          id="input1"
          type="text"
          placeholder="Örn: Elif"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="input-group">
        <label htmlFor="input2">Tema / Nesne</label>
        <input
          id="input2"
          type="text"
          placeholder="Örn: gizemli orman"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button
        className="generate-btn"
        onClick={handleGenerate}
        disabled={!input1.trim() || !input2.trim()}
      >
        Hikaye Konusu Üret
      </button>

      {story && (
        <div className="result">
          <h2>Hikaye Konunuz</h2>
          <p>{story}</p>
        </div>
      )}
    </div>
  )
}

export default App
