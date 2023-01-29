
import axios from "axios";


function apiCall(searchItem) {
    const imgUrl = `https://api.pexels.com/v1/search?query=${searchItem}`;
    const videoUrl = `https://api.pexels.com/videos/search?query=${searchItem}`;

    const dataArray = [];

    fetch(imgUrl,{
        method: "GET",
        headers: { 
            Accept: "application/json",
            Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV"
        }
    }).then(data => data.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    // const videoJson = await axios.get(videoUrl, { Authorization: "KrfYIY24vk1KWGfzLfa82Z5t10bjhxJC5OUU9Rqn2C2ARr0zN0VW5LkV" });

    // const videoData = await JSON.parse(videoJson);

    // dataArray.push(videoData);
    return dataArray;
}

export default apiCall;