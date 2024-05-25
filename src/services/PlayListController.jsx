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