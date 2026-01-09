# 🚀 SZYBKI START - Web3Forms (BEZ REJESTRACJI!)

## Najszybsza metoda - 2 minuty setup:

### Krok 1: Pobierz Access Key
1. Wejdź na: **https://web3forms.com/**
2. Wpisz swój email: **contact@lofiwebstudio.pl**
3. Kliknij "Get Started for Free"
4. Sprawdź swoją skrzynkę email
5. Skopiuj **Access Key** z emaila (wygląda mniej więcej tak: `a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6`)

### Krok 2: Wklej Access Key do kodu
1. Otwórz plik: `src/app/components/ContactPage.tsx`
2. Znajdź linię 24: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
3. Zamień cały blok fetch na:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'WKLEJ_TUTAJ_SWOJ_ACCESS_KEY',  // 👈 Wklej tutaj klucz z emaila
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    subject: `Nowe zapytanie z portfolio - Pakiet: ${formData.package || 'Nie wybrano'}`,
    message: `
      Imię: ${formData.name}
      Email: ${formData.email}
      Telefon: ${formData.phone}
      Pakiet: ${formData.package || 'Nie wybrano'}
      
      Wiadomość:
      ${formData.message}
    `,
  }),
});
```

### Krok 3: Gotowe! ✅
Teraz formularze będą przychodzić na Twój email!

---

## Przykład kompletnego kodu:

Jeśli chcesz, mogę zaktualizować cały plik. Potrzebuję tylko Twojego Access Key z Web3Forms.

---

## Co dostaniesz:
- ✅ Darmowe na zawsze (nieograniczone formularze!)
- ✅ Natychmiastowe emaile
- ✅ Spam protection
- ✅ Działa z GitHub Pages
- ✅ Bez rejestracji konta
- ✅ Bez limitów miesięcznych

---

## Testowanie lokalnie:
```bash
npm run dev
```
Wypełnij formularz i sprawdź email!

