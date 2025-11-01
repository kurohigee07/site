import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

function Contact() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout
      title="Kontak"
      description="Hubungi kami untuk pertanyaan, dukungan, atau feedback">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Hubungi Kami</h1>
          <p className="hero__subtitle">Kami siap membantu Anda</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div style={{padding: '2rem'}}>
                  <h2>Kirim Pesan</h2>
                   <form onSubmit={e => e.preventDefault()}
                  style={{marginBottom: '1rem'}} data-netlify="true" name="contact">
                    
                    <div style={{marginBottom: '1rem'}}>
                                   
                      <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem'}}>
                        Nama *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          fontSize: '1rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}   
                     />
                    </div>
                    
                    <div style={{marginBottom: '1rem'}}>
                      <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem'}}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          fontSize: '1rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}
                      />
                    </div>
                    
                    <div style={{marginBottom: '1rem'}}>
                      <label htmlFor="subject" style={{display: 'block', marginBottom: '0.5rem'}}>
                        Subjek *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          fontSize: '1rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc'
                        }}        
                     />
                    </div>
                    
                    <div style={{marginBottom: '1rem'}}>
                      <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem'}}>
                        Pesan *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        style={{
                          width: '100%',
                          padding: '0.5rem',
                          fontSize: '1rem',
                          borderRadius: '4px',
                          border: '1px solid #ccc',
                          fontFamily: 'inherit'
                        }}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="button button--primary button--lg"
                    >
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>

            <div className="col col--6">
                <div style={{padding: '2rem'}}>
                  <h2>Informasi Kontak</h2>
                  <div style={{marginTop: '1rem'}}>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:help@localhost.run">help@localhost.run</a>
                    </p>
                    
                    <h3>Twitter</h3>
                    <p>
                      <a href="https://twitter.com/localhost_run" target="_blank" rel="noopener noreferrer">
                        @localhost_run
                      </a>
                    </p>
                    
                    <h3>Direct Message</h3>
                    <p>
                      <a href="https://twitter.com/messages/compose?recipient_id=833775057159725057" target="_blank" rel="noopener noreferrer">
                        Kirim DM di Twitter
                      </a>
                    </p>
                    
                    <h3>GitHub</h3>
                    <p>
                      <a href="https://github.com/localhost-run" target="_blank" rel="noopener noreferrer">
                        github.com/localhost-run
                      </a>
                    </p>
                    
                    <div style={{marginTop: '2rem', padding: '1rem', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                      <h3>Jam Operasional</h3>
                      <p>
                        Kami berusaha merespons semua pertanyaan dalam 24-48 jam pada hari kerja.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Contact;
