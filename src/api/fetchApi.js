async function fetchApi(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro na solicitação da API. Status: ${response.status}`);
        }

        const data = await response.json();

        return { success: true, data };
    }
    catch (err) {
        console.error(err)
        return { success: false, error: "Não foi possível se conectar à api" };
    }
}

export default fetchApi;