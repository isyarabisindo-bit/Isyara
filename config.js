/* PENGATURAN ISYARA - edit file ini saja; index.html tidak perlu disentuh lagi. */
const CFG={
  /* VIDEO: alamat dasar + a.mp4 sampai z.mp4. Contoh Cloudinary:
     'https://res.cloudinary.com/NAMA_CLOUD/video/upload/f_auto,q_auto/' */
  videoBase:'https://res.cloudinary.com/fs7trii1/video/upload/',
  videoExt:'.mp4',
  wordBase:'',      /* alamat dasar video kata/frasa; kosongkan = sama dengan videoBase (mis. isi '.../upload/kata/' jika di folder kata) */
  /* Jika nama file di Cloudinary punya kode acak (mis. a_x7k2.mp4), isi per huruf di sini.
     Contoh: videos:{A:'https://res.cloudinary.com/.../a_x7k2.mp4', B:'https://.../b_q9d1.mp4'} */
  videos:{},
  wa:'',            /* nomor WhatsApp admin, format 628xxxxxxxxxx */
  email:'',         /* email admin */
  admin:'',         /* email akun yang boleh membuka panel admin */
  secret:'GANTI-RAHASIA-INI',
  qris:'qris.png',
  merchant:'Flaavor1st',
  campus:'Program Studi Teknologi Pendidikan',
  team:[{n:'Fauziah Latif',r:'Teknologi Pendidikan'},{n:'Bilqis Putri Yanuar A.',r:'Teknologi Pendidikan'},{n:'Imanuel Sinaga',r:'Teknologi Pendidikan'},{n:'Deyshadia Haira Salma',r:'Teknologi Pendidikan'}]
};
