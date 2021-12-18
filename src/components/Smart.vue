<template>
<div>
    <el-container>
        <el-aside width="100px"></el-aside>
        <el-main>
            <el-row>
                <el-col :span="24">
                    <h1>Tour de Heroes</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <buscador @findHeroeByPower="findHeroeByPower" @clearPowerSearch="clearPowerSearch"></buscador>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-row>
                        <el-col :span="24">
                            <el-button class="custom-btn-add" type="primary" @click="form_visible = true">AGREGAR HEROE</el-button>
                        </el-col>                        
                    </el-row>
                    <lista></lista>                 
                </el-col>
                <el-col :span="8" :offset="4">
                    <template v-if="form_visible">
                        <h5>Agrega Tu Heroe</h5>                    
                        <agregar></agregar>
                    </template>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</div>
</template>

<script>
import Buscador from './Buscador.vue'
import Lista from './Lista.vue'
import Agregar from './Agregar.vue'
import {mapActions} from 'vuex'

export default {
    name: 'smart',
    components: {
        Buscador,
        Lista,
        Agregar
    },     
    data() {
        return {
            form_visible: false,
        }
    },    
    methods: {
        ...mapActions(['searchHeroes', 'restoreHeroesBackup']),

        findHeroeByPower(power) {
            this.searchHeroes(power)
        },

        clearPowerSearch(){
            this.restoreHeroesBackup()
        }
    }
}
</script>
<style>
    .custom-btn-add{
        float: right;
    }
</style>