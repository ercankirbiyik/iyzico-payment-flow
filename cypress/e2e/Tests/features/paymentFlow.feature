Feature: iyzico Payment Flow Test Automation

## Bu test senaryosu koşulduğunda "(uncaught exception)TypeError: $ is not a function" hatası alınmaktadır.
## Bu hata nedeniyle test senaryosu başarılı bir şekilde çalıştırılamamaktadır.
## Bu hatanın iki sebebi olabilir:
## 1. jQuery kütüphanesi yüklenmemiştir.
## 2. jQuery kütüphanesi yüklenmiş olsa bile, sayfa yüklendikten sonra jQuery kütüphanesi yüklenmiş olabilir
## Uygulamada jQuery kullanılıyorsa, jQuery'nin doğru bir şekilde yüklendiğinden emin olamadım.
## HTML dosyasında <script> etiketleri ile kontrol edebiliriz ama ben kontrol etmeme rağmen sebebini bulamadım.

  @payment @smoke @regression
  Scenario: Successful Payment Flow with Credit Card
    Given I am on the iyzico demo page
    When I click on the second product
    And I click add to cart button
    And I click on the show basket icon
    And I click on the go to payment button
    And I select pay with debit or credit card payment option
    And I fill payment form with test card details
    And I click on the pay button
    Then I should see confirmation "Siparişin Alındı" message