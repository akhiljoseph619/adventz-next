import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      let response = await fetch('api/sendgrid', {
        method: 'POST', // or 'PUT'
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: JSON.stringify(data),
      });
      let result = await response.json();
      setIsSubmitting(false);
      reset();
      router.push('/ThankYou');
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      alert('Error!!!');
    }
  };
  return (
    <>
      <Head>
        <title>Contact Us | Leading Digital Marketing Company Oman</title>
        <meta
          name="keywords"
          content="web design company in oman, web design &amp; development company in oman, adventz muscat oman"
        />
        <meta
          name="description"
          content="Get in touch with our digital marketing agency in Oman today and take the first step towards improving your online presence. Schedule a consultation today"
        />
      </Head>
      <section className="ins-banner-sec">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="ins-banner-cover">
                <div className="ins-banner-graphics">
                  <div className="ins-banner-ptc ins-banner-ptc-01">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-02">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path className="st0" d="M3.2 3.2H28.9V28.9H3.2z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-03">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 45 45"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M29.8 22L40.4 32.6 33.4 39.7 22.8 29.1 12.1 39.7 5.1 32.6 15.7 22 5.1 11.4 12.1 4.3 22.8 14.9 33.4 4.3 40.4 11.4z" />
                    </svg>
                  </div>
                  <div className="ins-banner-ptc ins-banner-ptc-04">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 32 32"
                      className="ins-banner-ptc-svg"
                    >
                      <path d="M25.1 29.2L6.9 15.6 25.1 2.8z" />
                    </svg>
                  </div>
                </div>
                <div className="ins-banner-hd">
                  <h1>
                    Contact <span className="color-red">Us</span>
                  </h1>
                  <p>#Creative Agency #Designing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="ins-content-sec">
        <section className="contact-sec">
          <div className="parallax-eff pencil-box-cover">
            <div className="layer" data-depth="0.2">
              <div className="pencil-box">
                <img src="images/pencil-box.png" alt="Creative Agency" />
              </div>
            </div>
          </div>
          <div className="container-xl">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="contact-form block-anim">
                  <div className="co-form-hd">
                    <p>contact</p>
                    <h2>
                      Let's talk about your
                      <span className="color-red">project</span>
                    </h2>
                  </div>
                  <div className="co-form-body">
                    <div id="alert" />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <div className="input-field">
                          <input
                            className="form-control"
                            placeholder="Your Phone Number with Country Code"
                            required
                            {...register('phone', { required: true })}
                            type="tel"
                          />
                        </div>
                        {errors.phone && errors.message.type === 'required' && (
                          <span className="error">This field is required</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-field">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            {...register('email', {
                              required: 'required',
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                  'Entered value does not match email format',
                              },
                            })}
                          />
                        </div>
                        {errors.email && errors.message.type === 'required' && (
                          <span className="error">This field is required</span>
                        )}
                      </div>
                      <div className="form-group">
                        <div className="input-field">
                          <input
                            className="form-control"
                            placeholder="Requirement"
                            {...register('requirement', { required: true })}
                          />
                        </div>
                        {errors.requirement &&
                          errors.message.type === 'required' && (
                            <span className="error">
                              This field is required
                            </span>
                          )}
                      </div>
                      <button type="submit" className="btn btn-quote cont_send">
                        {isSubmitting ? (
                          <div className="button-loader" id="loader-4">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        ) : (
                          'Get Free Consultation'
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="contact-add-cover">
                  <div className="address-cover">
                    <div className="col-address">
                      <h3>Oman</h3>
                      <p>
                        Ghala <br />
                        Sultanate of Oman
                      </p>
                    </div>
                    <div className="col-address">
                      <h3>Qatar</h3>
                      <p></p>
                    </div>
                  </div>
                  <ul className="contact-connect">
                    <li>
                      <span className="con-icon">
                        <img
                          src="images/con-icon-01.png"
                          alt="Creative Agency oman"
                        />
                      </span>
                      + (968) - 2422 9315
                    </li>
                    <li>
                      <span className="con-icon">
                        <img
                          src="images/con-icon-01.png"
                          alt="Creative design Agency"
                        />
                      </span>
                      + (968) - 9126 9531{' '}
                    </li>
                    <li>
                      <span className="con-icon">
                        <img
                          src="images/con-icon-02.png"
                          alt="Creative marketing Agency"
                        />
                      </span>
                      <Link href="mailto:info@adventz.net">
                        info@adventz.net
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="location-sec">
          <div className="container-xl">
            <div className="row">
              <div className="col-12">
                <div className="location-nav-cover">
                  <Link
                    className="btn btn-location btn-shine"
                    href="https://goo.gl/maps/hj8hnUNtMm3q89Rm6"
                    target="_blank"
                  >
                    View Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
