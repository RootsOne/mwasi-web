<template>
    <div>
        <TabContent>
            <template v-slot:title>Antécédents chirurgicale</template>
            <template v-slot:subtitle>Tell us a little more about you.</template>
            <template v-slot:col1>
                <SwitchItem name="Utilisation d'une méthode de contraception" />
                <CheckboxItem name="Myomectomie" />
                <CheckboxItem name="Hystérectomie" />
                <CheckboxItem name="Kystectomie ovarienne" />
                <CheckboxItem name="Chirurgie endoscopique" />
                <CheckboxItem name="Chirurgie mammaire" />
                <CheckboxItem name="Autres" />
                <InputItem class="-mt-4" name="" value="Préciser" />
            </template>
            <template v-slot:col2>
                <SwitchItem name="Césarienne" />
                <RadioItem name="Dépistage contre le cancer du sein ou du col de l'utérus" value="1 fois"
                    :options="['1 fois', '2 fois et plus']" />
            </template>
            <template v-slot:col3>
            </template>
        </TabContent>
    </div>
</template>
<script setup lang="ts">
import TabContent from '@/components/ui/TabContent.vue'
import InputItem from '@/components/ui/InputItem.vue'
import CheckboxItem from '@/components/ui/CheckboxItem.vue'
import SwitchItem from '@/components/ui/SwitchItem.vue'
import RadioItem from '@/components/ui/RadioItem.vue'
</script>
