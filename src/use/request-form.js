import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm(fn) {
    const {isSubmitting, handleSubmit} = useForm({
            initialValues: {
                status: 'active'
            }
        }
    )

    const {value: name, errorMessage: eName, handleBlur: nameBlur} = useField(
        'name',
        yup.string()
            .trim()
            .required('Provide the name of client')
    )
    const {value: phone, errorMessage: ePhone, handleBlur: phoneBlur} = useField(
        'phone',
        yup.string()
            .trim()
            .required('Phone number cannot be empty')
    )
    const {value: amount, errorMessage: eAmount, handleBlur: amountBlur} = useField(
        'amount',
        yup.number()
            .required('Provide the correct amount')
            .min(100, 'Seems like amount is less than 100, please check')
    )
    const {value: status} = useField('status')

    const onSubmit = handleSubmit(fn)

    return {
        status,
        isSubmitting,
        onSubmit,
        name,
        nameBlur,
        eName,
        phone,
        amount,
        ePhone,
        phoneBlur,
        eAmount,
        amountBlur
    }
}