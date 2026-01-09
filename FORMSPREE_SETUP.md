# Konfiguracja wysyłania formularzy na email

## Opcja 1: Formspree (POLECANA - Darmowa i prosta) ✅

### Kroki konfiguracji:

1. **Zarejestruj się na Formspree**
   - Wejdź na: https://formspree.io/
   - Kliknij "Get Started" i zarejestruj się (darmowe konto wystarczy)

2. **Utwórz nowy formularz**
   - Po zalogowaniu kliknij "+ New Form"
   - Podaj nazwę formularza np. "Portfolio Contact Form"
   - Podaj swój email, na który mają przychodzić wiadomości: **contact@lofiwebstudio.pl**

3. **Skopiuj Form ID**
   - Po utworzeniu formularza zobaczysz coś w stylu: `https://formspree.io/f/xyzabc123`
   - Skopiuj część `xyzabc123` (to jest Twoje Form ID)

4. **Zaktualizuj kod**
   - Otwórz plik: `src/app/components/ContactPage.tsx`
   - Znajdź linię: `const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {`
   - Zamień `YOUR_FORM_ID` na swoje ID, np: `'https://formspree.io/f/xyzabc123'`

5. **Gotowe!** 🎉
   - Teraz wszystkie formularze będą przychodzić na Twój email
   - Formspree w darmowym planie pozwala na 50 wysłanych formularzy miesięcznie

### Przykład:
```typescript
const response = await fetch('https://formspree.io/f/xyzabc123', {
  method: 'POST',
  // ...
});
```

---

## Opcja 2: EmailJS (Alternatywa)

### Instalacja:
```bash
npm install @emailjs/browser
```

### Kroki:
1. Zarejestruj się na: https://www.emailjs.com/
2. Dodaj usługę email (Gmail, Outlook, etc.)
3. Utwórz szablon emaila
4. Skopiuj Service ID, Template ID i Public Key
5. Użyj w kodzie:

```typescript
import emailjs from '@emailjs/browser';

emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  },
  'YOUR_PUBLIC_KEY'
);
```

---

## Opcja 3: Web3Forms (Najprostsza bez rejestracji)

1. Wejdź na: https://web3forms.com/
2. Podaj swój email - dostaniesz Access Key na email
3. Zamień w `ContactPage.tsx`:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY_FROM_EMAIL',
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    package: formData.package,
    message: formData.message,
  }),
});
```

---

## Polecam Formspree, ponieważ:
- ✅ Darmowe (50 formularzy/miesiąc)
- ✅ Bardzo łatwe w konfiguracji
- ✅ Automatyczne potwierdzenia dla użytkowników
- ✅ Spam protection wbudowana
- ✅ Export danych do CSV
- ✅ Działa idealnie z GitHub Pages

---

## Testowanie

Po skonfigurowaniu:
1. Uruchom lokalnie: `npm run dev`
2. Wypełnij formularz kontaktowy
3. Sprawdź swoją skrzynkę email
4. Jeśli nie przyszło - sprawdź folder SPAM

---

## Uwaga o GitHub Pages

Gdy będziesz deployować na GitHub Pages, upewnij się, że:
- Formspree/Web3Forms obsługują requesty CORS (co robią domyślnie)
- Nie ma problemów z Mixed Content (HTTPS)

