import React from 'react'
import Link from 'next/link'

const CpcPage = () => {
  return (
    <section className='bg-[#eee] p-6'>
        <div className='container mx-auto flex flex-col justify-center p-4'>
            <h1 className='text-4xl font-extrabold text-gray-800 text-center'>National Competitive Programming Competition</h1>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Deskripsi Lomba</h1>
                <div>
                    <p className='text-justify mb-3'>Competitive Programming Competition adalah salah satu rangkaian kompetisi pada acara Computer Science Showdown Universitas Lampung dan satu-satunya kompetisi berskala nasional. Competitive Programming Competition menguji kemampuan peserta dalam menyelesaikan suatu masalah secara sistematis menggunakan bahasa pemrograman yang telah ditentukan, yaitu C/C++/Java. Perlombaan akan dilaksanakan pada platform hackerrank.com Penilaian akan dihitung berdasarkan kecepatan waktu dalam mengerjakan kode pemrograman serta poin yang diperoleh jika peserta berhasil menjawab dengan tepat. Peringkat Competitive Programming Competition menggunakan sistem papan skor dari platform hackerrank.</p>
                    <p className='text-justify mb-3'>Competitive Programming Competition terdiri dari sesi pemanasan, penyisihan dan babak final. Sesi pemanasan akan dilaksanakan paling lambat satu hari sebelum babak penyisihan dilakukan yang bersifat opsional atau tidak memengaruhi proses penilaian. Dianjurkan bagi peserta untuk mengikuti sesi pemanasan agar peserta memahami dan familiar dengan platform yang akan digunakan.</p>
                    <p className='text-justify mb-3'>Pada babak penyisihan dan final yang akan dilaksanakan secara daring melalui platform google meet. Diharapkan kepada seluruh peserta untuk mempersiapkan kebutuhan lomba dengan baik seperti device dan koneksi internet yang akan digunakan dalam kegiatan CPC.</p>
                </div>
            </div>
            <div className='mt-4'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Ketentuan Umum</h1>
                <div>
                    <p className='text-justify mb-3'>Ketentuan umum merupakan ketentuan yang berlaku untuk kategori perlombaan CPC</p>
                    <ul className='list-decimal ml-5 text-justify'>
                        <li>Peserta lomba adalah masyarakat umur dari seluruh Indonesia yang berusia 16-24 tahun yang belum pernah memenangkan Olimpiade komputer tingkat nasional yang diselenggarakan kementerian pendidikan dan kebudayaan.</li>
                        <li>Setiap peserta yang sudah terdaftar tidak dapat diganti oleh orang lain selama kompetisi berlangsung dengan alasan apapun.</li>
                        <li>Peserta yang tidak memenuhi ketentuan diatas (nomor 1 sampai dengan 3) maka dianggap gugur.</li>
                        <li>Peserta lomba bersifat perorangan.</li>
                        <li>Setiap peserta diharapkan mengikuti acara pembukaan Computer Science Showdown pada hari Sabtu, 12 Oktober 2024.</li>
                        <li>Peserta diberi waktu sampai dengan hari Jumat, 11 Oktober 2024 untuk mengajukan pertanyaan ke Contact Person yang tertera seputar petunjuk teknis seluruh lomba, yang nantinya akan dibahas pada hari Kamis, 10 Oktober 2024 pukul 20.00 s/d selesai dalam Technical Meeting di media rapat daring yang disiapkan panitia.</li>
                        <li>Peserta yang tidak mengikuti Technical Meeting dianggap setuju dengan semua hasil akhir keputusan Meeting.</li>
                        <li>Seluruh peserta wajib mengikuti peraturan yang sudah ditetapkan tanpa terkecuali.</li>
                    </ul>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Penghargaan</h1>
                <div>
                    <p className='mb-3'>Penghargaan bagi para pemenang Competitive Programming Competition</p>
                    <ul className='list-decimal ml-5'>
                        <li>Juara 1 : Uang Tunai senilai Rp. Rp 1.000.000 + Sertifikat</li>
                        <li>Juara 2 : Uang Tunai senilai Rp. 800.000 + Sertifikat</li>
                        <li>Juara 3 : Uang Tunai senilai Rp. 500.000 + Sertifikat</li>
                    </ul>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Pendaftaran</h1>
                <div>
                    <p className='mb-3'>Timeline Competitive Programming Competition</p>
                    <ul className='list-decimal ml-5'>
                        <li>Gelombang I : 1 Agustus - 30 Agustus 2024</li>
                        <li>Gelombang II : 8 September - 8 Oktober 2024</li>
                        <li>Technical Meeting : 10 Oktober 2024</li>
                        <li>Warming Up : 12 Oktober 2024</li>
                        <li>Penyisihan : 13 Oktober 2024</li>
                        <li>Semifinal : 14 Oktober 2024</li>
                        <li>Final : 15 Oktober 2024</li>
                        <li>Pengumuman Pemenang : 20 Oktober 2024</li>
                    </ul>
                </div>
                <div className='mt-3'>
                    <p>Biaya pendaftaran Competitive Programming Competition sebesar</p>
                    <ul className='list-decimal ml-5'>
                        <li>Gelombang I : Rp. Rp100.000 per Peserta</li>
                        <li>Gelombang II : Rp. Rp120.000 per Peserta</li>
                    </ul>
                </div>
                <div className='mt-3'>
                    <p>Biaya pendaftaran harus diberikan sebelum pendaftaran ditutup dengan transfer melalui :</p>
                    <ul className='list-decimal ml-5'>
                        <li>Seabank : 901950749935 a/n Ananda Karunia Putri</li>
                    </ul>
                    <p className='mt-3'>Lihat Poster panduan <Link href="">Disini.</Link></p>
                </div>
            </div>
            <div className='mt-7'>
                <h1 className='text-2xl text-gray-800 font-bold mb-3'>Contact Person</h1>
                <div>
                    <ul className='list-decimal ml-5'>
                        <li>Ridho Fernando : +62 858-8818-0419</li>
                        <li>Adrianne Julian : +62-823-1555-0334</li>
                    </ul>
                </div>
            </div>
            <div className='mt-7 flex items-center justify-center'>
                <Link href="" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Daftar Sekarang</Link>
            </div>
        </div>
    </section>
  )
}

export default CpcPage