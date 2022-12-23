import {useField, useForm} from "vee-validate";
import * as yup from "yup";
import {computed, watch} from "vue";

export function useLoginForm() {
    const {handleSubmit, isSubmitting, submitCount} = useForm()
    const {value: email, errorMessage: eError, handleBlur: eBlur} = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Please check that the email field is filled in correctly')
            .email('Note, you need to specify the correct address of your email')
    )
    const PWD_MIN_LENGTH = 6
    const {value: password, errorMessage: pError, handleBlur: pBlur} = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Please check that the password field is filled in correctly')
            .min(PWD_MIN_LENGTH,
                `Note, length of your password
                 must have at least ${PWD_MIN_LENGTH} symbols`
            )
    )
    const isTooManyAtempts = computed(() => submitCount.value >= 3)
    watch(isTooManyAtempts, value => {
        if(value) {
            setTimeout(() => submitCount.value = 0, 10000)
        }
    })

    const onSubmit = handleSubmit(values => {
        console.log('Form:', values)
    })
    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAtempts
    }
}