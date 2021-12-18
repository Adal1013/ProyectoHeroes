<template>
    <div class="search">
        <el-row>
            <el-col :span="20">
                <el-input placeholder="BUSCAR POR PODER" type="text" v-model="power" clearable @clear="cleanSearch"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="info" class="custon-margin-btn" @click="search">Buscar</el-button>
            </el-col>
        </el-row>
    </div>
</template>    

<script>
export default {
    name: 'buscador',
    data () {
        return {
            power: null,
        }
    },
    methods: {
        search() {
            this.$emit('findHeroeByPower', this.power)
        },

        cleanSearch() {
            this.$emit('clearPowerSearch')
        }
    }
}
</script>
<style scoped>
    .search {
        margin-bottom: 50px;
    }
    .custon-margin-btn {
        margin-left: 5px;
    }
</style>
