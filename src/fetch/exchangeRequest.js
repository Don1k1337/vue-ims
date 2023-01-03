const exchangeHeaders = new Headers();
const apiKey = process.env.VUE_APP_EXC_KEY
const apiUrl = process.env.VUE_APP_EXC_URL
exchangeHeaders.append("apikey", apiKey);
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: exchangeHeaders
};
const fetchData = (to, from, amount) => {
    fetch(`${apiUrl}?to=${to}&from=${from}&amount=${amount}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
export default fetchData