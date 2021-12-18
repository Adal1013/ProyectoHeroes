<template>
    <div>
        <span>{{ title }}</span><br>
        <el-avatar class="title" shape="square" :size="150" :src="url"></el-avatar><br>
        <el-button class="float-btn" type="danger" @click="deleteElem">Eliminar</el-button>
    </div>
</template>    

<script>
export default {
    name: 'heroe',
    props: {
        id: Number,
        title: String,
        url: String,
    },
    methods: {
        deleteElem() {
            this.$emit('removeHeroe', this.id)
        }
    }
}
</script>
<style scoped>
    .title{
        margin-top: 3px;
        margin-bottom: 5px;
    }

    .float-btn{
        margin-left: 25px;
    }
</style>
