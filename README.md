# NotesApp

Aplikasi web CRUD sederhana berbasis Node.js dan MongoDB.

## 📌 Fitur
- Tambah catatan (Create)
- Lihat semua catatan (Read)
- Edit catatan (Update)
- Hapus catatan (Delete)

## 🚀 Teknologi yang Digunakan
- Node.js
- Express.js
- MongoDB + Mongoose
- EJS (Embedded JavaScript Templates)
- Method Override (untuk PUT & DELETE)
- Body-parser
- dotenv

## 📁 Struktur Folder
```
notesapp/
├── models/
│   └── Note.js
├── routes/
│   └── notes.js
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
├── public/
│   └── style.css
├── .env
├── app.js
├── package.json
└── README.md
```

## 🔧 Cara Menjalankan
1. Clone repository ini:
   ```bash
   git clone https://github.com/alkautsar-dev/notesapp
   cd notesapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan MongoDB (lokal atau set `.env` dengan MongoDB Atlas). Contoh isi file `.env`:
   ```env
   MONGO_URI=mongodb://localhost:27017/notesdb
   ```

4. Jalankan aplikasi:
   ```bash
   node app.js
   ```

5. Akses melalui browser:
   ```
   http://localhost:3000
   ```

## 👨‍💻 Dibuat oleh
**Muhammad Alkautsar Nugroho**  
Kelas: TI.23.C8
