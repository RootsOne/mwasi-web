<template>
    <div>
        <TabContent>
            <template v-slot:title>Antécédents obstétricale </template>
            <template v-slot:subtitle>Tell us a little more about you.</template>
            <template v-slot:col1>
                <InputItem name="Nombre de grossesse" value="3" />
                <InputItem name="Nombre d'accouchement a terme" value="2" />
                <InputItem name="Nombre de prématuré" value="1" />
            </template>
            <template v-slot:col2>
                <InputItem name="Nombre de fausse couche" value="Aucun" />
                <InputItem name="Nombre d'IVG" value="Aucune" />
                <InputItem name="Nombre d'enfants vivants" value="3" />
            </template>
            <template v-slot:col3>
                <InputItem name="Age du dernier enfant" value="5" />
                <InputItem name="Nombre d' accouchement par voie basse" value="2" />
                <InputItem name="Nombre de césarienne" value="1" />
            </template>
        </TabContent>
    </div>
</template>
<script setup lang="ts">
import TabContent from '@/components/ui/TabContent.vue'
import InputItem from '@/components/ui/InputItem.vue'
</script>
