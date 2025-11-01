import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const productFeatures = [
  {
    title: 'Mudah Digunakan',
    imageUrl: 'img/cloud-download.svg',
    description: 'Setup dalam hitungan detik tanpa konfigurasi rumit. Langsung produktif dari hari pertama.',
  },
  {
    title: 'Performa Tinggi',
    imageUrl: 'img/phone.svg',
    description: 'Dioptimalkan untuk kecepatan dan keandalan. Nikmati pengalaman yang responsif dan stabil.',
  },
  {
    title: 'Aman & Terpercaya',
    imageUrl: 'img/shield-lock.svg',
    description: 'Keamanan tingkat enterprise dengan enkripsi end-to-end dan perlindungan data terbaik.',
  },
];
function ProductFeature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage + ' feature'} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function ProductLanding() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout
      title="Produk Baru"
      description="Temukan solusi terbaru kami untuk meningkatkan produktivitas Anda">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Produk Terbaru Kami</h1>
          <p className="hero__subtitle">Solusi inovatif untuk kebutuhan modern Anda</p>
          <p style={{fontSize: '1.2rem', marginTop: '1rem', marginBottom: '2rem'}}>
            Tingkatkan produktivitas dan efisiensi dengan teknologi terdepan yang kami tawarkan
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Pelajari Lebih Lanjut
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              style={{marginLeft: '1rem'}}
              to={useBaseUrl('kontak')}>
              Hubungi Sales
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="text--center" style={{marginBottom: '3rem'}}>
              <h2>Fitur Unggulan</h2>
              <p style={{fontSize: '1.1rem', color: 'var(--ifm-color-emphasis-600)'}}>
                Dirancang dengan fokus pada pengalaman pengguna dan hasil maksimal
              </p>
            </div>
            <div className="row">
              {productFeatures.map((props, idx) => (
                <ProductFeature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        
        <section style={{padding: '4rem 0', backgroundColor: 'rgba(255,255,255,0.02)'}}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div style={{padding: '2rem'}}>
                  <h2>Mengapa Memilih Kami?</h2>
                  <ul style={{fontSize: '1.1rem', lineHeight: '2'}}>
                    <li>Dukungan pelanggan 24/7</li>
                    <li>Uji coba gratis 30 hari</li>
                    <li>Garansi uang kembali</li>
                    <li>Update reguler dan fitur baru</li>
                    <li>Komunitas pengguna yang aktif</li>
                  </ul>
                </div>
              </div>
              <div className="col col--6">
                <div style={{padding: '2rem'}}>
                  <h2>Paket Harga</h2>
                  <div style={{
                    padding: '2rem',
                    backgroundColor: 'var(--ifm-color-primary)',
                    borderRadius: '12px',
                    textAlign: 'center'
                  }}>
                    <h3 style={{marginBottom: '1rem'}}>Mulai dari</h3>
                    <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
                      $9<span style={{fontSize: '1.5rem'}}>/bulan</span>
                    </div>
                    <p style={{marginBottom: '1.5rem'}}>Hemat 20% dengan paket tahunan</p>
                    <Link
                      className="button button--secondary button--lg"
                      to={useBaseUrl('docs/')}>
                      Mulai Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding: '4rem 0'}}>
          <div className="container text--center">
            <h2 style={{marginBottom: '2rem'}}>Siap Untuk Memulai?</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--ifm-color-emphasis-600)'}}>
              Bergabunglah dengan ribuan pengguna yang telah mempercayai solusi kami
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to={useBaseUrl('docs/')}>
                Lihat Dokumentasi
              </Link>
              <Link
                className="button button--outline button--secondary button--lg"
                style={{marginLeft: '1rem'}}
                to={useBaseUrl('kontak')}>
                Kontak Kami
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ProductLanding;
