# ✅ Prettier i ESLint - Skonfigurowane!

## 🎉 Co zostało zrobione:

### 1. **Zainstalowane narzędzia:**
- ✅ Prettier - automatyczne formatowanie kodu
- ✅ ESLint - sprawdzanie jakości kodu
- ✅ Integracja Prettier + ESLint

### 2. **Pliki konfiguracyjne:**
- `.prettierrc.json` - konfiguracja Prettier
- `.prettierignore` - pliki ignorowane przez Prettier
- `.eslintrc.json` - konfiguracja ESLint
- `.eslintignore` - pliki ignorowane przez ESLint

### 3. **Skrypty w package.json:**
```bash
npm run format         # Formatuj wszystkie pliki
npm run format:check   # Sprawdź formatowanie bez zmian
npm run lint          # Sprawdź błędy ESLint
npm run lint:fix      # Napraw błędy ESLint automatycznie
```

---

## 🚀 Jak używać:

### Automatyczne formatowanie wszystkich plików:
```bash
npm run format
```

### Sprawdzenie formatowania (bez zmian):
```bash
npm run format:check
```

### Sprawdzenie błędów w kodzie:
```bash
npm run lint
```

### Automatyczna naprawa błędów:
```bash
npm run lint:fix
```

---

## 📝 Konfiguracja Prettier:

```json
{
  "semi": true,              // Średniki na końcu linii
  "trailingComma": "es5",    // Przecinki na końcu (gdzie to możliwe)
  "singleQuote": true,       // Pojedyncze cudzysłowy
  "printWidth": 100,         // Maksymalna długość linii: 100 znaków
  "tabWidth": 2,             // Wcięcia: 2 spacje
  "arrowParens": "avoid"     // Brak nawiasów przy pojedynczym argumencie
}
```

---

## 🔧 Integracja z edytorem (WebStorm/VSCode):

### WebStorm:
1. Otwórz **Settings** → **Languages & Frameworks** → **JavaScript** → **Prettier**
2. Zaznacz "On save" i "On code reformat"
3. Prettier będzie działał automatycznie przy zapisie

### VSCode:
1. Zainstaluj rozszerzenie "Prettier - Code formatter"
2. Dodaj do settings.json:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## ✨ Co zostało sformatowane:

Prettier przeformatował wszystkie pliki w folderze `src/`:
- ✅ Wszystkie pliki TypeScript (.ts, .tsx)
- ✅ Wszystkie pliki JavaScript (.js, .jsx)
- ✅ Pliki CSS
- ✅ Pliki JSON

---

## 🎯 Zalety:

### Prettier:
- ✅ Spójny styl kodu w całym projekcie
- ✅ Automatyczne formatowanie przy zapisie
- ✅ Brak dyskusji o stylu kodu w zespole
- ✅ Łatwiejsze code review

### ESLint:
- ✅ Wykrywanie potencjalnych błędów
- ✅ Egzekwowanie najlepszych praktyk
- ✅ Wykrywanie nieużywanych zmiennych
- ✅ Ostrzeżenia o problemach z TypeScript

---

## 🔄 Workflow:

### Przed commitem:
```bash
npm run format     # Formatuj kod
npm run lint:fix   # Napraw błędy
```

### W edytorze:
- Włącz "format on save"
- Kod będzie automatycznie formatowany przy każdym zapisie

---

## 📌 Ważne:

- Prettier **NIE zmienia** logiki kodu - tylko formatowanie
- ESLint pomaga znaleźć błędy przed uruchomieniem
- Oba narzędzia współpracują ze sobą (eslint-config-prettier)

---

**Twój kod jest teraz pięknie sformatowany! 🎨**

