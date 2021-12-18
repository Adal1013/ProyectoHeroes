<template>
<div>
    <el-container>
        <el-row>
            <el-col :span="24">
                <form>
                    <el-input placeholder="ID" v-model="heroeForm.id" type="number"></el-input>
                    <el-input placeholder="NOMBRES" v-model="heroeForm.name"></el-input>
                    <el-input placeholder="PODERES" v-model="heroeForm.power"></el-input>
                    <el-input placeholder="URL FOTO" v-model="heroeForm.url"></el-input>
                    <br><br>
                    <el-button type="success" @click.prevent="saveHeroe">Guardar</el-button>
                </form>
            </el-col>
        </el-row>
    </el-container>
</div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    name: 'agregar',
    data () {
        return {
            heroeForm: {}
        }
    },
    methods: {
        ...mapActions(['addHeroe']),
        
        saveHeroe() {
            this.addHeroe(this.heroeForm).then(response => {
                if (response === false) {
                    alert('ya existe un heroe con ese id')
                } else {
                    this.heroeForm = {}
                }
            }) 
        }        
    },
}
</script>
<style>
</style>

