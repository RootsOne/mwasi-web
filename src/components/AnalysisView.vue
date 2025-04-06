<template>
    <div>
        <TabContent>
            <template v-slot:title>Analyses</template>
            <template v-slot:subtitle>Below is your summary recap.</template>
            <template v-slot:intermediate>
                <div class="flex items-center space-x-20 pb-16">
                    <img class="mask-group-2 mb-4" src="/face.png" />
                    <div>
                        <h2 class="font-bold text-4xl pb-4">Bouh Ivanna Angelle</h2>
                        <div class="flex gap-20">
                            <div class="text-sm">
                                <span class="block font-semibold text-zinc-900">
                                    Lieu de naissance
                                </span>
                                <span class="block font-medium text-zinc-600">
                                    Mvog Ada, Yaoundé
                                </span>
                            </div>
                            <div class="text-sm">
                                <span class="block font-semibold text-zinc-900">
                                    Statut matrimoniale
                                </span>
                                <span class="block font-medium text-zinc-600">
                                    Célibataire
                                </span>
                            </div>
                            <div class="text-sm">
                                <span class="block font-semibold text-zinc-900">
                                    Niveau d’études
                                </span>
                                <span class="block font-medium text-zinc-600">
                                    BAC
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:col1>
                <div class="space-y-12">
                    <div class="space-y-2 py-2 border-b border-zinc-200">
                        <h2 class="text-2xl font-bold text-zinc-900 mb-4">Antécédents Obstétricale </h2>
                        <ResultItem name="Nombre de grossesses" value="13"
                            description="Après 7 grosses vous pouvez être exposé à cheminiskatophibie. Consultez un gynecologue."
                            status="bad" />
                        <ResultItem name="Nombre d'accouchement a terme" value="13" description="" status="good" />
                        <ResultItem name="Nombre de prématuré" value="Aucun" description="" status="good" />
                        <ResultItem name="Nombre d'IVG" value="Aucune" description="" status="good" />
                        <ResultItem name="Nombre d'enfants vivants" value="12" description="" status="good" />
                    </div>
                    <div class="space-y-2 py-2 border-b border-zinc-200 mb-4">
                        <h2 class="text-2xl font-bold text-zinc-900">Antécédents Toxicologiques </h2>
                        <ResultItem name="Consommation d'alcool" value="Non" />
                        <ResultItem name="Consommation de tabac" value="Non" description="" status="good" />
                        <ResultItem name="Consommation de drogue" value="Non" description="" status="good" />
                        <ResultItem name="Tabagisme du partenaire" value="Oui"
                            description="Le tabagisme du partenaire peux vous affecter." status="attention" />
                        <ResultItem name="Proximité avec des produits chimiques" value="Syphilis, Hépatite C"
                            description="" status="good" />
                    </div>
                    <div class="space-y-2 py-2 border-b border-zinc-200 mb-4">
                        <h2 class="text-2xl font-bold text-zinc-900">Antécédents Familiaux </h2>
                        <ResultItem name="Hypertension artérielle familiale" value="Non" />
                        <ResultItem name="Diabète" value="Non" description="" status="good" />
                        <ResultItem name="Cancer du sein" value="Non" description="" status="good" />
                    </div>
                </div>

            </template>
            <template v-slot:col2>
                <div class="space-y-2 py-2 border-b border-zinc-200">
                    <h2 class="text-2xl font-bold text-zinc-900 mb-4">Antécédents Gynécologiques </h2>
                    <ResultItem name="Age des premier règles" value="13 ans"
                        description="Vous êtes à risque de cheminiskatophibie. Consultez un gynecologue."
                        status="bad" />
                    <ResultItem name="Nombre de partenaire sexuel cumulé" value="moins de 5" description=""
                        status="good" />
                    <ResultItem name="Notion d’IST" value="Syphilis, Hepatite C"
                        description="la Syphilis est connu pour ses recrudécences. " status="attention" />
                </div>
                <div class="space-y-2 py-2 border-b border-zinc-200 mb-4">
                    <h2 class="text-2xl font-bold text-zinc-900">Antécédents Immunologique </h2>
                    <ResultItem name="Groupe sanguin" value="AB" />
                    <ResultItem name="Rhesus" value="Négatif" description="" status="good" />
                    <ResultItem name="Électrophorèse d'hémoglobine" value="AS"
                        description="Vous et votre conjoint êtes AS. Les risques sont considérables."
                        status="attention" />
                    <ResultItem name="Électrophorèse d'hémoglobine du conjoint" value="AS"
                        description="Vous et votre conjoint êtes AS. Les risques sont considérables."
                        status="attention" />
                    <ResultItem name="Transfusion antérieure" value="Non" description="" status="good" />
                    <ResultItem name="Allergie médicamenteuse" value="Aucune" description="" status="good" />
                </div>
                <div class="space-y-2 py-2 border-b border-zinc-200 mb-4">
                    <h2 class="text-2xl font-bold text-zinc-900">Antécédents Medicaux </h2>
                    <ResultItem name="Pathologie chronique connuee" value="Aucune" />
                </div>
            </template>
            <template v-slot:col3>
                <div class="space-y-2 py-2 border-b border-zinc-200">
                    <h2 class="text-2xl font-bold text-zinc-900 mb-4">Antécédents Chirurgicale </h2>
                    <ResultItem name="Utilisation d'une méthode de contraception"
                        value="Hystérectomie, Kystectomie ovarienne" description="" status="good" />
                    <ResultItem name="Césarienne" value="1 fois" description="" status="good" />
                </div>
                <div class="space-y-2 py-2 border-b border-zinc-200 mb-4">
                    <h2 class="text-2xl font-bold text-zinc-900">Antécédents Grossesse </h2>
                    <ResultItem name="Combien de visite avez vous déjà effectuez" value="13 ans" description=""
                        status="good" />
                    <ResultItem name="Qui fais vos visite" value="Sage femme" />
                    <ResultItem name="Ou faites vous vos visites" value="Clinique" description="" status="good" />
                    <ResultItem name="Dormez vous sous une moustiquaire" value="Oui" />
                    <ResultItem name="Prenez vous du fer" value="Oui" />
                    <ResultItem name="Avez vous pris un traitement preventive du paludisme" value="Tous les mois"
                        description="" status="good" />
                    <ResultItem name="Avez vous déjà réalisé des bilans sanguins, urinaire,des selles" value="Oui"
                        description="" status="good" />
                    <ResultItem name="Avez vous déjà réalisé une échographie" value="Oui" description=""
                        status="good" />
                </div>
            </template>
        </TabContent>
    </div>
</template>
<script setup lang="ts">
import TabContent from '@/components/ui/TabContent.vue'
import ResultItem from '@/components/ui/ResultItem.vue'
</script>
