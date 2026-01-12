<template>
 <taBle employees="employees"/>
 <fOrm $add.employee="addNew"/>
</template>

<script>
import taBle from './components/taBle.vue'
import fOrm from './components/fOrm.vue'
export default {
  name: 'App',
  components: {
  taBle,fOrm
  },data(){
    return{
      employees:[{
        id:1,
        name:'navin',
        email:'ucgnavi02@gmail.com'
      },
    {
      id:2,
      name:'raja',
      email:'rajagmail.com'
    }]
  }
},
   
    methods:{
      addNew(employee){
   this.employees=[...this.employees,employee]

      }
    }
  }
    
  
</script>

<style>

</style>
