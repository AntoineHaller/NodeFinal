<template lang="html">
    <div class="all-projects">

        <table>
            <tr>
                <th>Nom</th>
                <th>Date de début</th>
                <th>Date de fin</th>
                <th>Statut</th>
            </tr>

            <tr v-for="project in projects" :key="project">
                <td>{{project.name}}</td>
                <td>{{project.startDate}}</td>
                <td>{{project.endDate}}</td>
                <td>{{project.status}}</td>
                <td><a v-bind:href="'/Projets-details/' + project._id">Détails</a></td>
                <td><a v-bind:href="'/Projets-edit/' + project._id">Modifier</a></td>
                <td><button type="button" name="button" v-on:click="del(project._id)"> Supprimer</button></td>
            </tr>
        </table>

        <a href="/Projets/create"> Créer nouveau projet</a>

    </div>
</template>

<script>
    import ProjectsService from '@/services/ProjectsService.vue'

    export default {
        name: 'ProjectsComponent',
        data () {
            return {
                projects: []
            }
        },
        created() {
            ProjectsService.getProjects()
                .then((data) => {
                    this.projects = data;
                })
                .catch(error => {console.log(error)});
        },
        methods: {
            del:function (id) {
                ProjectsService.deleteProject(id);
                this.$router.go();
            }
        }
    }
</script>
