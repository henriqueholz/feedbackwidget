import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma'
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUseCase } from './useCases/submitFeedbackUseCase';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "88aa2caa26b3e9",
    pass: "2259cf3da2cb8f"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
  )
  
  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  // await transport.sendMail({
  //   from: 'Feedget team <oi@feedget.com>',
  //   to: 'Henrique <henriqueholz@live.com>',
  //   subject: 'new feedback',
  //   html: [
  //     `<div style="font-family: sans-serif; font-size: 16px; color: #111>;`,
  //     `<p>feedback type: ${type}</p>`,
  //     `<p>comment: ${comment}</p>`,
  //     `</div>`
  //   ].join('\n')
  // })

  return res.status(201).send();
})
