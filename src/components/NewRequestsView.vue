<template>
    <div class="w-full h-full tab-card px-5 py-5 space-y-6">
        <div class="title-subtitle">
            <div class="title">
                <div class="title-2 capitalize">
                    Nouvelle Requête
                </div>
            </div>
            <div class="p">
                Cochez les plaintes qui correspondent à vos symptômes. <br />
                Entrez ceux qui ne figure pas dans la zone texte ci-dessous.
            </div>
        </div>
        <div class="grid grid-cols-4 gap-5">
            <div class="space-y-3">
                <CheckboxItem name="Douleurs pelvienne aiguë" />
                <CheckboxItem name="Douleur pelvienne chronique" />
                <CheckboxItem name="Douleur lors des règles" />
                <CheckboxItem name="Douleurs lors des rapports sexuels" />
                <CheckboxItem name="Douleur des seins" />
                <CheckboxItem name="Retard des règles" />
                <CheckboxItem name="Règles abondantes" />
                <CheckboxItem name="Règles de faible quantité" />
                <CheckboxItem name="Règles de longue durée (plus de 6 jours)" />
                <CheckboxItem name="Cycle menstruel irrégulier" />
            </div>
            <div class="space-y-3">
                <CheckboxItem name="Perte vaginale abondante" />
                <CheckboxItem name="Perte vaginale mal odorante " />
                <CheckboxItem name="IST à répétition" />
                <CheckboxItem name="Masse mammaire" />
                <CheckboxItem name="Masse pelvienne" />
                <CheckboxItem name="Masse vaginale" />
                <CheckboxItem name="Douleur des seins" />
                <CheckboxItem name="Desire de conception" />
                <CheckboxItem name="Trouble de la sexualité" />
                <CheckboxItem name="Violence sexuel" />
                <CheckboxItem name="Conseil gynécologique" />
            </div>
            <div class="space-y-3">
                <CheckboxItem name="Nausées" />
                <CheckboxItem name="Vomissements" />
                <CheckboxItem name="Constipation" />
                <CheckboxItem name="Hémorroïdes" />
                <CheckboxItem name="Fatigue" />
                <CheckboxItem name="Manque d'appétit" />
                <CheckboxItem name="Saignement sur grossesse" />
                <CheckboxItem name="Douleur pelvienne" />
                <CheckboxItem name="Douleur du dos" />
                <CheckboxItem name="Céphalées" />
                <CheckboxItem name="Flou visuel" />
            </div>
            <div class="space-y-3">
                <CheckboxItem name="Douleur à l' estomac" />
                <CheckboxItem name="Urine fréquente" />
                <CheckboxItem name="Douleur à la miction" />
                <CheckboxItem name="Les oedemes des membres inferieures" />
                <CheckboxItem name="Perte vaginale abondante" />
                <CheckboxItem name="Difficulté à respirer" />
                <CheckboxItem name="Diminution des mouvements du bébé" />
                <CheckboxItem name="Mouvement excessif du bébé" />
                <CheckboxItem name="Absence de mouvement du bébé" />
                <CheckboxItem name="Fièvre" />
            </div>
        </div>
        <div class="flex flex-col items-center justify-center space-y-6">
            <Textarea placeholder="Autres plaintes ou questions à signaler" class="max-w-2xl h-64" />
            <RouterLink :to="{ name: 'chat' }" class="button w-auto mx-auto">
                Soumettre
            </RouterLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckboxItem from '@/components/ui/CheckboxItem.vue';
import { Textarea } from '@/components/ui/textarea';

</script>
