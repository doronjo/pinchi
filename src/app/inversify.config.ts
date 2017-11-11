import { Container } from "inversify";
import "reflect-metadata";
import { REPO_TYPES, SERVICE_TYPES } from "./types";

import { TagRepo, ITagRepo } from "./tag/repo/tag-repo";
import { AttractionRepo, IAttractionRepo } from "./attraction/repo/attraction-repo";

import { TagService, ITagService } from "./tag/tag-service";
import { AttractionService, IAttractionService } from "./attraction/attraction-service";

export const appContainer = new Container();
//bind repositories
appContainer.bind<ITagRepo>(REPO_TYPES.TagRepo).to(TagRepo);
appContainer.bind<IAttractionRepo>(REPO_TYPES.AttractionRepo).to(AttractionRepo);

//bind services
appContainer.bind<ITagService>(SERVICE_TYPES.TagService).to(TagService);
appContainer.bind<IAttractionService>(SERVICE_TYPES.AttractionService).to(AttractionService);