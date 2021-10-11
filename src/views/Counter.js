import { ref } from '@vue/composition-api'

function counterIncrement(value){
    const counter = ref(value);
    function add(){
        counter.value++
    }
    return {counter, add}
}

export default {counterIncrement}