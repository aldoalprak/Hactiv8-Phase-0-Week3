
/**Buatlah sebuah algoritma untuk kasus berikut:
Seorang pengajar sedang memeriksa ujian mahasiswa dan akan memberikan desc nilai dari A-E dengan ketentuan sebagai berikut:
 - Nilai 80 - 100: A
 - Nilai 65 - 79: B
 - Nilai 50 - 64: C
 - Nilai 35 - 49: D
 - Nilai 0 - 34: E

 Tampilkan desc nilai dan nama siswa saat pengajar tersebut memasukkan nilai dan nama yang dia inginkan.

NOTED:
Jika nilai mahasiswa kurang dari 0 atau lebih dari 100 maka tampilkan 'Nilai Invalid'
**/

STORE 'nilai mahasiswa' with 0
STORE 'deskripsi nilai' with ''
STORE 'nama mahasiswa' with ''

IF 'nilai mahasiswa' >=80 && 'nilai mahasiswa' <=100 THEN
  DISPLAY 'deskripsi nilai' == 'A'
  DISPLAY 'nama mahasiswa' with nama pemilik kertas ujian
ELSE IF 'nilai mahasiswa' >=65 && 'nilai mahasiswa' <=79 THEN
  DISPLAY 'deskripsi nilai' == 'B'
  DISPLAY 'nama mahasiswa' with nama pemilik kertas ujian
ELSE IF 'nilai mahasiswa' >=50 && 'nilai mahasiswa' <=64 THEN
  DISPLAY 'deskripsi nilai' == 'C'
  DISPLAY 'nama mahasiswa' with nama pemilik kertas ujian 
ELSE IF 'nilai mahasiswa' >=35 && 'nilai mahasiswa' <=49 THEN
  DISPLAY 'deskripsi nilai' == 'D'
  DISPLAY 'nama mahasiswa' with nama pemilik kertas ujian
ELSE IF 'nilai mahasiswa' >=0 && 'nilai mahasiswa' <=34 THEN
  DISPLAY 'deskripsi nilai' == 'E'
  DISPLAY 'nama mahasiswa' with nama pemilik kertas ujian
ELSE 
  DISPLAY 'nilai invalid'        
END IF  