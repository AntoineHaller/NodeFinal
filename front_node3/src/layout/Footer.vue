<template>
    <div id="footer">
        <span>ICI C'EST LE FOOTER</span>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style>
    #footer {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-weight: bolder;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: rebeccapurple;
        margin-top: 20px;
    }
</style>
