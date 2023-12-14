async function fetchApi(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na solicitação da API. Status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    }
    catch (err) {
        console.error(err)
        return null;
    }
}

export default fetchApi;