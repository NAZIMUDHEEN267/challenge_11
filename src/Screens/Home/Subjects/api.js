
import axios from "axios";


async function imgApi(searchItem) {
    const imgUrl = `https://api.pexels.com/v1/search?query=${searchItem}`;

    try {

        const jsonData = await fetch(imgUrl, {
            headers:
                { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV" }
        });

        const data = await jsonData.json();

        return data;

    } catch (error) {
        return error;
    }
}

async function videoApi(searchItem) {
    const videoUrl = `https://api.pexels.com/videos/search?query=${searchItem}`;

    try {
        const jsonData = await fetch(videoUrl, {
            headers:
                { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV" }
        });

        const data = await jsonData.json();

        return data;
    } catch (error) {
        return error;
    }
}

export { imgApi, videoApi };