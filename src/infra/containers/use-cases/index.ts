import { Token } from "typedi";
import { FetchVideosUseCase } from "../../../domain/aplication/use-cases/video/fetch-videos";
import { CreateFeedbackUseCase } from "../../../domain/aplication/use-cases/feedback/create-feedback";
import { FetchFeedbacksByVideoIdUseCase } from "../../../domain/aplication/use-cases/feedback/fetch-feedbacks-by-video-id";

export const FETCH_VIDEOS_USE_CASE_TOKEN = new Token<FetchVideosUseCase>(
  "IFetchVideosUseCase",
);
export const CREATE_FEEDBACK_USE_CASE_TOKEN = new Token<CreateFeedbackUseCase>(
  "ICreateFeedbackUseCase",
);

export const FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN = new Token<FetchFeedbacksByVideoIdUseCase>(
  "IFetchFeedbacksByVideoIdUseCase",
);

export const useCaseMap = new Map<Token<unknown>, unknown>([
  [FETCH_VIDEOS_USE_CASE_TOKEN, FetchVideosUseCase],
  [CREATE_FEEDBACK_USE_CASE_TOKEN, CreateFeedbackUseCase],
  [FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN, FetchFeedbacksByVideoIdUseCase],
]);
