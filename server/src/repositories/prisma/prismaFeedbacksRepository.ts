import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRespository } from "../feedbacksRepository";

export class PrismaFeedbacksRepository implements FeedbacksRespository{
  async create({ type, comment, screenshot}: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    })
  }
}