import React from 'react'
import Link from 'next/link'

const LctPage = () => {
  return (
    <section className='bg-[#eee] p-6'>
      <div className='flex flex-col justify-center w-full p-4'>
        <h1 className='text-4xl text-gray-800 text-center font-extrabold'>Lomba Cepat Tepat</h1>
        <div className='mt-7'>
          <h1 className='text-2xl text-gray-800 font-bold mb-3'>Deskripsi Lomba</h1>
          <p className='text-justify'>Lomba Cepat Tepat Komputer adalah salah satu cabang lomba di bidang akademik dalam rangkaian acara Computer Science Showdown tahun 2024. Lomba ini diadakan untuk siswa/i SMA/MA/SMK Sederajat guna mengembangkan keilmuan di bidang ilmu komputer. Materi yang dilombakan dalam Lomba Cepat Tepat Komputer adalah mengenai pengetahuan dasar dalam ilmu komputer seperti komunikasi data dan jaringan komputer, Microsoft Office, pengetahuan umum dalam bidang komputer, sistem bilangan, perangkat lunak dan perangkat keras komputer, dasar-dasar sistem operasi, matematika diskrit, serta bahasa pemrograman pseudocode. Peserta lomba ini, dituntut untuk cekatan, lugas, serta tepat dalam menjawab pertanyaan-pertanyaan yang dilombakan.</p>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl text-gray-800 font-bold mb-3'>Ketentuan Umum</h1>
          <div>
            <p className='text-justify'>Ketentuan umum merupakan ketentuan yang berlaku untuk kategori perlombaan Lomba Cepat Tepat</p>
            <ul className='list-decimal ml-5 mt-3'>
              <li>Peserta LCT Komputer adalah siswa/i yang duduk di kelas 1 - 3 SMA/MA/SMK/Sederajat.</li>
              <li>Satu tim terdiri dari tiga orang.</li>
              <li>Satu sekolah dapat mengirim lebih dari satu tim dengan maksimal 3 tim.</li>
              <li>Satu tim didampingi oleh 1 orang guru pembimbing.</li>
            </ul>
          </div>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl text-gray-800 font-bold mb-3'>Penghargaan</h1>
          <div>
            <p className='text-justify'>Penghargaan bagi para pemenang Lomba Cepat Tepat Komputer</p>
            <ul className='list-decimal ml-5 mt-3'>
              <li>Juara 1 : Uang Tunai senilai Rp. 900.000,00. + Sertifikat + Piala + Voucher 50%</li>
              <li>Juara 2 : Uang Tunai senilai Rp. 650.000,00. + Sertifikat + Piala + Voucher 50%</li>
              <li>Juara 3 : Uang Tunai senilai Rp. 400.000,00. + Sertifikat + Piala + Voucher 50%</li>
              <li>Seluruh peserta LCTK dan guru pembimbing akan mendapatkan e-sertifikat</li>
            </ul>
          </div>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl text-gray-800 font-bold mb-3'>Pendaftaran</h1>
          <div>
            <p>Timeline Lomba Cepat Tepat Komputer</p>
            <ul className='list-decimal ml-5 mt-3'>
              <li>Gelombang I : 1 - 30 Agustus 2024</li>
              <li>Gelombang II : 8 September - 8 Oktober 2024</li>
              <li>Technical Meeting : 10 Oktober 202</li>
              <li>Pelaksanaan Lomba : 12 Oktober 2024</li>
            </ul>
          </div>
          <div className='mt-7'>
            <p>Biaya pendaftaran Lomba Cepat Tepat Komputer sebesar</p>
            <ul className='list-decimal ml-5 mt-3'>
              <li>Gelombang I : Rp. 155.000/tim (untuk 7 slot)</li>
              <li>Gelombang II : Rp. 165.000/tim</li>
            </ul>
          </div>
          <div className='mt-7'>
            <p>Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan transfer melalui :</p>
            <ul className='list-decimal ml-5 mt-3'>
              <li>Seabank : 901950749935 a/n Ananda Karunia Putri</li>
            </ul>
            <p className='mt-3'>
              Lihat Poster Panduan <Link href="/">Disini</Link>
            </p>
          </div>
        </div>
        <div className='mt-7'>
          <h1 className='text-2xl text-gray-800 font-bold mb-3'>Contact Person</h1>
          <ul className='list-decimal ml-3'>
            <li>Luthfi Aditya : +62 812-1241-1730</li>
            <li>Clara Monica : +62 822-6948-8323</li>
          </ul>
        </div>
        <div className='flex flex-col items-center'> 
          <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border rounded inline-block mt-7"
          >Daftar Sekarang</Link>
        </div>
      </div>
    </section>
  )
}

export default LctPage