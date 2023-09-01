- Forklayın.
- Klonlayın
- Ana dizine gidin
- `npm install` ile dosyaları indirin
- `npm run dev` ile browser da developer sayfasını açın ;

-Bu proje next.js framework ve MUI , CHARTJS , ZUSTAND , REACT HOOK FORM kütüphaneleri ile yazılmıştır.
-css içinde style module kullandım

-Öncelikle next.js projesi kurulumunu gerçekleştirdim ardından dosyaları düzenledim gereksiz dosyalardan kurtuldum.
-page.jsx ve layout.jsx dosya içeriğini düzenledim.
-layout.jsx dosyasında header, main ve footer olmak üzere temel yapıyı oluşturdum.
-page.jsx dosyasında oluşturduğum componentleri tanımladım.
-ChartTable.jsx dosyasında chartjs yapısını oluşturdum useQuestionStore dosyasını importlayıp oradan datayı aldım, "doughnut" grafiğini kullanarak cinsiyet oran grafiği oluşturdum burada filter metodu kullanarak dizide ki cinsiyet sayılarını aldım ve grafikte ona göre oranladım.
-header dosyasında nav ve link taglerini kullanarak header kısmını oluşturdum.
-Questions.jsx dosyasında form yapısını oluşturdum cinsiyet kısmında radio yapısını kullandım geri kalan sorularda ise input kullandım inputlarda soruları dinamik bir şekilde alıyor o yüzden map metodu ile soruları döndürdüm soruları questions.js dosyasından import ederek bu dosyaya çektim ve kullandım.
-Her iki yapı içinde validasyon kullandım error mesajlarını tanımladım.
-useQuestionStore.js dosyasında zustand ı kurdum ve datayı orada tutmak için de Questions.jsx submit içinde formData yı setData ya gönderdim böylelikle datayı zustand da tutabildim.
-mocks dosyasında da questions.js dosyasını yani soruları bulunduruyorum.
