import { useState } from 'react'
import './App.css'

const openings = [
  (a, b) =>
    `${a}, her gece aynı rüyayı görüyordu: ${b} ile örülmüş bir labirent, sonunda bekleyen tanıdık bir siluet. O siluet, yıllar önce kaybettiği biriydi.`,
  (a, b) =>
    `Şehrin en eski kütüphanesinin bodrum katında, ${a} tozlu bir defterin arasına sıkışmış bir fotoğraf buldu. Fotoğrafta ${b} vardı — ve fotoğrafın arkasında ${a}'nın kendi el yazısıyla yazılmış bir tarih: henüz gelmemiş bir yılın tarihi.`,
  (a, b) =>
    `${a} mesleği gereği yalanlara alışıktı, ama ${b} ile ilk karşılaştığı gün duyduğu sessizlik, hiçbir yalandan daha rahatsız ediciydi. Çünkü ${b}, ${a}'nın sorularına cevap vermiyordu — sorularını bitirmeden yanıtlıyordu.`,
  (a, b) =>
    `Kasabanın yaşlıları ${b} hakkında konuşmayı reddederdi. ${a} nedenini anlamak için yirmi yıl bekledi. Cevabı bulduğunda, keşke hiç sormamış olmayı diledi.`,
  (a, b) =>
    `${a}, o mektubu açmamalıydı. İçinde tek bir cümle vardı: "${b} seni unutmadı." Sorun şu ki, mektubu gönderen kişi ${a}'nın ta kendisiydi — ve bunu hatırlamıyordu.`,
  (a, b) =>
    `İstanbul'un arka sokaklarında bir antikacı, ${a}'ya garip bir teklif sundu: ${b} ile ilgili her şeyi öğrenebilirsin, ama karşılığında bir anını vermek zorundasın. ${a} kabul etti. Verdiği anının ne olduğunu ise ancak çok geç fark etti.`,
]

const twists = [
  (a, b) =>
    `Gerçek, ${a}'nın düşündüğünden çok daha karanlıktı: ${b}, bir tesadüf değil, nesiller öncesinden kurgulanmış bir planın parçasıydı. Ve ${a}, bu planın hem kurbanı hem de mimarıydı.`,
  (a, b) =>
    `Araştırdıkça ${a}'nın gerçekliği çatırdamaya başladı. ${b}, yalnızca bir kavram değildi — başka bir zamanın, başka bir ${a}'nın bıraktığı bir izdi. Her iz, bir sonraki adımı gösteriyordu ama aynı zamanda bir önceki adımı siliyordu.`,
  (a, b) =>
    `${a} ipuçlarını birleştirdiğinde tüyler ürpertici bir örüntü ortaya çıktı: ${b} ile temas eden herkes, hayatının en kritik kararını bir gün içinde vermiş — ve hepsi aynı seçimi yapmıştı.`,
  (a, b) =>
    `En büyük sürpriz, ${b} ile ${a} arasındaki bağın mahiyetiydi. Onlar düşman ya da müttefik değildi; aynı bilincin, zamanın iki ucuna saçılmış iki yansımasıydı.`,
  (a, b) =>
    `Dönüm noktası beklenmedik yerden geldi: ${b}, yok olmaya başlıyordu — ama yok oldukça ${a}'nın hatırlaması imkânsız olan anıları geri geliyordu. Sanki biri, diğerinin unuttuklarından besleniyordu.`,
  (a, b) =>
    `${a} gerçeği öğrendiğinde dünya sessizleşti: ${b} hep oradaydı, her zaman. Değişen ${b} değildi — ${b}'yi göremeyen gözlerdi. Ve şimdi gözler açılmıştı, kapanması mümkün olmayan bir şekilde.`,
]

const endings = [
  (a, b) =>
    `Sonunda ${a} bir seçimle karşı karşıya kaldı: ${b} ile birlikte gerçeği dünyaya açmak ya da bu sırrı sonsuza dek gömmek. Her iki yol da bir bedel istiyordu — ve ${a}, bedelini çoktan ödemeye başlamıştı.`,
  (a, b) =>
    `Hikâyenin sonu yoktu, çünkü ${a} anladı ki ${b} bir son değil, sonsuz bir başlangıçtı. Her kapanan kapı, açılmamış bir başka kapının anahtarını taşıyordu. ${a} yürümeye devam etti — bu sefer korkuyla değil, merakla.`,
  (a, b) =>
    `${a}, her şeyi geride bırakabilirdi. Ama ${b}'nin fısıldadığı son cümle, geri dönüşü imkânsız kıldı: "Beni arayan herkes, aslında kendini arıyordu. Sen de buldun mu?" ${a} cevabı biliyordu ama söylemeye cesaret edemiyordu.`,
  (a, b) =>
    `Ve böylece ${a}, ${b} ile başlayan bu yolculuğun aslında bir döngü olduğunu kavradı. Başlangıç noktasına döndüğünde her şey aynıydı — tek farkla: artık ${a}, aynı kişi değildi. Hiçbir yolculuk, yolcusunu değiştirmeden bırakmaz.`,
  (a, b) =>
    `Son sayfa kapandığında ${a} fark etti: ${b}, bir cevap değilmiş hiçbir zaman. Doğru soruyu sormayı öğretmek için var olmuş. Ve doğru soru şuydu: "Ya tüm bildiklerim yanlışsa?" Bu soru, her şeyi yeniden başlattı.`,
  (a, b) =>
    `${a} bu hikâyeyi kimseye anlatamadı. Çünkü ${b} hakkında konuşmaya başlayan herkes, aynı rüyayı görmeye başlıyordu. Ve ${a}, bir başkasını daha o labirente çekmeye hazır değildi — en azından henüz.`,
]

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateStory(input1, input2) {
  const a = input1.trim()
  const b = input2.trim()
  const opening = pickRandom(openings)(a, b)
  const twist = pickRandom(twists)(a, b)
  const ending = pickRandom(endings)(a, b)
  return `${opening}\n\n${twist}\n\n${ending}`
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
          {story.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
