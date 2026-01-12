<template>
<div class="table-main">
    <table border="all border">
        <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.name }}</td>
            <td>{{ employee.email }}</td>
        </tr>
    </table>
</div>


</template>
<script>
export default {
    name:'table-main',
    
   props:{
        employees:Array()
    }
}

</script>
<style scoped>


</style>