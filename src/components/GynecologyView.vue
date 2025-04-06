<template>
    <div>
        <TabContent>
            <template v-slot:title>Antécédents gynécologiques </template>
            <template v-slot:subtitle>Tell us a little more about you.</template>
            <template v-slot:col1>
                <InputItem name="Age des premier règles" value="13" />
                <InputItem name="Durée du cycle" value="28" />
                <InputItem name="Durée des règles" value="13" />
                <InputItem name="Douleur lors des réglé (oui ou non)" value="Non" />
                <CheckboxItem name="Douleur lors des règles" />
            </template>
            <template v-slot:col2>
                <SelectItem name="Age au premier rapport" value="Moins de 18 ans"
                    :options="['Moins de 18 ans', 'Plus de 18 ans']" />
                <SelectItem name="Nombre de partenaire sexuel cumulé" value="Moins de 5"
                    :options="['Moins de 5', 'Plus de 5']" />
                <SwitchItem name="Notion d’IST" />
                <CheckboxItem name="Chlamydia" />
                <CheckboxItem name="Syphilis" />
                <CheckboxItem name="Gonorrhée" />
                <CheckboxItem name="Hépatite B" />
                <CheckboxItem name="Hépatite C" />
                <CheckboxItem name="VIH" />

            </template>
            <template v-slot:col3>
                <SwitchItem name="Utilisation d'une méthode de contraception" />
                <CheckboxItem name="Pilule contraceptives" />
                <CheckboxItem name=" Implant contraceptives" />
                <CheckboxItem name="Injection contraceptives" />
                <CheckboxItem name="Stérilet" />
                <CheckboxItem name="Pilule du lendemain" />
                <CheckboxItem name="Préservatif" />
                <SwitchItem name="Utilisation d'une méthode de contraception" />
                <RadioItem name="Dépistage contre le cancer du sein ou du col de l'utérus" value="Plus de 3 ans"
                    :options="['Plus de 3 ans', 'Moins de 3 ans']" />
            </template>
        </TabContent>
    </div>
</template>
<script setup lang="ts">
import TabContent from '@/components/ui/TabContent.vue'
import InputItem from '@/components/ui/InputItem.vue'
import CheckboxItem from '@/components/ui/CheckboxItem.vue'
import SelectItem from '@/components/ui/SelectItem.vue'
import SwitchItem from '@/components/ui/SwitchItem.vue'
import RadioItem from '@/components/ui/RadioItem.vue'

</script>
