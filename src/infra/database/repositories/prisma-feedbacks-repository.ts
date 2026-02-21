import { PrismaClient } from "../../../../generated/prisma/client";
import { Feedback } from "../../../domain/enterprise/entities/feedback";
import {
  IFeedbacksRepository,
  IFindByVideoIdProps,
  IFindyByVideoIdResponse,
} from "../../../domain/enterprise/repositories";
import { PrismaFeedbacksMapper } from "../mappers/prisma-feedbacks.mapper";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  public async create(feedback: Feedback): Promise<void> {
    await this.prismaClient.feedback.create({
      data: PrismaFeedbacksMapper.toPrisma(feedback),
    });
  }

  public async findByVideoId({
    videoId,
    limit,
    page,
  }: IFindByVideoIdProps): Promise<IFindyByVideoIdResponse> {
    const [total, feedbacks] = await this.prismaClient.$transaction([
      this.prismaClient.feedback.count({
        where: { videoId: videoId.toValue },
      }),
      this.prismaClient.feedback.findMany({
        where: { videoId: videoId.toValue },
        take: limit,
        skip: (page - 1) * limit,
      }),
    ]);

    const feedbacksEntity = feedbacks.map(PrismaFeedbacksMapper.toDomain);
    return {
      feedbacks: feedbacksEntity,
      total,
    };
  }
}
