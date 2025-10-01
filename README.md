
---

# 📘 `tinder-mobile/README.md`

```markdown
# Tinder Mobile (React Native + Expo)

A Tinder-like mobile app frontend for the Laravel backend.  
Uses Expo, React Query, and Recoil.  

---

## 🚀 Features
- Swipe cards (like/dislike) with `react-native-deck-swiper`
- Bottom buttons (👍 Like, 👎 Nope, 🔄 Refresh)
- Liked People List screen
- Splash screen
- API communication with Laravel backend

---

## 🛠️ Requirements
- React Native
- Node.js >= 18
- npm >= 9
- Expo CLI
- Android Studio (for emulator) / Xcode (for iOS) / Expo Go app (for device)

---

## ⚙️ Setup

```bash
# clone repo
git clone https://github.com/purvesh5159/tinder-mobile.git
cd tinder-mobile

# install dependencies
npm install

Configure Backend URL

In src/api/client.js:

// Default for Android emulator
const API_BASE = 'http://10.0.2.2:8000/api';

// For iOS simulator
// const API_BASE = 'http://127.0.0.1:8000/api';

// For physical device (same Wi-Fi)
// const API_BASE = 'http://192.168.1.100:8000/api';

// For Web
// const API_BASE = 'http://127.0.0.1:8000/api';


⚠️ Make sure backend Laravel is running and accessible at that IP.

▶️ Run App
# run in Expo
npm start

# Android emulator
npm run android

# iOS simulator
npm run ios

# Web browser
npm run web


Expo dev server opens at: http://localhost:19006

Scan QR code with Expo Go app to run on phone.