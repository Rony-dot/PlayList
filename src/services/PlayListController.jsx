import { PlayListService } from "./PlayListService";

const IS_MOCK = true;

const CallPlayListService = (requestConfig) => {
    return IS_MOCK ? PlayListService(requestConfig) : fetch(requestConfig);
}

export const getPlayList = (requestParams) => {
    return CallPlayListService({
        method: "GET",
        url: "/getPlayList",
        requestParams
    });
}

export const getCompletedCount = (requestParams) => {
    return CallPlayListService({
        method: "GET",
        url: "/getCompletedCount",
        requestParams
    });
}

export const getTotalVideosCount = (requestParams) => {
    return CallPlayListService({
        method: "GET",
        url: "/getTotalVideosCount",
        requestParams
    });
}