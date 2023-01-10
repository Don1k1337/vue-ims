import axios from 'axios';

const apiKey = process.env.VUE_APP_EXC_KEY
const apiUrl = process.env.VUE_APP_EXC_URL
export const resultedValue = []
const fetchData = async (to, from, amount) => {
    try {
        const response = await axios({
            method: 'get',
            url: `${apiUrl}?to=${to}&from=${from}&amount=${amount}`,
            headers: {
                apiKey: apiKey
            }
        })
        const resultedObj = await response.data
        resultedValue.push(resultedObj)
    } catch(e) {
        console.log(e.message)
    }
}

export default fetchData
