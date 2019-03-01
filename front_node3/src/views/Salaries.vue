<template lang="html">
    <div class="all-salaries">

        <table>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Mail</th>
                <th>Position</th>
            </tr>

            <tr v-for="salarie in salaries" :key="salarie">
                <td>{{salarie.name}}</td>
                <td>{{salarie.firstname}}</td>
                <td>{{salarie.mail}}</td>
                <td>{{salarie.position}}</td>
                <td><a v-bind:href="'/Salaries-details/' + salarie._id">Détails</a></td>
                <td><a v-bind:href="'/Salaries-edit/' + salarie._id">Modifier</a></td>
                <td><button type="button" name="button" v-on:click="del(salarie._id)"> Supprimer</button></td>
            </tr>
        </table>

        <a href="/Salaries/create"> Créer nouveau salarié</a>

    </div>
</template>

<script>
    import SalariesService from '@/services/SalariesService.vue'

    export default {
        name: 'salariesComponent',
        data () {
            return {
                salaries: []
            }
        },
        created() {
            SalariesService.getSalaries()
                .then((data) => {
                    this.salaries = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                SalariesService.deleteSalarie(id);
                this.$router.go();
            }
        }
    }
</script>