# Iyzico Payment Flow Test Automation

Bu proje, Iyzico ödeme akışını otomatikleştirmek için Cypress ve Cucumber BDD kullanarak geliştirilmiştir. Kullanıcıların Iyzico demo sayfasında ürün seçip sepete eklemesini, ödeme sayfasına gitmesini ve test kart bilgileriyle ödeme yapmasını simüle eder.

## İçindekiler

- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Test Senaryoları](#test-senaryoları)
- [Notlar](#notlar)

## Kurulum

1. Projeyi klonlayın veya indirin:
   ```bash
   git clone https://github.com/ercankirbiyik/iyzico-payment-flow.git
   cd iyzico-payment-flow
   ```

2. Gerekli bağımlılıkları yüklemek için:
   ```bash
   npm install
   ```

## Kullanım

- Testleri başlatmak için:
  ```bash
  npm run cy:open
  ```
  veya
  ```bash
  npm run cy:tests
  ```

## Proje Yapısı

- **cypress/e2e/pages**: Test adımlarının ve sayfa nesnelerinin tanımlandığı dizin.
    - **BasePage.js**: Genel test işlemleri için yardımcı metotlar içerir.
    - **PaymentPage.js**: Ödeme sayfasına özgü işlemler için metotlar içerir.
    - **step_definitions**: Gherkin adımlarının tanımlandığı dosyalar.

- **cypress/e2e/Tests/features**: Gherkin dilinde yazılmış test senaryolarını içeren dosyalar.
    - **paymentFlow.feature**: Ödeme akışını test eden senaryoları içerir.

- **cypress/support**: Cypress yapılandırma ve destek dosyalarını içerir.
    - **index.js**: Testler sırasında gerekli olan global ayarları ve olay dinleyicilerini içerir.

## Test Senaryoları

- **Başarılı Ödeme Akışı**: Kullanıcı, Iyzico demo sayfasında bir ürün seçer, sepete ekler, ödeme sayfasına gider ve test kart bilgileriyle ödeme yapar. Ödeme başarılı olduğunda, kullanıcıya bir onay mesajı gösterilir.

## Notlar

- Proje, Cypress'in en son sürümü ve Cucumber preprocessor ile uyumlu olacak şekilde yapılandırılmıştır.
- Testler sırasında jQuery'nin yüklü olup olmadığını kontrol eden bir metot bulunmaktadır.
- Testler tamamlandıktan sonra, tarayıcıyı sıfırlamak için boş bir sayfaya yönlendirilir.

---