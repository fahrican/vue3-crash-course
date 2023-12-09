import {onMounted, reactive} from "vue";

export const useData = () => {
    const data = reactive({
        name: "Ali",
        age: 43
    })

    const setName = () => {
        data.name = "Umair";
    }

    onMounted(() => {
        console.log(data.name);
    })

    return {
        data,
        setName,
        onMounted
    };
};


