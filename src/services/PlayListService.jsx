import { PlayList } from "../utils/PlayList";

export const PlayListService = (requestConfig) => {
    switch (requestConfig.url) {
        case "/getPlayList":
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({ data: PlayList });
                }, 1 * 1000);
            });
            break;
        default:
            break;

    }
}