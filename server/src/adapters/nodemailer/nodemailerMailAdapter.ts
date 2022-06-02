import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer';
import { brotliDecompressSync } from "zlib";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "88aa2caa26b3e9",
    pass: "2259cf3da2cb8f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
     from: 'Feedget team <oi@feedget.com>',
     to: 'Henrique <henriqueholz@live.com>', 
     subject,
     html: body,
   });
  }
 }

 