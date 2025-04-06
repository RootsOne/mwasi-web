<template>
    <div class="flex w-full bg-white px-10 py-2 border-b mb-4">
        <div class="mr-auto right -mt-10 -ml-10">
            <div class="flex gap-4 items-center">
                <img class="mask-group" src="/face.png" />
                <p class="font-semi-bold text-zinc-900 text-lg">
                    Dr. Talla Manjip
                </p>
            </div>
        </div>
    </div>
    <div class="w-full h-full tab-card px-5 py-5 space-y-6">
        <div class="title-subtitle">
            <div class="title">
                <div class="title-2 capitalize text-center">
                    Requête
                </div>
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
                <CheckboxItem name="Les oedemes des membres inférieures" />
                <CheckboxItem name="Perte vaginale abondante" />
                <CheckboxItem name="Difficulté à respirer" />
                <CheckboxItem name="Diminution des mouvements du bébé" />
                <CheckboxItem name="Mouvement excessif du bébé" />
                <CheckboxItem name="Absence de mouvement du bébé" />
                <CheckboxItem name="Fièvre" />
            </div>
        </div>
        <p class="text-zinc-700 text-sm">
            En plus J’ai des douleurs permanentes au bassin qui s’intensifie quand je me baisse.
        </p>
    </div>
    <div class="message-list">
        <div class="frame">
            <img src="/face.png" class="div"></img>
            <div class="frame-2">
                <div class="message-item">
                    <p class="message-content-goes">Okay, I think I understand what’s going on</p>
                </div>
                <div class="message-item">
                    <p class="message-content-goes">Don’t worry you’ll be fine! ✅</p>
                </div>
                <div class="message-item">
                    <p class="message-content-goes">But I’ll need you to run Hepatytis tests</p>
                </div>
            </div>
        </div>
        <div class="frame-3">
            <div class="frame-2">
                <div class="message-content-goes-wrapper">
                    <div class="text-wrapper">Okay, will do</div>
                </div>
            </div>
            <div class="frame-4"></div>
        </div>
        <div class="frame">
            <div class="frame-5"></div>
            <div class="frame-2">
                <div class="message-item mt-3">
                    <div class="message-content-goes">Great!</div>
                </div>
                <div class="message-item">
                    <p class="message-content-goes">I&#39;ll be there in 2 mins ⏰</p>
                </div>
            </div>
        </div>
        <div class="frame-3">
            <div class="frame-6">
                <div class="message-content-goes-wrapper">
                    <div class="text-wrapper">woohoooo</div>
                </div>
                <div class="message-content-goes-wrapper">
                    <div class="text-wrapper">Haha oh man</div>
                </div>
                <div class="message-content-goes-wrapper">
                    <div class="text-wrapper">Haha that&#39;s terrifying 😂</div>
                </div>
            </div>
            <div class="frame-7"></div>
        </div>
        <div class="frame">
            <div class="frame-8"></div>
            <div class="frame-2">
                <div class="message-item">
                    <div class="message-content-goes">aww</div>
                </div>
                <div class="message-item">
                    <div class="message-content-goes">omg, this is amazing</div>
                </div>
                <div class="message-item">
                    <div class="message-content-goes">woohoooo 🔥</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckboxItem from '@/components/ui/CheckboxItem.vue';
</script>
