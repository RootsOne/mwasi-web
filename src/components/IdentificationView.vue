<template>
    <div>
        <TabContent>
            <template v-slot:title>Identification</template>
            <template v-slot:subtitle>Tell us a little more about you.</template>
            <template v-slot:intermediate>
                <img class="mask-group-2 mb-4" src="/face.png" />
            </template>
            <template v-slot:col1>
                <InputItem name="Nom" value="Njogab Rodéric" />
                <InputItem name="Lieu de naissance" value="Mvog Ada, Yaoundé" />
            </template>
            <template v-slot:col2>
                <InputItem name="Age" value="21" />
                <InputItem name="Statut matrimoniale" value="Célibataire" />
            </template>
            <template v-slot:col3>
                <InputItem name="Niveau d’études" value="BAC" />
            </template>
        </TabContent>
    </div>
</template>
<script setup lang="ts">
import TabContent from '@/components/ui/TabContent.vue'
import InputItem from '@/components/ui/InputItem.vue'
</script>
