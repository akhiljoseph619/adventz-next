import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function Contactform() {
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
        {errors.phone && errors.phone.type === 'required' && (
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
                message: 'Entered value does not match email format',
              },
            })}
          />
        </div>
        {errors.email && errors.email.type === 'required' && (
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
        {errors.requirement && errors.requirement.type === 'required' && (
          <span className="error">This field is required</span>
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
  );
}
