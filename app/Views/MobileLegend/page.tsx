import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <section className='bg-[#eee] p-6'>
        <div className='flex flex-col justify-center w-full p-4'>
            <h1 className='text-4xl text-center font-extrabold text-gray-800'>Mobile Legend</h1>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Deskripsi Lomba</h1>
                <p className='text-justify'>CSS (Computer Science Showdown) 2024 merupakan ajang kompetisi di bidang e-sport game, yaitu Mobile Legends : Bang Bang. Mobile Legends adalah sebuah permainan mobile berjenis MOBA (Multiplayer Online Battle Arena) yang dikembangkan dan diterbitkan oleh Moonton.</p>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Ketentuan Umum</h1>
                <div>
                    <p>Ketentuan umum merupakan ketentuan yang berlaku untuk kategori perlombaan Mobile Legends</p>
                    <ul className='list-decimal ml-5 mt-3'>
                        <li>Peserta wajib menaati setiap peraturan yang ada.</li>
                        <li>Peserta wajib menjunjung tinggi sportivitas dan kejujuran.</li>
                        <li>Dilarang melakukan ujaran kebencian, mengandung SARA, dan negatif.</li>
                        <li>Panitia bisa mendiskualifikasi peserta apabila peserta melanggar aturan.</li>
                        <li>Segala kelalaian merupakan tanggung jawab setiap peserta maupun tim.</li>
                        <li>Gelar juara yang diperoleh tim dapat dicabut oleh pihak panitia apabila ditemukan kecurangan atau pelanggaran hukum dalam proses pelaksanaan perlombaan.</li>
                        <li>Ketentuan pause 1x3 menit (Chat all "P/Pause") berlaku pada saat semifinal dan final.</li>
                    </ul>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Penghargaan</h1>
                <div>
                    <p>Penghargaan bagi para pemenang Mobile Legend</p>
                    <ul className='list-decimal ml-5 mt-3'>
                        <li>Juara 1 : Uang Tunai senilai Rp 700.000 + E-Sertifikat</li>
                        <li>Juara 2 : Uang Tunai senilai Rp 500.000 + E-Sertifikat</li>
                        <li>Juara 3 : Uang Tunai senilai Rp 300.000 + E-Sertifikat</li>
                    </ul>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Pendaftaran</h1>
                <div>
                    <p>Timeline Mobile Legends</p>
                    <ul className='list-decimal ml-5 mt-3'>
                        <li>Tanggal Pendaftaran : 9 September - 11 Oktober 2024</li>
                        <li>Technical Meeting : 14 Oktober 2024</li>
                        <li>Pelaksanaan Lomba : 15 Oktober 2024 & 19 Oktober 2024</li>
                        <li>Penyisihan (Online) : 15 Oktober 2024</li>
                        <li>Semifinal dan Final (Offline) : 19 Oktober 2024</li>
                    </ul>
                </div>
                <div className='mt-3'>
                    <p>Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan transfer melalui :</p>
                    <img src="../himakom.png" alt="qr" className='max-w-full h-[150px]'/>
                    <p className='mt-3'>Lihat Poster Panduan <Link href="">Disini</Link> </p>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Contact Person</h1>
                <div>
                    <ul className='list-decimal ml-5 mt-3'>
                        <li>Firman Situmorang : +62 813-1991-2461</li>
                        <li>Jhon V Nababan : +62 813-7583-9812</li>
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

export default page