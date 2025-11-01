import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function AboutUs() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  
  return (
    <Layout
      title="Tentang Kami"
      description="Pelajari lebih lanjut tentang localhost.run dan misi kami">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Tentang Kami</h1>
          <p className="hero__subtitle">Menghubungkan pengembang dengan internet</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <div style={{padding: '2rem'}}>
                  <h2>Siapa Kami</h2>
                  <p>
                    localhost.run adalah layanan tunnel yang memungkinkan pengembang untuk 
                    menghubungkan aplikasi web yang berjalan di komputer lokal mereka ke internet 
                    secara instan. Kami percaya bahwa pengembangan dan berbagi aplikasi web 
                    seharusnya mudah dan dapat diakses oleh semua orang.
                  </p>
                  
                  <h2>Misi Kami</h2>
                  <p>
                    Misi kami adalah menyediakan solusi tunnel yang mudah digunakan, aman, dan 
                    dapat diandalkan untuk pengembang di seluruh dunia. Kami berkomitmen untuk 
                    menjaga layanan gratis tetap tersedia sambil menawarkan fitur premium untuk 
                    kebutuhan yang lebih advanced.
                  </p>

                  <h2>Nilai-Nilai Kami</h2>
                  <ul>
                    <li><strong>Kesederhanaan:</strong> Tidak perlu download atau signup untuk memulai</li>
                    <li><strong>Keamanan:</strong> Koneksi terenkripsi dengan sertifikat TLS otomatis</li>
                    <li><strong>Aksesibilitas:</strong> Tier gratis selamanya untuk semua pengembang</li>
                    <li><strong>Inovasi:</strong> Terus mengembangkan fitur baru untuk komunitas</li>
                  </ul>
                  
                  <h2>Teknologi</h2>
                  <p>
                    Dibangun dengan teknologi modern dan infrastruktur yang handal, localhost.run 
                    menyediakan koneksi yang cepat dan stabil untuk aplikasi Anda. Dengan dukungan 
                    untuk HTTP tunnels, TLS passthrough, dan custom domains, kami siap mendukung 
                    berbagai use case pengembangan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default AboutUs;
