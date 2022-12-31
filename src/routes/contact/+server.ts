import { PRIVATE_FROM_EMAIL, PRIVATE_FROM_NAME, PRIVATE_MOCK_EMAIL, PRIVATE_SIB_KEY, PRIVATE_TO_EMAIL_1, PRIVATE_TO_EMAIL_2, PRIVATE_TO_NAME_1, PRIVATE_TO_NAME_2 } from '$env/static/private';
import type { SendSmtpEmail } from '@sendinblue/client';
import SendInBlue from '@sendinblue/client';
import sanitize from 'sanitize-html';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async (e) => {
  const data = await e.request.formData()

  const name = String(data.get('name'));
  const email = String(data.get('email'));
  const subject = String(data.get('subject'));
  const message = String(data.get('message'));

  const api = new SendInBlue.TransactionalEmailsApi();
  api.setApiKey(SendInBlue.TransactionalEmailsApiApiKeys.apiKey, PRIVATE_SIB_KEY);

  const content = [
    `Kinky Bangkok Contact Form - ${subject}`,
    '',
    `From: ${name} - ${email}`,
    `Message:`,
    message,
  ];

  const clean = sanitize(content.join('\n'));

  const emailData: SendSmtpEmail = {
    to: [
      { name: PRIVATE_TO_NAME_1, email: PRIVATE_TO_EMAIL_1 },
      { name: PRIVATE_TO_NAME_2, email: PRIVATE_TO_EMAIL_2 }
    ],
    sender: { name: PRIVATE_FROM_NAME, email: PRIVATE_FROM_EMAIL },
    subject: `New Message from ${name} - Kinky Bangkok`,
    textContent: clean,
  };

  if (PRIVATE_MOCK_EMAIL === '1') {
    console.log('Not sending email', emailData);
    await new Promise<void>((res) => setTimeout(() => res(), 2000));
  } else {
    await api.sendTransacEmail(emailData);
  }

  return new Response();
};
