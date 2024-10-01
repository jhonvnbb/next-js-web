import React from 'react'
import Link from 'next/link'

const FutsalPage = () => {
  return (
    <section className='bg-[#eee] p-6'>
        <div className='flex flex-col justify-center w-full p-4'>
            <h1 className='text-4xl text-center font-extrabold text-gray-800'>Futsal</h1>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Deskripsi Lomba</h1>
                <p className='text-justify'>Lomba Futsal adalah permainan bola yang dimainkan oleh dua regu, yang masing masing beranggotakan lima orang. Tujuannya adalah memasukkan bola ke gawang lawan, dengan memanipulasi bola dengan kaki dan anggota tubuh lain selain tangan, kecuali posisi kiper. Lomba ini diadakan untuk Siswa/I Kelas X-XII, SMA/SMK/Sederajat</p>
            </div>
          <div className='mt-7'>
            <h1 className='text-2xl text-gray-800 font-bold mb-3'>Ketentuan Umum</h1>
            <div>
              <p>Ketentuan umum merupakan ketentuan yang berlaku untuk kategori perlombaan Futsal</p>
              <ul className='list-decimal ml-5 mt-3'>
                <li>Peserta merupakan Siswa SMA/SMK/MA sederajat.</li>
                <li>Peserta menyerahkan fotocopy kartu pelajar.</li>
                <li>Jumlah peserta dalam satu tim beranggotakan 5 orang pemain inti, 5 pemain cadangan dan 2 official.</li>
                <li>Pemain diwajibkan menjunjung tinggi sportivitas dan anti-diskriminasi SARA.</li>
                <li>Peserta menyerahkan pas foto 2x3 sebanyak 2 lembar.</li>
              </ul>
            </div>
          </div>
          <div className='mt-7'>
            <h1 className='text-2xl text-gray-800 font-bold mb-3'>Penghargaan</h1>
            <div>
              <p>Penghargaan bagi para pemenang Futsal</p>
              <ul className='list-decimal ml-5 mt-3'>
                <li>Juara 1 : Uang Tunai senilai Rp 2.000.000 + Trofi + Sertifikat/Pemain</li>
                <li>Juara 2 : Uang Tunai senilai Rp 1.500.000 + Trofi + Sertifikat/Pemain</li>
                <li>Juara 3 : Uang Tunai senilai Rp 1.000.000 + Trofi + Sertifikat/Pemain</li>
                <li>Best Player : Uang Tunai + Sertifikat</li>
                <li>Top Score : Uang Tunai + Sertifikat</li>
                <li>Best Suporter : Uang Tunai + Sertifikat</li>
              </ul>
            </div>
          </div>
          <div className='mt-7'>
            <h1 className='text-2xl text-gray-800 font-bold mb-3'>Pendaftaran</h1>
            <div>
              <p>Timeline Pendaftaran</p>
              <ul className='list-decimal ml-5 mt-3'>
                <li>Gelombang I : 15 Agustus-10 September 2024</li>
                <li>Gelombang II : 10 September-10 Oktober 2024</li>
                <li>Technical Meeting : 17 Oktober 2023</li>
                <li>Pelaksanaan Lomba : 13 Oktober 2024 - 14 Oktober 2024</li>
              </ul>
            </div>
            <div className='mt-3'>
              <p>Biaya pendafataran Futsal sebesar</p>
              <ul className='list-decimal ml-5 mt-3'>
                <li>Gelombang I : Rp. 350.000/team</li>
                <li>Gelombang II : Rp. 375.000/team</li>
              </ul>
            </div>
            <div className='mt-3'>
              <p>Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan transfer melalui :</p>
              <ul className='list-decimal ml-5 mt-3'>
                <li>Seabank : 901950749935 a/n Ananda Karunia Putri</li>
              </ul>
              <p className='mt-3'>Lihat Poster panduan <Link href="">Disini.</Link></p>
            </div>
            <div className='mt-7'>
              <h1 className='text-2xl text-gray-800 font-bold mb-3'>Contact Person</h1>
              <ul className='list-decimal ml-3'>
                <li>M.Raihan Al-Hayya : +62 813-6661-5653</li>
                <li>Hermawan Yogi Wibisono : +62 882-7665-2243</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <Link href="" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 border rounded inline-block mt-7'>Daftar Sekarang</Link>
          </div>
        </div>
    </section>
  )
}

export default FutsalPage