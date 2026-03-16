import { useState } from 'react'
import './App.css'

const openings = [
  (a, b) =>
    `Kimse ${a} ile ${b} arasında bir bağlantı olabileceğini düşünmemişti — ta ki eski bir manastırın duvarlarında, ikisini aynı cümlede anan bir yazıt bulunana dek. Yazıt yüzlerce yıllıktı, ama mürekkebi hâlâ ıslaktı.`,
  (a, b) =>
    `Her şey, bir akademisyenin ${a} üzerine yaptığı araştırma sırasında ${b} ile ilgili açıklanamaz bir veriyle karşılaşmasıyla başladı. İki kavram birbirinden bu kadar uzakken, aynı denklemin iki yanında belirmesi imkânsız olmalıydı.`,
  (a, b) =>
    `${a} hakkında yazılmış en eski metin, son satırında ${b}'den söz ediyordu. Yüzyıllardır kimse bu satırı ciddiye almamıştı. Ama şimdi, o satırdaki kehanet kelimesi kelimesine gerçekleşiyordu.`,
  (a, b) =>
    `İstanbul'un kayıp arşivlerinde bir harita bulundu. Haritanın bir yüzünde ${a}'nın haritası, diğer yüzünde ${b}'nin şifresi vardı. İkisi üst üste konduğunda ortaya çıkan desen, bilinen hiçbir sembole benzemiyordu — ama herkes onu tanıyormuş gibi hissediyordu.`,
  (a, b) =>
    `${a} ile ${b}, görünürde birbirine zıt iki kavramdı. Ama bir gece yarısı radyo sinyalinde ikisi aynı frekansta titreşmeye başladı. Bu, bir tesadüf olamazdı — çünkü tesadüfler bu kadar kusursuz geometriler çizmezdi.`,
  (a, b) =>
    `Bir çocuk, okul defterinin kenarına ${a} ve ${b} yazdı, aralarına bir çizgi çekti. Ertesi gün öğretmeni o çizgiye baktığında rengi soldu. Çünkü o çizgi, yıllar önce kaybolmuş bir formülün eksik parçasıydı.`,
]

const twists = [
  (a, b) =>
    `Araştırma derinleştikçe ortaya sarsıcı bir örüntü çıktı: tarih boyunca ${a} güçlendiği her dönemde ${b} zayıflamış, ${b} yükseldiği her çağda ${a} gölgede kalmıştı. Sanki ikisi aynı terazinin iki kefesiydi — ve biri ağırlaştığında diğeri zorunlu olarak yükseliyordu.`,
  (a, b) =>
    `Gerçek, herkesin sandığından daha rahatsız ediciydi: ${a} ve ${b} birbirinin karşıtı değildi. Aynı şeyin, farklı zamanlara düşmüş iki gölgesiydi. Ve gölgelerin asıl sahibi — henüz kimsenin adını koymaya cesaret edemediği üçüncü bir kavram — uyanmak üzereydi.`,
  (a, b) =>
    `En tüyler ürpertici keşif şuydu: ${a} hakkında düşünmeye başlayan herkes, farkında olmadan ${b} hakkında da rüya görüyordu. Beyin taramaları bunu doğruluyordu — iki kavram, insan zihninde aynı nöral yolu paylaşıyordu. Sanki bilinç, ikisini ayırt edemiyordu.`,
  (a, b) =>
    `Dönüm noktası beklenmedik yerden geldi: ${a} kavramını dünyadan silmeye çalışan bir deney sırasında, ${b} de solmaya başladı. İkisinin arasındaki bağ, sebep-sonuç ilişkisinden çok daha derindi — biri olmadan diğeri var olamıyordu, tıpkı bir madalyonun iki yüzü gibi.`,
  (a, b) =>
    `Şifreyi çözen kişi delirdiğini sandı: ${a} ile ${b} arasındaki ilişki doğrusal değildi. ${b}, ${a}'nın geleceğiydi — ama aynı zamanda ${a}, ${b}'nin geçmişiydi. Bir zaman döngüsüne hapsolmuş iki kavram, birbirini sonsuz kere yeniden yaratıyordu.`,
  (a, b) =>
    `Veriler tek bir sonuca işaret ediyordu: ${a} ve ${b}, aslında aynı gerçeğin iki dilde söylenmiş haliydi. Biri insanlığın bilinçaltında, diğeri kolektif hafızasında yaşıyordu. Ve ikisi bir araya geldiğinde ortaya çıkan anlam, her iki kavramın da ayrı ayrı taşıdığı anlamdan tamamen farklıydı.`,
]

const endings = [
  (a, b) =>
    `Sonunda herkes bir seçimle karşı karşıya kaldı: ${a} ve ${b} arasındaki bu bağı dünyaya açıklamak, insanlığın bildiklerini kökünden sarsabilirdi. Ya da bu sır gömülürdü — ama bir kez görülen gerçeği unutmanın da bir bedeli vardı. Ve o bedeli ilk ödeyenler, gerçeği bulanlar olacaktı.`,
  (a, b) =>
    `Hikâyenin sonu yoktu. Çünkü ${a} ile ${b} arasındaki ilişki, anlaşıldıkça büyüyen bir muammaydı. Her cevap üç yeni soru doğuruyordu. Ve belki de asıl hikâye, cevapları aramak değil, soruların bizi nereye götürdüğüydü.`,
  (a, b) =>
    `Bu keşfi duyan son kişi, defterine tek bir cümle yazdı: "${a} ile ${b} aynı nehrin iki kıyısıdır. Nehri geçmeye çalışan boğulur, ama kıyıda kalanlar nehrin sesini ömür boyu duyar." Defteri kapattı ve bir daha açmadı — ama nehrin sesi, okuyanlara hâlâ ulaşıyor.`,
  (a, b) =>
    `Ve böylece ${a} ile ${b} yeniden ayrıldı — ama artık herkes biliyordu ki bu ayrılık geçiciydi. İkisi her karşılaştığında dünya biraz daha değişiyordu. Bir sonraki karşılaşma ne zaman olacaktı? Kimse bilmiyordu. Ama herkes hissediyordu: yakında.`,
  (a, b) =>
    `Aradan yıllar geçti. ${a} ve ${b} arasındaki bağı keşfeden ekipten kimse konuşmadı. Ama garip bir şey oldu: o günden sonra ${a} ile ${b}'yi aynı cümlede kullanan herkes, cümlesini bitirdikten sonra birkaç saniye duraklıyor, açıklayamadığı bir ürperti hissediyordu. Bazı gerçekler kelimelerden büyüktür.`,
  (a, b) =>
    `Son satır yazıldığında ortaya çıkan şuydu: ${a} ve ${b} ne birbirinin sebebi ne de sonucuydu. İkisi birlikte, insanlığın henüz adını koyamadığı daha büyük bir kavramın parçalarıydı. O kavramı anlamak, belki de bir sonraki yüzyılın işiydi. Ya da belki bir sonraki cümlenin.`,
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
      <p className="subtitle">İki tema girin, aralarındaki gizli bağı keşfedin!</p>

      <div className="input-group">
        <label htmlFor="input1">Birinci Tema</label>
        <input
          id="input1"
          type="text"
          placeholder="Örn: yalnızlık"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="input-group">
        <label htmlFor="input2">İkinci Tema</label>
        <input
          id="input2"
          type="text"
          placeholder="Örn: müzik"
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
