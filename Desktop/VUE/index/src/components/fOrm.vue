<template>
<div class="form-nor">
    <form @submit.prevent="subVal">
Name: <input type="text" v-model="employee.name"><br>
Email: <input type="text" v-model="employee.email">
<br>
<button>Click</button>

    </form>
</div>    
</template>
<script>
export default {
    name:'form-nor'
    ,
    data(){
        return{
            employee:{
                name:'',
                email:''
            }
        }
    },
    methods:{
        subVal(){
            this.$emit('add.employee',this.employee)
        }
    }
}
</script>

<style scoped>

</style>