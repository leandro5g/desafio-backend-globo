import type { Prisma } from "../../../../generated/prisma/client";
import type { Feedback as PrismaFeedback } from "../../../../generated/prisma/client";
import { Feedback } from "../../../domain/enterprise/entities/feedback";

export class PrismaFeedbacksMapper {
  static toPrisma(feedback: Feedback): Prisma.FeedbackUncheckedCreateInput {
    return {
      id: feedback.id,
      videoId: feedback.videoId,
      comment: feedback.comment,
      rating: feedback.rating,
      username: feedback.username,
    };
  }

  static toDomain(feedback: PrismaFeedback): Feedback {
    return Feedback.create({
      videoId: feedback.videoId,
      comment: feedback.comment,
      rating: feedback.rating,
      username: feedback.username,
    }, feedback.id);
  }
}