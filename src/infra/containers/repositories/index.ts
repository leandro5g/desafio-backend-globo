import { Token, Container } from "typedi";
import type {
  IFeedbacksRepository,
  IVideosRepository,
} from "../../../domain/enterprise/repositories";
import { PrismaClient } from "../../../../generated/prisma/client";
import { PrismaVideosRepository } from "../../database/repositories/prisma-videos-repository";
import { PrismaFeedbacksRepository } from "../../database/repositories/prisma-feedbacks-repository";
import { prisma } from "../../database/prisma/client";

export const VIDEOS_REPOSITORY_TOKEN = new Token<IVideosRepository>("IVideosRepository");
export const FEEDBACKS_REPOSITORY_TOKEN = new Token<IFeedbacksRepository>("IFeedbacksRepository");

export const PRISMA_CLIENT_TOKEN = new Token<PrismaClient>("PrismaClient");

Container.set(PRISMA_CLIENT_TOKEN, prisma);

Container.set(
  VIDEOS_REPOSITORY_TOKEN,
  new PrismaVideosRepository(Container.get(PRISMA_CLIENT_TOKEN)),
);

Container.set(
  FEEDBACKS_REPOSITORY_TOKEN,
  new PrismaFeedbacksRepository(Container.get(PRISMA_CLIENT_TOKEN)),
);

