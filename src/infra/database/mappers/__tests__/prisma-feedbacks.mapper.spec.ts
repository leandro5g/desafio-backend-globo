import { PrismaFeedbacksMapper } from "../prisma-feedbacks.mapper";

describe("PrismaFeedbacksMapper", () => {
  it("should map Feedback to Prisma.FeedbackUncheckedCreateInput", () => {
    const feedback = {
      id: "123",
      videoId: "456",
      comment: "Great video!",
      rating: 5,
      username: "testuser",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const prismaFeedback = PrismaFeedbacksMapper.toPrisma(feedback);

    expect(prismaFeedback).toEqual({
      id: feedback.id,
      videoId: feedback.videoId,
      comment: feedback.comment,
      rating: feedback.rating,
      username: feedback.username,
      createdAt: feedback.createdAt,
      updatedAt: feedback.updatedAt,
    });
  });

  it("should map Prisma.Feedback to Feedback", () => {
    const prismaFeedback = {
      id: "123",
      videoId: "456",
      comment: "Great video!",
      rating: 5,
      username: "testuser",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const feedback = PrismaFeedbacksMapper.toDomain(prismaFeedback);

    expect(feedback.id).toBe(prismaFeedback.id);
    expect(feedback.videoId).toBe(prismaFeedback.videoId);
    expect(feedback.comment).toBe(prismaFeedback.comment);
    expect(feedback.rating).toBe(prismaFeedback.rating);
    expect(feedback.username).toBe(prismaFeedback.username);
    expect(feedback.createdAt).toBe(prismaFeedback.createdAt);
    expect(feedback.updatedAt).toBe(prismaFeedback.updatedAt);
  });
})