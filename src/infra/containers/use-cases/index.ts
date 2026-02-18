import { Container, Token } from "typedi";
import { FetchVideosUseCase } from "../../../domain/aplication/use-cases/video/fetch-videos";
import { CreateFeedbackUseCase } from "../../../domain/aplication/use-cases/feedback/create-feedback";
import { FetchFeedbacksByVideoIdUseCase } from "../../../domain/aplication/use-cases/feedback/fetch-feedbacks-by-video-id";
import { RegisterVideoUseCase } from "../../../domain/aplication/use-cases/video/register-video";
import {
  VIDEOS_REPOSITORY_TOKEN,
  FEEDBACKS_REPOSITORY_TOKEN,
} from "../repositories";

export const FETCH_VIDEOS_USE_CASE_TOKEN = new Token<FetchVideosUseCase>(
  "IFetchVideosUseCase",
);
export const CREATE_FEEDBACK_USE_CASE_TOKEN = new Token<CreateFeedbackUseCase>(
  "ICreateFeedbackUseCase",
);

export const FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN =
  new Token<FetchFeedbacksByVideoIdUseCase>("IFetchFeedbacksByVideoIdUseCase");

export const REGISTER_VIDEO_USE_CASE_TOKEN = new Token<RegisterVideoUseCase>(
  "IRegisterVideoUseCase",
);

Container.set(
  FETCH_VIDEOS_USE_CASE_TOKEN,
  new FetchVideosUseCase(Container.get(VIDEOS_REPOSITORY_TOKEN)),
);
Container.set(
  CREATE_FEEDBACK_USE_CASE_TOKEN,
  new CreateFeedbackUseCase(
    Container.get(FEEDBACKS_REPOSITORY_TOKEN),
    Container.get(VIDEOS_REPOSITORY_TOKEN),
  ),
);
Container.set(
  FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN,
  new FetchFeedbacksByVideoIdUseCase(
    Container.get(FEEDBACKS_REPOSITORY_TOKEN),
    Container.get(VIDEOS_REPOSITORY_TOKEN),
  ),
);
Container.set(
  REGISTER_VIDEO_USE_CASE_TOKEN,
  new RegisterVideoUseCase(Container.get(VIDEOS_REPOSITORY_TOKEN)),
);
