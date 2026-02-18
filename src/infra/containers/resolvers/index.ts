import { Container } from "typedi";
import { VideosResolver } from "../../graphql/resolvers/videos-resolver";
import {
  CREATE_FEEDBACK_USE_CASE_TOKEN,
  FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN,
  FETCH_VIDEOS_USE_CASE_TOKEN,
  REGISTER_VIDEO_USE_CASE_TOKEN,
} from "../use-cases";
import { FeedbacksResolver } from "../../graphql/resolvers/feedbacks-resolver";

Container.set(
  VideosResolver,
  new VideosResolver(
    Container.get(FETCH_VIDEOS_USE_CASE_TOKEN),
    Container.get(REGISTER_VIDEO_USE_CASE_TOKEN),
  ),
);

Container.set(
  FeedbacksResolver,
  new FeedbacksResolver(
    Container.get(CREATE_FEEDBACK_USE_CASE_TOKEN),
    Container.get(FETCH_FEEDBACKS_BY_VIDEO_ID_USE_CASE_TOKEN),
  ),
);
