<template lang="html">
    <div class="all-clients">

        <table>
            <tr>
                <th>Nom</th>
                <th>Nom du référent</th>
                <th>Mail du référent</th>
                <th>Secteur</th>
            </tr>

            <tr v-for="client in clients" :key="client">
                <td>{{client.businessName}}</td>
                <td>{{client.refName}}</td>
                <td>{{client.refMail}}</td>
                <td>{{client.secteur}}</td>
                <td><a v-bind:href="'/Clients-details/' + client._id">Détails</a></td>
                <td><a v-bind:href="'/Clients-edit/' + client._id">Modifier</a></td>
                <td><button type="button" name="button" v-on:click="del(client._id)"> Supprimer</button></td>
            </tr>
        </table>

        <a href="/Clients/create"> Créer nouveau client</a>

    </div>
</template>

<script>
    import ClientsService from '@/services/ClientsService.vue'

    export default {
        name: 'clientsComponent',
        data () {
            return {
                clients: []
            }
        },
        created() {
            ClientsService.getClients()
                .then((data) => {
                    this.clients = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                ClientsService.deleteClient(id);
                this.$router.go();
            }
        }
    }
</script>