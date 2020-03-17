export async function filteredFetch(url, option) {
    return await fetch(
        url, option
    ).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText || 'Unknow error');
        }
        return response.json();
    }).then(json => {

        console.log(json.response_code);
        if (json.response_code != "00") {
            console.log(option);
            console.log(json.data);
            console.log('woiiiiii erro');
            throw new Error(json.message || 'Unknow error')
        }
        console.log('woiiiiii');
        return json.data;
    });

}