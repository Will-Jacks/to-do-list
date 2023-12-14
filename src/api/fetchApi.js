async function fetchApi(url) {
    try {
        const returnedApiData = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na solicitação da API. Status: ${response.status}`);
        }

        const data = await returnedApiData.text();

        return data;
    }
    catch (err) {
        console.error(err)
        return null;
    }
}

export default fetchApi;