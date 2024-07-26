import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

emailjs.init('QWw80KqZO363WVr6x');

export async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');


  if (!name || !email || !subject || !message) {
    Swal.fire({
      title: 'Error',
      text: 'Por favor, llena todos los campos.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
    return; 
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  try {
    const response = await emailjs.sendForm(
      'service_9ti40uc',
      'template_f2u9s48',
      form
    );
    console.log('SUCCESS!', response.status, response.text);
    Swal.fire({
      title: '¡Enviado!',
      text: 'Tu mensaje se ha enviado correctamente.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    form.reset();

    window.location.hash = '#top';
  } catch (error) {
    console.error('Error sending email:', error);

    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo más tarde.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}
