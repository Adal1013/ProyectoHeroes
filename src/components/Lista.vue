<template>
    <div class="list">
        <el-row>
            <el-col class="custom-col" :span="6" :offset="2" v-for="(heroe, index) in heroes" :key="index+heroe.id">
                <heroe :id="Number(heroe.id)" :title="heroe.name" :url="heroe.url" @removeHeroe="removeHeroe"></heroe>
            </el-col> 
        </el-row>
    </div>
</template>    

<script>
import Heroe from './Heroe.vue'
import {mapState, mapActions} from 'vuex'

export default {
    name: 'lista',
    components: {
        Heroe
    },
    computed: {
        ...mapState(['heroes'])
    },
    methods: {
        ...mapActions(['initalLoadHeroes', 'deleteHeroe']),

        removeHeroe(id) {
            let index = this.heroes.findIndex((heroe) => heroe.id === id);   
            this.deleteHeroe(index)
        }
    },
    created() {
        this.initalLoadHeroes()
    },  
}
</script>
<style scoped>
    .list {
        margin-right: 10px;
    }

    .custom-col{
        margin-top: 20px;
    }
</style>
