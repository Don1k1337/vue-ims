const currFormatter = new Intl.NumberFormat('ru-RU', {currency: 'USD', style: 'currency'})

export function currency(value) {
    return currFormatter.format(value)
}