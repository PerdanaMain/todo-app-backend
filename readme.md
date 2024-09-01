# APP TODO LIST SEDERHANA

## Deskripsi

Project ini merupakan project sederhana dari sisi backedn side yang menggunakan framework ExpressJS. Project ini merupakan project todo list sederhana yang memiliki fitur CRUD (Create, Read, Update, Delete) untuk menambahkan, melihat, mengedit, dan menghapus todo list.

## Project Requirement

1. NodeJS min version 20.11.0
2. NPM min version 10.8.2
3. Database MySQL

## Cara Menjalankan Project

1. Clone repository ini
2. import database pada file `db.sql` ke dalam database mysql
3. Konfigurasi file `.env` sesuai dengan konfigurasi database yang digunakan
4. Install dependencies dengan menjalankan perintah `npm install`
5. Jalankan project dengan perintah `npm start`

## API Documentation

Path `GET` : /api/v1/todos
Path `POST` : /api/v1/todos
Path `PUT` : /api/v1/todos/:id
Path `PUT` : /api/v1/todos/:id/status
Path `DELETE` : /api/v1/todos/:id
