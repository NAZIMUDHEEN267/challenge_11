
import axios from "axios";


async function imgApi(searchItem) {
    const imgUrl = `https://api.pexels.com/v1/search?query=${searchItem}`;

    try {

        const imgJson = await axios.get(imgUrl, { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV"});
        const imgData = await JSON.parse(imgJson);
        console.log(imgData);
        return imgData;

    } catch (error) {

        return error;
    }
}

async function videoApi() {
    const videoUrl = `https://api.pexels.com/videos/search?query=${searchItem}`;

    try {
        const videoJson = await axios.get(videoUrl, { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV" });
        const videoData = await JSON.parse(videoJson);

        return videoData;
    } catch (error) {
        return error;
    }
}

export { imgApi, videoApi };