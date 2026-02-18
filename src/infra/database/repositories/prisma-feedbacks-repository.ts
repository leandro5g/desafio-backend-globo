import { PrismaClient } from "../../../../generated/prisma/client";
import { Feedback } from "../../../domain/enterprise/entities/feedback";
import {
  IFeedbacksRepository,
  IFindByVideoIdProps,
} from "../../../domain/enterprise/repositories";
import { PrismaFeedbacksMapper } from "../mappers/prisma-feedbacks.mapper";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  constructor(
    private readonly prismaClient: PrismaClient, 
  ) {}

  public async create(feedback: Feedback): Promise<void> {
    await this.prismaClient.feedback.create({
      data: PrismaFeedbacksMapper.toPrisma(feedback),
    });
  }

  public async findByVideoId({
    videoId,
    limit,
    page,
  }: IFindByVideoIdProps): Promise<Feedback[]> {
    const feedbacks = await this.prismaClient.feedback.findMany({
      where: { videoId: videoId.toValue },
      take: limit,
      skip: (page - 1) * limit,
    });

    return feedbacks.map(PrismaFeedbacksMapper.toDomain);
  }
}
